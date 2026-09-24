export const xmlData = `
<timetable ascttversion="2021.6.2" importtype="database" options="export:idprefix:%CHRID,import:idprefix:%TEMPID,groupstype1,decimalseparatordot,lessonsincludeclasseswithoutstudents,handlestudentsafterlessons" defaultexport="1" displayname="aSc Timetables 2012 XML" displaycountries="">
   <periods options="canadd,export:silent" columns="period,name,short,starttime,endtime">
      <period name="1" short="1" period="1" starttime="8:30" endtime="9:15"/>
      <period name="2" short="2" period="2" starttime="9:25" endtime="10:10"/>
      <period name="3" short="3" period="3" starttime="10:35" endtime="11:20"/>
      <period name="4" short="4" period="4" starttime="11:50" endtime="12:35"/>
      <period name="5" short="5" period="5" starttime="12:45" endtime="13:30"/>
      <period name="6" short="6" period="6" starttime="13:40" endtime="14:25"/>
      <period name="7" short="7" period="7" starttime="14:35" endtime="15:20"/>
      <period name="8" short="8" period="8" starttime="15:30" endtime="16:15"/>
   </periods>
   <daysdefs options="canadd,export:silent" columns="id,days,name,short">
      <daysdef id="E792A25D52602065" name="У будь-який день" short="X" days="10000,01000,00100,00010,00001"/>
      <daysdef id="9979E93374226915" name="Кожен день" short="E" days="11111"/>
      <daysdef id="14035682CA3EBD13" name="Понеділок" short="Пн" days="10000"/>
      <daysdef id="8DF290AA3793BAB2" name="Вівторок" short="Вт" days="01000"/>
      <daysdef id="A6E7D0678E3FB4CB" name="Середа" short="Ср" days="00100"/>
      <daysdef id="15CB75F25FC52FC1" name="Четвер" short="Чт" days="00010"/>
      <daysdef id="586E28160400E924" name="П'ятниця" short="Пт" days="00001"/>
   </daysdefs>
   <weeksdefs options="canadd,export:silent" columns="id,weeks,name,short">
      <weeksdef id="17FDB60AD9868E3D" name="Будь-який тиждень" short="Будь-який" weeks="10,01"/>
      <weeksdef id="3B82B558D6DD1E00" name="Всі тижні" short="Всі" weeks="11"/>
      <weeksdef id="58A0B793A2DED569" name="Тиждень A" short="A" weeks="10"/>
      <weeksdef id="E7EFE184022161E4" name="Тиждень B" short="B" weeks="01"/>
   </weeksdefs>
   <termsdefs options="canadd,export:silent" columns="id,terms,name,short">
      <termsdef id="F4E1A0A4FD7E11B5" name="Весь рік" short="Рік" terms="1"/>
   </termsdefs>
   <subjects options="canadd,export:silent" columns="id,name,short,partner_id">
      <subject id="9AA64C54BA9BD285" name="-/Чит" short="-/Чит" partner_id=""/>
      <subject id="B5299934683B3E88" name="STEM" short="STEM" partner_id=""/>
      <subject id="C41A2A002E54689B" name="STEM-проєкт: від ідеї до втілення" short="STEM" partner_id=""/>
      <subject id="025B4429860A2CD7" name="Алгебра" short="Алгебра" partner_id=""/>
      <subject id="B0246DD73D3ADA83" name="Астрономія" short="Астрономія" partner_id=""/>
      <subject id="925682C41C673196" name="Біологія" short="Біологія" partner_id=""/>
      <subject id="1E620A3B6B0A1F76" name="Біологія та екологія" short="Біологія" partner_id=""/>
      <subject id="4D9B58A1CED04CB0" name="Всесвітня історія" short="Вс.іст." partner_id=""/>
      <subject id="44102B96C1A25E37" name="Вступ до історії України та громадянської освіти" short="Історія" partner_id=""/>
      <subject id="494CDE4AD7262EE4" name="Генетичний поліморфізм у популяції людини" short="Генет." partner_id=""/>
      <subject id="9E402EE47E0FA04C" name="Географія" short="Геогр." partner_id=""/>
      <subject id="E1939E3BDDF5FC26" name="Геометрія" short="Геом." partner_id=""/>
      <subject id="B25D15940FFE7094" name="Громадянська освіта" short="Гр.осв." partner_id=""/>
      <subject id="D8BE6BD318380267" name="Дизайн і технології" short="Диз.і.т." partner_id=""/>
      <subject id="B1196B9543B0BB02" name="Етика" short="Етика" partner_id=""/>
      <subject id="72281D4D1975B574" name="З іноземними мовами у світ подорожей та туризму" short="З ін.тур." partner_id=""/>
      <subject id="0DCC95B8192887C5" name="Зарубіжна  література" short="Зар.літ." partner_id=""/>
      <subject id="6870CDF12112A363" name="Захист України" short="Зах.Укр." partner_id=""/>
      <subject id="6C5083445942D1D8" name="Здоров'я, безпека та добробут" short="Здоров'я" partner_id=""/>
      <subject id="C3B8F9ABC4F6787F" name="Іноземна мова (англійська)" short="Іноз.м." partner_id=""/>
      <subject id="48EB922270048784" name="Іноземна мова: англійська мова" short="Іноз.м." partner_id=""/>
      <subject id="E95C190E785E8320" name="Інтегрований курс історії та громадянської освіти" short="Історія" partner_id=""/>
      <subject id="7B42EC5D4EB11798" name="Інтегрований курс літератур" short="Літерат." partner_id=""/>
      <subject id="3F12B472B0CDBD47" name="Інтегрований курс природничої освітньої галузі" short="Природ." partner_id=""/>
      <subject id="F3614AE8805C9C2C" name="Інтегрований курс соціальної і здоров'язбережувальної освітньої галузі" short="Здоров." partner_id=""/>
      <subject id="FEAB2708EF064C7D" name="Інтегрований мовно-літературний курс" short="Мова Літ." partner_id=""/>
      <subject id="AA871DA36C6FCCA9" name="Інформатика" short="Інформат." partner_id=""/>
      <subject id="2281D533BC49A2B5" name="Історія України" short="Іст.Укр." partner_id=""/>
      <subject id="A8E29013AE4B0F73" name="Історія України. Всесвітня історія" short="Історія" partner_id=""/>
      <subject id="96E4527D8C0765E2" name="Культура рівності та взаємоповаги в сучасному суспільстві" short="Культу.рівнКульт.р." partner_id=""/>
      <subject id="9BC6DA947B5DC75F" name="Математика" short="Математ." partner_id=""/>
      <subject id="6B5697728DE17955" name="Механіка: зрозумій фізику відчуттями" short="Механіка" partner_id=""/>
      <subject id="A7E618F47528D826" name="Мистецтво" short="Мист." partner_id=""/>
      <subject id="955F65ECBA6FDC3A" name="Мова і медіа" short="Мова і мед." partner_id=""/>
      <subject id="3BB49DE12566C880" name="Музичне мистецтво" short="Муз.мист." partner_id=""/>
      <subject id="DB03B450EA583584" name="Навчаємося жити в громаді" short="Навч.ж.гр." partner_id=""/>
      <subject id="16CFE5036324BB89" name="Образотворче мистецтво" short="Обр.мист." partner_id=""/>
      <subject id="96E4E6C0E60A5877" name="Основи пілотування БПЛА типу FPV" short="БПЛА" partner_id=""/>
      <subject id="3ECA95D18AD687D9" name="Основи фітнесу та сучасних фітнес-технологій (авторський)" short="Фітнес" partner_id=""/>
      <subject id="2B6BF58C60AB6C96" name="Особистісний розвиток і кар'єрне орієнтування" short="Ос.розв." partner_id=""/>
      <subject id="25AF640E348455DD" name="Пишемо есе" short="Есе" partner_id=""/>
      <subject id="8F504C6935D64F7E" name="Підприємництво і фінансова грамотність" short="Підпр. і ф." partner_id=""/>
      <subject id="3A9948CA79BA4397" name="Пізнаємо природу" short="Пізн.прир." partner_id=""/>
      <subject id="7461D1A9573CEAD9" name="Права та обов'язки учнівської молоді" short="Права" partner_id=""/>
      <subject id="CC802A76E70FC475" name="Професії" short="Професії" partner_id=""/>
      <subject id="0D8086FA9E571AA3" name="Риторика як мистецтво комунікації" short="Риторика" partner_id=""/>
      <subject id="3832E7BE08CB3935" name="Робототехніка" short="Роботот." partner_id=""/>
      <subject id="2BB78237DA804A1F" name="Розумні плати: крок у світ електроніки та програмування" short="Роз. пл." partner_id=""/>
      <subject id="ABB8DFA5EAE519E1" name="Технології" short="Технол." partner_id=""/>
      <subject id="DD5BF3F508F16516" name="Укр.м./Іноз." short="Укр.м./Іноз." partner_id=""/>
      <subject id="C271217D743BDE48" name="Укр.м./Іноз. -" short="Укр.м./Іноз. -" partner_id=""/>
      <subject id="62FCF6247E08D84E" name="Укр.м./Чит." short="Укр.м./Чит." partner_id=""/>
      <subject id="BB34CA31F02C6852" name="Українська література" short="Укр.літ." partner_id=""/>
      <subject id="4E68EE2BC3D7EC6B" name="Українська мова" short="Укр.м." partner_id=""/>
      <subject id="53EC7146D1EAC70B" name="Фізика" short="Фізика" partner_id=""/>
      <subject id="E12CC3D3248F0382" name="Фізична культура" short="Фіз.культ." partner_id=""/>
      <subject id="E3ACB1EF64BD7A99" name="Хімія" short="Хімія" partner_id=""/>
      <subject id="4EDD024D7AA4881E" name="Читання" short="Читання" partner_id=""/>
      <subject id="1653131531A18C1A" name="Я досліджую світ" short="ЯДС" partner_id=""/>
   </subjects>
   <teachers options="canadd,export:silent" columns="id,name,short,gender,color,email,mobile,partner_id,firstname,lastname">
      <teacher id="63659795843F5666" firstname="В.Г." lastname="Бабак" name="Бабак В.Г." short="Бабак В.Г." gender="M" color="#31C96A" email="" mobile="" partner_id=""/>
      <teacher id="A2EE783FB87E624F" firstname="А.М." lastname="Безкоровайна" name="Безкоровайна А.М." short="Безкоровайна А.М." gender="M" color="#96CEB4" email="" mobile="" partner_id=""/>
      <teacher id="AAA79985E1AAD4E1" firstname="О.І." lastname="Богдан" name="Богдан О.І." short="Богдан О.І." gender="M" color="#A8E6CF" email="" mobile="" partner_id=""/>
      <teacher id="1C271F70D48E6CD1" firstname="О.М." lastname="Брюква" name="Брюква О.М." short="Брюква О.М." gender="M" color="#90EE90" email="" mobile="" partner_id=""/>
      <teacher id="6EE94A6C299E0C01" firstname="П.В." lastname="Бугай" name="Бугай П.В." short="Бугай П.В." gender="M" color="#98FB98" email="" mobile="" partner_id=""/>
      <teacher id="24B5758E49450515" firstname="В.О." lastname="Герасименко" name="Герасименко В.О." short="Герасименко В.О." gender="M" color="#00FA9A" email="" mobile="" partner_id=""/>
      <teacher id="40EA642CCC5460FC" firstname="М.П." lastname="Герасименко" name="Герасименко М.П." short="Герасименко М.П." gender="M" color="#66CDAA" email="" mobile="" partner_id=""/>
      <teacher id="414A9F802207A404" firstname="С.П." lastname="Герасименко" name="Герасименко С.П." short="Герасименко С.П." gender="M" color="#20B2AA" email="" mobile="" partner_id=""/>
      <teacher id="A662BD78935A0C63" firstname="В.В." lastname="Гиря" name="Гиря В.В." short="Гиря В.В." gender="M" color="#7FFFD4" email="" mobile="" partner_id=""/>
      <teacher id="E2804F04EC95BB20" firstname="Т.М." lastname="Глушко" name="Глушко Т.М." short="Глушко Т.М." gender="M" color="#AFEEEE" email="" mobile="" partner_id=""/>
      <teacher id="360EA33F1D02D687" firstname="Л.В." lastname="Гнилуша" name="Гнилуша Л.В." short="Гнилуша Л.В." gender="M" color="#E0FFFF" email="" mobile="" partner_id=""/>
      <teacher id="EA2447653B875E79" firstname="О.О." lastname="Гнилуша" name="Гнилуша О.О." short="Гнилуша О.О." gender="M" color="#B0E0E6" email="" mobile="" partner_id=""/>
      <teacher id="D748D6ECFCB0665C" firstname="І.В." lastname="Гуща" name="Гуща І.В." short="Гуща І.В." gender="M" color="#ADD8E6" email="" mobile="" partner_id=""/>
      <teacher id="F87F57CAA6BD60A8" firstname="М.Г." lastname="Давиденко" name="Давиденко М.Г." short="Давиденко М.Г." gender="M" color="#87CEEB" email="" mobile="" partner_id=""/>
      <teacher id="AC2BB52AE3BDB55F" firstname="В.А." lastname="Долиненко" name="Долиненко В.А." short="Долиненко В.А." gender="M" color="#87CEFA" email="" mobile="" partner_id=""/>
      <teacher id="FB84DB7B5FC43046" firstname="О.Ю." lastname="Дуденко" name="Дуденко О.Ю." short="Дуденко О.Ю." gender="M" color="#31A8C9" email="" mobile="" partner_id=""/>
      <teacher id="DDA740A65DB8FB81" firstname="П.В." lastname="Залозний" name="Залозний П.В." short="Залозний П.В." gender="M" color="#4ECDC4" email="" mobile="" partner_id=""/>
      <teacher id="AE5874DD84BDF66D" firstname="В.Ю." lastname="Звєрєв" name="Звєрєв В.Ю." short="Звєрєв В.Ю." gender="M" color="#45B7D1" email="" mobile="" partner_id=""/>
      <teacher id="59525CA8A3FAF2AC" firstname="Г.О." lastname="Зеленська" name="Зеленська Г.О." short="Зеленська Г.О." gender="M" color="#6495ED" email="" mobile="" partner_id=""/>
      <teacher id="15F007ED5EC12D3E" firstname="Н.В." lastname="Зеленська" name="Зеленська Н.В." short="Зеленська Н.В." gender="M" color="#0080C0" email="" mobile="" partner_id=""/>
      <teacher id="B2C2EF22E7FD56EF" firstname="О.С." lastname="Зеленський" name="Зеленський О.С." short="Зеленський О.С." gender="M" color="#9370DB" email="" mobile="" partner_id=""/>
      <teacher id="EC5D46CCD4322C2D" firstname="О.М." lastname="Івахненко" name="Івахненко О.М." short="Івахненко О.М." gender="M" color="#6AC931" email="" mobile="" partner_id=""/>
      <teacher id="0763DDDAB1631F37" firstname="О.В." lastname="Йовенко" name="Йовенко О.В." short="Йовенко О.В." gender="M" color="#8A2BE2" email="" mobile="" partner_id=""/>
      <teacher id="A833DCCDA62D2A79" firstname="Ю.М." lastname="Казимір" name="Казимір Ю.М." short="Казимір Ю.М." gender="M" color="#9966CC" email="" mobile="" partner_id=""/>
      <teacher id="85FD7C042EF4D83D" firstname="І.М." lastname="Корж" name="Корж І.М." short="Корж І.М." gender="M" color="#DA70D6" email="" mobile="" partner_id=""/>
      <teacher id="3C64C064FABEF4F7" firstname="Л.В." lastname="Корявець" name="Корявець Л.В." short="Корявець Л.В." gender="M" color="#FF69B4" email="" mobile="" partner_id=""/>
      <teacher id="522C2F1FFA1907AD" firstname="Т.М." lastname="Коса" name="Коса Т.М." short="Коса Т.М." gender="M" color="#FF1493" email="" mobile="" partner_id=""/>
      <teacher id="337362269E80F11F" firstname="Ю.М." lastname="Лапко" name="Лапко Ю.М." short="Лапко Ю.М." gender="M" color="#DC143C" email="" mobile="" partner_id=""/>
      <teacher id="09774D57C64A6BEA" firstname="І.М." lastname="Літушко" name="Літушко І.М." short="Літушко І.М." gender="M" color="#CD5C5C" email="" mobile="" partner_id=""/>
      <teacher id="5767F763D9D38102" firstname="О.М." lastname="Лопата" name="Лопата О.М." short="Лопата О.М." gender="M" color="#B22222" email="" mobile="" partner_id=""/>
      <teacher id="8BB6C4C1EBE27893" firstname="В.Г." lastname="Масльонка" name="Масльонка В.Г." short="Масльонка В.Г." gender="M" color="#F08080" email="" mobile="" partner_id=""/>
      <teacher id="D6F407A0107C984B" firstname="В.В." lastname="Мацвійко" name="Мацвійко В.В." short="Мацвійко В.В." gender="M" color="#FF6B9D" email="" mobile="" partner_id=""/>
      <teacher id="61CFC65D5282005C" firstname="Л.В." lastname="Мірошник" name="Мірошник Л.В." short="Мірошник Л.В." gender="M" color="#FFB6C1" email="" mobile="" partner_id=""/>
      <teacher id="3335FDC945DFCC35" firstname="С.М." lastname="Мурза" name="Мурза С.М." short="Мурза С.М." gender="M" color="#F0A1A8" email="" mobile="" partner_id=""/>
      <teacher id="CF998705E4252E28" firstname="Л.М." lastname="Науменко" name="Науменко Л.М." short="Науменко Л.М." gender="M" color="#FFC0CB" email="" mobile="" partner_id=""/>
      <teacher id="44BE3BE79ACEFB9B" firstname="Ю.О." lastname="Ніколаєнко" name="Ніколаєнко Ю.О." short="Ніколаєнко Ю.О." gender="M" color="#FFCCCB" email="" mobile="" partner_id=""/>
      <teacher id="A5C432BA36FB3A47" firstname="О.П." lastname="Передерій" name="Передерій О.П." short="Передерій О.П." gender="M" color="#F5DEB3" email="" mobile="" partner_id=""/>
      <teacher id="D43AD73AA56599D7" firstname="Л.В." lastname="Пилипенко" name="Пилипенко Л.В." short="Пилипенко Л.В." gender="M" color="#DDA0DD" email="" mobile="" partner_id=""/>
      <teacher id="E686B9BCB6523F54" firstname="О.П." lastname="Пилипенко" name="Пилипенко О.П." short="Пилипенко О.П." gender="M" color="#EE82EE" email="" mobile="" partner_id=""/>
      <teacher id="31B3A1B8D1E275A3" firstname="С.В." lastname="Пильник" name="Пильник С.В." short="Пильник С.В." gender="M" color="#D8BFD8" email="" mobile="" partner_id=""/>
      <teacher id="9F2D3DECC7DDA3BD" firstname="І.В." lastname="Плеса" name="Плеса І.В." short="Плеса І.В." gender="M" color="#FFDAB9" email="" mobile="" partner_id=""/>
      <teacher id="887F7E8DF512A7AC" firstname="А.І." lastname="Савченко" name="Савченко А.І." short="Савченко А.І." gender="M" color="#FFAB91" email="" mobile="" partner_id=""/>
      <teacher id="8093F8C7C028B7E9" firstname="Л.В." lastname="Савчук" name="Савчук Л.В." short="Савчук Л.В." gender="M" color="#FFCC80" email="" mobile="" partner_id=""/>
      <teacher id="D3C1B9B25314573A" firstname="А.В." lastname="Сало" name="Сало А.В." short="Сало А.В." gender="M" color="#FFD54F" email="" mobile="" partner_id=""/>
      <teacher id="8B3BC1D7C44CB024" firstname="Н.В." lastname="Саповець" name="Саповець Н.В." short="Саповець Н.В." gender="M" color="#FFF176" email="" mobile="" partner_id=""/>
      <teacher id="8709C5EA5C52DF4E" firstname="М.М." lastname="Сапсай" name="Сапсай М.М." short="Сапсай М.М." gender="M" color="#DCEDC8" email="" mobile="" partner_id=""/>
      <teacher id="38987466DEE01D90" firstname="Т.Л." lastname="Солодуненко" name="Солодуненко Т.Л." short="Солодуненко Т.Л." gender="M" color="#C8E6C9" email="" mobile="" partner_id=""/>
      <teacher id="E15EE552D7957E58" firstname="Т.М." lastname="Сом" name="Сом Т.М." short="Сом Т.М." gender="M" color="#FFEAA7" email="" mobile="" partner_id=""/>
      <teacher id="39B107278060F948" firstname="О.М." lastname="Тарасенко" name="Тарасенко О.М." short="Тарасенко О.М." gender="M" color="#FFB347" email="" mobile="" partner_id=""/>
      <teacher id="1E0727688BE68056" firstname="А.С." lastname="Титаренко" name="Титаренко А.С." short="Титаренко А.С." gender="M" color="#FFDD44" email="" mobile="" partner_id=""/>
      <teacher id="66F67BC8F80A7C09" firstname="Л.Ф." lastname="Ткаченко" name="Ткаченко Л.Ф." short="Ткаченко Л.Ф." gender="M" color="#FFE55C" email="" mobile="" partner_id=""/>
      <teacher id="274AC9EE12D0C679" firstname="О.А." lastname="Халімон" name="Халімон О.А." short="Халімон О.А." gender="M" color="#FFEB3B" email="" mobile="" partner_id=""/>
      <teacher id="9235D2B470B4CD1A" firstname="А.В." lastname="Хорошок" name="Хорошок А.В." short="Хорошок А.В." gender="M" color="#FFF59D" email="" mobile="" partner_id=""/>
      <teacher id="D0955D86CB39A473" firstname="М.О." lastname="Чава" name="Чава М.О." short="Чава М.О." gender="M" color="#FFECB3" email="" mobile="" partner_id=""/>
      <teacher id="4DE3A36B22930DAB" firstname="С.А." lastname="Чава" name="Чава С.А." short="Чава С.А." gender="M" color="#FFE0B2" email="" mobile="" partner_id=""/>
      <teacher id="622A637A3B3EB137" firstname="С.Б." lastname="Чала" name="Чала С.Б." short="Чала С.Б." gender="M" color="#FFCCBC" email="" mobile="" partner_id=""/>
      <teacher id="944A7F4FA53038A9" firstname="В.М." lastname="Чугуй" name="Чугуй В.М." short="Чугуй В.М." gender="F" color="#BA55D3" email="" mobile="" partner_id=""/>
      <teacher id="FBA17F705F735088" firstname="Л.І." lastname="Шемендюк" name="Шемендюк Л.І." short="Шемендюк Л.І." gender="M" color="#D7CCC8" email="" mobile="" partner_id=""/>
   </teachers>
   <buildings options="canadd,export:silent" columns="id,name,partner_id"/>
   <classrooms options="canadd,export:silent" columns="id,name,short,capacity,buildingid,partner_id">
      <classroom id="37E5FB48DF6CAE46" name="2" short="2" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="C43EBCA729F832C2" name="4" short="4" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="2BA54C5FE0B7394F" name="2_" short="2_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="FBADE5F971FB9E91" name="5" short="5" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="CFF7D3B7BA73393E" name="5_" short="5_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="936A10A6044D8EF1" name="6" short="6" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="00E9CF889BCE8DE4" name="8" short="8" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="B77506AEF2C47046" name="10" short="10" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="7EEA95B50C265F8F" name="10_" short="10_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="834B8B86280BE28C" name="12" short="12" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="F08C42F2BA7CD261" name="12_" short="12_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="A02B4A047DFD3E55" name="101" short="101" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="29FF747B4241426D" name="102" short="102" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="352C0BD6CE8FC471" name="103" short="103" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="53DEAB4033726B5B" name="104" short="104" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="056EB371A5A5D878" name="105" short="105" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="061761F57F343583" name="106" short="106" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="47B05167ECC4623A" name="107" short="107" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="3B11ABA63409B889" name="108" short="108" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="77886EDA9CEBBB1B" name="109" short="109" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="BF33F86DEA1E2A15" name="201" short="201" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="18B1D7F8D5FE0B6A" name="202" short="202" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="CC208ABF8B76AE7D" name="204" short="204" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="1244DDCC9DA6AF1C" name="205" short="205" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="303F56E70FD472F3" name="206" short="206" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="BEF30E4E5E3FAD57" name="207" short="207" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="05D782BE80078A44" name="208" short="208" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="CDDDF785EAD5751A" name="209" short="209" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="CA99F1B4146D0833" name="210" short="210" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="A34C5EB2922E231A" name="211" short="211" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="9BB8E55190DDFBD2" name="213" short="213" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="84FD20D9B1F929D9" name="301" short="301" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="B9B23008B9FCF973" name="304" short="304" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="CB369C06D2BF7127" name="305" short="305" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="2044C51FB053D2A8" name="306" short="306" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="A7088E6D2B40FEE7" name="307" short="307" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="B0DBA147EC2F2D0B" name="309" short="309" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="54900D815AC9FAEF" name="310" short="310" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="034E0A2787110558" name="313" short="313" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="6496F938411058CC" name="314" short="314" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="081AEAE7A605A14B" name="315" short="315" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="3D0634BB0DD77C96" name="Майст." short="Майст." capacity="*" buildingid="*" partner_id=""/>
      <classroom id="F1D581A87F77219F" name="Медіатека" short="Медіа" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="AD3ECE624CC1384B" name="СпЗ_1" short="СпЗ_1" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="54F99E7E624F5A0D" name="СпЗ_2" short="СпЗ_2" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="420EE7E5B29DC772" name="СпЗ_поч" short="СпЗ_поч" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="DF7822A96933292D" name="101_" short="101_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="2FD45013DE2A5063" name="102_" short="102_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="A15E20D77C992831" name="103_" short="103_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="2467AAB6EC1B0043" name="104_" short="104_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="A0402F8BECD7C881" name="106_" short="106_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="B0D423502BE8F8D6" name="108_" short="108_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="0E8ABC0D2CCA9638" name="201_" short="201_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="AF6ED248539EC883" name="202_" short="202_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="33E6B859AD8D1EE1" name="204_" short="204_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="E2CDDD43564F4404" name="205_" short="205_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="F9C94211E943F513" name="206_" short="206_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="55AC089DDBC06A70" name="207_" short="207_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="F9BFBEA3EAA755E7" name="208_" short="208_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="EF8128AF4A254EF1" name="209_" short="209_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="BCE497B2E99BB2D0" name="210_" short="210_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="7762136B7D1CC995" name="211_" short="211_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="1A1977AE9D56AB2E" name="213_" short="213_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="BAF17CED8B6302B3" name="301_" short="301_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="BBE8D9B17AB2E7C7" name="304_" short="304_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="8DD1FBCCC276E6CB" name="305_" short="305_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="3E5CAB46B5B8E0ED" name="306_" short="306_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="8562B3E01B3A8F21" name="307_" short="307_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="EAC763AAC87CA3EE" name="309_" short="309_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="F174E9F85E36E906" name="310_" short="310_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="A4DECA4BD9259ABD" name="313_" short="313_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="E677B9BE46B5C774" name="314_" short="314_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="425DFC212452C41A" name="315_" short="315_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="F2A8CBB3E984A461" name="Майст._" short="Майст._" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="C5C48EE29DB9C760" name="Медіатека_" short="Медіа_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="121C7291CF88C830" name="СпЗ_1_" short="СпЗ_1_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="C813B709A5BCCB18" name="СпЗ_2_" short="СпЗ_2_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="6F3B649BAE93C7ED" name="СпЗ_поч_" short="СпЗ_поч_" capacity="*" buildingid="*" partner_id=""/>
      <classroom id="61E630D003A7DE74" name="Тренаж_" short="Тренаж_" capacity="*" buildingid="*" partner_id=""/>
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
      <class id="0C7AB6AB89F65714" name="1-А" short="1-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="F6261B0BDDF509CA" name="1-Б" short="1-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="5306C07A080147AB" name="1-В" short="1-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="D3677800D88A8D9F" name="2-А" short="2-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="DD368ADB9958BBC4" name="2-Б" short="2-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="35E15A2F3CCB11D2" name="2-В" short="2-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="DFC0B23B771EFFE6" name="3-А" short="3-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="225323AC6FB62EE6" name="3-Б" short="3-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="01567BCC4E3D94E4" name="3-В" short="3-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="73303F2096460B3F" name="4-А" short="4-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="06AFD244066A269E" name="4-Б" short="4-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="7EA977BFD3FECDF8" name="4-В" short="4-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="A625DA1900F2313E" name="5-А" short="5-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="9A09F02B6C945E65" name="5-Б" short="5-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="0CE26546E99F304D" name="5-В" short="5-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="5E1E4F68D45303BA" name="6-А" short="6-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="9A988E7428558D94" name="6-Б" short="6-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="A0F07B781A35EDDC" name="6-В" short="6-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="F78C9FB5DEF1E0A6" name="7-А" short="7-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="D69373ACA899CDEC" name="7-Б" short="7-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="4869BB2A0581BD00" name="7-В" short="7-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="3E1EC055F1213DF2" name="7-Г" short="7-Г" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="53E66FA02E5B0700" name="8-А" short="8-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="165CED8E456D1616" name="8-Б" short="8-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="33D72B1C67021087" name="8-В" short="8-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="AC7FC08FD4E44C39" name="8-Г" short="8-Г" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="B82450AA95C3D590" name="9-А" short="9-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="9C1891180235DBE0" name="9-Б" short="9-Б" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="7C5046ED08AB7134" name="9-В" short="9-В" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="1D38E151449F1C37" name="9-Г" short="9-Г" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="985049604CEF9C0D" name="10-МІ" short="10-М" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="D52EE29D8E4AE732" name="10-ХБ" short="10-Х" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="20C08674C725FDEC" name="10-Іст" short="10-І" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="D6633F54B5C2AD5E" name="10-Укр" short="10-У" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="FE9009F3C44EA134" name="11-А" short="11-А" teacherid="" classroomids="" grade="" partner_id=""/>
      <class id="B66DCEBE75D1300B" name="11-Б" short="11-Б" teacherid="" classroomids="" grade="" partner_id=""/>
   </classes>
   <groups options="canadd,export:silent" columns="id,classid,name,entireclass,divisiontag,studentcount,studentids">
      <group id="8F33371218BE7F05" name="Весь клас" classid="0C7AB6AB89F65714" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="98D0841BBF84FD12" name="1 група" classid="0C7AB6AB89F65714" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="218D345B673CEA42" name="2 група" classid="0C7AB6AB89F65714" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="2F546C17F9DAE60A" name="Хлопці" classid="0C7AB6AB89F65714" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="1935C0A9ACA8C14F" name="Дівчата" classid="0C7AB6AB89F65714" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="B1CCA6FB85B916DD" name="Весь клас" classid="F6261B0BDDF509CA" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="89A72F1003576B8D" name="1 група" classid="F6261B0BDDF509CA" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="76F056E8A6081CB6" name="2 група" classid="F6261B0BDDF509CA" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="5C43C6194E49FAD4" name="Хлопці" classid="F6261B0BDDF509CA" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="366FFCB4E19B0DB2" name="Дівчата" classid="F6261B0BDDF509CA" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="6A98DDD8F03303F6" name="Весь клас" classid="5306C07A080147AB" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="4DD993C057F10158" name="1 група" classid="5306C07A080147AB" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="79BDB9CCD12B3DA6" name="2 група" classid="5306C07A080147AB" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="70C8C3300920CAC9" name="Хлопці" classid="5306C07A080147AB" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="72135E98A7DF8B71" name="Дівчата" classid="5306C07A080147AB" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="925401D77A17482D" name="Весь клас" classid="D3677800D88A8D9F" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="413167F328224482" name="1 група" classid="D3677800D88A8D9F" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="C67BDF5243F8AD75" name="2 група" classid="D3677800D88A8D9F" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="617B8F94B3DE37B4" name="Хлопці" classid="D3677800D88A8D9F" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="47A458A258C656CC" name="Дівчата" classid="D3677800D88A8D9F" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="39CBD9D8DB902A49" name="Весь клас" classid="DD368ADB9958BBC4" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="EBAAB9FD799AA1C0" name="1 група" classid="DD368ADB9958BBC4" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="ECF5556618596268" name="2 група" classid="DD368ADB9958BBC4" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="3F91498AFF7B0030" name="Хлопці" classid="DD368ADB9958BBC4" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="003562AFCC291D4F" name="Дівчата" classid="DD368ADB9958BBC4" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="924A7E697B7AA901" name="Весь клас" classid="35E15A2F3CCB11D2" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="B12893E3A67A2145" name="1 група" classid="35E15A2F3CCB11D2" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="1B3D03A862F7C30B" name="2 група" classid="35E15A2F3CCB11D2" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="DE600F8700B24630" name="Хлопці" classid="35E15A2F3CCB11D2" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="95B46F841A66105F" name="Дівчата" classid="35E15A2F3CCB11D2" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="157A948661FE0047" name="Весь клас" classid="DFC0B23B771EFFE6" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="48454B9EBD163175" name="1 група" classid="DFC0B23B771EFFE6" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="056EEA0CE288DE48" name="2 група" classid="DFC0B23B771EFFE6" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="1F11E437D51CA131" name="Хлопці" classid="DFC0B23B771EFFE6" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="A0F190A22AEF25AF" name="Дівчата" classid="DFC0B23B771EFFE6" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="0DBF7BB5338A8CE4" name="Весь клас" classid="225323AC6FB62EE6" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="0E6FD506F33D9B1D" name="1 група" classid="225323AC6FB62EE6" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="D34ACC987084917E" name="2 група" classid="225323AC6FB62EE6" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="B7093E24AA7221B8" name="Хлопці" classid="225323AC6FB62EE6" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="B7639C26A14B3599" name="Дівчата" classid="225323AC6FB62EE6" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="938DC3042390B6D8" name="Весь клас" classid="01567BCC4E3D94E4" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="D11EF1339D28E1EB" name="1 група" classid="01567BCC4E3D94E4" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="1AE202223F2D2D5F" name="2 група" classid="01567BCC4E3D94E4" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="286BBBC34E19B35C" name="Хлопці" classid="01567BCC4E3D94E4" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="1EAED14EBC82F836" name="Дівчата" classid="01567BCC4E3D94E4" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="D004020F777340B2" name="Весь клас" classid="73303F2096460B3F" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="6ADFC860722FBDA5" name="1 група" classid="73303F2096460B3F" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="62F67C50506B0DB5" name="2 група" classid="73303F2096460B3F" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="FEBBFE78CC3AAD06" name="Хлопці" classid="73303F2096460B3F" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="A388B0CB6B85D362" name="Дівчата" classid="73303F2096460B3F" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="403BF385E429B514" name="Весь клас" classid="06AFD244066A269E" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="B48E146C5E7F9FF6" name="1 група" classid="06AFD244066A269E" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="D45875C5DF1326A1" name="2 група" classid="06AFD244066A269E" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="EA518B64CF457EC6" name="Хлопці" classid="06AFD244066A269E" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="E7B91B60744A8ACF" name="Дівчата" classid="06AFD244066A269E" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="58D92A325270681D" name="Весь клас" classid="7EA977BFD3FECDF8" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="CD9E63204E2A6331" name="1 група" classid="7EA977BFD3FECDF8" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="0B4833850C8771B9" name="2 група" classid="7EA977BFD3FECDF8" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="8501601D17E3FD3F" name="Хлопці" classid="7EA977BFD3FECDF8" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="1734A754ED171F33" name="Дівчата" classid="7EA977BFD3FECDF8" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="9349936B0370D4EC" name="Весь клас" classid="A625DA1900F2313E" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="3A6AEDF2CD795C64" name="1 група" classid="A625DA1900F2313E" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="D070F84AAA8C8524" name="2 група" classid="A625DA1900F2313E" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="F815ED086F3B50BA" name="Хлопці" classid="A625DA1900F2313E" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="9CE61B31F9A6FE60" name="Дівчата" classid="A625DA1900F2313E" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="0F8A87FC7B70C65A" name="Весь клас" classid="9A09F02B6C945E65" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="7D900769FEDD536E" name="1 група" classid="9A09F02B6C945E65" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="2264B9BC9E6879CB" name="2 група" classid="9A09F02B6C945E65" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="15AAC27A2000EF10" name="Хлопці" classid="9A09F02B6C945E65" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="A4D060D12C22EAF2" name="Дівчата" classid="9A09F02B6C945E65" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="058B6A2588A3FA9E" name="Весь клас" classid="0CE26546E99F304D" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="D0A83DF90C3F1E79" name="1 група" classid="0CE26546E99F304D" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="C9503A858144F75B" name="2 група" classid="0CE26546E99F304D" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="F8BBDCDB6596E07D" name="Хлопці" classid="0CE26546E99F304D" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="E037C642FCC8AF03" name="Дівчата" classid="0CE26546E99F304D" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="F42859C0B1862C7A" name="Весь клас" classid="5E1E4F68D45303BA" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="8F4E27A6F83D5FCD" name="1 група" classid="5E1E4F68D45303BA" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="66A8D6E05AA188AF" name="2 група" classid="5E1E4F68D45303BA" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="35C348D722A05803" name="Хлопці" classid="5E1E4F68D45303BA" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="63CB26DE8DD8B144" name="Дівчата" classid="5E1E4F68D45303BA" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="30A298CC0588B655" name="Весь клас" classid="9A988E7428558D94" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="D66BAFBF5683E64D" name="1 група" classid="9A988E7428558D94" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="C12579BE28470484" name="2 група" classid="9A988E7428558D94" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="F94791A92A7C461D" name="Хлопці" classid="9A988E7428558D94" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="2F00EFCB005BCDC7" name="Дівчата" classid="9A988E7428558D94" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="9D03C7226A3F23E9" name="Весь клас" classid="A0F07B781A35EDDC" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="258DA38BF59BFE37" name="1 група" classid="A0F07B781A35EDDC" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="30A4F2E0DBC09180" name="2 група" classid="A0F07B781A35EDDC" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="651DAA68F093E10F" name="Хлопці" classid="A0F07B781A35EDDC" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="A1EB2818F405467E" name="Дівчата" classid="A0F07B781A35EDDC" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="7EB37E60FD58592A" name="Весь клас" classid="F78C9FB5DEF1E0A6" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="82D657C295DF254A" name="1 група" classid="F78C9FB5DEF1E0A6" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="6719D6D4B1A0072E" name="2 група" classid="F78C9FB5DEF1E0A6" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="95BD4FEBBAB47419" name="Хлопці" classid="F78C9FB5DEF1E0A6" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="27F11B4CA4E70EC4" name="Дівчата" classid="F78C9FB5DEF1E0A6" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="BCBC3CBA4D81ED05" name="Весь клас" classid="D69373ACA899CDEC" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="80A9909319306C04" name="1 група" classid="D69373ACA899CDEC" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="E8ECEB9BB208F633" name="2 група" classid="D69373ACA899CDEC" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="9E23CE213AC56675" name="Хлопці" classid="D69373ACA899CDEC" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="305715590FF8886A" name="Дівчата" classid="D69373ACA899CDEC" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="967B5A4739966D8E" name="Весь клас" classid="4869BB2A0581BD00" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="FCE1435F43ADF781" name="1 група" classid="4869BB2A0581BD00" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="40D81E2F043251C1" name="2 група" classid="4869BB2A0581BD00" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="D8DE5034C5F711F7" name="Хлопці" classid="4869BB2A0581BD00" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="B9E472D8BC261CE2" name="Дівчата" classid="4869BB2A0581BD00" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="C5E856520D8E858B" name="Весь клас" classid="3E1EC055F1213DF2" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="B8F857828EFD9BBE" name="1 група" classid="3E1EC055F1213DF2" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="F28478C46CBD2A34" name="2 група" classid="3E1EC055F1213DF2" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="BC7D2A68495EB2A4" name="Хлопці" classid="3E1EC055F1213DF2" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="F2370CB3343DB305" name="Дівчата" classid="3E1EC055F1213DF2" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="9439B33F50FCCEF4" name="Весь клас" classid="53E66FA02E5B0700" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="85DC9BA17C8F30A7" name="1 група" classid="53E66FA02E5B0700" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="8CC614DBDC59DC1F" name="2 група" classid="53E66FA02E5B0700" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="AC264CA262872038" name="Хлопці" classid="53E66FA02E5B0700" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="C1D565855A8AD7DD" name="Дівчата" classid="53E66FA02E5B0700" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="99C6951D82472BDD" name="Весь клас" classid="165CED8E456D1616" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="DCC1A096AE75A95F" name="1 група" classid="165CED8E456D1616" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="CE55569DE316BFA3" name="2 група" classid="165CED8E456D1616" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="5DF6BB5F979A2939" name="Хлопці" classid="165CED8E456D1616" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="7F4B17DDFF35412D" name="Дівчата" classid="165CED8E456D1616" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="0189D8C4B5C74FFA" name="Весь клас" classid="33D72B1C67021087" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="877DC8CEA323EFC3" name="1 група" classid="33D72B1C67021087" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="0832BB137CFFE0E0" name="2 група" classid="33D72B1C67021087" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="C933798556DB5AB8" name="Хлопці" classid="33D72B1C67021087" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="A368DC7AD19F2DA1" name="Дівчата" classid="33D72B1C67021087" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="48A1FD4D56AC1A20" name="Весь клас" classid="AC7FC08FD4E44C39" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="D3E70750DF1DE302" name="1 група" classid="AC7FC08FD4E44C39" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="1190D7B59D7AF18A" name="2 група" classid="AC7FC08FD4E44C39" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="8A782A8BD127C815" name="Хлопці" classid="AC7FC08FD4E44C39" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="E74FED7AB274FD88" name="Дівчата" classid="AC7FC08FD4E44C39" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="31273EABEFF91F8D" name="Весь клас" classid="B82450AA95C3D590" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="8131C2F66BE350DE" name="1 група" classid="B82450AA95C3D590" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="FA353520DB181393" name="2 група" classid="B82450AA95C3D590" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="72CDB34C1710283C" name="Хлопці" classid="B82450AA95C3D590" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="83C96CAAD52BB14A" name="Дівчата" classid="B82450AA95C3D590" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="1ACBF82006834D1E" name="Весь клас" classid="9C1891180235DBE0" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="6C5889696BBC1C51" name="1 група" classid="9C1891180235DBE0" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="A20DE78B417BA3FA" name="2 група" classid="9C1891180235DBE0" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="B0C66B416D923338" name="Хлопці" classid="9C1891180235DBE0" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="36366CCC624DDEC3" name="Дівчата" classid="9C1891180235DBE0" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="0B4631B6B84CBC2F" name="Весь клас" classid="7C5046ED08AB7134" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="F559D745484D8CB8" name="1 група" classid="7C5046ED08AB7134" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="BFCEA4565C817C7A" name="2 група" classid="7C5046ED08AB7134" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="B9C2281619991FB6" name="Хлопці" classid="7C5046ED08AB7134" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="9E05A728355A019B" name="Дівчата" classid="7C5046ED08AB7134" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="7D8BCA16F4FA1F87" name="Весь клас" classid="1D38E151449F1C37" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="B3E303D509640CF1" name="1 група" classid="1D38E151449F1C37" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="1D357C11166FD5DB" name="2 група" classid="1D38E151449F1C37" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="66E553BCEEB5D5BC" name="Хлопці" classid="1D38E151449F1C37" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="F91C9AF4C408F7B0" name="Дівчата" classid="1D38E151449F1C37" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="8C2E2340B252203C" name="Весь клас" classid="985049604CEF9C0D" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="75ABFFE28C405423" name="1 група" classid="985049604CEF9C0D" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="3B6241D69A74022E" name="2 група" classid="985049604CEF9C0D" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="36E1FB3E9F79F9B9" name="Хлопці" classid="985049604CEF9C0D" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="3118771910A6DC9B" name="Дівчата" classid="985049604CEF9C0D" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="89D17574EAB80AD7" name="Весь клас" classid="D52EE29D8E4AE732" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="2CA2283B9CC6B45B" name="1 група" classid="D52EE29D8E4AE732" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="0E6A88B0B810B798" name="2 група" classid="D52EE29D8E4AE732" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="814FC00680B87696" name="Хлопці" classid="D52EE29D8E4AE732" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="5B7BF6A214098974" name="Дівчата" classid="D52EE29D8E4AE732" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="C85D7C86EBAABDEE" name="Весь клас" classid="20C08674C725FDEC" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="C78318C93C14535E" name="1 група" classid="20C08674C725FDEC" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="A0BE8DD5128040BC" name="2 група" classid="20C08674C725FDEC" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="05B5A150FD3767BF" name="Хлопці" classid="20C08674C725FDEC" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="D36C4EF94C1CA732" name="Дівчата" classid="20C08674C725FDEC" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="9856CA8C9AD1EA70" name="Весь клас" classid="D6633F54B5C2AD5E" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="9569576D1236AD3F" name="1 група" classid="D6633F54B5C2AD5E" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="A9D9683BD59484EA" name="2 група" classid="D6633F54B5C2AD5E" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="9C603245CDEC4B84" name="Хлопці" classid="D6633F54B5C2AD5E" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="9DAA498557AB9373" name="Дівчата" classid="D6633F54B5C2AD5E" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="344968159A2E28DE" name="Весь клас" classid="FE9009F3C44EA134" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="1FCAAE812518394C" name="1 група" classid="FE9009F3C44EA134" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="9C13DBA02B7687E4" name="2 група" classid="FE9009F3C44EA134" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="2DDEFC3908A55A39" name="Хлопці" classid="FE9009F3C44EA134" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="E3EB4BCFC37452FE" name="Дівчата" classid="FE9009F3C44EA134" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="A721DD311738FAC6" name="Весь клас" classid="B66DCEBE75D1300B" studentids="" entireclass="1" divisiontag="0" studentcount=""/>
      <group id="4639B9E9D5E2B7FC" name="1 група" classid="B66DCEBE75D1300B" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="7FC557029EA2CDBA" name="2 група" classid="B66DCEBE75D1300B" studentids="" entireclass="0" divisiontag="1" studentcount=""/>
      <group id="13B1F0090AF56BA4" name="Хлопці" classid="B66DCEBE75D1300B" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
      <group id="F02F45AC1C12A8B4" name="Дівчата" classid="B66DCEBE75D1300B" studentids="" entireclass="0" divisiontag="2" studentcount=""/>
   </groups>
   <students options="canadd,export:silent" columns="id,classid,name,number,email,mobile,partner_id,firstname,lastname"/>
   <studentsubjects options="canadd,export:silent" columns="studentid,subjectid,seminargroup,importance,alternatefor"/>
   <lessons options="canadd,export:silent" columns="id,subjectid,classids,groupids,teacherids,classroomids,periodspercard,periodsperweek,daysdefid,weeksdefid,termsdefid,seminargroup,capacity,partner_id">
      <lesson id="4E774B5DE822C386" classids="0C7AB6AB89F65714" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="7.0" teacherids="8093F8C7C028B7E9" classroomids="936A10A6044D8EF1" groupids="8F33371218BE7F05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4DF5B97B09BF0B0F" classids="0C7AB6AB89F65714" subjectid="48EB922270048784" periodspercard="1" periodsperweek="2.0" teacherids="FBA17F705F735088" classroomids="936A10A6044D8EF1" groupids="8F33371218BE7F05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F6D016BBFFA91844" classids="0C7AB6AB89F65714" subjectid="1653131531A18C1A" periodspercard="1" periodsperweek="3.0" teacherids="8093F8C7C028B7E9" classroomids="936A10A6044D8EF1" groupids="8F33371218BE7F05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2D4A3E6D4A073204" classids="0C7AB6AB89F65714" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="8093F8C7C028B7E9" classroomids="936A10A6044D8EF1" groupids="8F33371218BE7F05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="AFDC1345CB5C7419" classids="0C7AB6AB89F65714" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="8093F8C7C028B7E9" classroomids="936A10A6044D8EF1" groupids="8F33371218BE7F05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FCF5C47E2383E1EF" classids="0C7AB6AB89F65714" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="4.0" teacherids="8093F8C7C028B7E9" classroomids="936A10A6044D8EF1" groupids="8F33371218BE7F05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="924B3B60380FC7E9" classids="0C7AB6AB89F65714" subjectid="D8BE6BD318380267" periodspercard="1" periodsperweek="1.0" teacherids="8093F8C7C028B7E9" classroomids="936A10A6044D8EF1" groupids="8F33371218BE7F05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F14F69989D7CEE27" classids="F6261B0BDDF509CA" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="7.0" teacherids="59525CA8A3FAF2AC" classroomids="00E9CF889BCE8DE4" groupids="B1CCA6FB85B916DD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0F88048329F87F11" classids="F6261B0BDDF509CA" subjectid="48EB922270048784" periodspercard="1" periodsperweek="2.0" teacherids="FBA17F705F735088" classroomids="00E9CF889BCE8DE4" groupids="B1CCA6FB85B916DD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="117B1C9AEF1D7DAB" classids="F6261B0BDDF509CA" subjectid="1653131531A18C1A" periodspercard="1" periodsperweek="3.0" teacherids="59525CA8A3FAF2AC" classroomids="00E9CF889BCE8DE4" groupids="B1CCA6FB85B916DD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="741261DB03449219" classids="F6261B0BDDF509CA" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="59525CA8A3FAF2AC" classroomids="00E9CF889BCE8DE4" groupids="B1CCA6FB85B916DD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="EE81DD61166E447D" classids="F6261B0BDDF509CA" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="59525CA8A3FAF2AC" classroomids="00E9CF889BCE8DE4" groupids="B1CCA6FB85B916DD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="84B5CF17262C4A3C" classids="F6261B0BDDF509CA" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="4.0" teacherids="59525CA8A3FAF2AC" classroomids="00E9CF889BCE8DE4" groupids="B1CCA6FB85B916DD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D52191752CC8E6B9" classids="F6261B0BDDF509CA" subjectid="D8BE6BD318380267" periodspercard="1" periodsperweek="1.0" teacherids="59525CA8A3FAF2AC" classroomids="00E9CF889BCE8DE4" groupids="B1CCA6FB85B916DD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="82C8E103C9407A06" classids="5306C07A080147AB" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="7.0" teacherids="D748D6ECFCB0665C" classroomids="C43EBCA729F832C2" groupids="6A98DDD8F03303F6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="E2680751E9E3C89E" classids="5306C07A080147AB" subjectid="48EB922270048784" periodspercard="1" periodsperweek="2.0" teacherids="FBA17F705F735088" classroomids="C43EBCA729F832C2" groupids="6A98DDD8F03303F6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D3C247707099818A" classids="5306C07A080147AB" subjectid="1653131531A18C1A" periodspercard="1" periodsperweek="3.0" teacherids="D748D6ECFCB0665C" classroomids="C43EBCA729F832C2" groupids="6A98DDD8F03303F6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="9EEC5546A01329D1" classids="5306C07A080147AB" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="D748D6ECFCB0665C" classroomids="C43EBCA729F832C2" groupids="6A98DDD8F03303F6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="32451472DF3F5592" classids="5306C07A080147AB" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="D748D6ECFCB0665C" classroomids="C43EBCA729F832C2" groupids="6A98DDD8F03303F6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2DE772B1E18E434B" classids="5306C07A080147AB" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="4.0" teacherids="D748D6ECFCB0665C" classroomids="C43EBCA729F832C2" groupids="6A98DDD8F03303F6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8554EEFCF3DA15A4" classids="5306C07A080147AB" subjectid="D8BE6BD318380267" periodspercard="1" periodsperweek="1.0" teacherids="D748D6ECFCB0665C" classroomids="C43EBCA729F832C2" groupids="6A98DDD8F03303F6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="CE6DC51140CC0053" classids="5306C07A080147AB" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="6EE94A6C299E0C01" classroomids="420EE7E5B29DC772" groupids="6A98DDD8F03303F6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FBC6D0E3F8FA4C30" classids="D52EE29D8E4AE732" subjectid="494CDE4AD7262EE4" periodspercard="1" periodsperweek="1.0" teacherids="AAA79985E1AAD4E1" classroomids="BAF17CED8B6302B3" groupids="89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="78BFC821071E0B60" classids="985049604CEF9C0D,D6633F54B5C2AD5E,D52EE29D8E4AE732" subjectid="E95C190E785E8320" periodspercard="1" periodsperweek="3.0" teacherids="09774D57C64A6BEA" classroomids="0E8ABC0D2CCA9638" groupids="8C2E2340B252203C,9856CA8C9AD1EA70,89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="11165C1CE6345E79" classids="20C08674C725FDEC,D6633F54B5C2AD5E" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="3.0" teacherids="360EA33F1D02D687" classroomids="8DD1FBCCC276E6CB" groupids="C85D7C86EBAABDEE,9856CA8C9AD1EA70" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="EBD4E1FAD55603CD" classids="985049604CEF9C0D" subjectid="2BB78237DA804A1F" periodspercard="1" periodsperweek="1.0" teacherids="B2C2EF22E7FD56EF" classroomids="EAC763AAC87CA3EE" groupids="8C2E2340B252203C" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5E4F8FD195CD3240" classids="FE9009F3C44EA134" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="1.0" teacherids="9F2D3DECC7DDA3BD" classroomids="061761F57F343583" groupids="344968159A2E28DE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="554739AC86464EF3" classids="FE9009F3C44EA134" subjectid="2281D533BC49A2B5" periodspercard="1" periodsperweek="3.0" teacherids="337362269E80F11F" classroomids="BEF30E4E5E3FAD57" groupids="344968159A2E28DE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3F0C5710D0BEBA56" classids="FE9009F3C44EA134" subjectid="4D9B58A1CED04CB0" periodspercard="1" periodsperweek="2.0" teacherids="337362269E80F11F" classroomids="BEF30E4E5E3FAD57" groupids="344968159A2E28DE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B50043A130BC3FDE" classids="FE9009F3C44EA134" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="3.0" teacherids="360EA33F1D02D687" classroomids="CB369C06D2BF7127" groupids="344968159A2E28DE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="76A39F5112D2445A" classids="FE9009F3C44EA134" subjectid="925682C41C673196" periodspercard="1" periodsperweek="2.0" teacherids="AAA79985E1AAD4E1" classroomids="84FD20D9B1F929D9" groupids="344968159A2E28DE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1ECF4919DABB0A4E" classids="FE9009F3C44EA134" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="1.0" teacherids="4DE3A36B22930DAB" classroomids="B9B23008B9FCF973" groupids="344968159A2E28DE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DAEF81754E309559" classids="FE9009F3C44EA134" subjectid="53EC7146D1EAC70B" periodspercard="1" periodsperweek="3.0" teacherids="A5C432BA36FB3A47" classroomids="B0DBA147EC2F2D0B" groupids="344968159A2E28DE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C62FA0BE4E06845F" classids="FE9009F3C44EA134" subjectid="B0246DD73D3ADA83" periodspercard="1" periodsperweek="1.0" teacherids="A5C432BA36FB3A47" classroomids="B0DBA147EC2F2D0B" groupids="344968159A2E28DE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2672FF50A3545D79" classids="FE9009F3C44EA134" subjectid="E3ACB1EF64BD7A99" periodspercard="1" periodsperweek="2.0" teacherids="39B107278060F948" classroomids="54900D815AC9FAEF" groupids="344968159A2E28DE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F3CD2E5C39147CE0" classids="FE9009F3C44EA134" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="EC5D46CCD4322C2D,F87F57CAA6BD60A8" classroomids="AD3ECE624CC1384B,54F99E7E624F5A0D" groupids="344968159A2E28DE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C028EED327D69457" classids="B66DCEBE75D1300B" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="1.0" teacherids="9F2D3DECC7DDA3BD" classroomids="061761F57F343583" groupids="A721DD311738FAC6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B2A586C55F86BB0F" classids="B66DCEBE75D1300B" subjectid="2281D533BC49A2B5" periodspercard="1" periodsperweek="2.0" teacherids="40EA642CCC5460FC" classroomids="BEF30E4E5E3FAD57" groupids="A721DD311738FAC6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8DD2C19630AB8F3C" classids="B66DCEBE75D1300B" subjectid="4D9B58A1CED04CB0" periodspercard="1" periodsperweek="1.0" teacherids="40EA642CCC5460FC" classroomids="BEF30E4E5E3FAD57" groupids="A721DD311738FAC6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="63662B23BA4DCFD2" classids="B66DCEBE75D1300B" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="3.0" teacherids="360EA33F1D02D687" classroomids="CB369C06D2BF7127" groupids="A721DD311738FAC6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="418D05EE5D07EDF8" classids="B66DCEBE75D1300B" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="1.0" teacherids="4DE3A36B22930DAB" classroomids="B9B23008B9FCF973" groupids="A721DD311738FAC6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F5A4A50F42038A65" classids="B66DCEBE75D1300B" subjectid="53EC7146D1EAC70B" periodspercard="1" periodsperweek="3.0" teacherids="A5C432BA36FB3A47" classroomids="B0DBA147EC2F2D0B" groupids="A721DD311738FAC6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0A1509A5BAB4591D" classids="B66DCEBE75D1300B" subjectid="B0246DD73D3ADA83" periodspercard="1" periodsperweek="1.0" teacherids="A5C432BA36FB3A47" classroomids="B0DBA147EC2F2D0B" groupids="A721DD311738FAC6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="AD26428073BE0DE9" classids="B66DCEBE75D1300B" subjectid="E3ACB1EF64BD7A99" periodspercard="1" periodsperweek="2.0" teacherids="39B107278060F948" classroomids="54900D815AC9FAEF" groupids="A721DD311738FAC6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D4690B91297C0A1D" classids="B66DCEBE75D1300B" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="EC5D46CCD4322C2D,F87F57CAA6BD60A8" classroomids="AD3ECE624CC1384B,54F99E7E624F5A0D" groupids="A721DD311738FAC6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="E25F7F5CFD4DF653" classids="D3677800D88A8D9F" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="44BE3BE79ACEFB9B" classroomids="056EB371A5A5D878" groupids="925401D77A17482D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C691B47AE57D6CA4" classids="D3677800D88A8D9F" subjectid="4EDD024D7AA4881E" periodspercard="1" periodsperweek="3.0" teacherids="44BE3BE79ACEFB9B" classroomids="056EB371A5A5D878" groupids="925401D77A17482D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FD999BFE6DAD35A4" classids="D3677800D88A8D9F" subjectid="62FCF6247E08D84E" periodspercard="1" periodsperweek="1.0" teacherids="44BE3BE79ACEFB9B" classroomids="056EB371A5A5D878" groupids="925401D77A17482D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="95C1468145882BFC" classids="D3677800D88A8D9F" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="1C271F70D48E6CD1" classroomids="056EB371A5A5D878" groupids="925401D77A17482D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A13EE5F75196D0F9" classids="D3677800D88A8D9F" subjectid="1653131531A18C1A" periodspercard="1" periodsperweek="3.0" teacherids="44BE3BE79ACEFB9B" classroomids="056EB371A5A5D878" groupids="925401D77A17482D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="EA0A54B84283D325" classids="D3677800D88A8D9F" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="44BE3BE79ACEFB9B" classroomids="056EB371A5A5D878" groupids="925401D77A17482D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="61EB86803492DCC0" classids="D3677800D88A8D9F" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="59525CA8A3FAF2AC" classroomids="056EB371A5A5D878" groupids="925401D77A17482D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="35531F55D84AB55D" classids="D3677800D88A8D9F" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="4.0" teacherids="44BE3BE79ACEFB9B" classroomids="056EB371A5A5D878" groupids="925401D77A17482D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5CF03C37B931EEB1" classids="D3677800D88A8D9F" subjectid="D8BE6BD318380267" periodspercard="1" periodsperweek="1.0" teacherids="44BE3BE79ACEFB9B" classroomids="056EB371A5A5D878" groupids="925401D77A17482D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1D5AD57046D9B5AC" classids="D3677800D88A8D9F" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="6EE94A6C299E0C01" classroomids="420EE7E5B29DC772" groupids="925401D77A17482D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5B3F675A5209E4D0" classids="DD368ADB9958BBC4" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="E15EE552D7957E58" classroomids="77886EDA9CEBBB1B" groupids="39CBD9D8DB902A49" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5D29242A0DE2A8D4" classids="DD368ADB9958BBC4" subjectid="4EDD024D7AA4881E" periodspercard="1" periodsperweek="3.0" teacherids="E15EE552D7957E58" classroomids="77886EDA9CEBBB1B" groupids="39CBD9D8DB902A49" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="CFCD336255CBCD90" classids="DD368ADB9958BBC4" subjectid="62FCF6247E08D84E" periodspercard="1" periodsperweek="1.0" teacherids="E15EE552D7957E58" classroomids="77886EDA9CEBBB1B" groupids="39CBD9D8DB902A49" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0F5614D2E2DBF6A4" classids="DD368ADB9958BBC4" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="1C271F70D48E6CD1" classroomids="77886EDA9CEBBB1B" groupids="39CBD9D8DB902A49" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DE17EBFD31EAD1A9" classids="DD368ADB9958BBC4" subjectid="1653131531A18C1A" periodspercard="1" periodsperweek="3.0" teacherids="E15EE552D7957E58" classroomids="77886EDA9CEBBB1B" groupids="39CBD9D8DB902A49" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="81D7EA9F45E32EEA" classids="DD368ADB9958BBC4" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="E15EE552D7957E58" classroomids="77886EDA9CEBBB1B" groupids="39CBD9D8DB902A49" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8499F069813B50C8" classids="DD368ADB9958BBC4" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="E15EE552D7957E58" classroomids="77886EDA9CEBBB1B" groupids="39CBD9D8DB902A49" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DDBF732E044D27F6" classids="DD368ADB9958BBC4" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="4.0" teacherids="E15EE552D7957E58" classroomids="77886EDA9CEBBB1B" groupids="39CBD9D8DB902A49" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="97CA304CBF0557A0" classids="DD368ADB9958BBC4" subjectid="D8BE6BD318380267" periodspercard="1" periodsperweek="1.0" teacherids="E15EE552D7957E58" classroomids="77886EDA9CEBBB1B" groupids="39CBD9D8DB902A49" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="74057A1D066E4323" classids="35E15A2F3CCB11D2" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="944A7F4FA53038A9" classroomids="47B05167ECC4623A" groupids="924A7E697B7AA901" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="9F0064F1422149A5" classids="35E15A2F3CCB11D2" subjectid="4EDD024D7AA4881E" periodspercard="1" periodsperweek="3.0" teacherids="944A7F4FA53038A9" classroomids="47B05167ECC4623A" groupids="924A7E697B7AA901" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="461D91853B385A7C" classids="35E15A2F3CCB11D2" subjectid="62FCF6247E08D84E" periodspercard="1" periodsperweek="1.0" teacherids="944A7F4FA53038A9" classroomids="47B05167ECC4623A" groupids="924A7E697B7AA901" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="636015E8633D373B" classids="35E15A2F3CCB11D2" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="1C271F70D48E6CD1" classroomids="47B05167ECC4623A" groupids="924A7E697B7AA901" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D0E9296C6BEE3801" classids="35E15A2F3CCB11D2" subjectid="1653131531A18C1A" periodspercard="1" periodsperweek="3.0" teacherids="944A7F4FA53038A9" classroomids="47B05167ECC4623A" groupids="924A7E697B7AA901" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="48C5DC814A540F6D" classids="35E15A2F3CCB11D2" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="944A7F4FA53038A9" classroomids="47B05167ECC4623A" groupids="924A7E697B7AA901" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7FAE53C1BEDD0237" classids="35E15A2F3CCB11D2" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="944A7F4FA53038A9" classroomids="47B05167ECC4623A" groupids="924A7E697B7AA901" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="844778D8DCBF3E7C" classids="35E15A2F3CCB11D2" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="4.0" teacherids="944A7F4FA53038A9" classroomids="47B05167ECC4623A" groupids="924A7E697B7AA901" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="80414FCF9B05B725" classids="35E15A2F3CCB11D2" subjectid="D8BE6BD318380267" periodspercard="1" periodsperweek="1.0" teacherids="944A7F4FA53038A9" classroomids="47B05167ECC4623A" groupids="924A7E697B7AA901" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="BE0959D1F32DCCDE" classids="35E15A2F3CCB11D2" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="6EE94A6C299E0C01" classroomids="420EE7E5B29DC772" groupids="924A7E697B7AA901" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="26CFE81045739D78" classids="DFC0B23B771EFFE6" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="15F007ED5EC12D3E" classroomids="B77506AEF2C47046" groupids="157A948661FE0047" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F81A7130B27FF3AB" classids="DFC0B23B771EFFE6" subjectid="4EDD024D7AA4881E" periodspercard="1" periodsperweek="3.0" teacherids="15F007ED5EC12D3E" classroomids="B77506AEF2C47046" groupids="157A948661FE0047" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="19F12DD1F10DD0BC" classids="DFC0B23B771EFFE6" subjectid="62FCF6247E08D84E" periodspercard="1" periodsperweek="1.0" teacherids="15F007ED5EC12D3E" classroomids="B77506AEF2C47046" groupids="157A948661FE0047" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="036462C71F599216" classids="DFC0B23B771EFFE6" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="1C271F70D48E6CD1" classroomids="B77506AEF2C47046" groupids="157A948661FE0047" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8E9C4A0F8108ADD7" classids="DFC0B23B771EFFE6" subjectid="1653131531A18C1A" periodspercard="1" periodsperweek="3.0" teacherids="15F007ED5EC12D3E" classroomids="B77506AEF2C47046" groupids="157A948661FE0047" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="6BD80CD194DE6376" classids="DFC0B23B771EFFE6" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="B77506AEF2C47046" groupids="157A948661FE0047" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="E47E060DA6632C50" classids="DFC0B23B771EFFE6" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="15F007ED5EC12D3E" classroomids="B77506AEF2C47046" groupids="157A948661FE0047" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1F6CF4B20EFABCF4" classids="DFC0B23B771EFFE6" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="5.0" teacherids="15F007ED5EC12D3E" classroomids="B77506AEF2C47046" groupids="157A948661FE0047" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F1F86D7C15A9542C" classids="DFC0B23B771EFFE6" subjectid="D8BE6BD318380267" periodspercard="1" periodsperweek="1.0" teacherids="15F007ED5EC12D3E" classroomids="B77506AEF2C47046" groupids="157A948661FE0047" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D4984C34D9A938ED" classids="225323AC6FB62EE6" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="31B3A1B8D1E275A3" classroomids="A02B4A047DFD3E55" groupids="0DBF7BB5338A8CE4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="E0853226E2A9DFCD" classids="225323AC6FB62EE6" subjectid="4EDD024D7AA4881E" periodspercard="1" periodsperweek="3.0" teacherids="31B3A1B8D1E275A3" classroomids="A02B4A047DFD3E55" groupids="0DBF7BB5338A8CE4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="E3914DE66A195371" classids="225323AC6FB62EE6" subjectid="62FCF6247E08D84E" periodspercard="1" periodsperweek="1.0" teacherids="31B3A1B8D1E275A3" classroomids="A02B4A047DFD3E55" groupids="0DBF7BB5338A8CE4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="34136DA3167E8C35" classids="225323AC6FB62EE6" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="1C271F70D48E6CD1" classroomids="A02B4A047DFD3E55" groupids="0DBF7BB5338A8CE4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0774E5D6E2AAFB01" classids="225323AC6FB62EE6" subjectid="1653131531A18C1A" periodspercard="1" periodsperweek="3.0" teacherids="31B3A1B8D1E275A3" classroomids="A02B4A047DFD3E55" groupids="0DBF7BB5338A8CE4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F7A236A5B09F8D78" classids="225323AC6FB62EE6" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="A02B4A047DFD3E55" groupids="0DBF7BB5338A8CE4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1A225D3A2E4B7FA7" classids="225323AC6FB62EE6" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="31B3A1B8D1E275A3" classroomids="A02B4A047DFD3E55" groupids="0DBF7BB5338A8CE4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0CF948066C577840" classids="225323AC6FB62EE6" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="5.0" teacherids="31B3A1B8D1E275A3" classroomids="A02B4A047DFD3E55" groupids="0DBF7BB5338A8CE4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="AF8DEEB492AFF4AB" classids="225323AC6FB62EE6" subjectid="D8BE6BD318380267" periodspercard="1" periodsperweek="1.0" teacherids="31B3A1B8D1E275A3" classroomids="A02B4A047DFD3E55" groupids="0DBF7BB5338A8CE4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A377044729EFFB00" classids="225323AC6FB62EE6" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="24B5758E49450515" classroomids="420EE7E5B29DC772" groupids="0DBF7BB5338A8CE4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7F475A1AA6EEB938" classids="01567BCC4E3D94E4" subjectid="4EDD024D7AA4881E" periodspercard="1" periodsperweek="3.0" teacherids="FB84DB7B5FC43046" classroomids="29FF747B4241426D" groupids="938DC3042390B6D8" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="6218E6BDDCECEB61" classids="01567BCC4E3D94E4" subjectid="1653131531A18C1A" periodspercard="1" periodsperweek="3.0" teacherids="61CFC65D5282005C" classroomids="29FF747B4241426D" groupids="938DC3042390B6D8" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2602006F442AA888" classids="01567BCC4E3D94E4" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="29FF747B4241426D" groupids="938DC3042390B6D8" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B1AE89A1F5A23F4A" classids="01567BCC4E3D94E4" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="FB84DB7B5FC43046" classroomids="29FF747B4241426D" groupids="938DC3042390B6D8" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0DA36B910E49EBB5" classids="01567BCC4E3D94E4" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="5.0" teacherids="FB84DB7B5FC43046" classroomids="29FF747B4241426D" groupids="938DC3042390B6D8" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="25A2D2BEEC0DDE1E" classids="01567BCC4E3D94E4" subjectid="D8BE6BD318380267" periodspercard="1" periodsperweek="1.0" teacherids="61CFC65D5282005C" classroomids="29FF747B4241426D" groupids="938DC3042390B6D8" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D1128FA83F89E536" classids="73303F2096460B3F" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="3335FDC945DFCC35" classroomids="2BA54C5FE0B7394F" groupids="D004020F777340B2" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="EAAAA57F8DA5618F" classids="73303F2096460B3F" subjectid="4EDD024D7AA4881E" periodspercard="1" periodsperweek="3.0" teacherids="3335FDC945DFCC35" classroomids="2BA54C5FE0B7394F" groupids="D004020F777340B2" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3C966544732AF4E0" classids="73303F2096460B3F" subjectid="62FCF6247E08D84E" periodspercard="1" periodsperweek="1.0" teacherids="3335FDC945DFCC35" classroomids="2BA54C5FE0B7394F" groupids="D004020F777340B2" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="595D8EFCD915416E" classids="73303F2096460B3F" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="1E0727688BE68056" classroomids="2BA54C5FE0B7394F" groupids="D004020F777340B2" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D8FAC9BD31268BC8" classids="73303F2096460B3F" subjectid="1653131531A18C1A" periodspercard="1" periodsperweek="3.0" teacherids="3335FDC945DFCC35" classroomids="2BA54C5FE0B7394F" groupids="D004020F777340B2" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D2B03876CB326F28" classids="73303F2096460B3F" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="3335FDC945DFCC35" classroomids="2BA54C5FE0B7394F" groupids="D004020F777340B2" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F4343C759354CA54" classids="73303F2096460B3F" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="3335FDC945DFCC35" classroomids="2BA54C5FE0B7394F" groupids="D004020F777340B2" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="44FD6C21B37034EB" classids="73303F2096460B3F" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="5.0" teacherids="3335FDC945DFCC35" classroomids="2BA54C5FE0B7394F" groupids="D004020F777340B2" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="508CE5DF162C9091" classids="73303F2096460B3F" subjectid="D8BE6BD318380267" periodspercard="1" periodsperweek="1.0" teacherids="3335FDC945DFCC35" classroomids="2BA54C5FE0B7394F" groupids="D004020F777340B2" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4E0E1DC7138067B1" classids="06AFD244066A269E" subjectid="4EDD024D7AA4881E" periodspercard="1" periodsperweek="3.0" teacherids="0763DDDAB1631F37" classroomids="CFF7D3B7BA73393E" groupids="403BF385E429B514" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="BB543930681C28D1" classids="06AFD244066A269E" subjectid="1653131531A18C1A" periodspercard="1" periodsperweek="3.0" teacherids="61CFC65D5282005C" classroomids="CFF7D3B7BA73393E" groupids="403BF385E429B514" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B8EFDDB902196D0B" classids="06AFD244066A269E" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="CFF7D3B7BA73393E" groupids="403BF385E429B514" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4F3E470DA3C5FB55" classids="06AFD244066A269E" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="0763DDDAB1631F37" classroomids="CFF7D3B7BA73393E" groupids="403BF385E429B514" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="95812626D5D3A3D5" classids="06AFD244066A269E" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="5.0" teacherids="0763DDDAB1631F37" classroomids="CFF7D3B7BA73393E" groupids="403BF385E429B514" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DB78B5ADF3AC22B0" classids="06AFD244066A269E" subjectid="D8BE6BD318380267" periodspercard="1" periodsperweek="1.0" teacherids="0763DDDAB1631F37" classroomids="CFF7D3B7BA73393E" groupids="403BF385E429B514" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FC65031D7B456DF9" classids="7EA977BFD3FECDF8" subjectid="4EDD024D7AA4881E" periodspercard="1" periodsperweek="3.0" teacherids="D0955D86CB39A473" classroomids="F08C42F2BA7CD261" groupids="58D92A325270681D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7046B6BCACAFC24A" classids="7EA977BFD3FECDF8" subjectid="1653131531A18C1A" periodspercard="1" periodsperweek="3.0" teacherids="D0955D86CB39A473" classroomids="F08C42F2BA7CD261" groupids="58D92A325270681D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7E17F548EDA595E8" classids="7EA977BFD3FECDF8" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="F08C42F2BA7CD261" groupids="58D92A325270681D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5C217C6930F883F6" classids="7EA977BFD3FECDF8" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="D0955D86CB39A473" classroomids="F08C42F2BA7CD261" groupids="58D92A325270681D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3AC1CC2CD459C840" classids="7EA977BFD3FECDF8" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="5.0" teacherids="D0955D86CB39A473" classroomids="F08C42F2BA7CD261" groupids="58D92A325270681D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DBC9A3F7DDB84A24" classids="7EA977BFD3FECDF8" subjectid="D8BE6BD318380267" periodspercard="1" periodsperweek="1.0" teacherids="61CFC65D5282005C" classroomids="F08C42F2BA7CD261" groupids="58D92A325270681D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8CA27CC1AE7A07D8" classids="A625DA1900F2313E" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="9F2D3DECC7DDA3BD" classroomids="A0402F8BECD7C881" groupids="9349936B0370D4EC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D952F86BC9449A8C" classids="A625DA1900F2313E" subjectid="48EB922270048784" periodspercard="1" periodsperweek="4.0" teacherids="FBA17F705F735088" classroomids="AF6ED248539EC883,33E6B859AD8D1EE1" groupids="9349936B0370D4EC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3CD08BF320497E13" classids="A625DA1900F2313E" subjectid="44102B96C1A25E37" periodspercard="1" periodsperweek="1.0" teacherids="337362269E80F11F" classroomids="55AC089DDBC06A70" groupids="9349936B0370D4EC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DCA7F113C39265DA" classids="A625DA1900F2313E" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="F9C94211E943F513" groupids="9349936B0370D4EC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C5311417E9E168F1" classids="A625DA1900F2313E" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="0E8ABC0D2CCA9638" groupids="9349936B0370D4EC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A088A9229539AB3B" classids="A625DA1900F2313E" subjectid="3A9948CA79BA4397" periodspercard="1" periodsperweek="2.0" teacherids="AAA79985E1AAD4E1" classroomids="BAF17CED8B6302B3" groupids="9349936B0370D4EC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5C013867A43B77E8" classids="A625DA1900F2313E" subjectid="ABB8DFA5EAE519E1" periodspercard="2" periodsperweek="2.0" teacherids="AE5874DD84BDF66D" classroomids="F2A8CBB3E984A461" groupids="9349936B0370D4EC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="06D9363E0A142E46" classids="A625DA1900F2313E" subjectid="B1196B9543B0BB02" periodspercard="1" periodsperweek="1.0" teacherids="38987466DEE01D90" classroomids="F9C94211E943F513" groupids="9349936B0370D4EC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="99A3B11D9B9577A7" classids="A625DA1900F2313E" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="887F7E8DF512A7AC" classroomids="B0D423502BE8F8D6" groupids="9349936B0370D4EC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8BC12B804252D3B5" classids="A625DA1900F2313E" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="8BB6C4C1EBE27893" classroomids="121C7291CF88C830,C813B709A5BCCB18" groupids="9349936B0370D4EC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="768036A01EF56CDE" classids="9A09F02B6C945E65" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="4.0" teacherids="CF998705E4252E28" classroomids="A34C5EB2922E231A" groupids="0F8A87FC7B70C65A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="BCB2069FA8F54FC7" classids="9A09F02B6C945E65" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="CF998705E4252E28" classroomids="A34C5EB2922E231A" groupids="0F8A87FC7B70C65A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="27EE2406E87BF095" classids="9A09F02B6C945E65" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="1.0" teacherids="CF998705E4252E28" classroomids="A34C5EB2922E231A" groupids="0F8A87FC7B70C65A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F77E93A8BA97F0B2" classids="9A09F02B6C945E65" subjectid="44102B96C1A25E37" periodspercard="1" periodsperweek="1.0" teacherids="A833DCCDA62D2A79" classroomids="BF33F86DEA1E2A15" groupids="0F8A87FC7B70C65A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A14F53A1B8F6A935" classids="9A09F02B6C945E65" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="303F56E70FD472F3" groupids="0F8A87FC7B70C65A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5BA49EF9AC407BD9" classids="9A09F02B6C945E65" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="BF33F86DEA1E2A15" groupids="0F8A87FC7B70C65A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B50DA30BFA5A99BE" classids="9A09F02B6C945E65" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="5.0" teacherids="AC2BB52AE3BDB55F" classroomids="A7088E6D2B40FEE7" groupids="0F8A87FC7B70C65A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D7F6D87DCC68787F" classids="9A09F02B6C945E65" subjectid="3A9948CA79BA4397" periodspercard="1" periodsperweek="2.0" teacherids="AAA79985E1AAD4E1" classroomids="84FD20D9B1F929D9" groupids="0F8A87FC7B70C65A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="18B99E92B960F7C7" classids="9A09F02B6C945E65" subjectid="ABB8DFA5EAE519E1" periodspercard="2" periodsperweek="2.0" teacherids="AE5874DD84BDF66D" classroomids="3D0634BB0DD77C96" groupids="0F8A87FC7B70C65A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="9F20BE0AAD9D0150" classids="9A09F02B6C945E65" subjectid="B1196B9543B0BB02" periodspercard="1" periodsperweek="1.0" teacherids="38987466DEE01D90" classroomids="303F56E70FD472F3" groupids="0F8A87FC7B70C65A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A9FB0476206F70B4" classids="9A09F02B6C945E65" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="887F7E8DF512A7AC" classroomids="3B11ABA63409B889" groupids="0F8A87FC7B70C65A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="710947DA1BD14C3D" classids="9A09F02B6C945E65" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="8BB6C4C1EBE27893" classroomids="AD3ECE624CC1384B,54F99E7E624F5A0D" groupids="0F8A87FC7B70C65A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3F282E6389B4EE34" classids="0CE26546E99F304D" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="4.0" teacherids="CF998705E4252E28" classroomids="A34C5EB2922E231A" groupids="058B6A2588A3FA9E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2ABC7CEEB8FE8097" classids="0CE26546E99F304D" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="CF998705E4252E28" classroomids="A34C5EB2922E231A" groupids="058B6A2588A3FA9E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="9591D79D13156EB9" classids="0CE26546E99F304D" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="1.0" teacherids="5767F763D9D38102" classroomids="061761F57F343583" groupids="058B6A2588A3FA9E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B70B3A6CEBB324B9" classids="0CE26546E99F304D" subjectid="44102B96C1A25E37" periodspercard="1" periodsperweek="1.0" teacherids="A833DCCDA62D2A79" classroomids="BF33F86DEA1E2A15" groupids="058B6A2588A3FA9E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="595AECA6161499F7" classids="0CE26546E99F304D" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="303F56E70FD472F3" groupids="058B6A2588A3FA9E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="EF64A785B7C49E4E" classids="0CE26546E99F304D" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="BF33F86DEA1E2A15" groupids="058B6A2588A3FA9E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F37DF93EBF4D1A94" classids="0CE26546E99F304D" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="5.0" teacherids="3C64C064FABEF4F7" classroomids="352C0BD6CE8FC471" groupids="058B6A2588A3FA9E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D5C83C993D9D466D" classids="0CE26546E99F304D" subjectid="3A9948CA79BA4397" periodspercard="1" periodsperweek="2.0" teacherids="AAA79985E1AAD4E1" classroomids="84FD20D9B1F929D9" groupids="058B6A2588A3FA9E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F074F16BE542A55F" classids="0CE26546E99F304D" subjectid="ABB8DFA5EAE519E1" periodspercard="2" periodsperweek="2.0" teacherids="AE5874DD84BDF66D" classroomids="3D0634BB0DD77C96" groupids="058B6A2588A3FA9E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="EDE2DDC4CCE2E9E7" classids="0CE26546E99F304D" subjectid="B1196B9543B0BB02" periodspercard="1" periodsperweek="1.0" teacherids="38987466DEE01D90" classroomids="303F56E70FD472F3" groupids="058B6A2588A3FA9E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="E1451ABC0F8CED61" classids="0CE26546E99F304D" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="887F7E8DF512A7AC" classroomids="3B11ABA63409B889" groupids="058B6A2588A3FA9E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5C9E043D1B7F197D" classids="0CE26546E99F304D" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="8BB6C4C1EBE27893" classroomids="AD3ECE624CC1384B,54F99E7E624F5A0D" groupids="058B6A2588A3FA9E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FE2C2887EFD9E054" classids="5E1E4F68D45303BA" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="5767F763D9D38102" classroomids="A0402F8BECD7C881" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C5E9B8B8817E1241" classids="5E1E4F68D45303BA" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="2.0" teacherids="5767F763D9D38102" classroomids="A0402F8BECD7C881" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1A79437151BD50FA" classids="5E1E4F68D45303BA" subjectid="A8E29013AE4B0F73" periodspercard="1" periodsperweek="2.0" teacherids="337362269E80F11F" classroomids="55AC089DDBC06A70" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C5496515A4467BBB" classids="5E1E4F68D45303BA" subjectid="B25D15940FFE7094" periodspercard="1" periodsperweek="1.0" teacherids="337362269E80F11F" classroomids="55AC089DDBC06A70" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7C7923E06C5C6552" classids="5E1E4F68D45303BA" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="F9C94211E943F513" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0EF445EBF1297418" classids="5E1E4F68D45303BA" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="D3C1B9B25314573A" classroomids="3E5CAB46B5B8E0ED" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="6842387FD5D9AE77" classids="5E1E4F68D45303BA" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="5.0" teacherids="360EA33F1D02D687" classroomids="8DD1FBCCC276E6CB" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="58FF4E7D3C3C2A92" classids="5E1E4F68D45303BA" subjectid="3A9948CA79BA4397" periodspercard="1" periodsperweek="2.0" teacherids="AAA79985E1AAD4E1" classroomids="BAF17CED8B6302B3" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F358F70A0C3602A7" classids="5E1E4F68D45303BA" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="2.0" teacherids="85FD7C042EF4D83D" classroomids="BBE8D9B17AB2E7C7" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D8D6F446CE1C9E82" classids="5E1E4F68D45303BA" subjectid="ABB8DFA5EAE519E1" periodspercard="2" periodsperweek="2.0" teacherids="AE5874DD84BDF66D,D3C1B9B25314573A" classroomids="F2A8CBB3E984A461" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4EC07DDE49292EAB" classids="5E1E4F68D45303BA" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="887F7E8DF512A7AC" classroomids="B0D423502BE8F8D6" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C1F8BE8FE32203D9" classids="5E1E4F68D45303BA" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="63659795843F5666" classroomids="121C7291CF88C830,C813B709A5BCCB18" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="38022791E5F154B6" classids="9A988E7428558D94" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="5767F763D9D38102" classroomids="A0402F8BECD7C881" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B5530FCB989D8C79" classids="9A988E7428558D94" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="2.0" teacherids="5767F763D9D38102" classroomids="A0402F8BECD7C881" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="31B1EB97D58386DC" classids="9A988E7428558D94" subjectid="A8E29013AE4B0F73" periodspercard="1" periodsperweek="2.0" teacherids="337362269E80F11F" classroomids="55AC089DDBC06A70" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="63DB5C7C640969B6" classids="9A988E7428558D94" subjectid="B25D15940FFE7094" periodspercard="1" periodsperweek="1.0" teacherids="337362269E80F11F" classroomids="55AC089DDBC06A70" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="50EBE399CDC7005F" classids="9A988E7428558D94" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="F9C94211E943F513" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DBB2E4F3BD6A4C02" classids="9A988E7428558D94" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="D3C1B9B25314573A" classroomids="3E5CAB46B5B8E0ED" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2595C1984453E211" classids="9A988E7428558D94" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="5.0" teacherids="360EA33F1D02D687" classroomids="8DD1FBCCC276E6CB" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2F7B93082994585B" classids="9A988E7428558D94" subjectid="3A9948CA79BA4397" periodspercard="1" periodsperweek="2.0" teacherids="AAA79985E1AAD4E1" classroomids="BAF17CED8B6302B3" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="44722D1096295E24" classids="9A988E7428558D94" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="2.0" teacherids="85FD7C042EF4D83D" classroomids="BBE8D9B17AB2E7C7" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="40AB6892C0194D15" classids="9A988E7428558D94" subjectid="ABB8DFA5EAE519E1" periodspercard="2" periodsperweek="2.0" teacherids="AE5874DD84BDF66D,D3C1B9B25314573A" classroomids="F2A8CBB3E984A461" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="E30459FA20302BD9" classids="9A988E7428558D94" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="887F7E8DF512A7AC" classroomids="B0D423502BE8F8D6" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1E258DC5F1CDAA3F" classids="9A988E7428558D94" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="63659795843F5666" classroomids="121C7291CF88C830,C813B709A5BCCB18" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F48E6043B5ABAA4D" classids="A0F07B781A35EDDC" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="4.0" teacherids="622A637A3B3EB137" classroomids="BCE497B2E99BB2D0" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5DAB4477F56CC9A8" classids="A0F07B781A35EDDC" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="5767F763D9D38102" classroomids="A0402F8BECD7C881" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2B3BB14EF3134D81" classids="A0F07B781A35EDDC" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="9235D2B470B4CD1A" classroomids="33E6B859AD8D1EE1,AF6ED248539EC883" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2B3FC1FB705541D9" classids="A0F07B781A35EDDC" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="2.0" teacherids="5767F763D9D38102" classroomids="A0402F8BECD7C881" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F6590E13CE15F845" classids="A0F07B781A35EDDC" subjectid="A8E29013AE4B0F73" periodspercard="1" periodsperweek="2.0" teacherids="337362269E80F11F" classroomids="55AC089DDBC06A70" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="848F65F10519703A" classids="A0F07B781A35EDDC" subjectid="B25D15940FFE7094" periodspercard="1" periodsperweek="1.0" teacherids="337362269E80F11F" classroomids="55AC089DDBC06A70" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="57C50334B6C4B760" classids="A0F07B781A35EDDC" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="F9C94211E943F513" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DD80DF935B3A4FBE" classids="A0F07B781A35EDDC" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="D3C1B9B25314573A" classroomids="3E5CAB46B5B8E0ED" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C9778C38BD737307" classids="A0F07B781A35EDDC" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="5.0" teacherids="3C64C064FABEF4F7" classroomids="A15E20D77C992831" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0B4BD23D896796D3" classids="A0F07B781A35EDDC" subjectid="3A9948CA79BA4397" periodspercard="1" periodsperweek="2.0" teacherids="AAA79985E1AAD4E1" classroomids="BAF17CED8B6302B3" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0172353F3C6134AF" classids="A0F07B781A35EDDC" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="2.0" teacherids="85FD7C042EF4D83D" classroomids="BBE8D9B17AB2E7C7" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B2A185B88B882E84" classids="A0F07B781A35EDDC" subjectid="ABB8DFA5EAE519E1" periodspercard="2" periodsperweek="2.0" teacherids="D3C1B9B25314573A" classroomids="3E5CAB46B5B8E0ED" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="29D26EBEEDF220FC" classids="A0F07B781A35EDDC" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="887F7E8DF512A7AC" classroomids="B0D423502BE8F8D6" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="65CC26ABA3D70502" classids="A0F07B781A35EDDC" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="63659795843F5666" classroomids="121C7291CF88C830,C813B709A5BCCB18" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="48DCE9EE457AFAC9" classids="F78C9FB5DEF1E0A6" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="D43AD73AA56599D7" classroomids="F9BFBEA3EAA755E7" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1151673A51588BD8" classids="F78C9FB5DEF1E0A6" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="9F2D3DECC7DDA3BD" classroomids="A0402F8BECD7C881" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="AEF7CADD0186F940" classids="F78C9FB5DEF1E0A6" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="FBA17F705F735088" classroomids="33E6B859AD8D1EE1,AF6ED248539EC883" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5AB4D8A80708A11C" classids="F78C9FB5DEF1E0A6" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="2.0" teacherids="9F2D3DECC7DDA3BD" classroomids="A0402F8BECD7C881" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3DF72C1BCBB3DB97" classids="F78C9FB5DEF1E0A6" subjectid="2281D533BC49A2B5" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="2467AAB6EC1B0043" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D7A6914DF390B904" classids="F78C9FB5DEF1E0A6" subjectid="4D9B58A1CED04CB0" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="2467AAB6EC1B0043" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="BF67FD3EE3D5D7F9" classids="F78C9FB5DEF1E0A6" subjectid="B25D15940FFE7094" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="2467AAB6EC1B0043" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="EBB5CE14631AAD99" classids="F78C9FB5DEF1E0A6" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="F9C94211E943F513" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="769AC7F83F1CC845" classids="F78C9FB5DEF1E0A6" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="D3C1B9B25314573A" classroomids="3E5CAB46B5B8E0ED" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="79DDFEE6A17D26B3" classids="F78C9FB5DEF1E0A6" subjectid="025B4429860A2CD7" periodspercard="1" periodsperweek="3.0" teacherids="3C64C064FABEF4F7" classroomids="A15E20D77C992831" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B7BF9922D68C4747" classids="F78C9FB5DEF1E0A6" subjectid="E1939E3BDDF5FC26" periodspercard="1" periodsperweek="2.0" teacherids="3C64C064FABEF4F7" classroomids="A15E20D77C992831" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1DEB400CEF025DCF" classids="F78C9FB5DEF1E0A6" subjectid="925682C41C673196" periodspercard="1" periodsperweek="2.0" teacherids="66F67BC8F80A7C09" classroomids="425DFC212452C41A,BAF17CED8B6302B3" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="6E0570D8712CC5FC" classids="F78C9FB5DEF1E0A6" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="2.0" teacherids="85FD7C042EF4D83D" classroomids="BBE8D9B17AB2E7C7" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B228ACEA2084F6DD" classids="F78C9FB5DEF1E0A6" subjectid="53EC7146D1EAC70B" periodspercard="1" periodsperweek="2.0" teacherids="B2C2EF22E7FD56EF" classroomids="EAC763AAC87CA3EE" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="54069AE6F6E01E4A" classids="F78C9FB5DEF1E0A6" subjectid="E3ACB1EF64BD7A99" periodspercard="1" periodsperweek="1.0" teacherids="39B107278060F948" classroomids="F174E9F85E36E906" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7F99D4FB7A62AE9B" classids="F78C9FB5DEF1E0A6,D69373ACA899CDEC" subjectid="ABB8DFA5EAE519E1" periodspercard="1" periodsperweek="1.0" teacherids="AE5874DD84BDF66D,D3C1B9B25314573A" classroomids="F2A8CBB3E984A461,3E5CAB46B5B8E0ED" groupids="7EB37E60FD58592A,BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A72A9F96AC90E684" classids="F78C9FB5DEF1E0A6" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="8B3BC1D7C44CB024" classroomids="425DFC212452C41A" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FB53B042F24502EB" classids="F78C9FB5DEF1E0A6" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="8BB6C4C1EBE27893" classroomids="121C7291CF88C830,C813B709A5BCCB18" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="640B2D61C697B72C" classids="D69373ACA899CDEC" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="D43AD73AA56599D7" classroomids="F9BFBEA3EAA755E7" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="42D5F91E93B306B7" classids="D69373ACA899CDEC" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="9F2D3DECC7DDA3BD" classroomids="A0402F8BECD7C881" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A8DCDEC465C1DF00" classids="D69373ACA899CDEC" subjectid="48EB922270048784" periodspercard="1" periodsperweek="4.0" teacherids="522C2F1FFA1907AD" classroomids="33E6B859AD8D1EE1" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C5D3ED0FB4BB8183" classids="D69373ACA899CDEC" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="1.0" teacherids="9F2D3DECC7DDA3BD" classroomids="A0402F8BECD7C881" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="133261B6AFE67D85" classids="D69373ACA899CDEC" subjectid="2281D533BC49A2B5" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="2467AAB6EC1B0043" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D80D1A2C42C95AFE" classids="D69373ACA899CDEC" subjectid="4D9B58A1CED04CB0" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="2467AAB6EC1B0043" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="715B239EE65B00F7" classids="D69373ACA899CDEC" subjectid="B25D15940FFE7094" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="2467AAB6EC1B0043" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="E9A413D7962F50CB" classids="D69373ACA899CDEC" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="F9C94211E943F513" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D2DBD97C697EAC10" classids="D69373ACA899CDEC" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="D3C1B9B25314573A" classroomids="3E5CAB46B5B8E0ED" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="684FC7965F44AEDD" classids="D69373ACA899CDEC" subjectid="025B4429860A2CD7" periodspercard="1" periodsperweek="3.0" teacherids="AC2BB52AE3BDB55F" classroomids="8562B3E01B3A8F21" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B01CFF8912FBC2B7" classids="D69373ACA899CDEC" subjectid="E1939E3BDDF5FC26" periodspercard="1" periodsperweek="2.0" teacherids="AC2BB52AE3BDB55F" classroomids="8562B3E01B3A8F21" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="E7132F78AE2E48B7" classids="D69373ACA899CDEC" subjectid="925682C41C673196" periodspercard="1" periodsperweek="2.0" teacherids="66F67BC8F80A7C09" classroomids="425DFC212452C41A,BAF17CED8B6302B3" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="E925B2393695EF72" classids="D69373ACA899CDEC" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="2.0" teacherids="85FD7C042EF4D83D" classroomids="BBE8D9B17AB2E7C7" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="257DDEC517CEAE34" classids="D69373ACA899CDEC" subjectid="53EC7146D1EAC70B" periodspercard="1" periodsperweek="2.0" teacherids="B2C2EF22E7FD56EF" classroomids="EAC763AAC87CA3EE" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="855CAFFA0212F37E" classids="D69373ACA899CDEC" subjectid="E3ACB1EF64BD7A99" periodspercard="1" periodsperweek="1.0" teacherids="39B107278060F948" classroomids="F174E9F85E36E906" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="027A76CBD6431156" classids="D69373ACA899CDEC" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="8B3BC1D7C44CB024" classroomids="425DFC212452C41A" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="40ED89AC3730B82A" classids="D69373ACA899CDEC" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="8BB6C4C1EBE27893" classroomids="121C7291CF88C830,C813B709A5BCCB18" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DB1F59D46B5B259C" classids="4869BB2A0581BD00" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="CF998705E4252E28" classroomids="A34C5EB2922E231A" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="AD67DDD1EAB7B3A4" classids="4869BB2A0581BD00" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="9F2D3DECC7DDA3BD" classroomids="061761F57F343583" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="CF47F45E9122A33E" classids="4869BB2A0581BD00" subjectid="48EB922270048784" periodspercard="1" periodsperweek="4.0" teacherids="1C271F70D48E6CD1" classroomids="CC208ABF8B76AE7D,18B1D7F8D5FE0B6A" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="36895CE139CE9784" classids="4869BB2A0581BD00" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="1.0" teacherids="9F2D3DECC7DDA3BD" classroomids="061761F57F343583" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="161A8CB35D578C03" classids="4869BB2A0581BD00" subjectid="2281D533BC49A2B5" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="53DEAB4033726B5B" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F458E30BABA44B7D" classids="4869BB2A0581BD00" subjectid="4D9B58A1CED04CB0" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="53DEAB4033726B5B" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0F28CAD948E2D388" classids="4869BB2A0581BD00" subjectid="B25D15940FFE7094" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="53DEAB4033726B5B" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2324BD64A36C8F09" classids="4869BB2A0581BD00" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="303F56E70FD472F3" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3400FBAA2FA9024C" classids="4869BB2A0581BD00" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="D3C1B9B25314573A" classroomids="2044C51FB053D2A8" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D51DB83500FFFE91" classids="4869BB2A0581BD00" subjectid="E1939E3BDDF5FC26" periodspercard="1" periodsperweek="2.0" teacherids="AC2BB52AE3BDB55F" classroomids="A7088E6D2B40FEE7" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="97CB5ED04FC95629" classids="4869BB2A0581BD00" subjectid="925682C41C673196" periodspercard="1" periodsperweek="2.0" teacherids="66F67BC8F80A7C09" classroomids="081AEAE7A605A14B,84FD20D9B1F929D9" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="BF15E5F39D7EE6E0" classids="4869BB2A0581BD00" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="2.0" teacherids="85FD7C042EF4D83D" classroomids="B9B23008B9FCF973" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="EFBF986E9E226F06" classids="4869BB2A0581BD00" subjectid="53EC7146D1EAC70B" periodspercard="1" periodsperweek="2.0" teacherids="A5C432BA36FB3A47" classroomids="B0DBA147EC2F2D0B" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C88EB020310C3478" classids="4869BB2A0581BD00" subjectid="E3ACB1EF64BD7A99" periodspercard="1" periodsperweek="1.0" teacherids="A2EE783FB87E624F" classroomids="54900D815AC9FAEF" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F1E98D2E9C3EB6E0" classids="4869BB2A0581BD00,3E1EC055F1213DF2" subjectid="ABB8DFA5EAE519E1" periodspercard="1" periodsperweek="1.0" teacherids="AE5874DD84BDF66D,D3C1B9B25314573A" classroomids="3D0634BB0DD77C96,2044C51FB053D2A8" groupids="967B5A4739966D8E,C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="635EAE10D180C1C7" classids="4869BB2A0581BD00" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="8B3BC1D7C44CB024" classroomids="081AEAE7A605A14B" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="91B0E12353B8FABF" classids="4869BB2A0581BD00" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="EC5D46CCD4322C2D" classroomids="AD3ECE624CC1384B,54F99E7E624F5A0D" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A555638DFE69A2D2" classids="3E1EC055F1213DF2" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="D43AD73AA56599D7" classroomids="05D782BE80078A44" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7B52D0B8C460FC76" classids="3E1EC055F1213DF2" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="9F2D3DECC7DDA3BD" classroomids="061761F57F343583" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FB34E28B4867B0EB" classids="3E1EC055F1213DF2" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="FBA17F705F735088" classroomids="CC208ABF8B76AE7D,18B1D7F8D5FE0B6A" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="EDD0533EFA65060A" classids="3E1EC055F1213DF2" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="2.0" teacherids="9F2D3DECC7DDA3BD" classroomids="061761F57F343583" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0519A9EC5A5EEAC9" classids="3E1EC055F1213DF2" subjectid="2281D533BC49A2B5" periodspercard="1" periodsperweek="1.0" teacherids="A833DCCDA62D2A79" classroomids="BF33F86DEA1E2A15" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7F1F67CA8C733DDA" classids="3E1EC055F1213DF2" subjectid="4D9B58A1CED04CB0" periodspercard="1" periodsperweek="1.0" teacherids="A833DCCDA62D2A79" classroomids="BF33F86DEA1E2A15" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FF08595B445737F7" classids="3E1EC055F1213DF2" subjectid="B25D15940FFE7094" periodspercard="1" periodsperweek="1.0" teacherids="A833DCCDA62D2A79" classroomids="BF33F86DEA1E2A15" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="376873D2991FC593" classids="3E1EC055F1213DF2" subjectid="3BB49DE12566C880" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="303F56E70FD472F3" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="E97A100E71D8460F" classids="3E1EC055F1213DF2" subjectid="16CFE5036324BB89" periodspercard="1" periodsperweek="1.0" teacherids="D3C1B9B25314573A" classroomids="2044C51FB053D2A8" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1C661758D527BAE8" classids="3E1EC055F1213DF2" subjectid="025B4429860A2CD7" periodspercard="1" periodsperweek="3.0" teacherids="A5C432BA36FB3A47" classroomids="B0DBA147EC2F2D0B,54900D815AC9FAEF" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3B12ECA952A37361" classids="3E1EC055F1213DF2" subjectid="E1939E3BDDF5FC26" periodspercard="1" periodsperweek="2.0" teacherids="A5C432BA36FB3A47" classroomids="B0DBA147EC2F2D0B,54900D815AC9FAEF" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="24E3C004EC9A6F61" classids="3E1EC055F1213DF2" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="2.0" teacherids="85FD7C042EF4D83D" classroomids="B9B23008B9FCF973" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A8BD4AF1311225B3" classids="3E1EC055F1213DF2" subjectid="53EC7146D1EAC70B" periodspercard="1" periodsperweek="2.0" teacherids="A5C432BA36FB3A47" classroomids="B0DBA147EC2F2D0B" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B206BAE0E9999FD3" classids="3E1EC055F1213DF2" subjectid="E3ACB1EF64BD7A99" periodspercard="1" periodsperweek="1.0" teacherids="A2EE783FB87E624F" classroomids="54900D815AC9FAEF" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DCB8C4ED65406F6A" classids="3E1EC055F1213DF2" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="8B3BC1D7C44CB024" classroomids="081AEAE7A605A14B" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1CD44A913F443013" classids="3E1EC055F1213DF2" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="EC5D46CCD4322C2D" classroomids="AD3ECE624CC1384B,54F99E7E624F5A0D" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3187894820E12DAA" classids="53E66FA02E5B0700" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="E2804F04EC95BB20" classroomids="1244DDCC9DA6AF1C" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="06211D8DB2AFDF06" classids="53E66FA02E5B0700" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="E2804F04EC95BB20" classroomids="1244DDCC9DA6AF1C" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="BD6FF47F31179D3E" classids="53E66FA02E5B0700" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="522C2F1FFA1907AD" classroomids="CC208ABF8B76AE7D" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="AF6609D6200FBE79" classids="53E66FA02E5B0700" subjectid="2281D533BC49A2B5" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="BF33F86DEA1E2A15" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A2C66E8605F32125" classids="53E66FA02E5B0700" subjectid="4D9B58A1CED04CB0" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="BF33F86DEA1E2A15" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4A6433997FCE1CA7" classids="53E66FA02E5B0700" subjectid="B25D15940FFE7094" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="BF33F86DEA1E2A15" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7B43AC3C19EA4A40" classids="53E66FA02E5B0700" subjectid="A7E618F47528D826" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="303F56E70FD472F3" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="BD150569337EA742" classids="53E66FA02E5B0700" subjectid="025B4429860A2CD7" periodspercard="1" periodsperweek="3.0" teacherids="360EA33F1D02D687" classroomids="CB369C06D2BF7127" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="378E77679E5A4C26" classids="53E66FA02E5B0700" subjectid="E1939E3BDDF5FC26" periodspercard="1" periodsperweek="2.0" teacherids="360EA33F1D02D687" classroomids="CB369C06D2BF7127" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DD4DE10B4D62D6ED" classids="53E66FA02E5B0700" subjectid="925682C41C673196" periodspercard="1" periodsperweek="2.0" teacherids="66F67BC8F80A7C09" classroomids="081AEAE7A605A14B,84FD20D9B1F929D9" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="41110045A3D984E1" classids="53E66FA02E5B0700" subjectid="53EC7146D1EAC70B" periodspercard="1" periodsperweek="2.0" teacherids="DDA740A65DB8FB81" classroomids="B0DBA147EC2F2D0B" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="922D67DF6359DB5E" classids="53E66FA02E5B0700" subjectid="E3ACB1EF64BD7A99" periodspercard="1" periodsperweek="2.0" teacherids="39B107278060F948" classroomids="54900D815AC9FAEF" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A58381A33FD15F42" classids="53E66FA02E5B0700,165CED8E456D1616" subjectid="ABB8DFA5EAE519E1" periodspercard="1" periodsperweek="1.0" teacherids="AE5874DD84BDF66D,D3C1B9B25314573A" classroomids="3D0634BB0DD77C96,2044C51FB053D2A8" groupids="9439B33F50FCCEF4,99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D8D96292AFCA938F" classids="53E66FA02E5B0700" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="887F7E8DF512A7AC" classroomids="3B11ABA63409B889" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B97D80E3DC39EFE3" classids="53E66FA02E5B0700" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="EA2447653B875E79" classroomids="AD3ECE624CC1384B,54F99E7E624F5A0D" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="26A58AA7585A59EF" classids="53E66FA02E5B0700" subjectid="8F504C6935D64F7E" periodspercard="1" periodsperweek="1.0" teacherids="8B3BC1D7C44CB024" classroomids="081AEAE7A605A14B" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="594C856058710F56" classids="53E66FA02E5B0700" subjectid="DB03B450EA583584" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="53DEAB4033726B5B" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="391341073561558B" classids="53E66FA02E5B0700" subjectid="CC802A76E70FC475" periodspercard="1" periodsperweek="1.0" teacherids="337362269E80F11F" classroomids="BEF30E4E5E3FAD57" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7319E2172DC89B0B" classids="165CED8E456D1616" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="E2804F04EC95BB20" classroomids="1244DDCC9DA6AF1C" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2D9AB7436EBCAE45" classids="165CED8E456D1616" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="E2804F04EC95BB20" classroomids="1244DDCC9DA6AF1C" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A641700F725410EF" classids="165CED8E456D1616" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="1.0" teacherids="5767F763D9D38102" classroomids="061761F57F343583" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="72F0A467170C1E12" classids="165CED8E456D1616" subjectid="2281D533BC49A2B5" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="BF33F86DEA1E2A15" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="10D050BAF218153E" classids="165CED8E456D1616" subjectid="4D9B58A1CED04CB0" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="BF33F86DEA1E2A15" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FB809C462BFE38FA" classids="165CED8E456D1616" subjectid="B25D15940FFE7094" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="BF33F86DEA1E2A15" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7E463A72FABCB35F" classids="165CED8E456D1616" subjectid="A7E618F47528D826" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="303F56E70FD472F3" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7D8057F0D0585C47" classids="165CED8E456D1616" subjectid="025B4429860A2CD7" periodspercard="1" periodsperweek="3.0" teacherids="AC2BB52AE3BDB55F" classroomids="A7088E6D2B40FEE7" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F3D435F9E7556D38" classids="165CED8E456D1616" subjectid="E1939E3BDDF5FC26" periodspercard="1" periodsperweek="2.0" teacherids="AC2BB52AE3BDB55F" classroomids="A7088E6D2B40FEE7" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DFE675BEF78CD25C" classids="165CED8E456D1616" subjectid="925682C41C673196" periodspercard="1" periodsperweek="2.0" teacherids="66F67BC8F80A7C09" classroomids="081AEAE7A605A14B,84FD20D9B1F929D9" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DA127081644973A9" classids="165CED8E456D1616" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="2.0" teacherids="414A9F802207A404" classroomids="B9B23008B9FCF973" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2018B10F03CFA930" classids="165CED8E456D1616" subjectid="53EC7146D1EAC70B" periodspercard="1" periodsperweek="2.0" teacherids="DDA740A65DB8FB81" classroomids="B0DBA147EC2F2D0B" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7F8A4E48C9FD1F13" classids="165CED8E456D1616" subjectid="E3ACB1EF64BD7A99" periodspercard="1" periodsperweek="2.0" teacherids="39B107278060F948" classroomids="54900D815AC9FAEF" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="294A02A1423DF6D3" classids="165CED8E456D1616" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="887F7E8DF512A7AC" classroomids="3B11ABA63409B889" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="45ADBADEF04F8D5F" classids="165CED8E456D1616" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="EA2447653B875E79" classroomids="AD3ECE624CC1384B,54F99E7E624F5A0D" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FDD3F5B64C016B70" classids="165CED8E456D1616" subjectid="8F504C6935D64F7E" periodspercard="1" periodsperweek="1.0" teacherids="8B3BC1D7C44CB024" classroomids="081AEAE7A605A14B" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="21CB35EB35F63825" classids="165CED8E456D1616" subjectid="DB03B450EA583584" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="53DEAB4033726B5B" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="AAED7EB82EF8000C" classids="165CED8E456D1616" subjectid="CC802A76E70FC475" periodspercard="1" periodsperweek="1.0" teacherids="337362269E80F11F" classroomids="BEF30E4E5E3FAD57" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5851E5B4FC46910A" classids="33D72B1C67021087" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="D43AD73AA56599D7" classroomids="F9BFBEA3EAA755E7" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FF279A2B476866A8" classids="33D72B1C67021087" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="E2804F04EC95BB20" classroomids="E2CDDD43564F4404" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="6A010CF29BC80F07" classids="33D72B1C67021087" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="9235D2B470B4CD1A" classroomids="33E6B859AD8D1EE1,AF6ED248539EC883" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DA131360F69AE51C" classids="33D72B1C67021087" subjectid="2281D533BC49A2B5" periodspercard="1" periodsperweek="1.0" teacherids="A833DCCDA62D2A79" classroomids="0E8ABC0D2CCA9638" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8AE5F1511A1F9F98" classids="33D72B1C67021087" subjectid="4D9B58A1CED04CB0" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="0E8ABC0D2CCA9638" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8EC0A588249C3853" classids="33D72B1C67021087" subjectid="B25D15940FFE7094" periodspercard="1" periodsperweek="1.0" teacherids="A833DCCDA62D2A79" classroomids="0E8ABC0D2CCA9638" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="CDB59BAA7FBC0C29" classids="33D72B1C67021087" subjectid="A7E618F47528D826" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="F9C94211E943F513" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7FDA3579FCA4427C" classids="33D72B1C67021087" subjectid="025B4429860A2CD7" periodspercard="1" periodsperweek="3.0" teacherids="AC2BB52AE3BDB55F" classroomids="8562B3E01B3A8F21" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0519EA0219C86100" classids="33D72B1C67021087" subjectid="E1939E3BDDF5FC26" periodspercard="1" periodsperweek="2.0" teacherids="AC2BB52AE3BDB55F" classroomids="8562B3E01B3A8F21" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B500B96C10B81899" classids="33D72B1C67021087" subjectid="925682C41C673196" periodspercard="1" periodsperweek="2.0" teacherids="66F67BC8F80A7C09" classroomids="425DFC212452C41A,BAF17CED8B6302B3" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="AC2332FBCBF02C42" classids="33D72B1C67021087" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="2.0" teacherids="337362269E80F11F" classroomids="BBE8D9B17AB2E7C7" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8ED7C69D52C9B77E" classids="33D72B1C67021087" subjectid="53EC7146D1EAC70B" periodspercard="1" periodsperweek="2.0" teacherids="DDA740A65DB8FB81" classroomids="EAC763AAC87CA3EE" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8F5777982B75ECA9" classids="33D72B1C67021087" subjectid="E3ACB1EF64BD7A99" periodspercard="1" periodsperweek="2.0" teacherids="39B107278060F948" classroomids="F174E9F85E36E906" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B914B6F63CA50732" classids="33D72B1C67021087,AC7FC08FD4E44C39" subjectid="ABB8DFA5EAE519E1" periodspercard="1" periodsperweek="1.0" teacherids="AE5874DD84BDF66D,D3C1B9B25314573A" classroomids="F2A8CBB3E984A461,3E5CAB46B5B8E0ED" groupids="0189D8C4B5C74FFA,48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="6BE5769804B85BDC" classids="33D72B1C67021087" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="887F7E8DF512A7AC" classroomids="B0D423502BE8F8D6" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4C82E71FACB35592" classids="33D72B1C67021087" subjectid="8F504C6935D64F7E" periodspercard="1" periodsperweek="1.0" teacherids="8B3BC1D7C44CB024" classroomids="425DFC212452C41A" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="BD482ED7077AC55F" classids="33D72B1C67021087" subjectid="DB03B450EA583584" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="2467AAB6EC1B0043" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="ADE7F6F9604E98EB" classids="33D72B1C67021087" subjectid="CC802A76E70FC475" periodspercard="1" periodsperweek="1.0" teacherids="337362269E80F11F" classroomids="55AC089DDBC06A70" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4FC3126990F70344" classids="AC7FC08FD4E44C39" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="E2804F04EC95BB20" classroomids="E2CDDD43564F4404" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A2A9F02EA567D59B" classids="AC7FC08FD4E44C39" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="E2804F04EC95BB20" classroomids="E2CDDD43564F4404" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8F499CBCE518BFCF" classids="AC7FC08FD4E44C39" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="1.0" teacherids="5767F763D9D38102" classroomids="A0402F8BECD7C881" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2407D0693EB6F9CB" classids="AC7FC08FD4E44C39" subjectid="2281D533BC49A2B5" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="2467AAB6EC1B0043" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FD85E1F16D9E334F" classids="AC7FC08FD4E44C39" subjectid="4D9B58A1CED04CB0" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="2467AAB6EC1B0043" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D7A2FE969FAE0F0A" classids="AC7FC08FD4E44C39" subjectid="B25D15940FFE7094" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="2467AAB6EC1B0043" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="66534052EBFD4E15" classids="AC7FC08FD4E44C39" subjectid="A7E618F47528D826" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="F9C94211E943F513" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A91A8769A9C990A2" classids="AC7FC08FD4E44C39" subjectid="025B4429860A2CD7" periodspercard="1" periodsperweek="3.0" teacherids="3C64C064FABEF4F7" classroomids="A15E20D77C992831" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="448CB0B9AB7863CC" classids="AC7FC08FD4E44C39" subjectid="E1939E3BDDF5FC26" periodspercard="1" periodsperweek="2.0" teacherids="3C64C064FABEF4F7" classroomids="A15E20D77C992831" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F1973EB58569A050" classids="AC7FC08FD4E44C39" subjectid="925682C41C673196" periodspercard="1" periodsperweek="2.0" teacherids="66F67BC8F80A7C09" classroomids="425DFC212452C41A,BAF17CED8B6302B3" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3BBBE8F99C55320A" classids="AC7FC08FD4E44C39" subjectid="53EC7146D1EAC70B" periodspercard="1" periodsperweek="2.0" teacherids="DDA740A65DB8FB81" classroomids="EAC763AAC87CA3EE" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="75E7808D3C7EDC7D" classids="AC7FC08FD4E44C39" subjectid="E3ACB1EF64BD7A99" periodspercard="1" periodsperweek="2.0" teacherids="39B107278060F948" classroomids="F174E9F85E36E906" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="29F10F14B4076E14" classids="AC7FC08FD4E44C39" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="887F7E8DF512A7AC" classroomids="B0D423502BE8F8D6" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3E68550F79BB7DC2" classids="AC7FC08FD4E44C39" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="6EE94A6C299E0C01" classroomids="121C7291CF88C830,C813B709A5BCCB18" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="513C7C9A71376460" classids="AC7FC08FD4E44C39" subjectid="DB03B450EA583584" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="2467AAB6EC1B0043" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A4B29C81C8BC693B" classids="AC7FC08FD4E44C39" subjectid="CC802A76E70FC475" periodspercard="1" periodsperweek="1.0" teacherids="337362269E80F11F" classroomids="55AC089DDBC06A70" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="557EB5A6C4F524E6" classids="B82450AA95C3D590" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="522C2F1FFA1907AD" classroomids="CC208ABF8B76AE7D" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="715668C3CBFC9A81" classids="B82450AA95C3D590" subjectid="2281D533BC49A2B5" periodspercard="1" periodsperweek="2.0" teacherids="40EA642CCC5460FC" classroomids="BEF30E4E5E3FAD57" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DE00E0C82B64F471" classids="B82450AA95C3D590" subjectid="4D9B58A1CED04CB0" periodspercard="1" periodsperweek="1.0" teacherids="40EA642CCC5460FC" classroomids="BEF30E4E5E3FAD57" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="77C897AC3F58AFCA" classids="B82450AA95C3D590" subjectid="B25D15940FFE7094" periodspercard="1" periodsperweek="1.0" teacherids="40EA642CCC5460FC" classroomids="BEF30E4E5E3FAD57" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="463177C024B53B83" classids="B82450AA95C3D590" subjectid="A7E618F47528D826" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="BF33F86DEA1E2A15" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="732C6C9385F5925D" classids="B82450AA95C3D590" subjectid="925682C41C673196" periodspercard="1" periodsperweek="2.0" teacherids="8B3BC1D7C44CB024" classroomids="081AEAE7A605A14B" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="BF4EBC170D6FEF47" classids="B82450AA95C3D590" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="1.0" teacherids="85FD7C042EF4D83D" classroomids="B9B23008B9FCF973" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="435DB1EC4F315C23" classids="B82450AA95C3D590" subjectid="E3ACB1EF64BD7A99" periodspercard="1" periodsperweek="2.0" teacherids="39B107278060F948" classroomids="54900D815AC9FAEF" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="72382D74369E44D8" classids="B82450AA95C3D590" subjectid="ABB8DFA5EAE519E1" periodspercard="1" periodsperweek="1.0" teacherids="AE5874DD84BDF66D,D3C1B9B25314573A" classroomids="3D0634BB0DD77C96,2044C51FB053D2A8" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="647E8D7B93F494FD" classids="B82450AA95C3D590" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="8B3BC1D7C44CB024" classroomids="081AEAE7A605A14B" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C9A4C1398E82C79E" classids="B82450AA95C3D590" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="EA2447653B875E79" classroomids="AD3ECE624CC1384B,54F99E7E624F5A0D" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="52EBF1D16F7BAB9B" classids="B82450AA95C3D590" subjectid="DB03B450EA583584" periodspercard="1" periodsperweek="1.0" teacherids="337362269E80F11F" classroomids="BEF30E4E5E3FAD57" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="E371820BAFF04AED" classids="B82450AA95C3D590" subjectid="CC802A76E70FC475" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="BF33F86DEA1E2A15" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3C2864AA90D3A930" classids="9C1891180235DBE0" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="522C2F1FFA1907AD" classroomids="33E6B859AD8D1EE1" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="311BE7AF5B6C83A4" classids="9C1891180235DBE0" subjectid="2281D533BC49A2B5" periodspercard="1" periodsperweek="2.0" teacherids="A833DCCDA62D2A79" classroomids="0E8ABC0D2CCA9638" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="565E169311033FB3" classids="9C1891180235DBE0" subjectid="4D9B58A1CED04CB0" periodspercard="1" periodsperweek="1.0" teacherids="40EA642CCC5460FC" classroomids="55AC089DDBC06A70" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4E7E36DFFF592145" classids="9C1891180235DBE0" subjectid="B25D15940FFE7094" periodspercard="1" periodsperweek="1.0" teacherids="40EA642CCC5460FC" classroomids="55AC089DDBC06A70" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="12A16FE28D837484" classids="9C1891180235DBE0" subjectid="A7E618F47528D826" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="0E8ABC0D2CCA9638" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3B5C90B924B3B886" classids="9C1891180235DBE0" subjectid="925682C41C673196" periodspercard="1" periodsperweek="2.0" teacherids="8B3BC1D7C44CB024" classroomids="425DFC212452C41A" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F0CA267C6CAD0EAE" classids="9C1891180235DBE0" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="1.0" teacherids="85FD7C042EF4D83D" classroomids="BBE8D9B17AB2E7C7" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="886260AA0A841D04" classids="9C1891180235DBE0" subjectid="53EC7146D1EAC70B" periodspercard="1" periodsperweek="3.0" teacherids="DDA740A65DB8FB81" classroomids="EAC763AAC87CA3EE" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2DBDE7844575C68E" classids="9C1891180235DBE0" subjectid="E3ACB1EF64BD7A99" periodspercard="1" periodsperweek="2.0" teacherids="39B107278060F948" classroomids="F174E9F85E36E906" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F7C0D71B446E25AD" classids="9C1891180235DBE0" subjectid="ABB8DFA5EAE519E1" periodspercard="1" periodsperweek="1.0" teacherids="AE5874DD84BDF66D,D3C1B9B25314573A" classroomids="F2A8CBB3E984A461,3E5CAB46B5B8E0ED" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="915D91EFC2369999" classids="9C1891180235DBE0" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="EA2447653B875E79" classroomids="121C7291CF88C830,C813B709A5BCCB18" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="666DB187AF48E9EE" classids="9C1891180235DBE0" subjectid="CC802A76E70FC475" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="0E8ABC0D2CCA9638" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="ADCE7E0A0A095EBA" classids="7C5046ED08AB7134" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="E2804F04EC95BB20" classroomids="E2CDDD43564F4404" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="AD58EBCA185337AA" classids="7C5046ED08AB7134" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="E2804F04EC95BB20" classroomids="E2CDDD43564F4404" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="04D11269969BF72C" classids="7C5046ED08AB7134" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="522C2F1FFA1907AD" classroomids="33E6B859AD8D1EE1" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="73CF774F585842D3" classids="7C5046ED08AB7134" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="2.0" teacherids="5767F763D9D38102" classroomids="A0402F8BECD7C881" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="201D4B33F8CAF615" classids="7C5046ED08AB7134" subjectid="2281D533BC49A2B5" periodspercard="1" periodsperweek="2.0" teacherids="40EA642CCC5460FC" classroomids="55AC089DDBC06A70" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="07227EF6F5B4004A" classids="7C5046ED08AB7134" subjectid="4D9B58A1CED04CB0" periodspercard="1" periodsperweek="1.0" teacherids="40EA642CCC5460FC" classroomids="55AC089DDBC06A70" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7F372F96706E4053" classids="7C5046ED08AB7134" subjectid="B25D15940FFE7094" periodspercard="1" periodsperweek="1.0" teacherids="40EA642CCC5460FC" classroomids="55AC089DDBC06A70" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0FBC7C67179B427B" classids="7C5046ED08AB7134" subjectid="A7E618F47528D826" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="0E8ABC0D2CCA9638" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="89673E7FE575C1BC" classids="7C5046ED08AB7134" subjectid="925682C41C673196" periodspercard="1" periodsperweek="2.0" teacherids="A2EE783FB87E624F" classroomids="BAF17CED8B6302B3" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F448BE3AA7EDBC66" classids="7C5046ED08AB7134" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="1.0" teacherids="85FD7C042EF4D83D" classroomids="BBE8D9B17AB2E7C7" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3AA676E01A464203" classids="7C5046ED08AB7134" subjectid="53EC7146D1EAC70B" periodspercard="1" periodsperweek="3.0" teacherids="A5C432BA36FB3A47" classroomids="EAC763AAC87CA3EE" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A55B47A7CF468698" classids="7C5046ED08AB7134" subjectid="E3ACB1EF64BD7A99" periodspercard="1" periodsperweek="2.0" teacherids="39B107278060F948" classroomids="F174E9F85E36E906" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DC89A95BC3780482" classids="7C5046ED08AB7134" subjectid="ABB8DFA5EAE519E1" periodspercard="1" periodsperweek="1.0" teacherids="AE5874DD84BDF66D,D3C1B9B25314573A" classroomids="F2A8CBB3E984A461,3E5CAB46B5B8E0ED" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5E6A59EF7E64C7F1" classids="7C5046ED08AB7134" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="8B3BC1D7C44CB024" classroomids="425DFC212452C41A" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7368819167734CF3" classids="7C5046ED08AB7134" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="EA2447653B875E79" classroomids="121C7291CF88C830,C813B709A5BCCB18" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8EC305636B9666F1" classids="7C5046ED08AB7134" subjectid="DB03B450EA583584" periodspercard="1" periodsperweek="1.0" teacherids="337362269E80F11F" classroomids="55AC089DDBC06A70" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7EC7144BF14849B4" classids="7C5046ED08AB7134" subjectid="CC802A76E70FC475" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="0E8ABC0D2CCA9638" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="14F20528452944AE" classids="1D38E151449F1C37" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="E2804F04EC95BB20" classroomids="1244DDCC9DA6AF1C" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="348215CDAEB0B7DB" classids="1D38E151449F1C37" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="E2804F04EC95BB20" classroomids="1244DDCC9DA6AF1C" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C1CC9BB07C9F6634" classids="1D38E151449F1C37" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="522C2F1FFA1907AD" classroomids="CC208ABF8B76AE7D" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A9435A5E3EB826EC" classids="1D38E151449F1C37" subjectid="2281D533BC49A2B5" periodspercard="1" periodsperweek="2.0" teacherids="40EA642CCC5460FC" classroomids="BEF30E4E5E3FAD57" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7224C35DE95EDB80" classids="1D38E151449F1C37" subjectid="4D9B58A1CED04CB0" periodspercard="1" periodsperweek="1.0" teacherids="40EA642CCC5460FC" classroomids="BEF30E4E5E3FAD57" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A2A26A598EFAEC54" classids="1D38E151449F1C37" subjectid="B25D15940FFE7094" periodspercard="1" periodsperweek="1.0" teacherids="40EA642CCC5460FC" classroomids="BEF30E4E5E3FAD57" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="35CD0C9DA4ACCE8C" classids="1D38E151449F1C37" subjectid="A7E618F47528D826" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="BF33F86DEA1E2A15" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="55630852A10471DF" classids="1D38E151449F1C37" subjectid="025B4429860A2CD7" periodspercard="1" periodsperweek="2.0" teacherids="3C64C064FABEF4F7" classroomids="352C0BD6CE8FC471" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4DF1B717F65FAEBA" classids="1D38E151449F1C37" subjectid="E1939E3BDDF5FC26" periodspercard="1" periodsperweek="2.0" teacherids="3C64C064FABEF4F7" classroomids="352C0BD6CE8FC471" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A6F9489FDC4A5CB9" classids="1D38E151449F1C37" subjectid="925682C41C673196" periodspercard="1" periodsperweek="2.0" teacherids="8B3BC1D7C44CB024" classroomids="081AEAE7A605A14B" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="873D858113640602" classids="1D38E151449F1C37" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="1.0" teacherids="85FD7C042EF4D83D" classroomids="B9B23008B9FCF973" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="06ACD26DAD7EBFE4" classids="1D38E151449F1C37" subjectid="53EC7146D1EAC70B" periodspercard="1" periodsperweek="3.0" teacherids="A5C432BA36FB3A47" classroomids="B0DBA147EC2F2D0B" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B68A29BFBF9906A7" classids="1D38E151449F1C37" subjectid="E3ACB1EF64BD7A99" periodspercard="1" periodsperweek="2.0" teacherids="39B107278060F948" classroomids="54900D815AC9FAEF" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B9C9D80FD8C45E81" classids="1D38E151449F1C37" subjectid="ABB8DFA5EAE519E1" periodspercard="1" periodsperweek="1.0" teacherids="AE5874DD84BDF66D" classroomids="3D0634BB0DD77C96" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8D3320EBD184AB26" classids="1D38E151449F1C37" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="8B3BC1D7C44CB024" classroomids="081AEAE7A605A14B" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="62BC5D45B81720EC" classids="1D38E151449F1C37" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="EA2447653B875E79" classroomids="AD3ECE624CC1384B,54F99E7E624F5A0D" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C8606B59E324DD4E" classids="1D38E151449F1C37" subjectid="DB03B450EA583584" periodspercard="1" periodsperweek="1.0" teacherids="337362269E80F11F" classroomids="BEF30E4E5E3FAD57" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7312BDA377F7DE5E" classids="1D38E151449F1C37" subjectid="CC802A76E70FC475" periodspercard="1" periodsperweek="1.0" teacherids="09774D57C64A6BEA" classroomids="BF33F86DEA1E2A15" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="CDEEBC8F8EE456FC" classids="985049604CEF9C0D,D52EE29D8E4AE732" subjectid="FEAB2708EF064C7D" periodspercard="1" periodsperweek="5.0" teacherids="D43AD73AA56599D7" classroomids="F9BFBEA3EAA755E7" groupids="8C2E2340B252203C,89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="27FAB58B523AE745" classids="20C08674C725FDEC,985049604CEF9C0D,D52EE29D8E4AE732,D6633F54B5C2AD5E" subjectid="6B5697728DE17955" periodspercard="1" periodsperweek="1.0" teacherids="A5C432BA36FB3A47" classroomids="EAC763AAC87CA3EE" groupids="C85D7C86EBAABDEE,8C2E2340B252203C,89D17574EAB80AD7,9856CA8C9AD1EA70" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="532F579E313BF801" classids="20C08674C725FDEC,D6633F54B5C2AD5E" subjectid="6870CDF12112A363" periodspercard="4" periodsperweek="2.0" teacherids="887F7E8DF512A7AC,8BB6C4C1EBE27893" classroomids="1A1977AE9D56AB2E" groupids="C85D7C86EBAABDEE,9856CA8C9AD1EA70" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0663AF2318DF6865" classids="985049604CEF9C0D,D52EE29D8E4AE732" subjectid="6870CDF12112A363" periodspercard="4" periodsperweek="2.0" teacherids="887F7E8DF512A7AC,8BB6C4C1EBE27893" classroomids="1A1977AE9D56AB2E" groupids="8C2E2340B252203C,89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="00A810246C1EEDEE" classids="20C08674C725FDEC" subjectid="FEAB2708EF064C7D" periodspercard="1" periodsperweek="5.0" teacherids="8709C5EA5C52DF4E" classroomids="BCE497B2E99BB2D0,7762136B7D1CC995" groupids="C85D7C86EBAABDEE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0AAC4C39A01D68C4" classids="D6633F54B5C2AD5E" subjectid="0D8086FA9E571AA3" periodspercard="2" periodsperweek="1.0" teacherids="D43AD73AA56599D7" classroomids="F9BFBEA3EAA755E7" groupids="9856CA8C9AD1EA70" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F38193045730870D" classids="985049604CEF9C0D,D52EE29D8E4AE732" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="F87F57CAA6BD60A8" classroomids="121C7291CF88C830,C813B709A5BCCB18" groupids="8C2E2340B252203C,89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="54AE09F01533C43A" classids="20C08674C725FDEC,D6633F54B5C2AD5E" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="F87F57CAA6BD60A8,6EE94A6C299E0C01" classroomids="121C7291CF88C830,C813B709A5BCCB18" groupids="C85D7C86EBAABDEE,9856CA8C9AD1EA70" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="CABCFEF96A2601B8" classids="20C08674C725FDEC,985049604CEF9C0D,D52EE29D8E4AE732,D6633F54B5C2AD5E" subjectid="2B6BF58C60AB6C96" periodspercard="1" periodsperweek="2.0" teacherids="337362269E80F11F" classroomids="55AC089DDBC06A70" groupids="C85D7C86EBAABDEE,8C2E2340B252203C,89D17574EAB80AD7,9856CA8C9AD1EA70" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5C3AF42157D4C0CC" classids="20C08674C725FDEC,985049604CEF9C0D,D6633F54B5C2AD5E,D52EE29D8E4AE732" subjectid="96E4E6C0E60A5877" periodspercard="1" periodsperweek="1.0" teacherids="8BB6C4C1EBE27893" classroomids="1A1977AE9D56AB2E" groupids="C85D7C86EBAABDEE,8C2E2340B252203C,9856CA8C9AD1EA70,89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="27A5FF9D98D8F7AA" classids="20C08674C725FDEC,D6633F54B5C2AD5E,985049604CEF9C0D,D52EE29D8E4AE732" subjectid="A7E618F47528D826" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679,09774D57C64A6BEA" classroomids="0E8ABC0D2CCA9638" groupids="C85D7C86EBAABDEE,9856CA8C9AD1EA70,8C2E2340B252203C,89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4B0840BF3E7B75BE" classids="20C08674C725FDEC" subjectid="E95C190E785E8320" periodspercard="1" periodsperweek="4.0" teacherids="414A9F802207A404" classroomids="2467AAB6EC1B0043" groupids="C85D7C86EBAABDEE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="58E552513883D8E1" classids="1D38E151449F1C37" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="2.0" teacherids="4DE3A36B22930DAB,E686B9BCB6523F54" classroomids="6496F938411058CC,CDDDF785EAD5751A" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5504E05CFAFF1737" classids="7C5046ED08AB7134" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="2.0" teacherids="4DE3A36B22930DAB,E686B9BCB6523F54" classroomids="A4DECA4BD9259ABD" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1076D812FE3A90DA" classids="9C1891180235DBE0" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="2.0" teacherids="4DE3A36B22930DAB,E686B9BCB6523F54" classroomids="A4DECA4BD9259ABD" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A9B6DC07EECB0601" classids="AC7FC08FD4E44C39" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="2.0" teacherids="4DE3A36B22930DAB,E686B9BCB6523F54" classroomids="A4DECA4BD9259ABD" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8FF3388BE126F340" classids="165CED8E456D1616" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="2.0" teacherids="4DE3A36B22930DAB,E686B9BCB6523F54" classroomids="034E0A2787110558" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4A3D2700E60E790D" classids="53E66FA02E5B0700" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="2.0" teacherids="4DE3A36B22930DAB,E686B9BCB6523F54" classroomids="034E0A2787110558" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2C393858E02E08DB" classids="3E1EC055F1213DF2" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="4DE3A36B22930DAB,A662BD78935A0C63" classroomids="034E0A2787110558" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="70C596945EBD7F25" classids="4869BB2A0581BD00" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="E686B9BCB6523F54,A662BD78935A0C63" classroomids="CDDDF785EAD5751A" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="199D729006D2988D" classids="D69373ACA899CDEC" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="E686B9BCB6523F54,A662BD78935A0C63" classroomids="EF8128AF4A254EF1" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F218B2A825061594" classids="F78C9FB5DEF1E0A6" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="4DE3A36B22930DAB,A662BD78935A0C63" classroomids="A4DECA4BD9259ABD" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1FC29FCAD5E0F649" classids="A0F07B781A35EDDC" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="E686B9BCB6523F54,A662BD78935A0C63" classroomids="A4DECA4BD9259ABD,E677B9BE46B5C774" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F420880FA872C580" classids="9A988E7428558D94" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="E686B9BCB6523F54,A662BD78935A0C63" classroomids="EF8128AF4A254EF1" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7ACA2ABBD44FC956" classids="5E1E4F68D45303BA" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="E686B9BCB6523F54,A662BD78935A0C63" classroomids="EF8128AF4A254EF1" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="CA7AB3752EC9C400" classids="0CE26546E99F304D" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="4DE3A36B22930DAB,A662BD78935A0C63" classroomids="034E0A2787110558" groupids="058B6A2588A3FA9E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="237F8850A5AE6D77" classids="9A09F02B6C945E65" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="4DE3A36B22930DAB,A662BD78935A0C63" classroomids="034E0A2787110558" groupids="0F8A87FC7B70C65A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="626A075EC9E2FBBA" classids="A625DA1900F2313E" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="4DE3A36B22930DAB,A662BD78935A0C63" classroomids="A4DECA4BD9259ABD" groupids="9349936B0370D4EC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="54337081F2AE241F" classids="06AFD244066A269E" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="0763DDDAB1631F37,44BE3BE79ACEFB9B" classroomids="E677B9BE46B5C774" groupids="403BF385E429B514" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3C157BC963F9D140" classids="73303F2096460B3F" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="E15EE552D7957E58,8093F8C7C028B7E9" classroomids="A4DECA4BD9259ABD" groupids="D004020F777340B2" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="439795B8C519FC66" classids="01567BCC4E3D94E4" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="FB84DB7B5FC43046,31B3A1B8D1E275A3" classroomids="034E0A2787110558" groupids="938DC3042390B6D8" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4F6953D53618DC72" classids="225323AC6FB62EE6" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="31B3A1B8D1E275A3,15F007ED5EC12D3E" classroomids="034E0A2787110558" groupids="0DBF7BB5338A8CE4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="65AFC3A0E09C27F2" classids="DFC0B23B771EFFE6" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="15F007ED5EC12D3E,FB84DB7B5FC43046" classroomids="6496F938411058CC" groupids="157A948661FE0047" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="090B59381D8BEE4D" classids="35E15A2F3CCB11D2" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="944A7F4FA53038A9" classroomids="034E0A2787110558" groupids="924A7E697B7AA901" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8F00CE1C483436D5" classids="DD368ADB9958BBC4" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="E15EE552D7957E58,44BE3BE79ACEFB9B" classroomids="034E0A2787110558" groupids="39CBD9D8DB902A49" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="09C6026A7128C79D" classids="D3677800D88A8D9F" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="44BE3BE79ACEFB9B,944A7F4FA53038A9" classroomids="034E0A2787110558" groupids="925401D77A17482D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2E34DE66B11A0B12" classids="4869BB2A0581BD00" subjectid="025B4429860A2CD7" periodspercard="1" periodsperweek="3.0" teacherids="D6F407A0107C984B" classroomids="CB369C06D2BF7127,A7088E6D2B40FEE7" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A128B1275948DDAE" classids="B82450AA95C3D590" subjectid="E1939E3BDDF5FC26" periodspercard="1" periodsperweek="2.0" teacherids="D6F407A0107C984B" classroomids="CB369C06D2BF7127,A7088E6D2B40FEE7" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="ADAD3D80DA66B1DF" classids="B82450AA95C3D590" subjectid="025B4429860A2CD7" periodspercard="1" periodsperweek="2.0" teacherids="D6F407A0107C984B" classroomids="CB369C06D2BF7127,A7088E6D2B40FEE7" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F88233C7FF60A85A" classids="9C1891180235DBE0" subjectid="025B4429860A2CD7" periodspercard="1" periodsperweek="2.0" teacherids="D6F407A0107C984B" classroomids="8562B3E01B3A8F21,8DD1FBCCC276E6CB" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A28F9014460C07F4" classids="985049604CEF9C0D,D52EE29D8E4AE732" subjectid="C41A2A002E54689B" periodspercard="2" periodsperweek="1.0" teacherids="A662BD78935A0C63,DDA740A65DB8FB81" classroomids="EF8128AF4A254EF1" groupids="8C2E2340B252203C,89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="77575AFD2E46C7EE" classids="3E1EC055F1213DF2" subjectid="B5299934683B3E88" periodspercard="1" periodsperweek="2.0" teacherids="4DE3A36B22930DAB,A662BD78935A0C63" classroomids="034E0A2787110558" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="3AA76C611DD175E6" classids="D69373ACA899CDEC" subjectid="B5299934683B3E88" periodspercard="1" periodsperweek="2.0" teacherids="4DE3A36B22930DAB,A662BD78935A0C63" classroomids="A4DECA4BD9259ABD" groupids="BCBC3CBA4D81ED05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C7F0E07909765A95" classids="A0F07B781A35EDDC" subjectid="B5299934683B3E88" periodspercard="1" periodsperweek="2.0" teacherids="DDA740A65DB8FB81,A662BD78935A0C63" classroomids="E677B9BE46B5C774" groupids="9D03C7226A3F23E9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="9949A122E0AEAD89" classids="A625DA1900F2313E" subjectid="3832E7BE08CB3935" periodspercard="1" periodsperweek="1.0" teacherids="DDA740A65DB8FB81,A662BD78935A0C63" classroomids="E677B9BE46B5C774" groupids="9349936B0370D4EC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7FF7B6774478676D" classids="9A09F02B6C945E65" subjectid="3832E7BE08CB3935" periodspercard="1" periodsperweek="1.0" teacherids="DDA740A65DB8FB81,A662BD78935A0C63" classroomids="6496F938411058CC" groupids="0F8A87FC7B70C65A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="67F1F4D7199F54DF" classids="0CE26546E99F304D" subjectid="3832E7BE08CB3935" periodspercard="1" periodsperweek="1.0" teacherids="DDA740A65DB8FB81,A662BD78935A0C63" classroomids="6496F938411058CC" groupids="058B6A2588A3FA9E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="068CEFFA72787412" classids="5E1E4F68D45303BA" subjectid="3832E7BE08CB3935" periodspercard="1" periodsperweek="2.0" teacherids="DDA740A65DB8FB81,A662BD78935A0C63" classroomids="E677B9BE46B5C774" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C54C5ED53A0BD2A1" classids="9A988E7428558D94" subjectid="3832E7BE08CB3935" periodspercard="1" periodsperweek="2.0" teacherids="DDA740A65DB8FB81,A662BD78935A0C63" classroomids="E677B9BE46B5C774" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C86526340D627EB1" classids="F78C9FB5DEF1E0A6" subjectid="3832E7BE08CB3935" periodspercard="1" periodsperweek="2.0" teacherids="E686B9BCB6523F54,A662BD78935A0C63" classroomids="EF8128AF4A254EF1" groupids="7EB37E60FD58592A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="89D067F9FA932C3E" classids="4869BB2A0581BD00" subjectid="3832E7BE08CB3935" periodspercard="1" periodsperweek="2.0" teacherids="E686B9BCB6523F54,A662BD78935A0C63" classroomids="CDDDF785EAD5751A" groupids="967B5A4739966D8E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B6760CCAF0DF7187" classids="7EA977BFD3FECDF8" subjectid="9AA64C54BA9BD285" periodspercard="1" periodsperweek="0.5" teacherids="D0955D86CB39A473" classroomids="F08C42F2BA7CD261" groupids="58D92A325270681D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A8A6DB59E2BECF6C" classids="7EA977BFD3FECDF8" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="D0955D86CB39A473,D748D6ECFCB0665C" classroomids="A4DECA4BD9259ABD" groupids="58D92A325270681D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8FB25A1958A65ADD" classids="B66DCEBE75D1300B" subjectid="1E620A3B6B0A1F76" periodspercard="1" periodsperweek="4.0" teacherids="AAA79985E1AAD4E1" classroomids="84FD20D9B1F929D9" groupids="4639B9E9D5E2B7FC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8C9E112165DC7998" classids="B66DCEBE75D1300B" subjectid="1E620A3B6B0A1F76" periodspercard="1" periodsperweek="2.0" teacherids="AAA79985E1AAD4E1" classroomids="84FD20D9B1F929D9" groupids="7FC557029EA2CDBA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="852960F4C1C8C9FB" classids="B66DCEBE75D1300B" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="2.0" teacherids="D43AD73AA56599D7" classroomids="05D782BE80078A44" groupids="4639B9E9D5E2B7FC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="599E6D8C10036029" classids="7EA977BFD3FECDF8" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="24B5758E49450515" classroomids="6F3B649BAE93C7ED,121C7291CF88C830,C813B709A5BCCB18" groupids="58D92A325270681D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="16FE0A0CAE067A09" classids="06AFD244066A269E" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="24B5758E49450515" classroomids="6F3B649BAE93C7ED,121C7291CF88C830,C813B709A5BCCB18" groupids="403BF385E429B514" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="357E7EE0506A8BEF" classids="73303F2096460B3F" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="24B5758E49450515" classroomids="6F3B649BAE93C7ED,121C7291CF88C830,C813B709A5BCCB18" groupids="D004020F777340B2" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B9AF5CF220C64EEF" classids="985049604CEF9C0D,D52EE29D8E4AE732" subjectid="025B4429860A2CD7" periodspercard="1" periodsperweek="2.0" teacherids="D6F407A0107C984B" classroomids="8562B3E01B3A8F21,8DD1FBCCC276E6CB,EAC763AAC87CA3EE,F174E9F85E36E906" groupids="8C2E2340B252203C,89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4442792CA17DC3D0" classids="985049604CEF9C0D,D52EE29D8E4AE732" subjectid="E1939E3BDDF5FC26" periodspercard="1" periodsperweek="1.0" teacherids="D6F407A0107C984B" classroomids="8562B3E01B3A8F21,8DD1FBCCC276E6CB,F174E9F85E36E906" groupids="8C2E2340B252203C,89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C8FC6DD1040B8D76" classids="D6633F54B5C2AD5E" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="2.0" teacherids="622A637A3B3EB137" classroomids="BCE497B2E99BB2D0,E2CDDD43564F4404,F9BFBEA3EAA755E7,7762136B7D1CC995" groupids="9856CA8C9AD1EA70" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4FF9FF180B552BE1" classids="01567BCC4E3D94E4" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="24B5758E49450515" classroomids="420EE7E5B29DC772,AD3ECE624CC1384B,54F99E7E624F5A0D" groupids="938DC3042390B6D8" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4F775B0CE54D7A08" classids="0C7AB6AB89F65714" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="EC5D46CCD4322C2D" classroomids="420EE7E5B29DC772,AD3ECE624CC1384B,54F99E7E624F5A0D" groupids="8F33371218BE7F05" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C127F3ACB8E734AF" classids="20C08674C725FDEC,985049604CEF9C0D,D52EE29D8E4AE732,D6633F54B5C2AD5E" subjectid="F3614AE8805C9C2C" periodspercard="1" periodsperweek="1.0" teacherids="8B3BC1D7C44CB024,887F7E8DF512A7AC" classroomids="425DFC212452C41A,BAF17CED8B6302B3" groupids="C85D7C86EBAABDEE,8C2E2340B252203C,89D17574EAB80AD7,9856CA8C9AD1EA70" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="551E7B739F2AE919" classids="D52EE29D8E4AE732,D6633F54B5C2AD5E,985049604CEF9C0D,20C08674C725FDEC" subjectid="3F12B472B0CDBD47" periodspercard="1" periodsperweek="4.0" teacherids="66F67BC8F80A7C09,887F7E8DF512A7AC" classroomids="425DFC212452C41A" groupids="89D17574EAB80AD7,9856CA8C9AD1EA70,8C2E2340B252203C,C85D7C86EBAABDEE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4D3CE00BFD7ADED1" classids="AC7FC08FD4E44C39" subjectid="8F504C6935D64F7E" periodspercard="1" periodsperweek="1.0" teacherids="8B3BC1D7C44CB024" classroomids="425DFC212452C41A,BBE8D9B17AB2E7C7" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F16E9D78F8EDE751" classids="D6633F54B5C2AD5E" subjectid="7B42EC5D4EB11798" periodspercard="1" periodsperweek="2.0" teacherids="622A637A3B3EB137" classroomids="BCE497B2E99BB2D0,7762136B7D1CC995" groupids="9856CA8C9AD1EA70" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="86EDAB5925970756" classids="33D72B1C67021087" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="2.0" teacherids="4DE3A36B22930DAB,E686B9BCB6523F54" classroomids="A4DECA4BD9259ABD" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="497563FA36B5735E" classids="DFC0B23B771EFFE6" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="24B5758E49450515" classroomids="420EE7E5B29DC772,AD3ECE624CC1384B,54F99E7E624F5A0D" groupids="157A948661FE0047" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7AC9C57481C050D2" classids="F6261B0BDDF509CA" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="EC5D46CCD4322C2D" classroomids="420EE7E5B29DC772,54F99E7E624F5A0D" groupids="B1CCA6FB85B916DD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="61C6E6BA25083882" classids="53E66FA02E5B0700" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="1.0" teacherids="5767F763D9D38102" classroomids="061761F57F343583,CA99F1B4146D0833" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7A4157BB1005276B" classids="33D72B1C67021087" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="1.0" teacherids="5767F763D9D38102" classroomids="A0402F8BECD7C881,7762136B7D1CC995" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4182DEE99C462A09" classids="9C1891180235DBE0" subjectid="E1939E3BDDF5FC26" periodspercard="1" periodsperweek="2.0" teacherids="D6F407A0107C984B" classroomids="8DD1FBCCC276E6CB,8562B3E01B3A8F21,F174E9F85E36E906" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="58E36C3C722DBF19" classids="A625DA1900F2313E" subjectid="9BC6DA947B5DC75F" periodspercard="1" periodsperweek="5.0" teacherids="D6F407A0107C984B" classroomids="8DD1FBCCC276E6CB,8562B3E01B3A8F21,F174E9F85E36E906" groupids="9349936B0370D4EC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="AF187C5DC9791341" classids="B66DCEBE75D1300B" subjectid="6870CDF12112A363" periodspercard="4" periodsperweek="2.0" teacherids="F87F57CAA6BD60A8,887F7E8DF512A7AC" classroomids="9BB8E55190DDFBD2" groupids="A721DD311738FAC6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="84161F2D91D70B09" classids="FE9009F3C44EA134" subjectid="ABB8DFA5EAE519E1" periodspercard="4" periodsperweek="2.0" teacherids="AE5874DD84BDF66D,D3C1B9B25314573A" classroomids="3D0634BB0DD77C96,2044C51FB053D2A8" groupids="344968159A2E28DE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="358933B3CF5CCBCE" classids="FE9009F3C44EA134" subjectid="6870CDF12112A363" periodspercard="4" periodsperweek="2.0" teacherids="F87F57CAA6BD60A8,887F7E8DF512A7AC" classroomids="9BB8E55190DDFBD2" groupids="344968159A2E28DE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DC72F7642EEC6DCB" classids="3E1EC055F1213DF2" subjectid="925682C41C673196" periodspercard="1" periodsperweek="2.0" teacherids="66F67BC8F80A7C09" classroomids="081AEAE7A605A14B,84FD20D9B1F929D9" groupids="C5E856520D8E858B" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="E63EEAA9034F55CA" classids="9A09F02B6C945E65" subjectid="48EB922270048784" periodspercard="1" periodsperweek="4.0" teacherids="FBA17F705F735088" classroomids="18B1D7F8D5FE0B6A,CC208ABF8B76AE7D,CA99F1B4146D0833,A34C5EB2922E231A" groupids="0F8A87FC7B70C65A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7AE5D452A4EE5199" classids="1D38E151449F1C37" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="2.0" teacherids="5767F763D9D38102" classroomids="061761F57F343583,CA99F1B4146D0833,A34C5EB2922E231A,05D782BE80078A44" groupids="7D8BCA16F4FA1F87" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="10915798B1B339AA" classids="B82450AA95C3D590" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="2.0" teacherids="5767F763D9D38102" classroomids="061761F57F343583,303F56E70FD472F3" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="666094803D387BA8" classids="9C1891180235DBE0" subjectid="DB03B450EA583584" periodspercard="1" periodsperweek="1.0" teacherids="337362269E80F11F" classroomids="55AC089DDBC06A70,0E8ABC0D2CCA9638" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="05A1B7568B9BC88B" classids="A625DA1900F2313E" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="4.0" teacherids="CF998705E4252E28" classroomids="7762136B7D1CC995,E2CDDD43564F4404" groupids="9349936B0370D4EC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="91836C0A23CF70B7" classids="A625DA1900F2313E" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="1.0" teacherids="5767F763D9D38102" classroomids="A0402F8BECD7C881,7762136B7D1CC995,BCE497B2E99BB2D0,F9BFBEA3EAA755E7" groupids="9349936B0370D4EC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4B71CCE75C97D22E" classids="FE9009F3C44EA134" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="622A637A3B3EB137" classroomids="1244DDCC9DA6AF1C,05D782BE80078A44" groupids="344968159A2E28DE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5E2CC1BC9C86FCC1" classids="B66DCEBE75D1300B" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="622A637A3B3EB137" classroomids="1244DDCC9DA6AF1C,05D782BE80078A44" groupids="A721DD311738FAC6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FC1AC967767E8A92" classids="B66DCEBE75D1300B" subjectid="C3B8F9ABC4F6787F" periodspercard="1" periodsperweek="2.0" teacherids="522C2F1FFA1907AD,1E0727688BE68056" classroomids="CC208ABF8B76AE7D" groupids="A721DD311738FAC6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="DCE0A025F7A4E22A" classids="FE9009F3C44EA134" subjectid="C3B8F9ABC4F6787F" periodspercard="1" periodsperweek="2.0" teacherids="522C2F1FFA1907AD,1E0727688BE68056" classroomids="CC208ABF8B76AE7D" groupids="344968159A2E28DE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="E4FA1845C181693C" classids="AC7FC08FD4E44C39" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="9235D2B470B4CD1A" classroomids="33E6B859AD8D1EE1,AF6ED248539EC883" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="28ADBF199A50EECE" classids="5E1E4F68D45303BA" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="9235D2B470B4CD1A,1E0727688BE68056" classroomids="33E6B859AD8D1EE1,AF6ED248539EC883,7762136B7D1CC995" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1B61337B9455333F" classids="20C08674C725FDEC,985049604CEF9C0D,D6633F54B5C2AD5E,D52EE29D8E4AE732" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="1C271F70D48E6CD1,1E0727688BE68056,9235D2B470B4CD1A" classroomids="AF6ED248539EC883" groupids="C85D7C86EBAABDEE,8C2E2340B252203C,9856CA8C9AD1EA70,89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="433EE3A8468755A4" classids="9A988E7428558D94" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="4.0" teacherids="8709C5EA5C52DF4E,622A637A3B3EB137" classroomids="7762136B7D1CC995" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="CDEA0256EBDD3C7B" classids="5E1E4F68D45303BA" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="4.0" teacherids="8709C5EA5C52DF4E,622A637A3B3EB137" classroomids="BCE497B2E99BB2D0" groupids="F42859C0B1862C7A" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="48329C7FCC893E37" classids="FE9009F3C44EA134" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="2.0" teacherids="622A637A3B3EB137,D43AD73AA56599D7" classroomids="CA99F1B4146D0833,05D782BE80078A44" groupids="344968159A2E28DE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4B27FB06F55ED69C" classids="B66DCEBE75D1300B" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="4.0" teacherids="622A637A3B3EB137" classroomids="1244DDCC9DA6AF1C,05D782BE80078A44" groupids="7FC557029EA2CDBA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="AB1BA1C4DB91A612" classids="53E66FA02E5B0700" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="2.0" teacherids="DDA740A65DB8FB81" classroomids="B9B23008B9FCF973,84FD20D9B1F929D9" groupids="9439B33F50FCCEF4" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="6ABBB19331129503" classids="0CE26546E99F304D" subjectid="48EB922270048784" periodspercard="1" periodsperweek="4.0" teacherids="FBA17F705F735088" classroomids="18B1D7F8D5FE0B6A,CC208ABF8B76AE7D,1244DDCC9DA6AF1C,A34C5EB2922E231A" groupids="058B6A2588A3FA9E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="56EC229E9299BDA8" classids="B82450AA95C3D590" subjectid="53EC7146D1EAC70B" periodspercard="1" periodsperweek="3.0" teacherids="DDA740A65DB8FB81" classroomids="B0DBA147EC2F2D0B,54900D815AC9FAEF" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2ABB5F726EB6C0F5" classids="9C1891180235DBE0" subjectid="0DCC95B8192887C5" periodspercard="1" periodsperweek="2.0" teacherids="5767F763D9D38102" classroomids="A0402F8BECD7C881,BCE497B2E99BB2D0,7762136B7D1CC995,F9BFBEA3EAA755E7,F9C94211E943F513,E2CDDD43564F4404,33E6B859AD8D1EE1" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C92F124710AB526B" classids="DD368ADB9958BBC4" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="6EE94A6C299E0C01" classroomids="420EE7E5B29DC772,54F99E7E624F5A0D" groupids="39CBD9D8DB902A49" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="03668DDE402F9918" classids="AC7FC08FD4E44C39" subjectid="9E402EE47E0FA04C" periodspercard="1" periodsperweek="2.0" teacherids="414A9F802207A404" classroomids="2467AAB6EC1B0043" groupids="48A1FD4D56AC1A20" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="CCB5EB538D7F5869" classids="9A988E7428558D94" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="9235D2B470B4CD1A,1E0727688BE68056" classroomids="33E6B859AD8D1EE1,AF6ED248539EC883,7762136B7D1CC995" groupids="30A298CC0588B655" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1B9BF35157241BC4" classids="20C08674C725FDEC" subjectid="7461D1A9573CEAD9" periodspercard="2" periodsperweek="1.0" teacherids="09774D57C64A6BEA,414A9F802207A404" classroomids="55AC089DDBC06A70" groupids="C85D7C86EBAABDEE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1625165B754DE77D" classids="20C08674C725FDEC" subjectid="96E4527D8C0765E2" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404,09774D57C64A6BEA" classroomids="2467AAB6EC1B0043" groupids="C85D7C86EBAABDEE" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="11F7D734DCFE6A54" classids="165CED8E456D1616" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="9235D2B470B4CD1A" classroomids="CC208ABF8B76AE7D,18B1D7F8D5FE0B6A,1244DDCC9DA6AF1C" groupids="99C6951D82472BDD" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="806E21D402FB9752" classids="D6633F54B5C2AD5E" subjectid="25AF640E348455DD" periodspercard="1" periodsperweek="2.0" teacherids="622A637A3B3EB137" classroomids="BCE497B2E99BB2D0,E2CDDD43564F4404,F9BFBEA3EAA755E7,7762136B7D1CC995" groupids="9856CA8C9AD1EA70" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FFCB42EBE90238EC" classids="20C08674C725FDEC,D6633F54B5C2AD5E" subjectid="955F65ECBA6FDC3A" periodspercard="1" periodsperweek="1.0" teacherids="D43AD73AA56599D7" classroomids="F9BFBEA3EAA755E7" groupids="C85D7C86EBAABDEE,9856CA8C9AD1EA70" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B047E269DFAF4159" classids="985049604CEF9C0D" subjectid="C41A2A002E54689B" periodspercard="1" periodsperweek="1.0" teacherids="A662BD78935A0C63" classroomids="EF8128AF4A254EF1" groupids="8C2E2340B252203C" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4315625C3D92B1E4" classids="D52EE29D8E4AE732" subjectid="C41A2A002E54689B" periodspercard="1" periodsperweek="1.0" teacherids="DDA740A65DB8FB81" classroomids="E677B9BE46B5C774" groupids="89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="1166A8A95AB988BE" classids="20C08674C725FDEC,D6633F54B5C2AD5E,D52EE29D8E4AE732,985049604CEF9C0D" subjectid="72281D4D1975B574" periodspercard="1" periodsperweek="2.0" teacherids="1E0727688BE68056" classroomids="AF6ED248539EC883" groupids="C85D7C86EBAABDEE,9856CA8C9AD1EA70,89D17574EAB80AD7,8C2E2340B252203C" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FFCE9AE361D1DB13" classids="D52EE29D8E4AE732,20C08674C725FDEC,D6633F54B5C2AD5E" subjectid="72281D4D1975B574" periodspercard="1" periodsperweek="1.0" teacherids="1E0727688BE68056" classroomids="AF6ED248539EC883" groupids="89D17574EAB80AD7,C85D7C86EBAABDEE,9856CA8C9AD1EA70" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="06007406CE6BED17" classids="20C08674C725FDEC,985049604CEF9C0D,D6633F54B5C2AD5E" subjectid="8F504C6935D64F7E" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="2467AAB6EC1B0043" groupids="C85D7C86EBAABDEE,8C2E2340B252203C,9856CA8C9AD1EA70" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8E35ECBD88AD82E9" classids="985049604CEF9C0D,20C08674C725FDEC,D6633F54B5C2AD5E,D52EE29D8E4AE732" subjectid="8F504C6935D64F7E" periodspercard="1" periodsperweek="1.0" teacherids="414A9F802207A404" classroomids="2467AAB6EC1B0043" groupids="8C2E2340B252203C,C85D7C86EBAABDEE,9856CA8C9AD1EA70,89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="4CAC87908F93DDE8" classids="7EA977BFD3FECDF8" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="D0955D86CB39A473" classroomids="F08C42F2BA7CD261" groupids="0B4833850C8771B9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="BA5BA9BB941FDCD2" classids="7EA977BFD3FECDF8" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="0.5" teacherids="D0955D86CB39A473" classroomids="F08C42F2BA7CD261" groupids="CD9E63204E2A6331" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="58A0B793A2DED569" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="EEB4923B9705F0D5" classids="7EA977BFD3FECDF8" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="0.5" teacherids="D0955D86CB39A473" classroomids="F08C42F2BA7CD261" groupids="0B4833850C8771B9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="E7EFE184022161E4" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F3688AAE665E194E" classids="7EA977BFD3FECDF8" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="D0955D86CB39A473" classroomids="F08C42F2BA7CD261" groupids="CD9E63204E2A6331" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="63B7D971AFC18F17" classids="7EA977BFD3FECDF8" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="1E0727688BE68056" classroomids="2BA54C5FE0B7394F,DF7822A96933292D" groupids="CD9E63204E2A6331" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F493AA08F5E88348" classids="7EA977BFD3FECDF8" subjectid="48EB922270048784" periodspercard="1" periodsperweek="0.5" teacherids="1E0727688BE68056" classroomids="2BA54C5FE0B7394F,DF7822A96933292D" groupids="CD9E63204E2A6331" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="E7EFE184022161E4" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="9A12D926D8726D83" classids="7EA977BFD3FECDF8" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="9235D2B470B4CD1A" classroomids="2BA54C5FE0B7394F,2FD45013DE2A5063" groupids="0B4833850C8771B9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="09A5CD5921112061" classids="7EA977BFD3FECDF8" subjectid="48EB922270048784" periodspercard="1" periodsperweek="0.5" teacherids="9235D2B470B4CD1A" classroomids="2BA54C5FE0B7394F,2FD45013DE2A5063" groupids="0B4833850C8771B9" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="58A0B793A2DED569" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8B6FED1782AF5C34" classids="9C1891180235DBE0" subjectid="6C5083445942D1D8" periodspercard="1" periodsperweek="1.0" teacherids="8B3BC1D7C44CB024" classroomids="425DFC212452C41A,B0D423502BE8F8D6" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A7DC1A26F91DE9BE" classids="06AFD244066A269E" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="1E0727688BE68056" classroomids="CFF7D3B7BA73393E" groupids="B48E146C5E7F9FF6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A20767BE2CE79F05" classids="06AFD244066A269E" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="0763DDDAB1631F37" classroomids="CFF7D3B7BA73393E" groupids="B48E146C5E7F9FF6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="E7622ADFB66CC636" classids="06AFD244066A269E" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="0.5" teacherids="0763DDDAB1631F37" classroomids="CFF7D3B7BA73393E" groupids="B48E146C5E7F9FF6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="58A0B793A2DED569" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A666D964821889E8" classids="06AFD244066A269E" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="0.5" teacherids="0763DDDAB1631F37" classroomids="CFF7D3B7BA73393E" groupids="D45875C5DF1326A1" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="E7EFE184022161E4" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7F80691C93B9CE9E" classids="06AFD244066A269E" subjectid="4EDD024D7AA4881E" periodspercard="1" periodsperweek="0.5" teacherids="0763DDDAB1631F37" classroomids="CFF7D3B7BA73393E" groupids="403BF385E429B514" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="8FAA22DF025953B6" classids="06AFD244066A269E" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="D6F407A0107C984B" classroomids="CFF7D3B7BA73393E,DF7822A96933292D,2FD45013DE2A5063,7EEA95B50C265F8F,F08C42F2BA7CD261" groupids="D45875C5DF1326A1" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="CA4EBE7FCA162B76" classids="06AFD244066A269E" subjectid="48EB922270048784" periodspercard="1" periodsperweek="0.5" teacherids="D6F407A0107C984B" classroomids="CFF7D3B7BA73393E,DF7822A96933292D,2FD45013DE2A5063,7EEA95B50C265F8F,F08C42F2BA7CD261" groupids="D45875C5DF1326A1" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="58A0B793A2DED569" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="9121D914E0CB6143" classids="06AFD244066A269E" subjectid="48EB922270048784" periodspercard="1" periodsperweek="0.5" teacherids="1E0727688BE68056" classroomids="CFF7D3B7BA73393E,DF7822A96933292D,2FD45013DE2A5063,7EEA95B50C265F8F,F08C42F2BA7CD261" groupids="B48E146C5E7F9FF6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A61F9E5B2ADDFDEF" classids="06AFD244066A269E" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="0763DDDAB1631F37" classroomids="CFF7D3B7BA73393E,7EEA95B50C265F8F,DF7822A96933292D,2FD45013DE2A5063" groupids="D45875C5DF1326A1" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="B9F05BF816A30D8E" classids="01567BCC4E3D94E4" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="FB84DB7B5FC43046" classroomids="29FF747B4241426D" groupids="D11EF1339D28E1EB" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="14DDBD82346ED9C8" classids="01567BCC4E3D94E4" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="1C271F70D48E6CD1" classroomids="29FF747B4241426D,FBADE5F971FB9E91,37E5FB48DF6CAE46,834B8B86280BE28C" groupids="1AE202223F2D2D5F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C4F179ED21837983" classids="01567BCC4E3D94E4" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="FB84DB7B5FC43046" classroomids="29FF747B4241426D" groupids="1AE202223F2D2D5F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F8BF22F84C64FE4A" classids="01567BCC4E3D94E4" subjectid="48EB922270048784" periodspercard="1" periodsperweek="3.0" teacherids="FBA17F705F735088" classroomids="834B8B86280BE28C,FBADE5F971FB9E91,37E5FB48DF6CAE46" groupids="D11EF1339D28E1EB" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="547B4FB24004BA8B" classids="01567BCC4E3D94E4" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="0.5" teacherids="FB84DB7B5FC43046" classroomids="29FF747B4241426D" groupids="D11EF1339D28E1EB" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7DEDB69FDA1FD61D" classids="01567BCC4E3D94E4" subjectid="48EB922270048784" periodspercard="1" periodsperweek="0.5" teacherids="FBA17F705F735088" classroomids="37E5FB48DF6CAE46,834B8B86280BE28C,FBADE5F971FB9E91" groupids="D11EF1339D28E1EB" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2C44194672D7727C" classids="01567BCC4E3D94E4" subjectid="48EB922270048784" periodspercard="1" periodsperweek="0.5" teacherids="1C271F70D48E6CD1" classroomids="FBADE5F971FB9E91,37E5FB48DF6CAE46,834B8B86280BE28C" groupids="1AE202223F2D2D5F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="7BC65656F3B14215" classids="01567BCC4E3D94E4" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="0.5" teacherids="FB84DB7B5FC43046" classroomids="29FF747B4241426D" groupids="1AE202223F2D2D5F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="A34176229C41E581" classids="01567BCC4E3D94E4" subjectid="4EDD024D7AA4881E" periodspercard="1" periodsperweek="0.5" teacherids="FB84DB7B5FC43046" classroomids="29FF747B4241426D" groupids="938DC3042390B6D8" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="2C799EF94D818582" classids="B66DCEBE75D1300B" subjectid="ABB8DFA5EAE519E1" periodspercard="4" periodsperweek="2.0" teacherids="AE5874DD84BDF66D,D3C1B9B25314573A" classroomids="3D0634BB0DD77C96,2044C51FB053D2A8" groupids="A721DD311738FAC6" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C721A551A8852913" classids="20C08674C725FDEC,D6633F54B5C2AD5E" subjectid="ABB8DFA5EAE519E1" periodspercard="2" periodsperweek="1.0" teacherids="AE5874DD84BDF66D,D3C1B9B25314573A" classroomids="F2A8CBB3E984A461" groupids="C85D7C86EBAABDEE,9856CA8C9AD1EA70" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="127AAE8216AC6A93" classids="985049604CEF9C0D,D52EE29D8E4AE732" subjectid="ABB8DFA5EAE519E1" periodspercard="2" periodsperweek="1.0" teacherids="AE5874DD84BDF66D" classroomids="F2A8CBB3E984A461" groupids="8C2E2340B252203C,89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="17FDB60AD9868E3D" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="306665C4EBEC0828" classids="B82450AA95C3D590" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="2.0" teacherids="B2C2EF22E7FD56EF,E686B9BCB6523F54" classroomids="6496F938411058CC,CDDDF785EAD5751A,034E0A2787110558" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="C57B94AB5F8EBE4A" classids="20C08674C725FDEC,985049604CEF9C0D,D6633F54B5C2AD5E,D52EE29D8E4AE732" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="B2C2EF22E7FD56EF,DDA740A65DB8FB81,A662BD78935A0C63,4DE3A36B22930DAB" classroomids="EAC763AAC87CA3EE" groupids="C85D7C86EBAABDEE,8C2E2340B252203C,9856CA8C9AD1EA70,89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5CE73825B2A0B438" classids="33D72B1C67021087" subjectid="E12CC3D3248F0382" periodspercard="1" periodsperweek="3.0" teacherids="6EE94A6C299E0C01" classroomids="121C7291CF88C830,C813B709A5BCCB18,61E630D003A7DE74" groupids="0189D8C4B5C74FFA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="5FFBEE8C961180E3" classids="FE9009F3C44EA134,B66DCEBE75D1300B" subjectid="AA871DA36C6FCCA9" periodspercard="1" periodsperweek="1.0" teacherids="4DE3A36B22930DAB,E686B9BCB6523F54" classroomids="034E0A2787110558" groupids="1FCAAE812518394C,4639B9E9D5E2B7FC" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="9F58E3FC721B707A" classids="FE9009F3C44EA134,B66DCEBE75D1300B" subjectid="A7E618F47528D826" periodspercard="1" periodsperweek="1.0" teacherids="274AC9EE12D0C679" classroomids="303F56E70FD472F3" groupids="9C13DBA02B7687E4,7FC557029EA2CDBA" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="72A44F4175F7F1BC" classids="985049604CEF9C0D,D52EE29D8E4AE732" subjectid="3ECA95D18AD687D9" periodspercard="1" periodsperweek="2.0" teacherids="EA2447653B875E79" classroomids="6F3B649BAE93C7ED" groupids="8C2E2340B252203C,89D17574EAB80AD7" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="67D62555C442B0AE" classids="B82450AA95C3D590" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="8709C5EA5C52DF4E" classroomids="A34C5EB2922E231A,05D782BE80078A44" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="0627102C7C4C9B56" classids="B82450AA95C3D590" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="8709C5EA5C52DF4E" classroomids="A34C5EB2922E231A,05D782BE80078A44" groupids="31273EABEFF91F8D" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="D1E4B02BC5C17BD0" classids="9C1891180235DBE0" subjectid="4E68EE2BC3D7EC6B" periodspercard="1" periodsperweek="3.0" teacherids="8709C5EA5C52DF4E" classroomids="7762136B7D1CC995,55AC089DDBC06A70,BCE497B2E99BB2D0,F9BFBEA3EAA755E7" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="34B9681A456268B5" classids="9C1891180235DBE0" subjectid="BB34CA31F02C6852" periodspercard="1" periodsperweek="2.0" teacherids="8709C5EA5C52DF4E" classroomids="7762136B7D1CC995,BCE497B2E99BB2D0" groupids="1ACBF82006834D1E" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="FA8E1C1938F839FC" classids="7C5046ED08AB7134" subjectid="025B4429860A2CD7" periodspercard="1" periodsperweek="2.0" teacherids="D6F407A0107C984B" classroomids="8DD1FBCCC276E6CB,8562B3E01B3A8F21" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
      <lesson id="F1EA254FCD2BFBDC" classids="7C5046ED08AB7134" subjectid="E1939E3BDDF5FC26" periodspercard="1" periodsperweek="2.0" teacherids="D6F407A0107C984B" classroomids="8DD1FBCCC276E6CB,8562B3E01B3A8F21" groupids="0B4631B6B84CBC2F" capacity="*" seminargroup="" termsdefid="F4E1A0A4FD7E11B5" weeksdefid="3B82B558D6DD1E00" daysdefid="E792A25D52602065" partner_id=""/>
   </lessons>
   <cards options="canadd,export:silent" columns="lessonid,period,days,weeks,terms,classroomids">
      <card lessonid="4E774B5DE822C386" classroomids="936A10A6044D8EF1" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="4E774B5DE822C386" classroomids="936A10A6044D8EF1" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="4E774B5DE822C386" classroomids="936A10A6044D8EF1" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="4E774B5DE822C386" classroomids="936A10A6044D8EF1" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="4E774B5DE822C386" classroomids="936A10A6044D8EF1" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="4E774B5DE822C386" classroomids="936A10A6044D8EF1" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="4E774B5DE822C386" classroomids="936A10A6044D8EF1" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="4DF5B97B09BF0B0F" classroomids="936A10A6044D8EF1" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="4DF5B97B09BF0B0F" classroomids="936A10A6044D8EF1" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="F6D016BBFFA91844" classroomids="936A10A6044D8EF1" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="F6D016BBFFA91844" classroomids="936A10A6044D8EF1" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="F6D016BBFFA91844" classroomids="936A10A6044D8EF1" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="2D4A3E6D4A073204" classroomids="936A10A6044D8EF1" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="AFDC1345CB5C7419" classroomids="936A10A6044D8EF1" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="FCF5C47E2383E1EF" classroomids="936A10A6044D8EF1" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="FCF5C47E2383E1EF" classroomids="936A10A6044D8EF1" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="FCF5C47E2383E1EF" classroomids="936A10A6044D8EF1" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="FCF5C47E2383E1EF" classroomids="936A10A6044D8EF1" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="924B3B60380FC7E9" classroomids="936A10A6044D8EF1" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="F14F69989D7CEE27" classroomids="00E9CF889BCE8DE4" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="F14F69989D7CEE27" classroomids="00E9CF889BCE8DE4" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="F14F69989D7CEE27" classroomids="00E9CF889BCE8DE4" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="F14F69989D7CEE27" classroomids="00E9CF889BCE8DE4" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="F14F69989D7CEE27" classroomids="00E9CF889BCE8DE4" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="F14F69989D7CEE27" classroomids="00E9CF889BCE8DE4" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="F14F69989D7CEE27" classroomids="00E9CF889BCE8DE4" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="0F88048329F87F11" classroomids="00E9CF889BCE8DE4" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="0F88048329F87F11" classroomids="00E9CF889BCE8DE4" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="117B1C9AEF1D7DAB" classroomids="00E9CF889BCE8DE4" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="117B1C9AEF1D7DAB" classroomids="00E9CF889BCE8DE4" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="117B1C9AEF1D7DAB" classroomids="00E9CF889BCE8DE4" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="741261DB03449219" classroomids="00E9CF889BCE8DE4" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="EE81DD61166E447D" classroomids="00E9CF889BCE8DE4" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="84B5CF17262C4A3C" classroomids="00E9CF889BCE8DE4" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="84B5CF17262C4A3C" classroomids="00E9CF889BCE8DE4" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="84B5CF17262C4A3C" classroomids="00E9CF889BCE8DE4" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="84B5CF17262C4A3C" classroomids="00E9CF889BCE8DE4" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="D52191752CC8E6B9" classroomids="00E9CF889BCE8DE4" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="82C8E103C9407A06" classroomids="C43EBCA729F832C2" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="82C8E103C9407A06" classroomids="C43EBCA729F832C2" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="82C8E103C9407A06" classroomids="C43EBCA729F832C2" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="82C8E103C9407A06" classroomids="C43EBCA729F832C2" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="82C8E103C9407A06" classroomids="C43EBCA729F832C2" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="82C8E103C9407A06" classroomids="C43EBCA729F832C2" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="82C8E103C9407A06" classroomids="C43EBCA729F832C2" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="E2680751E9E3C89E" classroomids="C43EBCA729F832C2" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="E2680751E9E3C89E" classroomids="C43EBCA729F832C2" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="D3C247707099818A" classroomids="C43EBCA729F832C2" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="D3C247707099818A" classroomids="C43EBCA729F832C2" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="D3C247707099818A" classroomids="C43EBCA729F832C2" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="9EEC5546A01329D1" classroomids="C43EBCA729F832C2" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="32451472DF3F5592" classroomids="C43EBCA729F832C2" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="2DE772B1E18E434B" classroomids="C43EBCA729F832C2" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="2DE772B1E18E434B" classroomids="C43EBCA729F832C2" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="2DE772B1E18E434B" classroomids="C43EBCA729F832C2" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="2DE772B1E18E434B" classroomids="C43EBCA729F832C2" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="8554EEFCF3DA15A4" classroomids="C43EBCA729F832C2" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="CE6DC51140CC0053" classroomids="420EE7E5B29DC772" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="CE6DC51140CC0053" classroomids="420EE7E5B29DC772" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="CE6DC51140CC0053" classroomids="420EE7E5B29DC772" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="FBC6D0E3F8FA4C30" classroomids="BAF17CED8B6302B3" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="78BFC821071E0B60" classroomids="0E8ABC0D2CCA9638" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="78BFC821071E0B60" classroomids="0E8ABC0D2CCA9638" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="78BFC821071E0B60" classroomids="0E8ABC0D2CCA9638" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="11165C1CE6345E79" classroomids="8DD1FBCCC276E6CB" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="11165C1CE6345E79" classroomids="8DD1FBCCC276E6CB" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="11165C1CE6345E79" classroomids="8DD1FBCCC276E6CB" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="EBD4E1FAD55603CD" classroomids="EAC763AAC87CA3EE" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="5E4F8FD195CD3240" classroomids="061761F57F343583" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="554739AC86464EF3" classroomids="BEF30E4E5E3FAD57" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="554739AC86464EF3" classroomids="BEF30E4E5E3FAD57" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="554739AC86464EF3" classroomids="BEF30E4E5E3FAD57" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="3F0C5710D0BEBA56" classroomids="BEF30E4E5E3FAD57" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="3F0C5710D0BEBA56" classroomids="BEF30E4E5E3FAD57" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="B50043A130BC3FDE" classroomids="CB369C06D2BF7127" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="B50043A130BC3FDE" classroomids="CB369C06D2BF7127" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="B50043A130BC3FDE" classroomids="CB369C06D2BF7127" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="76A39F5112D2445A" classroomids="84FD20D9B1F929D9" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="76A39F5112D2445A" classroomids="84FD20D9B1F929D9" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="1ECF4919DABB0A4E" classroomids="B9B23008B9FCF973" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="DAEF81754E309559" classroomids="B0DBA147EC2F2D0B" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="DAEF81754E309559" classroomids="B0DBA147EC2F2D0B" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="DAEF81754E309559" classroomids="B0DBA147EC2F2D0B" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="C62FA0BE4E06845F" classroomids="B0DBA147EC2F2D0B" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="2672FF50A3545D79" classroomids="54900D815AC9FAEF" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="2672FF50A3545D79" classroomids="54900D815AC9FAEF" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="F3CD2E5C39147CE0" classroomids="AD3ECE624CC1384B" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="F3CD2E5C39147CE0" classroomids="AD3ECE624CC1384B" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="F3CD2E5C39147CE0" classroomids="AD3ECE624CC1384B" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="C028EED327D69457" classroomids="061761F57F343583" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="B2A586C55F86BB0F" classroomids="BEF30E4E5E3FAD57" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="B2A586C55F86BB0F" classroomids="BEF30E4E5E3FAD57" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="8DD2C19630AB8F3C" classroomids="BEF30E4E5E3FAD57" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="63662B23BA4DCFD2" classroomids="CB369C06D2BF7127" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="63662B23BA4DCFD2" classroomids="CB369C06D2BF7127" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="63662B23BA4DCFD2" classroomids="CB369C06D2BF7127" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="418D05EE5D07EDF8" classroomids="B9B23008B9FCF973" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="F5A4A50F42038A65" classroomids="B0DBA147EC2F2D0B" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="F5A4A50F42038A65" classroomids="B0DBA147EC2F2D0B" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="F5A4A50F42038A65" classroomids="B0DBA147EC2F2D0B" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="0A1509A5BAB4591D" classroomids="B0DBA147EC2F2D0B" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="AD26428073BE0DE9" classroomids="54900D815AC9FAEF" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="AD26428073BE0DE9" classroomids="54900D815AC9FAEF" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="D4690B91297C0A1D" classroomids="54F99E7E624F5A0D" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="D4690B91297C0A1D" classroomids="54F99E7E624F5A0D" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="D4690B91297C0A1D" classroomids="54F99E7E624F5A0D" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="E25F7F5CFD4DF653" classroomids="056EB371A5A5D878" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="E25F7F5CFD4DF653" classroomids="056EB371A5A5D878" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="E25F7F5CFD4DF653" classroomids="056EB371A5A5D878" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="C691B47AE57D6CA4" classroomids="056EB371A5A5D878" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="C691B47AE57D6CA4" classroomids="056EB371A5A5D878" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="C691B47AE57D6CA4" classroomids="056EB371A5A5D878" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="FD999BFE6DAD35A4" classroomids="056EB371A5A5D878" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="95C1468145882BFC" classroomids="056EB371A5A5D878" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="95C1468145882BFC" classroomids="056EB371A5A5D878" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="95C1468145882BFC" classroomids="056EB371A5A5D878" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="A13EE5F75196D0F9" classroomids="056EB371A5A5D878" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="A13EE5F75196D0F9" classroomids="056EB371A5A5D878" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="A13EE5F75196D0F9" classroomids="056EB371A5A5D878" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="EA0A54B84283D325" classroomids="056EB371A5A5D878" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="61EB86803492DCC0" classroomids="056EB371A5A5D878" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="35531F55D84AB55D" classroomids="056EB371A5A5D878" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="35531F55D84AB55D" classroomids="056EB371A5A5D878" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="35531F55D84AB55D" classroomids="056EB371A5A5D878" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="35531F55D84AB55D" classroomids="056EB371A5A5D878" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="5CF03C37B931EEB1" classroomids="056EB371A5A5D878" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="1D5AD57046D9B5AC" classroomids="420EE7E5B29DC772" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="1D5AD57046D9B5AC" classroomids="420EE7E5B29DC772" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="1D5AD57046D9B5AC" classroomids="420EE7E5B29DC772" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="5B3F675A5209E4D0" classroomids="77886EDA9CEBBB1B" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="5B3F675A5209E4D0" classroomids="77886EDA9CEBBB1B" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="5B3F675A5209E4D0" classroomids="77886EDA9CEBBB1B" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="5D29242A0DE2A8D4" classroomids="77886EDA9CEBBB1B" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="5D29242A0DE2A8D4" classroomids="77886EDA9CEBBB1B" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="5D29242A0DE2A8D4" classroomids="77886EDA9CEBBB1B" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="CFCD336255CBCD90" classroomids="77886EDA9CEBBB1B" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="0F5614D2E2DBF6A4" classroomids="77886EDA9CEBBB1B" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="0F5614D2E2DBF6A4" classroomids="77886EDA9CEBBB1B" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="0F5614D2E2DBF6A4" classroomids="77886EDA9CEBBB1B" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="DE17EBFD31EAD1A9" classroomids="77886EDA9CEBBB1B" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="DE17EBFD31EAD1A9" classroomids="77886EDA9CEBBB1B" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="DE17EBFD31EAD1A9" classroomids="77886EDA9CEBBB1B" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="81D7EA9F45E32EEA" classroomids="77886EDA9CEBBB1B" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="8499F069813B50C8" classroomids="77886EDA9CEBBB1B" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="DDBF732E044D27F6" classroomids="77886EDA9CEBBB1B" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="DDBF732E044D27F6" classroomids="77886EDA9CEBBB1B" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="DDBF732E044D27F6" classroomids="77886EDA9CEBBB1B" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="DDBF732E044D27F6" classroomids="77886EDA9CEBBB1B" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="97CA304CBF0557A0" classroomids="77886EDA9CEBBB1B" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="74057A1D066E4323" classroomids="47B05167ECC4623A" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="74057A1D066E4323" classroomids="47B05167ECC4623A" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="74057A1D066E4323" classroomids="47B05167ECC4623A" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="9F0064F1422149A5" classroomids="47B05167ECC4623A" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="9F0064F1422149A5" classroomids="47B05167ECC4623A" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="9F0064F1422149A5" classroomids="47B05167ECC4623A" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="461D91853B385A7C" classroomids="47B05167ECC4623A" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="636015E8633D373B" classroomids="47B05167ECC4623A" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="636015E8633D373B" classroomids="47B05167ECC4623A" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="636015E8633D373B" classroomids="47B05167ECC4623A" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="D0E9296C6BEE3801" classroomids="47B05167ECC4623A" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="D0E9296C6BEE3801" classroomids="47B05167ECC4623A" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="D0E9296C6BEE3801" classroomids="47B05167ECC4623A" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="48C5DC814A540F6D" classroomids="47B05167ECC4623A" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="7FAE53C1BEDD0237" classroomids="47B05167ECC4623A" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="844778D8DCBF3E7C" classroomids="47B05167ECC4623A" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="844778D8DCBF3E7C" classroomids="47B05167ECC4623A" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="844778D8DCBF3E7C" classroomids="47B05167ECC4623A" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="844778D8DCBF3E7C" classroomids="47B05167ECC4623A" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="80414FCF9B05B725" classroomids="47B05167ECC4623A" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="BE0959D1F32DCCDE" classroomids="420EE7E5B29DC772" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="BE0959D1F32DCCDE" classroomids="420EE7E5B29DC772" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="BE0959D1F32DCCDE" classroomids="420EE7E5B29DC772" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="26CFE81045739D78" classroomids="B77506AEF2C47046" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="26CFE81045739D78" classroomids="B77506AEF2C47046" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="26CFE81045739D78" classroomids="B77506AEF2C47046" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="F81A7130B27FF3AB" classroomids="B77506AEF2C47046" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="F81A7130B27FF3AB" classroomids="B77506AEF2C47046" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="F81A7130B27FF3AB" classroomids="B77506AEF2C47046" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="19F12DD1F10DD0BC" classroomids="B77506AEF2C47046" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="036462C71F599216" classroomids="B77506AEF2C47046" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="036462C71F599216" classroomids="B77506AEF2C47046" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="036462C71F599216" classroomids="B77506AEF2C47046" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="8E9C4A0F8108ADD7" classroomids="B77506AEF2C47046" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="8E9C4A0F8108ADD7" classroomids="B77506AEF2C47046" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="8E9C4A0F8108ADD7" classroomids="B77506AEF2C47046" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="6BD80CD194DE6376" classroomids="B77506AEF2C47046" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="E47E060DA6632C50" classroomids="B77506AEF2C47046" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="1F6CF4B20EFABCF4" classroomids="B77506AEF2C47046" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="1F6CF4B20EFABCF4" classroomids="B77506AEF2C47046" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="1F6CF4B20EFABCF4" classroomids="B77506AEF2C47046" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="1F6CF4B20EFABCF4" classroomids="B77506AEF2C47046" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="1F6CF4B20EFABCF4" classroomids="B77506AEF2C47046" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="F1F86D7C15A9542C" classroomids="B77506AEF2C47046" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="D4984C34D9A938ED" classroomids="A02B4A047DFD3E55" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="D4984C34D9A938ED" classroomids="A02B4A047DFD3E55" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="D4984C34D9A938ED" classroomids="A02B4A047DFD3E55" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="E0853226E2A9DFCD" classroomids="A02B4A047DFD3E55" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="E0853226E2A9DFCD" classroomids="A02B4A047DFD3E55" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="E0853226E2A9DFCD" classroomids="A02B4A047DFD3E55" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="E3914DE66A195371" classroomids="A02B4A047DFD3E55" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="34136DA3167E8C35" classroomids="A02B4A047DFD3E55" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="34136DA3167E8C35" classroomids="A02B4A047DFD3E55" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="34136DA3167E8C35" classroomids="A02B4A047DFD3E55" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="0774E5D6E2AAFB01" classroomids="A02B4A047DFD3E55" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="0774E5D6E2AAFB01" classroomids="A02B4A047DFD3E55" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="0774E5D6E2AAFB01" classroomids="A02B4A047DFD3E55" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="F7A236A5B09F8D78" classroomids="A02B4A047DFD3E55" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="1A225D3A2E4B7FA7" classroomids="A02B4A047DFD3E55" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="0CF948066C577840" classroomids="A02B4A047DFD3E55" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="0CF948066C577840" classroomids="A02B4A047DFD3E55" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="0CF948066C577840" classroomids="A02B4A047DFD3E55" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="0CF948066C577840" classroomids="A02B4A047DFD3E55" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="0CF948066C577840" classroomids="A02B4A047DFD3E55" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="AF8DEEB492AFF4AB" classroomids="A02B4A047DFD3E55" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="A377044729EFFB00" classroomids="420EE7E5B29DC772" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="A377044729EFFB00" classroomids="420EE7E5B29DC772" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="A377044729EFFB00" classroomids="420EE7E5B29DC772" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="7F475A1AA6EEB938" classroomids="29FF747B4241426D" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="7F475A1AA6EEB938" classroomids="29FF747B4241426D" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="7F475A1AA6EEB938" classroomids="29FF747B4241426D" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="6218E6BDDCECEB61" classroomids="29FF747B4241426D" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="6218E6BDDCECEB61" classroomids="29FF747B4241426D" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="6218E6BDDCECEB61" classroomids="29FF747B4241426D" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="2602006F442AA888" classroomids="29FF747B4241426D" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="B1AE89A1F5A23F4A" classroomids="29FF747B4241426D" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="0DA36B910E49EBB5" classroomids="29FF747B4241426D" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="0DA36B910E49EBB5" classroomids="29FF747B4241426D" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="0DA36B910E49EBB5" classroomids="29FF747B4241426D" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="0DA36B910E49EBB5" classroomids="29FF747B4241426D" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="0DA36B910E49EBB5" classroomids="29FF747B4241426D" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="25A2D2BEEC0DDE1E" classroomids="29FF747B4241426D" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="D1128FA83F89E536" classroomids="2BA54C5FE0B7394F" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="D1128FA83F89E536" classroomids="2BA54C5FE0B7394F" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="D1128FA83F89E536" classroomids="2BA54C5FE0B7394F" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="EAAAA57F8DA5618F" classroomids="2BA54C5FE0B7394F" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="EAAAA57F8DA5618F" classroomids="2BA54C5FE0B7394F" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="EAAAA57F8DA5618F" classroomids="2BA54C5FE0B7394F" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="3C966544732AF4E0" classroomids="2BA54C5FE0B7394F" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="595D8EFCD915416E" classroomids="2BA54C5FE0B7394F" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="595D8EFCD915416E" classroomids="2BA54C5FE0B7394F" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="595D8EFCD915416E" classroomids="2BA54C5FE0B7394F" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="D8FAC9BD31268BC8" classroomids="2BA54C5FE0B7394F" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="D8FAC9BD31268BC8" classroomids="2BA54C5FE0B7394F" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="D8FAC9BD31268BC8" classroomids="2BA54C5FE0B7394F" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="D2B03876CB326F28" classroomids="2BA54C5FE0B7394F" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="F4343C759354CA54" classroomids="2BA54C5FE0B7394F" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="44FD6C21B37034EB" classroomids="2BA54C5FE0B7394F" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="44FD6C21B37034EB" classroomids="2BA54C5FE0B7394F" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="44FD6C21B37034EB" classroomids="2BA54C5FE0B7394F" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="44FD6C21B37034EB" classroomids="2BA54C5FE0B7394F" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="44FD6C21B37034EB" classroomids="2BA54C5FE0B7394F" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="508CE5DF162C9091" classroomids="2BA54C5FE0B7394F" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="4E0E1DC7138067B1" classroomids="CFF7D3B7BA73393E" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="4E0E1DC7138067B1" classroomids="CFF7D3B7BA73393E" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="4E0E1DC7138067B1" classroomids="CFF7D3B7BA73393E" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="BB543930681C28D1" classroomids="CFF7D3B7BA73393E" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="BB543930681C28D1" classroomids="CFF7D3B7BA73393E" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="BB543930681C28D1" classroomids="CFF7D3B7BA73393E" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="B8EFDDB902196D0B" classroomids="CFF7D3B7BA73393E" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="4F3E470DA3C5FB55" classroomids="CFF7D3B7BA73393E" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="95812626D5D3A3D5" classroomids="CFF7D3B7BA73393E" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="95812626D5D3A3D5" classroomids="CFF7D3B7BA73393E" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="95812626D5D3A3D5" classroomids="CFF7D3B7BA73393E" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="95812626D5D3A3D5" classroomids="CFF7D3B7BA73393E" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="95812626D5D3A3D5" classroomids="CFF7D3B7BA73393E" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="DB78B5ADF3AC22B0" classroomids="CFF7D3B7BA73393E" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="FC65031D7B456DF9" classroomids="F08C42F2BA7CD261" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="FC65031D7B456DF9" classroomids="F08C42F2BA7CD261" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="FC65031D7B456DF9" classroomids="F08C42F2BA7CD261" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="7046B6BCACAFC24A" classroomids="F08C42F2BA7CD261" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="7046B6BCACAFC24A" classroomids="F08C42F2BA7CD261" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="7046B6BCACAFC24A" classroomids="F08C42F2BA7CD261" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="7E17F548EDA595E8" classroomids="F08C42F2BA7CD261" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="5C217C6930F883F6" classroomids="F08C42F2BA7CD261" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="3AC1CC2CD459C840" classroomids="F08C42F2BA7CD261" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="3AC1CC2CD459C840" classroomids="F08C42F2BA7CD261" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="3AC1CC2CD459C840" classroomids="F08C42F2BA7CD261" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="3AC1CC2CD459C840" classroomids="F08C42F2BA7CD261" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="3AC1CC2CD459C840" classroomids="F08C42F2BA7CD261" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="DBC9A3F7DDB84A24" classroomids="F08C42F2BA7CD261" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="8CA27CC1AE7A07D8" classroomids="A0402F8BECD7C881" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="8CA27CC1AE7A07D8" classroomids="A0402F8BECD7C881" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="D952F86BC9449A8C" classroomids="33E6B859AD8D1EE1" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="D952F86BC9449A8C" classroomids="33E6B859AD8D1EE1" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="D952F86BC9449A8C" classroomids="AF6ED248539EC883" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="D952F86BC9449A8C" classroomids="AF6ED248539EC883" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="3CD08BF320497E13" classroomids="55AC089DDBC06A70" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="DCA7F113C39265DA" classroomids="F9C94211E943F513" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="C5311417E9E168F1" classroomids="0E8ABC0D2CCA9638" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="A088A9229539AB3B" classroomids="BAF17CED8B6302B3" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="A088A9229539AB3B" classroomids="BAF17CED8B6302B3" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="5C013867A43B77E8" classroomids="F2A8CBB3E984A461" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="5C013867A43B77E8" classroomids="F2A8CBB3E984A461" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="06D9363E0A142E46" classroomids="F9C94211E943F513" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="99A3B11D9B9577A7" classroomids="B0D423502BE8F8D6" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="8BC12B804252D3B5" classroomids="C813B709A5BCCB18" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="8BC12B804252D3B5" classroomids="121C7291CF88C830" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="8BC12B804252D3B5" classroomids="C813B709A5BCCB18" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="768036A01EF56CDE" classroomids="A34C5EB2922E231A" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="768036A01EF56CDE" classroomids="A34C5EB2922E231A" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="768036A01EF56CDE" classroomids="A34C5EB2922E231A" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="768036A01EF56CDE" classroomids="A34C5EB2922E231A" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="BCB2069FA8F54FC7" classroomids="A34C5EB2922E231A" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="BCB2069FA8F54FC7" classroomids="A34C5EB2922E231A" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="27EE2406E87BF095" classroomids="A34C5EB2922E231A" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="F77E93A8BA97F0B2" classroomids="BF33F86DEA1E2A15" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="A14F53A1B8F6A935" classroomids="303F56E70FD472F3" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="5BA49EF9AC407BD9" classroomids="BF33F86DEA1E2A15" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="B50DA30BFA5A99BE" classroomids="A7088E6D2B40FEE7" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="B50DA30BFA5A99BE" classroomids="A7088E6D2B40FEE7" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="B50DA30BFA5A99BE" classroomids="A7088E6D2B40FEE7" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="B50DA30BFA5A99BE" classroomids="A7088E6D2B40FEE7" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="B50DA30BFA5A99BE" classroomids="A7088E6D2B40FEE7" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="D7F6D87DCC68787F" classroomids="84FD20D9B1F929D9" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="D7F6D87DCC68787F" classroomids="84FD20D9B1F929D9" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="18B99E92B960F7C7" classroomids="3D0634BB0DD77C96" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="18B99E92B960F7C7" classroomids="3D0634BB0DD77C96" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="9F20BE0AAD9D0150" classroomids="303F56E70FD472F3" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="A9FB0476206F70B4" classroomids="3B11ABA63409B889" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="710947DA1BD14C3D" classroomids="54F99E7E624F5A0D" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="710947DA1BD14C3D" classroomids="AD3ECE624CC1384B" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="710947DA1BD14C3D" classroomids="54F99E7E624F5A0D" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="3F282E6389B4EE34" classroomids="A34C5EB2922E231A" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="3F282E6389B4EE34" classroomids="A34C5EB2922E231A" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="3F282E6389B4EE34" classroomids="A34C5EB2922E231A" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="3F282E6389B4EE34" classroomids="A34C5EB2922E231A" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="2ABC7CEEB8FE8097" classroomids="A34C5EB2922E231A" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="2ABC7CEEB8FE8097" classroomids="A34C5EB2922E231A" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="9591D79D13156EB9" classroomids="061761F57F343583" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="B70B3A6CEBB324B9" classroomids="BF33F86DEA1E2A15" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="595AECA6161499F7" classroomids="303F56E70FD472F3" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="EF64A785B7C49E4E" classroomids="BF33F86DEA1E2A15" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="F37DF93EBF4D1A94" classroomids="352C0BD6CE8FC471" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="F37DF93EBF4D1A94" classroomids="352C0BD6CE8FC471" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="F37DF93EBF4D1A94" classroomids="352C0BD6CE8FC471" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="F37DF93EBF4D1A94" classroomids="352C0BD6CE8FC471" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="F37DF93EBF4D1A94" classroomids="352C0BD6CE8FC471" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="D5C83C993D9D466D" classroomids="84FD20D9B1F929D9" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="D5C83C993D9D466D" classroomids="84FD20D9B1F929D9" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="F074F16BE542A55F" classroomids="3D0634BB0DD77C96" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="F074F16BE542A55F" classroomids="3D0634BB0DD77C96" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="EDE2DDC4CCE2E9E7" classroomids="303F56E70FD472F3" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="E1451ABC0F8CED61" classroomids="3B11ABA63409B889" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="5C9E043D1B7F197D" classroomids="AD3ECE624CC1384B" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="5C9E043D1B7F197D" classroomids="AD3ECE624CC1384B" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="5C9E043D1B7F197D" classroomids="54F99E7E624F5A0D" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="FE2C2887EFD9E054" classroomids="A0402F8BECD7C881" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="FE2C2887EFD9E054" classroomids="A0402F8BECD7C881" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="C5E9B8B8817E1241" classroomids="A0402F8BECD7C881" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="C5E9B8B8817E1241" classroomids="A0402F8BECD7C881" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="1A79437151BD50FA" classroomids="55AC089DDBC06A70" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="1A79437151BD50FA" classroomids="55AC089DDBC06A70" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="C5496515A4467BBB" classroomids="55AC089DDBC06A70" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="7C7923E06C5C6552" classroomids="F9C94211E943F513" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="0EF445EBF1297418" classroomids="3E5CAB46B5B8E0ED" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="6842387FD5D9AE77" classroomids="8DD1FBCCC276E6CB" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="6842387FD5D9AE77" classroomids="8DD1FBCCC276E6CB" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="6842387FD5D9AE77" classroomids="8DD1FBCCC276E6CB" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="6842387FD5D9AE77" classroomids="8DD1FBCCC276E6CB" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="6842387FD5D9AE77" classroomids="8DD1FBCCC276E6CB" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="58FF4E7D3C3C2A92" classroomids="BAF17CED8B6302B3" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="58FF4E7D3C3C2A92" classroomids="BAF17CED8B6302B3" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="F358F70A0C3602A7" classroomids="BBE8D9B17AB2E7C7" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="F358F70A0C3602A7" classroomids="BBE8D9B17AB2E7C7" period="7" weeks="11" terms="1" days="01000"/>
      <card lessonid="D8D6F446CE1C9E82" classroomids="F2A8CBB3E984A461" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="D8D6F446CE1C9E82" classroomids="F2A8CBB3E984A461" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="4EC07DDE49292EAB" classroomids="B0D423502BE8F8D6" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="C1F8BE8FE32203D9" classroomids="C813B709A5BCCB18" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="C1F8BE8FE32203D9" classroomids="121C7291CF88C830" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="C1F8BE8FE32203D9" classroomids="121C7291CF88C830" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="38022791E5F154B6" classroomids="A0402F8BECD7C881" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="38022791E5F154B6" classroomids="A0402F8BECD7C881" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="B5530FCB989D8C79" classroomids="A0402F8BECD7C881" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="B5530FCB989D8C79" classroomids="A0402F8BECD7C881" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="31B1EB97D58386DC" classroomids="55AC089DDBC06A70" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="31B1EB97D58386DC" classroomids="55AC089DDBC06A70" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="63DB5C7C640969B6" classroomids="55AC089DDBC06A70" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="50EBE399CDC7005F" classroomids="F9C94211E943F513" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="DBB2E4F3BD6A4C02" classroomids="3E5CAB46B5B8E0ED" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="2595C1984453E211" classroomids="8DD1FBCCC276E6CB" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="2595C1984453E211" classroomids="8DD1FBCCC276E6CB" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="2595C1984453E211" classroomids="8DD1FBCCC276E6CB" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="2595C1984453E211" classroomids="8DD1FBCCC276E6CB" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="2595C1984453E211" classroomids="8DD1FBCCC276E6CB" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="2F7B93082994585B" classroomids="BAF17CED8B6302B3" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="2F7B93082994585B" classroomids="BAF17CED8B6302B3" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="44722D1096295E24" classroomids="BBE8D9B17AB2E7C7" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="44722D1096295E24" classroomids="BBE8D9B17AB2E7C7" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="40AB6892C0194D15" classroomids="F2A8CBB3E984A461" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="40AB6892C0194D15" classroomids="F2A8CBB3E984A461" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="E30459FA20302BD9" classroomids="B0D423502BE8F8D6" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="1E258DC5F1CDAA3F" classroomids="C813B709A5BCCB18" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="1E258DC5F1CDAA3F" classroomids="C813B709A5BCCB18" period="7" weeks="11" terms="1" days="01000"/>
      <card lessonid="1E258DC5F1CDAA3F" classroomids="C813B709A5BCCB18" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="F48E6043B5ABAA4D" classroomids="BCE497B2E99BB2D0" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="F48E6043B5ABAA4D" classroomids="BCE497B2E99BB2D0" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="F48E6043B5ABAA4D" classroomids="BCE497B2E99BB2D0" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="F48E6043B5ABAA4D" classroomids="BCE497B2E99BB2D0" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="5DAB4477F56CC9A8" classroomids="A0402F8BECD7C881" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="5DAB4477F56CC9A8" classroomids="A0402F8BECD7C881" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="2B3BB14EF3134D81" classroomids="AF6ED248539EC883" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="2B3BB14EF3134D81" classroomids="AF6ED248539EC883" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="2B3BB14EF3134D81" classroomids="AF6ED248539EC883" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="2B3FC1FB705541D9" classroomids="A0402F8BECD7C881" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="2B3FC1FB705541D9" classroomids="A0402F8BECD7C881" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="F6590E13CE15F845" classroomids="55AC089DDBC06A70" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="F6590E13CE15F845" classroomids="55AC089DDBC06A70" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="848F65F10519703A" classroomids="55AC089DDBC06A70" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="57C50334B6C4B760" classroomids="F9C94211E943F513" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="DD80DF935B3A4FBE" classroomids="3E5CAB46B5B8E0ED" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="C9778C38BD737307" classroomids="A15E20D77C992831" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="C9778C38BD737307" classroomids="A15E20D77C992831" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="C9778C38BD737307" classroomids="A15E20D77C992831" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="C9778C38BD737307" classroomids="A15E20D77C992831" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="C9778C38BD737307" classroomids="A15E20D77C992831" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="0B4BD23D896796D3" classroomids="BAF17CED8B6302B3" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="0B4BD23D896796D3" classroomids="BAF17CED8B6302B3" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="0172353F3C6134AF" classroomids="BBE8D9B17AB2E7C7" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="0172353F3C6134AF" classroomids="BBE8D9B17AB2E7C7" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="B2A185B88B882E84" classroomids="3E5CAB46B5B8E0ED" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="B2A185B88B882E84" classroomids="3E5CAB46B5B8E0ED" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="29D26EBEEDF220FC" classroomids="B0D423502BE8F8D6" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="65CC26ABA3D70502" classroomids="C813B709A5BCCB18" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="65CC26ABA3D70502" classroomids="121C7291CF88C830" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="65CC26ABA3D70502" classroomids="121C7291CF88C830" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="48DCE9EE457AFAC9" classroomids="F9BFBEA3EAA755E7" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="48DCE9EE457AFAC9" classroomids="F9BFBEA3EAA755E7" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="48DCE9EE457AFAC9" classroomids="F9BFBEA3EAA755E7" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="1151673A51588BD8" classroomids="A0402F8BECD7C881" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="1151673A51588BD8" classroomids="A0402F8BECD7C881" period="7" weeks="11" terms="1" days="01000"/>
      <card lessonid="AEF7CADD0186F940" classroomids="33E6B859AD8D1EE1" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="AEF7CADD0186F940" classroomids="33E6B859AD8D1EE1" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="AEF7CADD0186F940" classroomids="33E6B859AD8D1EE1" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="5AB4D8A80708A11C" classroomids="A0402F8BECD7C881" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="5AB4D8A80708A11C" classroomids="A0402F8BECD7C881" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="3DF72C1BCBB3DB97" classroomids="2467AAB6EC1B0043" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="D7A6914DF390B904" classroomids="2467AAB6EC1B0043" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="BF67FD3EE3D5D7F9" classroomids="2467AAB6EC1B0043" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="EBB5CE14631AAD99" classroomids="F9C94211E943F513" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="769AC7F83F1CC845" classroomids="3E5CAB46B5B8E0ED" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="79DDFEE6A17D26B3" classroomids="A15E20D77C992831" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="79DDFEE6A17D26B3" classroomids="A15E20D77C992831" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="79DDFEE6A17D26B3" classroomids="A15E20D77C992831" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="B7BF9922D68C4747" classroomids="A15E20D77C992831" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="B7BF9922D68C4747" classroomids="A15E20D77C992831" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="1DEB400CEF025DCF" classroomids="425DFC212452C41A" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="1DEB400CEF025DCF" classroomids="BAF17CED8B6302B3" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="6E0570D8712CC5FC" classroomids="BBE8D9B17AB2E7C7" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="6E0570D8712CC5FC" classroomids="BBE8D9B17AB2E7C7" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="B228ACEA2084F6DD" classroomids="EAC763AAC87CA3EE" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="B228ACEA2084F6DD" classroomids="EAC763AAC87CA3EE" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="54069AE6F6E01E4A" classroomids="F174E9F85E36E906" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="7F99D4FB7A62AE9B" classroomids="F2A8CBB3E984A461" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="A72A9F96AC90E684" classroomids="425DFC212452C41A" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="FB53B042F24502EB" classroomids="121C7291CF88C830" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="FB53B042F24502EB" classroomids="121C7291CF88C830" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="FB53B042F24502EB" classroomids="121C7291CF88C830" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="640B2D61C697B72C" classroomids="F9BFBEA3EAA755E7" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="640B2D61C697B72C" classroomids="F9BFBEA3EAA755E7" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="640B2D61C697B72C" classroomids="F9BFBEA3EAA755E7" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="42D5F91E93B306B7" classroomids="A0402F8BECD7C881" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="42D5F91E93B306B7" classroomids="A0402F8BECD7C881" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="A8DCDEC465C1DF00" classroomids="33E6B859AD8D1EE1" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="A8DCDEC465C1DF00" classroomids="33E6B859AD8D1EE1" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="A8DCDEC465C1DF00" classroomids="33E6B859AD8D1EE1" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="A8DCDEC465C1DF00" classroomids="33E6B859AD8D1EE1" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="C5D3ED0FB4BB8183" classroomids="A0402F8BECD7C881" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="133261B6AFE67D85" classroomids="2467AAB6EC1B0043" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="D80D1A2C42C95AFE" classroomids="2467AAB6EC1B0043" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="715B239EE65B00F7" classroomids="2467AAB6EC1B0043" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="E9A413D7962F50CB" classroomids="F9C94211E943F513" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="D2DBD97C697EAC10" classroomids="3E5CAB46B5B8E0ED" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="684FC7965F44AEDD" classroomids="8562B3E01B3A8F21" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="684FC7965F44AEDD" classroomids="8562B3E01B3A8F21" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="684FC7965F44AEDD" classroomids="8562B3E01B3A8F21" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="B01CFF8912FBC2B7" classroomids="8562B3E01B3A8F21" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="B01CFF8912FBC2B7" classroomids="8562B3E01B3A8F21" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="E7132F78AE2E48B7" classroomids="425DFC212452C41A" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="E7132F78AE2E48B7" classroomids="425DFC212452C41A" period="7" weeks="11" terms="1" days="01000"/>
      <card lessonid="E925B2393695EF72" classroomids="BBE8D9B17AB2E7C7" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="E925B2393695EF72" classroomids="BBE8D9B17AB2E7C7" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="257DDEC517CEAE34" classroomids="EAC763AAC87CA3EE" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="257DDEC517CEAE34" classroomids="EAC763AAC87CA3EE" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="855CAFFA0212F37E" classroomids="F174E9F85E36E906" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="027A76CBD6431156" classroomids="425DFC212452C41A" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="40ED89AC3730B82A" classroomids="121C7291CF88C830" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="40ED89AC3730B82A" classroomids="C813B709A5BCCB18" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="40ED89AC3730B82A" classroomids="C813B709A5BCCB18" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="DB1F59D46B5B259C" classroomids="A34C5EB2922E231A" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="DB1F59D46B5B259C" classroomids="A34C5EB2922E231A" period="7" weeks="11" terms="1" days="01000"/>
      <card lessonid="DB1F59D46B5B259C" classroomids="A34C5EB2922E231A" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="AD67DDD1EAB7B3A4" classroomids="061761F57F343583" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="AD67DDD1EAB7B3A4" classroomids="061761F57F343583" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="CF47F45E9122A33E" classroomids="CC208ABF8B76AE7D" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="CF47F45E9122A33E" classroomids="CC208ABF8B76AE7D" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="CF47F45E9122A33E" classroomids="18B1D7F8D5FE0B6A" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="CF47F45E9122A33E" classroomids="CC208ABF8B76AE7D" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="36895CE139CE9784" classroomids="061761F57F343583" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="161A8CB35D578C03" classroomids="53DEAB4033726B5B" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="F458E30BABA44B7D" classroomids="53DEAB4033726B5B" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="0F28CAD948E2D388" classroomids="53DEAB4033726B5B" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="2324BD64A36C8F09" classroomids="303F56E70FD472F3" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="3400FBAA2FA9024C" classroomids="2044C51FB053D2A8" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="D51DB83500FFFE91" classroomids="A7088E6D2B40FEE7" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="D51DB83500FFFE91" classroomids="A7088E6D2B40FEE7" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="97CB5ED04FC95629" classroomids="081AEAE7A605A14B" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="97CB5ED04FC95629" classroomids="081AEAE7A605A14B" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="BF15E5F39D7EE6E0" classroomids="B9B23008B9FCF973" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="BF15E5F39D7EE6E0" classroomids="B9B23008B9FCF973" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="EFBF986E9E226F06" classroomids="B0DBA147EC2F2D0B" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="EFBF986E9E226F06" classroomids="B0DBA147EC2F2D0B" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="C88EB020310C3478" classroomids="54900D815AC9FAEF" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="F1E98D2E9C3EB6E0" classroomids="3D0634BB0DD77C96" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="635EAE10D180C1C7" classroomids="081AEAE7A605A14B" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="91B0E12353B8FABF" classroomids="AD3ECE624CC1384B" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="91B0E12353B8FABF" classroomids="AD3ECE624CC1384B" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="91B0E12353B8FABF" classroomids="54F99E7E624F5A0D" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="A555638DFE69A2D2" classroomids="05D782BE80078A44" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="A555638DFE69A2D2" classroomids="05D782BE80078A44" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="A555638DFE69A2D2" classroomids="05D782BE80078A44" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="7B52D0B8C460FC76" classroomids="061761F57F343583" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="7B52D0B8C460FC76" classroomids="061761F57F343583" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="FB34E28B4867B0EB" classroomids="18B1D7F8D5FE0B6A" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="FB34E28B4867B0EB" classroomids="CC208ABF8B76AE7D" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="FB34E28B4867B0EB" classroomids="18B1D7F8D5FE0B6A" period="7" weeks="11" terms="1" days="01000"/>
      <card lessonid="EDD0533EFA65060A" classroomids="061761F57F343583" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="EDD0533EFA65060A" classroomids="061761F57F343583" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="0519A9EC5A5EEAC9" classroomids="BF33F86DEA1E2A15" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="7F1F67CA8C733DDA" classroomids="BF33F86DEA1E2A15" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="FF08595B445737F7" classroomids="BF33F86DEA1E2A15" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="376873D2991FC593" classroomids="303F56E70FD472F3" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="E97A100E71D8460F" classroomids="2044C51FB053D2A8" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="1C661758D527BAE8" classroomids="54900D815AC9FAEF" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="1C661758D527BAE8" classroomids="B0DBA147EC2F2D0B" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="1C661758D527BAE8" classroomids="B0DBA147EC2F2D0B" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="3B12ECA952A37361" classroomids="54900D815AC9FAEF" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="3B12ECA952A37361" classroomids="B0DBA147EC2F2D0B" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="24E3C004EC9A6F61" classroomids="B9B23008B9FCF973" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="24E3C004EC9A6F61" classroomids="B9B23008B9FCF973" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="A8BD4AF1311225B3" classroomids="B0DBA147EC2F2D0B" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="A8BD4AF1311225B3" classroomids="B0DBA147EC2F2D0B" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="B206BAE0E9999FD3" classroomids="54900D815AC9FAEF" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="DCB8C4ED65406F6A" classroomids="081AEAE7A605A14B" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="1CD44A913F443013" classroomids="AD3ECE624CC1384B" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="1CD44A913F443013" classroomids="AD3ECE624CC1384B" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="1CD44A913F443013" classroomids="54F99E7E624F5A0D" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="3187894820E12DAA" classroomids="1244DDCC9DA6AF1C" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="3187894820E12DAA" classroomids="1244DDCC9DA6AF1C" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="3187894820E12DAA" classroomids="1244DDCC9DA6AF1C" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="06211D8DB2AFDF06" classroomids="1244DDCC9DA6AF1C" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="06211D8DB2AFDF06" classroomids="1244DDCC9DA6AF1C" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="BD6FF47F31179D3E" classroomids="CC208ABF8B76AE7D" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="BD6FF47F31179D3E" classroomids="CC208ABF8B76AE7D" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="BD6FF47F31179D3E" classroomids="CC208ABF8B76AE7D" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="AF6609D6200FBE79" classroomids="BF33F86DEA1E2A15" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="A2C66E8605F32125" classroomids="BF33F86DEA1E2A15" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="4A6433997FCE1CA7" classroomids="BF33F86DEA1E2A15" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="7B43AC3C19EA4A40" classroomids="303F56E70FD472F3" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="BD150569337EA742" classroomids="CB369C06D2BF7127" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="BD150569337EA742" classroomids="CB369C06D2BF7127" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="BD150569337EA742" classroomids="CB369C06D2BF7127" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="378E77679E5A4C26" classroomids="CB369C06D2BF7127" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="378E77679E5A4C26" classroomids="CB369C06D2BF7127" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="DD4DE10B4D62D6ED" classroomids="84FD20D9B1F929D9" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="DD4DE10B4D62D6ED" classroomids="84FD20D9B1F929D9" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="41110045A3D984E1" classroomids="B0DBA147EC2F2D0B" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="41110045A3D984E1" classroomids="B0DBA147EC2F2D0B" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="922D67DF6359DB5E" classroomids="54900D815AC9FAEF" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="922D67DF6359DB5E" classroomids="54900D815AC9FAEF" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="A58381A33FD15F42" classroomids="3D0634BB0DD77C96" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="D8D96292AFCA938F" classroomids="3B11ABA63409B889" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="B97D80E3DC39EFE3" classroomids="54F99E7E624F5A0D" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="B97D80E3DC39EFE3" classroomids="AD3ECE624CC1384B" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="B97D80E3DC39EFE3" classroomids="AD3ECE624CC1384B" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="26A58AA7585A59EF" classroomids="081AEAE7A605A14B" period="7" weeks="11" terms="1" days="01000"/>
      <card lessonid="594C856058710F56" classroomids="53DEAB4033726B5B" period="8" weeks="11" terms="1" days="00100"/>
      <card lessonid="391341073561558B" classroomids="BEF30E4E5E3FAD57" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="7319E2172DC89B0B" classroomids="1244DDCC9DA6AF1C" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="7319E2172DC89B0B" classroomids="1244DDCC9DA6AF1C" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="7319E2172DC89B0B" classroomids="1244DDCC9DA6AF1C" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="2D9AB7436EBCAE45" classroomids="1244DDCC9DA6AF1C" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="2D9AB7436EBCAE45" classroomids="1244DDCC9DA6AF1C" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="A641700F725410EF" classroomids="061761F57F343583" period="7" weeks="11" terms="1" days="01000"/>
      <card lessonid="72F0A467170C1E12" classroomids="BF33F86DEA1E2A15" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="10D050BAF218153E" classroomids="BF33F86DEA1E2A15" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="FB809C462BFE38FA" classroomids="BF33F86DEA1E2A15" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="7E463A72FABCB35F" classroomids="303F56E70FD472F3" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="7D8057F0D0585C47" classroomids="A7088E6D2B40FEE7" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="7D8057F0D0585C47" classroomids="A7088E6D2B40FEE7" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="7D8057F0D0585C47" classroomids="A7088E6D2B40FEE7" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="F3D435F9E7556D38" classroomids="A7088E6D2B40FEE7" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="F3D435F9E7556D38" classroomids="A7088E6D2B40FEE7" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="DFE675BEF78CD25C" classroomids="081AEAE7A605A14B" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="DFE675BEF78CD25C" classroomids="081AEAE7A605A14B" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="DA127081644973A9" classroomids="B9B23008B9FCF973" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="DA127081644973A9" classroomids="B9B23008B9FCF973" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="2018B10F03CFA930" classroomids="B0DBA147EC2F2D0B" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="2018B10F03CFA930" classroomids="B0DBA147EC2F2D0B" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="7F8A4E48C9FD1F13" classroomids="54900D815AC9FAEF" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="7F8A4E48C9FD1F13" classroomids="54900D815AC9FAEF" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="294A02A1423DF6D3" classroomids="3B11ABA63409B889" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="45ADBADEF04F8D5F" classroomids="AD3ECE624CC1384B" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="45ADBADEF04F8D5F" classroomids="54F99E7E624F5A0D" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="45ADBADEF04F8D5F" classroomids="AD3ECE624CC1384B" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="FDD3F5B64C016B70" classroomids="081AEAE7A605A14B" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="21CB35EB35F63825" classroomids="53DEAB4033726B5B" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="AAED7EB82EF8000C" classroomids="BEF30E4E5E3FAD57" period="8" weeks="11" terms="1" days="00010"/>
      <card lessonid="5851E5B4FC46910A" classroomids="F9BFBEA3EAA755E7" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="5851E5B4FC46910A" classroomids="F9BFBEA3EAA755E7" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="5851E5B4FC46910A" classroomids="F9BFBEA3EAA755E7" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="FF279A2B476866A8" classroomids="E2CDDD43564F4404" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="FF279A2B476866A8" classroomids="E2CDDD43564F4404" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="6A010CF29BC80F07" classroomids="AF6ED248539EC883" period="7" weeks="11" terms="1" days="01000"/>
      <card lessonid="6A010CF29BC80F07" classroomids="33E6B859AD8D1EE1" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="6A010CF29BC80F07" classroomids="33E6B859AD8D1EE1" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="DA131360F69AE51C" classroomids="0E8ABC0D2CCA9638" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="8AE5F1511A1F9F98" classroomids="0E8ABC0D2CCA9638" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="8EC0A588249C3853" classroomids="0E8ABC0D2CCA9638" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="CDB59BAA7FBC0C29" classroomids="F9C94211E943F513" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="7FDA3579FCA4427C" classroomids="8562B3E01B3A8F21" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="7FDA3579FCA4427C" classroomids="8562B3E01B3A8F21" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="7FDA3579FCA4427C" classroomids="8562B3E01B3A8F21" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="0519EA0219C86100" classroomids="8562B3E01B3A8F21" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="0519EA0219C86100" classroomids="8562B3E01B3A8F21" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="B500B96C10B81899" classroomids="425DFC212452C41A" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="B500B96C10B81899" classroomids="425DFC212452C41A" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="AC2332FBCBF02C42" classroomids="BBE8D9B17AB2E7C7" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="AC2332FBCBF02C42" classroomids="BBE8D9B17AB2E7C7" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="8ED7C69D52C9B77E" classroomids="EAC763AAC87CA3EE" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="8ED7C69D52C9B77E" classroomids="EAC763AAC87CA3EE" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="8F5777982B75ECA9" classroomids="F174E9F85E36E906" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="8F5777982B75ECA9" classroomids="F174E9F85E36E906" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="B914B6F63CA50732" classroomids="3E5CAB46B5B8E0ED" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="6BE5769804B85BDC" classroomids="B0D423502BE8F8D6" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="4C82E71FACB35592" classroomids="425DFC212452C41A" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="BD482ED7077AC55F" classroomids="2467AAB6EC1B0043" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="ADE7F6F9604E98EB" classroomids="55AC089DDBC06A70" period="8" weeks="11" terms="1" days="10000"/>
      <card lessonid="4FC3126990F70344" classroomids="E2CDDD43564F4404" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="4FC3126990F70344" classroomids="E2CDDD43564F4404" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="4FC3126990F70344" classroomids="E2CDDD43564F4404" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="A2A9F02EA567D59B" classroomids="E2CDDD43564F4404" period="7" weeks="11" terms="1" days="01000"/>
      <card lessonid="A2A9F02EA567D59B" classroomids="E2CDDD43564F4404" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="8F499CBCE518BFCF" classroomids="A0402F8BECD7C881" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="2407D0693EB6F9CB" classroomids="2467AAB6EC1B0043" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="FD85E1F16D9E334F" classroomids="2467AAB6EC1B0043" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="D7A2FE969FAE0F0A" classroomids="2467AAB6EC1B0043" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="66534052EBFD4E15" classroomids="F9C94211E943F513" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="A91A8769A9C990A2" classroomids="A15E20D77C992831" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="A91A8769A9C990A2" classroomids="A15E20D77C992831" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="A91A8769A9C990A2" classroomids="A15E20D77C992831" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="448CB0B9AB7863CC" classroomids="A15E20D77C992831" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="448CB0B9AB7863CC" classroomids="A15E20D77C992831" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="F1973EB58569A050" classroomids="BAF17CED8B6302B3" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="F1973EB58569A050" classroomids="425DFC212452C41A" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="3BBBE8F99C55320A" classroomids="EAC763AAC87CA3EE" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="3BBBE8F99C55320A" classroomids="EAC763AAC87CA3EE" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="75E7808D3C7EDC7D" classroomids="F174E9F85E36E906" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="75E7808D3C7EDC7D" classroomids="F174E9F85E36E906" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="29F10F14B4076E14" classroomids="B0D423502BE8F8D6" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="3E68550F79BB7DC2" classroomids="121C7291CF88C830" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="3E68550F79BB7DC2" classroomids="121C7291CF88C830" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="3E68550F79BB7DC2" classroomids="C813B709A5BCCB18" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="513C7C9A71376460" classroomids="2467AAB6EC1B0043" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="A4B29C81C8BC693B" classroomids="55AC089DDBC06A70" period="8" weeks="11" terms="1" days="01000"/>
      <card lessonid="557EB5A6C4F524E6" classroomids="CC208ABF8B76AE7D" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="557EB5A6C4F524E6" classroomids="CC208ABF8B76AE7D" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="557EB5A6C4F524E6" classroomids="CC208ABF8B76AE7D" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="715668C3CBFC9A81" classroomids="BEF30E4E5E3FAD57" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="715668C3CBFC9A81" classroomids="BEF30E4E5E3FAD57" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="DE00E0C82B64F471" classroomids="BEF30E4E5E3FAD57" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="77C897AC3F58AFCA" classroomids="BEF30E4E5E3FAD57" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="463177C024B53B83" classroomids="BF33F86DEA1E2A15" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="732C6C9385F5925D" classroomids="081AEAE7A605A14B" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="732C6C9385F5925D" classroomids="081AEAE7A605A14B" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="BF4EBC170D6FEF47" classroomids="B9B23008B9FCF973" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="435DB1EC4F315C23" classroomids="54900D815AC9FAEF" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="435DB1EC4F315C23" classroomids="54900D815AC9FAEF" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="72382D74369E44D8" classroomids="2044C51FB053D2A8" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="647E8D7B93F494FD" classroomids="081AEAE7A605A14B" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="C9A4C1398E82C79E" classroomids="AD3ECE624CC1384B" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="C9A4C1398E82C79E" classroomids="AD3ECE624CC1384B" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="C9A4C1398E82C79E" classroomids="AD3ECE624CC1384B" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="52EBF1D16F7BAB9B" classroomids="BEF30E4E5E3FAD57" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="E371820BAFF04AED" classroomids="BF33F86DEA1E2A15" period="8" weeks="11" terms="1" days="00001"/>
      <card lessonid="3C2864AA90D3A930" classroomids="33E6B859AD8D1EE1" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="3C2864AA90D3A930" classroomids="33E6B859AD8D1EE1" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="3C2864AA90D3A930" classroomids="33E6B859AD8D1EE1" period="7" weeks="11" terms="1" days="01000"/>
      <card lessonid="311BE7AF5B6C83A4" classroomids="0E8ABC0D2CCA9638" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="311BE7AF5B6C83A4" classroomids="0E8ABC0D2CCA9638" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="565E169311033FB3" classroomids="55AC089DDBC06A70" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="4E7E36DFFF592145" classroomids="55AC089DDBC06A70" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="12A16FE28D837484" classroomids="0E8ABC0D2CCA9638" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="3B5C90B924B3B886" classroomids="425DFC212452C41A" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="3B5C90B924B3B886" classroomids="425DFC212452C41A" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="F0CA267C6CAD0EAE" classroomids="BBE8D9B17AB2E7C7" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="886260AA0A841D04" classroomids="EAC763AAC87CA3EE" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="886260AA0A841D04" classroomids="EAC763AAC87CA3EE" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="886260AA0A841D04" classroomids="EAC763AAC87CA3EE" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="2DBDE7844575C68E" classroomids="F174E9F85E36E906" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="2DBDE7844575C68E" classroomids="F174E9F85E36E906" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="F7C0D71B446E25AD" classroomids="3E5CAB46B5B8E0ED" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="915D91EFC2369999" classroomids="C813B709A5BCCB18" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="915D91EFC2369999" classroomids="C813B709A5BCCB18" period="8" weeks="11" terms="1" days="01000"/>
      <card lessonid="915D91EFC2369999" classroomids="121C7291CF88C830" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="666DB187AF48E9EE" classroomids="0E8ABC0D2CCA9638" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="ADCE7E0A0A095EBA" classroomids="E2CDDD43564F4404" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="ADCE7E0A0A095EBA" classroomids="E2CDDD43564F4404" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="ADCE7E0A0A095EBA" classroomids="E2CDDD43564F4404" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="AD58EBCA185337AA" classroomids="E2CDDD43564F4404" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="AD58EBCA185337AA" classroomids="E2CDDD43564F4404" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="04D11269969BF72C" classroomids="33E6B859AD8D1EE1" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="04D11269969BF72C" classroomids="33E6B859AD8D1EE1" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="04D11269969BF72C" classroomids="33E6B859AD8D1EE1" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="73CF774F585842D3" classroomids="A0402F8BECD7C881" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="73CF774F585842D3" classroomids="A0402F8BECD7C881" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="201D4B33F8CAF615" classroomids="55AC089DDBC06A70" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="201D4B33F8CAF615" classroomids="55AC089DDBC06A70" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="07227EF6F5B4004A" classroomids="55AC089DDBC06A70" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="7F372F96706E4053" classroomids="55AC089DDBC06A70" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="0FBC7C67179B427B" classroomids="0E8ABC0D2CCA9638" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="89673E7FE575C1BC" classroomids="BAF17CED8B6302B3" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="89673E7FE575C1BC" classroomids="BAF17CED8B6302B3" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="F448BE3AA7EDBC66" classroomids="BBE8D9B17AB2E7C7" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="3AA676E01A464203" classroomids="EAC763AAC87CA3EE" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="3AA676E01A464203" classroomids="EAC763AAC87CA3EE" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="3AA676E01A464203" classroomids="EAC763AAC87CA3EE" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="A55B47A7CF468698" classroomids="F174E9F85E36E906" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="A55B47A7CF468698" classroomids="F174E9F85E36E906" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="DC89A95BC3780482" classroomids="3E5CAB46B5B8E0ED" period="7" weeks="11" terms="1" days="01000"/>
      <card lessonid="5E6A59EF7E64C7F1" classroomids="425DFC212452C41A" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="7368819167734CF3" classroomids="C813B709A5BCCB18" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="7368819167734CF3" classroomids="C813B709A5BCCB18" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="7368819167734CF3" classroomids="C813B709A5BCCB18" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="8EC305636B9666F1" classroomids="55AC089DDBC06A70" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="7EC7144BF14849B4" classroomids="0E8ABC0D2CCA9638" period="8" weeks="11" terms="1" days="01000"/>
      <card lessonid="14F20528452944AE" classroomids="1244DDCC9DA6AF1C" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="14F20528452944AE" classroomids="1244DDCC9DA6AF1C" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="14F20528452944AE" classroomids="1244DDCC9DA6AF1C" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="348215CDAEB0B7DB" classroomids="1244DDCC9DA6AF1C" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="348215CDAEB0B7DB" classroomids="1244DDCC9DA6AF1C" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="C1CC9BB07C9F6634" classroomids="CC208ABF8B76AE7D" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="C1CC9BB07C9F6634" classroomids="CC208ABF8B76AE7D" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="C1CC9BB07C9F6634" classroomids="CC208ABF8B76AE7D" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="A9435A5E3EB826EC" classroomids="BEF30E4E5E3FAD57" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="A9435A5E3EB826EC" classroomids="BEF30E4E5E3FAD57" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="7224C35DE95EDB80" classroomids="BEF30E4E5E3FAD57" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="A2A26A598EFAEC54" classroomids="BEF30E4E5E3FAD57" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="35CD0C9DA4ACCE8C" classroomids="BF33F86DEA1E2A15" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="55630852A10471DF" classroomids="352C0BD6CE8FC471" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="55630852A10471DF" classroomids="352C0BD6CE8FC471" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="4DF1B717F65FAEBA" classroomids="352C0BD6CE8FC471" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="4DF1B717F65FAEBA" classroomids="352C0BD6CE8FC471" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="A6F9489FDC4A5CB9" classroomids="081AEAE7A605A14B" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="A6F9489FDC4A5CB9" classroomids="081AEAE7A605A14B" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="873D858113640602" classroomids="B9B23008B9FCF973" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="06ACD26DAD7EBFE4" classroomids="B0DBA147EC2F2D0B" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="06ACD26DAD7EBFE4" classroomids="B0DBA147EC2F2D0B" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="06ACD26DAD7EBFE4" classroomids="B0DBA147EC2F2D0B" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="B68A29BFBF9906A7" classroomids="54900D815AC9FAEF" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="B68A29BFBF9906A7" classroomids="54900D815AC9FAEF" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="B9C9D80FD8C45E81" classroomids="3D0634BB0DD77C96" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="8D3320EBD184AB26" classroomids="081AEAE7A605A14B" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="62BC5D45B81720EC" classroomids="AD3ECE624CC1384B" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="62BC5D45B81720EC" classroomids="AD3ECE624CC1384B" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="62BC5D45B81720EC" classroomids="54F99E7E624F5A0D" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="C8606B59E324DD4E" classroomids="BEF30E4E5E3FAD57" period="8" weeks="11" terms="1" days="00100"/>
      <card lessonid="7312BDA377F7DE5E" classroomids="BF33F86DEA1E2A15" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="CDEEBC8F8EE456FC" classroomids="F9BFBEA3EAA755E7" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="CDEEBC8F8EE456FC" classroomids="F9BFBEA3EAA755E7" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="CDEEBC8F8EE456FC" classroomids="F9BFBEA3EAA755E7" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="CDEEBC8F8EE456FC" classroomids="F9BFBEA3EAA755E7" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="CDEEBC8F8EE456FC" classroomids="F9BFBEA3EAA755E7" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="27FAB58B523AE745" classroomids="EAC763AAC87CA3EE" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="532F579E313BF801" classroomids="1A1977AE9D56AB2E" period="4" weeks="10" terms="1" days="01000"/>
      <card lessonid="532F579E313BF801" classroomids="1A1977AE9D56AB2E" period="5" weeks="10" terms="1" days="01000"/>
      <card lessonid="532F579E313BF801" classroomids="1A1977AE9D56AB2E" period="6" weeks="10" terms="1" days="01000"/>
      <card lessonid="532F579E313BF801" classroomids="1A1977AE9D56AB2E" period="7" weeks="10" terms="1" days="01000"/>
      <card lessonid="0663AF2318DF6865" classroomids="1A1977AE9D56AB2E" period="4" weeks="01" terms="1" days="01000"/>
      <card lessonid="0663AF2318DF6865" classroomids="1A1977AE9D56AB2E" period="5" weeks="01" terms="1" days="01000"/>
      <card lessonid="0663AF2318DF6865" classroomids="1A1977AE9D56AB2E" period="6" weeks="01" terms="1" days="01000"/>
      <card lessonid="0663AF2318DF6865" classroomids="1A1977AE9D56AB2E" period="7" weeks="01" terms="1" days="01000"/>
      <card lessonid="00A810246C1EEDEE" classroomids="BCE497B2E99BB2D0" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="00A810246C1EEDEE" classroomids="BCE497B2E99BB2D0" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="00A810246C1EEDEE" classroomids="BCE497B2E99BB2D0" period="8" weeks="11" terms="1" days="00100"/>
      <card lessonid="00A810246C1EEDEE" classroomids="BCE497B2E99BB2D0" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="00A810246C1EEDEE" classroomids="BCE497B2E99BB2D0" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="0AAC4C39A01D68C4" classroomids="F9BFBEA3EAA755E7" period="6" weeks="01" terms="1" days="01000"/>
      <card lessonid="0AAC4C39A01D68C4" classroomids="F9BFBEA3EAA755E7" period="7" weeks="01" terms="1" days="01000"/>
      <card lessonid="F38193045730870D" classroomids="121C7291CF88C830" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="F38193045730870D" classroomids="121C7291CF88C830" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="F38193045730870D" classroomids="121C7291CF88C830" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="54AE09F01533C43A" classroomids="121C7291CF88C830" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="54AE09F01533C43A" classroomids="121C7291CF88C830" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="54AE09F01533C43A" classroomids="121C7291CF88C830" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="CABCFEF96A2601B8" classroomids="55AC089DDBC06A70" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="CABCFEF96A2601B8" classroomids="55AC089DDBC06A70" period="8" weeks="11" terms="1" days="00001"/>
      <card lessonid="5C3AF42157D4C0CC" classroomids="1A1977AE9D56AB2E" period="8" weeks="11" terms="1" days="00010"/>
      <card lessonid="27A5FF9D98D8F7AA" classroomids="0E8ABC0D2CCA9638,F9C94211E943F513" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="4B0840BF3E7B75BE" classroomids="2467AAB6EC1B0043" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="4B0840BF3E7B75BE" classroomids="2467AAB6EC1B0043" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="4B0840BF3E7B75BE" classroomids="2467AAB6EC1B0043" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="4B0840BF3E7B75BE" classroomids="2467AAB6EC1B0043" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="58E552513883D8E1" classroomids="6496F938411058CC,034E0A2787110558" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="58E552513883D8E1" classroomids="CDDDF785EAD5751A,034E0A2787110558" period="7" weeks="11" terms="1" days="01000"/>
      <card lessonid="5504E05CFAFF1737" classroomids="A4DECA4BD9259ABD,E677B9BE46B5C774" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="5504E05CFAFF1737" classroomids="A4DECA4BD9259ABD,E677B9BE46B5C774" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="1076D812FE3A90DA" classroomids="A4DECA4BD9259ABD,EF8128AF4A254EF1" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="1076D812FE3A90DA" classroomids="A4DECA4BD9259ABD,EF8128AF4A254EF1" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="A9B6DC07EECB0601" classroomids="A4DECA4BD9259ABD,EF8128AF4A254EF1" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="A9B6DC07EECB0601" classroomids="A4DECA4BD9259ABD,EF8128AF4A254EF1" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="8FF3388BE126F340" classroomids="034E0A2787110558,6496F938411058CC" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="8FF3388BE126F340" classroomids="034E0A2787110558,6496F938411058CC" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="4A3D2700E60E790D" classroomids="034E0A2787110558,6496F938411058CC" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="4A3D2700E60E790D" classroomids="034E0A2787110558,CDDDF785EAD5751A" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="2C393858E02E08DB" classroomids="034E0A2787110558,CDDDF785EAD5751A" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="70C596945EBD7F25" classroomids="CDDDF785EAD5751A,034E0A2787110558" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="199D729006D2988D" classroomids="EF8128AF4A254EF1,E677B9BE46B5C774" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="F218B2A825061594" classroomids="A4DECA4BD9259ABD,EF8128AF4A254EF1" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="1FC29FCAD5E0F649" classroomids="E677B9BE46B5C774,EF8128AF4A254EF1" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="F420880FA872C580" classroomids="EF8128AF4A254EF1,E677B9BE46B5C774" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="7ACA2ABBD44FC956" classroomids="EF8128AF4A254EF1,A4DECA4BD9259ABD" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="CA7AB3752EC9C400" classroomids="034E0A2787110558,CDDDF785EAD5751A" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="237F8850A5AE6D77" classroomids="034E0A2787110558,CDDDF785EAD5751A" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="626A075EC9E2FBBA" classroomids="A4DECA4BD9259ABD,EF8128AF4A254EF1" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="54337081F2AE241F" classroomids="E677B9BE46B5C774,A4DECA4BD9259ABD" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="3C157BC963F9D140" classroomids="A4DECA4BD9259ABD,E677B9BE46B5C774" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="439795B8C519FC66" classroomids="034E0A2787110558,6496F938411058CC" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="4F6953D53618DC72" classroomids="034E0A2787110558,6496F938411058CC" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="65AFC3A0E09C27F2" classroomids="6496F938411058CC,034E0A2787110558" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="090B59381D8BEE4D" classroomids="034E0A2787110558,6496F938411058CC" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="8F00CE1C483436D5" classroomids="034E0A2787110558,6496F938411058CC" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="09C6026A7128C79D" classroomids="034E0A2787110558,6496F938411058CC" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="2E34DE66B11A0B12" classroomids="CB369C06D2BF7127" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="2E34DE66B11A0B12" classroomids="CB369C06D2BF7127" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="2E34DE66B11A0B12" classroomids="A7088E6D2B40FEE7" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="A128B1275948DDAE" classroomids="A7088E6D2B40FEE7" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="A128B1275948DDAE" classroomids="A7088E6D2B40FEE7" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="ADAD3D80DA66B1DF" classroomids="CB369C06D2BF7127" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="ADAD3D80DA66B1DF" classroomids="A7088E6D2B40FEE7" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="F88233C7FF60A85A" classroomids="8562B3E01B3A8F21" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="F88233C7FF60A85A" classroomids="8562B3E01B3A8F21" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="A28F9014460C07F4" classroomids="EF8128AF4A254EF1,E677B9BE46B5C774" period="6" weeks="10" terms="1" days="01000"/>
      <card lessonid="A28F9014460C07F4" classroomids="EF8128AF4A254EF1,E677B9BE46B5C774" period="7" weeks="10" terms="1" days="01000"/>
      <card lessonid="77575AFD2E46C7EE" classroomids="034E0A2787110558,CDDDF785EAD5751A" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="77575AFD2E46C7EE" classroomids="034E0A2787110558,CDDDF785EAD5751A" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="3AA76C611DD175E6" classroomids="A4DECA4BD9259ABD,EF8128AF4A254EF1" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="3AA76C611DD175E6" classroomids="A4DECA4BD9259ABD,EF8128AF4A254EF1" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="C7F0E07909765A95" classroomids="E677B9BE46B5C774,EF8128AF4A254EF1" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="C7F0E07909765A95" classroomids="E677B9BE46B5C774,EF8128AF4A254EF1" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="9949A122E0AEAD89" classroomids="E677B9BE46B5C774,EF8128AF4A254EF1" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="7FF7B6774478676D" classroomids="6496F938411058CC,CDDDF785EAD5751A" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="67F1F4D7199F54DF" classroomids="6496F938411058CC,CDDDF785EAD5751A" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="068CEFFA72787412" classroomids="E677B9BE46B5C774,EF8128AF4A254EF1" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="068CEFFA72787412" classroomids="E677B9BE46B5C774,EF8128AF4A254EF1" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="C54C5ED53A0BD2A1" classroomids="E677B9BE46B5C774,EF8128AF4A254EF1" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="C54C5ED53A0BD2A1" classroomids="E677B9BE46B5C774,EF8128AF4A254EF1" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="C86526340D627EB1" classroomids="EF8128AF4A254EF1,E677B9BE46B5C774" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="C86526340D627EB1" classroomids="EF8128AF4A254EF1,E677B9BE46B5C774" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="89D067F9FA932C3E" classroomids="CDDDF785EAD5751A,6496F938411058CC" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="89D067F9FA932C3E" classroomids="CDDDF785EAD5751A,6496F938411058CC" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="B6760CCAF0DF7187" classroomids="F08C42F2BA7CD261" period="6" weeks="10" terms="1" days="01000"/>
      <card lessonid="A8A6DB59E2BECF6C" classroomids="A4DECA4BD9259ABD,E677B9BE46B5C774" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="8FB25A1958A65ADD" classroomids="84FD20D9B1F929D9" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="8FB25A1958A65ADD" classroomids="84FD20D9B1F929D9" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="8FB25A1958A65ADD" classroomids="84FD20D9B1F929D9" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="8FB25A1958A65ADD" classroomids="84FD20D9B1F929D9" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="8C9E112165DC7998" classroomids="84FD20D9B1F929D9" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="8C9E112165DC7998" classroomids="84FD20D9B1F929D9" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="852960F4C1C8C9FB" classroomids="05D782BE80078A44" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="852960F4C1C8C9FB" classroomids="05D782BE80078A44" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="599E6D8C10036029" classroomids="6F3B649BAE93C7ED" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="599E6D8C10036029" classroomids="121C7291CF88C830" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="599E6D8C10036029" classroomids="6F3B649BAE93C7ED" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="16FE0A0CAE067A09" classroomids="C813B709A5BCCB18" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="16FE0A0CAE067A09" classroomids="6F3B649BAE93C7ED" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="16FE0A0CAE067A09" classroomids="121C7291CF88C830" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="357E7EE0506A8BEF" classroomids="C813B709A5BCCB18" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="357E7EE0506A8BEF" classroomids="6F3B649BAE93C7ED" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="357E7EE0506A8BEF" classroomids="6F3B649BAE93C7ED" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="B9AF5CF220C64EEF" classroomids="8562B3E01B3A8F21" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="B9AF5CF220C64EEF" classroomids="8562B3E01B3A8F21" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="4442792CA17DC3D0" classroomids="F174E9F85E36E906" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="C8FC6DD1040B8D76" classroomids="7762136B7D1CC995" period="3" weeks="11" terms="1" days="01000"/>
      <card lessonid="C8FC6DD1040B8D76" classroomids="BCE497B2E99BB2D0" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="4FF9FF180B552BE1" classroomids="420EE7E5B29DC772" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="4FF9FF180B552BE1" classroomids="420EE7E5B29DC772" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="4FF9FF180B552BE1" classroomids="54F99E7E624F5A0D" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="4F775B0CE54D7A08" classroomids="420EE7E5B29DC772" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="4F775B0CE54D7A08" classroomids="AD3ECE624CC1384B" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="4F775B0CE54D7A08" classroomids="AD3ECE624CC1384B" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="C127F3ACB8E734AF" classroomids="BAF17CED8B6302B3,B0D423502BE8F8D6" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="551E7B739F2AE919" classroomids="425DFC212452C41A,BAF17CED8B6302B3" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="551E7B739F2AE919" classroomids="425DFC212452C41A,BAF17CED8B6302B3" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="551E7B739F2AE919" classroomids="425DFC212452C41A,BAF17CED8B6302B3" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="551E7B739F2AE919" classroomids="425DFC212452C41A,BAF17CED8B6302B3" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="4D3CE00BFD7ADED1" classroomids="BBE8D9B17AB2E7C7" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="F16E9D78F8EDE751" classroomids="BCE497B2E99BB2D0" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="F16E9D78F8EDE751" classroomids="7762136B7D1CC995" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="86EDAB5925970756" classroomids="A4DECA4BD9259ABD,E677B9BE46B5C774" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="86EDAB5925970756" classroomids="A4DECA4BD9259ABD,C5C48EE29DB9C760" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="497563FA36B5735E" classroomids="54F99E7E624F5A0D" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="497563FA36B5735E" classroomids="420EE7E5B29DC772" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="497563FA36B5735E" classroomids="420EE7E5B29DC772" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="7AC9C57481C050D2" classroomids="54F99E7E624F5A0D" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="7AC9C57481C050D2" classroomids="420EE7E5B29DC772" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="7AC9C57481C050D2" classroomids="54F99E7E624F5A0D" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="61C6E6BA25083882" classroomids="CA99F1B4146D0833" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="7A4157BB1005276B" classroomids="7762136B7D1CC995" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="4182DEE99C462A09" classroomids="F174E9F85E36E906" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="4182DEE99C462A09" classroomids="8562B3E01B3A8F21" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="58E36C3C722DBF19" classroomids="8DD1FBCCC276E6CB" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="58E36C3C722DBF19" classroomids="8562B3E01B3A8F21" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="58E36C3C722DBF19" classroomids="8562B3E01B3A8F21" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="58E36C3C722DBF19" classroomids="8DD1FBCCC276E6CB" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="58E36C3C722DBF19" classroomids="F174E9F85E36E906" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="AF187C5DC9791341" classroomids="9BB8E55190DDFBD2" period="1" weeks="01" terms="1" days="10000"/>
      <card lessonid="AF187C5DC9791341" classroomids="9BB8E55190DDFBD2" period="2" weeks="01" terms="1" days="10000"/>
      <card lessonid="AF187C5DC9791341" classroomids="9BB8E55190DDFBD2" period="3" weeks="01" terms="1" days="10000"/>
      <card lessonid="AF187C5DC9791341" classroomids="9BB8E55190DDFBD2" period="4" weeks="01" terms="1" days="10000"/>
      <card lessonid="84161F2D91D70B09" classroomids="2044C51FB053D2A8" period="1" weeks="01" terms="1" days="10000"/>
      <card lessonid="84161F2D91D70B09" classroomids="2044C51FB053D2A8" period="2" weeks="01" terms="1" days="10000"/>
      <card lessonid="84161F2D91D70B09" classroomids="2044C51FB053D2A8" period="3" weeks="01" terms="1" days="10000"/>
      <card lessonid="84161F2D91D70B09" classroomids="2044C51FB053D2A8" period="4" weeks="01" terms="1" days="10000"/>
      <card lessonid="358933B3CF5CCBCE" classroomids="9BB8E55190DDFBD2" period="1" weeks="10" terms="1" days="10000"/>
      <card lessonid="358933B3CF5CCBCE" classroomids="9BB8E55190DDFBD2" period="2" weeks="10" terms="1" days="10000"/>
      <card lessonid="358933B3CF5CCBCE" classroomids="9BB8E55190DDFBD2" period="3" weeks="10" terms="1" days="10000"/>
      <card lessonid="358933B3CF5CCBCE" classroomids="9BB8E55190DDFBD2" period="4" weeks="10" terms="1" days="10000"/>
      <card lessonid="DC72F7642EEC6DCB" classroomids="84FD20D9B1F929D9" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="DC72F7642EEC6DCB" classroomids="84FD20D9B1F929D9" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="E63EEAA9034F55CA" classroomids="18B1D7F8D5FE0B6A" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="E63EEAA9034F55CA" classroomids="18B1D7F8D5FE0B6A" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="E63EEAA9034F55CA" classroomids="A34C5EB2922E231A" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="E63EEAA9034F55CA" classroomids="18B1D7F8D5FE0B6A" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="7AE5D452A4EE5199" classroomids="061761F57F343583" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="7AE5D452A4EE5199" classroomids="CA99F1B4146D0833" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="10915798B1B339AA" classroomids="061761F57F343583" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="10915798B1B339AA" classroomids="061761F57F343583" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="666094803D387BA8" classroomids="0E8ABC0D2CCA9638" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="05A1B7568B9BC88B" classroomids="7762136B7D1CC995" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="05A1B7568B9BC88B" classroomids="7762136B7D1CC995" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="05A1B7568B9BC88B" classroomids="E2CDDD43564F4404" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="05A1B7568B9BC88B" classroomids="7762136B7D1CC995" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="91836C0A23CF70B7" classroomids="A0402F8BECD7C881" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="4B71CCE75C97D22E" classroomids="05D782BE80078A44" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="4B71CCE75C97D22E" classroomids="1244DDCC9DA6AF1C" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="5E2CC1BC9C86FCC1" classroomids="05D782BE80078A44" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="5E2CC1BC9C86FCC1" classroomids="05D782BE80078A44" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="FC1AC967767E8A92" classroomids="CC208ABF8B76AE7D,18B1D7F8D5FE0B6A" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="FC1AC967767E8A92" classroomids="CC208ABF8B76AE7D,18B1D7F8D5FE0B6A" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="DCE0A025F7A4E22A" classroomids="CC208ABF8B76AE7D,18B1D7F8D5FE0B6A" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="DCE0A025F7A4E22A" classroomids="CC208ABF8B76AE7D,18B1D7F8D5FE0B6A" period="6" weeks="11" terms="1" days="00001"/>
      <card lessonid="E4FA1845C181693C" classroomids="AF6ED248539EC883" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="E4FA1845C181693C" classroomids="AF6ED248539EC883" period="7" weeks="11" terms="1" days="00010"/>
      <card lessonid="E4FA1845C181693C" classroomids="33E6B859AD8D1EE1" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="28ADBF199A50EECE" classroomids="7762136B7D1CC995,AF6ED248539EC883" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="28ADBF199A50EECE" classroomids="7762136B7D1CC995,AF6ED248539EC883" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="28ADBF199A50EECE" classroomids="AF6ED248539EC883,33E6B859AD8D1EE1" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="1B61337B9455333F" classroomids="AF6ED248539EC883,BCE497B2E99BB2D0,F9BFBEA3EAA755E7" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="1B61337B9455333F" classroomids="AF6ED248539EC883,33E6B859AD8D1EE1,55AC089DDBC06A70" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="1B61337B9455333F" classroomids="AF6ED248539EC883,33E6B859AD8D1EE1,55AC089DDBC06A70" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="433EE3A8468755A4" classroomids="7762136B7D1CC995,BCE497B2E99BB2D0" period="3" weeks="11" terms="1" days="00010"/>
      <card lessonid="433EE3A8468755A4" classroomids="7762136B7D1CC995,BCE497B2E99BB2D0" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="433EE3A8468755A4" classroomids="7762136B7D1CC995,BCE497B2E99BB2D0" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="433EE3A8468755A4" classroomids="7762136B7D1CC995,BCE497B2E99BB2D0" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="CDEA0256EBDD3C7B" classroomids="BCE497B2E99BB2D0,7762136B7D1CC995" period="5" weeks="11" terms="1" days="00001"/>
      <card lessonid="CDEA0256EBDD3C7B" classroomids="BCE497B2E99BB2D0,7762136B7D1CC995" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="CDEA0256EBDD3C7B" classroomids="BCE497B2E99BB2D0,7762136B7D1CC995" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="CDEA0256EBDD3C7B" classroomids="BCE497B2E99BB2D0,7762136B7D1CC995" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="48329C7FCC893E37" classroomids="05D782BE80078A44" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="48329C7FCC893E37" classroomids="05D782BE80078A44" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="4B27FB06F55ED69C" classroomids="1244DDCC9DA6AF1C" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="4B27FB06F55ED69C" classroomids="05D782BE80078A44" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="4B27FB06F55ED69C" classroomids="1244DDCC9DA6AF1C" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="4B27FB06F55ED69C" classroomids="05D782BE80078A44" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="AB1BA1C4DB91A612" classroomids="B9B23008B9FCF973" period="7" weeks="11" terms="1" days="00001"/>
      <card lessonid="AB1BA1C4DB91A612" classroomids="84FD20D9B1F929D9" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="6ABBB19331129503" classroomids="CC208ABF8B76AE7D" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="6ABBB19331129503" classroomids="18B1D7F8D5FE0B6A" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="6ABBB19331129503" classroomids="A34C5EB2922E231A" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="6ABBB19331129503" classroomids="CC208ABF8B76AE7D" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="56EC229E9299BDA8" classroomids="54900D815AC9FAEF" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="56EC229E9299BDA8" classroomids="B0DBA147EC2F2D0B" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="56EC229E9299BDA8" classroomids="B0DBA147EC2F2D0B" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="2ABB5F726EB6C0F5" classroomids="33E6B859AD8D1EE1" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="2ABB5F726EB6C0F5" classroomids="A0402F8BECD7C881" period="2" weeks="11" terms="1" days="00010"/>
      <card lessonid="C92F124710AB526B" classroomids="420EE7E5B29DC772" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="C92F124710AB526B" classroomids="420EE7E5B29DC772" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="C92F124710AB526B" classroomids="54F99E7E624F5A0D" period="2" weeks="11" terms="1" days="00001"/>
      <card lessonid="03668DDE402F9918" classroomids="2467AAB6EC1B0043" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="03668DDE402F9918" classroomids="2467AAB6EC1B0043" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="CCB5EB538D7F5869" classroomids="AF6ED248539EC883,7762136B7D1CC995" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="CCB5EB538D7F5869" classroomids="AF6ED248539EC883,7762136B7D1CC995" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="CCB5EB538D7F5869" classroomids="7762136B7D1CC995,AF6ED248539EC883" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="1B9BF35157241BC4" classroomids="55AC089DDBC06A70,2467AAB6EC1B0043" period="6" weeks="01" terms="1" days="01000"/>
      <card lessonid="1B9BF35157241BC4" classroomids="55AC089DDBC06A70,2467AAB6EC1B0043" period="7" weeks="01" terms="1" days="01000"/>
      <card lessonid="1625165B754DE77D" classroomids="2467AAB6EC1B0043,0E8ABC0D2CCA9638" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="11F7D734DCFE6A54" classroomids="1244DDCC9DA6AF1C" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="11F7D734DCFE6A54" classroomids="18B1D7F8D5FE0B6A" period="7" weeks="11" terms="1" days="00100"/>
      <card lessonid="11F7D734DCFE6A54" classroomids="18B1D7F8D5FE0B6A" period="6" weeks="11" terms="1" days="01000"/>
      <card lessonid="806E21D402FB9752" classroomids="7762136B7D1CC995" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="806E21D402FB9752" classroomids="7762136B7D1CC995" period="8" weeks="11" terms="1" days="00100"/>
      <card lessonid="FFCB42EBE90238EC" classroomids="F9BFBEA3EAA755E7" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="B047E269DFAF4159" classroomids="EF8128AF4A254EF1" period="8" weeks="11" terms="1" days="01000"/>
      <card lessonid="4315625C3D92B1E4" classroomids="E677B9BE46B5C774" period="8" weeks="11" terms="1" days="10000"/>
      <card lessonid="1166A8A95AB988BE" classroomids="AF6ED248539EC883" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="1166A8A95AB988BE" classroomids="AF6ED248539EC883" period="2" weeks="11" terms="1" days="10000"/>
      <card lessonid="FFCE9AE361D1DB13" classroomids="AF6ED248539EC883" period="8" weeks="11" terms="1" days="01000"/>
      <card lessonid="06007406CE6BED17" classroomids="2467AAB6EC1B0043" period="8" weeks="11" terms="1" days="10000"/>
      <card lessonid="8E35ECBD88AD82E9" classroomids="2467AAB6EC1B0043" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="4CAC87908F93DDE8" classroomids="F08C42F2BA7CD261" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="4CAC87908F93DDE8" classroomids="F08C42F2BA7CD261" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="4CAC87908F93DDE8" classroomids="F08C42F2BA7CD261" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="BA5BA9BB941FDCD2" classroomids="F08C42F2BA7CD261" period="1" weeks="10" terms="1" days="00100"/>
      <card lessonid="EEB4923B9705F0D5" classroomids="F08C42F2BA7CD261" period="1" weeks="01" terms="1" days="00100"/>
      <card lessonid="F3688AAE665E194E" classroomids="F08C42F2BA7CD261" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="F3688AAE665E194E" classroomids="F08C42F2BA7CD261" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="F3688AAE665E194E" classroomids="F08C42F2BA7CD261" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="63B7D971AFC18F17" classroomids="2BA54C5FE0B7394F" period="3" weeks="11" terms="1" days="10000"/>
      <card lessonid="63B7D971AFC18F17" classroomids="DF7822A96933292D" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="63B7D971AFC18F17" classroomids="2BA54C5FE0B7394F" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="F493AA08F5E88348" classroomids="DF7822A96933292D" period="1" weeks="01" terms="1" days="00100"/>
      <card lessonid="9A12D926D8726D83" classroomids="2FD45013DE2A5063" period="2" weeks="11" terms="1" days="00100"/>
      <card lessonid="9A12D926D8726D83" classroomids="2BA54C5FE0B7394F" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="9A12D926D8726D83" classroomids="2FD45013DE2A5063" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="09A5CD5921112061" classroomids="2FD45013DE2A5063" period="1" weeks="10" terms="1" days="00100"/>
      <card lessonid="8B6FED1782AF5C34" classroomids="B0D423502BE8F8D6" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="A7DC1A26F91DE9BE" classroomids="CFF7D3B7BA73393E" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="A7DC1A26F91DE9BE" classroomids="CFF7D3B7BA73393E" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="A7DC1A26F91DE9BE" classroomids="CFF7D3B7BA73393E" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="A20767BE2CE79F05" classroomids="CFF7D3B7BA73393E" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="A20767BE2CE79F05" classroomids="CFF7D3B7BA73393E" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="A20767BE2CE79F05" classroomids="CFF7D3B7BA73393E" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="E7622ADFB66CC636" classroomids="CFF7D3B7BA73393E" period="2" weeks="10" terms="1" days="00010"/>
      <card lessonid="A666D964821889E8" classroomids="CFF7D3B7BA73393E" period="2" weeks="01" terms="1" days="00010"/>
      <card lessonid="7F80691C93B9CE9E" classroomids="CFF7D3B7BA73393E" period="6" weeks="01" terms="1" days="00100"/>
      <card lessonid="8FAA22DF025953B6" classroomids="2FD45013DE2A5063" period="5" weeks="11" terms="1" days="00100"/>
      <card lessonid="8FAA22DF025953B6" classroomids="2FD45013DE2A5063" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="8FAA22DF025953B6" classroomids="2FD45013DE2A5063" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="CA4EBE7FCA162B76" classroomids="2FD45013DE2A5063" period="2" weeks="10" terms="1" days="00010"/>
      <card lessonid="9121D914E0CB6143" classroomids="DF7822A96933292D" period="2" weeks="01" terms="1" days="00010"/>
      <card lessonid="A61F9E5B2ADDFDEF" classroomids="DF7822A96933292D" period="4" weeks="11" terms="1" days="01000"/>
      <card lessonid="A61F9E5B2ADDFDEF" classroomids="DF7822A96933292D" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="A61F9E5B2ADDFDEF" classroomids="DF7822A96933292D" period="4" weeks="11" terms="1" days="00001"/>
      <card lessonid="B9F05BF816A30D8E" classroomids="29FF747B4241426D" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="B9F05BF816A30D8E" classroomids="29FF747B4241426D" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="B9F05BF816A30D8E" classroomids="29FF747B4241426D" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="14DDBD82346ED9C8" classroomids="FBADE5F971FB9E91" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="14DDBD82346ED9C8" classroomids="FBADE5F971FB9E91" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="14DDBD82346ED9C8" classroomids="FBADE5F971FB9E91" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="C4F179ED21837983" classroomids="29FF747B4241426D" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="C4F179ED21837983" classroomids="29FF747B4241426D" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="C4F179ED21837983" classroomids="29FF747B4241426D" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="F8BF22F84C64FE4A" classroomids="834B8B86280BE28C" period="4" weeks="11" terms="1" days="00100"/>
      <card lessonid="F8BF22F84C64FE4A" classroomids="834B8B86280BE28C" period="4" weeks="11" terms="1" days="10000"/>
      <card lessonid="F8BF22F84C64FE4A" classroomids="834B8B86280BE28C" period="5" weeks="11" terms="1" days="00010"/>
      <card lessonid="547B4FB24004BA8B" classroomids="29FF747B4241426D" period="3" weeks="10" terms="1" days="01000"/>
      <card lessonid="7DEDB69FDA1FD61D" classroomids="37E5FB48DF6CAE46" period="3" weeks="01" terms="1" days="01000"/>
      <card lessonid="2C44194672D7727C" classroomids="FBADE5F971FB9E91" period="3" weeks="10" terms="1" days="01000"/>
      <card lessonid="7BC65656F3B14215" classroomids="29FF747B4241426D" period="3" weeks="01" terms="1" days="01000"/>
      <card lessonid="A34176229C41E581" classroomids="29FF747B4241426D" period="6" weeks="01" terms="1" days="00100"/>
      <card lessonid="2C799EF94D818582" classroomids="2044C51FB053D2A8" period="1" weeks="10" terms="1" days="10000"/>
      <card lessonid="2C799EF94D818582" classroomids="2044C51FB053D2A8" period="2" weeks="10" terms="1" days="10000"/>
      <card lessonid="2C799EF94D818582" classroomids="2044C51FB053D2A8" period="3" weeks="10" terms="1" days="10000"/>
      <card lessonid="2C799EF94D818582" classroomids="2044C51FB053D2A8" period="4" weeks="10" terms="1" days="10000"/>
      <card lessonid="C721A551A8852913" classroomids="F2A8CBB3E984A461,3E5CAB46B5B8E0ED" period="4" weeks="01" terms="1" days="01000"/>
      <card lessonid="C721A551A8852913" classroomids="F2A8CBB3E984A461,3E5CAB46B5B8E0ED" period="5" weeks="01" terms="1" days="01000"/>
      <card lessonid="127AAE8216AC6A93" classroomids="F2A8CBB3E984A461" period="4" weeks="10" terms="1" days="01000"/>
      <card lessonid="127AAE8216AC6A93" classroomids="F2A8CBB3E984A461" period="5" weeks="10" terms="1" days="01000"/>
      <card lessonid="306665C4EBEC0828" classroomids="6496F938411058CC,F1D581A87F77219F" period="3" weeks="11" terms="1" days="00100"/>
      <card lessonid="306665C4EBEC0828" classroomids="6496F938411058CC,F1D581A87F77219F" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="C57B94AB5F8EBE4A" classroomids="EAC763AAC87CA3EE,E677B9BE46B5C774,EF8128AF4A254EF1,034E0A2787110558" period="2" weeks="11" terms="1" days="01000"/>
      <card lessonid="5CE73825B2A0B438" classroomids="C813B709A5BCCB18" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="5CE73825B2A0B438" classroomids="121C7291CF88C830" period="5" weeks="11" terms="1" days="01000"/>
      <card lessonid="5CE73825B2A0B438" classroomids="61E630D003A7DE74" period="1" weeks="11" terms="1" days="00100"/>
      <card lessonid="5FFBEE8C961180E3" classroomids="034E0A2787110558,6496F938411058CC" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="9F58E3FC721B707A" classroomids="303F56E70FD472F3" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="72A44F4175F7F1BC" classroomids="6F3B649BAE93C7ED" period="8" weeks="11" terms="1" days="00100"/>
      <card lessonid="72A44F4175F7F1BC" classroomids="6F3B649BAE93C7ED" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="67D62555C442B0AE" classroomids="05D782BE80078A44" period="7" weeks="11" terms="1" days="10000"/>
      <card lessonid="67D62555C442B0AE" classroomids="05D782BE80078A44" period="7" weeks="11" terms="1" days="01000"/>
      <card lessonid="0627102C7C4C9B56" classroomids="A34C5EB2922E231A" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="0627102C7C4C9B56" classroomids="05D782BE80078A44" period="1" weeks="11" terms="1" days="00010"/>
      <card lessonid="0627102C7C4C9B56" classroomids="05D782BE80078A44" period="1" weeks="11" terms="1" days="00001"/>
      <card lessonid="D1E4B02BC5C17BD0" classroomids="55AC089DDBC06A70" period="1" weeks="11" terms="1" days="01000"/>
      <card lessonid="D1E4B02BC5C17BD0" classroomids="F9BFBEA3EAA755E7" period="3" weeks="11" terms="1" days="00001"/>
      <card lessonid="D1E4B02BC5C17BD0" classroomids="7762136B7D1CC995" period="5" weeks="11" terms="1" days="10000"/>
      <card lessonid="34B9681A456268B5" classroomids="7762136B7D1CC995" period="1" weeks="11" terms="1" days="10000"/>
      <card lessonid="34B9681A456268B5" classroomids="BCE497B2E99BB2D0" period="4" weeks="11" terms="1" days="00010"/>
      <card lessonid="FA8E1C1938F839FC" classroomids="8DD1FBCCC276E6CB" period="6" weeks="11" terms="1" days="00010"/>
      <card lessonid="FA8E1C1938F839FC" classroomids="8DD1FBCCC276E6CB" period="6" weeks="11" terms="1" days="10000"/>
      <card lessonid="F1EA254FCD2BFBDC" classroomids="8DD1FBCCC276E6CB" period="6" weeks="11" terms="1" days="00100"/>
      <card lessonid="F1EA254FCD2BFBDC" classroomids="8DD1FBCCC276E6CB" period="5" weeks="11" terms="1" days="00001"/>
   </cards>
</timetable>`;
