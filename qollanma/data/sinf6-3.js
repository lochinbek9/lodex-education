// 6-sinf · 17–24-darslar: 3-modul. Murakkab tizimlar, Arduino IDE va yakuniy loyihalar
// Format sinf6.js bilan bir xil.
window.QOLLANMA.grades[6].lessons.push(
  {
    n: 17, mod: 3, t: "RGB LED: Ranglar palitrasi va aralashtirish",
    goal: "O'quvchilar RGB LED (Red, Green, Blue) tuzilishini, umumiy katod (Common Cathode) va umumiy anod farqini, 3 ta PWM pin yordamida ranglarni aralashtirib 16 million xil tus hosil qilishni o'rganadi.",
    out: ["RGB LEDning 4 ta oyog'ini (Qizil, Umumiy GND, Yashil, Ko'k) to'g'ri ulaydi", "Ranglar modeli (RGB — 0 dan 255 gacha) fizikasini tushuntiradi", "Sariq, binafsha, moviy va oq ranglarni C++ kodida hosil qiladi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Rangli televizor yoki telefon ekranida sariq yoki oq rang qanday hosil bo'ladi? RGB siri."], ["8", "Yangi mavzu: RGB LED (bitta korpusda 3 ta diod), 4 ta oyoq, ranglar qo'shilishi (optik sintez) va PWM aralashmasi."], ["23", "Amaliy ish: «Kamalak chirog'i (RGB Mood Lamp)»."], ["4", "«Saralash» o'yini."], ["4", "Xulosa va test."]],
    tips: ["RGB LEDda eng uzun oyoq — umumiy katod (GND) yoki umumiy anod (5V) bo'ladi. Tinkercad'da «Common Cathode» variantini tanlab, uzun oyog'ini GND ga ulatish eng qulayidir.", "Ranglar aralashmasi: Qizil + Yashil = Sariq, Qizil + Ko'k = Binafsha (Magenta), Yashil + Ko'k = Moviy (Cyan), Uchalasi birga = Oq."],
    pt: "Amaliy ish: «Sehrli rang-barang RGB chiroq»",
    steps: [
      "Tinkercad Circuits'da Arduino va Breadboard qo'ying.",
      "Kutubxonadan «RGB LED» oling. Uning 4 ta oyog'i bor: Red (Qizil), Cathode (Katod), Green (Yashil), Blue (Ko'k).",
      "Cathode (eng uzun oyoq) ni Breadboardning GND qatoriga ulang.",
      "Red oyog'iga 220 Om rezistor ulab, Arduino 11-PWM pinga ulang.",
      "Green oyog'iga 220 Om rezistor ulab, Arduino 10-PWM pinga ulang.",
      "Blue oyog'iga 220 Om rezistor ulab, Arduino 9-PWM pinga ulang.",
      "Kod oynasida rang chiqaruvchi funksiya yozamiz:",
      "`void rangQoy(int r, int g, int b) { analogWrite(11, r); analogWrite(10, g); analogWrite(9, b); }`",
      "`void loop()` ichida ranglarni almashtiring:",
      "rangQoy(255, 0, 0); delay(1000); // Qizil",
      "rangQoy(0, 255, 0); delay(1000); // Yashil",
      "rangQoy(0, 0, 255); delay(1000); // Ko'k",
      "rangQoy(255, 255, 0); delay(1000); // Sariq!",
      "rangQoy(255, 0, 255); delay(1000); // Binafsha!",
      "rangQoy(255, 255, 255); delay(1000); // Oq nur!",
      "Simulyatsiyani yoqing: bitta mitti diod qanday qilib butun kamalak tuslariga kirishini ko'ring!"
    ],
    extra: ["Ranglarni birdaniga emas, `for` sikli bilan silliq bir-biriga o'tadigan (Smooth Rainbow) qiling.", "Potensiometr ulab, ranglar tusini qo'lda burab o'zgartiring."],
    ask: [
      ["RGB qisqartmasi qaysi ranglarni bildiradi?", "Red (Qizil), Green (Yashil), Blue (Ko'k)."],
      ["RGB LEDning nechta oyog'i bor?", "4 ta oyog'i bor (3 ta rang uchun va 1 ta umumiy oyoq)."],
      ["Qizil va Yashil ranglar qo'shilsa qanday rang hosil bo'ladi?", "Sariq rang hosil bo'ladi."],
      ["Uchala rang ham maksimal yonsa (255, 255, 255), qanday rang chiqadi?", "Oq rang chiqadi."]
    ],
    quiz: [
      ["RGB LEDda bitta rang uchun qanday pin kerak?", "PWM pini (~ belgili)", "Faqat 5V", "Faqat A0"],
      ["Sariq rang hosil qilish uchun RGB kodlari qanday bo'ladi?", "R=255, G=255, B=0", "R=0, G=0, B=255", "R=255, G=0, B=0"],
      ["RGB LEDning eng uzun oyog'i nima?", "Umumiy katod (GND) yoki anod", "Qizil rang oyog'i", "Bo'sh oyoq"],
      ["RGB modeli orqali jami nechta rang hosil qilish mumkin?", "16 milliondan ortiq ($256 \\times 256 \\times 256$)", "Faqat 3 ta", "Faqat 7 ta"],
      ["Ranglarni aralashtirish uchun qaysi funksiya ishlatiladi?", "analogWrite()", "digitalRead()", "tone()"]
    ],
    game: {
      type: "sort",
      title: "Qaysi ranglar qo'shilgan?",
      desc: "Ranglar aralashmasini toping:",
      cats: ["Ikkita rang aralashmasi", "Bitta sof rang yoki uchalasi"],
      items: [
        ["Sariq rang (Qizil + Yashil)", 0],
        ["Sof Ko'k rang (0, 0, 255)", 1],
        ["Binafsha rang (Qizil + Ko'k)", 0],
        ["Moviy rang / Cyan (Yashil + Ko'k)", 0],
        ["Oq rang (Qizil + Yashil + Ko'k)", 1],
        ["Sof Qizil rang (255, 0, 0)", 1]
      ]
    },
    topic: [
      { e: "🌈", h: "Ko'zimiz qanday ko'radi?", p: "Inson ko'zidagi to'r pardada faqat 3 xil rangni sezuvchi retseptorlar bor: qizil, yashil va ko'k. Barcha ko'rayotgan millionlab ranglarimiz miyamizda shu 3 rangning aralashishidan hosil bo'ladi.", q: "Smartfon ekrani qanday ishlaydi?", a: "Har bir piksel ichida qizil, yashil va ko'k sub-piksellar bor." },
      { e: "🎨", h: "Rangli yoritish (RGB Mood Lighting)", p: "Bugungi kunda xonalarni, kompyuter korpuslarini va avtomobil salonlarini RGB lentalar bilan bezash juda urf bo'lgan. Siz xohlagan kayfiyatga mos rangni (masalan: kechqurun sokin to'q sariq) dasturlashingiz mumkin.", q: "Tinchlantiruvchi rang qaysi?", a: "Yumshoq yashil yoki iliq sarg'ish rang." },
      { e: "💻", h: "HEX va RGB kodlari", p: "Web-dasturlashda va grafikada ranglar `#FF0000` (Qizil) yoki `rgb(255, 0, 0)` kabi yoziladi. Arduino dasturchisi bu kodlarni to'g'ridan-to'g'ri diodlarga yuboradi.", q: "Qora rang qanday bo'ladi?", a: "Barcha ranglar 0 bo'lganda (0, 0, 0) — ya'ni chiroq o'chiq." }
    ],
    prog: [{ t: "RGB ranglar palitrasi", b: ["y:⚙️ pinMode(11, 10, 9, OUTPUT);", "b:🔴 analogWrite(11, 255); // Red", "g:🟢 analogWrite(10, 255); // Green", "b:🔵 analogWrite(9, 0);    // Blue", "r:⏳ delay(1000); // Sariq!", "p:🎨 Yangi rangni tanla"] }],
    video: [["wY9kQz1B-lM", "Arduino RGB LED tutorial"], ["a68_g2IpepU", "Tinkercad Circuits: RGB LED ranglar aralashtirish"]],
    yq: "arduino rgb led color mixing tutorial pwm tinkercad",
    hw: ["Daftaringizga o'zingiz yoqtirgan 3 ta rangning (masalan: pushti, zangori, olovrang) RGB nisbatlarini taxminan yozib keling."]
  },
  {
    n: 18, mod: 3, t: "PIR harakat sensori: Infraqizil qo'riqchi",
    goal: "O'quvchilar PIR (Passive Infrared) harakat sensori qanday ishlashini (inson tanasi taratadigan issiqlik to'lqinlari, Frenel linzasi) va xonaga begona kirganda signal beruvchi xavfsizlik signalizatsiyasini yaratadi.",
    out: ["PIR sensori passiv infraqizil nurlanishni qanday sezishini tushuntiradi", "PIR sensorining 3 ta oyog'ini (VCC, Signal, GND) to'g'ri ulaydi", "Harakat sezilganda sirenani yoquvchi xavfsizlik tizimini dasturlaydi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Do'konga kirganingizda eshik o'z-o'zidan qanday ochiladi? Ko'cha chirog'i odam o'tganda qanday yonadi?"], ["8", "Yangi mavzu: PIR sensori (Passive Infrared), tirik mavjudotlarning issiqlik nurlari va sharsimon Frenel linzasi."], ["23", "Amaliy ish: «Uy qo'riqlash signalizatsiyasi» (Burglar Alarm)."], ["4", "«Juftini top» o'yini."], ["4", "Xulosa va test."]],
    tips: ["PIR «Passiv» deyilishining sababi — u o'zidan hech qanday nur chiqarmaydi, faqat atrofga tarqalayotgan inson yoki hayvon issiqligini (infraqizil nurni) kutib oladi.", "Tinkercad'da PIR ustiga bossangiz, yashil ko'rish maydoni va harakatlanuvchi qizil to'pcha paydo bo'ladi — uni siljitib harakatni sinash mumkin."],
    pt: "Amaliy ish: «Aqlli qo'riqchi signalizatsiyasi»",
    steps: [
      "Tinkercad Circuits'da Arduino va Breadboard qo'ying.",
      "Kutubxonadan «PIR Sensor» datchigini oling va Breadboardga o'rnating.",
      "Oyoqlarini ulang:",
      "1) Signal $\\rightarrow$ Arduino 2-raqamli pinga,",
      "2) Power $\\rightarrow$ 5V ga,",
      "3) Ground $\\rightarrow$ GND ga.",
      "Breadboardga bitta Qizil LED (pin 13) va Pyezo-buzzer (pin 8) qo'ying.",
      "Kod oynasiga o'ting:",
      "`void setup()` ichida: `pinMode(2, INPUT); pinMode(13, OUTPUT); pinMode(8, OUTPUT);`",
      "`void loop()` ichida harakatni tekshiring:",
      "`int harakat = digitalRead(2);`",
      "`if (harakat == HIGH) {`",
      "  digitalWrite(13, HIGH); // Xavf chirog'i",
      "  tone(8, 1000);          // Sirena ovozi",
      "  delay(1000);",
      "} else {",
      "  digitalWrite(13, LOW);",
      "  noTone(8);",
      "}",
      "Simulyatsiyani yoqing, PIR ustiga bosing va harakat qiling — signal darhol yangraydi!"
    ],
    extra: ["Harakat to'xtagandan keyin chiroq yana 5 soniya yoniq turib, keyin o'chadigan (zinapoya chirog'i rejimi) qiling.", "Serial Monitorga harakat vaqtini «DIQQAT: Xonada harakat sezildi!» deb yozib boring."],
    ask: [
      ["PIR qisqartmasi nimani bildiradi?", "Passive Infrared (Passiv infraqizil sensor)."],
      ["PIR sensori nimani sezadi?", "Inson yoki hayvon tanasidan tarqalayotgan issiqlik (infraqizil) nurlanishining harakatini."],
      ["Nega PIR sensori «Passiv» deyiladi?", "Chunki u o'zidan nur taratmaydi, faqat boshqa jismlarning nurlanishini qabul qiladi."],
      ["Sensor ustidagi oq qopqoq (linza) nima uchun kerak?", "Frenel linzasi — har tomondan kelayotgan nurlarni to'plab, ichidagi mitti datchikka yo'naltiradi."]
    ],
    quiz: [
      ["PIR sensori qanday signal qaytaradi?", "Raqamli signal (harakat bo'lsa HIGH, bo'lmasa LOW)", "Faqat analog son", "Matn"],
      ["PIR sensori harakatni nimaga qarab aniqlaydi?", "Issiqlik (infraqizil) to'lqinlarining siljishiga qarab", "Tovushga qarab", "Rangiga qarab"],
      ["Xonada harakat sezilganda qaysi signal beriladi?", "HIGH (1)", "LOW (0)", "-1"],
      ["PIR datchiklari hayotda qayerda ishlatiladi?", "Bank signalizatsiyasida, avtomat yo'lak chiroqlarida, eshik ochgichlarda", "Muzlatgich ichida", "Televizor pultida"],
      ["Sensor oldida odam qimirlamasdan toshdek qotib tursa nima bo'ladi?", "Sensor harakatni yo'qotadi (LOW bo'ladi), chunki faqat harakatlanuvchi issiqlikni sezadi", "Portlaydi", "Chiyillaydi"]
    ],
    game: {
      type: "memory",
      title: "Juftini top: Xavfsizlik datchigi",
      pairs: [
        ["PIR", "Passiv infraqizil harakat sensori"],
        ["HIGH (1)", "Harakat sezildi!"],
        ["LOW (0)", "Xona tinch"],
        ["Frenel linzasi", "Nurlarni jamlovchi oq gumbaz"],
        ["Signalizatsiya", "Buzzer + Qizil LED"],
        ["Infraqizil nur", "Inson tanasi issiqligi"]
      ]
    },
    topic: [
      { e: "🚨", h: "Banklar va xonadonlar qo'riqchisi", p: "O'g'rilar qorong'ida qadam bosganda, ular ko'rinmayapman deb o'ylashadi. Lekin inson tanasi atrofga ko'rinmas issiqlik nurlarini taratadi. PIR datchigi bu issiqlik harakatini bir zumda payqaydi va politsiyaga signal beradi.", q: "Datchik oynadan tashqaridagi odamni ko'radimi?", a: "Yo'q, shisha infraqizil nurlarni o'tkazmaydi." },
      { e: "💡", h: "Aqlli yo'laklar va energiya tejamkorligi", p: "Ko'p qavatli uylar zinapoyasida har doim chiroq yonib tursa, ko'p tok ketadi. PIR datchik o'rnatilsa, faqat odam zinadan chiqayotganda chiroq yonadi va odam o'tib ketgach o'chadi.", q: "Bu elektrni necha foiz tejaydi?", a: "70–80% gacha tejaydi!" },
      { e: "🐱", h: "Mushuklar va xato signallar", p: "Uy hayvonlari ham issiqlik taratadi. Shuning uchun professional signalizatsiyalarda datchik kichik hayvonlarga (masalan: 10 kg gacha) e'tibor bermaydigan qilib filtrlanadi.", q: "Robotlar hayvonni odamdan ajrata oladimi?", a: "Ha, vazni va haroratiga qarab." }
    ],
    prog: [{ t: "PIR signalizatsiyasi kodi", b: ["y:⚙️ pinMode(2, INPUT); pinMode(13, OUTPUT);", "o:🔁 int h = digitalRead(2);", "g:❓ Agar (h == HIGH) {", "b:🚨 digitalWrite(13, HIGH);", "r:🔊 tone(8, 1000);", "g:❗ } else {", "b:⚫ digitalWrite(13, LOW);", "b:🔇 noTone(8);", "g:❗ }"] }],
    video: [["wY9kQz1B-lM", "Arduino PIR motion sensor tutorial"], ["a68_g2IpepU", "Tinkercad Circuits: PIR harakat datchigi"]],
    yq: "arduino pir motion sensor burglar alarm tutorial tinkercad",
    hw: ["Uyingizdagi yoki do'kondagi harakat datchiklarini ko'zdan kechiring va ularning qayerga o'rnatilganini daftarga yozing."]
  },
  {
    n: 19, mod: 3, t: "LCD displey (16x2): Matn va ma'lumotlarni chiqarish",
    goal: "O'quvchilar 16x2 suyuq kristall displey (LCD — Liquid Crystal Display) bilan ishlashni, `<LiquidCrystal.h>` kutubxonasini, piksellar koordinatasini (`setCursor`) va datchik natijalarini ekranda chiroyli ko'rsatishni o'rganadi.",
    out: ["16x2 belgili LCD ekranning tuzilishini (16 ustun, 2 qator) tushuntiradi", "Displeyga matn va datchik sonlarini chiqarish kodini yozadi", "`lcd.setCursor(ustun, qator)` yordamida yozuvlar joyini to'g'ri belgilaydi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Arduino o'lchagan haroratni kompyutersiz, to'g'ridan-to'g'ri kichik ekranda qanday ko'rish mumkin?"], ["8", "Yangi mavzu: LCD 16x2 displeyi (16 ta harf, 2 ta qator), `<LiquidCrystal.h>` kutubxonasi, `lcd.print()` va `lcd.setCursor()`."], ["23", "Amaliy ish: «Elektron mini-tablo va termometr ekrani»."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Tinkercad Circuits'da tayyor yig'ilgan «LCD» starter sxemasi bor — o'quvchilarga 16 ta simni qo'lda ulab adashmasliklari uchun shu tayyor starterdan foydalanishni ko'rsating.", "Ekranda matn miltillab ketmasligi uchun `lcd.clear()` ni har siklda takrorlamaslik kerak; faqat sonlar o'zgarganda yangilash yoki ustiga yozish ma'qul."],
    pt: "Amaliy ish: «Mening birinchi LCD ekranim»",
    steps: [
      "Tinkercad Circuits'da o'ng paneldagi «Starters» $\\rightarrow$ «Arduino» bo'limidan «LCD» tayyor sxemasini maydonga olib chiqing (barcha simlar va potensiometr ulangan!).",
      "Kodni oching va qanday yozilganini ko'rib chiqing:",
      "`#include <LiquidCrystal.h>` — kutubxona ulangan.",
      "`LiquidCrystal lcd(12, 11, 5, 4, 3, 2);` — pinlar belgilangan.",
      "`void setup()` ichida: `lcd.begin(16, 2);` — ekran o'lchami: 16 ta ustun, 2 ta qator.",
      "1-qatorga yozamiz: `lcd.setCursor(0, 0); lcd.print(\"Salom, 6-sinf!\");`",
      "2-qatorga yozamiz: `lcd.setCursor(0, 1); lcd.print(\"Arduino Uno\");`",
      "Simulyatsiyani yoqing: moviy ekranda chiroyli oq harflar paydo bo'ladi!",
      "Endi 2-qatorga datchik sonini yoki soniyalar hisoblagichini chiqaring: `lcd.print(millis() / 1000); lcd.print(\" soniya\");`"
    ],
    extra: ["Ekranda matn chapga qarab oqib o'tadigan yuguruvchi satr (Marquee) qiling (`lcd.scrollDisplayLeft()`).", "Harorat sensori ulab, ekranda haqiqiy «Harorat: 25 C» ko'rsatkichini chiqaring."],
    ask: [
      ["LCD 16x2 nima degani?", "16 ta ustun (harf) va 2 ta qatordan iborat suyuq kristall ekran."],
      ["1-qatordan 2-qatorga o'tish qaysi buyruq bilan qilinadi?", "`lcd.setCursor(0, 1);` (dasturlashda qatorlar 0 dan boshlanadi!)."],
      ["Ekranni butunlay tozalash buyrug'i qaysi?", "`lcd.clear();`."],
      ["LCD displeylar hayotda qayerda ko'p uchraydi?", "Kalkulyatorlarda, kassa apparatlarida, bankomatlarda, 3D printerlar ekranida."]
    ],
    quiz: [
      ["LCD 16x2 ekranda bir vaqtning o'zida jami nechta belgi sig'adi?", "32 ta belgi (16 × 2)", "16 ta", "100 ta"],
      ["LCD kutubxonasi nomi qaysi?", "LiquidCrystal.h", "Screen.h", "Display.h"],
      ["Ikkinchi qatorning eng birinchi katagiga o'tish koordinatasi qaysi?", "lcd.setCursor(0, 1);", "lcd.setCursor(1, 2);", "lcd.setCursor(2, 1);"],
      ["Ekranga matn chiqarish buyrug'i qaysi?", "lcd.print()", "lcd.write()", "lcd.show()"],
      ["LCD ekranning kontrastini (harflar qoraligini) nima bilan sozlanadi?", "Potensiometr bilan", "Tugma bilan", "Kondensator bilan"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: LCD ekranda yozish",
      steps: [
        "#include <LiquidCrystal.h> kutubxonasini ulash",
        "LiquidCrystal lcd(12, 11, 5, 4, 3, 2); pinlarini sozlash",
        "void setup() ichida lcd.begin(16, 2) bilan ekranni yoqish",
        "lcd.setCursor(0, 0) orqali 1-qator boshiga kursorni qo'yish",
        "lcd.print(\"Xush kelibsiz!\") orqali matnni chiqarish",
        "lcd.setCursor(0, 1) orqali 2-qatorga o'tish"
      ]
    },
    topic: [
      { e: "📺", h: "Suyuq kristallar mo''jizasi", p: "Suyuq kristall moddalar suyuqlik kabi oqadi, lekin kristall kabi tartibli joylashadi. Ularga kichik elektr berilsa, ular burilib, orqadan kelayotgan yorug'likni to'sadi yoki o'tkazadi. Shunday qilib harflar hosil bo'ladi.", q: "Birinchi LCD ekran qachon chiqqan?", a: "1968-yilda AQShda yaratilgan." },
      { e: "📟", h: "Avtonom robotlar ko'zgusi", p: "Robot har safar kompyuterga sim bilan ulanib turolmaydi. Robot korpusiga o'rnatilgan LCD ekran uning «yuzi» bo'lib, batareya quvvati, xatolar va topshiriq holatini to'g'ridan-to'g'ri ko'rsatib turadi.", q: "Simulyatordagi robotda ham ekran bormidi?", a: "Ha, uning ham mitti ma'lumot ekrani bor edi." },
      { e: "🔌", h: "I2C moduli — simlarni tejash", p: "Oddiy LCD ekranga 16 ta sim kerak bo'ladi. Lekin zamonaviy I2C moduli yordamida bu simlar soni atigi 4 taga (VCC, GND, SDA, SCL) tushadi! Bu robot yasashda juda qulay.", q: "SDA va SCL nima?", a: "Ma'lumotlar va soat chastotasi uzatuvchi ikkita sim." }
    ],
    prog: [{ t: "LCD ekranga ma'lumot chiqarish", b: ["y:📚 #include <LiquidCrystal.h>", "y:⚙️ lcd.begin(16, 2);", "p:📍 lcd.setCursor(0, 0);", "p:💬 lcd.print(\"Aqlli Xona\");", "p:📍 lcd.setCursor(0, 1);", "p:🔢 lcd.print(\"Harorat: 24C\");"] }],
    video: [["wY9kQz1B-lM", "Arduino LCD 16x2 displey darsi"], ["a68_g2IpepU", "Tinkercad Circuits: LCD 16x2 tutorial"]],
    yq: "arduino lcd 16x2 display tutorial liquidcrystal tinkercad",
    hw: ["Daftaringizga 16 ustun va 2 qatordan iborat to'r chizing va uning ichiga o'z ismingiz va familiyangizni kataklarga joylab yozing."]
  },
  {
    n: 20, mod: 3, t: "Tinkercad'dan haqiqiy platalarga: Arduino IDE",
    goal: "O'quvchilar virtual simulyatordan haqiqiy jismoniy elektronikaga o'tishni: kompyuterga Arduino IDE dasturini o'rnatish, haqiqiy USB ulanish, drayverlar, COM-port tanlash va kodni plataga yuklashni (Upload) o'rganadi.",
    out: ["Arduino IDE dasturining interfeysini va asosiy tugmalarini (Verify, Upload) biladi", "Haqiqiy Arduino platasini USB orqali ulab, to'g'ri COM-portni tanlaydi", "Tinkercad'da yozgan kodini haqiqiy jismoniy plataga yuklab, LEDni yoqadi"],
    need: ["Kompyuterlar, haqiqiy Arduino Uno to'plami (Starter Kit), USB kabel, Breadboard, LEDlar"],
    plan: [["6", "Biz shu paytgacha virtual simulyatorda ishladik. Bugun birinchi marta haqiqiy platalar va simlarni qo'lda ushlaymiz!"], ["8", "Yangi mavzu: Arduino IDE (Integrated Development Environment), Verify (tekshirish/kompilyatsiya) va Upload (yuklash). COM-portlar."], ["23", "Amaliy ish: Haqiqiy Arduino Uno'ga birinchi «Blink» kodini yuklash."], ["4", "Xavfsizlik qoidalari va muhokama."], ["4", "Xulosa va test."]],
    tips: ["Xavfsizlik qoidasi: simlarni ulayotganda yoki sxemani o'zgartirayotganda HAR DOIM USB kabelni kompyuterdan uzib qo'yish kerak! Qisqa tutashuv (short circuit) kompyuter USB portiga zarar yetkazmasligi lozim.", "Agar kod yuklanmasa (avrdude error): «Tools» $\\rightarrow$ «Port» menyusidan to'g'ri COM-port tanlanganini va plata turi «Arduino Uno» ekanini tekshiring."],
    pt: "Amaliy ish: «Haqiqiy mikrokontrollerga birinchi yuklash»",
    steps: [
      "Kompyuterda rasmiy Arduino IDE (yoki Arduino Web Editor) dasturini ishga tushiring.",
      "Haqiqiy Arduino Uno platasini USB kabel orqali kompyuterga ulang. Platada yashil ON chirog'i yonadi.",
      "Arduino IDE menyusidan: «Tools» (Asboblar) $\\rightarrow$ «Board» $\\rightarrow$ «Arduino Uno» ni tanlang.",
      "Keyin: «Tools» $\\rightarrow$ «Port» bo'limidan Arduino ulangan portni tanlang (masalan: `COM3` yoki `/dev/ttyUSB0`).",
      "Dasturga o'tgan darslardagi «Blink» kodini yozing yoki «File» $\\rightarrow$ «Examples» $\\rightarrow$ «01.Basics» $\\rightarrow$ «Blink» ni oching.",
      "Yuqori chap burchakdagi «Verify» (Qushcha belgisi) tugmasini bosing: dastur xatolarni tekshiradi (Done compiling).",
      "Endi yonidagi «Upload» (O'ngga strelka belgisi) tugmasini bosing!",
      "Platadagi TX va RX mitti chiroqlari bir necha soniya chaqmoqdek miltillaydi (kod yuklanmoqda)...",
      "«Done uploading» xabari chiqdi va haqiqiy Arduino platasidagi chiroq miltillay boshladi! Siz haqiqiy dasturchisiz!"
    ],
    extra: ["Breadboard ustida haqiqiy 220 Om rezistor va LED ulab, tashqi chiroqni miltillating.", "Serial Monitor tugmasini (yuqori o'ng burchakdagi lupa belgisi) bosib, haqiqiy plata bilan aloqa qiling."],
    ask: [
      ["Arduino IDE nima?", "Arduino uchun kod yozish, tekshirish va uni plataga yuklash uchun mo'ljallangan maxsus kompyuter dasturi."],
      ["«Verify» (Tekshirish) tugmasi nima qiladi?", "Koddagi sintaktik xatolarni tekshiradi va uni mashina tiliga (ikkilik kodga) aylantiradi."],
      ["«Upload» (Yuklash) tugmasi nima qiladi?", "Tayyor dasturni USB simi orqali Arduino mikrosxemasi xotirasiga yozadi."],
      ["Sxemani yig'ayotganda eng birinchi qoida nima?", "USB kabelni kompyuterdan uzib, elektrni o'chirib keyin simlarni ulash."]
    ],
    quiz: [
      ["Arduino IDE'da kodni tekshirish belgisi qaysi?", "Qushcha (Checkmark) belgisi", "Strelka", "Lupa"],
      ["Kodni plataga yuklash tugmasi qaysi?", "O'ngga qaratilgan strelka (Upload)", "Kvadrat", "Qaychi"],
      ["Arduino kompyuterga qaysi kabel orqali ulanadi?", "USB kabel", "Audio kabel", "Kabel kerak emas"],
      ["Arduino IDE'da plata turini qaysi menyudan tanlaymiz?", "Tools -> Board", "File -> Open", "Help -> About"],
      ["Kodni yuklayotganda qaysi indikator chiroqlar tez miltillaydi?", "TX va RX (ma'lumot uzatish va qabul qilish)", "Faqat ON chirog'i", "Chiroqlar o'chadi"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Haqiqiy plataga kod yuklash",
      steps: [
        "Arduino platasini USB kabel orqali kompyuterga ulash",
        "Arduino IDE dasturini ochish va kodni yozish",
        "Tools menyusidan «Arduino Uno» va to'g'ri COM-portni tanlash",
        "«Verify» tugmasi bilan koddagi xatolarni tekshirish",
        "«Upload» tugmasini bosib kodni plataga yuborish",
        "TX/RX miltillashi tugagach, natijani jonli kuzatish"
      ]
    },
    topic: [
      { e: "🔌", h: "Haqiqiy elektronika zavqi", p: "Kompyuter ekranidagi virtual sxema qiziqarli, lekin qo'lingiz bilan haqiqiy simlarni ulash, haqiqiy diodning charaqlab yonishini va motorning g'uvullab aylanishini his qilish mutlaqo boshqa olamdir!", q: "Haqiqiy detal kuyishi mumkinmi?", a: "Ha, shuning uchun e'tibor va ehtiyotkorlik kerak." },
      { e: "⚙️", h: "Kompilyatsiya nima?", p: "Biz C++ tilida inglizcha so'zlar bilan yozamiz: `digitalWrite`, `HIGH`. Lekin protsessor faqat 0 va 1 larni tushunadi. Kompilyator bizning so'zlarimizni mikrokontroller tushunadigan ikkilik mashina kodiga tarjima qilib beradi.", q: "Bu tarjimon qancha vaqtda ishlaydi?", a: "Atigi 1–2 soniyada!" },
      { e: "🧯", h: "Qisqa tutashuv xavfi", p: "Agar 5V simi bexosdan to'g'ridan-to'g'ri GND simiga tegib ketsa, «Qisqa tutashuv» yuz beradi. Bunda simlar qiziydi va mikrosxema kuyishi mumkin. Shuning uchun har doim sxemani tekshirib, keyin quvvat bering.", q: "Sxemani o'zgartirganda nima qilamiz?", a: "Avval USB ni uzamiz!" }
    ],
    prog: [{ t: "Arduino IDE ish jarayoni", b: ["y:💻 C++ kodini yoz", "b:✔️ Verify (Kompilyatsiya)", "o:🔌 USB & COM-portni ula", "g:➡️ Upload (Yuklash)", "p:💡 Haqiqiy plata ishga tushdi!"] }],
    video: [["wY9kQz1B-lM", "Arduino IDE o'rnatish va birinchi yuklash"], ["a68_g2IpepU", "Arduino drayverlar va COM-port muammolarini hal qilish"]],
    yq: "arduino ide installation first upload blink com port tutorial",
    hw: ["Kompyuteringizga rasmiy arduino.cc saytidan Arduino IDE dasturini o'rnatib ko'ring (yoki Web Editorni oching)."]
  },
  {
    n: 21, mod: 3, t: "Aqlli uy tizimi (Smart Home) elementlari",
    goal: "O'quvchilar ko'p datchikli murakkab ekotizimlarni: avtomatik yorug'lik (LDR), harorat nazorati (TMP36), xavfsizlik signalizatsiyasi (PIR) va LCD ekranni bitta «Aqlli uy» tizimiga birlashtirishni o'rganadi.",
    out: ["Bir nechta datchiklar va aktuatorlarni bitta platada uyg'unlashtiradi", "Tizimning barcha ma'lumotlarini bitta LCD ekranda almashib ko'rsatadi", "Zamonaviy aqlli binolarning avtomatika tamoyillarini tushuntiradi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "«Aqlli uy» (Smart Home) nima? U o'z egasiga qanday yordam beradi va energiyani qanday tejaydi?"], ["8", "Tizim loyihasi: Tungi yoritish + Xavfsizlik signali + Harorat nazorati + Ma'lumot tablosi."], ["24", "Amaliy ish: Aqlli uy boshqaruv markazini yig'ish."], ["4", "Muhokama va takomillashtirish."], ["3", "Xulosa va test."]],
    tips: ["Murakkab loyihalarda barcha kodni birdaniga yozmang! Avval faqat haroratni ulab tekshiring, keyin yorug'likni qo'shing, keyin ekranni. Qadamma-qadam yig'ish — usta muhandis qoidasidir.", "Breadboarddagi quvvat shinasini (5V va GND) ikkala tomonga sim bilan ko'prik qilib o'tkazib oling, chunki datchiklar ko'p."],
    pt: "Amaliy ish: «Aqlli uy boshqaruv markazi»",
    steps: [
      "Tinkercad Circuits'da Arduino Uno va katta Breadboard qo'ying.",
      "1-modul (Xavfsizlik): PIR harakat datchigini pin 2 ga, qizil signal LEDini pin 13 ga ulang.",
      "2-modul (Tungi yorug'lik): LDR fotorezistorni A1 ga, xona oq chirog'ini pin 9 (PWM) ga ulang.",
      "3-modul (Iqlim nazorati): TMP36 harorat datchigini A0 ga ulang.",
      "4-modul (Ekran): LCD 16x2 displeyini ulang.",
      "Kod arxitekturasini quring:",
      "`void loop()` ichida har soniyada:",
      "1) Haroratni o'lchaymiz va LCD 1-qatorga chiqaramiz: `lcd.print(\"T: \"); lcd.print(tempC);`",
      "2) Qorong'ilik tushsa, xona chirog'ini (pin 9) avtomatik yoqamiz.",
      "3) Agar PIR harakat sezsa, LCD 2-qatorga «XAVF: Harakat!» deb yozamiz va signal beramiz.",
      "Simulyatsiyani yoqing: haqiqiy zamonaviy aqlli uyning kichik modeli to'liq ishga tushdi!"
    ],
    extra: ["Ventilyator motorini qo'shing: agar harorat 28°C dan oshsa, motor o'zi aylanib xonani shamollatsin.", "Kechasi xonada harakat bo'lganda yo'lak chirog'ini xira yorituvchi rejim qo'shing."],
    ask: [
      ["Aqlli uy nima?", "Datchiklar, kontrollerlar va aktuatorlar yordamida inson aralashuvisiz xavfsizlik, qulaylik va energiya tejashni ta'minlovchi avtomatlashtirilgan uy."],
      ["Aqlli uy tizimida qanday 3 ta asosiy yo'nalish bor?", "1) Qulaylik (iqlim, yorug'lik), 2) Xavfsizlik (signalizatsiya, yong'in datchigi), 3) Energiya tejash."],
      ["Nega barcha datchiklar bitta markaziy kontrollerga (Arduino) ulanadi?", "Chunki barcha ma'lumotlar bir joyda tahlil qilinib, to'g'ri qaror qabul qilinishi uchun."],
      ["Katta tizimlarni yig'ishda eng asosiy qoida nima?", "Bosqichma-bosqich yig'ish va har bir qismni alohida sinab borish."]
    ],
    quiz: [
      ["Aqlli uyda haroratni nazorat qiluvchi datchik qaysi?", "TMP36 harorat sensori", "PIR sensori", "Buzzer"],
      ["Qorong'i tushganda chiroqni yoquvchi datchik qaysi?", "Fotorezistor (LDR)", "Tugma", "Potensiometr"],
      ["Uyga begona kishilar kirganini qaysi datchik sezadi?", "PIR harakat sensori", "TMP36", "LCD"],
      ["Barcha ko'rsatkichlarni uy egasiga ko'rsatuvchi qurilma qaysi?", "LCD displey", "Batareya", "Rezistor"],
      ["Internet orqali uydagi chiroqlarni telefondan boshqarish nima deb ataladi?", "IoT (Internet of Things — Buyumlar interneti)", "Offline", "Blink"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Aqlli uy boshqaruv zanjiri",
      steps: [
        "Datchiklardan (LDR, TMP36, PIR) ma'lumotlarni o'qish",
        "Haroratni hisoblab, LCD ekranning 1-qatoriga chiqarish",
        "Yorug'lik past bo'lsa xona chirog'ini avtomatik yoqish",
        "Harakat datchigi tekshiruvi: xavf bo'lsa signal berish",
        "Ekranning 2-qatoriga xavfsizlik holatini yozish",
        "1 soniyadan so'ng siklni qayta takrorlash"
      ]
    },
    topic: [
      { e: "🏡", h: "Kelajak uylari bugun", p: "Ilgari uylar shunchaki g'isht va toshdan iborat bo'lgan. Bugungi uylar esa tirik organizm kabi «sezadi», «o'ylaydi» va insonlar ehtiyojiga moslashadi. Siz hozirdan kelajak uylarining muhandisiga aylanyapsiz!", q: "Kelajakda uylar yana nimalarni qila oladi?", a: "Oziq-ovqat tugasa xabar beradi, o'zini tozalaydi." },
      { e: "🌐", h: "IoT — Buyumlar interneti", p: "Agar ushbu Arduino platasiga Wi-Fi yoki Bluetooth moduli (masalan, ESP8266) qo'shsak, uyingizdagi haroratni dunyoning narigi burchagidan turib telefoningizda ko'rishingiz mumkin bo'ladi.", q: "Choynakni telefondan yoqish mumkinmi?", a: "Ha, aqlli rozetkalar aynan shunday ishlaydi." },
      { e: "🔋", h: "Yashil shahar — tejamkorlik", p: "Odam yo'q xonalarda chiroq va konditsionerlar o'z-o'zidan o'chishi orqali har bir xonadon yuzlab kilovatt elektr energiyasini tejaydi.", q: "Bu tabiatni asrashga yordam beradimi?", a: "Juda katta foyda keltiradi!" }
    ],
    prog: [{ t: "Aqlli uy sikli", b: ["o:🔁 harorat = getTemp();", "o:🔁 yoruglik = getLight();", "g:❓ Agar (yoruglik < 400) -> Chiroqni yoq", "g:❓ Agar (PIR == HIGH) -> LCD: \"Xavf!\"", "p:📺 LCD: harorat va holatni ko'rsat", "r:⏳ delay(1000);"] }],
    video: [["wY9kQz1B-lM", "Arduino Smart Home Project Tutorial"], ["a68_g2IpepU", "Tinkercad Circuits: Aqlli uy loyihasi"]],
    yq: "arduino smart home project tutorial tinkercad circuits for kids",
    hw: ["O'z xonangiz uchun «Aqlli xona» loyihasi rejasini tuzing: unda qanday 3 ta avtomat funksiya bo'lishini xohlardingiz? Daftarga yozing."]
  },
  {
    n: 22, mod: 3, t: "Ochiq loyiha: G'oya, sxemotexnika va algoritm loyihalash",
    goal: "O'quvchilar yil davomida olgan barcha bilimlariga tayanib, o'zlarining mustaqil mualliflik loyihasini (Aqlli tizim, robot, avtomatika yoki xavfsizlik qurilmasi) rejalashtirishni, prinsipial sxemasini chizishni va algoritmini ishlab chiqishni o'rganadi.",
    out: ["O'z loyihasining g'oyasi, maqsadi va vazifalarini shakllantiradi", "Kerakli elektron qismlar (datchiklar, motorlar, LEDlar, rezistorlar) spetsifikatsiyasini tuzadi", "Tinkercad Circuits'da sxemaning qoralamasini chizadi"],
    need: ["A4 qog'ozlar, rangli ruchkalar, daftarlar", "Tinkercad Circuits"],
    plan: [["6", "Yakuniy katta muhandislik loyihasiga start! Bugun har bir o'quvchi o'zining ixtirosini rejalashtiradi."], ["10", "Muhandislik pasporti: G'oya $\\rightarrow$ Komponentlar $\\rightarrow$ Elektr sxemasi $\\rightarrow$ Blok-sxema (Algoritm)."], ["22", "Mustaqil ijod: Qog'ozda loyiha pasportini to'ldirish va sxema chizish."], ["4", "Do'stlar oldida g'oyani himoya qilish (Pitch)."], ["3", "Xulosa va maslahatlar."]],
    tips: ["O'quvchilarga g'oya tanlashda yordam bering: «Aqlli gul sug'orish tizimi», «Avtomatlashtirilgan saralash konveyeri», «Robot-changyutgich to'siqlardan qochishi», «Elektron pianino» yoki «Aqlli seyf».", "Sxemani chizayotganda qaysi detal Arduino'ning qaysi piniga ulanishini jadval qilib yozishni talab qiling — bu kod yozishda adashishning oldini oladi."],
    pt: "Amaliy ish: «Loyiha pasportini ishlab chiqish»",
    steps: [
      "A4 qog'ozini oling va tepasiga loyihangiz nomini yozing (masalan: «Aqlli seyf» yoki «Avtomat gulxona»).",
      "Muammo va yechim: bu qurilma qanday muammoni hal qiladi?",
      "Komponentlar ro'yxati (BOM — Bill of Materials): nechta LED, qanday datchik, servomotor, buzzer kerakligini yozing.",
      "Pinlar jadvali:",
      "Masalan: Pin 2 — Tugma, Pin 9 — Servomotor, Pin A0 — Harorat sensori, Pin 8 — Buzzer.",
      "Prinsipial elektr sxemasini qog'ozda chizing: nima qayerga ulanadi?",
      "Dastur algoritmining blok-sxemasini tuzing: Dastur boshlanadi $\\rightarrow$ Datchik o'qiydi $\\rightarrow$ Agar shart bajarilsa... $\\rightarrow$ Motor aylanadi.",
      "Tinkercad Circuits'da loyihangiz uchun yangi bo'sh sxema ochib, kerakli detallarni maydonga terib qo'ying."
    ],
    extra: ["Loyihangiz uchun 3D korpus dizaynini Tinkercad 3D bo'limida loyihalang.", "Loyihaga qanday qo'shimcha qulayliklar qo'shish mumkinligini o'ylab ko'ring."],
    ask: [
      ["Elektronikada «BOM» (Bill of Materials) nima?", "Loyiha uchun kerak bo'ladigan barcha detallar va ularning soni yozilgan ro'yxat."],
      ["Nega kod yozishdan oldin pinlar jadvalini tuzish kerak?", "Kodda chalkashmaslik va har bir pin to'g'ri sozlanganiga ishonch hosil qilish uchun."],
      ["Yaxshi muhandislik loyihasining belgisi nima?", "Aniq reja, xavfsiz sxema, tushunarli kod va insonlarga amaliy foyda keltirishi."],
      ["Rejani do'stlar bilan muhokama qilish nimaga yordam beradi?", "Ko'zdan qochgan xatolarni va yangi qiziqarli g'oyalarni topishga."]
    ],
    quiz: [
      ["Loyiha yaratishda birinchi qadam nima?", "G'oya va reja tuzish, komponentlarni tanlash", "Darhol simlarni ulash", "Kodni yoqish"],
      ["Pinlar jadvali nega kerak?", "Qaysi detal qaysi pinga ulanishini adashtirmaslik uchun", "Faqat baho olish uchun", "Chiroyli turishi uchun"],
      ["Algoritm blok-sxemasi nimani ko'rsatadi?", "Dastur buyruqlarining mantiqiy ketma-ketligini", "Kompyuter narxini", "Kabel uzunligini"],
      ["Muhandislik loyihasida eng muhim qoida qaysi?", "Qadamma-qadam reja bo'yicha ishlash", "Birovdan ko'chirib olish", "Oxiriga yetkazmaslik"],
      ["O'quvchi o'z g'oyasini qisqa tushuntirib berishi nima deyiladi?", "Pitch (taqdimot)", "Serial", "Analog"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Muhandislik loyihalash bosqichlari",
      steps: [
        "Muammoni aniqlash va aqlli yechim g'oyasini o'ylash",
        "Kerakli elektron komponentlar ro'yxatini (BOM) tuzish",
        "Arduino pinlari taqsimoti jadvalini yozish",
        "Elektr ulanish sxemasini chizish",
        "Dastur algoritmi va blok-sxemasini tuzish",
        "Amaliy yig'ishga kirishish"
      ]
    },
    topic: [
      { e: "📐", h: "Muhandislik — tartib san'ati", p: "Dunyo bo'ylab barcha samolyotlar, ko'priklar va sun'iy yo'ldoshlar avval muhandislar tomonidan qog'ozda chiziladi va hisob-kitob qilinadi. Bitta xato hisob ulkan zararga olib kelishi mumkin. Shuning uchun reja — muvaffaqiyat garovidir.", q: "Arxitektor uyni chizmasiz qura oladimi?", a: "Yo'q, chizmasiz bino qulab tushadi." },
      { e: "💡", h: "Muammo — bu yangi ixtiro imkoni", p: "Ko'chadagi har bir noqulaylik, uydagi har bir qiyinchilik — bu yangi ixtiro uchun g'oyadir. «Nega gulim qurib qoldi?» degan savol — avtomat sug'orish tizimi ixtirosiga turtki bo'ladi.", q: "Sizni qanday kundalik muammo qiziqtiradi?", a: "O'quvchilarning shaxsiy kuzatuvlari." },
      { e: "🚀", h: "Yosh ixtirochilar", p: "Dunyodagi ko'plab mashhur startaplar maktab partalarida o'ylab topilgan g'oyalardan boshlangan. Sizning bugungi loyihangiz ertaga katta texnologik biznesga aylanishi mumkin!", q: "Buning uchun nima kerak?", a: "Qiziqish, bilim va tinimsiz mehnat!" }
    ],
    prog: [{ t: "Muhandislik rejasi", b: ["y:💡 G'oya va maqsad", "b:📋 Komponentlar (BOM)", "o:🔌 Pinlar taqsimoti jadvali", "g:📐 Sxemotexnika chizmasi", "p:💻 Algoritm va kod rejasi!"] }],
    video: [["wY9kQz1B-lM", "Arduino loyihalarini qanday rejalashtirish kerak?"], ["a68_g2IpepU", "Yosh ixtirochilar: Arduino Engineering Process"]],
    yq: "how to plan and build an arduino project engineering process for kids",
    hw: ["Loyihangizning chiroyli qoralama sxemasini rangli qalamlar bilan daftarga to'liq chizib keling."]
  },
  {
    n: 23, mod: 3, t: "Ochiq loyiha: Sxemani yig'ish, dasturlash va sozlash (Debugging)",
    goal: "O'quvchilar o'tgan darsda rejalashtirilgan mualliflik loyihasini Tinkercad Circuits'da (yoki haqiqiy platalarda) yig'adi, kodini yozadi, xato va nosozliklarni (Debugging) bartaraf etadi va to'liq ishchi holatga keltiradi.",
    out: ["Murakkab ko'p qismli sxemani mustaqil yig'adi", "C++ dastur kodini modullar bo'yicha yozadi va xatolarni tuzatadi", "Do'stlar va mentor tavsiyalari asosida loyihani mukammallashtiradi"],
    need: ["Kompyuterlar, Tinkercad Circuits yoki haqiqiy Arduino to'plamlari", "O'tgan darsdagi loyiha pasporti"],
    plan: [["4", "Tezkor yo'riqnoma: bugun hamma o'z rejasini ishlaydigan haqiqiy sxema va kodga aylantiradi."], ["25", "Mustaqil amaliy ish: sxemani yig'ish va kod yozish."], ["8", "O'zaro sinov (Playtesting) va xatolarni tuzatish (Debugging)."], ["5", "Yakuniy sozlash va pardoz berish."], ["3", "Xulosa va ertangi ko'rgazmaga tayyorgarlik."]],
    tips: ["Agar biror detal ishlamasa, vahima qilmang! 3 ta asosiy narsani tekshiring: 1) 5V va GND to'g'ri ulanganmi? 2) Kodda pin raqami to'g'ri yozilganmi? 3) `pinMode` sozlandimi?", "Serial Monitor orqali datchiklar nima son qaytarayotganini tekshirish xatolarni 10 barobar tezroq topishga yordam beradi."],
    pt: "Amaliy ish: «Loyihani hayotga tatbiq etish»",
    steps: [
      "Tinkercad Circuits'da loyihangiz sxemasini oching.",
      "1-qadam: Quvvat liniyalarini (5V va GND) Breadboardga ulang.",
      "2-qadam: Datchiklarni (Analog va Digital) ulang va simlar rangini tartibga soling.",
      "3-qadam: Aktuatorlarni (LEDlar, buzzer, servo) mos pinlarga ulang.",
      "4-qadam: Kod oynasini oching va sozlamalarni (`void setup()`) yozing.",
      "5-qadam: `void loop()` dagi asosiy mantiqiy shartlarni yozing.",
      "Simulyatsiyani yoqing va tekshiring: barcha datchiklar buyruqqa to'g'ri javob beryaptimi?",
      "Yoningizdagi sherigingiz bilan joy almashing: u sizning loyihangizni sinab ko'rsin va fikr bildirsin.",
      "Olingan maslahatlar bo'yicha kamchiliklarni to'g'rilang va ertangi taqdimotga tayyorlaning!"
    ],
    extra: ["Loyihangizga xatolik yuz berganda xabar beruvchi maxsus qizil LED indikator qo'shing.", "Kodingizga har bir blok nima qilishini tushuntiruvchi chiroyli izohlar (`// kommentlar`) yozing."],
    ask: [
      ["Elektronikada nosozlikni qidirish qanday boshlanadi?", "Eng avvalo quvvat simlarini (5V va GND) va ulanishlarni ko'zdan kechirish bilan."],
      ["Dasturdagi qaysi vosita xatolarni topishda eng yaxshi yordamchi hisoblanadi?", "Serial Monitor — u orqali datchik signallari real vaqtda ko'rinib turadi."],
      ["Nega koddagi izohlar (kommentariyalar) muhim?", "O'zingiz yoki boshqa dasturchi keyinchalik kodni o'qiganda har bir qator nima qilishini tez tushunishi uchun."],
      ["Birinchi urinishda loyiha ishlamay qolsa nima qilish kerak?", "Tushkunlikka tushmasdan, xatoni qadamma-qadam tahlil qilib tuzatish kerak."]
    ],
    quiz: [
      ["C++ tilida bir qatorli izoh (komment) qaysi belgi bilan yoziladi?", "// (ikkita qiya chiziq)", "/* */", "#"],
      ["Agar servomotor qimirlamasa, birinchi navbatda nimani tekshirish kerak?", "Kutubxona ulanganmi va attach(pin) to'g'rimi", "Rangini", "Havo haroratini"],
      ["Datchik ma'lumotlarini Serial Monitorga chiqarish nimaga yordam beradi?", "Datchik to'g'ri ishlayotganini tekshirishga (Debugging)", "Platani tezlatishga", "Simlarni tejashga"],
      ["Sxemada chalkashlik bo'lmasligi uchun nima qilish kerak?", "Simlarni to'g'ri ranglarda va tartibli tortish kerak", "Hamma simni bitta joyga tiqish kerak", "Simsiz ishlash kerak"],
      ["Loyiha tayyor bo'lgach nima qilinadi?", "To'liq sinovdan o'tkazilib, taqdimotga tayyorlanadi", "Darhol o'chirib yuboriladi", "Hech kimga ko'rsatilmaydi"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Xatolarni tuzatish (Debugging)",
      steps: [
        "Sxemada quvvat (5V) va yer (GND) ulanishlarini ko'zdan kechirish",
        "Pinlar koddagi raqamlarga to'g'ri kelishini tekshirish",
        "Serial.println() orqali datchik ko'rsatkichlarini ekranda kuzatish",
        "Koddagi shartlarni (if ... else) qayta tahlil qilish",
        "Topilgan xatoni to'g'rilab, qayta simulyatsiya qilish",
        "Mukammal natijaga erishish"
      ]
    },
    topic: [
      { e: "🔍", h: "Muhandislik sabr-toqati", p: "Hech bir katta ixtiro birinchi urinishda benuqson ishlamagan. Tomas Edison lampochkani yaratguncha 1000 dan ortiq muvaffaqiyatsiz tajriba o'tkazgan. Xatoni topib uni to'g'rilash — muhandislikning eng qiziqarli qismidir!", q: "Edison xatolar haqida nima degan?", a: "«Men mag'lub bo'lmadim, men shunchaki ishlamaydigan 1000 ta yo'lni topdim!»" },
      { e: "💬", h: "Izohlar (Comments) — kelajakka maktub", p: "`// bu yerda motor ochiladi` kabi izohlar kompyuter uchun emas, inson uchun yoziladi. Ular kodingizni professional va tushunarli qiladi.", q: "Katta loyihalarda izohlar nima uchun kerak?", a: "Jamoa a'zolari bir-birining kodini tez tushunishi uchun." },
      { e: "🤝", h: "Hamkorlik va yordam", p: "Sinfdoshlaringiz bilan bir-biringizning sxemangizni ko'rib, xatolarni birgalikda izlash — jamoaviy muhandislik ruhini tarbiyalaydi.", q: "Do'stingizga yordam berish o'zingizga nima beradi?", a: "O'z bilimlaringizni yanada mustahkamlaydi!" }
    ],
    prog: [{ t: "Debugging zanjiri", b: ["y:🔌 Sxemani ula", "o:🔍 Serial Monitor: datchikni ko'r", "g:✏️ Xato shartni to'g'rila", "b:💡 Qayta tekshir", "p:🎉 Tizim 100% ishlayapti!"] }],
    video: [["wY9kQz1B-lM", "Arduino troubleshooting and common errors"], ["a68_g2IpepU", "Arduino loyihalaridagi nosozliklarni tuzatish"]],
    yq: "arduino troubleshooting common errors debugging tutorial tinkercad",
    hw: ["Loyihangiz taqdimoti uchun 2 daqiqalik nutq rejasini tayyorlang: loyihangiz nomi, nima qilishi va qanday qismlardan iborat ekani."]
  },
  {
    n: 24, mod: 3, t: "Yakuniy ko'rgazma, taqdimot va mini-xakaton (Demo Day)",
    goal: "O'quvchilar yil davomida yaratgan barcha mualliflik loyihalarini (sxemalar, kodlar, aqlli qurilmalar) omma oldida namoyish etishni (Pitch), o'z muhandislik g'oyalarini himoya qilishni va 6-sinf Arduino kursini tantanali yakunlashni nishonlaydi.",
    out: ["O'z elektronika loyihasini 2–3 daqiqada ishonch bilan taqdim etadi (Pitch)", "Sxema va kodning qanday ishlashini savol beruvchilarga professional tushuntiradi", "Yil davomida o'zlashtirilgan elektronika va dasturlash bilimlarini sarhisob qiladi"],
    need: ["Proyektor yoki katta ekran", "Sertifikatlar va esdalik sovg'alari", "Bayramona kayfiyat"],
    plan: [["5", "Tantanali ochilish: bugun bizning katta «Demo Day» — yosh muhandislar ko'rgazmasi!"], ["5", "Taqdimot reglamenti: 2 daqiqa namoyish, 1 daqiqa savol-javob."], ["28", "O'quvchilar taqdimotlari (har bir o'quvchi o'z sxemasini jonli ko'rsatadi)."], ["4", "Nominatsiyalar bo'yicha taqdirlash va sertifikatlar topshirish."], ["3", "Yillik esdalik fotosurati va bayramona xulosa."]],
    tips: ["Har bir o'quvchini individual mehnati uchun taqdirlang: «Eng murakkab algoritm», «Eng foydali ijtimoiy loyiha», «Eng toza sxemotexnika», «Eng kreativ dizayn», «Eng yaxshi notiq» va h.k.", "O'quvchilarga taqdimot paytida nafaqat nima ishlaganini, balki qanday qiyinchiliklarga duch kelishgani va ularni qanday yengib o'tishganini aytishni tavsiya qiling — bu haqiqiy muhandislik hisobotidir."],
    pt: "Demo Day: «Mening mualliflik ixtirom»",
    steps: [
      "Tinkercad Circuits'da (yoki haqiqiy stolda) loyihangizni to'liq ekranga ochib, ishga tayyorlang.",
      "Taqdimot rejasiga amal qiling:",
      "1) O'zingizni tanishtiring va loyiha nomini ayting.",
      "2) Qurilma qanday muammoni hal qiladi va nima maqsadda yaratildi?",
      "3) Unda qanday datchiklar, aktuatorlar va qaysi murakkab algoritmlar ishlatildi?",
      "4) Jonli namoyish: datchikka ta'sir qilib, tizim qanday ishlashini ko'rsating!",
      "Hakamlar va sinfdoshlar savollariga bosiqlik va ishonch bilan javob bering.",
      "Do'stlaringiz taqdimotini olqishlar bilan qo'llab-quvvatlang.",
      "6-sinf «Arduino · Sxemotexnika» kursini muvaffaqiyatli tamomlaganlik sertifikatini qabul qilib oling!",
      "Ustozlar va jamoa bilan birgalikda esdalik fotosuratiga tushing!"
    ],
    extra: ["Loyihangizning Tinkercad havolasini ota-onangiz va yaqinlaringiz bilan ulashing.", "7-sinfda bizni kutayotgan murakkab «Arduino loyihalar va robotlar» kursiga tayyorlaning!"],
    ask: [
      ["6-sinf davomida o'rgangan eng asosiy 3 ta bilimingiz nima bo'ldi?", "Elektronika asoslari (Om qonuni, tok, kuchlanish), datchiklar va motorlar bilan ishlash, C++ dasturlash va muhandislik fikrlashi."],
      ["Haqiqiy muhandis bilan oddiy odamning farqi nimada?", "Muhandis muammodan nolimaydi, balki unga texnologik va aqlli yechim ixtiro qiladi."],
      ["Kelajakda yana qanday robotlar yasashni xohlaysiz?", "O'quvchilarning orzulari va kelajak rejalari."],
      ["Robototexnika to'garagi sizga qaysi fanlarni yaxshiroq tushunishga yordam berdi?", "Fizika, matematika, informatika va ingliz tili."]
    ],
    quiz: [
      ["Arduino'da kod yozish qaysi dasturlash tili asosida amalga oshiriladi?", "C / C++", "Python", "HTML"],
      ["Raqamli signal nechta holatga ega?", "2 ta (HIGH va LOW)", "1024 ta", "Cheksiz"],
      ["Analog o'qish (`analogRead`) maksimal necha bo'ladi?", "1023", "255", "100"],
      ["6-sinf davomida qaysi virtual simulyatorda sxemalar qurdik?", "Tinkercad Circuits", "Scratch", "Paint"],
      ["Kelgusi 7-sinfda bizni nima kutmoqda?", "Haqiqiy mobil robotlar, Bluetooth, Wi-Fi va yirik loyihalar", "Hech narsa", "Faqat kitob o'qish"]
    ],
    game: {
      type: "quiz",
      title: "Yillik bilimlar sinovi (Arduino ekspert)",
      items: [
        ["PWM pinlari yonida qanday belgi bo'ladi?", "~ (to'lqin)", "# (panjara)", "* (yulduzcha)"],
        ["Inson tanasi issiqligini sezuvchi datchik qaysi?", "PIR sensori", "TMP36", "Potensiometr"],
        ["Masofani tovush to'lqinlari bilan o'lchovchi datchik qaysi?", "HC-SR04 ultratovush sensori", "LDR", "LED"],
        ["Burchakka aniq buriluvchi motor qaysi?", "Servomotor (SG90)", "DC motor", "Pyezo-buzzer"]
      ]
    },
    topic: [
      { e: "🎓", h: "Ulkan marra zabt etildi!", p: "Bir yil oldin siz oddiy batareya va chiroqni ulashdan boshlagan edingiz. Bugun esa siz datchiklar, servomotorlar, LCD displeylar va C++ kodlari bilan ishlaydigan haqiqiy yosh muhandis va ixtirochisiz!", q: "O'zingiz bilan faxrlanasizmi?", a: "Albatta, bu katta mehnat va bilim natijasi!" },
      { e: "🤝", h: "Muhandislik birodarligi", p: "Siz bu yo'lni yolg'iz bosib o'tmadingiz: sinfdoshlaringiz va ustozingiz bilan birga o'rgandingiz, xatolarni birga tuzatdingiz va birga kashf qildingiz. Eng katta yutuq — bu do'stlik va jamoa!", q: "Jamoa bilan ishlash nimani o'rgatdi?", a: "Bir-birini qo'llab-quvvatlash va birga g'alaba qozonishni." },
      { e: "⚡", h: "Oldinda 7-sinf va haqiqiy mobil robotlar!", p: "Keyingi sinfda biz shlagbaum va chiroqlar bilan cheklanmaymiz: g'ildirakli mustaqil harakatlanuvchi robotlar, chiziqdan yuruvchi robotlar, Bluetooth orqali telefondan boshqariladigan mashinalar va sun'iy intellekt elementlari kutmoqda!", q: "Kelajak sari tayyormisiz?", a: "Ha, tayyormiz, olg'a!" }
    ],
    prog: [{ t: "Muhandislik yutug'i", b: ["y:💡 Fikr va qoralama", "b:🔌 Sxemotexnika va datchiklar", "o:💻 C++ dasturlash kodi", "g:🧪 Debugging va xatolarni yengish", "p:🏆 Muvaffaqiyatli namoyish va sertifikat!"] }],
    video: [["wY9kQz1B-lM", "Kids Arduino project exhibition Demo Day"], ["a68_g2IpepU", "Yosh robototexniklar loyihalar ko'rgazmasi"]],
    yq: "kids arduino science fair exhibition project presentation demo day",
    hw: ["O'z sertifikatingizni xonangizga iling va yozgi ta'tilda yangi robot loyihalari uchun g'oyalar kundaligini yuriting!"]
  }
);

