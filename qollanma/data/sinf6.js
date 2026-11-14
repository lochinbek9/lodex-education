// 6-sinf · 3 oylik dastur · 12 hafta × 2 dars = 24 dars (har biri 45 daqiqa)
// Format 2, 3 va 4-sinf bilan bir xil.
// Asosiy yo'nalishlar: Arduino Uno, Tinkercad Circuits (sxemotexnika), elektronika va C++ dasturlash.
// prog rang kodi: y — setup/boshlash (sariq), o — loop/takrorlash (to'q sariq), b — port boshqaruvi (ko'k),
//   s — datchik/o'qish (havorang), g — mantiq/shart (yashil), r — delay/tovush (qizil), v — o'zgaruvchi (qizg'ish), p — ekran/serial (binafsha)
window.QOLLANMA.grades[6] = {
  title: "6-sinf · 3 oylik dastur",
  desc: "11–12 yoshli o'quvchilar uchun: elektronika asoslari, sxemotexnika, Tinkercad Circuits simulyatori, Arduino Uno mikrokontrolleri, datchiklar, aktuatorlar va C++ asosida dasturlash.",
  stats: [["12", "hafta"], ["24", "dars"], ["45", "daqiqa"], ["3", "modul"]],
  modules: [
    {
      id: 1,
      color: "m1",
      title: "1-modul. Elektronika asoslari va Tinkercad Circuits",
      weeks: "1–4-hafta",
      desc: "Tok, kuchlanish, Om qonuni, Breadboard, LEDlar, tugmalar, pyezo-buzzer va raqamli portlarni boshqarish.",
      progNote: "Rang kodi: sariq — setup(), to'q sariq — loop(), ko'k — digitalWrite/pinMode, havorang — digitalRead, yashil — if/shart, qizil — delay/tone."
    },
    {
      id: 2,
      color: "m2",
      title: "2-modul. Analog signallar, sensorlar va aktuatorlar",
      weeks: "5–8-hafta",
      desc: "PWM (kenglik-impuls modulyatsiyasi), potensiometr, fotorezistor (LDR), servomotor (SG90), ultratovush masofa sensori va Serial Monitor."
    },
    {
      id: 3,
      color: "m3",
      title: "3-modul. Murakkab tizimlar, Arduino IDE va yakuniy loyihalar",
      weeks: "9–12-hafta",
      desc: "RGB LED, PIR harakat sensori, LCD 16x2 ekran, real Arduino IDE bilan ishlash va jamoaviy «Aqlli shahar» loyihalari."
    }
  ],
  lessons: [
    {
      n: 1, mod: 1, t: "Elektronika olamiga kirish: Tok, kuchlanish va Om qonuni",
      goal: "O'quvchilar elektr tokining tabiati, elektr zanjiri tushunchasi, tok kuchi (Amper), kuchlanish (Volt) va qarshilik (Om) kattaliklari hamda Tinkercad Circuits virtual laboratoriyasi bilan tanishadi.",
      out: ["Yopiq va ochiq elektr zanjirining farqini tushuntiradi", "Tok (I), kuchlanish (U) va qarshilik (R) birliklarini aytadi", "Tinkercad Circuits'da batareya, rezistor va lampochkadan iborat birinchi virtual zanjirni yig'adi"],
      need: ["Kompyuterlar, internet brauzeri, Tinkercad Circuits (tinkercad.com) hisobi"],
      plan: [["6", "Elektr toki nima? Suv quvuri misolida: suv bosimi — kuchlanish, oqayotgan suv — tok, quvur torligi — qarshilik."], ["8", "Tinkercad Circuits bilan tanishuv: qismlar kutubxonasi, simlar ulash va «Start Simulation» tugmasi."], ["23", "Amaliy ish: Virtual batareya va chiroq zanjiri."], ["4", "«Saralash» o'yini."], ["4", "Xulosa va test."]],
      tips: ["Elektronikani tushuntirishda har doim «suv quvuri» o'xshatishidan foydalaning: kuchlanish (Volt) — suvni itaruvchi nasos, tok (Amper) — oqayotgan suv miqdori, rezistor (Om) — jo'mrak.", "Zanjir har doim musbatdan (+) manfiyga (-) qarab berk bo'lishi shartligini (Close circuit) alohida ta'kidlang."],
      pt: "Amaliy ish: «Birinchi elektr zanjiri»",
      steps: [
        "Tinkercad'ga kiring, chap menyudan «Designs» → «Circuits» (Sxemalar) bo'limini tanlang va «New Circuit» tugmasini bosing.",
        "O'ng paneldan 9V batareyani (9V Battery) ish maydoniga olib chiqing.",
        "Kutubxonadan oddiy lampochka (Lightbulb) yoki LED chiroq oling.",
        "Batareyaning musbat (qizil, Positive) qutbidan sichqoncha bilan sim tortib, chiroqning birinchi oyog'iga ulang.",
        "Sim rangini qizil qiling (standart qoida: musbat = qizil).",
        "Chiroqning ikkinchi oyog'idan batareyaning manfiy (qora, Negative) qutbiga qora sim torting.",
        "Yuqori o'ng burchakdagi yashil «Start Simulation» (Simulyatsiyani boshlash) tugmasini bosing.",
        "Chiroq yondi! Simulyatsiyani to'xtatib, simlardan birini uzib ko'ring — nima sodir bo'ldi?"
      ],
      extra: ["Zanjirga kalit (Slide Switch) qo'shing va chiroqni o'chirib-yoqishni sinang.", "Batareyani 1.5V li tanga batareyaga (Coin cell) almashtirib, yorug'lik qanday o'zgarishini kuzating."],
      ask: [
        ["Elektr toki nima?", "Zaryadlangan zarrachalarning (elektronlarning) tartibli harakati."],
        ["Kuchlanish qaysi birlikda o'lchanadi?", "Voltlarda (V). Masalan: batareya 9V, telefon quvvatlagichi 5V."],
        ["Elektr zanjiri uzilsa nima bo'ladi?", "Tok oqishi to'xtaydi va chiroq o'chadi (ochiq zanjir)."],
        ["Qizil va qora simlar odatda nimani bildiradi?", "Qizil — musbat (+), qora — manfiy (-) yoki yer (GND)."]
      ],
      quiz: [
        ["Elektr tok kuchi qaysi birlikda o'lchanadi?", "Amper (A)", "Volt (V)", "Kilogramm (kg)"],
        ["Om qonuni formulasi qaysi?", "I = U / R", "E = mc²", "P = m × g"],
        ["Tinkercad Circuits'da sxemani ishga tushiruvchi tugma qaysi?", "Start Simulation", "Export", "Code"],
        ["Elektr zanjirida tok qayerdan qayerga oqadi deb qabul qilingan?", "Musbatdan (+) manfiyga (-)", "Manfiydan manfiyga", "Faqat bir joyda turadi"],
        ["Kuchlanish manbaiga nima misol bo'ladi?", "Batareya va akkumulyator", "Rezistor", "Oddiy sim"]
      ],
      game: {
        type: "sort",
        title: "Tok, Kuchlanish yoki Qarshilik?",
        desc: "Kattaliklarni o'z xususiyatlariga qarab guruhlang:",
        cats: ["Kuchlanish (Volt - V)", "Tok kuchi (Amper - A)", "Qarshilik (Om - Ω)"],
        items: [
          ["Elektronlarni itaruvchi elektr bosimi", 0],
          ["Simdan bir soniyada o'tayotgan zaryadlar miqdori", 1],
          ["Tok oqishiga to'sqinlik qiluvchi qarshilik", 2],
          ["9V batareya quvvati", 0],
          ["Rezistorning asosiy xususiyati", 2],
          ["Ampermetr bilan o'lchanadigan kattalik", 1]
        ]
      },
      topic: [
        { e: "⚡", h: "Ko'rinmas kuch — elektr", p: "Biz elektr tokini ko'ra olmaymiz, lekin uning natijasini ko'ramiz: yongan chiroq, aylanayotgan motor, ishlayotgan kompyuter. Zamonaviy dunyoni elektrsiz tasavvur qilib bo'lmaydi.", q: "Birinchi batareyani kim ixtiro qilgan?", a: "Italiyalik olim Alessandro Volta (1800-yilda)." },
        { e: "🌊", h: "Suv quvuri qonuni", p: "Tokni tushunish oson: kuchlanish — baland minoradagi suv idishi. Minora qancha baland bo'lsa (katta kuchlanish), suv shuncha kuchli bosim bilan pastga otilib oqadi.", q: "Rezistor nima ish qiladi?", a: "U quvurni toraytirib, suv oqimini cheklaydi." },
        { e: "💻", h: "Tinkercad Circuits mo''jizasi", p: "Haqiqiy sxema yig'ishda detalni kuydirib qo'yishdan qo'rqish mumkin. Virtual laboratoriyada esa istalgancha tajriba o'tkazish, portlatib ko'rish va o'rganish mutlaqo bepul va xavfsizdir!", q: "Virtual laboratoriyada tok urishi mumkinmi?", a: "Yo'q, bu mutlaqo xavfsiz!" }
      ],
      prog: [{ t: "Oddiy elektr zanjiri", b: ["y:🔋 9V Batareya (+)", "b:🔴 Qizil sim", "g:💡 Lampochka", "b:⚫ Qora sim", "y:🔋 9V Batareya (-)"] }],
      video: [["wY9kQz1B-lM", "Elektr toki va kuchlanish nima? (o'zbek tilida)"], ["a68_g2IpepU", "Tinkercad Circuits darslari: 1-dars"]],
      yq: "tinkercad circuits tutorial electric circuit basics ohm law",
      hw: ["Uyingizdagi elektr bilan ishlaydigan 5 ta maishiy texnikani yozing va ularning quvvat manbaini (tarmoq 220V yoki batareya) belgilang."]
    },
    {
      n: 2, mod: 1, t: "Maket platasi (Breadboard) va yorug'lik diodi (LED)",
      goal: "O'quvchilar maket platasi (Breadboard) qanday ishlashini, ichki relslar ulanishini, LED diodining qutblarini (Anod va Katod) hamda rezistorning cheklovchi vazifasini o'rganadi.",
      out: ["Breadboard ichidagi gorizontal va vertikal chiziqlar bog'lanishini tushuntiradi", "LEDning musbat (Anod) va manfiy (Katod) oyoqlarini to'g'ri ulaydi", "LEDni kuydirmaslik uchun 220 Om rezistorni hisoblab ulaydi"],
      need: ["Kompyuterlar, Tinkercad Circuits"],
      plan: [["6", "Savol: nima uchun elektronikada simlarni kavsharlamasdan (payka qilmasdan) tez yig'ib-buzish mumkin? Breadboard siri."], ["8", "Yangi mavzu: Breadboard relslari (quvvat va signal qatorlari), LED diodi (Anod +, Katod -) va 220 Om rezistor."], ["23", "Amaliy ish: Breadboard ustida xavfsiz LED zanjiri."], ["4", "«Juftini top» o'yini."], ["4", "Xulosa va test."]],
      tips: ["Breadboard chetidagi `+` va `-` qatorlari uzun bo'ylab (gorizontal) birlashganini, o'rtadagi teshiklar esa 5 tadan vertikal birlashganini doskada aniq chizib ko'rsating.", "LED diodini rezistorsiz to'g'ridan-to'g'ri 9V ga ulasangiz, Tinkercad'da portlash (tutun) belgisi chiqadi — bu orqali rezistorning himoya vazifasini tushuntiring."],
      pt: "Amaliy ish: «Breadboardda LED yoqish»",
      steps: [
        "Tinkercad Circuits'da yangi sxema oching va nomini «LED va Breadboard» deb qo'ying.",
        "Maydonga kichik maket platasini (Breadboard Small) olib chiqing.",
        "Kutubxonadan LED (Light Emitting Diode) oling va plataga o'rnating. Uning egilgan oyog'i — Anod (+), to'g'ri oyog'i — Katod (-).",
        "Rezistor (Resistor) oling. Uning ustiga bosing va qarshiligini `220` `Ω` (Om) qilib sozlang (chiziqlar rangi: qizil-qizil-jigarrang).",
        "Rezistorni LEDning Anod oyog'iga ketma-ket ulang.",
        "9V batareyaning qora (-) simini Breadboardning `-` qatoriga, qizil (+) simini `+` qatoriga ulang.",
        "Rezistordan `+` qatoriga, LEDning Katodidan `-` qatoriga sim ulang.",
        "«Start Simulation» ni bosing: LED yorqin va xavfsiz yonadi!",
        "Tajriba: rezistorni olib tashlab, to'g'ridan-to'g'ri ulab ko'ring. Nima sodir bo'ldi? (LED kuyadi!)"
      ],
      extra: ["LED rangini o'zgartiring (ko'k, yashil, sariq).", "Ikkita LEDni ketma-ket va parallel ulab, yorug'ligini taqqoslang."],
      ask: [
        ["Breadboard (maket platasi) nima uchun kerak?", "Simlarni kavsharlamasdan tez va qulay sxemalar yig'ish hamda sinash uchun."],
        ["LED qisqartmasi nimani bildiradi?", "Yorug'lik tarqatuvchi diod (Light Emitting Diode)."],
        ["LEDning qaysi oyog'i musbat (+)?", "Uzunroq yoki egilgan oyog'i — Anod."],
        ["Nega LEDga albatta rezistor ulash shart?", "LED orqali ortiqcha kuchli tok o'tib, uni kuydirib yubormasligi (himoya qilish) uchun."]
      ],
      quiz: [
        ["LEDning musbat qutbi nima deb ataladi?", "Anod", "Katod", "Zemlya (GND)"],
        ["LEDni 5V yoki 9V manbaga ulaganda qanday qarshilikli rezistor eng ma'qul?", "220 Om", "1 MegaOm", "0 Om"],
        ["Breadboard o'rtasidagi teshiklar qanday ulangan?", "5 tadan vertikal qator bo'lib", "Butun taxta bo'ylab bitta sim", "Ulanmagan"],
        ["Diodning asosiy xususiyati nima?", "Tokni faqat bir tomonga o'tkazadi", "Tokni to'xtatadi", "Tokni kuchaytiradi"],
        ["Agar LED teskari ulansa nima bo'ladi?", "U shunchaki yonmaydi (lekin kuymaydi)", "Portlaydi", "Rangi o'zgaradi"]
      ],
      game: {
        type: "memory",
        title: "Juftini top: Elektronika qismlari",
        pairs: [
          ["Anod", "LEDning musbat (+) oyog'i"],
          ["Katod", "LEDning manfiy (-) oyog'i"],
          ["Breadboard", "Kavsharlashsiz maket platasi"],
          ["Rezistor (220 Ω)", "Tokni cheklovchi himoya"],
          ["LED", "Yorug'lik tarqatuvchi diod"],
          ["GND (Ground)", "Manfiy qutb (Yer)"]
        ]
      },
      topic: [
        { e: "💡", h: "LED — kelajak nuri", p: "Eski cho'g'lanma lampalar energiyaning 90% ini issiqlikka sarflab yuborgan. LED diodlar esa sovuq nur taratadi va 10 barobar kam energiya sarflaydi. Telefon ekranidan tortib ko'cha chiroqlarigacha hamma joyda LED ishlatiladi.", q: "Qizil LED qachon kashf qilingan?", a: "1962-yilda Nik Xolonyak tomonidan." },
        { e: "🍞", h: "Nega nomi «Breadboard»?", p: "Inglizchada «Breadboard» — non kesadigan taxta degani! Qadimda birinchi radiohavaskorlar onalarining non taxtasiga mix qoqqan holda simlarni ulashgan. Bugungi plastik platamiz o'sha tarix sharafiga shunday ataladi.", q: "Plata ichida nima bor?", a: "Metall qisqichli ingichka mis relslar." },
        { e: "🛡️", h: "Rezistor — kichik qahramon", p: "Rezistor ustidagi rangli chiziqlar (kodlar) uning qarshiligini bildiradi. Qizil-qizil-jigarrang = 220 Om. U o'zidan o'tadigan tokni jilovlab, nozik diodlarni kuyishdan asraydi.", q: "Katta rezistor qo'ysak nima bo'ladi?", a: "Tok kamayib, chiroq juda xira yonadi." }
      ],
      prog: [{ t: "LED ulanish zanjiri", b: ["y:🔋 Quvvat (+)", "b:🛑 Rezistor 220 Om", "g:💡 LED Anod (+)", "b:💡 LED Katod (-)", "y:⚫ GND (Yer / -)"] }],
      video: [["wY9kQz1B-lM", "Breadboard qanday ishlaydi? (o'zbek tilida)"], ["a68_g2IpepU", "LED va rezistor bilan ishlash"]],
      yq: "breadboard tutorial led resistor tinkercad circuits",
      hw: ["Rangli qalamlar bilan daftaringizga LED rasmini chizing va Anod hamda Katod oyoqlarini belgilang."]
    },
    {
      n: 3, mod: 1, t: "Arduino Uno bilan tanishuv va birinchi «Blink» kodi",
      goal: "O'quvchilar Arduino Uno mikrokontrollerining tuzilishi (ATmega328P miyasi, raqamli pinlar, quvvat pinlari) va C++ tilidagi dasturning asosiy ikki qismi (`setup()` va `loop()`) bilan tanishadi.",
      out: ["Arduino mikrokontrollerining asosiy qismlarini ko'rsatadi", "`pinMode()`, `digitalWrite()` va `delay()` buyruqlari vazifasini tushuntiradi", "13-pinga ulangan LEDni 1 soniya yonib, 1 soniya o'chadigan (Blink) qiladi"],
      need: ["Kompyuterlar, Tinkercad Circuits"],
      plan: [["6", "Mikrokontroller nima? U oddiy batareyadan nimasi bilan farq qiladi? Robotning miyasi."], ["8", "Arduino Uno anatomiyasi: 14 ta raqamli pin (0–13), 5V, GND, reset tugmasi va dasturlash oynasi."], ["23", "Amaliy ish: «Blink» — miltillovchi chiroq dasturi."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
      tips: ["Dasturlashda ikkita asosiy qism borligini tushuntiring: `void setup()` — dastur boshlanganda faqat 1 marta ishlaydigan sozlamalar, `void loop()` — to'xtovsiz aylanadigan asosiy ishchi sikl.", "Tinkercad Circuits'da kod yozishning 3 xil usuli bor: Bloklar, Bloklar + Matn, va sof Matn (C++). Dastlab blokli yoki matnli C++ rejimini ko'rsating."],
      pt: "Amaliy ish: «Salom, Arduino! (Blink loyihasi)»",
      steps: [
        "Tinkercad Circuits'da yangi sxema oching va «Arduino Uno R3» platasini ish maydoniga qo'ying.",
        "Platani ko'rib chiqing: 13-raqamli pin yonida kichik «L» harfli o'rnatilgan sinov LEDi bor.",
        "O'ng yuqori burchakdagi «Code» (Kod) tugmasini bosing.",
        "Rejimni «Text» (Matn) ga o'tkazing. C++ kodini ko'rasiz.",
        "`void setup()` ichida: `pinMode(13, OUTPUT);` — 13-pinni elektr chiqaruvchi (chiqish) qilib sozlaymiz.",
        "`void loop()` ichida:",
        "`digitalWrite(13, HIGH);` — chiroqqa 5V quvvat ber (Yoqish!),",
        "`delay(1000);` — 1000 millisoniya (1 soniya) kut,",
        "`digitalWrite(13, LOW);` — chiroqni o'chir (0V),",
        "`delay(1000);` — 1 soniya kut.",
        "«Start Simulation» ni bosing: Arduino'dagi L chiroq bir maromda yonib-o'chishni boshlaydi!"
      ],
      extra: ["Miltillash tezligini oshiring: `delay(200)` qilib, stroboskop (tez yonib-o'chuvchi chiroq) qiling.", "Tashqi LEDni Breadboard orqali 13-pinga va GND ga ulang."],
      ask: [
        ["Arduino Uno nima?", "Dasturlash mumkin bo'lgan kichik kompyuter (mikrokontroller platasi)."],
        ["`void setup()` nima qiladi?", "Plata yoqilganda eng boshida faqat 1 marta bajariladigan sozlash qismi."],
        ["`void loop()` nima qiladi?", "Tok o'chmaguncha ichidagi kodni cheksiz qayta-qayta takrorlaydi."],
        ["`digitalWrite(13, HIGH)` nimani bildiradi?", "13-pinga 5 Volt yuqori kuchlanish chiqarishni (chiroqni yoqishni)."]
      ],
      quiz: [
        ["Arduino Uno platasida nechta raqamli (Digital) pin bor?", "14 ta (0 dan 13 gacha)", "6 ta", "100 ta"],
        ["1 soniya necha millisoniyaga (ms) teng?", "1000 ms", "100 ms", "60 ms"],
        ["Pinni chiroq chiqaruvchi qilish uchun qaysi so'z yoziladi?", "OUTPUT", "INPUT", "HIGH"],
        ["`digitalWrite(13, LOW)` nima qiladi?", "13-pindagi chiroqni o'chiradi (0V)", "Chiroqni yoqadi", "Kodni o'chiradi"],
        ["Arduino'ning asosiy hisoblash mikrosxemasi qaysi?", "ATmega328P", "Pentium", "Snapdragon"]
      ],
      game: {
        type: "order",
        title: "Tartibga sol: Arduino dasturining tuzilishi",
        steps: [
          "void setup() funksiyasini ochish",
          "pinMode(13, OUTPUT) orqali pinni sozlash",
          "void loop() cheksiz siklini ochish",
          "digitalWrite(13, HIGH) bilan chiroqni yoqish",
          "delay(1000) bilan 1 soniya kutish",
          "digitalWrite(13, LOW) bilan chiroqni o'chirish"
        ]
      },
      topic: [
        { e: "🧠", h: "Mikrokontroller — buyruq bajaruvchi miya", p: "Oddiy batareya shunchaki tok beradi. Arduino esa dastur bo'yicha qaror qiladi: qachon yoqish, qachon o'chirish, qachon signal berish. U barcha aqlli robotlarning yuragidir.", q: "Arduino qayerda yaratilgan?", a: "2005-yilda Italiyaning Ivrea shahrida talabalar uchun yaratilgan." },
        { e: "⏳", h: "Millisoniyalar olami", p: "Kompyuterlar uchun 1 soniya — juda uzoq vaqt! Shuning uchun Arduino vaqtni millisoniyalarda (sekundning 1000 dan birida) o'lchaydi. `delay(500)` — yarim soniya degani.", q: "Arduino bir soniyada nechta amal bajaradi?", a: "16 millionta amal (16 MGts chastota)!" },
        { e: "🔌", h: "HIGH va LOW", p: "Raqamli dunyoda faqat ikkita holat bor: 1 va 0. Arduino tilida `HIGH` = 5 Volt (chiroq yondi), `LOW` = 0 Volt (chiroq o'chdi).", q: "Raqamli signal (Digital) nima?", a: "Faqat «Ha» yoki «Yo'q» (1 yoki 0) deb javob beradigan signal." }
      ],
      prog: [{ t: "Blink dasturining kodi", b: ["y:⚙️ void setup()", "b:pinMode(13, OUTPUT);", "o:🔁 void loop()", "b:digitalWrite(13, HIGH);", "r:⏳ delay(1000);", "b:digitalWrite(13, LOW);", "r:⏳ delay(1000);"] }],
      video: [["wY9kQz1B-lM", "Arduino darslari: 1-dars. Blink"], ["a68_g2IpepU", "Arduino Uno bilan tanishuv va birinchi kod"]],
      yq: "arduino uno blink tutorial tinkercad circuits for kids",
      hw: ["Daftaringizga `delay(500)` va `delay(2000)` da chiroq qanday miltillashini tushuntirib yozing."]
    },
    {
      n: 4, mod: 1, t: "Ko'p chiroqli sxemalar: Svetofor tizimi",
      goal: "O'quvchilar bir nechta raqamli pinlarni (10, 11, 12) mustaqil boshqarishni, Qizil, Sariq va Yashil LEDlardan iborat haqiqiy shahar svetofori algoritmini dasturlashni o'rganadi.",
      out: ["Bir vaqtning o'zida 3 ta turli pinni `OUTPUT` rejimida ulaydi", "Haqiqiy svetofor ketma-ketligi algoritmini C++ kodiga aylantiradi", "Vaqt intervallarini (qizil — uzoq, sariq — qisqa) to'g'ri sozlaydi"],
      need: ["Kompyuterlar, Tinkercad Circuits"],
      plan: [["5", "Shahar ko'chalaridagi svetofor qanday tartibda ishlaydi? Nega sariq chiroq qisqa yonadi?"], ["8", "Sxema arxitekturasi: 3 ta LED, 3 ta 220 Om rezistor, umumiy GND liniyasi."], ["24", "Amaliy ish: Svetofor sxemasi va algoritmi."], ["4", "Viktorina va muhokama."], ["4", "Xulosa va test."]],
      tips: ["Barcha LEDlarning katodlarini (manfiy oyoqlarini) bitta umumiy GND relsiga ulashni (umumiy yer) o'rgating — bu simlarni tejaydi va sxemani toza saqlaydi.", "Svetofor sikli: Qizil (3s) $\\rightarrow$ Qizil+Sariq (1s) $\\rightarrow$ Yashil (3s) $\\rightarrow$ Yashil miltillash (1s) $\\rightarrow$ Sariq (1s)."],
      pt: "Amaliy ish: «Aqlli shahar svetofori»",
      steps: [
        "Tinkercad Circuits'da Arduino Uno va kichik Breadboard qo'ying.",
        "Breadboardga 3 ta LED o'rnating: Qizil, Sariq va Yashil.",
        "Har bir LEDning Anod oyog'iga 220 Om rezistor ulang.",
        "Qizil LEDni Arduino 12-pinga, Sariqni 11-pinga, Yashilni 10-pinga ulang.",
        "Uchala LEDning Katod oyoqlarini Breadboardning manfiy `-` qatoriga, uni esa Arduino GND piniga ulang.",
        "Kod yozish oynasini oching:",
        "`void setup()` ichida: `pinMode(12, OUTPUT); pinMode(11, OUTPUT); pinMode(10, OUTPUT);`",
        "`void loop()` ichida svetofor ketma-ketligini yozing:",
        "1) Qizil yonsin (12 HIGH), qolganlari o'chsin. `delay(3000);`",
        "2) Sariq qo'shilsin (11 HIGH). `delay(1000);`",
        "3) Qizil va sariq o'chsin, Yashil yonsin (10 HIGH). `delay(3000);`",
        "4) Yashil o'chsin, Sariq yonsin. `delay(1000);`",
        "Simulyatsiyani yoqing va haqiqiy svetofor ishlashini tomosha qiling!"
      ],
      extra: ["Yashil chiroq o'chishidan oldin 3 marta miltillaydigan qiling.", "Piyodalar uchun alohida 2 ta (qizil va yashil) kichik svetofor qo'shing."],
      ask: [
        ["Umumiy GND nima degani?", "Barcha detallarning manfiy qutblari ulanadigan bitta umumiy Yer liniyasi."],
        ["Nega har bir LEDga alohida rezistor kerak?", "Chunki har bir LED alohida pindan o'z tokini oladi va himoyaga muhtoj."],
        ["Svetofor algoritmini qaysi funksiya ichiga yozamiz?", "`void loop()` ichiga, chunki u to'xtovsiz takrorlanishi kerak."],
        ["Qizil chiroq necha soniya yonib turishi kerak?", "Hayotda 30–60 soniya, bizning modelimizda sinov uchun 3–5 soniya yetarli."]
      ],
      quiz: [
        ["Arduino'da 3 ta chiroqni ulash uchun nechta raqamli pin kerak?", "3 ta alohida pin", "Faqat 1 ta pin", "14 ta pin"],
        ["GND so'zi nimani bildiradi?", "Ground (Yer / Manfiy qutb)", "Green Data", "General Drive"],
        ["Sariq chiroq yonishi uchun qaysi buyruq beriladi?", "digitalWrite(11, HIGH);", "analogRead(11);", "pinMode(11, INPUT);"],
        ["Sxemada simlar tartibli bo'lishi uchun nima qilinadi?", "Rangli simlardan to'g'ri foydalaniladi (qizil, sariq, yashil, qora)", "Hamma simni oq qilinadi", "Simsiz ishlatiladi"],
        ["`delay(3000)` necha soniya kutish degani?", "3 soniya", "30 soniya", "0.3 soniya"]
      ],
      game: {
        type: "order",
        title: "Tartibga sol: Svetofor ketma-ketligi",
        steps: [
          "Qizil chiroq yonadi (Mashinalar to'xtaydi)",
          "Sariq chiroq qo'shiladi (Harakatga tayyorlanish)",
          "Qizil va sariq o'chib, Yashil chiroq yonadi (Harakatlaning)",
          "Yashil chiroq miltillaydi (Tez orada o'chadi)",
          "Faqat Sariq chiroq yonadi (Diqqat)",
          "Yana Qizil chiroqqa qaytadi"
        ]
      },
      topic: [
        { e: "🚦", h: "Birinchi svetofor tarixi", p: "Dunyodagi birinchi svetofor 1868-yilda Londonda paydo bo'lgan. U gaz bilan yongan va politsiyachi uni qo'lda burab turgan. Bugun esa millionlab svetoforlar mikrokontrollerlar orqali avtomatik ishlaydi.", q: "Svetoforda nega aynan qizil rang to'xtashni bildiradi?", a: "Qizil rang eng uzoqdan ko'rinadi va xavfni bildiradi." },
        { e: "🔀", h: "Ko'p pinlarni boshqarish", p: "Arduino bir vaqtning o'zida o'nlab chiroqlar, dvigatellar va klapanlarni boshqara oladi. Har bir pinga alohida buyruq berish dasturchiga cheksiz imkoniyat beradi.", q: "Svetoforda birdaniga qizil va yashil yonishi mumkinmi?", a: "Yo'q, bu avariyaga sabab bo'ladi! Dastur bunday xatoni taqiqlashi shart." },
        { e: "🏙️", h: "Aqlli shahar (Smart City)", p: "Zamonaviy aqlli svetoforlar datchiklar bilan jihozlangan: qaysi tomonda mashina ko'p bo'lsa, o'sha tomonga yashil chiroqni uzoqroq yoqib turadi.", q: "Kelajakda biz ham shunday aqlli svetofor yasaymizmi?", a: "Albatta, 8-darsda tugmali svetofor yasaymiz!" }
      ],
      prog: [{ t: "Svetofor sikli", b: ["y:⚙️ pinMode(12, 11, 10, OUTPUT);", "o:🔁 Qizil yonsin (12 HIGH)", "r:⏳ delay(3000);", "b:Sariq yonsin (11 HIGH)", "r:⏳ delay(1000);", "b:Yashil yonsin (10 HIGH)", "r:⏳ delay(3000);"] }],
      video: [["wY9kQz1B-lM", "Arduino svetofor loyihasi"], ["a68_g2IpepU", "Tinkercad Circuits: Traffic Light Project"]],
      yq: "arduino traffic light project tutorial tinkercad circuits",
      hw: ["Uyingiz yaqinidagi chorrahadagi svetoforni kuzating: chiroqlar necha soniyadan almashadi? Daftarga yozib keling."]
    },
    {
      n: 5, mod: 1, t: "Raqamli kirishlar: Tugma (Push Button) va digitalRead()",
      goal: "O'quvchilar Arduino'ga tashqi olamdan ma'lumot kiritishni (`INPUT`), tugma (Push Button) ishlash mexanizmini, erkin suzuvchi tokni to'xtatuvchi Pull-down rezistorni va `digitalRead()` funksiyasini o'rganadi.",
      out: ["Chiqish (`OUTPUT`) va Kirish (`INPUT`) farqini tushuntiradi", "Tugmani pull-down rezistor (10 kOm) bilan to'g'ri ulaydi", "`digitalRead()` yordamida tugma bosilganini yoki bosilmaganini aniqlaydi"],
      need: ["Kompyuterlar, Tinkercad Circuits"],
      plan: [["6", "Savol: chiroq o'z-o'zidan yonmaydi, odam tugmani bosganda yonadi. Arduino tugma bosilganini qanday sezadi?"], ["8", "Yangi mavzu: Tugma (Push Button), `pinMode(pin, INPUT)` va «Floating pin» (suzuvchi xato) muammosi. 10 kOm Pull-down rezistor."], ["23", "Amaliy ish: Tugma bilan chiroqni yoqish."], ["4", "«Saralash» o'yini."], ["4", "Xulosa va test."]],
      tips: ["Pull-down rezistorsiz pin havoda «suzib» qoladi (antennadek xalaqitlarni qabul qilib, o'z-o'zidan 1 va 0 bo'lib miltillaydi). 10 kOm rezistor pinni manfiy yerga (GND) tortib turishini tushuntiring.", "Tugma bosilganda 5V keladi (1 / HIGH), qo'yib yuborilganda rezistor orqali 0V bo'ladi (0 / LOW)."],
      pt: "Amaliy ish: «Tugmali chiroq»",
      steps: [
        "Tinkercad Circuits'da yangi sxema oching: Arduino, Breadboard, LED (220 Om rezistor bilan 13-pinga ulangan).",
        "Kutubxonadan 4 oyoqli tugma (Pushbutton) oling va Breadboardning o'rta bo'shlig'iga o'rnating.",
        "Tugmaning 1-oyog'iga Arduino 5V kuchlanishini ulang.",
        "Tugmaning qarama-qarshi oyog'iga 10 kOm (10000 Om) Pull-down rezistorini ulab, uning ikkinchi uchini GND ga ulang.",
        "Aynan shu oyoqdan bitta signal simini olib, Arduino 2-raqamli pinga ulang.",
        "Kod oynasiga o'ting:",
        "`void setup()` ichida: `pinMode(13, OUTPUT);` va `pinMode(2, INPUT);`",
        "`void loop()` ichida o'zgaruvchi oching: `int holat = digitalRead(2);`",
        "`if (holat == HIGH) { digitalWrite(13, HIGH); } else { digitalWrite(13, LOW); }`",
        "Simulyatsiyani ishga tushiring: tugmani bosing — chiroq yonadi, qo'yib yuboring — chiroq o'chadi!"
      ],
      extra: ["Teskari ishlaydigan qiling: tugma bosilmaganda yonsin, bosilganda o'chsin.", "Arduino'ning ichki rezistoridan foydalaning: `pinMode(2, INPUT_PULLUP);` (tashqi rezistor shart emas!)."],
      ask: [
        ["`OUTPUT` va `INPUT` o'rtasida qanday farq bor?", "OUTPUT — Arduino tashqariga tok chiqaradi (chiroq, motor). INPUT — Arduino tashqaridan tok qabul qiladi (tugma, datchik)."],
        ["`digitalRead(2)` funksiyasi qanday javob beradi?", "Faqat ikki xil: HIGH (1, bosilgan) yoki LOW (0, bosilmagan)."],
        ["Nega tugmaga 10 kOm rezistor ulanadi?", "Pin havoda qolib adashmasligi uchun (Pull-down — yerga tortish rezistori)."],
        ["Tugma qanday mexanik qismlardan iborat?", "Ikkita metall kontakt va ularni birlashtiruvchi prujinali plastina."]
      ],
      quiz: [
        ["Tugma signali qaysi rejimda o'qiladi?", "INPUT", "OUTPUT", "PRINT"],
        ["Raqamli o'qish funksiyasi qaysi?", "digitalRead()", "digitalWrite()", "analogRead()"],
        ["Pull-down rezistorining odatiy qarshiligi qancha bo'ladi?", "10 kOm (10 000 Om)", "220 Om", "1 Om"],
        ["Tugma bosilganda 2-pinda qanday kuchlanish bo'ladi?", "5 Volt (HIGH)", "0 Volt (LOW)", "220 Volt"],
        ["`if (holat == HIGH)` nimani bildiradi?", "Agar tugma bosilgan bo'lsa", "Agar chiroq yonsa", "Agar kompyuter o'chsa"]
      ],
      game: {
        type: "sort",
        title: "Kirishmi yoki Chiqish? (INPUT vs OUTPUT)",
        desc: "Qurilmalarni INPUT (kirish) va OUTPUT (chiqish) turlariga ajrating:",
        cats: ["INPUT (Kirish qurilmalari)", "OUTPUT (Chiqish qurilmalari)"],
        items: [
          ["Tugma (Pushbutton)", 0],
          ["LED chiroq", 1],
          ["Pyezo-buzzer (karnay)", 1],
          ["Harakat sensori", 0],
          ["Servomotor", 1],
          ["Klaviaturadagi tugmalar", 0]
        ]
      },
      topic: [
        { e: "🔘", h: "Tugma — buyruq beruvchi kontakt", p: "Lift chaqirish tugmasi, klaviatura, joystik — barchasining ichida kichik metall kontaktlar bor. Bosganimizda zanjir tutashadi va Arduino signali 1 (HIGH) bo'ladi.", q: "Telefon ekranidagi tugmalar ham shundaymi?", a: "Yo'q, ular sig'imli (sensorli) yuzalardir." },
        { e: "⚡", h: "Suzuvchi pin muammosi (Floating)", p: "Agar simni shunchaki havoda qoldirsangiz, u radioto'lqinlarni qabul qilib «aqldan ozishi» mumkin. Pull-down rezistor uni har doim tinch, 0 Volt holatda ushlab turadi.", q: "Bu muammoni qanday yechdik?", a: "10 kOm rezistorni manfiy yerga (GND) ulab." },
        { e: "💡", h: "INPUT_PULLUP — muhandislar ayyorligi", p: "Arduino mikrosxemasining ichida tayyor rezistorlar yashiringan! Agar kodda `pinMode(2, INPUT_PULLUP)` deb yozsak, tashqaridan ortiqcha rezistor qo'yish shart emas.", q: "Bu nima uchun qulay?", a: "Sxemani ortiqcha sim va detallardan tozalaydi." }
      ],
      prog: [{ t: "Tugma o'qish va qaror qabul qilish", b: ["y:⚙️ pinMode(2, INPUT); pinMode(13, OUTPUT);", "o:🔁 int x = digitalRead(2);", "g:❓ Agar (x == HIGH)", "b:💡 digitalWrite(13, HIGH); // Yoqish", "g:❗ Aks holda", "b:⚫ digitalWrite(13, LOW);  // O'chirish"] }],
      video: [["wY9kQz1B-lM", "Arduino darslari: Tugma bilan ishlash"], ["a68_g2IpepU", "Tinkercad Circuits: Button and DigitalRead"]],
      yq: "arduino button digitalread tutorial pull down resistor tinkercad",
      hw: ["Uyingizda tugma bilan ishlaydigan 5 ta asbobni toping (masalan: eshik qo'ng'irog'i, mikrotolqinli pech tugmasi...)."]
    },
    {
      n: 6, mod: 1, t: "Mantiqiy holatlar: Trigger va tugmali rejimlar",
      goal: "O'quvchilar tugmani bir marta bosganda chiroq yoniq qolishi, ikkinchi marta bosganda o'chishi (Trigger / Toggle mexanikasi) va tugma tebranishini (Debounce) dasturlashni o'rganadi.",
      out: ["Tugmani bosib turish bilan bir marta bosib qo'yib yuborish farqini tushuntiradi", "Holatni saqlovchi bayroqcha o'zgaruvchi (`boolean holat`) ishlatadi", "Haqiqiy xona kaliti (tumbler) kabi ishlaydigan chiroqni dasturlaydi"],
      need: ["Kompyuterlar, Tinkercad Circuits"],
      plan: [["6", "Xonadagi chiroq tugmasi: uni ushlab turmaymiz, bir marta bossak yonadi, yana bossak o'chadi. Buni kodda qanday qilamiz?"], ["8", "Yangi mavzu: o'zgaruvchida holatni saqlash (`chiroq_yoniq = !chiroq_yoniq`), tugma bosilish lahzasi."], ["23", "Amaliy ish: «Aqlli xona kaliti»."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
      tips: ["O'tgan darsdagi kodda tugma qo'yib yuborilsa chiroq o'chib qolar edi. Bugun biz «Toggle» (almashtirish) usulini o'rganamiz: har bosganda holat teskarisiga o'zgaradi.", "Tugma bosilgandan keyin `delay(200);` qo'yish kerak, aks holda odam barmog'i 1 marta bosguncha Arduino uni 100 marta o'qib, chiroqni o'chirib-yoqib yuboradi (Bouncing effekti)."],
      pt: "Amaliy ish: «Bir tugmali aqlli kalit»",
      steps: [
        "O'tgan darsdagi tugma va LED sxemasini oching.",
        "Kod oynasiga o'ting. `void setup()` dan tepada o'zgaruvchi oching:",
        "`bool chiroq_holati = false;` (boshida chiroq o'chiq).",
        "`void loop()` ichida:",
        "`if (digitalRead(2) == HIGH) {`",
        "1) Holatni teskarisiga aylantiramiz: `chiroq_holati = !chiroq_holati;`",
        "2) Chiroqqa chiqaramiz: `digitalWrite(13, chiroq_holati);`",
        "3) Tugma tebranishidan himoya: `delay(300);` (barmoq ko'tarilguncha kutamiz).",
        "`}`",
        "Simulyatsiyani ishga tushiring: tugmani bir marta cherting — chiroq yondi va yoniq qoldi!",
        "Yana bir marta cherting — chiroq o'chdi! Xuddi xona chirog'i kabi!"
      ],
      extra: ["Chiroq yonganda bitta qisqa chiyillash tovushi (Bip!) chiqadigan qiling.", "Ikkinchi tugma qo'shing: 1-tugma faqat yoqsin, 2-tugma faqat o'chirsin."],
      ask: [
        ["«Toggle» (almashtirish) nima degani?", "Holatni har safar qarama-qarshisiga o'zgartirish (agar 0 bo'lsa 1, agar 1 bo'lsa 0)."],
        ["`chiroq_holati = !chiroq_holati;` kodi nima qiladi?", "Inkor amali (!) orqali rostni yolg'onga, yolg'onni rostga aylantiradi."],
        ["«Debounce» (tugma tebranishi) nima?", "Tugma bosilganda mexanik kontaktlarning mikrosekundlar ichida bir necha marta sakrab-tebranishi."],
        ["Nega `delay(300)` qo'shdik?", "Tugmani bosib turgan paytimizda chiroq bir necha marta yonib-o'chib ketmasligi uchun."]
      ],
      quiz: [
        ["Faqat `true` (rost) yoki `false` (yolg'on) qiymat saqlovchi o'zgaruvchi turi qaysi?", "bool (boolean)", "int", "float"],
        ["C++ tilida inkor (teskarisiga o'girish) belgisi qaysi?", "! (undov belgisi)", "+", "=="],
        ["Tugma bosilganda chiroq yoniq qolishi nima deb ataladi?", "Trigger (Toggle)", "Blink", "Reset"],
        ["Tugma tebranishidan kelib chiqadigan xatolik nima deb ataladi?", "Bouncing effekti", "Qisqa tutashuv", "Ortiqcha yuklama"],
        ["Tugma bosilganda 1 soniya kutish kodda qanday yoziladi?", "delay(1000);", "wait(1000);", "sleep(1s);"]
      ],
      game: {
        type: "order",
        title: "Tartibga sol: Trigger kaliti qanday ishlaydi?",
        steps: [
          "Tugma holatini digitalRead(2) orqali tekshirish",
          "Agar tugma bosilgan bo'lsa (HIGH):",
          "chiroq_holati = !chiroq_holati orqali teskarisiga aylantirish",
          "digitalWrite(13, chiroq_holati) orqali yangi holatni yoqish",
          "delay(300) kutib, tugma tebranishidan himoyalanish",
          "Keyingi bosishni kutish"
        ]
      },
      topic: [
        { e: "💡", h: "Xona kalitining dasturiy nusxasi", p: "Devordagi kalit mexanik ravishda bir tomonga qotib qoladi. Robototexnikada esa bitta kichik tugma yordamida butun bir zavod stanogini yoqish va o'chirish mumkin.", q: "Noutbukni yoqish tugmasi ham shunday ishlaydimi?", a: "Ha, bitta tugma bilan yoqiladi va o'chiriladi." },
        { e: "⚡", h: "Bouncing — ko'rinmas sakrashlar", p: "Siz tugmani bitta silliq harakat bilan bosdim deb o'ylaysiz. Mikroskop ostida esa metall kontaktlar bir-biriga urilib, soniyasiga yuzlab marta sakraydi. Dasturchi bu tebranishni dastur bilan tinchlantirishi shart.", q: "Buni qanday hal qildik?", a: "Kichik dasturiy pauza (Debounce) berish orqali." },
        { e: "🛡️", h: "Xavfsizlik tizimlari", p: "Bunday o'zgaruvchilar sanoatda «Favqulodda to'xtatish» (Emergency Stop) tizimlarida ishlatiladi: bitta bosish butun liniyani to'xtatadi va qayta bosilmaguncha yoqilmaydi.", q: "O'yinchog'ingizda shunday tugma bormi?", a: "Ha, pultlarda va o'yinchoq robotlarda." }
      ],
      prog: [{ t: "Trigger (Toggle) mexanikasi", b: ["y:🔘 Tugma bosildimi?", "g:❗ chiroq = !chiroq (teskarisi)", "b:💡 digitalWrite(13, chiroq)", "r:⏳ delay(300); // Debounce", "o:🔁 Keyingi bosishga tayyor"] }],
      video: [["wY9kQz1B-lM", "Arduino button toggle push on push off"], ["a68_g2IpepU", "Arduino tugma bilan chiroqni saqlab yoqish"]],
      yq: "arduino button toggle push on push off tutorial debounce",
      hw: ["Uyingizdagi qaysi jihozlar bitta tugma bilan yoqilib-o'chishini tekshiring va daftarga yozing."]
    },
    {
      n: 7, mod: 1, t: "Ovoz va signal: Pyezo-buzzer va tone() funksiyasi",
      goal: "O'quvchilar pyezo-buzzer (tovush chiqaruvchi element) qanday ishlashini, chastota (Gers) tushunchasini va Arduino'da `tone()`, `noTone()` buyruqlari bilan ohanglar va musiqiy notalarni chalishni o'rganadi.",
      out: ["Pyezoelement qanday qilib elektrdan tovush tebranishi hosil qilishini tushuntiradi", "`tone(pin, chastota, davomiylik)` funksiyasidan foydalanadi", "Sirena ovozi yoki oddiy musiqiy ohangni dasturlaydi"],
      need: ["Kompyuterlar, Tinkercad Circuits"],
      plan: [["6", "Tovush nima? Havo tebranishi. Pyezoelement qanday qilib chiyillaydi yoki musiqa chaladi?"], ["8", "Yangi mavzu: Piezo buzzer, chastota (Hz) — masalan, «Lya» notasi 440 Hz. `tone()` va `noTone()` buyruqlari."], ["23", "Amaliy ish: «Tez yordam sirenasi va musiqiy signal»."], ["4", "«Juftini top» o'yini."], ["4", "Xulosa va test."]],
      tips: ["Pyezo-buzzerning ikkita turi bor: faol (Active — faqat bitta ovoz beradi) va sust (Passive — turli chastotali kuylar chaladi). Tinkercad'dagi buzzer passiv bo'lib, xohlagan kuyni chalishi mumkin.", "Chastota qancha katta bo'lsa (masalan 2000 Hz), ovoz shuncha ingichka va chiyillagan bo'ladi; kichik chastota (masalan 200 Hz) esa yo'g'on g'o'ng'illash bo'ladi."],
      pt: "Amaliy ish: «Politsiya sirenasi»",
      steps: [
        "Tinkercad Circuits'da Arduino va Breadboard qo'ying.",
        "Kutubxonadan «Piezo» (Pyezo-buzzer) oling. Uning musbat (Positive) oyog'ini Arduino 8-pinga, manfiy (Negative) oyog'ini GND ga ulang.",
        "Kod oynasini oching:",
        "`void setup()` ichida: hech narsa yozish shart emas (`tone` funksiyasi pinni avtomatik sozlaydi).",
        "`void loop()` ichida sirena ovozini yozamiz:",
        "1) Baland ohang: `tone(8, 800);` (800 Hz chastota) → `delay(300);`",
        "2) Past ohang: `tone(8, 500);` (500 Hz chastota) → `delay(300);`",
        "3) Tovushni to'xtatish kerak bo'lsa: `noTone(8);`",
        "Simulyatsiyani yoqing: dinamikdan haqiqiy tez yordam sirenasi eshitiladi!",
        "Chastotalarni o'zgartirib ko'ring: 1000 Hz va 200 Hz qilsangiz nima bo'ladi?"
      ],
      extra: ["Tugma qo'shing: tugma bosilganda eshik qo'ng'irog'i (Ding-Dong: 523 Hz va 659 Hz) chalinsin.", "For sikli yordamida chastotani 300 dan 1200 gacha silliq ko'tariladigan signal qiling."],
      ask: [
        ["Pyezoelement elektrdan qanday tovush chiqaradi?", "Elektr berilganda ichidagi pyezo-kristall juda tez tebranadi va havoni to'lqinlantiradi."],
        ["Tovush chastotasi qaysi birlikda o'lchanadi?", "Gerslarda (Hz). 1 Hz = soniyasiga 1 ta tebranish."],
        ["Inson qulog'i qanday oraliqdagi tovushlarni eshitadi?", "Taxminan 20 Hz dan 20 000 Hz gacha."],
        ["`tone(8, 440, 500)` kodi nimani bildiradi?", "8-pindagi buzzerda 440 Hz («Lya» notasi) chastotali tovushni 500 millisoniya davomida chalishni."]
      ],
      quiz: [
        ["Arduino'da ohang chalish buyrug'i qaysi?", "tone()", "sound()", "music()"],
        ["Tovushni o'chirish buyrug'i qaysi?", "noTone()", "stopSound()", "delay()"],
        ["Chastota 1000 Hz dan 200 Hz ga tushsa, ovoz qanday o'zgaradi?", "Yo'g'onlashadi (past bo'ladi)", "Ingichkalashadi", "O'chadi"],
        ["Pyezo-buzzerni qaysi pinga ulash mumkin?", "Istalgan raqamli pinga (masalan: 8)", "Faqat 5V ga", "Faqat USB ga"],
        ["Musiqada «Lya» (A4) notasining chastotasi qancha?", "440 Hz", "10 Hz", "5000 Hz"]
      ],
      game: {
        type: "memory",
        title: "Juftini top: Tovush va buyruqlar",
        pairs: [
          ["tone(pin, hz)", "Ohangni yoqish"],
          ["noTone(pin)", "Tovushni to'xtatish"],
          ["Gers (Hz)", "Chastota birligi"],
          ["Pyezo-buzzer", "Elektrni tovushga aylantiradi"],
          ["Katta chastota (2000 Hz)", "Ingichka chiyillash"],
          ["Kichik chastota (200 Hz)", "Yo'g'on g'o'ng'illash"]
        ]
      },
      topic: [
        { e: "🔊", h: "Pyezoeffekt mo''jizasi", p: "1880-yilda aka-uka Kyurilar kashf qilgan pyezoeffektga ko'ra, ba'zi kristallarga elektr berganda ular shaklini o'zgartirib qisqaradi va kengayadi. Bu xususiyat mikrofon va soatlarda ham ishlatiladi.", q: "Kvars soatlari ichida nima bor?", a: "Sekundiga 32 768 marta tebranuvchi kvars kristalli." },
        { e: "🎵", h: "Kod bilan musiqa yaratish", p: "Har bir musiqiy nota aniq chastotaga ega: Do = 261 Hz, Re = 294 Hz, Mi = 329 Hz. Arduino yordamida «Mario» o'yini musiqasini yoki «Star Wars» madhiyasini bemalol chalish mumkin!", q: "Buning uchun nima kerak?", a: "Notalar chastotasi va ularning davomiyligi ro'yxati." },
        { e: "🚨", h: "Xavfsizlik signallari", p: "Yong'in datchiklari, avtomobil orqaga yurgandagi signal, bankomat tugmalarining ovozi — barchasida xuddi shu pyezo-buzzerlar xizmat qiladi.", q: "Nega oddiy dinamik emas, pyezo ishlatiladi?", a: "Chunki u juda ixcham, arzon va kam tok sarflaydi." }
      ],
      prog: [{ t: "Sirena ovozi kodi", b: ["y:🔊 tone(8, 800); // Baland", "r:⏳ delay(300);", "y:🔉 tone(8, 500); // Past", "r:⏳ delay(300);", "o:🔁 Takrorlash", "b:🔇 noTone(8); // O'chirish"] }],
      video: [["wY9kQz1B-lM", "Arduino Piezo buzzer tone tutorial"], ["a68_g2IpepU", "Arduino bilan musiqa chalish"]],
      yq: "arduino piezo buzzer tone notone tutorial tinkercad",
      hw: ["Daftaringizga «Do, Re, Mi, Fa, Sol, Lya, Si» notalarining chastotalarini topib, jadval qilib yozib keling."]
    },
    {
      n: 8, mod: 1, t: "1-modul loyihasi: «Piyodalar chaqiruvchi aqlli svetofor»",
      goal: "O'quvchilar 1-modulda o'rganilgan barcha vositalarni (svetofor LEDlari, tugma, pyezo-buzzer, pull-down rezistor va shartli algoritmlar) birlashtirib, xavfsiz piyodalar o'tish yo'li tizimini yaratadi.",
      out: ["Mashinalar va piyodalar uchun 5 ta LED, tugma va buzzerni bitta sxemada yig'adi", "Tugma bosilguncha mashinalarga yashil yonib turuvchi rejimni dasturlaydi", "Piyodalar o'tayotganda ko'zi ojizlar uchun tovushli signalni ishga tushiradi"],
      need: ["Kompyuterlar, Tinkercad Circuits"],
      plan: [["5", "Loyiha brifingi: bugun 1-modul yakuni bo'yicha shahar chorrahalaridagi zamonaviy chaqiruvli piyodalar svetoforini quramiz."], ["8", "Tizim mantig'i: odatda mashinalarga yashil. Piyoda tugmani bossa — sariq, keyin qizil yonadi, piyodalarga yashil yonib, buzzer chiyillaydi."], ["25", "Amaliy ish: Sxemani yig'ish va kodni sinash."], ["4", "O'quvchilar loyihalarini sinash."], ["3", "1-modul xulosasi."]],
      tips: ["Simlar ko'payib ketgani sababli Breadboarddagi ranglarga qat'iy rioya qildiring: barcha qora simlar GND ga, barcha qizil simlar quvvatga.", "Piyodalar tugmasi bosilishi bilanoq birdaniga qizil yonib mashinalarni to'xtatmasligi kerak — haydovchilar to'xtashi uchun avval 2 soniya sariq chiroq yonishi shart."],
      pt: "Yakuniy loyiha: «Chaqiruvchi svetofor»",
      steps: [
        "Tinkercad Circuits'da to'liq sxemani yig'ing:",
        "Mashinalar svetofori: Qizil (pin 12), Sariq (pin 11), Yashil (pin 10).",
        "Piyodalar svetofori: Qizil (pin 9), Yashil (pin 8).",
        "Piyodalar tugmasi: pin 2 ga (10 kOm Pull-down rezistor bilan).",
        "Pyezo-buzzer: pin 7 ga (tovushli signal uchun).",
        "Kod mantig'i:",
        "Boshlang'ich holat: Mashinalarga Yashil (10 HIGH), Piyodalarga Qizil (9 HIGH).",
        "Tugma tekshiruvi: `if (digitalRead(2) == HIGH)` bo'lsa:",
        "1) 1 soniya kutiladi, keyin mashinalarga Sariq yonadi (pin 11) `delay(2000);`.",
        "2) Mashinalarga Qizil yonadi (pin 12), Piyodalarga Yashil yonadi (pin 8).",
        "3) Buzzer har yarim soniyada «bip-bip-bip» qilib piyodalarni ogohlantiradi (5 soniya).",
        "4) Yashil o'chib, yana boshlang'ich holatga qaytadi.",
        "Simulyatsiyani yoqing va tugmani bosib tizimni to'liq sinab ko'ring!"
      ],
      extra: ["Piyodalar o'tish vaqti tugashiga 2 soniya qolganda buzzer signali tezlashsin (shoshiling signali).", "Tugma bosilganini bildiruvchi kichik ko'k indikator chiroq qo'shing («Kuting»)."],
      ask: [
        ["Nega svetofor faqat piyoda tugmani bosgandagina o'zgaradi?", "Piyodalar yo'q paytda mashinalar behuda to'xtab, tirbandlik hosil qilmasligi uchun."],
        ["Ko'zi ojiz insonlar svetofor qachon yashil bo'lganini qanday bilishadi?", "Pyezo-buzzerning maxsus ritmli tovushli signali orqali."],
        ["Ushbu loyihada nechta raqamli pin ishlatildi?", "Jami 7 ta pin (5 ta LED, 1 ta tugma, 1 ta buzzer)."],
        ["1-modulda o'rgangan qaysi bilimlar sizga eng qiziq tuyuldi?", "O'quvchining shaxsiy fikri va xulosasi."]
      ],
      quiz: [
        ["Piyodalar o'tish yo'lidagi tugma vazifasi nima?", "Yashil chiroqni chaqirish", "Svetoforni o'chirish", "Politsiyaga xabar berish"],
        ["Ko'zi ojiz piyodalar uchun qaysi komponent signal beradi?", "Pyezo-buzzer", "Rezistor", "Kondensator"],
        ["Mashinalar svetoforida yashildan qizilga o'tishda qaysi chiroq oraliq bo'ladi?", "Sariq chiroq", "Ko'k chiroq", "Oq chiroq"],
        ["Bu loyihada tugma qaysi rejimda ishlaydi?", "INPUT", "OUTPUT", "HIGH"],
        ["1-modulda biz nimani o'rgandik?", "Elektronika asoslari, sxemalar, LEDlar, tugma va buzzerni", "Faqat 3D printerni", "Faqat multfilm ko'rishni"]
      ],
      game: {
        type: "order",
        title: "Tartibga sol: Aqlli svetofor algoritmi",
        steps: [
          "Mashinalarga yashil, piyodalarga qizil chiroq yonib turishi",
          "Piyodalar tugmasining bosilishini digitalRead(2) bilan kutish",
          "Tugma bosilgach: mashinalarga sariq chiroqni yoqish (2s)",
          "Mashinalarga qizil, piyodalarga yashil chiroqni yoqish",
          "Buzzer bilan birga xavfsiz o'tish signalini chalish (5s)",
          "Boshlang'ich tinch holatga qaytish"
        ]
      },
      topic: [
        { e: "🏙️", h: "Haqiqiy shahar muhandisligi", p: "Bugun siz oddiy laboratoriya ishini emas, balki Toshkent yoki Nyu-York ko'chalarida minglab insonlar hayotini saqlab qoladigan haqiqiy xavfsizlik tizimini yaratdingiz!", q: "Bunday svetoforlar qayerlarga o'rnatiladi?", a: "Maktablar, kasalxonalar va serqatnov ko'chalarga." },
        { e: "🏆", h: "1-modul g'alabasi", p: "Siz tok va kuchlanishdan boshlab, murakkab 7 ta komponentli zanjirni mustaqil yig'ish va C++ kodida dasturlash darajasiga yetdingiz. Bu ulkan yutuq!", q: "Keyingi modulda nima kutmoqda?", a: "Datchiklar, servomotorlar, masofa o'lchash va analog signallar!" },
        { e: "🌟", h: "Insonlarga foyda keltiruvchi texnologiya", p: "Texnologiya va robototexnikaning bosh maqsadi — insonlar hayotini qulayroq va xavfsizroq qilishdir. Yaxshi muhandis har doim odamlar ehtiyojini o'ylaydi.", q: "Siz qanday aqlli qurilma ixtiro qilishni xohlaysiz?", a: "O'quvchilarning orzulari va g'oyalari." }
      ],
      prog: [{ t: "Aqlli svetofor boshqaruvi", b: ["y:🚗 Mashinaga: Yashil, Piyodaga: Qizil", "o:🔘 if (digitalRead(tugma) == HIGH)", "b:⚠️ Mashinaga: Sariq (2s)", "b:🛑 Mashinaga: Qizil, Piyodaga: Yashil", "r:🔊 Buzzer: bip-bip-bip (5s)", "o:🔁 Tinch holatga qaytish"] }],
      video: [["wY9kQz1B-lM", "Arduino Smart Pedestrian Traffic Light Project"], ["a68_g2IpepU", "Tugmali va buzzerli svetofor loyihasi"]],
      yq: "arduino smart pedestrian traffic light with buzzer and push button",
      hw: ["Uyingiz atrofidagi piyodalar o'tish joylarini tekshiring: u yerda tugmali svetofor bormi? Kamchiliklarini daftarga yozing."]
    }
  ]
};

