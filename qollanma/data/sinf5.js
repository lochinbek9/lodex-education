// 5-sinf · 3 oylik dastur · 12 hafta × 2 dars = 24 dars (har biri 45 daqiqa)
// Format 2, 3, 4 va 6-sinf bilan bir xil.
// Asosiy yo'nalishlar: Tinkercad 3D muhandislik konstruktsiyalari va Tinkercad Circuits'da blokli Arduino dasturlash.
// prog rang kodi: y — hodisa/boshlash (sariq), o — takrorlash/sikl (to'q sariq), b — port/motor/harakat (ko'k),
//   s — datchik/o'qish (havorang), g — mantiq/shart (yashil), r — kutish/tovush (qizil), v — o'zgaruvchi (qizg'ish), p — ko'rinish/ekran (binafsha)
window.QOLLANMA.grades[5] = {
  title: "5-sinf · 3 oylik dastur",
  desc: "10–11 yoshli o'quvchilar uchun: Tinkercad'da murakkab 3D muhandislik va robot korpuslari loyihalash, Tinkercad Circuits muhitida blokli Arduino mikrokontrolleri, datchiklar, motorlar va birinchi elektronika sxemalari.",
  stats: [["12", "hafta"], ["24", "dars"], ["45", "daqiqa"], ["3", "modul"]],
  modules: [
    {
      id: 1,
      color: "m1",
      title: "1-modul. Tinkercad 3D: Muhandislik va robot korpuslari",
      weeks: "1–4-hafta",
      desc: "Ruler asbobi, Duplicate and Repeat (Ctrl+D), robot shassisi, g'ildiraklar, datchiklar uchun o'rindiqlar va qulfli ulanishlar.",
      progNote: "Rang kodi: sariq — boshlash, to'q sariq — takrorlash, ko'k — pinni yoqish/o'chirish, havorang — datchikni o'qish, yashil — agar shart, qizil — kutish."
    },
    {
      id: 2,
      color: "m2",
      title: "2-modul. Blokli Arduino va birinchi sxemalar",
      weeks: "5–8-hafta",
      desc: "Scratch'dan Arduino'ga o'tish, blokli kodlash, LEDlar, RGB ranglar, pyezo-buzzer, tugma va DC motorlar bilan ishlash."
    },
    {
      id: 3,
      color: "m3",
      title: "3-modul. 3D korpus va Arduino integratsiyasi / Yakuniy loyihalar",
      weeks: "9–12-hafta",
      desc: "Elektronikani 3D korpusga joylash, servomotor, ultratovush masofa datchigi, bloklardan C++ ga o'tish va yakuniy mualliflik loyihalari."
    }
  ],
  lessons: [
    {
      n: 1, mod: 1, t: "3D modellashtirishni takrorlash va Workplane asbobi",
      goal: "O'quvchilar 4-sinfda o'rganilgan asosiy 3D ko'nikmalarni (shakllar, o'lchamlar, guruhlash) esga oladi va yangi yordamchi ish tekisligi (Workplane — W) asbobini obyekt yuzalariga qo'yishni o'rganadi.",
      out: ["Shakllarni aniq o'lchamda kiritish va guruhlashni erkin bajaradi", "«Workplane» (W) asbobini qiya yoki baland yuzalarga o'rnatishni biladi", "Shakllarni ko'tarib o'tirmasdan to'g'ridan-to'g'ri boshqa jism ustiga chizadi"],
      need: ["Kompyuterlar, internet brauzeri, Tinkercad (tinkercad.com) hisobi"],
      plan: [["6", "5-sinf rejasi: bu yil haqiqiy robotning 3D korpusini yasaymiz va ichiga Arduino miyasini o'rnatamiz!"], ["8", "Tezkor takrorlash va yangi asbob: Workplane (W). Nega har safar shaklni yerdan ko'tarish shart emas?"], ["23", "Amaliy ish: Ko'p qavatli bino va tomidagi vertolyot maydonchasi."], ["4", "«Juftini top» o'yini."], ["4", "Xulosa va test."]],
      tips: ["Workplane (W) klaviatura tugmasi orqali istalgan qiya yuzaga (masalan, uy tomining qiyaligiga) yangi vaqtinchalik pol o'rnatish mumkinligini ko'rsating.", "Oddiy polga qaytish uchun bo'sh joyga Workplane'ni bosish yetarli."],
      pt: "Amaliy ish: «Uyingiz tomidagi vertolyot maydonchasi»",
      steps: [
        "Tinkercad'da yangi 3D dizayn oching va «Bino va vertolyot maydoni» deb nomlang.",
        "Asosiy bino: Box oling, o'lchamlari 60 × 60 mm, balandligi 80 mm.",
        "Endi klaviaturadagi «W» (Workplane) tugmasini bosing: sichqoncha uchida to'rtburchak paydo bo'ladi.",
        "Sichqonchani binoning tepa yuzasiga olib boring va bosing — to'r tekislik aynan binoning tomiga ko'chib o'tadi!",
        "Endi yangi silindr oling va maydonga qo'ying: u to'g'ridan-to'g'ri binoning tomida hosil bo'ladi (ko'tarish shart emas!).",
        "Silindr balandligini 2 mm, diametrini 40 × 40 mm qiling.",
        "Maydonchaga «H» harfini (Helipad) yozing: matn asbobidan «H» harfini oling va silindr ustiga qo'ying.",
        "Asl ish tekisligiga qaytish: yana «W» ni bosing va bo'sh joyga (polga) bir marta bosing. Moviy pol joyiga qaytadi!",
        "Barchasini tanlang va «Group» qiling!"
      ],
      extra: ["Bino devorlariga Workplane vositasi yordamida deraza va eshiklarni joylashtiring.", "Tomga kichik antenna yoki projektor chirog'i modelini qo'shing."],
      ask: [
        ["Workplane (W) asbobi nima uchun kerak?", "Istalgan detalning yuzasini yangi polga aylantirib, detallarni to'g'ridan-to'g'ri o'sha yerda chizish uchun."],
        ["Workplane qanday bekor qilinadi?", "Yana W tugmasini bosib, bo'sh joyga chertish orqali."],
        ["Bu asbob qancha vaqtni tejaydi?", "Shakllarni qora konus bilan balandlikka ko'tarib o'lchash vaqtini tejaydi."],
        ["5-sinfda biz qanday katta loyiha qilamiz?", "Haqiqiy harakatlanuvchi robot korpusini yasaymiz va ichiga mikrokontroller o'rnatamiz."]
      ],
      quiz: [
        ["Yordamchi ish tekisligi (Workplane) asbobining qaynoq tugmasi qaysi?", "W harfi", "P harfi", "L harfi"],
        ["Workplane qayerga joylashishi mumkin?", "Istalgan 3D jismning tekis yoki qiya yuzasiga", "Faqat havoda", "Faqat ekranning orqasida"],
        ["Asl boshlang'ich polga qaytish uchun nima qilinadi?", "W tugmasi bosilib, bo'sh joyga bosiladi", "Dastur yopiladi", "Hammasi o'chiriladi"],
        ["Binoning tepasiga detal qo'yishning eng tez usuli qaysi?", "Tomga Workplane qo'yish", "Ko'z bilan chamalab ko'tarish", "Pastdan teshib chiqish"],
        ["Barcha detallarni bitta yaxlit jismga aylantirish qaysi asbob bilan qilinadi?", "Group (Ctrl + G)", "Hole", "Align"]
      ],
      game: {
        type: "memory",
        title: "Juftini top: Tinkercad boshqaruvi",
        pairs: [
          ["W harfi", "Workplane (Ish tekisligi)"],
          ["Ctrl + G", "Group (Guruhlash)"],
          ["L harfi", "Align (Tekislash)"],
          ["D harfi", "Drop (Polga tushirish)"],
          ["Hole", "Teshik ochuvchi bo'shliq"],
          ["Solid", "Qattiq jism"]
        ]
      },
      topic: [
        { e: "🏗️", h: "Qurilish kranlari uslubi", p: "Osmono'par bino qurayotgan kran har safar g'ishtni pastdan olib chiqmaydi, u yangi qavat ustiga chiqib olib o'sha yerdan qurishni davom ettiradi. Workplane (W) vositasi aynan shunday ishlaydi.", q: "Uyni qurish qayerdan boshlanadi?", a: "Poydevordan boshlanadi." },
        { e: "📐", h: "Qiya yuzalarda ishlash", p: "Agar tom 45 gradus qiya bo'lsa, unga deraza qo'yish juda qiyin. Lekin Workplane'ni qiya tomga qo'ysangiz, u darhol qiya tekislikka aylanadi va deraza o'z-o'zidan to'g'ri burchakda o'tiradi.", q: "Bu usul mashina oynasini chizishda yordam beradimi?", a: "Ha, qiya old oynani yasashda juda qulay." },
        { e: "🚀", h: "5-sinf — haqiqiy robotlar davri", p: "Bu yil biz shunchaki o'yinchoqlar emasmiz: mexanika va elektronika tutashgan haqiqiy robototexnika sohasiga qadam qo'ymoqdamiz!", q: "Robot nimalardan iborat?", a: "Korpus (mexanika), datchiklar (sezgi), mikrokontroller (miya) va motorlar (harakat)." }
      ],
      prog: [{ t: "Workplane bilan ishlash", b: ["y:📦 Asosiy binoni yasa (60×60×80 mm)", "b:⌨️ «W» tugmasini bos", "o:📐 Binoning tomiga chert (yangi pol)", "g:🛢️ Vertolyot maydonchasini qo'y", "p:⌨️ «W» bosib bo'sh joyga chert (qaytish)"] }],
      video: [["wY9kQz1B-lM", "Tinkercad Workplane Tool Tutorial"], ["a68_g2IpepU", "Tinkercad ish tekisligi bilan tez ishlash"]],
      yq: "tinkercad workplane tool tutorial for kids beginners",
      hw: ["Daftaringizga ko'p qavatli uy va uning tomidagi quyosh panellari eskizini chizib keling."]
    },
    {
      n: 2, mod: 1, t: "O'lchov asbobi (Ruler tool): Muhandislik aniqligi",
      goal: "O'quvchilar chizg'ich asbobi (Ruler — R) bilan ishlashni, detallar orasidagi aniq masofani o'lchashni va simmetrik teshiklar orasidagi masofani millimetrlarda belgilashni o'rganadi.",
      out: ["Ruler (R) vositasini ish tekisligiga joylashtiradi", "Obyektning o'lchamlari va koordinata boshiga nisbatan masofasini ko'radi", "Ikki detal orasida roppa-rosa 20 mm masofa qoldirishni dasturlaydi"],
      need: ["Kompyuterlar, internet, Tinkercad"],
      plan: [["5", "Nega muhandislar chizg'ichsiz birorta detal yasay olmaydi? 1 mm xatolik oqibati."], ["8", "Yangi mavzu: Ruler (R) asbobi. O'lchov chiziqlari, qutb masofasi (Midpoint / Endpoint)."], ["23", "Amaliy ish: Aniq masofali teshiklarga ega o'rnatish plastinasi."], ["5", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
      tips: ["Ruler qo'yilganda shakl ustiga bossangiz, birdaniga 5-6 ta yashil va qizil o'lchov sonlari chiqadi: shaklning o'z o'lchamlari va chizg'ich burchagidan qancha uzoqlikda turgani.", "Bu dars kelajakda Arduino platasi va motorlarni korpusga vint (bolt) bilan qotirish uchun teshiklar yasashda poydevor hisoblanadi."],
      pt: "Amaliy ish: «Muhandislik o'rnatish plastinasi»",
      steps: [
        "Yangi dizayn oching va «O'rnatish plastinasi» deb nomlang.",
        "O'ng paneldan «Ruler» (Chizg'ich) asbobini oling (yoki «R» ni bosing) va ish tekisligining pastki chap burchagiga qo'ying.",
        "Maydonga to'g'ri to'rtburchak plastina qo'ying: uzunligi 80 mm, eni 40 mm, balandligi 4 mm.",
        "Plastina burchaklarini yumaloqlash uchun «Radius» ni 2.0 qiling.",
        "Endi bolt (vint) teshiklari: silindr Hole oling (diametri 4 mm × 4 mm, balandligi 10 mm).",
        "Ruler yordamida teshikni plastinaning chap chetidan 10 mm va pastki chetidan 10 mm aniq masofaga qo'ying.",
        "Xuddi shu teshikdan yana 3 ta nusxa oling va to'rtta burchakka roppa-rosa 10 mm masofada joylashtiring.",
        "Barchasini tanlang va «Group» qiling: to'rtta burchagida aniq bolt teshiklari bor haqiqiy muhandislik plastinasi tayyor!"
      ],
      extra: ["Plastinaning o'rtasiga kabel o'tishi uchun katta 15 mm li dumaloq teshik oching.", "Chizg'ich sozlamalaridagi «Use midpoint» (markazdan o'lchash) rejimini sinab ko'ring."],
      ask: [
        ["Ruler (Chizg'ich) asbobi nima beradi?", "Detallar o'lchamlarini va ular orasidagi aniq masofani ko'rsatadi."],
        ["Ruler asbobining qaynoq tugmasi qaysi?", "«R» harfi."],
        ["Bolt teshigi nima uchun kerak?", "Kelajakda robot motorlari va mikrokontroller platasini korpusga mustahkam qotirish uchun."],
        ["4 mm li bolt uchun teshik qanday diametrda o'yiladi?", "Roppa-rosa 4 mm yoki bemalol kirishi uchun 4.2 mm."]
      ],
      quiz: [
        ["Tinkercad'da chizg'ich asbobining belgisi qaysi?", "R harfi (Ruler)", "M harfi", "C harfi"],
        ["Ruler qo'yilganda ekranda nimalar ko'rinadi?", "Barcha o'lchamlar va masofalar sonlari", "Faqat ranglar", "Faqat soat"],
        ["Boltlar yordamida detallarni ulashning qanday afzalligi bor?", "Kerak bo'lganda oson burab yechish va qayta qotirish mumkin", "Hech qachon yechilmaydi", "Qimmat turadi"],
        ["Ruler'ni maydondan olib tashlash uchun nima bosiladi?", "Chizg'ich burchagidagi kichik qizil doiracha (X) tugmasi", "Kompyuterni o'chirish", "Ctrl + Z"],
        ["Muhandislik aniqligi qaysi o'lchov birligida bo'ladi?", "Millimetrda (mm)", "Qadamda", "Qarichda"]
      ],
      game: {
        type: "order",
        title: "Tartibga sol: Aniq teshikli detal yasash",
        steps: [
          "«R» tugmasi bilan Ruler (Chizg'ich)ni ish maydoniga qo'yish",
          "Asosiy plastinani terib, o'lchamlarini (80×40×4 mm) kiritish",
          "4 mm li silindr Hole (teshik) yaratish",
          "Ruler ko'rsatkichlari bo'yicha teshikni chetidan 10 mm ga surish",
          "Burchaklardagi barcha teshiklarni joylashtirib, Group qilish"
        ]
      },
      topic: [
        { e: "📏", h: "Nega ko'z bilan chamalash yaramaydi?", p: "3D printerda chiqarilganda 0.5 mm xatolik ham vintning kirmay qolishiga yoki motorning qotmasligiga sabab bo'ladi. Chizg'ich (Ruler) har bir detalning o'z o'rnida turishini kafolatlaydi.", q: "Avtomobil dvigatelida qanday aniqlik kerak?", a: "Millimetrning yuzdan bir qismigacha (mikronlar) aniqlik kerak." },
        { e: "🔩", h: "Vint va gaykalar olami", p: "Robototexnikada M3 (3 mm) va M4 (4 mm) standart boltlar eng ko'p ishlatiladi. Bugun siz yasagan 4 mm li teshik aynan M4 standartiga mos keladi.", q: "Standart nima degani?", a: "Butun dunyo muhandislari kelishib olgan bir xil o'lchamlar qoidasi." },
        { e: "📐", h: "Koordinata boshi (Origin)", p: "Ruler qo'yilgan joy — koordinata boshi hisoblanadi. Maydondagi har bir detal o'sha burchakdan necha millimetr uzoqlikda turgani sonlar bilan ko'rinadi.", q: "Bu Scratch'dagi koordinatalarga o'xshaydimi?", a: "Ha, bu 3D fazodagi koordinatalar tizimidir!" }
      ],
      prog: [{ t: "Ruler bilan aniq masofa kiritish", b: ["y:📏 Ruler (R) asbobini qo'y", "b:📦 Asos plastina: 80×40 mm", "o:🕳️ Silindr Hole: 4×4 mm", "g:📐 X masofa: 10 mm, Y masofa: 10 mm", "p:🔗 Group: tayyor o'rnatish plastinasi!"] }],
      video: [["wY9kQz1B-lM", "Tinkercad Ruler Tool Tutorial"], ["a68_g2IpepU", "Tinkercad'da chizg'ich bilan aniq o'lchash"]],
      yq: "tinkercad ruler tool precision dimensions tutorial",
      hw: ["Uyingizdagi istalgan vint yoki boltni topib, uning qalinligini chizg'ich bilan o'lchang (necha millimetr?)."]
    },
    {
      n: 3, mod: 1, t: "Qadamma-qadam takrorlash (Duplicate and Repeat — Ctrl+D)",
      goal: "O'quvchilar «Duplicate and Repeat» (`Ctrl + D`) sehrli asbobini, bir vaqtning o'zida nusxalash, surish va burish amallarini zanjirli takrorlab, spiral zinalar, panjaralar va tishli g'ildiraklar yasashni o'rganadi.",
      out: ["Oddiy nusxalash (`Ctrl+C`) bilan aqlli takrorlash (`Ctrl+D`) farqini tushuntiradi", "Bitta buyruq bilan bir tekis qadamli panjara (panjara devor) yasaydi", "Aylanma spiral zina yoki quyosh naqshini loyihalaydi"],
      need: ["Kompyuterlar, internet, Tinkercad"],
      plan: [["6", "Savol: aylanma spiral zinada 30 ta zina bor. Ularning har birini qo'lda burib chiqamizmi yoki bitta aqlli tugma bormi?"], ["8", "Yangi mavzu: «Duplicate and Repeat» (`Ctrl + D`). Xotirada harakatni eslab qolish va zanjirli ko'paytirish."], ["23", "Amaliy ish: «Spiral aylanma minora zinasi»."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
      tips: ["Eng muhim qoida: `Ctrl + D` ni bosgach, boshqa joyga chertib tanlovni bekor qilmang! Nusxani kerakli masofaga suring yoki buring, so'ng qayta-qayta `Ctrl + D` ni bosing — kompyuter xuddi shu qadamni o'zi takrorlaydi.", "Bu usul robot shassisi uchun sovutish panjaralari (ventilyatsiya teshiklari) yasashda juda asqotadi."],
      pt: "Amaliy ish: «Sehrli spiral zina»",
      steps: [
        "Yangi dizayn oching va «Spiral zina» deb nomlang.",
        "O'rtaga bitta uzun yo'g'on silindr ustun qo'ying (diametri 10 mm, balandligi 80 mm). Bu zinaning o'qi.",
        "1-zinapoya: Box oling (uzunligi 35 mm, kengligi 10 mm, balandligi 3 mm). Uni ustunning yoniga taqang.",
        "Zinapoyani tanlang va klaviaturada `Ctrl + D` (Duplicate) tugmasini bosing.",
        "Endi nusxani qora konus bilan 3 mm yuqoriga ko'taring va burish yoyi bilan 15 gradusga buring.",
        "Ana endi sehrli lahza: sichqonchaga tegmang, faqat `Ctrl + D` tugmasini ketma-ket 15–20 marta bosing!",
        "Qarang: har bir yangi zina o'z-o'zidan 3 mm ko'tarilib, 15 gradusga burilib, mukammal spiral hosil qiladi!",
        "Barchasini tanlang va «Group» qiling: qasr minorasining ajoyib aylanma zinasi tayyor!"
      ],
      extra: ["Xuddi shu usul bilan robot korpusining yon devoriga 10 ta parallel ventilyatsiya qirqimini (Hole) qiling.", "Doira bo'ylab 12 ta soat raqamlari joylashuvini sinab ko'ring."],
      ask: [
        ["`Ctrl + C` bilan `Ctrl + D` ning nima farqi bor?", "`Ctrl + C` shunchaki nusxa oladi. `Ctrl + D` esa harakatni (surish, ko'tarish, burish) eslab qoladi va keyingi bosishlarda o'sha qadamda davom ettiradi."],
        ["Spiral zina yasashda burchak necha gradusga burildi?", "15 gradusga (yoki xohlagan kichik burchakka)."],
        ["Ventilyatsiya panjarasi nima uchun kerak?", "Robot ichidagi mikrokontroller va motorlar qizib ketmasligi uchun havoni aylantirishga."],
        ["Agar `Ctrl + D` bosgach boshqa joyga chertib yuborsak nima bo'ladi?", "Zanjir uziladi va kompyuter eslab qolgan qadamini yo'qotadi."]
      ],
      quiz: [
        ["Duplicate and Repeat vositasining qaynoq tugmasi qaysi?", "Ctrl + D", "Ctrl + V", "Ctrl + Z"],
        ["`Ctrl + D` nimalarni eslab qola oladi?", "Surish, ko'tarish, burish va kattalashtirishni", "Faqat rangni", "Hech narsani"],
        ["Spiral zina hosil bo'lishi uchun qaysi ikkita harakat birlashtiriladi?", "Yuqoriga ko'tarish va burchakka burish", "Faqat pastga tushirish", "Faqat o'chirish"],
        ["Robot korpusiga sovutish panjarasini qanday asbob bilan o'yiladi?", "Hole kubiklarini Ctrl + D bilan qator terib, Group qilish orqali", "Qalam bilan", "Pichoq bilan"],
        ["`Ctrl + D` qaysi dasturiy tushunchaga juda o'xshaydi?", "Siklga (Repeat / Loop)", "Shartga (If)", "O'zgaruvchiga"]
      ],
      game: {
        type: "order",
        title: "Tartibga sol: Ctrl + D bilan zanjir yaratish",
        steps: [
          "1-boshlang'ich detalni maydonga qo'yish",
          "Detalni tanlab, Ctrl + D tugmasini bir marta bosish",
          "Hosil bo'lgan nusxani kerakli masofaga surish yoki burish",
          "Tanlovni bekor qilmasdan, Ctrl + D ni qayta-qayta bosish",
          "Kompyuterning qadamlarni avtomatik takrorlashini tomosha qilish"
        ]
      },
      topic: [
        { e: "🌀", h: "Tabiatdagi spirallar", p: "Chig'anoqlar, kungaboqar pistalari va hatto bizning DNK zanjirimiz tabiatda xuddi shunday matematik qadamma-qadam takrorlanish (Fibonachchi spirali) orqali qurilgan. `Ctrl + D` bizga tabiat qonunlarini kompyuterda chizish imkonini beradi.", q: "Galaktikalar ham spiral shakldami?", a: "Ha, Somon yo'li galaktikasi ham spiraldir." },
        { e: "⚡", h: "10 daqiqalik ishni 10 soniyada bajarish", p: "30 ta detalni qo'lda o'lchab joylashtirish kamida 15 daqiqa vaqt oladi va baribir xato bo'ladi. Aqlli takrorlash esa bu ishni bir necha soniyada matematik aniqlikda bajaradi.", q: "Dasturchi va muhandis qoidasi nima?", a: "Qaytariladigan bir xil ishni kompyuterga topshirish!" },
        { e: "💨", h: "Sovutish panjaralari siri", p: "Har bir kompyuter, o'yin konsoli yoki robot qizigan havoni tashqariga chiqarishi kerak. `Ctrl + D` yordamida chiroyli panjaralar o'yish robot dizaynini professional qiladi.", q: "Sizning kompyuteringizda ham shunday panjara bormi?", a: "Ha, orqa va pastki qismida bor." }
      ],
      prog: [{ t: "Ctrl + D algoritmi", b: ["y:📦 1-zinani qo'y", "b:⌨️ Ctrl + D (Nusxala)", "o:⬆️ 3 mm ko'tar va 15° bur", "g:🔁 Ctrl + D ni 20 marta bos!", "p:🔗 Group: aylanma spiral zina!"] }],
      video: [["wY9kQz1B-lM", "Tinkercad Duplicate and Repeat Tutorial"], ["a68_g2IpepU", "Tinkercad Ctrl+D bilan spiral yasash"]],
      yq: "tinkercad duplicate and repeat ctrl d tutorial spiral staircase",
      hw: ["Daftaringizga aylanma spiral zina yoki panjara rasmini chizib keling."]
    },
    {
      n: 4, mod: 1, t: "Mobil robot shassisi (Platformasi): Asosiy korpus",
      goal: "O'quvchilar ikki g'ildirakli mustaqil harakatlanuvchi robotning asosiy suyanchiq platformasini (Shassi), batareya bo'limi va motorlar o'rnatiladigan o'yiqlarni loyihalaydi.",
      out: ["Robot shassisining (asos korpus) vazifasini tushuntiradi", "Haqiqiy o'lchamlarga mos (100 × 80 mm) yengil va baquvvat platforma yasaydi", "Motorlar va simlar o'tishi uchun texnologik teshiklarni o'yadi"],
      need: ["Kompyuterlar, internet, Tinkercad"],
      plan: [["6", "Avtomobilning yoki robotning skeleti nima? Nega barcha qismlar shassiga mahkamlanadi?"], ["8", "Shassi arxitekturasi: og'irlik markazi, mustahkamlik, ikki motor uyasi, oldingi tayanch g'ildirak joyi."], ["23", "Amaliy ish: «Ikki g'ildirakli robot shassisi»."], ["4", "«Saralash» o'yini."], ["4", "Xulosa va test."]],
      tips: ["Robot shassisi juda og'ir bo'lmasligi kerak (motorlar qiynaladi), lekin juda yupqa bo'lsa egilib ketadi. Eng optimal qalinlik: 3–4 mm.", "Old tomonda dumaloq sharsimon erkin aylanuvchi g'ildirakcha (Caster wheel) uchun joy qoldirishni eslatib o'ting."],
      pt: "Amaliy ish: «Robot shassisini loyihalash»",
      steps: [
        "Yangi dizayn oching va «Robot Shassisi» deb nomlang.",
        "Asosiy platforma: Box oling, o'lchamlari 110 mm (uzunlik) × 80 mm (kenglik) × 4 mm (balandlik).",
        "Old qismini chiroyli yumaloqlash uchun silindrlardan foydalaning yoki Radiusni suring.",
        "Ikki yon tomonda motorlar joyi: ikkita Box Hole oling (o'lchami 40 mm × 20 mm). Ularni shassisining chap va o'ng orqa tomonlariga joylab, g'ildiraklar uchun o'yiq oching.",
        "Oldingi erkin aylanuvchi sharik g'ildirak (Caster wheel) uchun old tomonga 20 × 20 mm li joy belgilang.",
        "Kabel o'tish teshiklari: motorlardan simlar yuqoriga chiqishi uchun ikkita 6 mm li silindr Hole o'ying.",
        "Shassi yengil bo'lishi va plastikni tejash uchun o'rtaga bir nechta oltiburchak yoki to'rtburchak texnologik teshiklar oching.",
        "Barcha qismlarni tanlang va «Group» qiling: robotimizning mustahkam va chiroyli shassisi tayyor!"
      ],
      extra: ["Shassining orqa tomoniga kichik tirkama (pritsep) ulash uchun ilgak qo'shing.", "Old tomonga to'qnashuvdan himoya qiluvchi bamper yasang."],
      ask: [
        ["Shassi (Chassis) nima?", "Robotning barcha dvigatellari, datchiklari, batareyasi va platalari mustahkam o'rnatiladigan asosiy tayanch korpusi (skeleti)."],
        ["Shassi nega juda qalin (masalan, 20 mm) bo'lmasligi kerak?", "Robot juda og'ir bo'lib ketmasligi va batareya tez o'tirib qolmasligi uchun (3–4 mm yetarli)."],
        ["Caster wheel (erkin sharik g'ildirak) nima uchun kerak?", "Ikki g'ildirakli robot orqaga-oldinga yiqilib ketmasdan, istalgan tomonga erkin burilishi uchun."],
        ["Texnologik teshiklar nima uchun ochiladi?", "Og'irlikni kamaytirish va simlarni tartibli o'tkazish uchun."]
      ],
      quiz: [
        ["Robotning barcha qismlari o'rnatiladigan asos nima deyiladi?", "Shassi (Chassis)", "Antenna", "Rezistor"],
        ["Ikki g'ildirakli robotda muvozanatni nima ushlab turadi?", "Oldingi erkin g'ildirakcha (Caster wheel)", "Faqat simlar", "Faqat sensor"],
        ["Robot shassisining qulay qalinligi qancha?", "3–4 millimetr", "50 millimetr", "0.1 millimetr"],
        ["Simlar batareyaga o'tishi uchun nima qilinadi?", "Shassiga teshiklar (Hole) o'yiladi", "Shassi ikkiga bo'linadi", "Simlar tashqarida osilib turadi"],
        ["Shassi loyihalashda qaysi dasturdan foydalandik?", "Tinkercad 3D", "Word", "Excel"]
      ],
      game: {
        type: "sort",
        title: "Robotning qaysi qismi?",
        desc: "Robot elementlarini o'z vazifasiga qarab ajrating:",
        cats: ["Mexanik korpus (Shassi)", "Elektronika va Miya"],
        items: [
          ["G'ildiraklar o'rnatiladigan plastina", 0],
          ["Arduino Uno platasi", 1],
          ["Oldingi himoya bamperi", 0],
          ["Ultratovush masofa sensori", 1],
          ["Motorlarni ushlab turuvchi qisqichlar", 0],
          ["Batareya va quvvat simlari", 1]
        ]
      },
      topic: [
        { e: "🏎️", h: "Formula-1 va robot shassilari", p: "Poyga avtomobillarida ham, kosmik roverlarda ham eng asosiy narsa — shassi. U yengil, lekin to'qnashuvlarga chidamli bo'lishi shart. Muhandislar shassi shaklini haftalab hisoblab chiqadilar.", q: "Mars roverining shassisi qanday nomlanadi?", a: "«Rocker-bogie» osma tizimli shassi." },
        { e: "⚖️", h: "Og'irlik markazi siri", p: "Agar eng og'ir narsani — batareyani shassisining eng orqasiga qo'ysangiz, robot orqaga ag'darilib ketadi! Batareya har doim pastda va o'rtada joylashishi kerak. Bu robotni barqaror qiladi.", q: "Yiqilmas qo'g'irchoq qanday ishlaydi?", a: "Uning og'irlik markazi eng tubida bo'ladi." },
        { e: "🖨️", h: "3D bosmaga tayyor shassi", p: "Bugun siz chizgan shassi modelini to'g'ridan-to'g'ri 3D printerda chiqarib, ustiga haqiqiy motorlarni qotirish mumkin!", q: "Shassi printerda qancha vaqtda chiqadi?", a: "Taxminan 2–3 soatda." }
      ],
      prog: [{ t: "Robot shassisi dizayni", b: ["y:📦 Asos plastina: 110×80×4 mm", "b:🕳️ 2 ta motor o'yiqlari (40×20 mm)", "o:🔘 Oldi erkin g'ildirak o'rni", "g:🕳️ Simlar uchun 6 mm teshiklar", "p:🔗 Group: tayyor mobil platforma!"] }],
      video: [["wY9kQz1B-lM", "Tinkercad 3D Robot Chassis Design"], ["a68_g2IpepU", "Robot shassisini 3D modellashtirish"]],
      yq: "tinkercad 3d robot chassis design tutorial 3d printing",
      hw: ["Daftaringizga o'z robotingizning shassisini tepadan ko'rinishda chizing va batareya, Arduino qayerda turishini belgilang."]
    },
    {
      n: 5, mod: 1, t: "Robot g'ildiraklari va o'qlari: Sirpanmas protektorlar",
      goal: "O'quvchilar robot g'ildiraklarini loyihalashni, motor o'qiga mos teshik ochishni (D-shaft) hamda robot polga yaxshi tishlashishi uchun g'ildirak sirtiga protektorlar (tishlar/naqshlar) yasashni o'rganadi.",
      out: ["G'ildirak diametri va eni robot tezligiga qanday ta'sir qilishini tushuntiradi", "D-shaklli motor o'qi teshigini (aylanib ketmaydigan) aniq o'yadi", "«Ctrl + D» yordamida g'ildirak aylanasi bo'ylab sirpanmas tishlar (protektor) yasaydi"],
      need: ["Kompyuterlar, internet, Tinkercad"],
      plan: [["5", "Avtomobil shinalarida nega naqshlar (protektor) bor? Agar g'ildirak silliq bo'lsa nima bo'ladi?"], ["8", "G'ildirak fizikasi: diametr, tishlashish kuchi (ishqalanish), motor o'qi uchun D-shaklli teshik."], ["24", "Amaliy ish: «Sirpanmas robot g'ildiragi»."], ["4", "Viktorina va muhokama."], ["4", "Xulosa va test."]],
      tips: ["Dumaloq o'qga kiyilgan g'ildirak kuch tushganda sirpanib, o'qning o'zi aylanib qolishi mumkin. Shuning uchun muhandislikda «D-shaft» (bir tomoni tekis kesilgan o'q) ishlatiladi.", "G'ildirak sirtidagi tishlarni 3-darsda o'rganilgan `Ctrl + D` bilan aylanma burchakda tez yasash mumkin."],
      pt: "Amaliy ish: «Tishli robot g'ildiragini yasash»",
      steps: [
        "Yangi dizayn oching va «Robot g'ildiragi» deb nomlang.",
        "Asosiy g'ildirak: silindr oling, diametri 50 mm × 50 mm, balandligi 12 mm. Sides = 64 (silliq aylana).",
        "G'ildirak diskini yengillashtirish: o'rtasiga 40 × 40 mm li silindr Hole qo'yib, 2 mm chuqurlikda o'ying.",
        "Motor o'qi teshigi (D-shaft): markazga 5 mm li silindr Hole qo'ying va bir chetiga 1 mm li kubik Hole qo'yib, D harfi shakliga keltiring.",
        "Protektor (shina tishlari): g'ildirakning tashqi chetiga kichik bo'rtma qovurg'a (1 × 2 × 12 mm) qo'ying.",
        "`Ctrl + D` ni bosing va detalni markaz bo'yicha 10 gradusga buring.",
        "Keyin `Ctrl + D` ni 35 marta bosing — butun g'ildirak sirtida ajoyib shina naqshlari hosil bo'ladi!",
        "Barchasini tanlang va «Group» qiling: polni mahkam ushlaydigan baquvvat g'ildirak tayyor!"
      ],
      extra: ["G'ildirak ichiga rezina halqa (O-ring) kiyiladigan maxsus chuqur ariqcha (o'yiq) oching.", "Ikkinchi g'ildirakni «Mirror» (M) orqali simmetrik tayyorlang."],
      ask: [
        ["G'ildirakdagi protektor (naqshlar) nima uchun kerak?", "G'ildirak yerda sirpanib ketmasligi va harakat kuchini to'liq polga uzatishi uchun."],
        ["«D-shaft» teshigi nimasi bilan oddiy doiradan farq qiladi?", "Uning bir tomoni tekis qirqilgan bo'lib, motor o'qi ichida g'ildirak sirpanib ketishiga yo'l qo'ymaydi."],
        ["Katta g'ildirak bilan kichik g'ildirakning farqi nimada?", "Katta g'ildirak tezroq yuradi, lekin motordan ko'proq kuch talab qiladi. Kichik g'ildirak sekinroq, lekin kuchliroq tortadi."],
        ["Robotda nechta yetaklovchi g'ildirak bo'ladi?", "Odatda 2 ta motorli yetaklovchi g'ildirak va 1 ta erkin sharik g'ildirak."]
      ],
      quiz: [
        ["G'ildirak sirpanmasligi uchun uning sirtiga nima qilinadi?", "Protektor tishlari qo'yiladi yoki rezina kiyiladi", "Yog' surtiladi", "Silliqlanadi"],
        ["Motor o'qiga mahkam o'tiradigan teshik shakli qaysi?", "D-shaklli teshik (D-shaft)", "Uchburchak", "Yulduzcha"],
        ["Doira bo'ylab tishlarni tez ko'paytirish qaysi tugma bilan bajariladi?", "Ctrl + D (Duplicate and Repeat)", "Ctrl + Z", "Ctrl + X"],
        ["G'ildirakning aylana silliqligi qaysi parametr bilan oshiriladi?", "Sides = 64", "Radius", "Steps"],
        ["Qishki avtomobil shinalarida naqshlar nega chuqur bo'ladi?", "Qor va muzda yaxshi tishlashishi uchun", "Chiroyli ko'rinishi uchun", "Yengil bo'lishi uchun"]
      ],
      game: {
        type: "order",
        title: "Tartibga sol: G'ildirak yasash bosqichlari",
        steps: [
          "Asosiy silindrni olish (50×50×12 mm)",
          "Markazga motor o'qi uchun D-shaklli teshik o'yish",
          "G'ildirak gardishiga birinchi protektor tishini qo'yish",
          "Ctrl + D orqali tishlarni aylana bo'ylab ko'paytirish",
          "Barcha elementlarni Group qilib yaxlitlash"
        ]
      },
      topic: [
        { e: "🚗", h: "G'ildirak — insoniyatning buyuk ixtirosi", p: "Bundan 5000 yil oldin Mesopotamiyada birinchi g'ildirak ixtiro qilingan. O'shandan beri insoniyat og'ir yuklarni sudrashdan qutulib, g'ildiraklar ustida olg'a siljimoqda. Robotlar ham g'ildirak bilan harakatlanadi.", q: "Birinchi g'ildiraklar nimadan yasalgan?", a: "Qattiq yog'och xodalaridan." },
        { e: "⚙️", h: "Ishqalanish kuchi — do'stimiz", p: "Fizikada ishqalanish ba'zan xalaqit beradi, lekin g'ildirak uchun ishqalanish — hayotiy zaruratdir! Agar ishqalanish bo'lmasa, g'ildirak muz ustidagi kabi joyida aylanib turaveradi.", q: "Qanday qilib ishqalanishni oshiramiz?", a: "Rezina qoplama va protektor naqshlari orqali." },
        { e: "🏎️", h: "Poyga mashinalari shinalari (Sliklar)", p: "Quruq poyga yo'lida «slik» deb ataladigan tishsiz silliq shinalar ishlatiladi, chunki ular asfaltdagi mayinlikka yopishadi. Lekin chang va yomg'irda faqat chuqur protektorli shinalar yordam beradi.", q: "Bizning robotimiz qayerda yuradi?", a: "Sinf polida va mashg'ulot maydonida." }
      ],
      prog: [{ t: "G'ildirak yaratish zanjiri", b: ["y:🛢️ Silindr: 50×50×12 mm", "b:🕳️ D-shaft o'q teshigi: 5 mm", "o:🦷 1-protektor tishini qo'y", "g:🔁 Ctrl + D bilan 36 ta tish ter", "p:🔗 Group: sirpanmas g'ildirak!"] }],
      video: [["wY9kQz1B-lM", "Tinkercad 3D Wheel Design Tutorial"], ["a68_g2IpepU", "Tinkercad robot g'ildiragini yasash"]],
      yq: "tinkercad wheel tire tread tutorial 3d print robot",
      hw: ["Velosiped yoki mashina g'ildiragining protektor naqshini daftaringizga chizib keling."]
    },
    {
      n: 6, mod: 1, t: "Sensorlar uchun o'rindiq: Ultratovush datchigi korpusi",
      goal: "O'quvchilar HC-SR04 ultratovush datchigining aniq o'lchamlarini (ikkita 16 mm li silindr «ko'zlari») o'rganadi va uni robot shassisiga mahkamlash uchun qulay ushlagich (braket) loyihalaydi.",
      out: ["HC-SR04 datchigining texnik chizmasi va o'lchamlarini tushunadi", "Ikkita 16.5 mm li teshikni aniq masofada (markazlar orasi 26 mm) o'yadi", "Robot shassisining oldiga o'rnatiladigan datchik ushlagichini (braket) yasaydi"],
      need: ["Kompyuterlar, internet, Tinkercad"],
      plan: [["6", "Datchik havoda osilib turolmaydi. Uni robotga qanday qilib qotiramiz? Datchik ushlagichi (braket)."], ["8", "HC-SR04 datchigi o'lchamlari: ko'zlar diametri 16 mm, markazlar orasi 26 mm, plata qalinligi."], ["23", "Amaliy ish: «Ultratovush datchigi braketi»."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
      tips: ["3D printerda chiqarilganda plastik biroz qisqarishi mumkin. Shuning uchun 16.0 mm li silindr o'rniga 16.3–16.5 mm li Hole qilish kerak — shunda datchik ko'zlari qisilib sinmasdan erkin va mahkam kiradi.", "Braketning pastki qismiga shassiga qotirish uchun 2 ta kichik 3 mm li vint teshigi qo'shishni o'rgating."],
      pt: "Amaliy ish: «Robotning ko'zlari uchun ushlagich»",
      steps: [
        "Yangi dizayn oching va «Datchik ushlagichi» deb nomlang.",
        "Asos devor: Box oling, o'lchami 50 mm (uzunlik) × 4 mm (qalinlik) × 25 mm (balandlik).",
        "Ruler (R) asbobini ish maydoniga qo'ying.",
        "Datchik «ko'zlari»: silindr Hole oling, diametri 16.5 mm × 16.5 mm, balandligi 10 mm. Uni 90 gradusga yotqizing.",
        "Teshikni devorning chap tomoniga joylang.",
        "Ikkinchi teshik: `Ctrl + D` ni bosing va o'ngga roppa-rosa 26 mm masofaga suring (ikkala ko'zning orasi 26 mm!).",
        "Pastki tayanch: Box oling (50 × 15 × 3 mm), devorning tagiga L-shaklida yopishtiring (shassiga burash uchun).",
        "Pastki tayanchga 2 ta 3 mm li vint teshigi o'ying.",
        "Barchasini tanlang va «Group» qiling: datchik qisilib mustahkam turadigan haqiqiy robot ushlagichi tayyor!"
      ],
      extra: ["Datchik orqasidagi kvars rezonatori va mikrosxemalar tegib qolmasligi uchun kichik chuqurcha oching.", "Ushlagichga kulgili qoshlar yoki robot quloqlari dizaynini qo'shing."],
      ask: [
        ["HC-SR04 datchigining ikkita doirasining diametri qancha?", "Roppa-rosa 16 millimetr."],
        ["Nega teshikni 16.0 mm emas, 16.5 mm qilib o'ydik?", "3D printerda bosilganda plastik qisqarishi hisobiga datchik qotmasdan bemalol sig'ishi uchun."],
        ["Ikkala teshik markazlari orasidagi masofa qancha?", "26 millimetr."],
        ["Braket (ushlagich) robotda nima vazifani bajaradi?", "Datchikni silkinmasdan, to'g'ri oldinga qarab turishini ta'minlaydi."]
      ],
      quiz: [
        ["HC-SR04 datchigining ko'zlari diametri qancha?", "16 mm", "50 mm", "5 mm"],
        ["Ikkala teshik orasidagi masofa qancha?", "26 mm", "10 mm", "100 mm"],
        ["3D printerda detallar qisilib qolmasligi uchun nima qilinadi?", "Teshik 0.3–0.5 mm kengroq o'yiladi (tolerantlik)", "Teshik qilinmaydi", "Yelim surtiladi"],
        ["L-shaklidagi taglik nima uchun kerak?", "Shassiga vint bilan mustahkam qotirish uchun", "Og'ir bo'lishi uchun", "Chiroyli turishi uchun"],
        ["Ushbu detal qaysi datchik uchun yasaldi?", "Ultratovush masofa datchigi uchun", "Fotorezistor uchun", "LED uchun"]
      ],
      game: {
        type: "order",
        title: "Tartibga sol: Datchik ushlagichini yasash",
        steps: [
          "Asos devorni chizish (50×4×25 mm)",
          "16.5 mm li birinchi gorizontal teshikni joylashtirish",
          "Ctrl + D orqali ikkinchi teshikni 26 mm masofaga surish",
          "Pastki qismiga L-shaklidagi o'rnatish oyog'ini qo'shish",
          "Group qilib, yaxlit braket hosil qilish"
        ]
      },
      topic: [
        { e: "👀", h: "Robotning ko'zlari", p: "HC-SR04 datchigi o'rnatilgan robot xuddi ikki ko'zli yoqimtoy robotdek (WALL-E kabi) ko'rinadi. Bu ko'zlar aslida ko'rmaydi, balki tovush to'lqinlarini tinglaydi.", q: "WALL-E multfilmidagi robot qanday ko'rar edi?", a: "Ikkita katta durbin ko'zlari bilan." },
        { e: "📐", h: "Tolerantlik (Qo'shimcha oraliq)", p: "Muhandislikda «Tolerance» degan tushuncha bor. Agar teshik va mil bir xil 16 mm bo'lsa, ular bir-biriga kirmaydi! Doimo 0.2–0.4 mm bo'shliq qoldirilishi shart.", q: "Eshik va rom orasida bo'shliq bo'lmasa nima bo'ladi?", a: "Eshik qisilib ochilmay qoladi." },
        { e: "🛡️", h: "Datchikni zarbadan himoyalash", p: "Braket datchikni faqat ushlab turmaydi, balki to'qnashuv paytida nozik elektron plataning sinib ketishidan ham himoya qiladi.", q: "Ushlagich mustahkam bo'lishi uchun nima kerak?", a: "Yetarli qalinlik (kamida 3–4 mm)." }
      ],
      prog: [{ t: "Datchik braketi o'lchamlari", b: ["y:📦 Devor: 50×4×25 mm", "o:🕳️ 1-ko'z teshigi: 16.5 mm", "g:📐 2-ko'z teshigi: 26 mm surilgan", "b:📦 L-taglik: 50×15×3 mm", "p:🔗 Group: datchik ushlagichi tayyor!"] }],
      video: [["wY9kQz1B-lM", "Tinkercad Ultrasonic Sensor Bracket Tutorial"], ["a68_g2IpepU", "HC-SR04 datchigi uchun ushlagich yasash"]],
      yq: "tinkercad ultrasonic sensor holder bracket tutorial 3d print",
      hw: ["Daftaringizga HC-SR04 datchigining old tomondan ko'rinishi rasmini o'lchamlari bilan chizing."]
    },
    {
      n: 7, mod: 1, t: "Qulfli ulanishlar (Snap-fit): Yelemsiz va boltsiz yig'ish",
      goal: "O'quvchilar plastikning egiluvchanlik xususiyatidan foydalanib, yelimsiz va vintsiz bir-biriga qisilib qulflanadigan (Snap-fit) muhandislik ulanishlarini loyihalashni o'rganadi.",
      out: ["Snap-fit (qisqichli qulf) ulanish prinsipini tushuntiradi", "Egiluvchan ilmoq (qisqich) va unga mos qulf teshigini yasaydi", "Batareya qopqog'i yoki robot qismlarini bir-biriga shiqillatib qotiradi"],
      need: ["Kompyuterlar, internet, Tinkercad"],
      plan: [["6", "Batareya pulti qopqog'i qanday yopiladi? Unda bolt yo'q, yelim yo'q — u qanday qulflanadi?"], ["8", "Yangi mavzu: Snap-fit ulanishlari. Qisqich ilmoq, elastiklik va ushlab qoluvchi tishcha."], ["23", "Amaliy ish: «Qulfli batareya qopqog'i»."], ["4", "«Juftini top» o'yini."], ["4", "Xulosa va test."]],
      tips: ["Snap-fit ulanishida ilmoqning uchi qiya uchburchak shaklida bo'ladi — kurganda oson egilib kiradi, lekin qaytib chiqayotganda to'g'ri burchak tirab qoladi.", "3D bosmada qisqich sinib ketmasligi uchun uning qalinligi kamida 1.5–2 mm bo'lishi kerak."],
      pt: "Amaliy ish: «Shiqillab yopiluvchi qopqoq»",
      steps: [
        "Yangi dizayn oching va «Qulfli ulanish» deb nomlang.",
        "Asosiy quti: Box oling, 60 × 40 × 20 mm. Ichini bo'sh qilib kosa holiga keltiring (Hole bilan o'ying).",
        "Qutining ichki yon devoriga kichik gorizontal chuqurcha (ariqcha) o'ying: 10 mm uzunlik, 1 mm chuqurlik.",
        "Endi qopqoq yasaymiz: qutining ustiga mos plastina oling (60 × 40 × 3 mm).",
        "Qopqoqning chetiga pastga qarab tushuvchi kichik elastik oyoqcha (10 × 1.5 × 8 mm) qo'shing.",
        "Oyoqchaning eng uchiga tashqi tomonga qaragan kichik uchburchak tishcha (Wedge) yopishtiring.",
        "Qopqoq va oyoqchani «Group» qiling.",
        "Prinsipni ko'ring: qopqoq bosilganda oyoqcha ichkariga egiladi va tishcha qutining chuqurchasiga tushganda «shiq» etib qulflanadi!"
      ],
      extra: ["Qopqoqni oson ochish uchun barmoq tirnaydigan kichik o'yiqcha qo'shing.", "Ikki tomonlama simmetrik qisqich yasang."],
      ask: [
        ["Snap-fit ulanishi nima?", "Plastikning egiluvchanligi hisobiga detallarning bir-biriga shiqillab qulflanishi."],
        ["Snap-fit ulanishining eng katta afzalligi nimada?", "Hech qanday bolt, gayka yoki yelim kerak emas, qo'l bilan bir zumda yig'iladi."],
        ["Qisqich uchi nega qiya uchburchak bo'ladi?", "Kirayotganda silliq sirpanib kirishi uchun."],
        ["Hayotda yana qayerda Snap-fit ko'rgansiz?", "Rukzak qisqichlarida (fasteks), telefon g'iloflarida, shisha qopqoqlarida."]
      ],
      quiz: [
        ["Yelemsiz va boltsiz ulanish muhandislikda nima deyiladi?", "Snap-fit (qisqichli qulf)", "Payka", "Kavsharlash"],
        ["Qisqich egilishi uchun qaysi material xususiyati kerak?", "Elastiklik (egiluvchanlik)", "Mo'rtlik", "Og'irlik"],
        ["Pult batareyasi qopqog'i qanday ulanishga misol?", "Snap-fit qulfli ulanish", "Boltli ulanish", "Magnitli"],
        ["Qisqich sinib ketmasligi uchun uning qalinligi qancha bo'lishi kerak?", "Kamida 1.5–2 mm", "0.1 mm", "50 mm"],
        ["Qopqoqni ochish qulay bo'lishi uchun nima qilinadi?", "Barmoq uchun tirnoq o'yiqchasi qilinadi", "Yelimlanadi", "Bo'yaladi"]
      ],
      game: {
        type: "memory",
        title: "Juftini top: Ulanish turlari",
        pairs: [
          ["Snap-fit", "Shiqillab qulflanuvchi ulanish"],
          ["Bolt va Gayka", "Aylanma mustahkam ulanish"],
          ["Yelimli ulanish", "Buzilmas doimiy ulanish"],
          ["Elastik oyoqcha", "Kurganda egilib, joyiga tushadi"],
          ["Batareya qopqog'i", "Snap-fit amaliy namunasi"],
          ["Uchburchak tishcha", "Qulflab ushlab turuvchi qism"]
        ]
      },
      topic: [
        { e: "🎒", h: "Rukzak fasteksi siri", p: "Maktab rukzagidagi qora plastik qisqichni (fasteksni) har kuni ochib-yopasiz. U aynan Snap-fit texnologiyasidir: ikki yonidagi qisqichlar siqiladi va ochiladi.", q: "Lego detallari ham Snap-fitmi?", a: "Ha! Lego g'ishtlari bir-biriga ishqalanish va qisilish orqali mahkamlanadi." },
        { e: "🏭", h: "Zavodlarda tez yig'ish", p: "Zamonaviy televizor, printer va avtomobil asboblari paneli vintlarsiz, Snap-fit qisqichlar bilan yig'iladi. Bu zavod ishchilariga buyumni bir necha soniyada yig'ish imkonini beradi.", q: "Bu mahsulot narxini arzonlashtiradimi?", a: "Ha, chunki ishlab chiqarish tezlashadi." },
        { e: "🌱", h: "Qayta ishlashga qulay", p: "Yelimsiz yasalgan buyumlarni kelajakda qismlarga ajratish va plastigini eritib qayta ishlash juda oson. Bu tabiatni asrashga katta hissa qo'shadi.", q: "Yelimli narsa nega yomon?", a: "Chunki uni buzmasdan ajratib bo'lmaydi." }
      ],
      prog: [{ t: "Snap-fit loyihalash qadamlari", b: ["y:📦 Asos korpusni yasa", "o:🕳️ Ichki qulf chuqurchasini o'y", "b:📦 Qopqoqqa elastik oyoqcha qo'sh", "g:📐 Uchiga ushlab qoluvchi tishcha qo'y", "p:🔗 Group: shiqillab yopiluvchi qopqoq!"] }],
      video: [["wY9kQz1B-lM", "Tinkercad Snap Fit Joints Tutorial"], ["a68_g2IpepU", "3D bosmada qisqichli ulanishlar"]],
      yq: "tinkercad snap fit joint 3d printing tutorial cantilever",
      hw: ["Uyingizdagi Snap-fit (shiqillab yopiluvchi) 3 ta buyumni toping va qanday ochilishini daftarga yozing."]
    },
    {
      n: 8, mod: 1, t: "1-modul loyihasi: «To'liq 3D robot platformasi»",
      goal: "O'quvchilar 1-modulda o'rganilgan barcha mavzularni (shassi, g'ildiraklar, datchik ushlagichi, o'lchov asbobi va qulfli ulanishlar) birlashtirib, to'laqonli mobil robot korpusini yig'adi.",
      out: ["Shassi, ikki g'ildirak va datchik braketini bitta 3D sahnada yig'adi", "Barcha detallar bir-biriga mos tushishini o'lchovlar bilan tekshiradi", "Modelni 3D printerda chiqarishga (.STL) to'liq tayyorlaydi"],
      need: ["Kompyuterlar, internet, Tinkercad"],
      plan: [["5", "1-modul cho'qqisi: bugun barcha detallarimizni bitta haqiqiy robot modeliga yig'amiz!"], ["8", "Yig'uv chizmasi: shassi $\\rightarrow$ motorlar joyi $\\rightarrow$ g'ildiraklar $\\rightarrow$ oldingi datchik ushlagichi $\\rightarrow$ batareya qopqog'i."], ["25", "Amaliy ish: Barcha qismlarni birlashtirish va sozlash."], ["4", "Virtual robotlar ko'rgazmasi."], ["3", "1-modul xulosasi."]],
      tips: ["Barcha detallarni bitta rangga aylantirmaslik uchun har bir detalni alohida guruhlab, rangini saqlab qoling («Multicolor»).", "O'quvchilarga robotning umumiy og'irlik markazini va g'ildiraklar erkin aylanadigan tirqishlar qolganini tekshirtiring."],
      pt: "Yakuniy loyiha: «Mening birinchi 3D roboti»",
      steps: [
        "Tinkercad'da yangi yig'uv loyihasi oching va «Mening 3D Roboti» deb nomlang.",
        "Avvalgi darslarda yaratgan shassi platformangizni olib kiring (nusxalab qo'ying).",
        "Ikki yon tomondagi o'yiqlarga 5-darsda yasagan tishli g'ildiraklaringizni joylashtiring.",
        "Shassining old qismiga 6-darsda yasagan ultratovush datchigi ushlagichini (braketini) o'rnating.",
        "Oldinga kichik erkin aylanuvchi sharik g'ildirakcha (Caster) modelini qo'ying.",
        "Shassi ustiga Arduino Uno platasi (75 × 53 mm) va batareya qutisi sig'adigan to'rtburchak joy ajrating.",
        "Orqa tomonga 7-darsdagi Snap-fit qisqichli batareya qopqog'ini o'rnating.",
        "Kamerani har tomonga aylantirib tekshiring: robot ko'rkam, baquvvat va mutanosib chiqdimi?",
        "Tabriklaymiz, sizning shaxsiy robotingiz korpusi 100% tayyor!"
      ],
      extra: ["Robot korpusiga o'z ismingizni yoki robot model nomini (masalan: «ROBO-01») bo'rtma qilib yozing.", "Old tomonga LED faralar uchun ikkita 5 mm li teshik qo'shing."],
      ask: [
        ["Bu loyihada Tinkercad'ning qaysi asosiy asboblari birlashdi?", "Ruler (o'lchov), Duplicate (Ctrl+D), Workplane (W), Align, Hole va Group."],
        ["Nega avval korpus yasaladi, keyin elektronika qo'yiladi?", "Chunki barcha simlar, datchiklar va motorlar korpusning aniq o'lchamlariga mos tushishi kerak."],
        ["Bu robot haqiqatda yura oladimi?", "Ha, 3D printerda chiqarib, ichiga motor va Arduino qo'yilsa, u to'laqonli yura oladi!"],
        ["1-modulda sizga eng yoqqan mavzu qaysi bo'ldi?", "O'quvchining shaxsiy fikri va xulosasi."]
      ],
      quiz: [
        ["Mobil robotda g'ildiraklar qayerga mahkamlanadi?", "Shassining yon tomonlaridagi motor o'qlariga", "Datchik ustiga", "Batareya ichiga"],
        ["Ultratovush datchigi robotning qaysi qismida turadi?", "Old qismida (oldinga qarab)", "Orqada yashiringan", "G'ildirak ostida"],
        ["Robot korpusini 3D printerga qaysi formatda eksport qilamiz?", ".STL formatida", ".MP3", ".TXT"],
        ["Robot ag'darilib ketmasligi uchun nima muhim?", "Og'irlik markazi pastda va o'rtada bo'lishi", "Juda baland bo'lishi", "Faqat bitta g'ildirak bo'lishi"],
        ["1-modulda biz nimani o'rgandik?", "Tinkercad'da professional 3D muhandislik va robot korpusini loyihalashni", "Faqat rasm ko'rishni", "Faqat o'yin o'ynashni"]
      ],
      game: {
        type: "order",
        title: "Tartibga sol: Robotni to'liq yig'ish",
        steps: [
          "Asosiy shassi platformasini o'rnatish",
          "Ikki chetga motorlar va tishli g'ildiraklarni joylash",
          "Old tomonga ultratovush datchigi ushlagichini o'rnatish",
          "Arduino va batareya uchun bo'limlarni sozlash",
          "Modelni ko'zdan kechirib, .STL formatida eksport qilish"
        ]
      },
      topic: [
        { e: "🤖", h: "Haqiqiy robototexnikka aylandingiz!", p: "Atigi 8 ta dars ichida siz oddiy kubiklardan boshlab, haqiqiy ko'p qismli mobil robot shassisini noldan loyihaladingiz. Bu haqiqiy konstruktor-muhandis darajasidir!", q: "Keyingi modulda nima qilamiz?", a: "Endi bu robotning ichiga Arduino miyasini o'rnatib, uni bloklar bilan dasturlaymiz!" },
        { e: "🚀", h: "NASA roverlari kabi", p: "Marsda yurgan «Curiosity» va «Perseverance» roverlari ham xuddi shunday: avval kompyuterda 3D loyihasi chizilgan, keyin materialdan yasalgan va eng oxirida dasturi yuklangan.", q: "Sizning robotingiz qayerda yura oladi?", a: "Xonada, labirintda va to'siqlar orasida." },
        { e: "💡", h: "Modul 2 ga tayyorgarlik", p: "Endi biz Tinkercad Circuits laboratoriyasiga o'tamiz va Scratch'dagi kabi qulay bloklar yordamida chiroqlar, motorlar va tovushlarni jonlantiramiz!", q: "Dasturlashga tayyormisiz?", a: "Ha, tayyormiz!" }
      ],
      prog: [{ t: "To'liq robot yig'ilishi", b: ["y:🚗 Shassi platformasi (110×80 mm)", "b:⚙️ 2 ta tishli g'ildirak", "o:👀 HC-SR04 datchik braketi", "g:🔋 Batareya va Arduino o'rni", "p:🏆 3D Robot korpusi 100% tayyor!"] }],
      video: [["wY9kQz1B-lM", "Tinkercad Full 3D Robot Assembly"], ["a68_g2IpepU", "Tinkercad to'liq robot korpusini yig'ish"]],
      yq: "tinkercad full 3d robot assembly 3d print tutorial for kids",
      hw: ["Robotingiz uchun chiroyli nom va uning nima vazifa bajarishi haqida qisqa hikoya yozib keling."]
    }
  ]
};

