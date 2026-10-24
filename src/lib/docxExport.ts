/**
 * Експорт тексту протоколу в .docx без зовнішніх залежностей.
 * Оформлення за «Вимогами до оформлення документів» Інструкції з діловодства:
 *  - Times New Roman, 14 пт; поля: ліве 3 см, праве 1 см, верхнє й нижнє 2 см;
 *  - абзац 10 мм, міжрядковий інтервал 1,5 у тексті та 1 у реквізитах;
 *  - слова СЛУХАЛИ / ВИРІШИЛИ / ГОЛОСУВАЛИ без відступу;
 *  - номери сторінок посередині верхнього поля, перша сторінка не нумерується.
 */

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const CM = 567; // twips в 1 см
const TEXT_WIDTH = 21 * CM - 4 * CM; // A4 мінус ліве 3 см та праве 1 см → 17 см
const LINE_SINGLE = 240;
const LINE_15 = 360;

/* ───────── XML абзаців ───────── */

const run = (text: string, bold = false) =>
  `<w:r>${bold ? '<w:rPr><w:b/></w:rPr>' : ''}<w:t xml:space="preserve">${esc(text)}</w:t></w:r>`;

const TAB = '<w:r><w:tab/></w:r>';

interface ParaOpts {
  jc?: 'left' | 'center' | 'both';
  indent?: number; // twips, відступ першого рядка
  line?: number;
  tabs?: { pos: number; val: 'left' | 'center' | 'right' }[];
}

function para(inner: string, o: ParaOpts = {}): string {
  const tabs = o.tabs?.length
    ? `<w:tabs>${o.tabs.map(t => `<w:tab w:val="${t.val}" w:pos="${t.pos}"/>`).join('')}</w:tabs>`
    : '';
  const spacing = `<w:spacing w:before="0" w:after="0" w:line="${o.line ?? LINE_SINGLE}" w:lineRule="auto"/>`;
  const ind = o.indent ? `<w:ind w:firstLine="${o.indent}"/>` : '';
  const jc = `<w:jc w:val="${o.jc ?? 'left'}"/>`;
  return `<w:p><w:pPr>${tabs}${spacing}${ind}${jc}</w:pPr>${inner}</w:p>`;
}

const KEYWORD = /^((?:\d+\.\s+)?(?:СЛУХАЛИ|ВИСТУПИЛИ|ВИРІШИЛИ|УХВАЛИЛИ|ГОЛОСУВАЛИ):)(.*)$/;
const LABEL = /^(Голова|Секретар|Присутні|Відсутні|Запрошені)\s*[–:-]/;
const AGENDA = /^Порядок денний:/;

function lineToParagraph(line: string, idx: number, lines: string[]): string {
  const t = line.trimEnd();
  if (!t.trim()) return para('');

  // заголовок
  if (t.startsWith('ПРОТОКОЛ')) return para(run(t, true), { jc: 'center' });
  if (idx > 0 && lines[idx - 1].startsWith('ПРОТОКОЛ') && /^засідання/i.test(t))
    return para(run(t, true), { jc: 'center' });

  // кілька колонок, розділених 3+ пробілами (дата/місце/початок, підписи)
  const cols = t.trim().split(/\s{3,}/);
  if (cols.length >= 2) {
    const isSign = cols.some(c => /_{4,}/.test(c));
    const tabs: ParaOpts['tabs'] = isSign
      ? [
          { pos: Math.round(8 * CM), val: 'left' },
          { pos: Math.round(12.5 * CM), val: 'left' }, // розшифрування підпису – 125 мм
        ]
      : [
          { pos: Math.round(TEXT_WIDTH / 2), val: 'center' },
          { pos: TEXT_WIDTH, val: 'right' },
        ];
    const inner = cols.map((c, i) => (i ? TAB : '') + run(c)).join('');
    return para(inner, { tabs });
  }

  // СЛУХАЛИ / ВИРІШИЛИ / ГОЛОСУВАЛИ – без відступу
  const kw = KEYWORD.exec(t);
  if (kw) return para(run(kw[1], true) + (kw[2] ? run(kw[2]) : ''), { line: LINE_15, jc: 'both' });

  // «Порядок денний:» від межі лівого поля
  if (AGENDA.test(t)) return para(run(t, true), { line: LINE_15 });

  // реквізити вступної частини – без відступу
  if (LABEL.test(t)) return para(run(t), { line: LINE_15, jc: 'both' });

  // звичайний текст – абзац 10 мм, інтервал 1,5
  return para(run(t), { indent: CM, line: LINE_15, jc: 'both' });
}

/* ───────── Частини docx ───────── */

const NS =
  'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ' +
  'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"';
const XML = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

