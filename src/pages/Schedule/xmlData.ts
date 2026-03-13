export const xmlData = `
<timetable ascttversion="2021.6.2" importtype="database" options="export:idprefix:%CHRID,import:idprefix:%TEMPID,groupstype1,decimalseparatordot,lessonsincludeclasseswithoutstudents,handlestudentsafterlessons" defaultexport="1" displayname="aSc Timetables 2012 XML" displaycountries="">
   <periods options="canadd,export:silent" columns="period,name,short,starttime,endtime">
      <period name="1" short="1" period="1" starttime="8:30" endtime="9:15"/>
      <period name="2" short="2" period="2" starttime="9:40" endtime="10:25"/>
      <period name="3" short="3" period="3" starttime="10:55" endtime="11:40"/>
      <period name="4" short="4" period="4" starttime="11:50" endtime="12:35"/>
      <period name="5" short="5" period="5" starttime="12:45" endtime="13:30"/>
      <period name="6" short="6" period="6" starttime="13:40" endtime="14:25"/>
      <period name="7" short="7" period="7" starttime="14:35" endtime="15:20"/>
   </periods>
   <daysdefs options="canadd,export:silent" columns="id,days,name,short">
      <daysdef id="13B479A9FBE75499" name="У будь-який день" short="X" days="10000,01000,00100,00010,00001"/>
      <daysdef id="6EFA4173F5ECF8C4" name="Кожен день" short="E" days="11111"/>
      <daysdef id="4925F3E6743E92EA" name="Понеділок" short="Пн" days="10000"/>
      <daysdef id="FF3AC7A6444D0467" name="Вівторок" short="Вт" days="01000"/>
      <daysdef id="8E30B26FF3EE4F62" name="Середа" short="Ср" days="00100"/>
      <daysdef id="985703EF644B591A" name="Четвер" short="Чт" days="00010"/>
      <daysdef id="202099EB80B8A0B4" name="П'ятниця" short="Пт" days="00001"/>
   </daysdefs>
   <weeksdefs options="canadd,export:silent" columns="id,weeks,name,short">
      <weeksdef id="695707D7FB92CA9B" name="Всі тижні" short="Всі" weeks="1"/>
   </weeksdefs>
   <termsdefs options="canadd,export:silent" columns="id,terms,name,short">
      <termsdef id="2AE102E9079D28BB" name="Весь рік" short="Рік" terms="1"/>
   </termsdefs>
   <subjects options="canadd,export:silent" columns="id,name,short,partner_id">
      <subject id="C6AD43C6E314F0FB" name="STEM" short="STEM" partner_id=""/>
      <subject id="83D25DA0E64218C4" name="Іноземна мова" short="Іноз.м." partner_id=""/>
      <subject id="1C17038AFB405A4F" name="Інформатика" short="Інформ." partner_id=""/>
      <subject id="531D8B6F52071795" name="Історія України" short="Іст.Укр." partner_id=""/>
      <subject id="361E23B5929D9979" name="Історія України. Всесвітня історія" short="Істор." partner_id=""/>
      <subject id="E2AFCA7DC330F5F0" name="Алгебра" short="Алг." partner_id=""/>
      <subject id="2906095A2C92F853" name="Астрономія" short="Астр." partner_id=""/>
      <subject id="B7AF0964D1E8A5B5" name="Біологія" short="Біол." partner_id=""/>
      <subject id="1405EB90B0191584" name="Біологія та екологія" short="Біол." partner_id=""/>
      <subject id="D5917778F7741FB1" name="Всесвітня історія" short="Всесв." partner_id=""/>
      <subject id="0ADC4FE2B600F77D" name="Вступ до історії України та громадянської освіти" short="Істор." partner_id=""/>
      <subject id="4998A0B77FAF9465" name="Географія" short="Геогр." partner_id=""/>
      <subject id="5CDB5693265EA612" name="Геометрія" short="Геом." partner_id=""/>
      <subject id="6AB5D3617AF9D48E" name="Громадянська освіта" short="Гром.осв." partner_id=""/>
      <subject id="04466428AF75D73B" name="Дизайн і технології" short="Диз.і.т." partner_id=""/>
      <subject id="3215918EC2F2D5EA" name="Етика" short="Етика" partner_id=""/>
      <subject id="E73BA503AA919BE7" name="Зарубіжна  література" short="Зар.л." partner_id=""/>
      <subject id="2620F2BF77274192" name="Захист України" short="Зах.У." partner_id=""/>
      <subject id="A71A9327E2AFF47C" name="Здоров'я, безпека та добробут" short="Здор." partner_id=""/>
      <subject id="8521129E88BDF2D3" name="Математика" short="Матем." partner_id=""/>
      <subject id="E067312CCE4B0585" name="Мистецтво" short="Мист." partner_id=""/>
      <subject id="1B8879485FA7BC1F" name="Музичне мистецтво" short="Муз.м." partner_id=""/>
      <subject id="579DB070DF80995C" name="Образотворче мистецтво" short="Обр.м." partner_id=""/>
      <subject id="003A21684F3380FD" name="Основи здоровя" short="Осн.зд." partner_id=""/>
      <subject id="7204F551BDA73617" name="Основи правознавства" short="Осн.пр." partner_id=""/>
      <subject id="026AD4F5B1DEF56A" name="Пізнаємо природу" short="Пізн.пр." partner_id=""/>
      <subject id="04132706AA4FDA09" name="Роботототехніка" short="Робот." partner_id=""/>
      <subject id="6342EE4F0B394605" name="Технології" short="Техн." partner_id=""/>
      <subject id="A1A6D0F0B3734CD1" name="Українська література" short="Укр.л." partner_id=""/>
      <subject id="01131A29D286839F" name="Українська мова" short="Укр.м." partner_id=""/>
      <subject id="F7335FAB22D44F49" name="Фізика" short="Фізика" partner_id=""/>
      <subject id="3A39D45237172475" name="Фізична культура" short="Фіз.культ" partner_id=""/>
      <subject id="1D500CAC276C3834" name="Фінансова грамотність" short="Фін.гр." partner_id=""/>
      <subject id="6E9C24DDF8128C35" name="Хімія" short="Хімія" partner_id=""/>
      <subject id="15EA1A8AEEEAF4E0" name="Я досліджую світ" short="ЯДС" partner_id=""/>
      <subject id="F54EF4822535C039" name="Підприємництво і фінансова грамотність" short="Підпр." partner_id=""/>
   </subjects>
   <teachers options="canadd,export:silent" columns="id,name,short,gender,color,email,mobile,partner_id,firstname,lastname">
      <teacher id="045BB455D04AFFDF" firstname="В.Г." lastname="Бабак" name="Бабак В.Г." short="Бабак В.Г." gender="M" color="#31C96A" email="" mobile="" partner_id=""/>
      <teacher id="A633B860F45D0B92" firstname="О.І." lastname="Богдан" name="Богдан О.І." short="Богдан О.І." gender="M" color="#96CEB4" email="" mobile="" partner_id=""/>
      <teacher id="0B4BD65965AF73F1" firstname="О.М." lastname="Брюква" name="Брюква О.М." short="Брюква О.М." gender="M" color="#A8E6CF" email="" mobile="" partner_id=""/>
      <teacher id="A8685BE2945910CA" firstname="П.В." lastname="Бугай" name="Бугай П.В." short="Бугай П.В." gender="M" color="#90EE90" email="" mobile="" partner_id=""/>
      <teacher id="0563E949645A597C" firstname="В.О." lastname="Герасименко" name="Герасименко В.О." short="Герасименко В.О." gender="M" color="#98FB98" email="" mobile="" partner_id=""/>
      <teacher id="ED82ACF33AB2D965" firstname="М.П." lastname="Герасименко" name="Герасименко М.П." short="Герасименко М.П." gender="M" color="#DA70D6" email="" mobile="" partner_id=""/>
      <teacher id="04EC5F61E6BCE7C9" firstname="С.П." lastname="Герасименко" name="Герасименко С.П." short="Герасименко С.П." gender="M" color="#DDA0DD" email="" mobile="" partner_id=""/>
      <teacher id="B8760BAB80D91929" firstname="В.В." lastname="Гиря" name="Гиря В.В." short="Гиря В.В." gender="M" color="#66CDAA" email="" mobile="" partner_id=""/>
      <teacher id="445B9717647E9C95" firstname="Т.М." lastname="Глушко" name="Глушко Т.М." short="Глушко Т.М." gender="M" color="#20B2AA" email="" mobile="" partner_id=""/>
      <teacher id="A5C5B6F205608CEF" firstname="Л.В." lastname="Гнилуша" name="Гнилуша Л.В." short="Гнилуша Л.В." gender="M" color="#6495ED" email="" mobile="" partner_id=""/>
      <teacher id="BA2E9BCD93567EE6" firstname="О.О." lastname="Гнилуша" name="Гнилуша О.О." short="Гнилуша О.О." gender="M" color="#F0A1A8" email="" mobile="" partner_id=""/>
      <teacher id="064571258C23C3E2" firstname="І.В." lastname="Гуща" name="Гуща І.В." short="Гуща І.В." gender="M" color="#7FFFD4" email="" mobile="" partner_id=""/>
      <teacher id="4CE5ED34D91534D9" firstname="М.Г." lastname="Давиденко" name="Давиденко М.Г." short="Давиденко М.Г." gender="M" color="#AFEEEE" email="" mobile="" partner_id=""/>
      <teacher id="E58270295BC36F50" firstname="В.А." lastname="Долиненко" name="Долиненко В.А." short="Долиненко В.А." gender="M" color="#E0FFFF" email="" mobile="" partner_id=""/>
      <teacher id="EB6D5A01431F5EBC" firstname="О.Ю." lastname="Дуденко" name="Дуденко О.Ю." short="Дуденко О.Ю." gender="M" color="#B0E0E6" email="" mobile="" partner_id=""/>
      <teacher id="EA5F97500C53D20F" firstname="В.Ю." lastname="Звєрєв" name="Звєрєв В.Ю." short="Звєрєв В.Ю." gender="M" color="#ADD8E6" email="" mobile="" partner_id=""/>
      <teacher id="9E709A59088055D2" firstname="Г.О." lastname="Зеленська" name="Зеленська Г.О." short="Зеленська Г.О." gender="M" color="#00FA9A" email="" mobile="" partner_id=""/>
      <teacher id="2523A9603ACD8D26" firstname="Н.В." lastname="Зеленська" name="Зеленська Н.В." short="Зеленська Н.В." gender="M" color="#00A0C0" email="" mobile="" partner_id=""/>
      <teacher id="EAFE469500FCDC05" firstname="О.С." lastname="Зеленський" name="Зеленський О.С." short="Зеленський О.С." gender="M" color="#87CEEB" email="" mobile="" partner_id=""/>
      <teacher id="4248EA1473E04BD4" firstname="О.М." lastname="Івахненко" name="Івахненко О.М." short="Івахненко О.М." gender="M" color="#6AC931" email="" mobile="" partner_id=""/>
      <teacher id="3355B8027347AF6B" firstname="О.В." lastname="Йовенко" name="Йовенко О.В." short="Йовенко О.В." gender="M" color="#87CEFA" email="" mobile="" partner_id=""/>
      <teacher id="8BA6AD7D34E06A50" firstname="І.М." lastname="Корж" name="Корж І.М." short="Корж І.М." gender="M" color="#31A8C9" email="" mobile="" partner_id=""/>
      <teacher id="6AD23A8657561770" firstname="Л.В." lastname="Корявець" name="Корявець Л.В." short="Корявець Л.В." gender="M" color="#4ECDC4" email="" mobile="" partner_id=""/>
      <teacher id="9078B81933858453" firstname="Т.М." lastname="Коса" name="Коса Т.М." short="Коса Т.М." gender="M" color="#45B7D1" email="" mobile="" partner_id=""/>
      <teacher id="5B6D4AAA14966A8E" firstname="Ю.М." lastname="Лапко" name="Лапко Ю.М." short="Лапко Ю.М." gender="M" color="#9370DB" email="" mobile="" partner_id=""/>
      <teacher id="C3A77532AABCB78E" firstname="Н.В." lastname="Литвякова" name="Литвякова Н.В." short="Литвякова Н.В." gender="M" color="#8A2BE2" email="" mobile="" partner_id=""/>
      <teacher id="F1348A1FA8CEC14A" firstname="І.М." lastname="Літушко" name="Літушко І.М." short="Літушко І.М." gender="M" color="#BA55D3" email="" mobile="" partner_id=""/>
      <teacher id="49BFC6539E22D57B" firstname="О.М." lastname="Лопата" name="Лопата О.М." short="Лопата О.М." gender="M" color="#9966CC" email="" mobile="" partner_id=""/>
      <teacher id="936A5C3A29066F6B" firstname="В.Г." lastname="Масльонка" name="Масльонка В.Г." short="Масльонка В.Г." gender="M" color="#FF69B4" email="" mobile="" partner_id=""/>
      <teacher id="E02B659123566EF0" firstname="В.В." lastname="Мацвійко" name="Мацвійко В.В." short="Мацвійко В.В." gender="M" color="#FF1493" email="" mobile="" partner_id=""/>
      <teacher id="0141D24700FB38AD" firstname="В.М." lastname="Мельник" name="Мельник В.М." short="Мельник В.М." gender="M" color="#DC143C" email="" mobile="" partner_id=""/>
      <teacher id="FE60224534126142" firstname="Л.В." lastname="Мірошник" name="Мірошник Л.В." short="Мірошник Л.В." gender="M" color="#CD5C5C" email="" mobile="" partner_id=""/>
      <teacher id="45546608DDA7DFBC" firstname="С.М." lastname="Мурза" name="Мурза С.М." short="Мурза С.М." gender="M" color="#B22222" email="" mobile="" partner_id=""/>
      <teacher id="B1D356B6F7083B11" firstname="Ю.О." lastname="Ніколаєнко" name="Ніколаєнко Ю.О." short="Ніколаєнко Ю.О." gender="M" color="#FF6B9D" email="" mobile="" partner_id=""/>
      <teacher id="7ADE9B26339266F4" firstname="О.П." lastname="Передерій" name="Передерій О.П." short="Передерій О.П." gender="M" color="#FFC0CB" email="" mobile="" partner_id=""/>
      <teacher id="992B779548C893DB" firstname="Л.В." lastname="Пилипенко" name="Пилипенко Л.В." short="Пилипенко Л.В." gender="M" color="#7B68EE" email="" mobile="" partner_id=""/>
      <teacher id="DF302A58C8F57061" firstname="О.П." lastname="Пилипенко" name="Пилипенко О.П." short="Пилипенко О.П." gender="M" color="#FFB6C1" email="" mobile="" partner_id=""/>
      <teacher id="ED62E6EBCB15D677" firstname="С.В." lastname="Пильник" name="Пильник С.В." short="Пильник С.В." gender="M" color="#FFCCCB" email="" mobile="" partner_id=""/>
      <teacher id="7064FE0F72530351" firstname="І.В." lastname="Плеса" name="Плеса І.В." short="Плеса І.В." gender="M" color="#F5DEB3" email="" mobile="" partner_id=""/>
      <teacher id="E1A85960AA168319" firstname="А.І." lastname="Савченко" name="Савченко А.І." short="Савченко А.І." gender="M" color="#EE82EE" email="" mobile="" partner_id=""/>
      <teacher id="2CD8390A9BC7C7F8" firstname="Л.В." lastname="Савчук" name="Савчук Л.В." short="Савчук Л.В." gender="M" color="#D8BFD8" email="" mobile="" partner_id=""/>
      <teacher id="8B87B16CE46A712D" firstname="А.В." lastname="Сало" name="Сало А.В." short="Сало А.В." gender="M" color="#FFDAB9" email="" mobile="" partner_id=""/>
      <teacher id="A25E3D5B57F7C29E" firstname="Н.В." lastname="Саповець" name="Саповець Н.В." short="Саповець Н.В." gender="M" color="#FFAB91" email="" mobile="" partner_id=""/>
      <teacher id="C8BD5B68D0E6FC9D" firstname="Т.Л." lastname="Солодуненко" name="Солодуненко Т.Л." short="Солодуненко Т.Л." gender="M" color="#FFCC80" email="" mobile="" partner_id=""/>
      <teacher id="DD27CDB207BE7C26" firstname="Т.М." lastname="Сом" name="Сом Т.М." short="Сом Т.М." gender="M" color="#FFD54F" email="" mobile="" partner_id=""/>
      <teacher id="CFF428FE18F4DC0C" firstname="О.М." lastname="Тарасенко" name="Тарасенко О.М." short="Тарасенко О.М." gender="M" color="#FFF176" email="" mobile="" partner_id=""/>
      <teacher id="6BB47ECCAD71BB50" firstname="А.С." lastname="Титаренко" name="Титаренко А.С." short="Титаренко А.С." gender="M" color="#DCEDC8" email="" mobile="" partner_id=""/>
      <teacher id="EC67276BD314F6BB" firstname="Л.Ф." lastname="Ткаченко" name="Ткаченко Л.Ф." short="Ткаченко Л.Ф." gender="M" color="#C8E6C9" email="" mobile="" partner_id=""/>
      <teacher id="03D6C2A727AE3085" firstname="Л.П." lastname="Турченяк" name="Турченяк Л.П." short="Турченяк Л.П." gender="M" color="#FFEAA7" email="" mobile="" partner_id=""/>
      <teacher id="A478155A04A4C882" firstname="О.А." lastname="Халімон" name="Халімон О.А." short="Халімон О.А." gender="M" color="#FFB347" email="" mobile="" partner_id=""/>
      <teacher id="7F30DE1FB7A28978" firstname="М.О." lastname="Чава" name="Чава М.О." short="Чава М.О." gender="M" color="#FFDD44" email="" mobile="" partner_id=""/>
      <teacher id="48382603052BA515" firstname="С.А." lastname="Чава" name="Чава С.А." short="Чава С.А." gender="M" color="#FFE55C" email="" mobile="" partner_id=""/>
      <teacher id="CBBE94ADD7E20AA5" firstname="С.Б." lastname="Чала" name="Чала С.Б." short="Чала С.Б." gender="M" color="#FFEB3B" email="" mobile="" partner_id=""/>
      <teacher id="32D6562B18E691C3" firstname="Л.І." lastname="Шемендюк" name="Шемендюк Л.І." short="Шемендюк Л.І." gender="M" color="#FFF59D" email="" mobile="" partner_id=""/>
   </teachers>
   <buildings options="canadd,export:silent" columns="id,name,partner_id"/>
   <classrooms options="canadd,export:silent" columns="id,name,short,capacity,buildingid,partner_id">
      <classroom id="69DBF489501B28DC" name="1" short="1" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="36527D17C72C88F4" name="2" short="2" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="E4A303A0781701E2" name="2м" short="2м" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="3B926682EC41D040" name="3" short="3" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="4BD582F4072623D1" name="3_" short="3_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="3A7F9885FF288845" name="4" short="4" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="AA847AAA518C7ABB" name="4_" short="4_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="F8AEF2669FAA7FD7" name="4м" short="4м" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="A7EA206130B1EC08" name="5" short="5" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="7A2A81212804C6A0" name="5м" short="5м" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="0AD16578DAE2BA2E" name="6" short="6" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="E50F6D6607A42A81" name="6_" short="6_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="5F41877D9601590C" name="6м" short="6м" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="EAA43142566C6725" name="7" short="7" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="BC271D5C9A7F2773" name="7_" short="7_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="F0747FC29D78C2F1" name="8" short="8" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="06F34CEE6168234D" name="8_" short="8_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="468B7BF75E08553A" name="8м" short="8м" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="9DFB2868AA625637" name="9" short="9" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="0A6CF58A413AE2ED" name="10" short="10" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="3951320FED32DE02" name="10м" short="10м" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="D62E0E86F05FCC19" name="11" short="11" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="DF7D82DE0699F5C3" name="12" short="12" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="3BE32B415A2905AB" name="12м" short="12м" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="38BD9ACE40F6D4A2" name="13" short="13" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="8771F43E337915C4" name="13_" short="13_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="B00A0D9D1FDDA638" name="14" short="14" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="E602EDDA0E66F7CB" name="15" short="15" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="E6FE0D981A08684D" name="15_" short="15_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="7341FEEAD1621574" name="16" short="16" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="41E9B46601036D28" name="17" short="17" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="8F89F5430830BC62" name="17_" short="17_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="F4B98DA5599C5C3D" name="18" short="18" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="CA61C1AC40D20CBA" name="19" short="19" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="F899D2D14DEA0211" name="19_" short="19_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="C9CA9F2233FAE7CD" name="20" short="20" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="7C4BADB3FFD3A3AE" name="21" short="21" capacity="20" buildingid="*" partner_id=""/>
      <classroom id="268956F2308D2762" name="22" short="22" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="BA090444FE16A1C8" name="301" short="301" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="832D9682B058006B" name="301_" short="301_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="7F36D08173325A0C" name="304" short="304" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="B90D0F5FFDBD26E0" name="304_" short="304_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="FC7C8CB90D2D3358" name="305" short="305" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="FB3CBBAB26C7B160" name="306" short="306" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="5C9E31B1B08281F9" name="307" short="307" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="CFB44A3CF3CFF304" name="309" short="309" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="3568B60E7EB7F25C" name="309_" short="309_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="EA2F851F31637E65" name="310" short="310" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="16BA52D465B5AA8A" name="310_" short="310_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="18EAD7475208E4B6" name="313" short="313" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="FB1B3BB135030306" name="314" short="314" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="B9306436676D64CD" name="315" short="315" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="DCD8F1730C82A54F" name="315_" short="315_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="9ABE889ACC671510" name="Захисту України" short="ЗУ" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="46BDDBE1282FC72C" name="Захисту України" short="ЗУ2" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="D351F555F1C80A53" name="майст." short="майст." capacity="*" buildingid="*" partner_id=""/>
      <classroom id="12EED1AF9910D300" name="медітека" short="мед." capacity="*" buildingid="*" partner_id=""/>
      <classroom id="D73C84710607B70E" name="сз1" short="сз1" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="7D1353BC7BE8B4BD" name="сз1_" short="сз1_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="798246240B4F2214" name="сз2" short="сз2" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="F61647EE09423290" name="сз3" short="сз3" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="8BD618FEBDFE26BE" name="сз4" short="сз4" capacity="*" buildingid="*" partner_id=""/>
   </classrooms>
   <grades options="canadd,export:silent" columns="grade,name,short">
      <grade name="Рівень 1" short="G 1" grade="1"/>
      <grade name="Рівень 2" short="G 2" grade="2"/>
      <grade name="Рівень 3" short="G 3" grade="3"/>
      <grade name="Рівень 4" short="G 4" grade="4"/>
      <grade name="Рівень 5" short="G 5" grade="5"/>
      <grade name="Рівень 6" short="G 6" grade="6"/>
      <grade name="Рівень 7" short="G 7" grade="7"/>
      <grade name="Рівень 8" short="G 8" grade="8"/>
      <grade name="Рівень 9" short="G 9" grade="9"/>
      <grade name="Рівень 10" short="G 10" grade="10"/>
      <grade name="Рівень 11" short="G 11" grade="11"/>
      <grade name="Рівень 12" short="G 12" grade="12"/>
      <grade name="Рівень 13" short="G 13" grade="13"/>
      <grade name="Рівень 14" short="G 14" grade="14"/>
      <grade name="Рівень 15" short="G 15" grade="15"/>
      <grade name="Рівень 16" short="G 16" grade="16"/>
      <grade name="Рівень 17" short="G 17" grade="17"/>
      <grade name="Рівень 18" short="G 18" grade="18"/>
      <grade name="Рівень 19" short="G 19" grade="19"/>
      <grade name="Рівень 20" short="G 20" grade="20"/>
   </grades>
   <classes options="canadd,export:silent" columns="id,name,short,classroomids,teacherid,grade,partner_id">
      <class id="91D71EF26C851701" name="1-А" short="1-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="543F20B96064105B" name="1-Б" short="1-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="DABEE2321BC5C2B9" name="2-А" short="2-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="7FFEF5998D672DB3" name="2-Б" short="2-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="B69200F25B7A1085" name="2-В" short="2-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="0E198EA6ACFE894E" name="3-А" short="3-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="39C464004B99E2A9" name="3-Б" short="3-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="F576C365140195E9" name="3-В" short="3-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="AA6F6CB0EBF2E409" name="4-А" short="4-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="7902170D36F945E0" name="4-Б" short="4-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="4F56F997F7DD5368" name="4-В" short="4-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="38ACDE6116B2BF16" name="5-А" short="5-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="48E824A65B1D144F" name="5-Б" short="5-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="D92ADF84BAAED16C" name="5-В" short="5-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="81340022B2F23C59" name="6-А" short="6-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="095C3A693C01B747" name="6-Б" short="6-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="0035A0B32D7C512C" name="6-В" short="6-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="2BE3F1E3B73831D0" name="6-Г" short="6-Г" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="3A3D3BFF357373D2" name="7-А" short="7-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="122019AEDD7F12A1" name="7-Б" short="7-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="08D705B8C7E40DF5" name="7-В" short="7-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="4A6FF52B35743AAC" name="7-Г" short="7-Г" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="16310E27E49923D8" name="8-А" short="8-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="2125F588948A93A8" name="8-Б" short="8-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="93B1FDB4552E40CB" name="8-В" short="8-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="A0051BD907FF09EA" name="8-Г" short="8-Г" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="E4466A6A2A0105E1" name="9-А" short="9-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="04E0D73711AFB5CC" name="9-Б" short="9-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="875E1255FACC7CF0" name="9-В" short="9-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="45DA8CE5F6916F02" name="10-А" short="10-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="18B22B1162415AF7" name="10-Б" short="10-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="29EE729ADF9BD2F8" name="11-А" short="11-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="5E3FEB87026DA81A" name="11-Б" short="11-Б" teacherid="7064FE0F72530351" classroomids="" grade="" partner_id=""/>
   </classes>
   <groups options="canadd,export:silent" columns="id,classid,name,entireclass,divisiontag,studentcount,studentids">
      <group id="394504935CB9C8E4" name="Весь клас" classid="91D71EF26C851701" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="795AEE329B9538BF" name="1 група" classid="91D71EF26C851701" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="8B535A19AA0DCA45" name="2 група" classid="91D71EF26C851701" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="7F22E6B83E72384C" name="Хлопці" classid="91D71EF26C851701" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="43FDDE49BBB92EAD" name="Дівчата" classid="91D71EF26C851701" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="25E3A243011E5C16" name="Весь клас" classid="543F20B96064105B" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="B8F6BA91737CC8D1" name="1 група" classid="543F20B96064105B" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="6EB696F7AA50A792" name="2 група" classid="543F20B96064105B" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="8A4011757832F66A" name="Хлопці" classid="543F20B96064105B" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="8D7D03E9E62AB3B1" name="Дівчата" classid="543F20B96064105B" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="8F4136A3EF8D2A35" name="Весь клас" classid="DABEE2321BC5C2B9" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="E6EF5520C9C65B31" name="1 група" classid="DABEE2321BC5C2B9" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="E4FDC0752A2604EB" name="2 група" classid="DABEE2321BC5C2B9" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="E03A7BEB2B61AB45" name="Хлопці" classid="DABEE2321BC5C2B9" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="D7E97AA22A5FFA94" name="Дівчата" classid="DABEE2321BC5C2B9" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="F78E665A7018507B" name="Весь клас" classid="7FFEF5998D672DB3" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="F529EA7E1D9BABDB" name="1 група" classid="7FFEF5998D672DB3" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="EF6066588EC88EBE" name="2 група" classid="7FFEF5998D672DB3" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="98A10F1FD47372DB" name="Хлопці" classid="7FFEF5998D672DB3" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="92D78AFA45A055BE" name="Дівчата" classid="7FFEF5998D672DB3" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="D744AE71EF0D4AD1" name="Весь клас" classid="B69200F25B7A1085" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="05C91D321731FE25" name="1 група" classid="B69200F25B7A1085" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="0717B89AB610BECC" name="2 група" classid="B69200F25B7A1085" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="AACEC121CA30CF26" name="Хлопці" classid="B69200F25B7A1085" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="428C2CC2E5EE3D96" name="Дівчата" classid="B69200F25B7A1085" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="1F1EAEDE06B0B8B8" name="Весь клас" classid="0E198EA6ACFE894E" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="6C7FBBEBD8A70DF4" name="1 група" classid="0E198EA6ACFE894E" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="A66BF87A5EFF6EDF" name="2 група" classid="0E198EA6ACFE894E" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="F9087AC5C615140F" name="Хлопці" classid="0E198EA6ACFE894E" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="81BD5495CBA31DDA" name="Дівчата" classid="0E198EA6ACFE894E" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="2C9C2A6DDEFFCA57" name="Весь клас" classid="39C464004B99E2A9" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="8CE983C31DB29679" name="1 група" classid="39C464004B99E2A9" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="FFB0437A544BCCEA" name="2 група" classid="39C464004B99E2A9" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="6933B511F657F479" name="Хлопці" classid="39C464004B99E2A9" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="2E0E287A5E9F7223" name="Дівчата" classid="39C464004B99E2A9" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="FF7900BCB7D66F12" name="Весь клас" classid="F576C365140195E9" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="CE5DE1E397DC2550" name="1 група" classid="F576C365140195E9" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="732A943637274BAD" name="2 група" classid="F576C365140195E9" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="1C2D475DA326D009" name="Хлопці" classid="F576C365140195E9" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="16633F0EFF543A33" name="Дівчата" classid="F576C365140195E9" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="D876C68F422BC493" name="Весь клас" classid="AA6F6CB0EBF2E409" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="8CD37B23FE0FD201" name="1 група" classid="AA6F6CB0EBF2E409" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="B3C7399D3BB64D7E" name="2 група" classid="AA6F6CB0EBF2E409" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="6661054D3256CA7A" name="Хлопці" classid="AA6F6CB0EBF2E409" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="219FDC03FADDD6CC" name="Дівчата" classid="AA6F6CB0EBF2E409" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="9FF1D586747FC15D" name="Весь клас" classid="7902170D36F945E0" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="055ED1B949CADFBE" name="1 група" classid="7902170D36F945E0" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="8D27E38C5138AEA0" name="2 група" classid="7902170D36F945E0" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="EBE10C71964D9099" name="Хлопці" classid="7902170D36F945E0" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="CDBE9C308172ED06" name="Дівчата" classid="7902170D36F945E0" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="E18AC4F8E20FEE13" name="Весь клас" classid="4F56F997F7DD5368" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="5BD84642E5F46F89" name="1 група" classid="4F56F997F7DD5368" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="9192288DD0D36FEA" name="2 група" classid="4F56F997F7DD5368" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="A918DACB36D5A46E" name="Хлопці" classid="4F56F997F7DD5368" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="680564A1D8625EFC" name="Дівчата" classid="4F56F997F7DD5368" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="5F9818B13F19C1DB" name="Весь клас" classid="38ACDE6116B2BF16" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="49BD41B36A9932B9" name="1 група" classid="38ACDE6116B2BF16" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="00E81784AB47BA4E" name="2 група" classid="38ACDE6116B2BF16" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="42A8B344ED37820B" name="Хлопці" classid="38ACDE6116B2BF16" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="A0C0869A2D2988E9" name="Дівчата" classid="38ACDE6116B2BF16" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="874021A45A9583BD" name="Весь клас" classid="48E824A65B1D144F" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="0FF6AD0A0C1D1D18" name="1 група" classid="48E824A65B1D144F" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="4CC42ABA0F8E8286" name="2 група" classid="48E824A65B1D144F" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="B951055E48C48B21" name="Хлопці" classid="48E824A65B1D144F" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="2729B4DB131D67E8" name="Дівчата" classid="48E824A65B1D144F" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="DA74F6C4446E195D" name="Весь клас" classid="D92ADF84BAAED16C" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="45D9C4383632913C" name="1 група" classid="D92ADF84BAAED16C" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="98963EB08EEFF7A9" name="2 група" classid="D92ADF84BAAED16C" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="ADDFFBD4028877DC" name="Хлопці" classid="D92ADF84BAAED16C" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="E39159F5D827FF85" name="Дівчата" classid="D92ADF84BAAED16C" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="1367CB839D24D705" name="Весь клас" classid="81340022B2F23C59" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="60B4C1900EB4FE0D" name="1 група" classid="81340022B2F23C59" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="DA9FFBB77BE9FBAD" name="2 група" classid="81340022B2F23C59" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="B0204864F8FF71FE" name="Хлопці" classid="81340022B2F23C59" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="A4F5DF036851D7F1" name="Дівчата" classid="81340022B2F23C59" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="3BFAB65CF3650689" name="Весь клас" classid="095C3A693C01B747" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="69CFE0402B65BD85" name="1 група" classid="095C3A693C01B747" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="0EA09292CAD0E3E2" name="2 група" classid="095C3A693C01B747" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="7E942C624416D837" name="Хлопці" classid="095C3A693C01B747" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="37C95C2F3CC6F592" name="Дівчата" classid="095C3A693C01B747" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="CAAE6DC441D040EF" name="Весь клас" classid="0035A0B32D7C512C" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="07956ACCAB2DB45A" name="1 група" classid="0035A0B32D7C512C" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="DB88A5458F06BC44" name="2 група" classid="0035A0B32D7C512C" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="3782FB233E016934" name="Хлопці" classid="0035A0B32D7C512C" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="6D3C594513E0F0DE" name="Дівчата" classid="0035A0B32D7C512C" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="F655431DE04B9A49" name="Весь клас" classid="2BE3F1E3B73831D0" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="605C6BEBA3434049" name="1 група" classid="2BE3F1E3B73831D0" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="20FC85106FD15D68" name="2 група" classid="2BE3F1E3B73831D0" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="C7CCDAE7DEEEA283" name="Хлопці" classid="2BE3F1E3B73831D0" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="C4481EBD70D3FAEA" name="Дівчата" classid="2BE3F1E3B73831D0" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="58543C0F777CB4CD" name="Весь клас" classid="3A3D3BFF357373D2" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="ABE36A0078AF9C69" name="1 група" classid="3A3D3BFF357373D2" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="499F789BD5896C49" name="2 група" classid="3A3D3BFF357373D2" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="6C8FE17B791D493E" name="Хлопці" classid="3A3D3BFF357373D2" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="FEC43105784F5CA1" name="Дівчата" classid="3A3D3BFF357373D2" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="8B2307B037B45C9E" name="Весь клас" classid="122019AEDD7F12A1" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="9AA1262B421423A4" name="1 група" classid="122019AEDD7F12A1" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="94D31DDC9E218DCE" name="2 група" classid="122019AEDD7F12A1" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="4D743B64520E7112" name="Хлопці" classid="122019AEDD7F12A1" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="DFA806C53C410BBE" name="Дівчата" classid="122019AEDD7F12A1" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="D689B36116A94D68" name="Весь клас" classid="08D705B8C7E40DF5" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="E0EB23FECC78BC66" name="1 група" classid="08D705B8C7E40DF5" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="EE2DCDB067AF1091" name="2 група" classid="08D705B8C7E40DF5" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="4EC7C6658BC045B5" name="Хлопці" classid="08D705B8C7E40DF5" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="501261CE2A7F065C" name="Дівчата" classid="08D705B8C7E40DF5" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="715AAB5248DBC4B9" name="Весь клас" classid="4A6FF52B35743AAC" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="4A079610E3C8E25B" name="1 група" classid="4A6FF52B35743AAC" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="7FBD785BCE87E2BC" name="2 група" classid="4A6FF52B35743AAC" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="DA02D4AB7A25E71B" name="Хлопці" classid="4A6FF52B35743AAC" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="0FB8B6F664E4E77C" name="Дівчата" classid="4A6FF52B35743AAC" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="C3B7C3E3FCB40A97" name="Весь клас" classid="16310E27E49923D8" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="9E160B51BAA37FA9" name="1 група" classid="16310E27E49923D8" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="6439134996CF4775" name="2 група" classid="16310E27E49923D8" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="AD708C1E9E5B42DA" name="Хлопці" classid="16310E27E49923D8" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="4E05DBDB780E173D" name="Дівчата" classid="16310E27E49923D8" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="227490F13369544F" name="Весь клас" classid="2125F588948A93A8" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="EB80A2DF1D04E039" name="1 група" classid="2125F588948A93A8" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="0CD58386999F70E5" name="2 група" classid="2125F588948A93A8" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="D3709BA11F675CD6" name="Хлопці" classid="2125F588948A93A8" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="3E6169E41CA4A072" name="Дівчата" classid="2125F588948A93A8" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="94FC991CF3ED0172" name="Весь клас" classid="93B1FDB4552E40CB" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="5710B9D8E91A4C53" name="1 група" classid="93B1FDB4552E40CB" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="D52E4E43F1C8AA7C" name="2 група" classid="93B1FDB4552E40CB" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="90EAD222D9313EDF" name="Хлопці" classid="93B1FDB4552E40CB" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="0BCF0A1FBC6DC611" name="Дівчата" classid="93B1FDB4552E40CB" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="961DBA8BAC174FD8" name="Весь клас" classid="A0051BD907FF09EA" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="9F99315EE646ECFA" name="1 група" classid="A0051BD907FF09EA" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="6473A4C74E8E6AA2" name="2 група" classid="A0051BD907FF09EA" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="672F8C0DFE195EF6" name="Хлопці" classid="A0051BD907FF09EA" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="AE4E9FC648560308" name="Дівчата" classid="A0051BD907FF09EA" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="15C56E4864272D00" name="Весь клас" classid="E4466A6A2A0105E1" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="538F49F5D4197E17" name="1 група" classid="E4466A6A2A0105E1" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="099F998C8F0876DC" name="2 група" classid="E4466A6A2A0105E1" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="CE5DE1D735F40FA2" name="Хлопці" classid="E4466A6A2A0105E1" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="C893D988922179CC" name="Дівчата" classid="E4466A6A2A0105E1" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="73CD00EAF874A97B" name="Весь клас" classid="04E0D73711AFB5CC" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="B3AD62BDADD62772" name="1 група" classid="04E0D73711AFB5CC" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="CC5FA48900B7D058" name="2 група" classid="04E0D73711AFB5CC" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="9F349C849F8EE0F2" name="Хлопці" classid="04E0D73711AFB5CC" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="3CED2F491148298A" name="Дівчата" classid="04E0D73711AFB5CC" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="B565F05D6604D631" name="Весь клас" classid="875E1255FACC7CF0" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="33EA1BA66E988A3A" name="1 група" classid="875E1255FACC7CF0" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="771C50EA0A658F74" name="2 група" classid="875E1255FACC7CF0" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="4720786D25F60C5E" name="Хлопці" classid="875E1255FACC7CF0" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="EDA407DFEEEBFFB3" name="Дівчата" classid="875E1255FACC7CF0" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="9A8EDC25F24C355A" name="Весь клас" classid="45DA8CE5F6916F02" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="BFB998A55EA28704" name="1 група" classid="45DA8CE5F6916F02" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="6BB69FC59141B0C3" name="2 група" classid="45DA8CE5F6916F02" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="ACCDB334C01BF263" name="Хлопці" classid="45DA8CE5F6916F02" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="DAD088EA01355A35" name="Дівчата" classid="45DA8CE5F6916F02" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="EC0A9A2DD7A8934E" name="1 гр." classid="45DA8CE5F6916F02" studentids="" entireclass="0" divisiontag="3" studentcount=""/>
      <group id="CF8CC43DDAAA8BE0" name="2 гр." classid="45DA8CE5F6916F02" studentids="" entireclass="0" divisiontag="3" studentcount=""/>
      <group id="DD5A9FFA51930B03" name="3 гр." classid="45DA8CE5F6916F02" studentids="" entireclass="0" divisiontag="3" studentcount=""/>
      <group id="7298DC4673C0BA0E" name="Весь клас" classid="18B22B1162415AF7" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="7CD4B7B828CF3D3D" name="1 група" classid="18B22B1162415AF7" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="9AEC3BF17FD7F6F0" name="2 група" classid="18B22B1162415AF7" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="9FF6397A486D7753" name="Хлопці" classid="18B22B1162415AF7" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="27C34B4D4FFB4635" name="Дівчата" classid="18B22B1162415AF7" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="F8592E9A12BA1940" name="1 гр." classid="18B22B1162415AF7" studentids="" entireclass="0" divisiontag="3" studentcount=""/>
      <group id="FABF60B28CD28910" name="2 гр." classid="18B22B1162415AF7" studentids="" entireclass="0" divisiontag="3" studentcount=""/>
      <group id="6D1557DAC0881DCE" name="3 гр." classid="18B22B1162415AF7" studentids="" entireclass="0" divisiontag="3" studentcount=""/>
      <group id="2424EE7550C8B5DA" name="Весь клас" classid="29EE729ADF9BD2F8" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="6F26E4FE6BFD5AD6" name="1 група" classid="29EE729ADF9BD2F8" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="3CDE16CFCFE21301" name="2 група" classid="29EE729ADF9BD2F8" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="5ACCFC77B9606E98" name="Хлопці" classid="29EE729ADF9BD2F8" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="E9BF6B6A7DE1324B" name="Дівчата" classid="29EE729ADF9BD2F8" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="09D3371F50384A96" name="1 гр." classid="29EE729ADF9BD2F8" studentids="" entireclass="0" divisiontag="3" studentcount=""/>
      <group id="2E56314A5FDF122D" name="2 гр." classid="29EE729ADF9BD2F8" studentids="" entireclass="0" divisiontag="3" studentcount=""/>
      <group id="C3FD13D6FC36039C" name="3 гр." classid="29EE729ADF9BD2F8" studentids="" entireclass="0" divisiontag="3" studentcount=""/>
      <group id="A236C656C2F2025A" name="Весь клас" classid="5E3FEB87026DA81A" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="86DFE7C38F77C3A7" name="1 група" classid="5E3FEB87026DA81A" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="BC9945E565574B51" name="2 група" classid="5E3FEB87026DA81A" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="218C97474116F849" name="Хлопці" classid="5E3FEB87026DA81A" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="730901593B2F8D4C" name="Дівчата" classid="5E3FEB87026DA81A" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="72B1B8B77D8823FB" name="1 гр." classid="5E3FEB87026DA81A" studentids="" entireclass="0" divisiontag="3" studentcount=""/>
      <group id="C9B8FB2038963830" name="2 гр." classid="5E3FEB87026DA81A" studentids="" entireclass="0" divisiontag="3" studentcount=""/>
      <group id="AC703B59EF35BA49" name="3 гр." classid="5E3FEB87026DA81A" studentids="" entireclass="0" divisiontag="3" studentcount=""/>
   </groups>
   <students options="canadd,export:silent" columns="id,classid,name,number,email,mobile,partner_id,firstname,lastname"/>
   <studentsubjects options="canadd,export:silent" columns="studentid,subjectid,seminargroup,importance,alternatefor"/>
   <lessons options="canadd,export:silent" columns="id,subjectid,classids,groupids,teacherids,classroomids,periodspercard,periodsperweek,daysdefid,weeksdefid,termsdefid,seminargroup,capacity,partner_id">
      <lesson id="778D88B2036EAB69" classids="91D71EF26C851701" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="7.0" teacherids="B1D356B6F7083B11" classroomids="A7EA206130B1EC08" groupids="394504935CB9C8E4" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="A05DC4FCDB688AC0" classids="543F20B96064105B" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="7.0" teacherids="DD27CDB207BE7C26" classroomids="9DFB2868AA625637" groupids="25E3A243011E5C16" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="5AAABEC6E4A641FD" classids="DABEE2321BC5C2B9" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="7.0" teacherids="2523A9603ACD8D26" classroomids="3951320FED32DE02" groupids="8F4136A3EF8D2A35" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D75B5804AA987754" classids="7FFEF5998D672DB3" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="7.0" teacherids="ED62E6EBCB15D677" classroomids="69DBF489501B28DC" groupids="F78E665A7018507B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="BBB697083EDDF253" classids="B69200F25B7A1085" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="7.0" teacherids="EB6D5A01431F5EBC" classroomids="36527D17C72C88F4" groupids="D744AE71EF0D4AD1" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="84B090A4B32F1873" classids="0E198EA6ACFE894E" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="7.0" teacherids="45546608DDA7DFBC" classroomids="E4A303A0781701E2" groupids="1F1EAEDE06B0B8B8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D2821672E1354839" classids="39C464004B99E2A9" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="7.0" teacherids="3355B8027347AF6B" classroomids="7A2A81212804C6A0" groupids="2C9C2A6DDEFFCA57" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="79127BC0CA1BB342" classids="F576C365140195E9" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="7.0" teacherids="7F30DE1FB7A28978" classroomids="3BE32B415A2905AB" groupids="FF7900BCB7D66F12" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="818C946D0AF0C891" classids="AA6F6CB0EBF2E409" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="7.0" teacherids="2CD8390A9BC7C7F8" classroomids="5F41877D9601590C" groupids="D876C68F422BC493" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="4CC9B3A967BDD759" classids="7902170D36F945E0" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="7.0" teacherids="9E709A59088055D2" classroomids="468B7BF75E08553A" groupids="9FF1D586747FC15D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1972BE2BC5C32847" classids="4F56F997F7DD5368" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="7.0" teacherids="064571258C23C3E2" classroomids="F8AEF2669FAA7FD7" groupids="E18AC4F8E20FEE13" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D8E3C8D17AFF0FB9" classids="81340022B2F23C59" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="4.0" teacherids="992B779548C893DB" classroomids="EAA43142566C6725" groupids="1367CB839D24D705" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="BBC81264C89CB19E" classids="095C3A693C01B747" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="4.0" teacherids="992B779548C893DB" classroomids="EAA43142566C6725" groupids="3BFAB65CF3650689" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B75537C00DCD3005" classids="0035A0B32D7C512C" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="4.0" teacherids="445B9717647E9C95" classroomids="7F36D08173325A0C" groupids="CAAE6DC441D040EF" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F12D24130374C937" classids="2BE3F1E3B73831D0" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="4.0" teacherids="992B779548C893DB" classroomids="EAA43142566C6725" groupids="F655431DE04B9A49" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="121A6DA852563831" classids="3A3D3BFF357373D2" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="3.0" teacherids="445B9717647E9C95" classroomids="7F36D08173325A0C" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="577932818ACC8432" classids="122019AEDD7F12A1" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="3.0" teacherids="445B9717647E9C95" classroomids="7F36D08173325A0C" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7FADA2151D9CA034" classids="08D705B8C7E40DF5" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="3.0" teacherids="992B779548C893DB" classroomids="EAA43142566C6725" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B9B40A502E571321" classids="4A6FF52B35743AAC" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="3.0" teacherids="445B9717647E9C95" classroomids="7F36D08173325A0C" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="3E41467FCA13A76F" classids="16310E27E49923D8" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="3.0" teacherids="03D6C2A727AE3085" classroomids="F4B98DA5599C5C3D" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="47EB838F8A099E33" classids="A0051BD907FF09EA" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="3.0" teacherids="445B9717647E9C95" classroomids="7F36D08173325A0C" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F8E355775AFF7146" classids="E4466A6A2A0105E1" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="2.0" teacherids="CBBE94ADD7E20AA5" classroomids="F4B98DA5599C5C3D" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="EF518CA8DCD3ED4F" classids="04E0D73711AFB5CC" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="2.0" teacherids="CBBE94ADD7E20AA5" classroomids="F4B98DA5599C5C3D" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="12C932AA2A4A76A9" classids="29EE729ADF9BD2F8" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="2.0" teacherids="992B779548C893DB" classroomids="EAA43142566C6725" groupids="2424EE7550C8B5DA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="02141BC55CB5EB8F" classids="5E3FEB87026DA81A" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="4.0" teacherids="992B779548C893DB" classroomids="EAA43142566C6725" groupids="86DFE7C38F77C3A7" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="72FFB816BDC4226C" classids="5E3FEB87026DA81A" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="2.0" teacherids="CBBE94ADD7E20AA5" classroomids="C9CA9F2233FAE7CD" groupids="BC9945E565574B51" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="2A384DFE04EC543D" classids="48E824A65B1D144F" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="49BFC6539E22D57B" classroomids="7F36D08173325A0C" groupids="874021A45A9583BD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="0A724C98FF45C11F" classids="D92ADF84BAAED16C" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="49BFC6539E22D57B" classroomids="7F36D08173325A0C" groupids="DA74F6C4446E195D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="0C8E574F0F02703A" classids="095C3A693C01B747" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="7064FE0F72530351" classroomids="0AD16578DAE2BA2E" groupids="3BFAB65CF3650689" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="AFF622A05A02B0E3" classids="2BE3F1E3B73831D0" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="7064FE0F72530351" classroomids="0AD16578DAE2BA2E" groupids="F655431DE04B9A49" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E401C968475E1114" classids="3A3D3BFF357373D2" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="445B9717647E9C95" classroomids="7F36D08173325A0C" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="A4661033F43AB755" classids="122019AEDD7F12A1" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="445B9717647E9C95" classroomids="7F36D08173325A0C" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E583E991B570E549" classids="08D705B8C7E40DF5" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="445B9717647E9C95" classroomids="7F36D08173325A0C" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="92EF998B434D1091" classids="4A6FF52B35743AAC" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="445B9717647E9C95" classroomids="7F36D08173325A0C" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="024F0029BBB22FA4" classids="16310E27E49923D8" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="03D6C2A727AE3085" classroomids="F4B98DA5599C5C3D" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="29EF453143CF1E22" classids="A0051BD907FF09EA" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="445B9717647E9C95" classroomids="7F36D08173325A0C" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="03CA8F788DA2E02C" classids="E4466A6A2A0105E1" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="CBBE94ADD7E20AA5" classroomids="F4B98DA5599C5C3D" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8778AFBC0E77EE5E" classids="04E0D73711AFB5CC" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="CBBE94ADD7E20AA5" classroomids="F4B98DA5599C5C3D" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="400659E9DD63A589" classids="45DA8CE5F6916F02" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="CBBE94ADD7E20AA5" classroomids="F4B98DA5599C5C3D" groupids="9A8EDC25F24C355A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="437BAEB6FE93F1A0" classids="29EE729ADF9BD2F8" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="992B779548C893DB" classroomids="EAA43142566C6725" groupids="2424EE7550C8B5DA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="0949F21EF1B6D0A5" classids="5E3FEB87026DA81A" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="992B779548C893DB" classroomids="EAA43142566C6725" groupids="A236C656C2F2025A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="39053270F03B2AEB" classids="91D71EF26C851701" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="2.0" teacherids="0B4BD65965AF73F1" classroomids="A7EA206130B1EC08" groupids="394504935CB9C8E4" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D787D6CAEB8960CB" classids="543F20B96064105B" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="2.0" teacherids="0B4BD65965AF73F1" classroomids="9DFB2868AA625637" groupids="25E3A243011E5C16" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B83165D17BBFB69A" classids="DABEE2321BC5C2B9" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="0B4BD65965AF73F1" classroomids="3951320FED32DE02" groupids="8F4136A3EF8D2A35" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="CA2DDC391E75B08B" classids="7FFEF5998D672DB3" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="0B4BD65965AF73F1" classroomids="69DBF489501B28DC" groupids="F78E665A7018507B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="14FEE69336303E16" classids="B69200F25B7A1085" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="0B4BD65965AF73F1" classroomids="36527D17C72C88F4" groupids="D744AE71EF0D4AD1" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="2A70AA8A4B0D6516" classids="0E198EA6ACFE894E" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="6BB47ECCAD71BB50" classroomids="E4A303A0781701E2" groupids="1F1EAEDE06B0B8B8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="0DF016A7A5A22BE8" classids="39C464004B99E2A9" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="6BB47ECCAD71BB50" classroomids="7A2A81212804C6A0" groupids="2C9C2A6DDEFFCA57" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="6DC3A7D36226CC5C" classids="F576C365140195E9" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="6BB47ECCAD71BB50" classroomids="3BE32B415A2905AB" groupids="FF7900BCB7D66F12" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F606B90FE8086567" classids="AA6F6CB0EBF2E409" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="32D6562B18E691C3" classroomids="5F41877D9601590C" groupids="D876C68F422BC493" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1424D61623B1DFF9" classids="7902170D36F945E0" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="32D6562B18E691C3" classroomids="468B7BF75E08553A" groupids="9FF1D586747FC15D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="118A9051336F419A" classids="4F56F997F7DD5368" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="32D6562B18E691C3" classroomids="F8AEF2669FAA7FD7" groupids="E18AC4F8E20FEE13" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="4F841D22701AB6A4" classids="2125F588948A93A8" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="9078B81933858453" classroomids="B00A0D9D1FDDA638" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F7D8A7FD45245A9D" classids="93B1FDB4552E40CB" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="9078B81933858453" classroomids="B00A0D9D1FDDA638" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8580B852DC613DD9" classids="E4466A6A2A0105E1" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="5.0" teacherids="0141D24700FB38AD" classroomids="DF7D82DE0699F5C3" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7D7423E7906215F0" classids="04E0D73711AFB5CC" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="5.0" teacherids="0141D24700FB38AD" classroomids="DF7D82DE0699F5C3" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="793C031F48752D95" classids="875E1255FACC7CF0" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="5.0" teacherids="0141D24700FB38AD" classroomids="DF7D82DE0699F5C3" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="12C43E602723B584" classids="18B22B1162415AF7" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="2.0" teacherids="0B4BD65965AF73F1" classroomids="B00A0D9D1FDDA638,E602EDDA0E66F7CB" groupids="7298DC4673C0BA0E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="95AFE5E7C90D8042" classids="29EE729ADF9BD2F8" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="2.0" teacherids="0141D24700FB38AD" classroomids="DF7D82DE0699F5C3" groupids="2424EE7550C8B5DA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="34B8F0DB0B10FCC6" classids="04E0D73711AFB5CC" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="2.0" teacherids="49BFC6539E22D57B" classroomids="0AD16578DAE2BA2E" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="0F5E4646D90D91A2" classids="45DA8CE5F6916F02" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="1.0" teacherids="7064FE0F72530351" classroomids="0AD16578DAE2BA2E" groupids="9A8EDC25F24C355A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1B00302CD29B1972" classids="18B22B1162415AF7" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="1.0" teacherids="7064FE0F72530351" classroomids="0AD16578DAE2BA2E" groupids="7298DC4673C0BA0E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E37DB4C9D1539615" classids="29EE729ADF9BD2F8" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="1.0" teacherids="7064FE0F72530351" classroomids="0AD16578DAE2BA2E" groupids="2424EE7550C8B5DA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C9B239B18A440DEC" classids="5E3FEB87026DA81A" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="1.0" teacherids="7064FE0F72530351" classroomids="0AD16578DAE2BA2E" groupids="A236C656C2F2025A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="CEBE2A25D19D1DB0" classids="91D71EF26C851701" subjectid="15EA1A8AEEEAF4E0" periodspercard="1" periodsperweek="3.0" teacherids="B1D356B6F7083B11" classroomids="A7EA206130B1EC08" groupids="394504935CB9C8E4" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="5C8F8A8601A12EDE" classids="543F20B96064105B" subjectid="15EA1A8AEEEAF4E0" periodspercard="1" periodsperweek="3.0" teacherids="DD27CDB207BE7C26" classroomids="9DFB2868AA625637" groupids="25E3A243011E5C16" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F0AFE07076AD8C8A" classids="DABEE2321BC5C2B9" subjectid="15EA1A8AEEEAF4E0" periodspercard="1" periodsperweek="3.0" teacherids="2523A9603ACD8D26" classroomids="3951320FED32DE02" groupids="8F4136A3EF8D2A35" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="30C729194DA4FD7A" classids="7FFEF5998D672DB3" subjectid="15EA1A8AEEEAF4E0" periodspercard="1" periodsperweek="3.0" teacherids="ED62E6EBCB15D677" classroomids="69DBF489501B28DC" groupids="F78E665A7018507B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="9D578A150618F5CA" classids="B69200F25B7A1085" subjectid="15EA1A8AEEEAF4E0" periodspercard="1" periodsperweek="3.0" teacherids="EB6D5A01431F5EBC" classroomids="36527D17C72C88F4" groupids="D744AE71EF0D4AD1" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="2012F4D53F9EA288" classids="0E198EA6ACFE894E" subjectid="15EA1A8AEEEAF4E0" periodspercard="1" periodsperweek="3.0" teacherids="FE60224534126142" classroomids="E4A303A0781701E2" groupids="1F1EAEDE06B0B8B8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="553690B1FDB19112" classids="39C464004B99E2A9" subjectid="15EA1A8AEEEAF4E0" periodspercard="1" periodsperweek="3.0" teacherids="3355B8027347AF6B" classroomids="7A2A81212804C6A0" groupids="2C9C2A6DDEFFCA57" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="4C5DCFB38B206B84" classids="F576C365140195E9" subjectid="15EA1A8AEEEAF4E0" periodspercard="1" periodsperweek="3.0" teacherids="7F30DE1FB7A28978" classroomids="3BE32B415A2905AB" groupids="FF7900BCB7D66F12" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E78FDF13F31138F3" classids="AA6F6CB0EBF2E409" subjectid="15EA1A8AEEEAF4E0" periodspercard="1" periodsperweek="3.0" teacherids="2CD8390A9BC7C7F8" classroomids="5F41877D9601590C" groupids="D876C68F422BC493" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="5A359ECF372C9672" classids="7902170D36F945E0" subjectid="15EA1A8AEEEAF4E0" periodspercard="1" periodsperweek="3.0" teacherids="9E709A59088055D2" classroomids="468B7BF75E08553A" groupids="9FF1D586747FC15D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="21B701D7B7BF81EC" classids="4F56F997F7DD5368" subjectid="15EA1A8AEEEAF4E0" periodspercard="1" periodsperweek="3.0" teacherids="064571258C23C3E2" classroomids="F8AEF2669FAA7FD7" groupids="E18AC4F8E20FEE13" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1AAFB43A496FD7D6" classids="48E824A65B1D144F" subjectid="0ADC4FE2B600F77D" periodspercard="1" periodsperweek="1.0" teacherids="5B6D4AAA14966A8E" classroomids="3A7F9885FF288845" groupids="874021A45A9583BD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="ACC458B16408E915" classids="D92ADF84BAAED16C" subjectid="0ADC4FE2B600F77D" periodspercard="1" periodsperweek="1.0" teacherids="5B6D4AAA14966A8E" classroomids="3A7F9885FF288845" groupids="DA74F6C4446E195D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="90ADF33DB07EE835" classids="3A3D3BFF357373D2" subjectid="531D8B6F52071795" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="54A39016F5B81839" classids="122019AEDD7F12A1" subjectid="531D8B6F52071795" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="17B94A6B9C1584DE" classids="08D705B8C7E40DF5" subjectid="531D8B6F52071795" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="854AE621849586D9" classids="4A6FF52B35743AAC" subjectid="531D8B6F52071795" periodspercard="1" periodsperweek="1.0" teacherids="04EC5F61E6BCE7C9" classroomids="3A7F9885FF288845" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7CE516408D5BDA18" classids="45DA8CE5F6916F02" subjectid="531D8B6F52071795" periodspercard="1" periodsperweek="3.0" teacherids="5B6D4AAA14966A8E" classroomids="3A7F9885FF288845" groupids="9A8EDC25F24C355A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="EA427123BAF5FCEF" classids="29EE729ADF9BD2F8" subjectid="531D8B6F52071795" periodspercard="1" periodsperweek="3.0" teacherids="5B6D4AAA14966A8E" classroomids="3A7F9885FF288845" groupids="2424EE7550C8B5DA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="5E26E6CB909DF597" classids="81340022B2F23C59" subjectid="361E23B5929D9979" periodspercard="1" periodsperweek="2.0" teacherids="04EC5F61E6BCE7C9" classroomids="3A7F9885FF288845" groupids="1367CB839D24D705" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="A16E68D406687EBA" classids="095C3A693C01B747" subjectid="361E23B5929D9979" periodspercard="1" periodsperweek="2.0" teacherids="04EC5F61E6BCE7C9" classroomids="3A7F9885FF288845" groupids="3BFAB65CF3650689" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7496C286ED164FA5" classids="0035A0B32D7C512C" subjectid="361E23B5929D9979" periodspercard="1" periodsperweek="2.0" teacherids="04EC5F61E6BCE7C9" classroomids="3A7F9885FF288845" groupids="CAAE6DC441D040EF" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7324A72924BD8376" classids="2BE3F1E3B73831D0" subjectid="361E23B5929D9979" periodspercard="1" periodsperweek="2.0" teacherids="04EC5F61E6BCE7C9" classroomids="3A7F9885FF288845" groupids="F655431DE04B9A49" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="4CC8B7872566135B" classids="3A3D3BFF357373D2" subjectid="D5917778F7741FB1" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="9A650C070973E7B5" classids="122019AEDD7F12A1" subjectid="D5917778F7741FB1" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="147CC34CD0F87C51" classids="08D705B8C7E40DF5" subjectid="D5917778F7741FB1" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="DE45CF1D17C2C34F" classids="4A6FF52B35743AAC" subjectid="D5917778F7741FB1" periodspercard="1" periodsperweek="1.0" teacherids="04EC5F61E6BCE7C9" classroomids="3A7F9885FF288845" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="077370B3D0EDE376" classids="16310E27E49923D8" subjectid="D5917778F7741FB1" periodspercard="1" periodsperweek="1.0" teacherids="ED82ACF33AB2D965" classroomids="41E9B46601036D28" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1E91E1FAF57F1BAE" classids="2125F588948A93A8" subjectid="D5917778F7741FB1" periodspercard="1" periodsperweek="1.0" teacherids="ED82ACF33AB2D965" classroomids="41E9B46601036D28" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D1027401FE95FEC9" classids="93B1FDB4552E40CB" subjectid="D5917778F7741FB1" periodspercard="1" periodsperweek="1.0" teacherids="5B6D4AAA14966A8E" classroomids="3A7F9885FF288845" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="002386BA15EE85D7" classids="A0051BD907FF09EA" subjectid="D5917778F7741FB1" periodspercard="1" periodsperweek="1.0" teacherids="ED82ACF33AB2D965" classroomids="41E9B46601036D28" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="59B74B4F8F35350F" classids="E4466A6A2A0105E1" subjectid="D5917778F7741FB1" periodspercard="1" periodsperweek="1.0" teacherids="ED82ACF33AB2D965" classroomids="41E9B46601036D28" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="3DF882D6BEB99F79" classids="04E0D73711AFB5CC" subjectid="D5917778F7741FB1" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="89ADEB9788C804B7" classids="875E1255FACC7CF0" subjectid="D5917778F7741FB1" periodspercard="1" periodsperweek="1.0" teacherids="ED82ACF33AB2D965" classroomids="41E9B46601036D28" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="2DBDD79E57420DE0" classids="18B22B1162415AF7" subjectid="D5917778F7741FB1" periodspercard="1" periodsperweek="1.0" teacherids="ED82ACF33AB2D965" classroomids="41E9B46601036D28" groupids="7298DC4673C0BA0E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="427B254B14DE53A6" classids="29EE729ADF9BD2F8" subjectid="D5917778F7741FB1" periodspercard="1" periodsperweek="2.0" teacherids="5B6D4AAA14966A8E" classroomids="3A7F9885FF288845" groupids="2424EE7550C8B5DA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="4570C6EE02DCFCC3" classids="5E3FEB87026DA81A" subjectid="D5917778F7741FB1" periodspercard="1" periodsperweek="1.0" teacherids="ED82ACF33AB2D965" classroomids="41E9B46601036D28" groupids="A236C656C2F2025A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="3DEE4A00C95E543E" classids="45DA8CE5F6916F02" subjectid="6AB5D3617AF9D48E" periodspercard="1" periodsperweek="2.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="9A8EDC25F24C355A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="CDEF249634B9DD48" classids="18B22B1162415AF7" subjectid="6AB5D3617AF9D48E" periodspercard="1" periodsperweek="2.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="7298DC4673C0BA0E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="DF7B7A8AC8301388" classids="04E0D73711AFB5CC" subjectid="7204F551BDA73617" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="6D81AF1D69ED9AD3" classids="16310E27E49923D8" subjectid="E067312CCE4B0585" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="9D380A721830AAB2" classids="2125F588948A93A8" subjectid="E067312CCE4B0585" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="224926691A261187" classids="93B1FDB4552E40CB" subjectid="E067312CCE4B0585" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="3C065F08CD0575C7" classids="A0051BD907FF09EA" subjectid="E067312CCE4B0585" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8FBD425EC76E08CE" classids="E4466A6A2A0105E1" subjectid="E067312CCE4B0585" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="ED6D768FB1F7DDE3" classids="04E0D73711AFB5CC" subjectid="E067312CCE4B0585" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1B9C3EF970CD6EBA" classids="875E1255FACC7CF0" subjectid="E067312CCE4B0585" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8CFF7CEDD22C22B6" classids="91D71EF26C851701" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="B1D356B6F7083B11" classroomids="A7EA206130B1EC08" groupids="394504935CB9C8E4" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="87175BDED874066F" classids="543F20B96064105B" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="DD27CDB207BE7C26" classroomids="9DFB2868AA625637" groupids="25E3A243011E5C16" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B5F6A6FC3E298B06" classids="DABEE2321BC5C2B9" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="2523A9603ACD8D26" classroomids="3951320FED32DE02" groupids="8F4136A3EF8D2A35" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="670F50AD2EB0C51D" classids="7FFEF5998D672DB3" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="ED62E6EBCB15D677" classroomids="69DBF489501B28DC" groupids="F78E665A7018507B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="4989B1CC14E91DE6" classids="B69200F25B7A1085" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="EB6D5A01431F5EBC" classroomids="36527D17C72C88F4" groupids="D744AE71EF0D4AD1" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1046EA9482FA874C" classids="0E198EA6ACFE894E" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="45546608DDA7DFBC" classroomids="E4A303A0781701E2" groupids="1F1EAEDE06B0B8B8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="10767BE834171496" classids="39C464004B99E2A9" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7A2A81212804C6A0" groupids="2C9C2A6DDEFFCA57" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="FE012224147B990B" classids="F576C365140195E9" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="3BE32B415A2905AB" groupids="FF7900BCB7D66F12" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="631B185CEDA43C30" classids="AA6F6CB0EBF2E409" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="5F41877D9601590C" groupids="D876C68F422BC493" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="50FDA75F75D06CB2" classids="7902170D36F945E0" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="468B7BF75E08553A" groupids="9FF1D586747FC15D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="3271DBAD898765D8" classids="4F56F997F7DD5368" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="F8AEF2669FAA7FD7" groupids="E18AC4F8E20FEE13" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="44DA22910097574E" classids="38ACDE6116B2BF16" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="5F9818B13F19C1DB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="52739234D3F7247E" classids="48E824A65B1D144F" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="874021A45A9583BD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="577F56009496FF07" classids="D92ADF84BAAED16C" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="DA74F6C4446E195D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="AD60058A08CA064D" classids="81340022B2F23C59" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="1367CB839D24D705" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E3EF7D70DF211467" classids="095C3A693C01B747" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="3BFAB65CF3650689" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="DB261B40684FF39D" classids="0035A0B32D7C512C" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="CAAE6DC441D040EF" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="0FBE638D8D5D182C" classids="2BE3F1E3B73831D0" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="F655431DE04B9A49" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B474950C832D8455" classids="3A3D3BFF357373D2" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C6FCABD0F4DB63B6" classids="122019AEDD7F12A1" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="ED829679CBC7FBEE" classids="08D705B8C7E40DF5" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="2D9F2201635C55B3" classids="4A6FF52B35743AAC" subjectid="1B8879485FA7BC1F" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C68D94021D90D448" classids="91D71EF26C851701" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="B1D356B6F7083B11" classroomids="A7EA206130B1EC08" groupids="394504935CB9C8E4" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="CE6D5A1F44263D09" classids="543F20B96064105B" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="DD27CDB207BE7C26" classroomids="9DFB2868AA625637" groupids="25E3A243011E5C16" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="FC07E87F5DA42BBE" classids="DABEE2321BC5C2B9" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="2523A9603ACD8D26" classroomids="3951320FED32DE02" groupids="8F4136A3EF8D2A35" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="6A9F43CDDC72F59B" classids="7FFEF5998D672DB3" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="ED62E6EBCB15D677" classroomids="69DBF489501B28DC" groupids="F78E665A7018507B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="15594727892FC39F" classids="B69200F25B7A1085" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="EB6D5A01431F5EBC" classroomids="36527D17C72C88F4" groupids="D744AE71EF0D4AD1" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B05D5FE6E0912B71" classids="0E198EA6ACFE894E" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="45546608DDA7DFBC" classroomids="E4A303A0781701E2" groupids="1F1EAEDE06B0B8B8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E8A34902C7422343" classids="39C464004B99E2A9" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="3355B8027347AF6B" classroomids="7A2A81212804C6A0" groupids="2C9C2A6DDEFFCA57" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1859A45775853322" classids="F576C365140195E9" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="7F30DE1FB7A28978" classroomids="3BE32B415A2905AB" groupids="FF7900BCB7D66F12" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="455A6F22002C2BCA" classids="AA6F6CB0EBF2E409" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="2CD8390A9BC7C7F8" classroomids="5F41877D9601590C" groupids="D876C68F422BC493" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B94C62C8C80AE31D" classids="7902170D36F945E0" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="9E709A59088055D2" classroomids="468B7BF75E08553A" groupids="9FF1D586747FC15D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="52BE80633824B9A6" classids="4F56F997F7DD5368" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="064571258C23C3E2" classroomids="F8AEF2669FAA7FD7" groupids="E18AC4F8E20FEE13" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="BFACFDD0724E09A1" classids="38ACDE6116B2BF16" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D" classroomids="FB3CBBAB26C7B160,7C4BADB3FFD3A3AE" groupids="5F9818B13F19C1DB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C09387E91691006A" classids="48E824A65B1D144F" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D" classroomids="FB3CBBAB26C7B160,7C4BADB3FFD3A3AE" groupids="874021A45A9583BD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="060352A4E4F1A07D" classids="D92ADF84BAAED16C" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D" classroomids="FB3CBBAB26C7B160,7C4BADB3FFD3A3AE" groupids="DA74F6C4446E195D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="FF454777C24AC3BA" classids="81340022B2F23C59" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D" classroomids="FB3CBBAB26C7B160,7C4BADB3FFD3A3AE" groupids="1367CB839D24D705" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C28B71D170E3BBCE" classids="095C3A693C01B747" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D" classroomids="FB3CBBAB26C7B160,7C4BADB3FFD3A3AE" groupids="3BFAB65CF3650689" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="FEA93DE5F350D063" classids="0035A0B32D7C512C" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D" classroomids="FB3CBBAB26C7B160,7C4BADB3FFD3A3AE" groupids="CAAE6DC441D040EF" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B20E167251DFEFD4" classids="2BE3F1E3B73831D0" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D" classroomids="FB3CBBAB26C7B160,7C4BADB3FFD3A3AE" groupids="F655431DE04B9A49" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="5A9DC96F6FD2D0E1" classids="3A3D3BFF357373D2" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="9BB5F363A7F148F2" classids="122019AEDD7F12A1" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="AC45656D3E5158E4" classids="08D705B8C7E40DF5" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="083E475C57190550" classids="4A6FF52B35743AAC" subjectid="579DB070DF80995C" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="AAB7EFAC73D0A068" classids="91D71EF26C851701" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="4.0" teacherids="B1D356B6F7083B11" classroomids="A7EA206130B1EC08" groupids="394504935CB9C8E4" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E749D50BC33E7ADA" classids="543F20B96064105B" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="4.0" teacherids="DD27CDB207BE7C26" classroomids="9DFB2868AA625637" groupids="25E3A243011E5C16" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="CD92949BD35BCE58" classids="DABEE2321BC5C2B9" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="4.0" teacherids="2523A9603ACD8D26" classroomids="3951320FED32DE02" groupids="8F4136A3EF8D2A35" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="03A0FCF36623849D" classids="7FFEF5998D672DB3" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="4.0" teacherids="ED62E6EBCB15D677" classroomids="69DBF489501B28DC" groupids="F78E665A7018507B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="10813FA95E541091" classids="B69200F25B7A1085" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="4.0" teacherids="EB6D5A01431F5EBC" classroomids="36527D17C72C88F4" groupids="D744AE71EF0D4AD1" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="EEBBBBBCAB3931EC" classids="0E198EA6ACFE894E" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="5.0" teacherids="45546608DDA7DFBC" classroomids="E4A303A0781701E2" groupids="1F1EAEDE06B0B8B8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="5614F8411AD444CA" classids="39C464004B99E2A9" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="5.0" teacherids="3355B8027347AF6B" classroomids="7A2A81212804C6A0" groupids="2C9C2A6DDEFFCA57" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="9E23F2CF1EF5903E" classids="F576C365140195E9" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="5.0" teacherids="7F30DE1FB7A28978" classroomids="3BE32B415A2905AB" groupids="FF7900BCB7D66F12" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="EF2F1F4264E6F372" classids="AA6F6CB0EBF2E409" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="5.0" teacherids="2CD8390A9BC7C7F8" classroomids="5F41877D9601590C" groupids="D876C68F422BC493" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="3A12880CE84EB05D" classids="7902170D36F945E0" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="5.0" teacherids="9E709A59088055D2" classroomids="468B7BF75E08553A" groupids="9FF1D586747FC15D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="2EA4F7C4161F3952" classids="4F56F997F7DD5368" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="5.0" teacherids="064571258C23C3E2" classroomids="F8AEF2669FAA7FD7" groupids="E18AC4F8E20FEE13" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1793059DD37C5A5F" classids="38ACDE6116B2BF16" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="5.0" teacherids="A5C5B6F205608CEF" classroomids="FC7C8CB90D2D3358" groupids="5F9818B13F19C1DB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B27875D743665E14" classids="48E824A65B1D144F" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="5.0" teacherids="A5C5B6F205608CEF" classroomids="FC7C8CB90D2D3358" groupids="874021A45A9583BD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="137A82040AC27A9B" classids="D92ADF84BAAED16C" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="5.0" teacherids="6AD23A8657561770" classroomids="3B926682EC41D040" groupids="DA74F6C4446E195D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="88EE0033E874EA5C" classids="81340022B2F23C59" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="5.0" teacherids="6AD23A8657561770" classroomids="3B926682EC41D040" groupids="1367CB839D24D705" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="A3E233703711D0CC" classids="095C3A693C01B747" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="5.0" teacherids="E58270295BC36F50" classroomids="5C9E31B1B08281F9" groupids="3BFAB65CF3650689" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="9547FB069591D232" classids="45DA8CE5F6916F02" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="3.0" teacherids="A5C5B6F205608CEF" classroomids="FC7C8CB90D2D3358" groupids="9A8EDC25F24C355A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D832FFBDAEA7DE99" classids="18B22B1162415AF7" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="3.0" teacherids="A5C5B6F205608CEF" classroomids="FC7C8CB90D2D3358" groupids="7298DC4673C0BA0E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="467F5EE8AE91E053" classids="29EE729ADF9BD2F8" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="3.0" teacherids="E58270295BC36F50" classroomids="5C9E31B1B08281F9" groupids="2424EE7550C8B5DA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7EA6B977B20B431D" classids="5E3FEB87026DA81A" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="3.0" teacherids="A5C5B6F205608CEF" classroomids="FC7C8CB90D2D3358" groupids="86DFE7C38F77C3A7" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="DD138BB754AA6176" classids="3A3D3BFF357373D2" subjectid="E2AFCA7DC330F5F0" periodspercard="1" periodsperweek="3.0" teacherids="A5C5B6F205608CEF" classroomids="FC7C8CB90D2D3358" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="668282B61E406FE3" classids="122019AEDD7F12A1" subjectid="E2AFCA7DC330F5F0" periodspercard="1" periodsperweek="3.0" teacherids="E58270295BC36F50" classroomids="5C9E31B1B08281F9" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="9451515CFCA679E7" classids="08D705B8C7E40DF5" subjectid="E2AFCA7DC330F5F0" periodspercard="1" periodsperweek="3.0" teacherids="E58270295BC36F50" classroomids="5C9E31B1B08281F9" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="74308D270172317F" classids="4A6FF52B35743AAC" subjectid="E2AFCA7DC330F5F0" periodspercard="1" periodsperweek="3.0" teacherids="6AD23A8657561770" classroomids="3B926682EC41D040" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7F44B25EC5B31453" classids="16310E27E49923D8" subjectid="E2AFCA7DC330F5F0" periodspercard="1" periodsperweek="3.0" teacherids="E02B659123566EF0" classroomids="38BD9ACE40F6D4A2" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F92CE6459B2E2A5C" classids="2125F588948A93A8" subjectid="E2AFCA7DC330F5F0" periodspercard="1" periodsperweek="3.0" teacherids="E02B659123566EF0" classroomids="38BD9ACE40F6D4A2" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D51B21612C2F68EE" classids="93B1FDB4552E40CB" subjectid="E2AFCA7DC330F5F0" periodspercard="1" periodsperweek="3.0" teacherids="E02B659123566EF0" classroomids="38BD9ACE40F6D4A2" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="727406F534127E85" classids="A0051BD907FF09EA" subjectid="E2AFCA7DC330F5F0" periodspercard="1" periodsperweek="3.0" teacherids="6AD23A8657561770" classroomids="3B926682EC41D040" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="6AE6DF27795F03F3" classids="E4466A6A2A0105E1" subjectid="E2AFCA7DC330F5F0" periodspercard="1" periodsperweek="2.0" teacherids="E02B659123566EF0" classroomids="38BD9ACE40F6D4A2" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="0A3D0144F5187D7C" classids="04E0D73711AFB5CC" subjectid="E2AFCA7DC330F5F0" periodspercard="1" periodsperweek="2.0" teacherids="E02B659123566EF0" classroomids="38BD9ACE40F6D4A2" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="CB4BD81D2315B255" classids="875E1255FACC7CF0" subjectid="E2AFCA7DC330F5F0" periodspercard="1" periodsperweek="2.0" teacherids="E02B659123566EF0" classroomids="38BD9ACE40F6D4A2" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="07C376E0C6174F93" classids="5E3FEB87026DA81A" subjectid="E2AFCA7DC330F5F0" periodspercard="1" periodsperweek="4.0" teacherids="E58270295BC36F50" classroomids="5C9E31B1B08281F9" groupids="BC9945E565574B51" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="2C257F5770B678ED" classids="3A3D3BFF357373D2" subjectid="5CDB5693265EA612" periodspercard="1" periodsperweek="2.0" teacherids="A5C5B6F205608CEF" classroomids="FC7C8CB90D2D3358" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="10EC11A39A431333" classids="122019AEDD7F12A1" subjectid="5CDB5693265EA612" periodspercard="1" periodsperweek="2.0" teacherids="E58270295BC36F50" classroomids="5C9E31B1B08281F9" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="ECE04AB45E84BC7D" classids="08D705B8C7E40DF5" subjectid="5CDB5693265EA612" periodspercard="1" periodsperweek="2.0" teacherids="E58270295BC36F50" classroomids="5C9E31B1B08281F9" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="DF37D76443D5194E" classids="4A6FF52B35743AAC" subjectid="5CDB5693265EA612" periodspercard="1" periodsperweek="2.0" teacherids="6AD23A8657561770" classroomids="3B926682EC41D040" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="39D4BC403A105647" classids="2125F588948A93A8" subjectid="5CDB5693265EA612" periodspercard="1" periodsperweek="2.0" teacherids="E02B659123566EF0" classroomids="38BD9ACE40F6D4A2" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="DBDCE1137E797F1D" classids="93B1FDB4552E40CB" subjectid="5CDB5693265EA612" periodspercard="1" periodsperweek="2.0" teacherids="E02B659123566EF0" classroomids="38BD9ACE40F6D4A2" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="4275FA58525A73DC" classids="A0051BD907FF09EA" subjectid="5CDB5693265EA612" periodspercard="1" periodsperweek="2.0" teacherids="6AD23A8657561770" classroomids="3B926682EC41D040" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="22F60D840443736C" classids="E4466A6A2A0105E1" subjectid="5CDB5693265EA612" periodspercard="1" periodsperweek="2.0" teacherids="E02B659123566EF0" classroomids="38BD9ACE40F6D4A2" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="19FBD540226A0928" classids="04E0D73711AFB5CC" subjectid="5CDB5693265EA612" periodspercard="1" periodsperweek="2.0" teacherids="E02B659123566EF0" classroomids="38BD9ACE40F6D4A2" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="687BAA2D64CDE518" classids="875E1255FACC7CF0" subjectid="5CDB5693265EA612" periodspercard="1" periodsperweek="2.0" teacherids="E02B659123566EF0" classroomids="38BD9ACE40F6D4A2" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1AF9D5EC8692C884" classids="5E3FEB87026DA81A" subjectid="5CDB5693265EA612" periodspercard="1" periodsperweek="3.0" teacherids="E58270295BC36F50" classroomids="5C9E31B1B08281F9" groupids="BC9945E565574B51" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1B6A3D7409E1A2B7" classids="45DA8CE5F6916F02" subjectid="1405EB90B0191584" periodspercard="1" periodsperweek="2.0" teacherids="A633B860F45D0B92" classroomids="BA090444FE16A1C8" groupids="9A8EDC25F24C355A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D722C58F299CB2E6" classids="29EE729ADF9BD2F8" subjectid="1405EB90B0191584" periodspercard="1" periodsperweek="2.0" teacherids="A633B860F45D0B92" classroomids="BA090444FE16A1C8" groupids="2424EE7550C8B5DA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="85C36FD0231F216C" classids="5E3FEB87026DA81A" subjectid="1405EB90B0191584" periodspercard="1" periodsperweek="2.0" teacherids="A633B860F45D0B92" classroomids="BA090444FE16A1C8" groupids="A236C656C2F2025A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="ED8577E501DCA74D" classids="E4466A6A2A0105E1" subjectid="B7AF0964D1E8A5B5" periodspercard="1" periodsperweek="2.0" teacherids="A633B860F45D0B92" classroomids="BA090444FE16A1C8" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="47AD73A2D022ABCF" classids="04E0D73711AFB5CC" subjectid="B7AF0964D1E8A5B5" periodspercard="1" periodsperweek="2.0" teacherids="A633B860F45D0B92" classroomids="BA090444FE16A1C8" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="17452A89B3FB2165" classids="875E1255FACC7CF0" subjectid="B7AF0964D1E8A5B5" periodspercard="1" periodsperweek="2.0" teacherids="A633B860F45D0B92" classroomids="BA090444FE16A1C8" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B2D55383E68B3769" classids="81340022B2F23C59" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="2.0" teacherids="8BA6AD7D34E06A50" classroomids="B9306436676D64CD" groupids="1367CB839D24D705" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="175F289023AF4BF6" classids="095C3A693C01B747" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="2.0" teacherids="8BA6AD7D34E06A50" classroomids="B9306436676D64CD" groupids="3BFAB65CF3650689" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="21A21C7B99A1F367" classids="3A3D3BFF357373D2" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="2.0" teacherids="EC67276BD314F6BB" classroomids="B9306436676D64CD" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="2CA721B198047286" classids="4A6FF52B35743AAC" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="2.0" teacherids="8BA6AD7D34E06A50" classroomids="B9306436676D64CD" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="3778248C3FF96BAD" classids="16310E27E49923D8" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="2.0" teacherids="8BA6AD7D34E06A50" classroomids="B9306436676D64CD" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F32038853D5C6C9B" classids="2125F588948A93A8" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="2.0" teacherids="8BA6AD7D34E06A50" classroomids="B9306436676D64CD" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="9FE145278ECA598D" classids="93B1FDB4552E40CB" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="2.0" teacherids="8BA6AD7D34E06A50" classroomids="B9306436676D64CD" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="6AEAFA3AE1A219AB" classids="A0051BD907FF09EA" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="2.0" teacherids="8BA6AD7D34E06A50" classroomids="B9306436676D64CD" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="78BDDB1B1457C1C7" classids="29EE729ADF9BD2F8" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="1.0" teacherids="04EC5F61E6BCE7C9" classroomids="B9306436676D64CD" groupids="2424EE7550C8B5DA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="9DE21D2668390818" classids="5E3FEB87026DA81A" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="1.0" teacherids="04EC5F61E6BCE7C9" classroomids="B9306436676D64CD" groupids="A236C656C2F2025A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7765F12F033E5B01" classids="3A3D3BFF357373D2" subjectid="F7335FAB22D44F49" periodspercard="1" periodsperweek="2.0" teacherids="C3A77532AABCB78E" classroomids="CFB44A3CF3CFF304" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="12E465EF985C8350" classids="122019AEDD7F12A1" subjectid="F7335FAB22D44F49" periodspercard="1" periodsperweek="2.0" teacherids="C3A77532AABCB78E" classroomids="CFB44A3CF3CFF304" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="EB790F2A8BE6ED70" classids="08D705B8C7E40DF5" subjectid="F7335FAB22D44F49" periodspercard="1" periodsperweek="2.0" teacherids="C3A77532AABCB78E" classroomids="CFB44A3CF3CFF304" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="57D7C62CA47C0360" classids="4A6FF52B35743AAC" subjectid="F7335FAB22D44F49" periodspercard="1" periodsperweek="2.0" teacherids="C3A77532AABCB78E" classroomids="CFB44A3CF3CFF304" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="BCE2DB1C74025B5A" classids="16310E27E49923D8" subjectid="F7335FAB22D44F49" periodspercard="1" periodsperweek="2.0" teacherids="C3A77532AABCB78E" classroomids="CFB44A3CF3CFF304" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="733E4BFEA2663339" classids="2125F588948A93A8" subjectid="F7335FAB22D44F49" periodspercard="1" periodsperweek="2.0" teacherids="C3A77532AABCB78E" classroomids="CFB44A3CF3CFF304" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="A2134D3E07CEC4C3" classids="93B1FDB4552E40CB" subjectid="F7335FAB22D44F49" periodspercard="1" periodsperweek="2.0" teacherids="C3A77532AABCB78E" classroomids="CFB44A3CF3CFF304" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7450E9BCF60EE04F" classids="04E0D73711AFB5CC" subjectid="F7335FAB22D44F49" periodspercard="1" periodsperweek="3.0" teacherids="EAFE469500FCDC05" classroomids="CFB44A3CF3CFF304" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="96B92FF24E67C227" classids="18B22B1162415AF7" subjectid="F7335FAB22D44F49" periodspercard="1" periodsperweek="3.0" teacherids="C3A77532AABCB78E" classroomids="CFB44A3CF3CFF304" groupids="7298DC4673C0BA0E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C91FA960BBBA840B" classids="29EE729ADF9BD2F8" subjectid="F7335FAB22D44F49" periodspercard="1" periodsperweek="3.0" teacherids="EAFE469500FCDC05" classroomids="CFB44A3CF3CFF304" groupids="2424EE7550C8B5DA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F778E78318676B4D" classids="5E3FEB87026DA81A" subjectid="F7335FAB22D44F49" periodspercard="1" periodsperweek="3.0" teacherids="C3A77532AABCB78E" classroomids="CFB44A3CF3CFF304" groupids="A236C656C2F2025A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="413F6A46CD4B1DCF" classids="29EE729ADF9BD2F8" subjectid="2906095A2C92F853" periodspercard="1" periodsperweek="1.0" teacherids="C3A77532AABCB78E" classroomids="CFB44A3CF3CFF304" groupids="2424EE7550C8B5DA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B20EDF31CB22586B" classids="5E3FEB87026DA81A" subjectid="2906095A2C92F853" periodspercard="1" periodsperweek="1.0" teacherids="C3A77532AABCB78E" classroomids="CFB44A3CF3CFF304" groupids="A236C656C2F2025A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="2B547BACED9ECF2F" classids="3A3D3BFF357373D2" subjectid="6E9C24DDF8128C35" periodspercard="1" periodsperweek="1.0" teacherids="CFF428FE18F4DC0C" classroomids="EA2F851F31637E65" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="FD9EE034FE419367" classids="122019AEDD7F12A1" subjectid="6E9C24DDF8128C35" periodspercard="1" periodsperweek="1.0" teacherids="CFF428FE18F4DC0C" classroomids="EA2F851F31637E65" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="EA5426531A6BE1A3" classids="08D705B8C7E40DF5" subjectid="6E9C24DDF8128C35" periodspercard="1" periodsperweek="1.0" teacherids="CFF428FE18F4DC0C" classroomids="EA2F851F31637E65" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="20C62191C514164A" classids="4A6FF52B35743AAC" subjectid="6E9C24DDF8128C35" periodspercard="1" periodsperweek="1.0" teacherids="CFF428FE18F4DC0C" classroomids="EA2F851F31637E65" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7ACA5CB9C5E020E2" classids="16310E27E49923D8" subjectid="6E9C24DDF8128C35" periodspercard="1" periodsperweek="2.0" teacherids="CFF428FE18F4DC0C" classroomids="EA2F851F31637E65" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="2B139FBABBEF4752" classids="2125F588948A93A8" subjectid="6E9C24DDF8128C35" periodspercard="1" periodsperweek="2.0" teacherids="CFF428FE18F4DC0C" classroomids="EA2F851F31637E65" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="21D1EB3310E124B0" classids="93B1FDB4552E40CB" subjectid="6E9C24DDF8128C35" periodspercard="1" periodsperweek="2.0" teacherids="CFF428FE18F4DC0C" classroomids="EA2F851F31637E65" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="178C228BC9C2E495" classids="A0051BD907FF09EA" subjectid="6E9C24DDF8128C35" periodspercard="1" periodsperweek="2.0" teacherids="CFF428FE18F4DC0C" classroomids="EA2F851F31637E65" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1D41CD4D7E14A91A" classids="E4466A6A2A0105E1" subjectid="6E9C24DDF8128C35" periodspercard="1" periodsperweek="2.0" teacherids="CFF428FE18F4DC0C" classroomids="EA2F851F31637E65" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="A0B69E6A48C07A0E" classids="04E0D73711AFB5CC" subjectid="6E9C24DDF8128C35" periodspercard="1" periodsperweek="2.0" teacherids="CFF428FE18F4DC0C" classroomids="EA2F851F31637E65" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="68EF01B71FCC1BBB" classids="875E1255FACC7CF0" subjectid="6E9C24DDF8128C35" periodspercard="1" periodsperweek="2.0" teacherids="CFF428FE18F4DC0C" classroomids="EA2F851F31637E65" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="655A31E631B1BBE5" classids="29EE729ADF9BD2F8" subjectid="6E9C24DDF8128C35" periodspercard="1" periodsperweek="2.0" teacherids="CFF428FE18F4DC0C" classroomids="EA2F851F31637E65" groupids="2424EE7550C8B5DA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="AFE0F9319232CC86" classids="5E3FEB87026DA81A" subjectid="6E9C24DDF8128C35" periodspercard="1" periodsperweek="2.0" teacherids="CFF428FE18F4DC0C" classroomids="EA2F851F31637E65" groupids="A236C656C2F2025A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1F7831245CF875DC" classids="91D71EF26C851701" subjectid="04466428AF75D73B" periodspercard="1" periodsperweek="1.0" teacherids="B1D356B6F7083B11" classroomids="A7EA206130B1EC08" groupids="394504935CB9C8E4" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="072A09C5F27AC14A" classids="543F20B96064105B" subjectid="04466428AF75D73B" periodspercard="1" periodsperweek="1.0" teacherids="DD27CDB207BE7C26" classroomids="9DFB2868AA625637" groupids="25E3A243011E5C16" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D1FE4695151D1C12" classids="DABEE2321BC5C2B9" subjectid="04466428AF75D73B" periodspercard="1" periodsperweek="1.0" teacherids="2523A9603ACD8D26" classroomids="3951320FED32DE02" groupids="8F4136A3EF8D2A35" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B75BD6C3B916B336" classids="0E198EA6ACFE894E" subjectid="04466428AF75D73B" periodspercard="1" periodsperweek="1.0" teacherids="45546608DDA7DFBC" classroomids="E4A303A0781701E2" groupids="1F1EAEDE06B0B8B8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="17E9EE062B38DEE1" classids="39C464004B99E2A9" subjectid="04466428AF75D73B" periodspercard="1" periodsperweek="1.0" teacherids="3355B8027347AF6B" classroomids="7A2A81212804C6A0" groupids="2C9C2A6DDEFFCA57" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D5F1DC3E7E62C163" classids="F576C365140195E9" subjectid="04466428AF75D73B" periodspercard="1" periodsperweek="1.0" teacherids="7F30DE1FB7A28978" classroomids="3BE32B415A2905AB" groupids="FF7900BCB7D66F12" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="5F7F314DF821F980" classids="AA6F6CB0EBF2E409" subjectid="04466428AF75D73B" periodspercard="1" periodsperweek="1.0" teacherids="2CD8390A9BC7C7F8" classroomids="5F41877D9601590C" groupids="D876C68F422BC493" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="78E0664756D2C5CE" classids="7902170D36F945E0" subjectid="04466428AF75D73B" periodspercard="1" periodsperweek="1.0" teacherids="9E709A59088055D2" classroomids="468B7BF75E08553A" groupids="9FF1D586747FC15D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="A4127E47DD4297BD" classids="4F56F997F7DD5368" subjectid="04466428AF75D73B" periodspercard="1" periodsperweek="1.0" teacherids="064571258C23C3E2" classroomids="F8AEF2669FAA7FD7" groupids="E18AC4F8E20FEE13" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="529058CEF3C374C3" classids="38ACDE6116B2BF16" subjectid="A71A9327E2AFF47C" periodspercard="1" periodsperweek="1.0" teacherids="E1A85960AA168319" classroomids="F0747FC29D78C2F1" groupids="5F9818B13F19C1DB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="A9C49C7F1E2098AD" classids="48E824A65B1D144F" subjectid="A71A9327E2AFF47C" periodspercard="1" periodsperweek="1.0" teacherids="E1A85960AA168319" classroomids="F0747FC29D78C2F1" groupids="874021A45A9583BD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="535E374A35E0C658" classids="81340022B2F23C59" subjectid="A71A9327E2AFF47C" periodspercard="1" periodsperweek="1.0" teacherids="A25E3D5B57F7C29E" classroomids="F0747FC29D78C2F1" groupids="1367CB839D24D705" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="396AE1CBF289564D" classids="095C3A693C01B747" subjectid="A71A9327E2AFF47C" periodspercard="1" periodsperweek="1.0" teacherids="A25E3D5B57F7C29E" classroomids="F0747FC29D78C2F1" groupids="3BFAB65CF3650689" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F485FA438F3D44F1" classids="16310E27E49923D8" subjectid="A71A9327E2AFF47C" periodspercard="1" periodsperweek="1.0" teacherids="A25E3D5B57F7C29E" classroomids="F0747FC29D78C2F1" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F3A02E02A10F2E86" classids="2125F588948A93A8" subjectid="A71A9327E2AFF47C" periodspercard="1" periodsperweek="1.0" teacherids="A25E3D5B57F7C29E" classroomids="F0747FC29D78C2F1" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="4C0EC77AA433D4D5" classids="93B1FDB4552E40CB" subjectid="A71A9327E2AFF47C" periodspercard="1" periodsperweek="1.0" teacherids="A25E3D5B57F7C29E" classroomids="F0747FC29D78C2F1" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="756C2E3F8F68B028" classids="A0051BD907FF09EA" subjectid="A71A9327E2AFF47C" periodspercard="1" periodsperweek="1.0" teacherids="A25E3D5B57F7C29E" classroomids="F0747FC29D78C2F1" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="0A73515CD9708199" classids="E4466A6A2A0105E1" subjectid="003A21684F3380FD" periodspercard="1" periodsperweek="1.0" teacherids="E1A85960AA168319" classroomids="F0747FC29D78C2F1" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D62C81FB4AB06C10" classids="04E0D73711AFB5CC" subjectid="003A21684F3380FD" periodspercard="1" periodsperweek="1.0" teacherids="E1A85960AA168319" classroomids="F0747FC29D78C2F1" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="64D757466987B76F" classids="875E1255FACC7CF0" subjectid="003A21684F3380FD" periodspercard="1" periodsperweek="1.0" teacherids="E1A85960AA168319" classroomids="F0747FC29D78C2F1" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E6FAB9644FBCCC14" classids="543F20B96064105B" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="A8685BE2945910CA" classroomids="D73C84710607B70E,798246240B4F2214,F61647EE09423290" groupids="25E3A243011E5C16" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="878E30DB97954E0C" classids="DABEE2321BC5C2B9" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="0563E949645A597C" classroomids="D73C84710607B70E,798246240B4F2214,F61647EE09423290" groupids="8F4136A3EF8D2A35" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8DADAE8DF22C17B2" classids="7FFEF5998D672DB3" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="0563E949645A597C" classroomids="D73C84710607B70E,798246240B4F2214,F61647EE09423290" groupids="F78E665A7018507B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D5AD0751FBF17D0D" classids="B69200F25B7A1085" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="0563E949645A597C" classroomids="D73C84710607B70E,798246240B4F2214,F61647EE09423290" groupids="D744AE71EF0D4AD1" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E6DD67BCB77FDA2C" classids="0E198EA6ACFE894E" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="0563E949645A597C" classroomids="D73C84710607B70E,798246240B4F2214,F61647EE09423290" groupids="1F1EAEDE06B0B8B8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="EAB1711340E7A0DA" classids="39C464004B99E2A9" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="0563E949645A597C" classroomids="D73C84710607B70E,798246240B4F2214,F61647EE09423290" groupids="2C9C2A6DDEFFCA57" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D21E9144F31CA820" classids="F576C365140195E9" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="0563E949645A597C" classroomids="D73C84710607B70E,798246240B4F2214,F61647EE09423290" groupids="FF7900BCB7D66F12" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E927B4C4F8234452" classids="AA6F6CB0EBF2E409" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="936A5C3A29066F6B" classroomids="D73C84710607B70E,798246240B4F2214,F61647EE09423290" groupids="D876C68F422BC493" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="FEEFE9735203E62C" classids="7902170D36F945E0" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="936A5C3A29066F6B" classroomids="D73C84710607B70E,798246240B4F2214,F61647EE09423290" groupids="9FF1D586747FC15D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="FF035533AF491A56" classids="4F56F997F7DD5368" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="936A5C3A29066F6B" classroomids="D73C84710607B70E,798246240B4F2214,F61647EE09423290" groupids="E18AC4F8E20FEE13" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="A220515FF3596103" classids="48E824A65B1D144F" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="4.0" teacherids="03D6C2A727AE3085" classroomids="F4B98DA5599C5C3D,7C4BADB3FFD3A3AE" groupids="874021A45A9583BD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D06EEFEC80D3F7E8" classids="38ACDE6116B2BF16" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="4.0" teacherids="03D6C2A727AE3085" classroomids="F4B98DA5599C5C3D,7C4BADB3FFD3A3AE" groupids="5F9818B13F19C1DB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8A7A62253D97514E" classids="38ACDE6116B2BF16" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="03D6C2A727AE3085" classroomids="F4B98DA5599C5C3D,7C4BADB3FFD3A3AE" groupids="5F9818B13F19C1DB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="3AE8EE188AEB7AE0" classids="93B1FDB4552E40CB" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="03D6C2A727AE3085" classroomids="F4B98DA5599C5C3D,7C4BADB3FFD3A3AE" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D0F00F971FEBD791" classids="93B1FDB4552E40CB" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="3.0" teacherids="03D6C2A727AE3085" classroomids="F4B98DA5599C5C3D,7C4BADB3FFD3A3AE" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="964FB5DE776EF7FC" classids="2125F588948A93A8" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="03D6C2A727AE3085" classroomids="F4B98DA5599C5C3D,7C4BADB3FFD3A3AE" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7D66FE4C2A50DA04" classids="18B22B1162415AF7" subjectid="1405EB90B0191584" periodspercard="1" periodsperweek="4.0" teacherids="A633B860F45D0B92" classroomids="BA090444FE16A1C8" groupids="9AEC3BF17FD7F6F0" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="13D3C51C05B06379" classids="18B22B1162415AF7" subjectid="1405EB90B0191584" periodspercard="1" periodsperweek="2.0" teacherids="A633B860F45D0B92" classroomids="BA090444FE16A1C8" groupids="7CD4B7B828CF3D3D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="BD7C56D3147DF456" classids="D92ADF84BAAED16C" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="4248EA1473E04BD4" classroomids="D73C84710607B70E,798246240B4F2214,F61647EE09423290" groupids="DA74F6C4446E195D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="64E24E6F2053C415" classids="38ACDE6116B2BF16" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="045BB455D04AFFDF" classroomids="D73C84710607B70E,798246240B4F2214,F61647EE09423290" groupids="5F9818B13F19C1DB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="FB07B0D92A2B14C0" classids="18B22B1162415AF7" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="4248EA1473E04BD4" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="7298DC4673C0BA0E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="A13C93FECE515798" classids="29EE729ADF9BD2F8" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="4CE5ED34D91534D9" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="2424EE7550C8B5DA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="74538BAA3A19BD29" classids="81340022B2F23C59" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="936A5C3A29066F6B" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="1367CB839D24D705" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="EC69186594DF1049" classids="095C3A693C01B747" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="936A5C3A29066F6B" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="3BFAB65CF3650689" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="5FA53D8E90FCCD08" classids="0035A0B32D7C512C" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="4248EA1473E04BD4" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="CAAE6DC441D040EF" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="DB9352E692FB63EE" classids="2BE3F1E3B73831D0" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="4248EA1473E04BD4" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="F655431DE04B9A49" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="FCE2EF8F9EE54871" classids="3A3D3BFF357373D2" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="BA2E9BCD93567EE6" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="BDC11991D0DF6520" classids="122019AEDD7F12A1" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="BA2E9BCD93567EE6" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="A35B90FD048CFED3" classids="08D705B8C7E40DF5" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="A8685BE2945910CA" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E2A347D2093C4BAA" classids="4A6FF52B35743AAC" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="A8685BE2945910CA" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C5D460F8EE8706DF" classids="16310E27E49923D8" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="BA2E9BCD93567EE6" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="848BD9B754904D5F" classids="2125F588948A93A8" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="BA2E9BCD93567EE6" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C956BA57FEDDF478" classids="93B1FDB4552E40CB" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="BA2E9BCD93567EE6" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1E034F9CA9CFDE24" classids="A0051BD907FF09EA" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="BA2E9BCD93567EE6" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F6689860CD6DBBF0" classids="04E0D73711AFB5CC" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="A8685BE2945910CA" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="5432719725B7E852" classids="875E1255FACC7CF0" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="4CE5ED34D91534D9" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="66CD23D199A9C39C" classids="16310E27E49923D8" subjectid="5CDB5693265EA612" periodspercard="1" periodsperweek="2.0" teacherids="E02B659123566EF0" classroomids="38BD9ACE40F6D4A2" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="81B7099292534B89" classids="E4466A6A2A0105E1" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="2.0" teacherids="49BFC6539E22D57B" classroomids="0AD16578DAE2BA2E,7C4BADB3FFD3A3AE" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="ABFF375F076ED474" classids="DABEE2321BC5C2B9" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="2523A9603ACD8D26" classroomids="FB1B3BB135030306" groupids="E6EF5520C9C65B31" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="DAC33E3672C8539E" classids="7FFEF5998D672DB3" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="2523A9603ACD8D26" classroomids="FB1B3BB135030306" groupids="EF6066588EC88EBE" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B3AEFD1EB55464F6" classids="B69200F25B7A1085" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="EB6D5A01431F5EBC" classroomids="CA61C1AC40D20CBA" groupids="05C91D321731FE25" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E71F7C563EAF9BD9" classids="B69200F25B7A1085" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="ED62E6EBCB15D677" classroomids="FB1B3BB135030306" groupids="0717B89AB610BECC" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="639E06550B0213C5" classids="0E198EA6ACFE894E" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="B1D356B6F7083B11" classroomids="FB1B3BB135030306" groupids="A66BF87A5EFF6EDF" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B286BCEC2810879D" classids="0E198EA6ACFE894E" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="DD27CDB207BE7C26" classroomids="18EAD7475208E4B6" groupids="6C7FBBEBD8A70DF4" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="03F12EEECFC622D1" classids="39C464004B99E2A9" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="DD27CDB207BE7C26" classroomids="FB1B3BB135030306" groupids="FFB0437A544BCCEA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="53DEB0EBB7D312BC" classids="39C464004B99E2A9" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="7F30DE1FB7A28978" classroomids="18EAD7475208E4B6" groupids="8CE983C31DB29679" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8304F5897D31621C" classids="F576C365140195E9" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="7F30DE1FB7A28978" classroomids="18EAD7475208E4B6" groupids="732A943637274BAD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E581305243440479" classids="F576C365140195E9" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="B1D356B6F7083B11" classroomids="FB1B3BB135030306" groupids="CE5DE1E397DC2550" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="58AC659A3517E3CE" classids="AA6F6CB0EBF2E409" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="064571258C23C3E2" classroomids="FB1B3BB135030306" groupids="B3C7399D3BB64D7E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E0B20599AD0653A4" classids="AA6F6CB0EBF2E409" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="2CD8390A9BC7C7F8" classroomids="CA61C1AC40D20CBA" groupids="8CD37B23FE0FD201" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8477891DA67A859E" classids="7902170D36F945E0" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="2CD8390A9BC7C7F8" classroomids="CA61C1AC40D20CBA" groupids="8D27E38C5138AEA0" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="9ABB9C23AD6916A9" classids="7902170D36F945E0" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="9E709A59088055D2" classroomids="FB1B3BB135030306" groupids="055ED1B949CADFBE" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D78319EEC22CEE88" classids="4F56F997F7DD5368" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="064571258C23C3E2" classroomids="CA61C1AC40D20CBA" groupids="5BD84642E5F46F89" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F1D512538F7F6A39" classids="4F56F997F7DD5368" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="9E709A59088055D2" classroomids="FB1B3BB135030306" groupids="9192288DD0D36FEA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C50BCA9F313E9DEF" classids="0035A0B32D7C512C" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="7064FE0F72530351" classroomids="0AD16578DAE2BA2E" groupids="CAAE6DC441D040EF" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="682611FE9456F2B7" classids="81340022B2F23C59" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="7064FE0F72530351" classroomids="0AD16578DAE2BA2E" groupids="1367CB839D24D705" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7C9C25DBDE61F34D" classids="3A3D3BFF357373D2,122019AEDD7F12A1" subjectid="6342EE4F0B394605" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D" classroomids="FB3CBBAB26C7B160" groupids="FEC43105784F5CA1,DFA806C53C410BBE" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="802E2FF22F95DD38" classids="08D705B8C7E40DF5,4A6FF52B35743AAC" subjectid="6342EE4F0B394605" periodspercard="1" periodsperweek="1.0" teacherids="EA5F97500C53D20F" classroomids="D351F555F1C80A53" groupids="4EC7C6658BC045B5,DA02D4AB7A25E71B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="0BF181AC774FBEE1" classids="08D705B8C7E40DF5,4A6FF52B35743AAC" subjectid="6342EE4F0B394605" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D" classroomids="FB3CBBAB26C7B160" groupids="501261CE2A7F065C,0FB8B6F664E4E77C" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="A42D34E29D8939FC" classids="16310E27E49923D8" subjectid="6342EE4F0B394605" periodspercard="1" periodsperweek="1.0" teacherids="EA5F97500C53D20F" classroomids="D351F555F1C80A53" groupids="AD708C1E9E5B42DA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E96B356530CDD8B2" classids="16310E27E49923D8" subjectid="6342EE4F0B394605" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D" classroomids="FB3CBBAB26C7B160" groupids="4E05DBDB780E173D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="65F12BD687D94365" classids="A0051BD907FF09EA" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="32D6562B18E691C3" classroomids="DF7D82DE0699F5C3,B00A0D9D1FDDA638,E602EDDA0E66F7CB" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="FACD5085A47DF76A" classids="DABEE2321BC5C2B9" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="EB6D5A01431F5EBC" classroomids="268956F2308D2762" groupids="E4FDC0752A2604EB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D9D879EE714EE487" classids="D92ADF84BAAED16C" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="4.0" teacherids="CBBE94ADD7E20AA5" classroomids="C9CA9F2233FAE7CD" groupids="DA74F6C4446E195D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="334C1D27B64E9582" classids="875E1255FACC7CF0" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="2.0" teacherids="CBBE94ADD7E20AA5" classroomids="C9CA9F2233FAE7CD" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="71B4FDDC5A4A3A42" classids="875E1255FACC7CF0" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="CBBE94ADD7E20AA5" classroomids="C9CA9F2233FAE7CD" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="DC0B256A55936E91" classids="7FFEF5998D672DB3" subjectid="04466428AF75D73B" periodspercard="1" periodsperweek="1.0" teacherids="FE60224534126142" classroomids="69DBF489501B28DC" groupids="F78E665A7018507B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="53AFBBF17D5235C0" classids="B69200F25B7A1085" subjectid="04466428AF75D73B" periodspercard="1" periodsperweek="1.0" teacherids="FE60224534126142" classroomids="36527D17C72C88F4" groupids="D744AE71EF0D4AD1" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8D1266AB83D04789" classids="0035A0B32D7C512C" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="2.0" teacherids="5B6D4AAA14966A8E" classroomids="B9306436676D64CD" groupids="CAAE6DC441D040EF" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C1D6DED3F8B4EC32" classids="3A3D3BFF357373D2,122019AEDD7F12A1" subjectid="6342EE4F0B394605" periodspercard="1" periodsperweek="1.0" teacherids="EA5F97500C53D20F" classroomids="D351F555F1C80A53" groupids="6C8FE17B791D493E,4D743B64520E7112" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F61093F8558B2784" classids="38ACDE6116B2BF16" subjectid="6342EE4F0B394605" periodspercard="2" periodsperweek="2.0" teacherids="EA5F97500C53D20F" classroomids="D351F555F1C80A53" groupids="5F9818B13F19C1DB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="FFEBA8E959483B22" classids="48E824A65B1D144F" subjectid="6342EE4F0B394605" periodspercard="2" periodsperweek="2.0" teacherids="EA5F97500C53D20F" classroomids="D351F555F1C80A53" groupids="874021A45A9583BD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="4078616EE4484850" classids="D92ADF84BAAED16C" subjectid="6342EE4F0B394605" periodspercard="2" periodsperweek="2.0" teacherids="EA5F97500C53D20F" classroomids="D351F555F1C80A53" groupids="DA74F6C4446E195D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B2EA0CE8783AB48C" classids="81340022B2F23C59,095C3A693C01B747" subjectid="6342EE4F0B394605" periodspercard="2" periodsperweek="2.0" teacherids="8B87B16CE46A712D" classroomids="FB3CBBAB26C7B160" groupids="A4F5DF036851D7F1,37C95C2F3CC6F592" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C569277908A4E2DE" classids="81340022B2F23C59,095C3A693C01B747" subjectid="6342EE4F0B394605" periodspercard="2" periodsperweek="2.0" teacherids="EA5F97500C53D20F" classroomids="D351F555F1C80A53" groupids="B0204864F8FF71FE,7E942C624416D837" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="54BB8BBD951F1EF0" classids="0035A0B32D7C512C,2BE3F1E3B73831D0" subjectid="6342EE4F0B394605" periodspercard="2" periodsperweek="2.0" teacherids="8B87B16CE46A712D" classroomids="FB3CBBAB26C7B160" groupids="6D3C594513E0F0DE,C4481EBD70D3FAEA" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="5E811C8FA9237D07" classids="0035A0B32D7C512C,2BE3F1E3B73831D0" subjectid="6342EE4F0B394605" periodspercard="2" periodsperweek="2.0" teacherids="EA5F97500C53D20F" classroomids="D351F555F1C80A53" groupids="3782FB233E016934,C7CCDAE7DEEEA283" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B9D070CCFBA134ED" classids="38ACDE6116B2BF16" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="4.0" teacherids="9078B81933858453" classroomids="B00A0D9D1FDDA638" groupids="5F9818B13F19C1DB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F389847CE6404EAD" classids="48E824A65B1D144F" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="4.0" teacherids="6BB47ECCAD71BB50" classroomids="E602EDDA0E66F7CB" groupids="874021A45A9583BD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F1F340DA2241ED24" classids="D92ADF84BAAED16C" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="4.0" teacherids="9078B81933858453" classroomids="B00A0D9D1FDDA638" groupids="DA74F6C4446E195D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="87679E23A93A8580" classids="095C3A693C01B747" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="9078B81933858453" classroomids="B00A0D9D1FDDA638" groupids="3BFAB65CF3650689" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="35BB90D47BFD8F1A" classids="0035A0B32D7C512C" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="0B4BD65965AF73F1" classroomids="B00A0D9D1FDDA638,E602EDDA0E66F7CB" groupids="CAAE6DC441D040EF" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="4A06C1EC49FFA92A" classids="2BE3F1E3B73831D0" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="32D6562B18E691C3" classroomids="DF7D82DE0699F5C3,B00A0D9D1FDDA638,E602EDDA0E66F7CB" groupids="F655431DE04B9A49" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="FFCB72163247D634" classids="3A3D3BFF357373D2" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="4.0" teacherids="9078B81933858453" classroomids="B00A0D9D1FDDA638" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="01CB284D83B0DBC1" classids="122019AEDD7F12A1" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="4.0" teacherids="6BB47ECCAD71BB50" classroomids="E602EDDA0E66F7CB" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="12803548D414E4B4" classids="08D705B8C7E40DF5" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="4.0" teacherids="6BB47ECCAD71BB50" classroomids="E602EDDA0E66F7CB" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="946924572B4B8A63" classids="4A6FF52B35743AAC" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="4.0" teacherids="6BB47ECCAD71BB50" classroomids="E602EDDA0E66F7CB" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="EBED312240D09B74" classids="18B22B1162415AF7" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="4.0" teacherids="CBBE94ADD7E20AA5" classroomids="C9CA9F2233FAE7CD" groupids="7CD4B7B828CF3D3D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C10E698C6329E247" classids="38ACDE6116B2BF16" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="1.0" teacherids="49BFC6539E22D57B" classroomids="0AD16578DAE2BA2E" groupids="5F9818B13F19C1DB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="6D9463F99D945FF8" classids="48E824A65B1D144F" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="1.0" teacherids="49BFC6539E22D57B" classroomids="0AD16578DAE2BA2E" groupids="874021A45A9583BD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F0358592305C8325" classids="D92ADF84BAAED16C" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="1.0" teacherids="49BFC6539E22D57B" classroomids="0AD16578DAE2BA2E" groupids="DA74F6C4446E195D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="42EBF934D3F5C8AC" classids="095C3A693C01B747" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="2.0" teacherids="7064FE0F72530351" classroomids="0AD16578DAE2BA2E" groupids="3BFAB65CF3650689" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="A89F8D7F07924D08" classids="2BE3F1E3B73831D0" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="2.0" teacherids="7064FE0F72530351" classroomids="0AD16578DAE2BA2E" groupids="F655431DE04B9A49" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="50B42CE580CD714C" classids="122019AEDD7F12A1" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="2.0" teacherids="49BFC6539E22D57B" classroomids="0AD16578DAE2BA2E" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8A0C049897F46276" classids="08D705B8C7E40DF5" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="2.0" teacherids="49BFC6539E22D57B" classroomids="0AD16578DAE2BA2E" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C60AD03B2D43ED21" classids="16310E27E49923D8" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="2.0" teacherids="49BFC6539E22D57B" classroomids="7C4BADB3FFD3A3AE" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B1FB5F0A937DEE66" classids="2125F588948A93A8" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="2.0" teacherids="49BFC6539E22D57B" classroomids="7C4BADB3FFD3A3AE" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="521A22F175D2F90E" classids="93B1FDB4552E40CB" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="2.0" teacherids="49BFC6539E22D57B" classroomids="7C4BADB3FFD3A3AE" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="BE8BEC099EF64D78" classids="A0051BD907FF09EA" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="2.0" teacherids="49BFC6539E22D57B" classroomids="7C4BADB3FFD3A3AE" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="43C8F3F6ED3516CF" classids="16310E27E49923D8" subjectid="531D8B6F52071795" periodspercard="1" periodsperweek="1.0" teacherids="ED82ACF33AB2D965" classroomids="41E9B46601036D28" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1858B94082D128A3" classids="2125F588948A93A8" subjectid="531D8B6F52071795" periodspercard="1" periodsperweek="1.0" teacherids="ED82ACF33AB2D965" classroomids="41E9B46601036D28" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E88BE372A3F149D6" classids="93B1FDB4552E40CB" subjectid="531D8B6F52071795" periodspercard="1" periodsperweek="1.0" teacherids="5B6D4AAA14966A8E" classroomids="3A7F9885FF288845" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="98A7ED80E48BB607" classids="A0051BD907FF09EA" subjectid="531D8B6F52071795" periodspercard="1" periodsperweek="1.0" teacherids="ED82ACF33AB2D965" classroomids="41E9B46601036D28" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="CBFE7BCB405E9F7B" classids="E4466A6A2A0105E1" subjectid="531D8B6F52071795" periodspercard="1" periodsperweek="2.0" teacherids="ED82ACF33AB2D965" classroomids="41E9B46601036D28" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="86C0B554DA13D79F" classids="04E0D73711AFB5CC" subjectid="531D8B6F52071795" periodspercard="1" periodsperweek="2.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="FAB068860AECE4BE" classids="875E1255FACC7CF0" subjectid="531D8B6F52071795" periodspercard="1" periodsperweek="2.0" teacherids="ED82ACF33AB2D965" classroomids="41E9B46601036D28" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="6FB9566A8F47DE9C" classids="18B22B1162415AF7" subjectid="531D8B6F52071795" periodspercard="1" periodsperweek="1.0" teacherids="ED82ACF33AB2D965" classroomids="41E9B46601036D28" groupids="7298DC4673C0BA0E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="355D4E692D7CF088" classids="5E3FEB87026DA81A" subjectid="531D8B6F52071795" periodspercard="1" periodsperweek="1.0" teacherids="ED82ACF33AB2D965" classroomids="41E9B46601036D28" groupids="A236C656C2F2025A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="CF922AAD4BA4AE91" classids="81340022B2F23C59" subjectid="6AB5D3617AF9D48E" periodspercard="1" periodsperweek="1.0" teacherids="04EC5F61E6BCE7C9" classroomids="3A7F9885FF288845" groupids="1367CB839D24D705" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1E7C2B508F090664" classids="095C3A693C01B747" subjectid="6AB5D3617AF9D48E" periodspercard="1" periodsperweek="1.0" teacherids="04EC5F61E6BCE7C9" classroomids="3A7F9885FF288845" groupids="3BFAB65CF3650689" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="EE9999A12B4494ED" classids="0035A0B32D7C512C" subjectid="6AB5D3617AF9D48E" periodspercard="1" periodsperweek="1.0" teacherids="04EC5F61E6BCE7C9" classroomids="3A7F9885FF288845" groupids="CAAE6DC441D040EF" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F0BE4444B9BAD4EB" classids="2BE3F1E3B73831D0" subjectid="6AB5D3617AF9D48E" periodspercard="1" periodsperweek="1.0" teacherids="04EC5F61E6BCE7C9" classroomids="3A7F9885FF288845" groupids="F655431DE04B9A49" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="69465C993BED02A6" classids="4A6FF52B35743AAC" subjectid="6AB5D3617AF9D48E" periodspercard="1" periodsperweek="1.0" teacherids="04EC5F61E6BCE7C9" classroomids="3A7F9885FF288845" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="87D2323CE578E6CE" classids="3A3D3BFF357373D2" subjectid="6AB5D3617AF9D48E" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D2F4F4E8811BA868" classids="122019AEDD7F12A1" subjectid="6AB5D3617AF9D48E" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="EB96D8A8D7D4F21F" classids="08D705B8C7E40DF5" subjectid="6AB5D3617AF9D48E" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F980BB857F2775E6" classids="2125F588948A93A8" subjectid="6AB5D3617AF9D48E" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="BE162D04A8618325" classids="A0051BD907FF09EA" subjectid="6AB5D3617AF9D48E" periodspercard="1" periodsperweek="1.0" teacherids="F1348A1FA8CEC14A" classroomids="D62E0E86F05FCC19" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8CC6FE400EE18CA3" classids="16310E27E49923D8" subjectid="6AB5D3617AF9D48E" periodspercard="1" periodsperweek="1.0" teacherids="ED82ACF33AB2D965" classroomids="41E9B46601036D28" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="06C03C22E0F076D2" classids="3A3D3BFF357373D2" subjectid="B7AF0964D1E8A5B5" periodspercard="1" periodsperweek="2.0" teacherids="EC67276BD314F6BB" classroomids="BA090444FE16A1C8" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="34174796A53E69C4" classids="04E0D73711AFB5CC" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="1.0" teacherids="8BA6AD7D34E06A50" classroomids="B9306436676D64CD" groupids="73CD00EAF874A97B" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="EFA323F81998BC5E" classids="875E1255FACC7CF0" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="1.0" teacherids="8BA6AD7D34E06A50" classroomids="B9306436676D64CD" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="723B7A241D10332D" classids="45DA8CE5F6916F02" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="2.0" teacherids="48382603052BA515" classroomids="B9306436676D64CD" groupids="9A8EDC25F24C355A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="26385F9A63B543F3" classids="18B22B1162415AF7" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="2.0" teacherids="48382603052BA515" classroomids="B9306436676D64CD" groupids="7298DC4673C0BA0E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="6D4FC6A2429AF3D8" classids="45DA8CE5F6916F02" subjectid="6E9C24DDF8128C35" periodspercard="1" periodsperweek="1.0" teacherids="CFF428FE18F4DC0C" classroomids="EA2F851F31637E65" groupids="9A8EDC25F24C355A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="9ED131855DFF4E9A" classids="18B22B1162415AF7" subjectid="6E9C24DDF8128C35" periodspercard="1" periodsperweek="1.0" teacherids="CFF428FE18F4DC0C" classroomids="EA2F851F31637E65" groupids="7298DC4673C0BA0E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7C9FCFC7C1B94EB5" classids="38ACDE6116B2BF16" subjectid="3215918EC2F2D5EA" periodspercard="1" periodsperweek="1.0" teacherids="C8BD5B68D0E6FC9D" classroomids="7341FEEAD1621574" groupids="5F9818B13F19C1DB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C082E21DFC2BA456" classids="3A3D3BFF357373D2" subjectid="A71A9327E2AFF47C" periodspercard="1" periodsperweek="1.0" teacherids="A25E3D5B57F7C29E" classroomids="F0747FC29D78C2F1" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="AF3EE5AA24EC4407" classids="122019AEDD7F12A1" subjectid="A71A9327E2AFF47C" periodspercard="1" periodsperweek="1.0" teacherids="A25E3D5B57F7C29E" classroomids="F0747FC29D78C2F1" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F8F26EAB0F90A2B1" classids="08D705B8C7E40DF5" subjectid="A71A9327E2AFF47C" periodspercard="1" periodsperweek="1.0" teacherids="E1A85960AA168319" classroomids="F0747FC29D78C2F1" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1A4CD3FB924F329C" classids="4A6FF52B35743AAC" subjectid="A71A9327E2AFF47C" periodspercard="1" periodsperweek="1.0" teacherids="E1A85960AA168319" classroomids="F0747FC29D78C2F1" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="16B90AC9FA58D256" classids="48E824A65B1D144F" subjectid="026AD4F5B1DEF56A" periodspercard="1" periodsperweek="2.0" teacherids="A633B860F45D0B92" classroomids="F0747FC29D78C2F1,BA090444FE16A1C8" groupids="874021A45A9583BD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="43B07C069FBF2EDE" classids="38ACDE6116B2BF16" subjectid="026AD4F5B1DEF56A" periodspercard="1" periodsperweek="2.0" teacherids="A633B860F45D0B92" classroomids="F0747FC29D78C2F1,BA090444FE16A1C8" groupids="5F9818B13F19C1DB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="3E60FAFF193C253A" classids="81340022B2F23C59" subjectid="026AD4F5B1DEF56A" periodspercard="1" periodsperweek="2.0" teacherids="EC67276BD314F6BB" classroomids="F0747FC29D78C2F1,BA090444FE16A1C8" groupids="1367CB839D24D705" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="496FAD0E9FFB24B4" classids="0035A0B32D7C512C" subjectid="026AD4F5B1DEF56A" periodspercard="1" periodsperweek="2.0" teacherids="EC67276BD314F6BB" classroomids="F0747FC29D78C2F1,BA090444FE16A1C8" groupids="CAAE6DC441D040EF" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="9BA9870E0355C7A5" classids="2125F588948A93A8" subjectid="B7AF0964D1E8A5B5" periodspercard="1" periodsperweek="2.0" teacherids="A25E3D5B57F7C29E" classroomids="F0747FC29D78C2F1,BA090444FE16A1C8" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="437EE62C37FE55FA" classids="93B1FDB4552E40CB" subjectid="B7AF0964D1E8A5B5" periodspercard="1" periodsperweek="2.0" teacherids="A25E3D5B57F7C29E" classroomids="F0747FC29D78C2F1,BA090444FE16A1C8" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="4FF3022F8DACE557" classids="16310E27E49923D8" subjectid="B7AF0964D1E8A5B5" periodspercard="1" periodsperweek="2.0" teacherids="A25E3D5B57F7C29E" classroomids="F0747FC29D78C2F1,BA090444FE16A1C8" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7E743BD0EB0734D8" classids="81340022B2F23C59" subjectid="04132706AA4FDA09" periodspercard="1" periodsperweek="2.0" teacherids="B8760BAB80D91929,DF302A58C8F57061" classroomids="CA61C1AC40D20CBA" groupids="DA9FFBB77BE9FBAD,60B4C1900EB4FE0D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C2A9CF2DDC0C420E" classids="0035A0B32D7C512C" subjectid="04132706AA4FDA09" periodspercard="1" periodsperweek="2.0" teacherids="B8760BAB80D91929,DF302A58C8F57061" classroomids="CA61C1AC40D20CBA" groupids="DB88A5458F06BC44,07956ACCAB2DB45A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B336F15EA1EA3156" classids="3A3D3BFF357373D2" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="48382603052BA515,DF302A58C8F57061" classroomids="18EAD7475208E4B6" groupids="ABE36A0078AF9C69,499F789BD5896C49" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F6AFC3C2C82F4345" classids="08D705B8C7E40DF5" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="48382603052BA515,DF302A58C8F57061" classroomids="18EAD7475208E4B6" groupids="E0EB23FECC78BC66,EE2DCDB067AF1091" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8D2FABF8B54AD0FB" classids="4A6FF52B35743AAC" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="48382603052BA515,DF302A58C8F57061" classroomids="18EAD7475208E4B6" groupids="4A079610E3C8E25B,7FBD785BCE87E2BC" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="5966BF52FCB0850A" classids="93B1FDB4552E40CB" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="2.0" teacherids="48382603052BA515,DF302A58C8F57061" classroomids="18EAD7475208E4B6" groupids="5710B9D8E91A4C53,D52E4E43F1C8AA7C" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7D48B329C8CF065C" classids="A0051BD907FF09EA" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="2.0" teacherids="48382603052BA515,DF302A58C8F57061" classroomids="18EAD7475208E4B6" groupids="9F99315EE646ECFA,6473A4C74E8E6AA2" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C4252E329863EBD2" classids="E4466A6A2A0105E1" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="2.0" teacherids="DF302A58C8F57061,48382603052BA515" classroomids="268956F2308D2762" groupids="538F49F5D4197E17,099F998C8F0876DC" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D6A8DF8686C2480D" classids="04E0D73711AFB5CC" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="2.0" teacherids="DF302A58C8F57061,48382603052BA515" classroomids="268956F2308D2762" groupids="B3AD62BDADD62772,CC5FA48900B7D058" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1402CEFD514C383B" classids="875E1255FACC7CF0" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="2.0" teacherids="DF302A58C8F57061,48382603052BA515" classroomids="268956F2308D2762" groupids="33EA1BA66E988A3A,771C50EA0A658F74" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="9535794088727971" classids="2BE3F1E3B73831D0" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="48382603052BA515,DF302A58C8F57061" classroomids="18EAD7475208E4B6" groupids="605C6BEBA3434049,20FC85106FD15D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="FF0A886434917E77" classids="0035A0B32D7C512C" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="DF302A58C8F57061,48382603052BA515" classroomids="268956F2308D2762" groupids="07956ACCAB2DB45A,DB88A5458F06BC44" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="9CC47593F0005F65" classids="095C3A693C01B747" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="DF302A58C8F57061,48382603052BA515" classroomids="268956F2308D2762" groupids="69CFE0402B65BD85,0EA09292CAD0E3E2" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E23CE3C803007774" classids="81340022B2F23C59" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="DF302A58C8F57061,48382603052BA515" classroomids="268956F2308D2762" groupids="60B4C1900EB4FE0D,DA9FFBB77BE9FBAD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B2F9F95F5136C0AF" classids="38ACDE6116B2BF16" subjectid="04132706AA4FDA09" periodspercard="1" periodsperweek="1.0" teacherids="B8760BAB80D91929,DF302A58C8F57061" classroomids="CA61C1AC40D20CBA" groupids="00E81784AB47BA4E,49BD41B36A9932B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="EDE49607282DF657" classids="48E824A65B1D144F" subjectid="04132706AA4FDA09" periodspercard="1" periodsperweek="1.0" teacherids="B8760BAB80D91929,DF302A58C8F57061" classroomids="CA61C1AC40D20CBA" groupids="4CC42ABA0F8E8286,0FF6AD0A0C1D1D18" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="DC86A132678623EE" classids="122019AEDD7F12A1" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="48382603052BA515,DF302A58C8F57061" classroomids="18EAD7475208E4B6" groupids="9AA1262B421423A4,94D31DDC9E218DCE" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="76BACF6EBA7B1454" classids="2125F588948A93A8,93B1FDB4552E40CB" subjectid="6342EE4F0B394605" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D,EA5F97500C53D20F" classroomids="FB3CBBAB26C7B160" groupids="3E6169E41CA4A072,0BCF0A1FBC6DC611,D3709BA11F675CD6,90EAD222D9313EDF" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="EBD68F44C2BEC1C3" classids="45DA8CE5F6916F02" subjectid="6342EE4F0B394605" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D,EA5F97500C53D20F" classroomids="FB3CBBAB26C7B160" groupids="DAD088EA01355A35,ACCDB334C01BF263" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="A557257D3A5CB63A" classids="18B22B1162415AF7" subjectid="6342EE4F0B394605" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D,EA5F97500C53D20F" classroomids="FB3CBBAB26C7B160" groupids="27C34B4D4FFB4635,9FF6397A486D7753" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D2AE7E43477E29BE" classids="29EE729ADF9BD2F8" subjectid="6342EE4F0B394605" periodspercard="2" periodsperweek="2.0" teacherids="8B87B16CE46A712D,EA5F97500C53D20F" classroomids="FB3CBBAB26C7B160" groupids="E9BF6B6A7DE1324B,5ACCFC77B9606E98" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="123385ABEED5C030" classids="5E3FEB87026DA81A" subjectid="6342EE4F0B394605" periodspercard="2" periodsperweek="2.0" teacherids="8B87B16CE46A712D,EA5F97500C53D20F" classroomids="FB3CBBAB26C7B160" groupids="730901593B2F8D4C,218C97474116F849" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="CE736C69ADFE9E34" classids="A0051BD907FF09EA" subjectid="6342EE4F0B394605" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D" classroomids="FB3CBBAB26C7B160" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="DD5F32991C16865B" classids="04E0D73711AFB5CC" subjectid="6342EE4F0B394605" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D,EA5F97500C53D20F" classroomids="FB3CBBAB26C7B160" groupids="3CED2F491148298A,9F349C849F8EE0F2" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="6FB30C8E23724020" classids="E4466A6A2A0105E1,875E1255FACC7CF0" subjectid="6342EE4F0B394605" periodspercard="1" periodsperweek="1.0" teacherids="8B87B16CE46A712D,EA5F97500C53D20F" classroomids="FB3CBBAB26C7B160,D351F555F1C80A53" groupids="C893D988922179CC,EDA407DFEEEBFFB3,CE5DE1D735F40FA2,4720786D25F60C5E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="4BE8003BF9CDF646" classids="D92ADF84BAAED16C" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="DF302A58C8F57061,B8760BAB80D91929" classroomids="268956F2308D2762" groupids="45D9C4383632913C,98963EB08EEFF7A9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E5C8109FE803338B" classids="38ACDE6116B2BF16" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="DF302A58C8F57061,B8760BAB80D91929" classroomids="268956F2308D2762" groupids="49BD41B36A9932B9,00E81784AB47BA4E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="EAC8BDC0F2F0B37F" classids="48E824A65B1D144F" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="DF302A58C8F57061,B8760BAB80D91929" classroomids="268956F2308D2762" groupids="0FF6AD0A0C1D1D18,4CC42ABA0F8E8286" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="18289EFC5A294CD5" classids="095C3A693C01B747" subjectid="C6AD43C6E314F0FB" periodspercard="1" periodsperweek="2.0" teacherids="B8760BAB80D91929,48382603052BA515" classroomids="CA61C1AC40D20CBA,FB1B3BB135030306" groupids="0EA09292CAD0E3E2,69CFE0402B65BD85" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="070A11E2A27F7CDE" classids="D92ADF84BAAED16C" subjectid="C6AD43C6E314F0FB" periodspercard="1" periodsperweek="1.0" teacherids="B8760BAB80D91929,8B87B16CE46A712D" classroomids="FB3CBBAB26C7B160" groupids="98963EB08EEFF7A9,45D9C4383632913C" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F286483C92DB74DC" classids="7FFEF5998D672DB3" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="ED62E6EBCB15D677" classroomids="18EAD7475208E4B6,268956F2308D2762,CA61C1AC40D20CBA,FB1B3BB135030306" groupids="F529EA7E1D9BABDB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F2D6A2072A54319B" classids="81340022B2F23C59" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="1.0" teacherids="7064FE0F72530351" classroomids="0AD16578DAE2BA2E" groupids="1367CB839D24D705" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="06E7588E854D1215" classids="0035A0B32D7C512C" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="1.0" teacherids="7064FE0F72530351" classroomids="0AD16578DAE2BA2E" groupids="CAAE6DC441D040EF" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B5989F4EECC120A4" classids="5E3FEB87026DA81A" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="4CE5ED34D91534D9,A8685BE2945910CA" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="218C97474116F849,730901593B2F8D4C" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7F134B9F8EE48927" classids="45DA8CE5F6916F02" subjectid="2620F2BF77274192" periodspercard="2" periodsperweek="2.0" teacherids="E1A85960AA168319,936A5C3A29066F6B" classroomids="46BDDBE1282FC72C" groupids="6BB69FC59141B0C3,BFB998A55EA28704" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="9496AED26573B67D" classids="18B22B1162415AF7" subjectid="2620F2BF77274192" periodspercard="2" periodsperweek="2.0" teacherids="936A5C3A29066F6B,E1A85960AA168319" classroomids="9ABE889ACC671510" groupids="7CD4B7B828CF3D3D,9AEC3BF17FD7F6F0" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="02391D0E659723AE" classids="29EE729ADF9BD2F8" subjectid="2620F2BF77274192" periodspercard="2" periodsperweek="2.0" teacherids="E1A85960AA168319,4CE5ED34D91534D9" classroomids="46BDDBE1282FC72C" groupids="3CDE16CFCFE21301,6F26E4FE6BFD5AD6" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="35469793AAEA46C0" classids="45DA8CE5F6916F02,18B22B1162415AF7" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="2.0" teacherids="992B779548C893DB,CBBE94ADD7E20AA5" classroomids="EAA43142566C6725,C9CA9F2233FAE7CD" groupids="BFB998A55EA28704,6BB69FC59141B0C3,9AEC3BF17FD7F6F0" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C48442E08BD219A3" classids="45DA8CE5F6916F02" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="4248EA1473E04BD4,4CE5ED34D91534D9" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE" groupids="9A8EDC25F24C355A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="6025457085757B35" classids="5E3FEB87026DA81A" subjectid="2620F2BF77274192" periodspercard="2" periodsperweek="2.0" teacherids="E1A85960AA168319,4CE5ED34D91534D9" classroomids="46BDDBE1282FC72C" groupids="BC9945E565574B51,86DFE7C38F77C3A7" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C34E44FA670FF1BF" classids="16310E27E49923D8" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="32D6562B18E691C3" classroomids="DF7D82DE0699F5C3,B00A0D9D1FDDA638,F4B98DA5599C5C3D" groupids="C3B7C3E3FCB40A97" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="DF404A9F1A45C2D1" classids="45DA8CE5F6916F02" subjectid="D5917778F7741FB1" periodspercard="1" periodsperweek="2.0" teacherids="5B6D4AAA14966A8E" classroomids="3A7F9885FF288845,AA847AAA518C7ABB" groupids="9A8EDC25F24C355A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="0747807260E0472A" classids="E4466A6A2A0105E1" subjectid="7204F551BDA73617" periodspercard="1" periodsperweek="1.0" teacherids="5B6D4AAA14966A8E" classroomids="3A7F9885FF288845,AA847AAA518C7ABB" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="827EA6BBF7B3A762" classids="875E1255FACC7CF0" subjectid="7204F551BDA73617" periodspercard="1" periodsperweek="1.0" teacherids="5B6D4AAA14966A8E" classroomids="3A7F9885FF288845,41E9B46601036D28,AA847AAA518C7ABB" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="175F77D308646711" classids="875E1255FACC7CF0" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="2.0" teacherids="49BFC6539E22D57B" classroomids="0AD16578DAE2BA2E,E50F6D6607A42A81" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8AA7D412600C8044" classids="3A3D3BFF357373D2" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="2.0" teacherids="49BFC6539E22D57B" classroomids="0AD16578DAE2BA2E,7341FEEAD1621574,FC7C8CB90D2D3358" groupids="58543C0F777CB4CD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B7395D6A73F57608" classids="4A6FF52B35743AAC" subjectid="E73BA503AA919BE7" periodspercard="1" periodsperweek="2.0" teacherids="49BFC6539E22D57B" classroomids="0AD16578DAE2BA2E,E50F6D6607A42A81,B90D0F5FFDBD26E0" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="6087926C8DAF12EB" classids="D92ADF84BAAED16C" subjectid="A71A9327E2AFF47C" periodspercard="1" periodsperweek="1.0" teacherids="E1A85960AA168319" classroomids="F0747FC29D78C2F1,06F34CEE6168234D" groupids="DA74F6C4446E195D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="3337B845F35CEEDE" classids="0035A0B32D7C512C" subjectid="A71A9327E2AFF47C" periodspercard="1" periodsperweek="1.0" teacherids="A25E3D5B57F7C29E" classroomids="F0747FC29D78C2F1,06F34CEE6168234D" groupids="CAAE6DC441D040EF" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="47111C82E8E08F01" classids="D92ADF84BAAED16C" subjectid="026AD4F5B1DEF56A" periodspercard="1" periodsperweek="2.0" teacherids="A633B860F45D0B92" classroomids="F0747FC29D78C2F1,BA090444FE16A1C8,832D9682B058006B" groupids="DA74F6C4446E195D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="E24A019FAC6D81DD" classids="095C3A693C01B747" subjectid="026AD4F5B1DEF56A" periodspercard="1" periodsperweek="2.0" teacherids="EC67276BD314F6BB" classroomids="F0747FC29D78C2F1,BA090444FE16A1C8,832D9682B058006B" groupids="3BFAB65CF3650689" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C8E624CDC55D9BC0" classids="2BE3F1E3B73831D0" subjectid="026AD4F5B1DEF56A" periodspercard="1" periodsperweek="2.0" teacherids="E1A85960AA168319" classroomids="F0747FC29D78C2F1,BA090444FE16A1C8,832D9682B058006B" groupids="F655431DE04B9A49" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="848739C6C429CFE4" classids="48E824A65B1D144F" subjectid="3215918EC2F2D5EA" periodspercard="1" periodsperweek="1.0" teacherids="C8BD5B68D0E6FC9D" classroomids="7341FEEAD1621574,8F89F5430830BC62" groupids="874021A45A9583BD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="FCB6323A4BEB537F" classids="D92ADF84BAAED16C" subjectid="3215918EC2F2D5EA" periodspercard="1" periodsperweek="1.0" teacherids="C8BD5B68D0E6FC9D" classroomids="7341FEEAD1621574,8F89F5430830BC62" groupids="DA74F6C4446E195D" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="4C3EF592D2FC7949" classids="18B22B1162415AF7" subjectid="A1A6D0F0B3734CD1" periodspercard="1" periodsperweek="2.0" teacherids="CBBE94ADD7E20AA5" classroomids="F4B98DA5599C5C3D,41E9B46601036D28" groupids="7298DC4673C0BA0E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="38D18A2C308BA628" classids="2125F588948A93A8" subjectid="01131A29D286839F" periodspercard="1" periodsperweek="3.0" teacherids="03D6C2A727AE3085" classroomids="F4B98DA5599C5C3D,7C4BADB3FFD3A3AE,41E9B46601036D28" groupids="227490F13369544F" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="A38AA381D6877334" classids="08D705B8C7E40DF5" subjectid="B7AF0964D1E8A5B5" periodspercard="1" periodsperweek="2.0" teacherids="EC67276BD314F6BB" classroomids="BA090444FE16A1C8,832D9682B058006B" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="17E8EB6CC6AD6462" classids="4A6FF52B35743AAC" subjectid="B7AF0964D1E8A5B5" periodspercard="1" periodsperweek="2.0" teacherids="EC67276BD314F6BB" classroomids="BA090444FE16A1C8,F4B98DA5599C5C3D" groupids="715AAB5248DBC4B9" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C21AC4E9BBDA682B" classids="A0051BD907FF09EA" subjectid="B7AF0964D1E8A5B5" periodspercard="1" periodsperweek="2.0" teacherids="A25E3D5B57F7C29E" classroomids="F0747FC29D78C2F1,BA090444FE16A1C8,B9306436676D64CD" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="BD756B2B7CCCBD06" classids="E4466A6A2A0105E1" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="1.0" teacherids="8BA6AD7D34E06A50" classroomids="B9306436676D64CD,DCD8F1730C82A54F" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F4A48C39C6CB7E6F" classids="08D705B8C7E40DF5" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="2.0" teacherids="EC67276BD314F6BB" classroomids="B9306436676D64CD,F0747FC29D78C2F1" groupids="D689B36116A94D68" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="1A7BF04D5F2C9360" classids="2BE3F1E3B73831D0" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="2.0" teacherids="8BA6AD7D34E06A50" classroomids="B9306436676D64CD,DCD8F1730C82A54F,7F36D08173325A0C" groupids="F655431DE04B9A49" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="23DB1EBDB45D4B60" classids="0035A0B32D7C512C" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="5.0" teacherids="7ADE9B26339266F4" classroomids="3B926682EC41D040,CFB44A3CF3CFF304,38BD9ACE40F6D4A2,EA2F851F31637E65,4BD582F4072623D1,3568B60E7EB7F25C" groupids="CAAE6DC441D040EF" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="09B98B066000BEF9" classids="875E1255FACC7CF0" subjectid="F7335FAB22D44F49" periodspercard="1" periodsperweek="3.0" teacherids="7ADE9B26339266F4" classroomids="CFB44A3CF3CFF304,EA2F851F31637E65,16BA52D465B5AA8A" groupids="B565F05D6604D631" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="D655F58BDD6BA9DF" classids="91D71EF26C851701" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="A8685BE2945910CA" classroomids="D73C84710607B70E,798246240B4F2214,F61647EE09423290,7D1353BC7BE8B4BD" groupids="394504935CB9C8E4" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8ADC3E8348B6B688" classids="E4466A6A2A0105E1" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="4CE5ED34D91534D9" classroomids="D73C84710607B70E,798246240B4F2214,8BD618FEBDFE26BE,7D1353BC7BE8B4BD" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="C5DFAEABD69BE09E" classids="2125F588948A93A8" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="2.0" teacherids="48382603052BA515,EAFE469500FCDC05" classroomids="18EAD7475208E4B6" groupids="EB80A2DF1D04E039,0CD58386999F70E5" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="60E823D19D6DEBF7" classids="48E824A65B1D144F" subjectid="3A39D45237172475" periodspercard="1" periodsperweek="3.0" teacherids="4248EA1473E04BD4" classroomids="D73C84710607B70E,798246240B4F2214,F61647EE09423290,7D1353BC7BE8B4BD" groupids="874021A45A9583BD" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="5DBE06B1DF8F1D41" classids="81340022B2F23C59" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="3.0" teacherids="32D6562B18E691C3" classroomids="DF7D82DE0699F5C3,B00A0D9D1FDDA638,E6FE0D981A08684D" groupids="1367CB839D24D705" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="77C3F0B8D23B0774" classids="A0051BD907FF09EA" subjectid="F7335FAB22D44F49" periodspercard="1" periodsperweek="2.0" teacherids="7ADE9B26339266F4" classroomids="CFB44A3CF3CFF304,EA2F851F31637E65,16BA52D465B5AA8A" groupids="961DBA8BAC174FD8" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="CDEC37FABDD6F8D6" classids="E4466A6A2A0105E1" subjectid="F7335FAB22D44F49" periodspercard="1" periodsperweek="3.0" teacherids="7ADE9B26339266F4" classroomids="CFB44A3CF3CFF304,EA2F851F31637E65,3568B60E7EB7F25C,16BA52D465B5AA8A" groupids="15C56E4864272D00" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="511FAC10F3C977DA" classids="2BE3F1E3B73831D0" subjectid="C6AD43C6E314F0FB" periodspercard="1" periodsperweek="2.0" teacherids="B8760BAB80D91929,48382603052BA515" classroomids="FB1B3BB135030306,CA61C1AC40D20CBA" groupids="20FC85106FD15D68,605C6BEBA3434049" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F93EEE1103886643" classids="16310E27E49923D8" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="2.0" teacherids="EAFE469500FCDC05,DF302A58C8F57061" classroomids="CA61C1AC40D20CBA,FB1B3BB135030306,F899D2D14DEA0211" groupids="9E160B51BAA37FA9,6439134996CF4775" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8302D6A8D6F6085E" classids="122019AEDD7F12A1" subjectid="B7AF0964D1E8A5B5" periodspercard="1" periodsperweek="2.0" teacherids="EC67276BD314F6BB" classroomids="BA090444FE16A1C8,B9306436676D64CD" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="64295EF6CA8EC31C" classids="122019AEDD7F12A1" subjectid="4998A0B77FAF9465" periodspercard="1" periodsperweek="2.0" teacherids="EC67276BD314F6BB" classroomids="B9306436676D64CD,BA090444FE16A1C8" groupids="8B2307B037B45C9E" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="47F041DB924C3252" classids="45DA8CE5F6916F02" subjectid="F7335FAB22D44F49" periodspercard="1" periodsperweek="3.0" teacherids="7ADE9B26339266F4" classroomids="CFB44A3CF3CFF304,EA2F851F31637E65,3568B60E7EB7F25C" groupids="9A8EDC25F24C355A" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="2DDD2D48CAC58730" classids="2BE3F1E3B73831D0" subjectid="8521129E88BDF2D3" periodspercard="1" periodsperweek="5.0" teacherids="7ADE9B26339266F4" classroomids="7C4BADB3FFD3A3AE,CFB44A3CF3CFF304,3B926682EC41D040,4BD582F4072623D1,8771F43E337915C4" groupids="F655431DE04B9A49" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="F1873EFD779777BB" classids="38ACDE6116B2BF16" subjectid="0ADC4FE2B600F77D" periodspercard="1" periodsperweek="1.0" teacherids="5B6D4AAA14966A8E" classroomids="3A7F9885FF288845,AA847AAA518C7ABB,8F89F5430830BC62" groupids="5F9818B13F19C1DB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="7A22F4CC78A16D3D" classids="2BE3F1E3B73831D0" subjectid="A71A9327E2AFF47C" periodspercard="1" periodsperweek="1.0" teacherids="A25E3D5B57F7C29E" classroomids="F0747FC29D78C2F1,06F34CEE6168234D,BA090444FE16A1C8" groupids="F655431DE04B9A49" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="BFCDCC092E041E5A" classids="45DA8CE5F6916F02,18B22B1162415AF7" subjectid="E067312CCE4B0585" periodspercard="1" periodsperweek="2.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="DD5A9FFA51930B03,6D1557DAC0881DCE" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="CB8A6C259D0D484D" classids="45DA8CE5F6916F02,18B22B1162415AF7" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="2.0" teacherids="EAFE469500FCDC05" classroomids="CA61C1AC40D20CBA,F899D2D14DEA0211" groupids="EC0A9A2DD7A8934E,F8592E9A12BA1940" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="29BB8DBDF21BAD54" classids="45DA8CE5F6916F02,18B22B1162415AF7" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="2.0" teacherids="48382603052BA515" classroomids="18EAD7475208E4B6" groupids="CF8CC43DDAAA8BE0,FABF60B28CD28910" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="073ACE1D7814FE06" classids="29EE729ADF9BD2F8,5E3FEB87026DA81A" subjectid="E067312CCE4B0585" periodspercard="1" periodsperweek="1.0" teacherids="A478155A04A4C882" classroomids="7341FEEAD1621574" groupids="C3FD13D6FC36039C,AC703B59EF35BA49" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="959272341DA278ED" classids="29EE729ADF9BD2F8,5E3FEB87026DA81A" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="DF302A58C8F57061" classroomids="CA61C1AC40D20CBA,F899D2D14DEA0211" groupids="09D3371F50384A96,72B1B8B77D8823FB" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="B002B69D7A09E210" classids="29EE729ADF9BD2F8,5E3FEB87026DA81A" subjectid="1C17038AFB405A4F" periodspercard="1" periodsperweek="1.0" teacherids="48382603052BA515" classroomids="18EAD7475208E4B6" groupids="2E56314A5FDF122D,C9B8FB2038963830" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="48BE154F47C33606" classids="45DA8CE5F6916F02" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="2.0" teacherids="0B4BD65965AF73F1" classroomids="E602EDDA0E66F7CB,38BD9ACE40F6D4A2" groupids="BFB998A55EA28704" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="99685371D40B6F95" classids="45DA8CE5F6916F02" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="2.0" teacherids="9078B81933858453" classroomids="B00A0D9D1FDDA638" groupids="6BB69FC59141B0C3" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="8E7ABF78A88E2D2F" classids="5E3FEB87026DA81A" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="2.0" teacherids="0141D24700FB38AD" classroomids="DF7D82DE0699F5C3" groupids="BC9945E565574B51" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="2A39E980FE630F7C" classids="5E3FEB87026DA81A" subjectid="83D25DA0E64218C4" periodspercard="1" periodsperweek="2.0" teacherids="9078B81933858453" classroomids="B00A0D9D1FDDA638" groupids="86DFE7C38F77C3A7" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
      <lesson id="CD34DD6F7C5A71F8" classids="93B1FDB4552E40CB" subjectid="6AB5D3617AF9D48E" periodspercard="1" periodsperweek="1.0" teacherids="5B6D4AAA14966A8E" classroomids="3A7F9885FF288845,3B926682EC41D040,41E9B46601036D28,8F89F5430830BC62" groupids="94FC991CF3ED0172" capacity="*" seminargroup="" termsdefid="2AE102E9079D28BB" weeksdefid="695707D7FB92CA9B" daysdefid="13B479A9FBE75499" partner_id=""/>
   </lessons>
   <cards options="canadd,export:silent" columns="lessonid,period,days,weeks,terms,classroomids">
      <card lessonid="778D88B2036EAB69" classroomids="A7EA206130B1EC08" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="778D88B2036EAB69" classroomids="A7EA206130B1EC08" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="778D88B2036EAB69" classroomids="A7EA206130B1EC08" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="778D88B2036EAB69" classroomids="A7EA206130B1EC08" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="778D88B2036EAB69" classroomids="A7EA206130B1EC08" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="778D88B2036EAB69" classroomids="A7EA206130B1EC08" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="778D88B2036EAB69" classroomids="A7EA206130B1EC08" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="A05DC4FCDB688AC0" classroomids="9DFB2868AA625637" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="A05DC4FCDB688AC0" classroomids="9DFB2868AA625637" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="A05DC4FCDB688AC0" classroomids="9DFB2868AA625637" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="A05DC4FCDB688AC0" classroomids="9DFB2868AA625637" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="A05DC4FCDB688AC0" classroomids="9DFB2868AA625637" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="A05DC4FCDB688AC0" classroomids="9DFB2868AA625637" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="A05DC4FCDB688AC0" classroomids="9DFB2868AA625637" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="5AAABEC6E4A641FD" classroomids="3951320FED32DE02" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="5AAABEC6E4A641FD" classroomids="3951320FED32DE02" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="5AAABEC6E4A641FD" classroomids="3951320FED32DE02" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="5AAABEC6E4A641FD" classroomids="3951320FED32DE02" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="5AAABEC6E4A641FD" classroomids="3951320FED32DE02" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="5AAABEC6E4A641FD" classroomids="3951320FED32DE02" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="5AAABEC6E4A641FD" classroomids="3951320FED32DE02" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="D75B5804AA987754" classroomids="69DBF489501B28DC" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="D75B5804AA987754" classroomids="69DBF489501B28DC" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="D75B5804AA987754" classroomids="69DBF489501B28DC" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="D75B5804AA987754" classroomids="69DBF489501B28DC" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="D75B5804AA987754" classroomids="69DBF489501B28DC" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="D75B5804AA987754" classroomids="69DBF489501B28DC" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="D75B5804AA987754" classroomids="69DBF489501B28DC" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="BBB697083EDDF253" classroomids="36527D17C72C88F4" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="BBB697083EDDF253" classroomids="36527D17C72C88F4" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="BBB697083EDDF253" classroomids="36527D17C72C88F4" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="BBB697083EDDF253" classroomids="36527D17C72C88F4" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="BBB697083EDDF253" classroomids="36527D17C72C88F4" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="BBB697083EDDF253" classroomids="36527D17C72C88F4" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="BBB697083EDDF253" classroomids="36527D17C72C88F4" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="84B090A4B32F1873" classroomids="E4A303A0781701E2" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="84B090A4B32F1873" classroomids="E4A303A0781701E2" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="84B090A4B32F1873" classroomids="E4A303A0781701E2" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="84B090A4B32F1873" classroomids="E4A303A0781701E2" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="84B090A4B32F1873" classroomids="E4A303A0781701E2" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="84B090A4B32F1873" classroomids="E4A303A0781701E2" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="84B090A4B32F1873" classroomids="E4A303A0781701E2" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="D2821672E1354839" classroomids="7A2A81212804C6A0" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="D2821672E1354839" classroomids="7A2A81212804C6A0" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="D2821672E1354839" classroomids="7A2A81212804C6A0" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="D2821672E1354839" classroomids="7A2A81212804C6A0" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="D2821672E1354839" classroomids="7A2A81212804C6A0" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="D2821672E1354839" classroomids="7A2A81212804C6A0" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="D2821672E1354839" classroomids="7A2A81212804C6A0" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="79127BC0CA1BB342" classroomids="3BE32B415A2905AB" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="79127BC0CA1BB342" classroomids="3BE32B415A2905AB" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="79127BC0CA1BB342" classroomids="3BE32B415A2905AB" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="79127BC0CA1BB342" classroomids="3BE32B415A2905AB" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="79127BC0CA1BB342" classroomids="3BE32B415A2905AB" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="79127BC0CA1BB342" classroomids="3BE32B415A2905AB" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="79127BC0CA1BB342" classroomids="3BE32B415A2905AB" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="818C946D0AF0C891" classroomids="5F41877D9601590C" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="818C946D0AF0C891" classroomids="5F41877D9601590C" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="818C946D0AF0C891" classroomids="5F41877D9601590C" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="818C946D0AF0C891" classroomids="5F41877D9601590C" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="818C946D0AF0C891" classroomids="5F41877D9601590C" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="818C946D0AF0C891" classroomids="5F41877D9601590C" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="818C946D0AF0C891" classroomids="5F41877D9601590C" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="4CC9B3A967BDD759" classroomids="468B7BF75E08553A" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="4CC9B3A967BDD759" classroomids="468B7BF75E08553A" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="4CC9B3A967BDD759" classroomids="468B7BF75E08553A" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="4CC9B3A967BDD759" classroomids="468B7BF75E08553A" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="4CC9B3A967BDD759" classroomids="468B7BF75E08553A" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="4CC9B3A967BDD759" classroomids="468B7BF75E08553A" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="4CC9B3A967BDD759" classroomids="468B7BF75E08553A" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="1972BE2BC5C32847" classroomids="F8AEF2669FAA7FD7" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="1972BE2BC5C32847" classroomids="F8AEF2669FAA7FD7" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="1972BE2BC5C32847" classroomids="F8AEF2669FAA7FD7" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="1972BE2BC5C32847" classroomids="F8AEF2669FAA7FD7" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="1972BE2BC5C32847" classroomids="F8AEF2669FAA7FD7" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="1972BE2BC5C32847" classroomids="F8AEF2669FAA7FD7" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="1972BE2BC5C32847" classroomids="F8AEF2669FAA7FD7" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="D8E3C8D17AFF0FB9" classroomids="EAA43142566C6725" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="D8E3C8D17AFF0FB9" classroomids="EAA43142566C6725" period="7" weeks="1" terms="1" days="01000"/>
      <card lessonid="D8E3C8D17AFF0FB9" classroomids="EAA43142566C6725" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="D8E3C8D17AFF0FB9" classroomids="EAA43142566C6725" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="BBC81264C89CB19E" classroomids="EAA43142566C6725" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="BBC81264C89CB19E" classroomids="EAA43142566C6725" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="BBC81264C89CB19E" classroomids="EAA43142566C6725" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="BBC81264C89CB19E" classroomids="EAA43142566C6725" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="B75537C00DCD3005" classroomids="7F36D08173325A0C" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="B75537C00DCD3005" classroomids="7F36D08173325A0C" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="B75537C00DCD3005" classroomids="7F36D08173325A0C" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="B75537C00DCD3005" classroomids="7F36D08173325A0C" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="F12D24130374C937" classroomids="EAA43142566C6725" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="F12D24130374C937" classroomids="EAA43142566C6725" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="F12D24130374C937" classroomids="EAA43142566C6725" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="F12D24130374C937" classroomids="EAA43142566C6725" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="121A6DA852563831" classroomids="7F36D08173325A0C" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="121A6DA852563831" classroomids="7F36D08173325A0C" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="121A6DA852563831" classroomids="7F36D08173325A0C" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="577932818ACC8432" classroomids="7F36D08173325A0C" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="577932818ACC8432" classroomids="7F36D08173325A0C" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="577932818ACC8432" classroomids="7F36D08173325A0C" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="7FADA2151D9CA034" classroomids="EAA43142566C6725" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="7FADA2151D9CA034" classroomids="EAA43142566C6725" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="7FADA2151D9CA034" classroomids="EAA43142566C6725" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="B9B40A502E571321" classroomids="7F36D08173325A0C" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="B9B40A502E571321" classroomids="7F36D08173325A0C" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="B9B40A502E571321" classroomids="7F36D08173325A0C" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="3E41467FCA13A76F" classroomids="F4B98DA5599C5C3D" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="3E41467FCA13A76F" classroomids="F4B98DA5599C5C3D" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="3E41467FCA13A76F" classroomids="F4B98DA5599C5C3D" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="47EB838F8A099E33" classroomids="7F36D08173325A0C" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="47EB838F8A099E33" classroomids="7F36D08173325A0C" period="7" weeks="1" terms="1" days="01000"/>
      <card lessonid="47EB838F8A099E33" classroomids="7F36D08173325A0C" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="F8E355775AFF7146" classroomids="F4B98DA5599C5C3D" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="F8E355775AFF7146" classroomids="F4B98DA5599C5C3D" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="EF518CA8DCD3ED4F" classroomids="F4B98DA5599C5C3D" period="7" weeks="1" terms="1" days="00001"/>
      <card lessonid="EF518CA8DCD3ED4F" classroomids="F4B98DA5599C5C3D" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="12C932AA2A4A76A9" classroomids="EAA43142566C6725" period="7" weeks="1" terms="1" days="00001"/>
      <card lessonid="12C932AA2A4A76A9" classroomids="EAA43142566C6725" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="02141BC55CB5EB8F" classroomids="EAA43142566C6725" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="02141BC55CB5EB8F" classroomids="EAA43142566C6725" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="02141BC55CB5EB8F" classroomids="EAA43142566C6725" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="02141BC55CB5EB8F" classroomids="EAA43142566C6725" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="72FFB816BDC4226C" classroomids="C9CA9F2233FAE7CD" period="7" weeks="1" terms="1" days="01000"/>
      <card lessonid="72FFB816BDC4226C" classroomids="C9CA9F2233FAE7CD" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="2A384DFE04EC543D" classroomids="7F36D08173325A0C" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="2A384DFE04EC543D" classroomids="7F36D08173325A0C" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="0A724C98FF45C11F" classroomids="7F36D08173325A0C" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="0A724C98FF45C11F" classroomids="7F36D08173325A0C" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="0C8E574F0F02703A" classroomids="0AD16578DAE2BA2E" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="0C8E574F0F02703A" classroomids="0AD16578DAE2BA2E" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="AFF622A05A02B0E3" classroomids="0AD16578DAE2BA2E" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="AFF622A05A02B0E3" classroomids="0AD16578DAE2BA2E" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="E401C968475E1114" classroomids="7F36D08173325A0C" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="E401C968475E1114" classroomids="7F36D08173325A0C" period="7" weeks="1" terms="1" days="00010"/>
      <card lessonid="A4661033F43AB755" classroomids="7F36D08173325A0C" period="7" weeks="1" terms="1" days="00001"/>
      <card lessonid="A4661033F43AB755" classroomids="7F36D08173325A0C" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="E583E991B570E549" classroomids="7F36D08173325A0C" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="E583E991B570E549" classroomids="7F36D08173325A0C" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="92EF998B434D1091" classroomids="7F36D08173325A0C" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="92EF998B434D1091" classroomids="7F36D08173325A0C" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="024F0029BBB22FA4" classroomids="F4B98DA5599C5C3D" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="024F0029BBB22FA4" classroomids="F4B98DA5599C5C3D" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="29EF453143CF1E22" classroomids="7F36D08173325A0C" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="29EF453143CF1E22" classroomids="7F36D08173325A0C" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="03CA8F788DA2E02C" classroomids="F4B98DA5599C5C3D" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="03CA8F788DA2E02C" classroomids="F4B98DA5599C5C3D" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="8778AFBC0E77EE5E" classroomids="F4B98DA5599C5C3D" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="8778AFBC0E77EE5E" classroomids="F4B98DA5599C5C3D" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="400659E9DD63A589" classroomids="F4B98DA5599C5C3D" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="400659E9DD63A589" classroomids="F4B98DA5599C5C3D" period="7" weeks="1" terms="1" days="00010"/>
      <card lessonid="437BAEB6FE93F1A0" classroomids="EAA43142566C6725" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="437BAEB6FE93F1A0" classroomids="EAA43142566C6725" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="0949F21EF1B6D0A5" classroomids="EAA43142566C6725" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="0949F21EF1B6D0A5" classroomids="EAA43142566C6725" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="39053270F03B2AEB" classroomids="A7EA206130B1EC08" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="39053270F03B2AEB" classroomids="A7EA206130B1EC08" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="D787D6CAEB8960CB" classroomids="9DFB2868AA625637" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="D787D6CAEB8960CB" classroomids="9DFB2868AA625637" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="B83165D17BBFB69A" classroomids="3951320FED32DE02" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="B83165D17BBFB69A" classroomids="3951320FED32DE02" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="B83165D17BBFB69A" classroomids="3951320FED32DE02" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="CA2DDC391E75B08B" classroomids="69DBF489501B28DC" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="CA2DDC391E75B08B" classroomids="69DBF489501B28DC" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="CA2DDC391E75B08B" classroomids="69DBF489501B28DC" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="14FEE69336303E16" classroomids="36527D17C72C88F4" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="14FEE69336303E16" classroomids="36527D17C72C88F4" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="14FEE69336303E16" classroomids="36527D17C72C88F4" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="2A70AA8A4B0D6516" classroomids="E4A303A0781701E2" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="2A70AA8A4B0D6516" classroomids="E4A303A0781701E2" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="2A70AA8A4B0D6516" classroomids="E4A303A0781701E2" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="0DF016A7A5A22BE8" classroomids="7A2A81212804C6A0" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="0DF016A7A5A22BE8" classroomids="7A2A81212804C6A0" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="0DF016A7A5A22BE8" classroomids="7A2A81212804C6A0" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="6DC3A7D36226CC5C" classroomids="3BE32B415A2905AB" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="6DC3A7D36226CC5C" classroomids="3BE32B415A2905AB" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="6DC3A7D36226CC5C" classroomids="3BE32B415A2905AB" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="F606B90FE8086567" classroomids="5F41877D9601590C" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="F606B90FE8086567" classroomids="5F41877D9601590C" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="F606B90FE8086567" classroomids="5F41877D9601590C" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="1424D61623B1DFF9" classroomids="468B7BF75E08553A" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="1424D61623B1DFF9" classroomids="468B7BF75E08553A" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="1424D61623B1DFF9" classroomids="468B7BF75E08553A" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="118A9051336F419A" classroomids="F8AEF2669FAA7FD7" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="118A9051336F419A" classroomids="F8AEF2669FAA7FD7" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="118A9051336F419A" classroomids="F8AEF2669FAA7FD7" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="4F841D22701AB6A4" classroomids="B00A0D9D1FDDA638" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="4F841D22701AB6A4" classroomids="B00A0D9D1FDDA638" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="4F841D22701AB6A4" classroomids="B00A0D9D1FDDA638" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="F7D8A7FD45245A9D" classroomids="B00A0D9D1FDDA638" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="F7D8A7FD45245A9D" classroomids="B00A0D9D1FDDA638" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="F7D8A7FD45245A9D" classroomids="B00A0D9D1FDDA638" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="8580B852DC613DD9" classroomids="DF7D82DE0699F5C3" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="8580B852DC613DD9" classroomids="DF7D82DE0699F5C3" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="8580B852DC613DD9" classroomids="DF7D82DE0699F5C3" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="8580B852DC613DD9" classroomids="DF7D82DE0699F5C3" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="8580B852DC613DD9" classroomids="DF7D82DE0699F5C3" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="7D7423E7906215F0" classroomids="DF7D82DE0699F5C3" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="7D7423E7906215F0" classroomids="DF7D82DE0699F5C3" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="7D7423E7906215F0" classroomids="DF7D82DE0699F5C3" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="7D7423E7906215F0" classroomids="DF7D82DE0699F5C3" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="7D7423E7906215F0" classroomids="DF7D82DE0699F5C3" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="793C031F48752D95" classroomids="DF7D82DE0699F5C3" period="7" weeks="1" terms="1" days="01000"/>
      <card lessonid="793C031F48752D95" classroomids="DF7D82DE0699F5C3" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="793C031F48752D95" classroomids="DF7D82DE0699F5C3" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="793C031F48752D95" classroomids="DF7D82DE0699F5C3" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="793C031F48752D95" classroomids="DF7D82DE0699F5C3" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="12C43E602723B584" classroomids="E602EDDA0E66F7CB" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="12C43E602723B584" classroomids="E602EDDA0E66F7CB" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="95AFE5E7C90D8042" classroomids="DF7D82DE0699F5C3" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="95AFE5E7C90D8042" classroomids="DF7D82DE0699F5C3" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="34B8F0DB0B10FCC6" classroomids="0AD16578DAE2BA2E" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="34B8F0DB0B10FCC6" classroomids="0AD16578DAE2BA2E" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="0F5E4646D90D91A2" classroomids="0AD16578DAE2BA2E" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="1B00302CD29B1972" classroomids="0AD16578DAE2BA2E" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="E37DB4C9D1539615" classroomids="0AD16578DAE2BA2E" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="C9B239B18A440DEC" classroomids="0AD16578DAE2BA2E" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="CEBE2A25D19D1DB0" classroomids="A7EA206130B1EC08" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="CEBE2A25D19D1DB0" classroomids="A7EA206130B1EC08" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="CEBE2A25D19D1DB0" classroomids="A7EA206130B1EC08" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="5C8F8A8601A12EDE" classroomids="9DFB2868AA625637" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="5C8F8A8601A12EDE" classroomids="9DFB2868AA625637" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="5C8F8A8601A12EDE" classroomids="9DFB2868AA625637" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="F0AFE07076AD8C8A" classroomids="3951320FED32DE02" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="F0AFE07076AD8C8A" classroomids="3951320FED32DE02" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="F0AFE07076AD8C8A" classroomids="3951320FED32DE02" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="30C729194DA4FD7A" classroomids="69DBF489501B28DC" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="30C729194DA4FD7A" classroomids="69DBF489501B28DC" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="30C729194DA4FD7A" classroomids="69DBF489501B28DC" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="9D578A150618F5CA" classroomids="36527D17C72C88F4" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="9D578A150618F5CA" classroomids="36527D17C72C88F4" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="9D578A150618F5CA" classroomids="36527D17C72C88F4" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="2012F4D53F9EA288" classroomids="E4A303A0781701E2" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="2012F4D53F9EA288" classroomids="E4A303A0781701E2" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="2012F4D53F9EA288" classroomids="E4A303A0781701E2" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="553690B1FDB19112" classroomids="7A2A81212804C6A0" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="553690B1FDB19112" classroomids="7A2A81212804C6A0" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="553690B1FDB19112" classroomids="7A2A81212804C6A0" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="4C5DCFB38B206B84" classroomids="3BE32B415A2905AB" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="4C5DCFB38B206B84" classroomids="3BE32B415A2905AB" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="4C5DCFB38B206B84" classroomids="3BE32B415A2905AB" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="E78FDF13F31138F3" classroomids="5F41877D9601590C" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="E78FDF13F31138F3" classroomids="5F41877D9601590C" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="E78FDF13F31138F3" classroomids="5F41877D9601590C" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="5A359ECF372C9672" classroomids="468B7BF75E08553A" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="5A359ECF372C9672" classroomids="468B7BF75E08553A" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="5A359ECF372C9672" classroomids="468B7BF75E08553A" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="21B701D7B7BF81EC" classroomids="F8AEF2669FAA7FD7" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="21B701D7B7BF81EC" classroomids="F8AEF2669FAA7FD7" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="21B701D7B7BF81EC" classroomids="F8AEF2669FAA7FD7" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="1AAFB43A496FD7D6" classroomids="3A7F9885FF288845" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="ACC458B16408E915" classroomids="3A7F9885FF288845" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="90ADF33DB07EE835" classroomids="D62E0E86F05FCC19" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="54A39016F5B81839" classroomids="D62E0E86F05FCC19" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="17B94A6B9C1584DE" classroomids="D62E0E86F05FCC19" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="854AE621849586D9" classroomids="3A7F9885FF288845" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="7CE516408D5BDA18" classroomids="3A7F9885FF288845" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="7CE516408D5BDA18" classroomids="3A7F9885FF288845" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="7CE516408D5BDA18" classroomids="3A7F9885FF288845" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="EA427123BAF5FCEF" classroomids="3A7F9885FF288845" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="EA427123BAF5FCEF" classroomids="3A7F9885FF288845" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="EA427123BAF5FCEF" classroomids="3A7F9885FF288845" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="5E26E6CB909DF597" classroomids="3A7F9885FF288845" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="5E26E6CB909DF597" classroomids="3A7F9885FF288845" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="A16E68D406687EBA" classroomids="3A7F9885FF288845" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="A16E68D406687EBA" classroomids="3A7F9885FF288845" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="7496C286ED164FA5" classroomids="3A7F9885FF288845" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="7496C286ED164FA5" classroomids="3A7F9885FF288845" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="7324A72924BD8376" classroomids="3A7F9885FF288845" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="7324A72924BD8376" classroomids="3A7F9885FF288845" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="4CC8B7872566135B" classroomids="D62E0E86F05FCC19" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="9A650C070973E7B5" classroomids="D62E0E86F05FCC19" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="147CC34CD0F87C51" classroomids="D62E0E86F05FCC19" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="DE45CF1D17C2C34F" classroomids="3A7F9885FF288845" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="077370B3D0EDE376" classroomids="41E9B46601036D28" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="1E91E1FAF57F1BAE" classroomids="41E9B46601036D28" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="D1027401FE95FEC9" classroomids="3A7F9885FF288845" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="002386BA15EE85D7" classroomids="41E9B46601036D28" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="59B74B4F8F35350F" classroomids="41E9B46601036D28" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="3DF882D6BEB99F79" classroomids="D62E0E86F05FCC19" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="89ADEB9788C804B7" classroomids="41E9B46601036D28" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="2DBDD79E57420DE0" classroomids="41E9B46601036D28" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="427B254B14DE53A6" classroomids="3A7F9885FF288845" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="427B254B14DE53A6" classroomids="3A7F9885FF288845" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="4570C6EE02DCFCC3" classroomids="41E9B46601036D28" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="3DEE4A00C95E543E" classroomids="D62E0E86F05FCC19" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="3DEE4A00C95E543E" classroomids="D62E0E86F05FCC19" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="CDEF249634B9DD48" classroomids="D62E0E86F05FCC19" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="CDEF249634B9DD48" classroomids="D62E0E86F05FCC19" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="DF7B7A8AC8301388" classroomids="D62E0E86F05FCC19" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="6D81AF1D69ED9AD3" classroomids="D62E0E86F05FCC19" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="9D380A721830AAB2" classroomids="D62E0E86F05FCC19" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="224926691A261187" classroomids="D62E0E86F05FCC19" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="3C065F08CD0575C7" classroomids="D62E0E86F05FCC19" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="8FBD425EC76E08CE" classroomids="7341FEEAD1621574" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="ED6D768FB1F7DDE3" classroomids="7341FEEAD1621574" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="1B9C3EF970CD6EBA" classroomids="7341FEEAD1621574" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="8CFF7CEDD22C22B6" classroomids="A7EA206130B1EC08" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="87175BDED874066F" classroomids="9DFB2868AA625637" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="B5F6A6FC3E298B06" classroomids="3951320FED32DE02" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="670F50AD2EB0C51D" classroomids="69DBF489501B28DC" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="4989B1CC14E91DE6" classroomids="36527D17C72C88F4" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="1046EA9482FA874C" classroomids="E4A303A0781701E2" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="10767BE834171496" classroomids="7A2A81212804C6A0" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="FE012224147B990B" classroomids="3BE32B415A2905AB" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="631B185CEDA43C30" classroomids="5F41877D9601590C" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="50FDA75F75D06CB2" classroomids="468B7BF75E08553A" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="3271DBAD898765D8" classroomids="F8AEF2669FAA7FD7" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="44DA22910097574E" classroomids="7341FEEAD1621574" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="52739234D3F7247E" classroomids="7341FEEAD1621574" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="577F56009496FF07" classroomids="7341FEEAD1621574" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="AD60058A08CA064D" classroomids="7341FEEAD1621574" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="E3EF7D70DF211467" classroomids="7341FEEAD1621574" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="DB261B40684FF39D" classroomids="7341FEEAD1621574" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="0FBE638D8D5D182C" classroomids="7341FEEAD1621574" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="B474950C832D8455" classroomids="7341FEEAD1621574" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="C6FCABD0F4DB63B6" classroomids="7341FEEAD1621574" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="ED829679CBC7FBEE" classroomids="7341FEEAD1621574" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="2D9F2201635C55B3" classroomids="7341FEEAD1621574" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="C68D94021D90D448" classroomids="A7EA206130B1EC08" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="CE6D5A1F44263D09" classroomids="9DFB2868AA625637" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="FC07E87F5DA42BBE" classroomids="3951320FED32DE02" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="6A9F43CDDC72F59B" classroomids="69DBF489501B28DC" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="15594727892FC39F" classroomids="36527D17C72C88F4" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="B05D5FE6E0912B71" classroomids="E4A303A0781701E2" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="E8A34902C7422343" classroomids="7A2A81212804C6A0" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="1859A45775853322" classroomids="3BE32B415A2905AB" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="455A6F22002C2BCA" classroomids="5F41877D9601590C" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="B94C62C8C80AE31D" classroomids="468B7BF75E08553A" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="52BE80633824B9A6" classroomids="F8AEF2669FAA7FD7" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="BFACFDD0724E09A1" classroomids="FB3CBBAB26C7B160" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="C09387E91691006A" classroomids="FB3CBBAB26C7B160" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="060352A4E4F1A07D" classroomids="FB3CBBAB26C7B160" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="FF454777C24AC3BA" classroomids="FB3CBBAB26C7B160" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="C28B71D170E3BBCE" classroomids="FB3CBBAB26C7B160" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="FEA93DE5F350D063" classroomids="FB3CBBAB26C7B160" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="B20E167251DFEFD4" classroomids="FB3CBBAB26C7B160" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="5A9DC96F6FD2D0E1" classroomids="D62E0E86F05FCC19" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="9BB5F363A7F148F2" classroomids="D62E0E86F05FCC19" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="AC45656D3E5158E4" classroomids="D62E0E86F05FCC19" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="083E475C57190550" classroomids="D62E0E86F05FCC19" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="AAB7EFAC73D0A068" classroomids="A7EA206130B1EC08" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="AAB7EFAC73D0A068" classroomids="A7EA206130B1EC08" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="AAB7EFAC73D0A068" classroomids="A7EA206130B1EC08" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="AAB7EFAC73D0A068" classroomids="A7EA206130B1EC08" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="E749D50BC33E7ADA" classroomids="9DFB2868AA625637" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="E749D50BC33E7ADA" classroomids="9DFB2868AA625637" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="E749D50BC33E7ADA" classroomids="9DFB2868AA625637" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="E749D50BC33E7ADA" classroomids="9DFB2868AA625637" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="CD92949BD35BCE58" classroomids="3951320FED32DE02" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="CD92949BD35BCE58" classroomids="3951320FED32DE02" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="CD92949BD35BCE58" classroomids="3951320FED32DE02" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="CD92949BD35BCE58" classroomids="3951320FED32DE02" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="03A0FCF36623849D" classroomids="69DBF489501B28DC" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="03A0FCF36623849D" classroomids="69DBF489501B28DC" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="03A0FCF36623849D" classroomids="69DBF489501B28DC" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="03A0FCF36623849D" classroomids="69DBF489501B28DC" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="10813FA95E541091" classroomids="36527D17C72C88F4" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="10813FA95E541091" classroomids="36527D17C72C88F4" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="10813FA95E541091" classroomids="36527D17C72C88F4" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="10813FA95E541091" classroomids="36527D17C72C88F4" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="EEBBBBBCAB3931EC" classroomids="E4A303A0781701E2" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="EEBBBBBCAB3931EC" classroomids="E4A303A0781701E2" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="EEBBBBBCAB3931EC" classroomids="E4A303A0781701E2" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="EEBBBBBCAB3931EC" classroomids="E4A303A0781701E2" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="EEBBBBBCAB3931EC" classroomids="E4A303A0781701E2" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="5614F8411AD444CA" classroomids="7A2A81212804C6A0" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="5614F8411AD444CA" classroomids="7A2A81212804C6A0" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="5614F8411AD444CA" classroomids="7A2A81212804C6A0" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="5614F8411AD444CA" classroomids="7A2A81212804C6A0" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="5614F8411AD444CA" classroomids="7A2A81212804C6A0" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="9E23F2CF1EF5903E" classroomids="3BE32B415A2905AB" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="9E23F2CF1EF5903E" classroomids="3BE32B415A2905AB" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="9E23F2CF1EF5903E" classroomids="3BE32B415A2905AB" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="9E23F2CF1EF5903E" classroomids="3BE32B415A2905AB" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="9E23F2CF1EF5903E" classroomids="3BE32B415A2905AB" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="EF2F1F4264E6F372" classroomids="5F41877D9601590C" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="EF2F1F4264E6F372" classroomids="5F41877D9601590C" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="EF2F1F4264E6F372" classroomids="5F41877D9601590C" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="EF2F1F4264E6F372" classroomids="5F41877D9601590C" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="EF2F1F4264E6F372" classroomids="5F41877D9601590C" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="3A12880CE84EB05D" classroomids="468B7BF75E08553A" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="3A12880CE84EB05D" classroomids="468B7BF75E08553A" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="3A12880CE84EB05D" classroomids="468B7BF75E08553A" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="3A12880CE84EB05D" classroomids="468B7BF75E08553A" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="3A12880CE84EB05D" classroomids="468B7BF75E08553A" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="2EA4F7C4161F3952" classroomids="F8AEF2669FAA7FD7" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="2EA4F7C4161F3952" classroomids="F8AEF2669FAA7FD7" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="2EA4F7C4161F3952" classroomids="F8AEF2669FAA7FD7" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="2EA4F7C4161F3952" classroomids="F8AEF2669FAA7FD7" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="2EA4F7C4161F3952" classroomids="F8AEF2669FAA7FD7" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="1793059DD37C5A5F" classroomids="FC7C8CB90D2D3358" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="1793059DD37C5A5F" classroomids="FC7C8CB90D2D3358" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="1793059DD37C5A5F" classroomids="FC7C8CB90D2D3358" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="1793059DD37C5A5F" classroomids="FC7C8CB90D2D3358" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="1793059DD37C5A5F" classroomids="FC7C8CB90D2D3358" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="B27875D743665E14" classroomids="FC7C8CB90D2D3358" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="B27875D743665E14" classroomids="FC7C8CB90D2D3358" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="B27875D743665E14" classroomids="FC7C8CB90D2D3358" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="B27875D743665E14" classroomids="FC7C8CB90D2D3358" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="B27875D743665E14" classroomids="FC7C8CB90D2D3358" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="137A82040AC27A9B" classroomids="3B926682EC41D040" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="137A82040AC27A9B" classroomids="3B926682EC41D040" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="137A82040AC27A9B" classroomids="3B926682EC41D040" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="137A82040AC27A9B" classroomids="3B926682EC41D040" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="137A82040AC27A9B" classroomids="3B926682EC41D040" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="88EE0033E874EA5C" classroomids="3B926682EC41D040" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="88EE0033E874EA5C" classroomids="3B926682EC41D040" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="88EE0033E874EA5C" classroomids="3B926682EC41D040" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="88EE0033E874EA5C" classroomids="3B926682EC41D040" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="88EE0033E874EA5C" classroomids="3B926682EC41D040" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="A3E233703711D0CC" classroomids="5C9E31B1B08281F9" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="A3E233703711D0CC" classroomids="5C9E31B1B08281F9" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="A3E233703711D0CC" classroomids="5C9E31B1B08281F9" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="A3E233703711D0CC" classroomids="5C9E31B1B08281F9" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="A3E233703711D0CC" classroomids="5C9E31B1B08281F9" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="9547FB069591D232" classroomids="FC7C8CB90D2D3358" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="9547FB069591D232" classroomids="FC7C8CB90D2D3358" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="9547FB069591D232" classroomids="FC7C8CB90D2D3358" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="D832FFBDAEA7DE99" classroomids="FC7C8CB90D2D3358" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="D832FFBDAEA7DE99" classroomids="FC7C8CB90D2D3358" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="D832FFBDAEA7DE99" classroomids="FC7C8CB90D2D3358" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="467F5EE8AE91E053" classroomids="5C9E31B1B08281F9" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="467F5EE8AE91E053" classroomids="5C9E31B1B08281F9" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="467F5EE8AE91E053" classroomids="5C9E31B1B08281F9" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="7EA6B977B20B431D" classroomids="FC7C8CB90D2D3358" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="7EA6B977B20B431D" classroomids="FC7C8CB90D2D3358" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="7EA6B977B20B431D" classroomids="FC7C8CB90D2D3358" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="DD138BB754AA6176" classroomids="FC7C8CB90D2D3358" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="DD138BB754AA6176" classroomids="FC7C8CB90D2D3358" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="DD138BB754AA6176" classroomids="FC7C8CB90D2D3358" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="668282B61E406FE3" classroomids="5C9E31B1B08281F9" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="668282B61E406FE3" classroomids="5C9E31B1B08281F9" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="668282B61E406FE3" classroomids="5C9E31B1B08281F9" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="9451515CFCA679E7" classroomids="5C9E31B1B08281F9" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="9451515CFCA679E7" classroomids="5C9E31B1B08281F9" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="9451515CFCA679E7" classroomids="5C9E31B1B08281F9" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="74308D270172317F" classroomids="3B926682EC41D040" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="74308D270172317F" classroomids="3B926682EC41D040" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="74308D270172317F" classroomids="3B926682EC41D040" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="7F44B25EC5B31453" classroomids="38BD9ACE40F6D4A2" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="7F44B25EC5B31453" classroomids="38BD9ACE40F6D4A2" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="7F44B25EC5B31453" classroomids="38BD9ACE40F6D4A2" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="F92CE6459B2E2A5C" classroomids="38BD9ACE40F6D4A2" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="F92CE6459B2E2A5C" classroomids="38BD9ACE40F6D4A2" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="F92CE6459B2E2A5C" classroomids="38BD9ACE40F6D4A2" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="D51B21612C2F68EE" classroomids="38BD9ACE40F6D4A2" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="D51B21612C2F68EE" classroomids="38BD9ACE40F6D4A2" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="D51B21612C2F68EE" classroomids="38BD9ACE40F6D4A2" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="727406F534127E85" classroomids="3B926682EC41D040" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="727406F534127E85" classroomids="3B926682EC41D040" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="727406F534127E85" classroomids="3B926682EC41D040" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="6AE6DF27795F03F3" classroomids="38BD9ACE40F6D4A2" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="6AE6DF27795F03F3" classroomids="38BD9ACE40F6D4A2" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="0A3D0144F5187D7C" classroomids="38BD9ACE40F6D4A2" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="0A3D0144F5187D7C" classroomids="38BD9ACE40F6D4A2" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="CB4BD81D2315B255" classroomids="38BD9ACE40F6D4A2" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="CB4BD81D2315B255" classroomids="38BD9ACE40F6D4A2" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="07C376E0C6174F93" classroomids="5C9E31B1B08281F9" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="07C376E0C6174F93" classroomids="5C9E31B1B08281F9" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="07C376E0C6174F93" classroomids="5C9E31B1B08281F9" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="07C376E0C6174F93" classroomids="5C9E31B1B08281F9" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="2C257F5770B678ED" classroomids="FC7C8CB90D2D3358" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="2C257F5770B678ED" classroomids="FC7C8CB90D2D3358" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="10EC11A39A431333" classroomids="5C9E31B1B08281F9" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="10EC11A39A431333" classroomids="5C9E31B1B08281F9" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="ECE04AB45E84BC7D" classroomids="5C9E31B1B08281F9" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="ECE04AB45E84BC7D" classroomids="5C9E31B1B08281F9" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="DF37D76443D5194E" classroomids="3B926682EC41D040" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="DF37D76443D5194E" classroomids="3B926682EC41D040" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="39D4BC403A105647" classroomids="38BD9ACE40F6D4A2" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="39D4BC403A105647" classroomids="38BD9ACE40F6D4A2" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="DBDCE1137E797F1D" classroomids="38BD9ACE40F6D4A2" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="DBDCE1137E797F1D" classroomids="38BD9ACE40F6D4A2" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="4275FA58525A73DC" classroomids="3B926682EC41D040" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="4275FA58525A73DC" classroomids="3B926682EC41D040" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="22F60D840443736C" classroomids="38BD9ACE40F6D4A2" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="22F60D840443736C" classroomids="38BD9ACE40F6D4A2" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="19FBD540226A0928" classroomids="38BD9ACE40F6D4A2" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="19FBD540226A0928" classroomids="38BD9ACE40F6D4A2" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="687BAA2D64CDE518" classroomids="38BD9ACE40F6D4A2" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="687BAA2D64CDE518" classroomids="38BD9ACE40F6D4A2" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="1AF9D5EC8692C884" classroomids="5C9E31B1B08281F9" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="1AF9D5EC8692C884" classroomids="5C9E31B1B08281F9" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="1AF9D5EC8692C884" classroomids="5C9E31B1B08281F9" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="1B6A3D7409E1A2B7" classroomids="BA090444FE16A1C8" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="1B6A3D7409E1A2B7" classroomids="BA090444FE16A1C8" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="D722C58F299CB2E6" classroomids="BA090444FE16A1C8" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="D722C58F299CB2E6" classroomids="BA090444FE16A1C8" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="85C36FD0231F216C" classroomids="BA090444FE16A1C8" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="85C36FD0231F216C" classroomids="BA090444FE16A1C8" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="ED8577E501DCA74D" classroomids="BA090444FE16A1C8" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="ED8577E501DCA74D" classroomids="BA090444FE16A1C8" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="47AD73A2D022ABCF" classroomids="BA090444FE16A1C8" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="47AD73A2D022ABCF" classroomids="BA090444FE16A1C8" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="17452A89B3FB2165" classroomids="BA090444FE16A1C8" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="17452A89B3FB2165" classroomids="BA090444FE16A1C8" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="B2D55383E68B3769" classroomids="B9306436676D64CD" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="B2D55383E68B3769" classroomids="B9306436676D64CD" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="175F289023AF4BF6" classroomids="B9306436676D64CD" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="175F289023AF4BF6" classroomids="B9306436676D64CD" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="21A21C7B99A1F367" classroomids="B9306436676D64CD" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="21A21C7B99A1F367" classroomids="B9306436676D64CD" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="2CA721B198047286" classroomids="B9306436676D64CD" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="2CA721B198047286" classroomids="B9306436676D64CD" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="3778248C3FF96BAD" classroomids="B9306436676D64CD" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="3778248C3FF96BAD" classroomids="B9306436676D64CD" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="F32038853D5C6C9B" classroomids="B9306436676D64CD" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="F32038853D5C6C9B" classroomids="B9306436676D64CD" period="7" weeks="1" terms="1" days="00010"/>
      <card lessonid="9FE145278ECA598D" classroomids="B9306436676D64CD" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="9FE145278ECA598D" classroomids="B9306436676D64CD" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="6AEAFA3AE1A219AB" classroomids="B9306436676D64CD" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="6AEAFA3AE1A219AB" classroomids="B9306436676D64CD" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="78BDDB1B1457C1C7" classroomids="B9306436676D64CD" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="9DE21D2668390818" classroomids="B9306436676D64CD" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="7765F12F033E5B01" classroomids="CFB44A3CF3CFF304" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="7765F12F033E5B01" classroomids="CFB44A3CF3CFF304" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="12E465EF985C8350" classroomids="CFB44A3CF3CFF304" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="12E465EF985C8350" classroomids="CFB44A3CF3CFF304" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="EB790F2A8BE6ED70" classroomids="CFB44A3CF3CFF304" period="7" weeks="1" terms="1" days="00010"/>
      <card lessonid="EB790F2A8BE6ED70" classroomids="CFB44A3CF3CFF304" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="57D7C62CA47C0360" classroomids="CFB44A3CF3CFF304" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="57D7C62CA47C0360" classroomids="CFB44A3CF3CFF304" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="BCE2DB1C74025B5A" classroomids="CFB44A3CF3CFF304" period="7" weeks="1" terms="1" days="00001"/>
      <card lessonid="BCE2DB1C74025B5A" classroomids="CFB44A3CF3CFF304" period="7" weeks="1" terms="1" days="01000"/>
      <card lessonid="733E4BFEA2663339" classroomids="CFB44A3CF3CFF304" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="733E4BFEA2663339" classroomids="CFB44A3CF3CFF304" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="A2134D3E07CEC4C3" classroomids="CFB44A3CF3CFF304" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="A2134D3E07CEC4C3" classroomids="CFB44A3CF3CFF304" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="7450E9BCF60EE04F" classroomids="CFB44A3CF3CFF304" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="7450E9BCF60EE04F" classroomids="CFB44A3CF3CFF304" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="7450E9BCF60EE04F" classroomids="CFB44A3CF3CFF304" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="96B92FF24E67C227" classroomids="CFB44A3CF3CFF304" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="96B92FF24E67C227" classroomids="CFB44A3CF3CFF304" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="96B92FF24E67C227" classroomids="CFB44A3CF3CFF304" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="C91FA960BBBA840B" classroomids="CFB44A3CF3CFF304" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="C91FA960BBBA840B" classroomids="CFB44A3CF3CFF304" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="C91FA960BBBA840B" classroomids="CFB44A3CF3CFF304" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="F778E78318676B4D" classroomids="CFB44A3CF3CFF304" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="F778E78318676B4D" classroomids="CFB44A3CF3CFF304" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="F778E78318676B4D" classroomids="CFB44A3CF3CFF304" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="413F6A46CD4B1DCF" classroomids="CFB44A3CF3CFF304" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="B20EDF31CB22586B" classroomids="CFB44A3CF3CFF304" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="2B547BACED9ECF2F" classroomids="EA2F851F31637E65" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="FD9EE034FE419367" classroomids="EA2F851F31637E65" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="EA5426531A6BE1A3" classroomids="EA2F851F31637E65" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="20C62191C514164A" classroomids="EA2F851F31637E65" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="7ACA5CB9C5E020E2" classroomids="EA2F851F31637E65" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="7ACA5CB9C5E020E2" classroomids="EA2F851F31637E65" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="2B139FBABBEF4752" classroomids="EA2F851F31637E65" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="2B139FBABBEF4752" classroomids="EA2F851F31637E65" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="21D1EB3310E124B0" classroomids="EA2F851F31637E65" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="21D1EB3310E124B0" classroomids="EA2F851F31637E65" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="178C228BC9C2E495" classroomids="EA2F851F31637E65" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="178C228BC9C2E495" classroomids="EA2F851F31637E65" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="1D41CD4D7E14A91A" classroomids="EA2F851F31637E65" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="1D41CD4D7E14A91A" classroomids="EA2F851F31637E65" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="A0B69E6A48C07A0E" classroomids="EA2F851F31637E65" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="A0B69E6A48C07A0E" classroomids="EA2F851F31637E65" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="68EF01B71FCC1BBB" classroomids="EA2F851F31637E65" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="68EF01B71FCC1BBB" classroomids="EA2F851F31637E65" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="655A31E631B1BBE5" classroomids="EA2F851F31637E65" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="655A31E631B1BBE5" classroomids="EA2F851F31637E65" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="AFE0F9319232CC86" classroomids="EA2F851F31637E65" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="AFE0F9319232CC86" classroomids="EA2F851F31637E65" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="1F7831245CF875DC" classroomids="A7EA206130B1EC08" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="072A09C5F27AC14A" classroomids="9DFB2868AA625637" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="D1FE4695151D1C12" classroomids="3951320FED32DE02" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="B75BD6C3B916B336" classroomids="E4A303A0781701E2" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="17E9EE062B38DEE1" classroomids="7A2A81212804C6A0" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="D5F1DC3E7E62C163" classroomids="3BE32B415A2905AB" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="5F7F314DF821F980" classroomids="5F41877D9601590C" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="78E0664756D2C5CE" classroomids="468B7BF75E08553A" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="A4127E47DD4297BD" classroomids="F8AEF2669FAA7FD7" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="529058CEF3C374C3" classroomids="F0747FC29D78C2F1" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="A9C49C7F1E2098AD" classroomids="F0747FC29D78C2F1" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="535E374A35E0C658" classroomids="F0747FC29D78C2F1" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="396AE1CBF289564D" classroomids="F0747FC29D78C2F1" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="F485FA438F3D44F1" classroomids="F0747FC29D78C2F1" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="F3A02E02A10F2E86" classroomids="F0747FC29D78C2F1" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="4C0EC77AA433D4D5" classroomids="F0747FC29D78C2F1" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="756C2E3F8F68B028" classroomids="F0747FC29D78C2F1" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="0A73515CD9708199" classroomids="F0747FC29D78C2F1" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="D62C81FB4AB06C10" classroomids="F0747FC29D78C2F1" period="7" weeks="1" terms="1" days="01000"/>
      <card lessonid="64D757466987B76F" classroomids="F0747FC29D78C2F1" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="E6FAB9644FBCCC14" classroomids="F61647EE09423290" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="E6FAB9644FBCCC14" classroomids="F61647EE09423290" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="E6FAB9644FBCCC14" classroomids="D73C84710607B70E" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="878E30DB97954E0C" classroomids="F61647EE09423290" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="878E30DB97954E0C" classroomids="F61647EE09423290" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="878E30DB97954E0C" classroomids="798246240B4F2214" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="8DADAE8DF22C17B2" classroomids="F61647EE09423290" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="8DADAE8DF22C17B2" classroomids="798246240B4F2214" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="8DADAE8DF22C17B2" classroomids="D73C84710607B70E" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="D5AD0751FBF17D0D" classroomids="F61647EE09423290" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="D5AD0751FBF17D0D" classroomids="F61647EE09423290" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="D5AD0751FBF17D0D" classroomids="F61647EE09423290" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="E6DD67BCB77FDA2C" classroomids="F61647EE09423290" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="E6DD67BCB77FDA2C" classroomids="D73C84710607B70E" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="E6DD67BCB77FDA2C" classroomids="D73C84710607B70E" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="EAB1711340E7A0DA" classroomids="F61647EE09423290" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="EAB1711340E7A0DA" classroomids="D73C84710607B70E" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="EAB1711340E7A0DA" classroomids="D73C84710607B70E" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="D21E9144F31CA820" classroomids="F61647EE09423290" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="D21E9144F31CA820" classroomids="F61647EE09423290" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="D21E9144F31CA820" classroomids="798246240B4F2214" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="E927B4C4F8234452" classroomids="F61647EE09423290" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="E927B4C4F8234452" classroomids="F61647EE09423290" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="E927B4C4F8234452" classroomids="D73C84710607B70E" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="FEEFE9735203E62C" classroomids="F61647EE09423290" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="FEEFE9735203E62C" classroomids="F61647EE09423290" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="FEEFE9735203E62C" classroomids="F61647EE09423290" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="FF035533AF491A56" classroomids="798246240B4F2214" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="FF035533AF491A56" classroomids="D73C84710607B70E" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="FF035533AF491A56" classroomids="F61647EE09423290" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="A220515FF3596103" classroomids="7C4BADB3FFD3A3AE" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="A220515FF3596103" classroomids="7C4BADB3FFD3A3AE" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="A220515FF3596103" classroomids="7C4BADB3FFD3A3AE" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="A220515FF3596103" classroomids="F4B98DA5599C5C3D" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="D06EEFEC80D3F7E8" classroomids="F4B98DA5599C5C3D" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="D06EEFEC80D3F7E8" classroomids="7C4BADB3FFD3A3AE" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="D06EEFEC80D3F7E8" classroomids="7C4BADB3FFD3A3AE" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="D06EEFEC80D3F7E8" classroomids="F4B98DA5599C5C3D" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="8A7A62253D97514E" classroomids="7C4BADB3FFD3A3AE" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="8A7A62253D97514E" classroomids="F4B98DA5599C5C3D" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="3AE8EE188AEB7AE0" classroomids="F4B98DA5599C5C3D" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="3AE8EE188AEB7AE0" classroomids="7C4BADB3FFD3A3AE" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="D0F00F971FEBD791" classroomids="7C4BADB3FFD3A3AE" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="D0F00F971FEBD791" classroomids="7C4BADB3FFD3A3AE" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="D0F00F971FEBD791" classroomids="7C4BADB3FFD3A3AE" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="964FB5DE776EF7FC" classroomids="7C4BADB3FFD3A3AE" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="964FB5DE776EF7FC" classroomids="7C4BADB3FFD3A3AE" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="7D66FE4C2A50DA04" classroomids="BA090444FE16A1C8" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="7D66FE4C2A50DA04" classroomids="BA090444FE16A1C8" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="7D66FE4C2A50DA04" classroomids="BA090444FE16A1C8" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="7D66FE4C2A50DA04" classroomids="BA090444FE16A1C8" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="13D3C51C05B06379" classroomids="BA090444FE16A1C8" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="13D3C51C05B06379" classroomids="BA090444FE16A1C8" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="BD7C56D3147DF456" classroomids="F61647EE09423290" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="BD7C56D3147DF456" classroomids="F61647EE09423290" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="BD7C56D3147DF456" classroomids="F61647EE09423290" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="64E24E6F2053C415" classroomids="D73C84710607B70E" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="64E24E6F2053C415" classroomids="798246240B4F2214" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="64E24E6F2053C415" classroomids="798246240B4F2214" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="FB07B0D92A2B14C0" classroomids="8BD618FEBDFE26BE" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="FB07B0D92A2B14C0" classroomids="8BD618FEBDFE26BE" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="FB07B0D92A2B14C0" classroomids="798246240B4F2214" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="A13C93FECE515798" classroomids="8BD618FEBDFE26BE" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="A13C93FECE515798" classroomids="798246240B4F2214" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="A13C93FECE515798" classroomids="8BD618FEBDFE26BE" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="74538BAA3A19BD29" classroomids="D73C84710607B70E" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="74538BAA3A19BD29" classroomids="8BD618FEBDFE26BE" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="74538BAA3A19BD29" classroomids="D73C84710607B70E" period="7" weeks="1" terms="1" days="00010"/>
      <card lessonid="EC69186594DF1049" classroomids="D73C84710607B70E" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="EC69186594DF1049" classroomids="D73C84710607B70E" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="EC69186594DF1049" classroomids="798246240B4F2214" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="5FA53D8E90FCCD08" classroomids="D73C84710607B70E" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="5FA53D8E90FCCD08" classroomids="D73C84710607B70E" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="5FA53D8E90FCCD08" classroomids="D73C84710607B70E" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="DB9352E692FB63EE" classroomids="8BD618FEBDFE26BE" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="DB9352E692FB63EE" classroomids="8BD618FEBDFE26BE" period="7" weeks="1" terms="1" days="00010"/>
      <card lessonid="DB9352E692FB63EE" classroomids="8BD618FEBDFE26BE" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="FCE2EF8F9EE54871" classroomids="798246240B4F2214" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="FCE2EF8F9EE54871" classroomids="D73C84710607B70E" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="FCE2EF8F9EE54871" classroomids="D73C84710607B70E" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="BDC11991D0DF6520" classroomids="8BD618FEBDFE26BE" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="BDC11991D0DF6520" classroomids="8BD618FEBDFE26BE" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="BDC11991D0DF6520" classroomids="798246240B4F2214" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="A35B90FD048CFED3" classroomids="798246240B4F2214" period="7" weeks="1" terms="1" days="01000"/>
      <card lessonid="A35B90FD048CFED3" classroomids="798246240B4F2214" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="A35B90FD048CFED3" classroomids="8BD618FEBDFE26BE" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="E2A347D2093C4BAA" classroomids="798246240B4F2214" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="E2A347D2093C4BAA" classroomids="798246240B4F2214" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="E2A347D2093C4BAA" classroomids="798246240B4F2214" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="C5D460F8EE8706DF" classroomids="8BD618FEBDFE26BE" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="C5D460F8EE8706DF" classroomids="798246240B4F2214" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="C5D460F8EE8706DF" classroomids="798246240B4F2214" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="848BD9B754904D5F" classroomids="D73C84710607B70E" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="848BD9B754904D5F" classroomids="8BD618FEBDFE26BE" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="848BD9B754904D5F" classroomids="8BD618FEBDFE26BE" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="C956BA57FEDDF478" classroomids="798246240B4F2214" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="C956BA57FEDDF478" classroomids="8BD618FEBDFE26BE" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="C956BA57FEDDF478" classroomids="D73C84710607B70E" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="1E034F9CA9CFDE24" classroomids="8BD618FEBDFE26BE" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="1E034F9CA9CFDE24" classroomids="798246240B4F2214" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="1E034F9CA9CFDE24" classroomids="D73C84710607B70E" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="F6689860CD6DBBF0" classroomids="798246240B4F2214" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="F6689860CD6DBBF0" classroomids="8BD618FEBDFE26BE" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="F6689860CD6DBBF0" classroomids="8BD618FEBDFE26BE" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="5432719725B7E852" classroomids="798246240B4F2214" period="7" weeks="1" terms="1" days="00001"/>
      <card lessonid="5432719725B7E852" classroomids="D73C84710607B70E" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="5432719725B7E852" classroomids="8BD618FEBDFE26BE" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="66CD23D199A9C39C" classroomids="38BD9ACE40F6D4A2" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="66CD23D199A9C39C" classroomids="38BD9ACE40F6D4A2" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="81B7099292534B89" classroomids="7C4BADB3FFD3A3AE" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="81B7099292534B89" classroomids="7C4BADB3FFD3A3AE" period="7" weeks="1" terms="1" days="01000"/>
      <card lessonid="ABFF375F076ED474" classroomids="FB1B3BB135030306" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="DAC33E3672C8539E" classroomids="FB1B3BB135030306" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="B3AEFD1EB55464F6" classroomids="CA61C1AC40D20CBA" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="E71F7C563EAF9BD9" classroomids="FB1B3BB135030306" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="639E06550B0213C5" classroomids="FB1B3BB135030306" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="B286BCEC2810879D" classroomids="18EAD7475208E4B6" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="03F12EEECFC622D1" classroomids="FB1B3BB135030306" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="53DEB0EBB7D312BC" classroomids="18EAD7475208E4B6" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="8304F5897D31621C" classroomids="18EAD7475208E4B6" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="E581305243440479" classroomids="FB1B3BB135030306" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="58AC659A3517E3CE" classroomids="FB1B3BB135030306" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="E0B20599AD0653A4" classroomids="CA61C1AC40D20CBA" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="8477891DA67A859E" classroomids="CA61C1AC40D20CBA" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="9ABB9C23AD6916A9" classroomids="FB1B3BB135030306" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="D78319EEC22CEE88" classroomids="CA61C1AC40D20CBA" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="F1D512538F7F6A39" classroomids="FB1B3BB135030306" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="C50BCA9F313E9DEF" classroomids="0AD16578DAE2BA2E" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="C50BCA9F313E9DEF" classroomids="0AD16578DAE2BA2E" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="682611FE9456F2B7" classroomids="0AD16578DAE2BA2E" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="682611FE9456F2B7" classroomids="0AD16578DAE2BA2E" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="7C9C25DBDE61F34D" classroomids="FB3CBBAB26C7B160" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="802E2FF22F95DD38" classroomids="D351F555F1C80A53" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="0BF181AC774FBEE1" classroomids="FB3CBBAB26C7B160" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="A42D34E29D8939FC" classroomids="D351F555F1C80A53" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="E96B356530CDD8B2" classroomids="FB3CBBAB26C7B160" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="65F12BD687D94365" classroomids="DF7D82DE0699F5C3" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="65F12BD687D94365" classroomids="B00A0D9D1FDDA638" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="65F12BD687D94365" classroomids="DF7D82DE0699F5C3" period="7" weeks="1" terms="1" days="00010"/>
      <card lessonid="FACD5085A47DF76A" classroomids="268956F2308D2762" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="D9D879EE714EE487" classroomids="C9CA9F2233FAE7CD" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="D9D879EE714EE487" classroomids="C9CA9F2233FAE7CD" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="D9D879EE714EE487" classroomids="C9CA9F2233FAE7CD" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="D9D879EE714EE487" classroomids="C9CA9F2233FAE7CD" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="334C1D27B64E9582" classroomids="C9CA9F2233FAE7CD" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="334C1D27B64E9582" classroomids="C9CA9F2233FAE7CD" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="71B4FDDC5A4A3A42" classroomids="C9CA9F2233FAE7CD" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="71B4FDDC5A4A3A42" classroomids="C9CA9F2233FAE7CD" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="DC0B256A55936E91" classroomids="69DBF489501B28DC" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="53AFBBF17D5235C0" classroomids="36527D17C72C88F4" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="8D1266AB83D04789" classroomids="B9306436676D64CD" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="8D1266AB83D04789" classroomids="B9306436676D64CD" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="C1D6DED3F8B4EC32" classroomids="D351F555F1C80A53" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="F61093F8558B2784" classroomids="D351F555F1C80A53" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="F61093F8558B2784" classroomids="D351F555F1C80A53" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="FFEBA8E959483B22" classroomids="D351F555F1C80A53" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="FFEBA8E959483B22" classroomids="D351F555F1C80A53" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="4078616EE4484850" classroomids="D351F555F1C80A53" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="4078616EE4484850" classroomids="D351F555F1C80A53" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="B2EA0CE8783AB48C" classroomids="FB3CBBAB26C7B160" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="B2EA0CE8783AB48C" classroomids="FB3CBBAB26C7B160" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="C569277908A4E2DE" classroomids="D351F555F1C80A53" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="C569277908A4E2DE" classroomids="D351F555F1C80A53" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="54BB8BBD951F1EF0" classroomids="FB3CBBAB26C7B160" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="54BB8BBD951F1EF0" classroomids="FB3CBBAB26C7B160" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="5E811C8FA9237D07" classroomids="D351F555F1C80A53" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="5E811C8FA9237D07" classroomids="D351F555F1C80A53" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="B9D070CCFBA134ED" classroomids="B00A0D9D1FDDA638" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="B9D070CCFBA134ED" classroomids="B00A0D9D1FDDA638" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="B9D070CCFBA134ED" classroomids="B00A0D9D1FDDA638" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="B9D070CCFBA134ED" classroomids="B00A0D9D1FDDA638" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="F389847CE6404EAD" classroomids="E602EDDA0E66F7CB" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="F389847CE6404EAD" classroomids="E602EDDA0E66F7CB" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="F389847CE6404EAD" classroomids="E602EDDA0E66F7CB" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="F389847CE6404EAD" classroomids="E602EDDA0E66F7CB" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="F1F340DA2241ED24" classroomids="B00A0D9D1FDDA638" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="F1F340DA2241ED24" classroomids="B00A0D9D1FDDA638" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="F1F340DA2241ED24" classroomids="B00A0D9D1FDDA638" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="F1F340DA2241ED24" classroomids="B00A0D9D1FDDA638" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="87679E23A93A8580" classroomids="B00A0D9D1FDDA638" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="87679E23A93A8580" classroomids="B00A0D9D1FDDA638" period="7" weeks="1" terms="1" days="00001"/>
      <card lessonid="87679E23A93A8580" classroomids="B00A0D9D1FDDA638" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="35BB90D47BFD8F1A" classroomids="B00A0D9D1FDDA638" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="35BB90D47BFD8F1A" classroomids="E602EDDA0E66F7CB" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="35BB90D47BFD8F1A" classroomids="B00A0D9D1FDDA638" period="7" weeks="1" terms="1" days="00010"/>
      <card lessonid="4A06C1EC49FFA92A" classroomids="DF7D82DE0699F5C3" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="4A06C1EC49FFA92A" classroomids="E602EDDA0E66F7CB" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="4A06C1EC49FFA92A" classroomids="DF7D82DE0699F5C3" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="FFCB72163247D634" classroomids="B00A0D9D1FDDA638" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="FFCB72163247D634" classroomids="B00A0D9D1FDDA638" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="FFCB72163247D634" classroomids="B00A0D9D1FDDA638" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="FFCB72163247D634" classroomids="B00A0D9D1FDDA638" period="7" weeks="1" terms="1" days="01000"/>
      <card lessonid="01CB284D83B0DBC1" classroomids="E602EDDA0E66F7CB" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="01CB284D83B0DBC1" classroomids="E602EDDA0E66F7CB" period="7" weeks="1" terms="1" days="00010"/>
      <card lessonid="01CB284D83B0DBC1" classroomids="E602EDDA0E66F7CB" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="01CB284D83B0DBC1" classroomids="E602EDDA0E66F7CB" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="12803548D414E4B4" classroomids="E602EDDA0E66F7CB" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="12803548D414E4B4" classroomids="E602EDDA0E66F7CB" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="12803548D414E4B4" classroomids="E602EDDA0E66F7CB" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="12803548D414E4B4" classroomids="E602EDDA0E66F7CB" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="946924572B4B8A63" classroomids="E602EDDA0E66F7CB" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="946924572B4B8A63" classroomids="E602EDDA0E66F7CB" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="946924572B4B8A63" classroomids="E602EDDA0E66F7CB" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="946924572B4B8A63" classroomids="E602EDDA0E66F7CB" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="EBED312240D09B74" classroomids="C9CA9F2233FAE7CD" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="EBED312240D09B74" classroomids="C9CA9F2233FAE7CD" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="EBED312240D09B74" classroomids="C9CA9F2233FAE7CD" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="EBED312240D09B74" classroomids="C9CA9F2233FAE7CD" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="C10E698C6329E247" classroomids="0AD16578DAE2BA2E" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="6D9463F99D945FF8" classroomids="0AD16578DAE2BA2E" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="F0358592305C8325" classroomids="0AD16578DAE2BA2E" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="42EBF934D3F5C8AC" classroomids="0AD16578DAE2BA2E" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="42EBF934D3F5C8AC" classroomids="0AD16578DAE2BA2E" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="A89F8D7F07924D08" classroomids="0AD16578DAE2BA2E" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="A89F8D7F07924D08" classroomids="0AD16578DAE2BA2E" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="50B42CE580CD714C" classroomids="0AD16578DAE2BA2E" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="50B42CE580CD714C" classroomids="0AD16578DAE2BA2E" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="8A0C049897F46276" classroomids="0AD16578DAE2BA2E" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="8A0C049897F46276" classroomids="0AD16578DAE2BA2E" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="C60AD03B2D43ED21" classroomids="7C4BADB3FFD3A3AE" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="C60AD03B2D43ED21" classroomids="7C4BADB3FFD3A3AE" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="B1FB5F0A937DEE66" classroomids="7C4BADB3FFD3A3AE" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="B1FB5F0A937DEE66" classroomids="7C4BADB3FFD3A3AE" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="521A22F175D2F90E" classroomids="7C4BADB3FFD3A3AE" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="521A22F175D2F90E" classroomids="7C4BADB3FFD3A3AE" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="BE8BEC099EF64D78" classroomids="7C4BADB3FFD3A3AE" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="BE8BEC099EF64D78" classroomids="7C4BADB3FFD3A3AE" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="43C8F3F6ED3516CF" classroomids="41E9B46601036D28" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="1858B94082D128A3" classroomids="41E9B46601036D28" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="E88BE372A3F149D6" classroomids="3A7F9885FF288845" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="98A7ED80E48BB607" classroomids="41E9B46601036D28" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="CBFE7BCB405E9F7B" classroomids="41E9B46601036D28" period="7" weeks="1" terms="1" days="00010"/>
      <card lessonid="CBFE7BCB405E9F7B" classroomids="41E9B46601036D28" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="86C0B554DA13D79F" classroomids="D62E0E86F05FCC19" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="86C0B554DA13D79F" classroomids="D62E0E86F05FCC19" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="FAB068860AECE4BE" classroomids="41E9B46601036D28" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="FAB068860AECE4BE" classroomids="41E9B46601036D28" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="6FB9566A8F47DE9C" classroomids="41E9B46601036D28" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="355D4E692D7CF088" classroomids="41E9B46601036D28" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="CF922AAD4BA4AE91" classroomids="3A7F9885FF288845" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="1E7C2B508F090664" classroomids="3A7F9885FF288845" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="EE9999A12B4494ED" classroomids="3A7F9885FF288845" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="F0BE4444B9BAD4EB" classroomids="3A7F9885FF288845" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="69465C993BED02A6" classroomids="3A7F9885FF288845" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="87D2323CE578E6CE" classroomids="D62E0E86F05FCC19" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="D2F4F4E8811BA868" classroomids="D62E0E86F05FCC19" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="EB96D8A8D7D4F21F" classroomids="D62E0E86F05FCC19" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="F980BB857F2775E6" classroomids="D62E0E86F05FCC19" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="BE162D04A8618325" classroomids="D62E0E86F05FCC19" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="8CC6FE400EE18CA3" classroomids="41E9B46601036D28" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="06C03C22E0F076D2" classroomids="BA090444FE16A1C8" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="06C03C22E0F076D2" classroomids="BA090444FE16A1C8" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="34174796A53E69C4" classroomids="B9306436676D64CD" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="EFA323F81998BC5E" classroomids="B9306436676D64CD" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="723B7A241D10332D" classroomids="B9306436676D64CD" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="723B7A241D10332D" classroomids="B9306436676D64CD" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="26385F9A63B543F3" classroomids="B9306436676D64CD" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="26385F9A63B543F3" classroomids="B9306436676D64CD" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="6D4FC6A2429AF3D8" classroomids="EA2F851F31637E65" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="9ED131855DFF4E9A" classroomids="EA2F851F31637E65" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="7C9FCFC7C1B94EB5" classroomids="7341FEEAD1621574" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="C082E21DFC2BA456" classroomids="F0747FC29D78C2F1" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="AF3EE5AA24EC4407" classroomids="F0747FC29D78C2F1" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="F8F26EAB0F90A2B1" classroomids="F0747FC29D78C2F1" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="1A4CD3FB924F329C" classroomids="F0747FC29D78C2F1" period="7" weeks="1" terms="1" days="00001"/>
      <card lessonid="16B90AC9FA58D256" classroomids="BA090444FE16A1C8" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="16B90AC9FA58D256" classroomids="BA090444FE16A1C8" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="43B07C069FBF2EDE" classroomids="BA090444FE16A1C8" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="43B07C069FBF2EDE" classroomids="F0747FC29D78C2F1" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="3E60FAFF193C253A" classroomids="F0747FC29D78C2F1" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="3E60FAFF193C253A" classroomids="F0747FC29D78C2F1" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="496FAD0E9FFB24B4" classroomids="F0747FC29D78C2F1" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="496FAD0E9FFB24B4" classroomids="F0747FC29D78C2F1" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="9BA9870E0355C7A5" classroomids="F0747FC29D78C2F1" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="9BA9870E0355C7A5" classroomids="F0747FC29D78C2F1" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="437EE62C37FE55FA" classroomids="F0747FC29D78C2F1" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="437EE62C37FE55FA" classroomids="F0747FC29D78C2F1" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="4FF3022F8DACE557" classroomids="F0747FC29D78C2F1" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="4FF3022F8DACE557" classroomids="F0747FC29D78C2F1" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="7E743BD0EB0734D8" classroomids="CA61C1AC40D20CBA,268956F2308D2762" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="7E743BD0EB0734D8" classroomids="CA61C1AC40D20CBA,268956F2308D2762" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="C2A9CF2DDC0C420E" classroomids="CA61C1AC40D20CBA,268956F2308D2762" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="C2A9CF2DDC0C420E" classroomids="CA61C1AC40D20CBA,268956F2308D2762" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="B336F15EA1EA3156" classroomids="18EAD7475208E4B6,268956F2308D2762" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="F6AFC3C2C82F4345" classroomids="18EAD7475208E4B6,268956F2308D2762" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="8D2FABF8B54AD0FB" classroomids="18EAD7475208E4B6,268956F2308D2762" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="5966BF52FCB0850A" classroomids="18EAD7475208E4B6,268956F2308D2762" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="5966BF52FCB0850A" classroomids="18EAD7475208E4B6,268956F2308D2762" period="7" weeks="1" terms="1" days="00001"/>
      <card lessonid="7D48B329C8CF065C" classroomids="18EAD7475208E4B6,268956F2308D2762" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="7D48B329C8CF065C" classroomids="18EAD7475208E4B6,268956F2308D2762" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="C4252E329863EBD2" classroomids="268956F2308D2762,18EAD7475208E4B6" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="C4252E329863EBD2" classroomids="268956F2308D2762,18EAD7475208E4B6" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="D6A8DF8686C2480D" classroomids="268956F2308D2762,18EAD7475208E4B6" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="D6A8DF8686C2480D" classroomids="268956F2308D2762,18EAD7475208E4B6" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="1402CEFD514C383B" classroomids="268956F2308D2762,18EAD7475208E4B6" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="1402CEFD514C383B" classroomids="268956F2308D2762,18EAD7475208E4B6" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="9535794088727971" classroomids="18EAD7475208E4B6,268956F2308D2762" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="FF0A886434917E77" classroomids="268956F2308D2762,18EAD7475208E4B6" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="9CC47593F0005F65" classroomids="268956F2308D2762,18EAD7475208E4B6" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="E23CE3C803007774" classroomids="268956F2308D2762,18EAD7475208E4B6" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="B2F9F95F5136C0AF" classroomids="CA61C1AC40D20CBA,268956F2308D2762" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="EDE49607282DF657" classroomids="CA61C1AC40D20CBA,268956F2308D2762" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="DC86A132678623EE" classroomids="18EAD7475208E4B6,268956F2308D2762" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="76BACF6EBA7B1454" classroomids="FB3CBBAB26C7B160,D351F555F1C80A53" period="7" weeks="1" terms="1" days="01000"/>
      <card lessonid="EBD68F44C2BEC1C3" classroomids="FB3CBBAB26C7B160,D351F555F1C80A53" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="A557257D3A5CB63A" classroomids="FB3CBBAB26C7B160,D351F555F1C80A53" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="D2AE7E43477E29BE" classroomids="FB3CBBAB26C7B160,D351F555F1C80A53" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="D2AE7E43477E29BE" classroomids="FB3CBBAB26C7B160,D351F555F1C80A53" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="123385ABEED5C030" classroomids="FB3CBBAB26C7B160,D351F555F1C80A53" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="123385ABEED5C030" classroomids="FB3CBBAB26C7B160,D351F555F1C80A53" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="CE736C69ADFE9E34" classroomids="FB3CBBAB26C7B160" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="DD5F32991C16865B" classroomids="FB3CBBAB26C7B160" period="7" weeks="1" terms="1" days="00010"/>
      <card lessonid="6FB30C8E23724020" classroomids="FB3CBBAB26C7B160" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="4BE8003BF9CDF646" classroomids="268956F2308D2762,CA61C1AC40D20CBA" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="E5C8109FE803338B" classroomids="268956F2308D2762,CA61C1AC40D20CBA" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="EAC8BDC0F2F0B37F" classroomids="268956F2308D2762,CA61C1AC40D20CBA" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="18289EFC5A294CD5" classroomids="CA61C1AC40D20CBA,18EAD7475208E4B6" period="7" weeks="1" terms="1" days="00010"/>
      <card lessonid="18289EFC5A294CD5" classroomids="CA61C1AC40D20CBA,18EAD7475208E4B6" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="070A11E2A27F7CDE" classroomids="FB3CBBAB26C7B160,CA61C1AC40D20CBA" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="F286483C92DB74DC" classroomids="CA61C1AC40D20CBA" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="F2D6A2072A54319B" classroomids="0AD16578DAE2BA2E" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="06E7588E854D1215" classroomids="0AD16578DAE2BA2E" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="B5989F4EECC120A4" classroomids="8BD618FEBDFE26BE" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="B5989F4EECC120A4" classroomids="8BD618FEBDFE26BE" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="B5989F4EECC120A4" classroomids="8BD618FEBDFE26BE" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="7F134B9F8EE48927" classroomids="46BDDBE1282FC72C,9ABE889ACC671510" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="7F134B9F8EE48927" classroomids="46BDDBE1282FC72C,9ABE889ACC671510" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="9496AED26573B67D" classroomids="9ABE889ACC671510,46BDDBE1282FC72C" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="9496AED26573B67D" classroomids="9ABE889ACC671510,46BDDBE1282FC72C" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="02391D0E659723AE" classroomids="46BDDBE1282FC72C,9ABE889ACC671510" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="02391D0E659723AE" classroomids="46BDDBE1282FC72C,9ABE889ACC671510" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="35469793AAEA46C0" classroomids="EAA43142566C6725" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="35469793AAEA46C0" classroomids="EAA43142566C6725" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="C48442E08BD219A3" classroomids="798246240B4F2214" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="C48442E08BD219A3" classroomids="798246240B4F2214" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="C48442E08BD219A3" classroomids="8BD618FEBDFE26BE" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="6025457085757B35" classroomids="46BDDBE1282FC72C,9ABE889ACC671510" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="6025457085757B35" classroomids="46BDDBE1282FC72C,9ABE889ACC671510" period="7" weeks="1" terms="1" days="00010"/>
      <card lessonid="C34E44FA670FF1BF" classroomids="DF7D82DE0699F5C3" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="C34E44FA670FF1BF" classroomids="B00A0D9D1FDDA638" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="C34E44FA670FF1BF" classroomids="F4B98DA5599C5C3D" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="DF404A9F1A45C2D1" classroomids="3A7F9885FF288845" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="DF404A9F1A45C2D1" classroomids="AA847AAA518C7ABB" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="0747807260E0472A" classroomids="AA847AAA518C7ABB" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="827EA6BBF7B3A762" classroomids="AA847AAA518C7ABB" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="175F77D308646711" classroomids="0AD16578DAE2BA2E" period="7" weeks="1" terms="1" days="00010"/>
      <card lessonid="175F77D308646711" classroomids="E50F6D6607A42A81" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="8AA7D412600C8044" classroomids="FC7C8CB90D2D3358" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="8AA7D412600C8044" classroomids="0AD16578DAE2BA2E" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="B7395D6A73F57608" classroomids="E50F6D6607A42A81" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="B7395D6A73F57608" classroomids="B90D0F5FFDBD26E0" period="2" weeks="1" terms="1" days="00010"/>
      <card lessonid="6087926C8DAF12EB" classroomids="06F34CEE6168234D" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="3337B845F35CEEDE" classroomids="06F34CEE6168234D" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="47111C82E8E08F01" classroomids="832D9682B058006B" period="4" weeks="1" terms="1" days="10000"/>
      <card lessonid="47111C82E8E08F01" classroomids="F0747FC29D78C2F1" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="E24A019FAC6D81DD" classroomids="BA090444FE16A1C8" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="E24A019FAC6D81DD" classroomids="F0747FC29D78C2F1" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="C8E624CDC55D9BC0" classroomids="F0747FC29D78C2F1" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="C8E624CDC55D9BC0" classroomids="832D9682B058006B" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="848739C6C429CFE4" classroomids="8F89F5430830BC62" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="FCB6323A4BEB537F" classroomids="8F89F5430830BC62" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="4C3EF592D2FC7949" classroomids="F4B98DA5599C5C3D" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="4C3EF592D2FC7949" classroomids="41E9B46601036D28" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="38D18A2C308BA628" classroomids="F4B98DA5599C5C3D" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="38D18A2C308BA628" classroomids="F4B98DA5599C5C3D" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="38D18A2C308BA628" classroomids="41E9B46601036D28" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="A38AA381D6877334" classroomids="BA090444FE16A1C8" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="A38AA381D6877334" classroomids="832D9682B058006B" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="17E8EB6CC6AD6462" classroomids="BA090444FE16A1C8" period="7" weeks="1" terms="1" days="01000"/>
      <card lessonid="17E8EB6CC6AD6462" classroomids="F4B98DA5599C5C3D" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="C21AC4E9BBDA682B" classroomids="B9306436676D64CD" period="1" weeks="1" terms="1" days="00001"/>
      <card lessonid="C21AC4E9BBDA682B" classroomids="F0747FC29D78C2F1" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="BD756B2B7CCCBD06" classroomids="DCD8F1730C82A54F" period="3" weeks="1" terms="1" days="00010"/>
      <card lessonid="F4A48C39C6CB7E6F" classroomids="B9306436676D64CD" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="F4A48C39C6CB7E6F" classroomids="F0747FC29D78C2F1" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="1A7BF04D5F2C9360" classroomids="7F36D08173325A0C" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="1A7BF04D5F2C9360" classroomids="DCD8F1730C82A54F" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="23DB1EBDB45D4B60" classroomids="38BD9ACE40F6D4A2" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="23DB1EBDB45D4B60" classroomids="4BD582F4072623D1" period="5" weeks="1" terms="1" days="00100"/>
      <card lessonid="23DB1EBDB45D4B60" classroomids="3B926682EC41D040" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="23DB1EBDB45D4B60" classroomids="4BD582F4072623D1" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="23DB1EBDB45D4B60" classroomids="3568B60E7EB7F25C" period="1" weeks="1" terms="1" days="10000"/>
      <card lessonid="09B98B066000BEF9" classroomids="CFB44A3CF3CFF304" period="7" weeks="1" terms="1" days="10000"/>
      <card lessonid="09B98B066000BEF9" classroomids="CFB44A3CF3CFF304" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="09B98B066000BEF9" classroomids="16BA52D465B5AA8A" period="4" weeks="1" terms="1" days="00100"/>
      <card lessonid="D655F58BDD6BA9DF" classroomids="7D1353BC7BE8B4BD" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="D655F58BDD6BA9DF" classroomids="798246240B4F2214" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="D655F58BDD6BA9DF" classroomids="D73C84710607B70E" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="8ADC3E8348B6B688" classroomids="8BD618FEBDFE26BE" period="5" weeks="1" terms="1" days="00010"/>
      <card lessonid="8ADC3E8348B6B688" classroomids="D73C84710607B70E" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="8ADC3E8348B6B688" classroomids="7D1353BC7BE8B4BD" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="C5DFAEABD69BE09E" classroomids="18EAD7475208E4B6,CA61C1AC40D20CBA" period="3" weeks="1" terms="1" days="00001"/>
      <card lessonid="C5DFAEABD69BE09E" classroomids="18EAD7475208E4B6,F899D2D14DEA0211" period="4" weeks="1" terms="1" days="01000"/>
      <card lessonid="60E823D19D6DEBF7" classroomids="F61647EE09423290" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="60E823D19D6DEBF7" classroomids="D73C84710607B70E" period="4" weeks="1" terms="1" days="00010"/>
      <card lessonid="60E823D19D6DEBF7" classroomids="7D1353BC7BE8B4BD" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="5DBE06B1DF8F1D41" classroomids="E6FE0D981A08684D" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="5DBE06B1DF8F1D41" classroomids="DF7D82DE0699F5C3" period="6" weeks="1" terms="1" days="00001"/>
      <card lessonid="5DBE06B1DF8F1D41" classroomids="B00A0D9D1FDDA638" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="77C3F0B8D23B0774" classroomids="16BA52D465B5AA8A" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="77C3F0B8D23B0774" classroomids="CFB44A3CF3CFF304" period="6" weeks="1" terms="1" days="10000"/>
      <card lessonid="CDEC37FABDD6F8D6" classroomids="3568B60E7EB7F25C" period="7" weeks="1" terms="1" days="00001"/>
      <card lessonid="CDEC37FABDD6F8D6" classroomids="CFB44A3CF3CFF304" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="CDEC37FABDD6F8D6" classroomids="16BA52D465B5AA8A" period="7" weeks="1" terms="1" days="00100"/>
      <card lessonid="511FAC10F3C977DA" classroomids="CA61C1AC40D20CBA,18EAD7475208E4B6" period="7" weeks="1" terms="1" days="01000"/>
      <card lessonid="511FAC10F3C977DA" classroomids="FB1B3BB135030306,18EAD7475208E4B6" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="F93EEE1103886643" classroomids="F899D2D14DEA0211,268956F2308D2762" period="1" weeks="1" terms="1" days="01000"/>
      <card lessonid="F93EEE1103886643" classroomids="CA61C1AC40D20CBA,268956F2308D2762" period="1" weeks="1" terms="1" days="00010"/>
      <card lessonid="8302D6A8D6F6085E" classroomids="BA090444FE16A1C8" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="8302D6A8D6F6085E" classroomids="B9306436676D64CD" period="6" weeks="1" terms="1" days="00100"/>
      <card lessonid="64295EF6CA8EC31C" classroomids="B9306436676D64CD" period="3" weeks="1" terms="1" days="10000"/>
      <card lessonid="64295EF6CA8EC31C" classroomids="BA090444FE16A1C8" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="47F041DB924C3252" classroomids="EA2F851F31637E65" period="5" weeks="1" terms="1" days="00001"/>
      <card lessonid="47F041DB924C3252" classroomids="3568B60E7EB7F25C" period="2" weeks="1" terms="1" days="00100"/>
      <card lessonid="47F041DB924C3252" classroomids="CFB44A3CF3CFF304" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="2DDD2D48CAC58730" classroomids="4BD582F4072623D1" period="1" weeks="1" terms="1" days="00100"/>
      <card lessonid="2DDD2D48CAC58730" classroomids="CFB44A3CF3CFF304" period="2" weeks="1" terms="1" days="10000"/>
      <card lessonid="2DDD2D48CAC58730" classroomids="8771F43E337915C4" period="4" weeks="1" terms="1" days="00001"/>
      <card lessonid="2DDD2D48CAC58730" classroomids="3B926682EC41D040" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="2DDD2D48CAC58730" classroomids="7C4BADB3FFD3A3AE" period="2" weeks="1" terms="1" days="01000"/>
      <card lessonid="F1873EFD779777BB" classroomids="8F89F5430830BC62" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="7A22F4CC78A16D3D" classroomids="BA090444FE16A1C8" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="BFCDCC092E041E5A" classroomids="7341FEEAD1621574" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="BFCDCC092E041E5A" classroomids="7341FEEAD1621574" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="CB8A6C259D0D484D" classroomids="F899D2D14DEA0211" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="CB8A6C259D0D484D" classroomids="CA61C1AC40D20CBA" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="29BB8DBDF21BAD54" classroomids="18EAD7475208E4B6" period="3" weeks="1" terms="1" days="01000"/>
      <card lessonid="29BB8DBDF21BAD54" classroomids="18EAD7475208E4B6" period="3" weeks="1" terms="1" days="00100"/>
      <card lessonid="073ACE1D7814FE06" classroomids="7341FEEAD1621574" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="959272341DA278ED" classroomids="CA61C1AC40D20CBA" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="B002B69D7A09E210" classroomids="18EAD7475208E4B6" period="2" weeks="1" terms="1" days="00001"/>
      <card lessonid="48BE154F47C33606" classroomids="38BD9ACE40F6D4A2" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="48BE154F47C33606" classroomids="E602EDDA0E66F7CB" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="99685371D40B6F95" classroomids="B00A0D9D1FDDA638" period="6" weeks="1" terms="1" days="01000"/>
      <card lessonid="99685371D40B6F95" classroomids="B00A0D9D1FDDA638" period="6" weeks="1" terms="1" days="00010"/>
      <card lessonid="8E7ABF78A88E2D2F" classroomids="DF7D82DE0699F5C3" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="8E7ABF78A88E2D2F" classroomids="DF7D82DE0699F5C3" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="2A39E980FE630F7C" classroomids="B00A0D9D1FDDA638" period="5" weeks="1" terms="1" days="10000"/>
      <card lessonid="2A39E980FE630F7C" classroomids="B00A0D9D1FDDA638" period="5" weeks="1" terms="1" days="01000"/>
      <card lessonid="CD34DD6F7C5A71F8" classroomids="8F89F5430830BC62" period="5" weeks="1" terms="1" days="00001"/>
   </cards>
</timetable>
`;