function buildFiles(text: string): { name: string; data: string }[] {
  const lines = text.replace(/\r\n?/g, '\n').split('\n');
  const body = lines.map((l, i) => lineToParagraph(l, i, lines)).join('');

  const sect =
    `<w:sectPr><w:headerReference w:type="default" r:id="rId2"/>` +
    `<w:pgSz w:w="11906" w:h="16838"/>` +
    `<w:pgMar w:top="${2 * CM}" w:right="${1 * CM}" w:bottom="${2 * CM}" w:left="${3 * CM}" w:header="709" w:footer="709" w:gutter="0"/>` +
    `<w:titlePg/></w:sectPr>`;

  return [
    {
      name: '[Content_Types].xml',
      data:
        `${XML}<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">` +
        `<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>` +
        `<Default Extension="xml" ContentType="application/xml"/>` +
        `<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>` +
        `<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>` +
        `<Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/>` +
        `</Types>`,
    },
    {
      name: '_rels/.rels',
      data:
        `${XML}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">` +
        `<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>` +
        `</Relationships>`,
    },
    {
      name: 'word/_rels/document.xml.rels',
      data:
        `${XML}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">` +
        `<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>` +
        `<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/>` +
        `</Relationships>`,
    },
    {
      name: 'word/styles.xml',
      data:
        `${XML}<w:styles ${NS}><w:docDefaults><w:rPrDefault><w:rPr>` +
        `<w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman" w:eastAsia="Times New Roman"/>` +
        `<w:sz w:val="28"/><w:szCs w:val="28"/><w:lang w:val="uk-UA" w:eastAsia="uk-UA" w:bidi="ar-SA"/>` +
        `</w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="0" w:line="240" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>` +
        `<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>` +
        `<w:style w:type="paragraph" w:styleId="Header"><w:name w:val="header"/><w:basedOn w:val="Normal"/></w:style>` +
        `</w:styles>`,
    },
    {
      // номер сторінки посередині верхнього поля (на першій сторінці – не показується)
      name: 'word/header1.xml',
      data:
        `${XML}<w:hdr ${NS}><w:p><w:pPr><w:pStyle w:val="Header"/><w:jc w:val="center"/></w:pPr>` +
        `<w:r><w:fldChar w:fldCharType="begin"/></w:r>` +
        `<w:r><w:instrText xml:space="preserve"> PAGE </w:instrText></w:r>` +
        `<w:r><w:fldChar w:fldCharType="separate"/></w:r>` +
        `<w:r><w:t>2</w:t></w:r>` +
        `<w:r><w:fldChar w:fldCharType="end"/></w:r></w:p></w:hdr>`,
    },
    {
      name: 'word/document.xml',
      data: `${XML}<w:document ${NS}><w:body>${body}${sect}</w:body></w:document>`,
    },
  ];
}

/* ───────── Мінімальний ZIP (без стиснення) ───────── */

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function zip(files: { name: string; data: Uint8Array }[]): Uint8Array {
  const enc = new TextEncoder();
  const now = new Date();
  const dosTime = (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1);
  const dosDate = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();

  const chunks: Uint8Array[] = [];
  const central: Uint8Array[] = [];
  let offset = 0;

  const push = (arr: Uint8Array) => {
    chunks.push(arr);
    offset += arr.length;
  };

  for (const f of files) {
    const name = enc.encode(f.name);
    const crc = crc32(f.data);
    const size = f.data.length;

    const local = new DataView(new ArrayBuffer(30));
    local.setUint32(0, 0x04034b50, true);
    local.setUint16(4, 20, true);
    local.setUint16(6, 0x0800, true); // UTF-8 імена
    local.setUint16(8, 0, true); // stored
    local.setUint16(10, dosTime, true);
    local.setUint16(12, dosDate, true);
    local.setUint32(14, crc, true);
    local.setUint32(18, size, true);
    local.setUint32(22, size, true);
    local.setUint16(26, name.length, true);
    local.setUint16(28, 0, true);

    const cd = new DataView(new ArrayBuffer(46));
    cd.setUint32(0, 0x02014b50, true);
    cd.setUint16(4, 20, true);
    cd.setUint16(6, 20, true);
    cd.setUint16(8, 0x0800, true);
    cd.setUint16(10, 0, true);
    cd.setUint16(12, dosTime, true);
    cd.setUint16(14, dosDate, true);
    cd.setUint32(16, crc, true);
    cd.setUint32(20, size, true);
    cd.setUint32(24, size, true);
    cd.setUint16(28, name.length, true);
    cd.setUint32(42, offset, true);

    central.push(new Uint8Array(cd.buffer), name);
    push(new Uint8Array(local.buffer));
    push(name);
    push(f.data);
  }

  const cdStart = offset;
  let cdSize = 0;
  for (const c of central) {
    chunks.push(c);
    cdSize += c.length;
  }
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true);
  end.setUint16(8, files.length, true);
  end.setUint16(10, files.length, true);
  end.setUint32(12, cdSize, true);
  end.setUint32(16, cdStart, true);
  chunks.push(new Uint8Array(end.buffer));

  const total = chunks.reduce((n, c) => n + c.length, 0);
  const out = new Uint8Array(total);
  let pos = 0;
  for (const c of chunks) {
    out.set(c, pos);
    pos += c.length;
  }
  return out;
}

/* ───────── Публічний API ───────── */

export function protocolToDocxBytes(text: string): Uint8Array {
  const enc = new TextEncoder();
  return zip(buildFiles(text).map(f => ({ name: f.name, data: enc.encode(f.data) })));
}

export function protocolToDocxBlob(text: string): Blob {
  return new Blob([protocolToDocxBytes(text)], {
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  });
}
