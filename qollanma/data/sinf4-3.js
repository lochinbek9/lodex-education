// 4-sinf · 17–24-darslar: 3-modul. Dizayn va kod integratsiyasi / Yakuniy loyihalar
// Format sinf4.js bilan bir xil.
window.QOLLANMA.grades[4].lessons.push(
  {
    n: 17, mod: 3, t: "3D modellardan 2D spraytlar yaratish",
    goal: "O'quvchilar Tinkercad'da yaratilgan 3D modelni turli burchaklardan rasm sifatida saqlashni va uni Scratch dasturiga o'ziga xos shaxsiy sprayt qahramon sifatida yuklashni o'rganadi.",
    out: ["Tinkercad modelini kerakli burchakda skrinshot yoki rasm (PNG) qiladi", "Scratch kostyumlar muharririga yangi sprayt yuklaydi («Upload Sprite»)", "O'z 3D qahramonini Scratch sahnasida harakatlantiradi"],
    need: ["Kompyuterlar, internet, Tinkercad va Scratch 3.0"],
    plan: [["5", "G'oya: o'yinlarimizdagi mashina yoki qahramonni Tinkercad'da yasab, Scratch'da o'ynatsak nima bo'ladi?"], ["8", "3D modeldan 2D sprayt olish: modelni turli burchaklardan (oldingi, yon, orqa) tasvirga tushirish va fonsiz yuklash."], ["23", "Amaliy ish: O'z 3D qahramonimiz Scratch'da."], ["5", "«Saralash» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Tinkercad'da modelni rasmga olishdan oldin ViewCube orqali «Front» yoki «Side» tugmasini bosing — shunda burchak buzilmaydi.", "Scratch kostyumlar bo'limida rasmni markazlashtirish (kichik nishon belgisiga to'g'irlash) juda muhim, aks holda qahramon burilganda markazdan qochib ketadi."],
    pt: "Amaliy ish: «Tinkercad'dan Scratch sahnasiga»",
    steps: [
      "Tinkercad'da avvalgi darslarda yasagan robot kallasi yoki brelok modelingizni oching.",
      "Kamerani eng chiroyli burchakka qo'ying (yoki ViewCube'dagi «Front» tugmasini bosing).",
      "Modelni rasmga oling (Skrinshot vositasi orqali yoki «Send to» → rasm yuklab olish).",
      "Scratch dasturini oching. Spraytlar bo'limidagi mushukcha belgisiga sichqonchani olib boring va «Upload Sprite» (Spraytni yuklash) tugmasini bosing.",
      "Tinkercad rasmingizni tanlang. Qahramon Scratch sahnasida paydo bo'ladi!",
      "«Costumes» (Kostyumlar) bo'limiga kiring, ortiqcha oq fon bo'lsa o'chirg'ich bilan tozalang va markazga qo'ying.",
      "Skript yozing: qahramon klaviatura strelkalari bilan sahnada yursin va harakatlanganda biroz tebransin.",
      "Qarang: o'z qo'lingiz bilan 3D yasagan modelingiz endi kompyuter o'yinida tirildi!"
    ],
    extra: ["Modelni Tinkercad'da 4 xil burchakdan rasmga oling va Scratch'da 4 ta kostyum qilib qo'ying (oldinga, orqaga, o'ngga, chapga qarash).", "Qahramonga yurish tovushi qo'shing."],
    ask: [
      ["Nega 3D modelni to'g'ridan-to'g'ri Scratch'ga solib bo'lmaydi?", "Scratch 2D (tekis) dastur, shuning uchun unga modelning rasmi (proyeksiyasi) kerak."],
      ["Scratch'da yangi rasm qanday yuklanadi?", "«Upload Sprite» (Sprayt yuklash) tugmasi orqali."],
      ["Kostyumni markazlashtirish nega kerak?", "Qahramon burilganda o'z o'qi atrofida to'g'ri aylanishi uchun."],
      ["O'z spraytini yasashning qanday afzalligi bor?", "O'yin mutlaqo noyob bo'ladi va boshqa hech kimning o'yiniga o'xshamaydi."]
    ],
    quiz: [
      ["Scratch'ga kompyuterdan rasm yuklash buyrug'i qaysi?", "Upload Sprite", "Choose a Sprite", "Paint"],
      ["Rasmni orqa fonini tozalash qaysi bo'limda bajariladi?", "Costumes (Kostyumlar)", "Sounds (Tovushlar)", "Code (Kod)"],
      ["Tinkercad modelini tekis ko'rish uchun ViewCube'da nima bosiladi?", "Front yoki Top", "Home", "Sichqoncha g'ildiragi"],
      ["Scratch'dagi qahramon markazi qanday belgilanadi?", "Doiracha nishon belgisi bilan", "Qizil chiziq bilan", "Matn bilan"],
      ["Boshqa dasturdan rasm olib kelish nima deyiladi?", "Import (yuklash)", "Export", "Delete"]
    ],
    game: {
      type: "sort",
      title: "2D yoki 3D?",
      desc: "Qaysi xususiyatlar 2D ga, qaysilari 3D ga tegishli?",
      cats: ["2D (Scratch sahnasi)", "3D (Tinkercad maydoni)"],
      items: [
        ["X va Y o'qlari (kenglik va balandlik)", 0],
        ["X, Y va Z o'qlari (uzunlik, kenglik, chuqurlik)", 1],
        ["Kostyumlar va spraytlar", 0],
        ["Orbit, Pan va Zoom orqali har tomondan aylantirish", 1],
        ["Ko'rish burchagi ViewCube kubigi", 1],
        ["Piksel va tekis chizmalar", 0]
      ]
    },
    topic: [
      { e: "🎨", h: "Geym-dizayner kasbi", p: "Zamonaviy o'yin studiyalarida 3D modelerlar qahramonlarni 3D dasturlarda yasaydilar, dasturchilar esa ularni o'yin dvigatelida kod bilan harakatlantiradilar. Bugun siz har ikkala vazifani o'zingiz bajardingiz!", q: "O'yin yaratishda rasm muhimmi yoki kod?", a: "Ikkalasi ham teng darajada muhim: go'zal rasm va qiziqarli kod." },
      { e: "📸", h: "Render va skrinshot", p: "3D modelni 2D rasmga aylantirish jarayoni «Render» deyiladi. Siz har qanday burchakni tanlab, qahramoningizni eng salobatli qilib tasvirga tushirishingiz mumkin.", q: "Avtomobil poygasi uchun mashinaning qaysi burchagi kerak?", a: "Tepadan (Top) yoki orqa tomondan ko'rinishi." },
      { e: "🌟", h: "Cheksiz ijod", p: "Endi siz internetdan tayyor rasm qidirishingiz shart emas. Xohlagan qahramoningizni Tinkercad'da loyihalang va uni o'zingizning Scratch o'yiningizga olib kiring!", q: "Qanday qahramon yasashni orzu qilasiz?", a: "O'zga sayyoralik robot, poyga mashinasi yoki qush." }
    ],
    prog: [{ t: "3D modelni Scratch'ga olib kirish", b: ["y:📐 Tinkercad'da modelni tayyorla", "b:📸 Rasm (skrinshot) qilib saqla", "o:📥 Scratch'ga «Upload Sprite» qil", "g:🎯 Kostyumni markazga to'g'irla", "p:🎮 Silliq harakat kodini yoz!"] }],
    video: [["wY9kQz1B-lM", "How to make 3D Sprites for Scratch"], ["AKUtkYZTUfo", "Tinkercad modelini Scratch'ga sprayt qilish"]],
    yq: "tinkercad model to scratch sprite tutorial",
    hw: ["Daftaringizga o'z 3D qahramoningizni 3 xil burchakdan (oldi, yoni, tepasi) tasvirlab chizing."]
  },
  {
    n: 18, mod: 3, t: "Scratch'da psevdo-3D effektlar: Chuqurlik illyuziyasi",
    goal: "O'quvchilar tekis ekranda chuqurlik (perspektiva) illyuziyasini yaratishni: obyekt uzoqlashganda kichrayishi va yaqinlashganda kattalashishi orqali psevdo-3D poyga yo'lini dasturlashni o'rganadi.",
    out: ["Perspektiva (uzoqlashish va yaqinlashish) qoidasini tushuntiradi", "`set size to ... %` bloki yordamida chuqurlik effektini dasturlaydi", "Qahramonga qarab uchib kelayotgan asteroidlar yoki poyga to'siqlarini yaratadi"],
    need: ["Kompyuterlar, Scratch 3.0"],
    plan: [["6", "Savol: nima uchun uzoqdagi ulkan samolyot osmonda kichkina chumolidek ko'rinadi? Perspektiva nima?"], ["8", "Yangi mavzu: psevdo-3D (soxta 3D). Y koordinatasi va hajm o'rtasidagi bog'liqlik."], ["23", "Amaliy ish: «3D Fazoviy poyga» (oldinga harakat hissi)."], ["4", "«Juftini top» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Formulani doskada ko'rsating: masalan, uzoqda (Y: 100 da) obyekt hajmi 10%, pastga yaqinlashganda (Y: -100 da) hajmi 150% ga yetadi.", "Ushbu usul klassik arkada poyga o'yinlarida (masalan, retro poygalarda) 3D dvigatellar chiqishidan oldin ishlatilgan tarixiy usuldir."],
    pt: "Amaliy ish: «3D Kosmik tunnel»",
    steps: [
      "Sahnaga qora rangli fon qo'ying va markazga bitta kichik oq doiracha (tunnel nuri) chizing.",
      "Asteroid yoki to'siq spraytini oling. U klonlar yordamida ishlaydi.",
      "Klon paydo bo'lganda: `go to x: 0 y: 0` (markaziy uzoq nuqta) → `set size to 5 %` (juda kichkina, uzoqda!).",
      "Klon tasodifiy yo'nalishni tanlasin: `point in direction (pick random 0 to 360)`.",
      "`repeat 40` sikli ichida:",
      "`move 6 steps` (oldinga siljiydi),",
      "`change size by 4` (kattalashadi — bizga yaqinlashmoqda!),",
      "Sikl tugagach: `delete this clone`.",
      "Boshqaruvchi kosmik kema qo'ying — sichqoncha bilan asteroidlardan qoching!",
      "Natija aqlbovar qilmas: tekis ekranda xuddi 3D tunnel ichida uchib ketayotgandek his paydo bo'ladi!"
    ],
    extra: ["Asteroidlar yaqinlashganda ularning harakat tezligini ham oshirib boring (`change steps by 1`).", "Yulduzlar uchishi (Starfield) effektini orqa fonga qo'shing."],
    ask: [
      ["Perspektiva qoidasi nima deydi?", "Yaqindagi narsalar katta, uzoqdagi narsalar kichik ko'rinadi."],
      ["Nega bu usul «psevdo-3D» deyiladi?", "Ekran aslida tekis (2D), lekin o'lchamni o'zgartirib biz 3D chuqurlik illyuziyasini ko'rsatamiz."],
      ["Obyekt yaqinlashayotganini ko'rsatish uchun hajm qanday o'zgaradi?", "`change size by (musbat son)` orqali kattalashtiriladi."],
      ["Obyekt uzoqda turganda qayerda joylashadi?", "O'yinda ufq nuqtasida (markazda) va juda kichik hajmda."]
    ],
    quiz: [
      ["Obyekt yaqinlashayotganda uning hajmi nima bo'ladi?", "Kattalashadi", "Kichrayadi", "O'zgarmaydi"],
      ["Scratch'da hajm (razmer) qaysi blok bilan o'zgartiriladi?", "set size to ... %", "change x by", "set rotation style"],
      ["Uzoqlashish illyuziyasini yaratish uchun qaysi blok kerak?", "change size by -5", "change size by 10", "hide"],
      ["Psevdo-3D nima?", "Tekis ekranda yaratilgan soxta 3D effekt", "Haqiqiy 3D ko'zoynak", "O'yin konsoli"],
      ["Obyekt ufqdan boshlanganda uning boshlang'ich o'lchami qanday bo'ladi?", "Juda kichik (masalan 5–10%)", "100%", "200%"]
    ],
    game: {
      type: "memory",
      title: "Juftini top: Perspektiva qoidalari",
      pairs: [
        ["Yaqinlashish", "Hajm kattalashadi (+size)"],
        ["Uzoqlashish", "Hajm kichrayadi (-size)"],
        ["Ufq nuqtasi", "Markazdagi kichik boshlanish"],
        ["Psevdo-3D", "Tekis ekranda chuqurlik hissi"],
        ["Repeat 40", "Bosqichma-bosqich yaqinlashish"],
        ["Klonlar", "Ko'p sonli to'siqlar"]
      ]
    },
    topic: [
      { e: "🛤️", h: "Relslar nega birlashib ketadi?", p: "Temir yo'lga qarasangiz, uzoqdagi relslar bir nuqtaga birlashib ketgandek ko'rinadi. Bu inson ko'zining ko'rish qonunidir. Dasturchilar bu qonunni kodga solib, o'yinlarga chuqurlik beradilar.", q: "Ufq chizig'i nima?", a: "Osmon bilan yer tutashgandek ko'rinadigan chiziq." },
      { e: "🏎️", h: "Klassik poyga o'yinlari siri", p: "Eski «Need for Speed» yoki arkada poygalarida 3D kompyuterlar bo'lmagan. Ular xuddi biz bugun qilganimizdek yo'l chiziqlarini pastga qarab kengaytirib, tezlik hissini yaratgan.", q: "Bu usul hozir ham ishlatiladimi?", a: "Ha, yengil va tezkor mobil o'yinlarda keng qo'llaniladi." },
      { e: "👁️", h: "Optik illyuziyalar", p: "Miyamiz kattalashayotgan shaklni ko'rib, darhol «u menga qarab uchib kelyapti!» deb qaror qiladi. Dasturlash — bu inson his-tuyg'ulari va miyasini tushunish demakdir.", q: "Qo'rqinchli o'yinlarda bu qanday ishlaydi?", a: "To'satdan katta bo'lib ekranga sakrab chiqish orqali." }
    ],
    prog: [{ t: "Psevdo-3D chuqurlik kodi", b: ["y:👥 Klon boshlanganda", "b:x: 0 y: 0 ga bor", "p:o'lchamni 5 % qil", "p:ko'rin", "o:🔁 30 marta [", "b:5 qadam yur", "p:o'lchamni 5 ga o'zgartir", "o:]", "o:bu klonni o'chir"] }],
    video: [["wz5qGqZ7u88", "Scratch 3D Illusion Tutorial"], ["2e3Z2N_Cj3g", "Scratch'da 3D chuqurlik effekti"]],
    yq: "scratch pseudo 3d illusion tutorial perspective",
    hw: ["Daftaringizga bitta uzoqlashuvchi yo'l chizing: yaqindagi daraxt katta, uzoqdagi daraxt kichik bo'lsin."]
  },
  {
    n: 19, mod: 3, t: "Qahramonning silliq animatsiyasi va kostyumlar",
    goal: "O'quvchilar harakat fazalarini (yurish, yugurish, sakrash, tinch turish) kostyumlar almashinuvi va vaqt taymeri orqali haqiqiy multfilm kabi jonlantirishni o'rganadi.",
    out: ["Animatsiya kadrlar (frames) almashinuvidan hosil bo'lishini tushuntiradi", "Harakat va tinch turish (idle) animatsiyasi o'rtasida shartli almashadi", "Qahramon yurganida oyoqlari chiroyli harakatlanadigan tizim tuzadi"],
    need: ["Kompyuterlar, Scratch 3.0", "Bir nechta yurish kostyumiga ega qahramon sprayti"],
    plan: [["5", "Multfilmlar qanday yaratiladi? Qog'oz chetiga chizilgan rasmlarni tez varaqlaganda nima bo'ladi?"], ["8", "Yangi mavzu: animatsiya va kadrlar chastotasi (FPS). `next costume` va `wait 0.1 seconds` siri."], ["23", "Amaliy ish: Jonli yuguruvchi va nafas oluvchi qahramon."], ["5", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Agar `wait` qo'yilmasa, kostyumlar soniyasiga 60 marta aylanib, qahramon titrab qoladi. Eng qulay oraliq: 0.08–0.12 soniya.", "Qahramon to'xtaganda birinchi boshlang'ich kostyumga (`switch costume to idle`) qaytishini alohida shart bilan ko'rsating."],
    pt: "Amaliy ish: «Jonli qahramon animatsiyasi»",
    steps: [
      "Scratch kutubxonasidan bir nechta yurish kostyumiga ega qahramon tanlang (masalan, «Pico Walking» yoki «Cat»).",
      "Kostyumlarni ko'rib chiqing: 1-faza, 2-faza, 3-faza, 4-faza oyoqlar harakati.",
      "1-skript (harakat): o'ng va chap strelkalar bilan X o'qi bo'ylab yurish.",
      "2-skript (animatsiya sikli): `when green flag clicked` → `forever` sikli ichida:",
      "`if <key (right arrow) pressed? or key (left arrow) pressed?> then`:",
      "`next costume` → `wait 0.1 seconds`.",
      "`else` (to'xtab turganda): `switch costume to (1-kostyum)` (qahramon tinch holatda turadi).",
      "Sinang: strelkani bosib tursangiz qahramon yuguradi, qo'yib yuborsangiz tinchgina to'xtaydi!",
      "Sakraganda esa `switch costume to (sakrash kostyumi)` blokini qo'shing."
    ],
    extra: ["Tinch turganda (Idle) qahramon ozgina «nafas oladigan» animatsiya qo'shing (`change size by 2`, `change size by -2`).", "Har bir qadamda yerga tekkanida ohista qadam tovushi chiqsin."],
    ask: [
      ["Animatsiya qanday hosil bo'ladi?", "Bir-biridan ozgina farq qiladigan rasmlarning (kadrlarning) tez almashinuvidan."],
      ["Nega `next costume` blokidan keyin `wait` kerak?", "Rasmlar juda tez aylanib ketmasdan, ko'zga chiroyli va tabiiy ko'rinishi uchun."],
      ["Qahramon to'xtaganda nima sodir bo'lishi kerak?", "U tinch turish kostyumiga qaytishi kerak."],
      ["Kostyumlarni o'zimiz chizishimiz mumkinmi?", "Ha, Scratch'ning rasm muharririda istalgancha yangi kadr chizish mumkin."]
    ],
    quiz: [
      ["Keyingi kadrga o'tish bloki qaysi?", "next costume", "next backdrop", "change x by 10"],
      ["Yurish animatsiyasi uchun eng tabiiy kutish vaqti qancha?", "0.1 soniya", "2 soniya", "0 soniya (kutilmaydi)"],
      ["Qahramon to'xtaganda qaysi blok uni boshlang'ich holga qaytaradi?", "switch costume to ...", "hide", "delete this clone"],
      ["O'yinda qahramon qimirlamay turgandagi animatsiya nima deyiladi?", "Idle animatsiya", "Run animatsiya", "Jump animatsiya"],
      ["Bir soniyadagi kadrlar soni nima deb ataladi?", "FPS (Frames Per Second)", "Klon", "Megabayt"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Animatsiya algoritmi",
      steps: [
        "Qahramonning turli harakat fazalaridagi kostyumlarini tayyorlash",
        "Klaviatura tugmasi bosilganini tekshirish",
        "Agar tugma bosilgan bo'lsa: qahramonni oldinga surish",
        "`next costume` bloki bilan keyingi kadrga o'tish",
        "Kichik pauza qilish: `wait 0.1 seconds`",
        "Agar tugma qo'yib yuborilsa: tinch turish kostyumiga qaytish"
      ]
    },
    topic: [
      { e: "🎞️", h: "Kino va multfilm mo''jizasi", p: "Birinchi multfilmlar har bir harakatni qog'ozga alohida chizib, sekundiga 24 ta rasmni ko'rsatish orqali yaratilgan. Scratch ham xuddi shu prinsipda ishlaydi.", q: "1 daqiqalik multfilm uchun nechta rasm kerak bo'lgan?", a: "60 sekund × 24 kadr = 1440 ta rasm!" },
      { e: "🧍", h: "Idle animatsiyasi nima?", p: "Professional o'yinlarda qahramon hech qachon toshdek qotib qolmaydi: u ko'zini pirpiratadi, og'irligini bir oyog'idan ikkinchisiga oladi, nafas oladi. Bu o'yinni tirik qiladi.", q: "Sevimli o'yiningizdagi qahramon to'xtab turganda nima qiladi?", a: "Qurolini to'g'rilaydi, atrofga qaraydi." },
      { e: "👟", h: "Oyoq tovushlari", p: "Animatsiya tovush bilan birlashganda mo''jiza yuz beradi. Har safar oyoq yerga tekkanda chiqadigan qisqa «tup-tup» tovushi o'yinga haqiqiy hayot bag'ishlaydi.", q: "Tovush qaysi blok bilan qo'yiladi?", a: "«start sound» bloki orqali." }
    ],
    prog: [{ t: "Silliq yugurish animatsiyasi", b: ["y:▶ Bayroq bosilganda", "o:🔁 Doim [", "o:Agar", "s:o'ng strelka bosilsa", "b:x ni 6 ga o'zgartir", "p:keyingi kostyum", "o:⏳ 0.1 soniya kut", "o:Aks holda", "p:kostyumni (1-turish) ga o'zgartir", "o:]"] }],
    video: [["r_dY3nNqFzA", "Scratch Character Animation Tutorial"], ["T_8wM6V2b7w", "Scratch'da yurish animatsiyasi"]],
    yq: "scratch walk animation next costume smooth tutorial",
    hw: ["Daftaringizning burchagiga 5 ta varaqqa to'pning pastga tushib qayta sakrashi rasmini chizing va tez varaqlab jonlantiring."]
  },
  {
    n: 20, mod: 3, t: "3D printerlar qanday ishlaydi? Qatlamlar va STL",
    goal: "O'quvchilar 3D printerlarning ishlash prinsipini (FDM texnologiyasi, qatlamlar, slayser dasturlari, materiallar va to'ldirish zichligini) o'rganadi.",
    out: ["3D printer qatlam-qatlam qilib buyum yasashini (Additiv ishlab chiqarish) tushuntiradi", "STL fayl va G-kod (slayser) tushunchasini biladi", "Modelni 3D bosmaga to'g'ri yo'naltirish (orientatsiya) qoidasini aytadi"],
    need: ["Kompyuterlar, 3D printer namunasi (yoki video/namunaviy bosilgan detallar)", "Plastik namunasi (PLA ipi)"],
    plan: [["6", "Savol: oddiy printer qog'ozga siyoh purkaydi. 3D printer esa qanday qilib qattiq plastik buyum yasaydi?"], ["8", "Yangi mavzu: FDM texnologiyasi, issiq soplo (ekstruder), qatlamlar (layers) va to'ldirish (infill)."], ["23", "Amaliy ish: Tinkercad modelini STL qilib eksport qilish va slayserda qatlamlarni ko'rish."], ["5", "Viktorina va muhokama."], ["4", "Xulosa va test."]],
    tips: ["Tortni qavat-qavat krem surtib yasash misoli 3D bosib chiqarish qatlamlarini tushuntirish uchun eng zo'r o'xshatishdir.", "Infill (ichki to'ldirish) 100% bo'lishi shart emasligini, 20% to'ldirish ham juda mustahkam bo'lib, plastik va vaqtni 4 barobar tejashini ko'rsating."],
    pt: "Amaliy ish: «Modelni 3D printerga tayyorlash»",
    steps: [
      "Tinkercad'da avval yasagan brelok yoki stakan loyihangizni oching.",
      "Yuqori o'ng burchakdagi «Export» (Eksport) tugmasini bosing.",
      "Ochilgan oynada «.STL» formatini tanlang. Fayl kompyuteringizga yuklanadi.",
      "O'qituvchi bilan birga slayser dasturini (masalan, Cura yoki PrusaSlicer) oching.",
      "STL faylni slayserga tashlang: model virtual printer stolida paydo bo'ladi.",
      "Qatlam qalinligini belgilang: 0.2 mm (standart sifat).",
      "Ichki to'ldirishni (Infill) tanlang: 20% (asalarilar iniga o'xshash to'r).",
      "«Slice» (Tilmala) tugmasini bosing: dastur modelni qatlamlarga ajratadi va qancha vaqt ketishini hisoblab beradi (masalan: 35 daqiqa)!",
      "Slayser slayderini pastdan yuqoriga surib, printerning qatlam-qatlam qanday bosishini ko'ring."
    ],
    extra: ["Turli to'ldirish shakllarini (Grid, Gyroid, Honeycomb) taqqoslang.", "Model tagiga yordamchi tayanchlar (Support) qachon kerak bo'lishini muhokama qiling."],
    ask: [
      ["3D printer buyumni qanday qilib yasaydi?", "Eritilgan plastikni juda yupqa qatlam-qatlam qilib quyish orqali."],
      ["3D modellar uchun eng mashhur xalqaro fayl formati qaysi?", ".STL formati."],
      ["Slayser (Slicer) dasturi nima qiladi?", "3D modelni yuzlab gorizontal qatlamlarga kesadi va printer tushunadigan G-kodga aylantiradi."],
      ["Infill (ichki to'ldirish) nima uchun kerak?", "Plastikni tejash, buyumni yengil va mustahkam qilish uchun."]
    ],
    quiz: [
      ["3D printerlarda eng ko'p ishlatiladigan xavfsiz plastik turi qaysi?", "PLA (makkajo'xori kraxmalidan olinadi)", "Temir", "Oddiy suv"],
      ["3D modelni printerga tayyorlovchi tilimlovchi dastur nima deb ataladi?", "Slayser (Slicer)", "Brauzer", "Kalkulyator"],
      ["Tinkercad'dan 3D printer uchun qaysi formatda fayl yuklab olinadi?", ".STL", ".MP4", ".EXE"],
      ["Bir qatlamning qalinligi taxminan qancha bo'ladi?", "0.2 millimetr", "2 santimetr", "1 metr"],
      ["Qatlamlar pastdan yuqoriga qurilishi nima deb ataladi?", "Additiv ishlab chiqarish", "Kesish", "Eritish"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: G'oyadan tayyor buyumgacha",
      steps: [
        "Tinkercad'da 3D modelni loyihalash va o'lchamlarini tekshirish",
        "Modelni .STL formatida kompyuterga eksport qilish",
        "Faylni slayser (Slicer) dasturida ochish va qatlamlarga ajratish",
        "Faylni fleshkaga (G-kod) yozib, 3D printerga o'rnatish",
        "Printerni qizdirish va qatlam-qatlam bosib chiqarish",
        "Tayyor sovitilgan buyumni stoldan ajratib olish"
      ]
    },
    topic: [
      { e: "🖨️", h: "FDM texnologiyasi — issiq yelim quroli kabi", p: "FDM printeri xuddi siz bilgan issiq yelim quroliga (pistoletga) o'xshaydi. Faqat uning uchi (soplo) 200 darajagacha qiziydi va kompyuter buyrug'i bilan robot qo'ldek aniq harakatlanadi.", q: "Oddiy printerdan farqi nimada?", a: "Oddiy printer faqat 1 ta tekis qatlam chizadi, 3D printer esa yuzlab qatlamlarni ustma-ust qo'yadi." },
      { e: "🌽", h: "PLA plastiki — tabiatga do'st", p: "Maktablarda ishlatiladigan PLA plastiki neftdan emas, makkajo'xori va qamishdan tayyorlanadi. U qizdirilganda shirin vafli hidi keladi va tabiat uchun zararsizdir.", q: "Yana qanday 3D materiallar bor?", a: "Yog'och tolali, qorong'ida yonuvchi, egiluvchan rezina (TPU)." },
      { e: "🚀", h: "Kosmosda 3D bosma", p: "Xalqaro kosmik stansiyadagi (XKS) kosmonavtlar yerga buyurtma bermaydilar: kerakli gayka yoki kalit buzilsa, yer yuborgan 3D faylni kosmosning o'zida printerda chiqarib oladilar!", q: "Kelajakda Marsda uylarni qanday qurishadi?", a: "Ulkan 3D printerlar Mars tuprog'idan uylar bosib chiqaradi." }
    ],
    prog: [{ t: "3D bosma texnologik zanjiri", b: ["y:📐 Tinkercad: Dizayn tayyor", "b:💾 Export: .STL fayl", "o:🔪 Slicer: Qatlamlarga bo'lish (0.2 mm)", "g:🧵 Infill: 20% asalari ini", "p:🖨️ 3D Print: Qatlam-qatlam bosish!"] }],
    video: [["wY9kQz1B-lM", "How 3D Printers Work for Kids"], ["a68_g2IpepU", "3D printer qanday ishlaydi?"]],
    yq: "how 3d printing works for kids tutorial",
    hw: ["Agar sizda 3D printer bo'lsa, o'zingiz va uyingiz uchun eng birinchi qanday 3 ta narsa chiqarardingiz? Yozib keling."]
  },
  {
    n: 21, mod: 3, t: "Ikki o'yinchi rejimi (Multiplayer): Poyga va bellashuv",
    goal: "O'quvchilar bitta klaviaturada ikki o'yinchi boshqaradigan (W-A-S-D va Strelkalar), mustaqil to'siqlar va ball hisobiga ega poyga o'yinini yaratadi.",
    out: ["Bitta klaviaturada ikki kishi uchun boshqaruv skriptini ajratadi", "Ikkita mustaqil hisoblagich (1-o'yinchi balli, 2-o'yinchi balli) yaratadi", "Adolatli g'alaba va finish shartlarini dasturlaydi"],
    need: ["Kompyuterlar, Scratch 3.0", "Ikkita turli mashina yoki qahramon sprayti"],
    plan: [["5", "Nega do'st bilan birga o'ynash kompyuterga qarshi o'ynashdan ko'ra qiziqroq? Multiplayer o'yinlar."], ["8", "Boshqaruvni bo'lish: 1-o'yinchi (W-A-S-D), 2-o'yinchi (Strelkalar). finish chizig'i va g'alaba."], ["24", "Amaliy ish: «Do'stlar poygasi»."], ["4", "Juftlikda o'yinni o'ynab bellashish."], ["4", "Xulosa va test."]],
    tips: ["Ikkala o'yinchi bir xil tezlikda harakatlanishi kerak (balans qoidasi). Agar biri tezroq bo'lsa, o'yin adolatsiz bo'lib qoladi.", "Finish chizig'iga tekkanda qaysi qahramon birinchi tekkanganini aniqlash uchun `broadcast (1-o'yinchi yutdi)` yuborib, o'yinni to'xtatish kerak."],
    pt: "Amaliy ish: «2 kishilik poyga»",
    steps: [
      "Sahnaga poyga yo'li foni va o'rtaga ajratuvchi chiziq chizing. O'ng chetga qizil Finish chizig'ini qo'ying.",
      "1-sprayt: Ko'k mashina (Start joyi: X: -200, Y: 60).",
      "1-mashina boshqaruvi (W-A-S-D): `key (d) pressed` → `change x by 5`, `key (a)` → `change x by -5`, `key (w)` → `change y by 5`, `key (s)` → `change y by -5`.",
      "2-sprayt: Qizil mashina (Start joyi: X: -200, Y: -60).",
      "2-mashina boshqaruvi (Strelkalar): o'ng, chap, yuqori, pastki strelkalar bilan.",
      "Finish sharti 1: agar ko'k mashina qizil finishga tegsa → `say (1-o'yinchi g'alaba qozondi!) for 2 seconds` → `stop all`.",
      "Finish sharti 2: agar qizil mashina qizil finishga tegsa → `say (2-o'yinchi g'alaba qozondi!) for 2 seconds` → `stop all`.",
      "Sherigingizni yoniga o'tqazing: «3, 2, 1, START!» — poygani boshlang!"
    ],
    extra: ["Yo'l ustiga tasodifiy tushuvchi moy dog'lari qo'shing: unga tekkan mashina 1 soniya to'xtab qolsin.", "Olinganda tezlikni oshiruvchi chaqmoq (turbo) belgilarini qo'shing."],
    ask: [
      ["Bitta klaviaturada ikki o'yinchi qanday boshqariladi?", "Har xil tugmalar to'plami orqali: biri W-A-S-D, ikkinchisi yo'nalish strelkalari bilan."],
      ["O'yinda balans (muvozanat) nima uchun kerak?", "Ikkala o'yinchi ham yutish uchun teng imkoniyatga ega bo'lishi uchun."],
      ["Kim birinchi kelganini dastur qanday biladi?", "Qaysi mashina finish chizig'iga birinchi tegsa, o'sha kod ishlab o'yinni to'xtatadi."],
      ["Do'stlar bilan o'ynaganda nimalarga rioya qilish kerak?", "Do'stlik, o'yin qoidalariga rioya qilish va yutqazganda xafa bo'lmaslik."]
    ],
    quiz: [
      ["1-o'yinchi uchun eng mashhur klaviatura tugmalari qaysi?", "W-A-S-D", "1-2-3-4", "F-G-H-J"],
      ["Finish chizig'i nimani bildiradi?", "Poyga marrasi (oxirgi nuqta)", "Boshlang'ich nuqta", "Yoqilg'i quyish joyi"],
      ["O'yin birinchi bo'lib marraga yetgan odamda to'xtashi uchun nima qilinadi?", "stop all bloki ishlatiladi", "delete all", "wait 10 seconds"],
      ["Multiplayer nima degani?", "Ko'p o'yinchili o'yin", "Bir kishilik o'yin", "Faqat ovozli o'yin"],
      ["Ikkala mashina startda bir xil joyda turishi uchun qaysi blok kerak?", "go to x: ... y: ...", "change x by", "point in direction"]
    ],
    game: {
      type: "grid",
      title: "Robotni marraga yetkaz",
      levels: [
        { map: ["S..", ".#.", "..F"] },
        { map: ["S.#", "..#", ".#F"] },
        { map: ["S...", "##.#", "...F"] }
      ]
    },
    topic: [
      { e: "🎮", h: "Multiplayer sehri", p: "Dunyodagi eng mashhur o'yinlar do'stlar bilan birga o'ynaladi. Bitta kompyuter atrofida ikki do'stning kulgisi va bellashuvi har qanday kompyuter botidan qiziqroqdir.", q: "Yana qanday 2 kishilik o'yinlarni bilasiz?", a: "Shaxmat, stol tennisi, poyga, jangovar o'yinlar." },
      { e: "⌨️", h: "W-A-S-D — geymerlar standarti", p: "Nega aynan W-A-S-D? Chunki chap qo'l klaviaturaning chap tomoniga juda qulay tushadi, o'ng qo'l esa strelkalarni yoki sichqonchani boshqaradi. Bu standart 1990-yillarda paydo bo'lgan.", q: "W qaysi tomonga yurgizadi?", a: "Oldinga (tepaga)." },
      { e: "🤝", h: "Halol o'yin — sport ruhi", p: "O'yin dasturchisi har doim halol qoidalar yaratishi shart. Hech bir tomon nohaq ustunlikka ega bo'lmasligi kerak.", q: "Agar do'stingiz yutqazsa nima deysiz?", a: "«Ajoyib o'yin bo'ldi, yana bir marta o'ynaymiz!»" }
    ],
    prog: [{ t: "2 kishilik boshqaruv", b: ["y:▶ Bayroq bosilganda", "b:1-mashina: x: -200 y: 50", "b:2-mashina: x: -200 y: -50", "o:🔁 Doim [", "o:Agar W/A/S/D bosilsa: 1-mashina yursin", "o:Agar Strelkalar bosilsa: 2-mashina yursin", "o:Agar finishga tegsa: «G'alaba!» de va to'xtat", "o:]"] }],
    video: [["wz5qGqZ7u88", "Scratch 2 Player Game Tutorial"], ["2e3Z2N_Cj3g", "Scratch'da 2 kishilik poyga o'yini"]],
    yq: "scratch 2 player game wasd arrow keys tutorial",
    hw: ["Do'stingiz bilan birga o'ynash uchun yangi o'yin qoidasini o'ylab toping va shartlarini yozing."]
  },
  {
    n: 22, mod: 3, t: "Ochiq loyiha: Geym-dizayn va rejalashtirish",
    goal: "O'quvchilar yil davomida olgan bilimlariga tayanib, o'zlarining mustaqil yakuniy loyihasini (Scratch o'yini yoki Tinkercad 3D modeli) rejalashtirishni, g'oya, qahramonlar va qoidalarni qog'ozda ishlab chiqishni o'rganadi.",
    out: ["O'z loyihasining aniq g'oyasi va maqsadini shakllantiradi", "Geym-dizayn hujjatini (Game Design Document) to'ldiradi", "Qahramonlar eskizlari va bloklar sxemasini qog'ozga tushiradi"],
    need: ["A4 qog'ozlar, rangli qalamlar, daftarlar", "Loyihalar namunasi"],
    plan: [["6", "Yakuniy loyihaga start: bugun har bir o'quvchi o'zining shaxsiy orzusidagi loyihasini rejalashtiradi."], ["10", "Dizayn-fikrlash: G'oya $\\rightarrow$ Qahramonlar $\\rightarrow$ Qoidalar $\\rightarrow$ Yutish va yutqazish shartlari."], ["22", "Mustaqil ish: Loyiha pasportini tuzish va qoralama chizish."], ["4", "Sherigiga o'z g'oyasini tushuntirib berish (Pitch)."], ["3", "Xulosa va maslahatlar."]],
    tips: ["O'quvchilar juda ulkan (masalan, «GTA» yoki «Minecraft» kabi) loyihalarni rejalashtirib, keyin ulgura olmasliklari mumkin. Ularga «Oddiy, lekin mukammal ishlaydigan» loyiha tanlashni maslahat bering.", "Loyiha yo'nalishini tanlashda erkinlik bering: kimdir Scratch o'yini tuzishi mumkin, kimdir Tinkercad'da ulkan qasr yoki robot loyihalashi mumkin."],
    pt: "Amaliy ish: «Loyiha pasportini yaratish»",
    steps: [
      "A4 qog'ozini oling va tepasiga loyihangiz nomini yozing (masalan: «Qahramon quyoncha» yoki «Kelajak Mars roboti»).",
      "Loyiha turini tanlang: A) Scratch o'yini, B) Tinkercad 3D modeli, C) Integratsiyalashgan (ikkalasi birga).",
      "Bosh qahramon va uning dushmanlari/to'siqlarini chizing.",
      "O'yin qoidalarini yozing: qahramon nima qilishi kerak? Ballar qanday to'planadi?",
      "Yutish sharti: o'yinchi qachon g'alaba qozonadi (masalan: 10 ta yulduz yig'sa)?",
      "Yutqazish sharti: o'yin qachon tugaydi (masalan: 3 marta to'siqqa ursa)?",
      "Kerakli Scratch bloklari yoki Tinkercad shakllari ro'yxatini tuzing.",
      "G'oyangizni o'qituvchiga va yoningizdagi do'stingizga taqdim qiling va ularning fikrini oling."
    ],
    extra: ["Loyihangiz uchun boshlang'ich menyu (Start Game) oynasi eskizini chizing.", "O'yin tovushlari va musiqa rejasini tuzing."],
    ask: [
      ["Dasturni kompyuterda yozishdan oldin nega qog'ozda rejalashtirish kerak?", "Vaqtni tejash, xatolarning oldini olish va fikrni aniq jamlab olish uchun."],
      ["Geym-dizayn nima?", "O'yin g'oyasi, qoidalari, ko'rinishi va qiziqarliligini loyihalash san'ati."],
      ["Loyiha muvaffaqiyatli chiqishi uchun nima muhim?", "Rejani juda murakkablashtirmasdan, qadamma-qadam amalga oshirish."],
      ["G'oyani do'stga aytib berish (pitch) nimaga yordam beradi?", "G'oyadagi tushunarsiz joylarni va kamchiliklarni oldindan ko'rishga."]
    ],
    quiz: [
      ["Loyihani boshlashda eng birinchi qadam nima?", "Reja va eskiz tuzish", "Darhol kod yozish", "Kompyuterni o'chirib qo'yish"],
      ["Geym-dizayner kim?", "O'yin qoidalari va olamini yaratuvchi mutaxassis", "Faqat kompyuter tuzatuvchi", "Internet kabelini ulovchi"],
      ["O'yinda yutish va yutqazish shartlari nega kerak?", "O'yinda maqsad va qiziqish bo'lishi uchun", "Kompyuter qotishi uchun", "Hech qanday keragi yo'q"],
      ["Reja tuzayotganda qaysi qoida muhim?", "Oddiy boshlab, bosqichma-bosqich rivojlantirish", "Dunyodagi eng qiyin narsani tanlash", "Hech kimga aytmaslik"],
      ["Loyiha pasporti nima?", "Loyihaning barcha rejalari yozilgan hujjat", "Oddiy shaxsiy guvohnoma", "Faqat rasm"]
    ],
    game: {
      type: "memory",
      title: "Juftini top: Loyiha bosqichlari",
      pairs: [
        ["G'oya", "O'yin yoki model nima haqida?"],
        ["Qahramon", "Bosh ijrochi sprayt"],
        ["Qoidalar", "Ballar va to'siqlar"],
        ["G'alaba", "Maqsadga erishish sharti"],
        ["Eskiz", "Qog'ozdagi birinchi chizma"],
        ["Dasturlash", "Kompyuterda amalga oshirish"]
      ]
    },
    topic: [
      { e: "💡", h: "G'oyadan haqiqat sari", p: "Dunyodagi barcha ulkan kashfiyotlar avval oddiy qog'oz parchasida qoralama chizishdan boshlangan. Bugun siz o'z g'oyangiz me'mori va muallifisiz.", q: "Eng yaxshi g'oyalar qayerdan keladi?", a: "Kundalik hayot, sevimli kitoblar, multfilmlar va o'z qiziqishlarimizdan." },
      { e: "📋", h: "GDD — O'yin hujjati", p: "Katta o'yin kompaniyalarida (PlayStation, Nintendo) yuzlab sahifali «Game Design Document» yoziladi. Unda har bir qahramonning xarakteri, har bir tugmaning vazifasi batafsil belgilanadi.", q: "Rejasiz ish boshlasak nima bo'ladi?", a: "Yarim yo'lda adashib qolamiz va loyiha chala qolishi mumkin." },
      { e: "🚀", h: "Kichik qadamlar — katta g'alaba", p: "Bitta katta ishni bir necha kichik bo'laklarga bo'lib bajarish har doim oson. Bugun reja tuzamiz, keyingi darsda kodini yozamiz va ko'rgazmada namoyish qilamiz!", q: "Rejangizni amalga oshirishga tayyormisiz?", a: "Ha, tayyormiz!" }
    ],
    prog: [{ t: "Loyiha arxitekturasi rejasi", b: ["y:📝 G'oya va ssenariy", "b:🎨 Spraytlar va fonlar", "o:⚙️ Asosiy harakat va mexanika", "g:🏆 Ball, jon va finish sharti", "p:🧪 Sinov va takomillashtirish!"] }],
    video: [["wY9kQz1B-lM", "How to Plan a Scratch Game"], ["a68_g2IpepU", "O'yin loyihasini rejalashtirish"]],
    yq: "how to plan and design a scratch game for kids",
    hw: ["Loyihangiz uchun qog'ozda to'liq rangli sarlavha (muqova) rasmini chizib keling."]
  },
  {
    n: 23, mod: 3, t: "Ochiq loyiha: Yaratish, sinash va xatolarni tuzatish (Debugging)",
    goal: "O'quvchilar o'tgan darsdagi reja asosida o'z loyihalarini kompyuterda yaratadi, o'zaro bir-birining ishini sinab ko'radi (Playtesting) va dasturlashdagi xatolarni (Bug) topib tuzatadi.",
    out: ["Rejadagi loyihani mustaqil dasturlaydi yoki 3D modelini yasaydi", "Nosozlik va xatolarni (Bug) topadi va ularni to'g'rilaydi (Debugging)", "Do'stlarining takliflariga qarab loyihani yaxshilaydi"],
    need: ["Kompyuterlar, Scratch 3.0 yoki Tinkercad", "O'tgan darsdagi loyiha reja qog'ozlari"],
    plan: [["4", "Tezkor yo'riqnoma: bugun hamma o'z rejasini kodga va shaklga aylantiradi."], ["25", "Mustaqil amaliy ijod: loyihani kompyuterda qurish."], ["8", "Do'stlar sinovi (Playtesting): juftliklar bir-birining kompyuteriga o'tib o'yinni sinaydi."], ["5", "Xatolarni tuzatish (Debugging) va kamchiliklarni to'g'rilash."], ["3", "Xulosa va keyingi ko'rgazmaga tayyorgarlik."]],
    tips: ["O'quvchi xatoga duch kelganda uning o'rniga kodni to'g'rilab bermang. Savol bering: «Dastur nima qilishi kerak edi va hozir nima qilyapti? Qaysi blok noto'g'ri bo'lishi mumkin?»", "Playtesting (sinash) o'quvchilarda tanqidiy fikrlashni va bir-birini qo'llab-quvvatlashni shakllantiradi."],
    pt: "Amaliy ish: «Loyihani yaratish va xatolarni ovlash»",
    steps: [
      "Scratch yoki Tinkercad dasturini oching va loyihangiz rejasiga qarab ish boshlang.",
      "1-bosqich: Bosh qahramon va fonni joylashtiring. Uning boshqaruvini dasturlang.",
      "2-bosqich: To'siqlar, klonlar va dushmanlarni qo'shing.",
      "3-bosqich: Ballar, vaqt taymeri yoki 3D model o'lchamlarini sozlang.",
      "Xatolarni qidiring: qahramon polga botib qolmayaptimi? O'qlar o'z vaqtida o'chyaptimi? Shakllar to'g'ri guruhlandimi?",
      "Playtesting vaqti: o'rningizdan turing va yoningizdagi do'stingizning kompyuteriga o'ting. Uning loyihasini o'ynab ko'ring!",
      "Do'stingizga 1 ta maqtov va 1 ta yaxshilash bo'yicha maslahat ayting.",
      "O'z kompyuteringizga qaytib, olingan maslahat bo'yicha loyihani yanada mukammal qiling."
    ],
    extra: ["Loyihaga boshlang'ich yo'riqnoma ekrani («Qanday o'ynash kerak») qo'shing.", "Yutgan paytda mushakbozlik (salut) effekti qo'shing."],
    ask: [
      ["Dasturlashda «Bug» (qo'ng'iz) nima degani?", "Dasturdagi kutilmagan xato yoki nosozlik."],
      ["«Debugging» nima?", "Dasturdagi xatolarni qidirib topish va ularni tuzatish jarayoni."],
      ["Nega o'yinni boshqa odamga sinatish (playtesting) foydali?", "Chunki o'yin muallifi ko'rmay qolgan xatolarni yangi o'yinchi darhol payqaydi."],
      ["Xato qilishdan qo'rqish kerakmi?", "Hech qachon! Har bir xato — yangi bilim va tajriba manbaidir."]
    ],
    quiz: [
      ["Dasturdagi xatoni qidirib tuzatish nima deyiladi?", "Debugging", "Deleting", "Cloning"],
      ["Tarixdagi birinchi «Bug» so'zi qayerdan kelgan?", "Haqiqiy kapalak kompyuter ichiga kirib qolib nosozlik keltirib chiqargan", "O'yin qahramonining ismi bo'lgan", "Dasturchi shunday laqab qo'ygan"],
      ["Boshqa odamlarga o'yinni o'ynatib sinash nima deyiladi?", "Playtesting", "Painting", "Packaging"],
      ["Loyihada xato chiqsa birinchi nima qilish kerak?", "Kodni qadamma-qadam tahlil qilib xatoni topish", "Hammasini o'chirib tashlash", "Kompyuterni yopish"],
      ["O'yinda ball noto'g'ri hisoblansa, qaysi bloklarni tekshirish kerak?", "Variables (O'zgaruvchilar) bloklarini", "Looks (Ko'rinish)", "Sounds"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Xatoni tuzatish (Debugging)",
      steps: [
        "Xato aynan qayerda yuz berayotganini aniqlash",
        "O'sha harakatga javobgar skriptni topish",
        "Bloklarni birma-bir tekshirib, xato parametrni topish",
        "Kodni to'g'rilash va qayta sinab ko'rish",
        "Dastur kutilgandek to'g'ri ishlaganiga ishonch hosil qilish"
      ]
    },
    topic: [
      { e: "🐞", h: "Birinchi «Bug» tarixi", p: "1947-yilda mashhur dasturchi ayol Greys Xopper ulkan kompyuter nima uchun ishlamayotganini tekshirayotganda, rele ichiga kirib qolgan haqiqiy kuya kapalakni (Bug) topadi. O'shandan beri xatolarni «Bug» deb atash odat tusiga kirgan.", q: "Dasturchilar qancha vaqtini xato qidirishga sarflaydilar?", a: "Ish vaqtining deyarli yarmini!" },
      { e: "🕵️", h: "Detektiv dasturchi", p: "Xatoni qidirish xuddi detektivlikka o'xshaydi. Siz izlar bo'yicha borasiz: qaysi o'zgaruvchi adashdi, qaysi shart bajarilmadi? Xatoni topgandagi quvonch esa tengsizdir!", q: "Xato topilganda nima qilasiz?", a: "Xursand bo'lib uni to'g'rilayman!" },
      { e: "🎮", h: "Playtesting san'ati", p: "Dunyodagi eng zo'r o'yinlar ham yuzlab sinovchilardan (testerlardan) o'tadi. O'yinchilar qayerda qiynalyapti, qayeri juda oson — bularning hammasi kuzatilib, yaxshilanadi.", q: "O'yiningizni kim birinchi bo'lib o'ynashini xohlaysiz?", a: "Ota-onam va eng yaqin do'stlarim." }
    ],
    prog: [{ t: "Debugging va sinov algoritmi", b: ["y:▶ Dasturni ishga tushir", "o:👀 Natijani kuzat", "g:🔍 Xato blokni top", "b:✏️ O'zgartir va to'g'rila", "p:🎉 Qayta sina — ishlayapti!"] }],
    video: [["wY9kQz1B-lM", "Scratch Debugging: How to Fix Bugs"], ["AKUtkYZTUfo", "Scratch'da xatolarni topish va tuzatish"]],
    yq: "scratch debugging how to fix bugs tutorial",
    hw: ["Loyihangizga yakuniy pardoz bering: tovushlar, qiziqarli xabarlar va ranglar qo'shing."]
  },
  {
    n: 24, mod: 3, t: "Yakuniy taqdimot, ko'rgazma va mini-xakaton (Demo Day)",
    goal: "O'quvchilar yil davomida bajargan ishlarini (Scratch o'yinlari va Tinkercad 3D modellarini) omma oldida namoyish etishni (Pitch), nutq so'zlashni, o'zaro tajriba almashishni va 4-sinf kursini muvaffaqiyatli yakunlashni nishonlaydi.",
    out: ["O'z loyihasini 2 daqiqa ichida tushunarli va ishonchli taqdim etadi (Pitch)", "Do'stlarining ishlarini munosib baholaydi va samimiy fikr bildiradi", "Yil davomida Scratch va Tinkercad'da erishgan bilimlarini sarhisob qiladi"],
    need: ["Proyektor yoki katta ekran", "Sertifikatlar va rag'batlantiruvchi nominatsiyalar", "Bayramona kayfiyat"],
    plan: [["5", "Tantanali ochilish: bugun bizning katta «Demo Day» — loyihalar bayrami!"], ["5", "Taqdimot qoidalari: 2 daqiqa loyiha namoyishi, 1 daqiqa savol-javob."], ["28", "O'quvchilar taqdimotlari (har bir o'quvchi o'z ishini ekranda ko'rsatadi)."], ["4", "Nominatsiyalar bo'yicha taqdirlash va sertifikatlar topshirish."], ["3", "Yillik xotira fotosurati va bayram yakuni."]],
    tips: ["Har bir o'quvchi uchun alohida samimiy nominatsiya toping: «Eng qiziqarli o'yin», «Eng mahoratli 3D dizayn», «Eng epchil dasturchi», «Eng tartibli kod» va h.k.", "Bu dars nafaqat texnik bilim, balki o'quvchilarning o'ziga bo'lgan ishonchini va notiqlik mahoratini oshirish uchun ulkan imkoniyatdir."],
    pt: "Demo Day: «Mening mualliflik loyiham»",
    steps: [
      "Loyihangizni katta ekranda yoki kompyuteringizda to'liq ekranga ochib tayyorlab qo'ying.",
      "Taqdimot rejasini eslang: 1) Ismingiz va loyiha nomi, 2) Bu loyiha nima haqida, 3) Unda qanday murakkab bloklar yoki 3D usullar ishlatilgan, 4) Loyihani o'ynab ko'rsatish.",
      "Navbat bilan sahnaga (doska oldiga) chiqing va ishonch bilan gapiring.",
      "Boshqalar taqdimot qilayotganda ularni diqqat bilan tinglang va qarsaklar bilan qo'llab-quvvatlang.",
      "Do'stingizning loyihasiga qiziqarli savol bering.",
      "Barcha loyihalar ko'rib chiqilgach, ovoz berish yoki nominatsiyalar e'lon qilinadi.",
      "4-sinf kursini muvaffaqiyatli tamomlaganlik sertifikatini tantanali qabul qilib oling!",
      "Guruh bilan birga esdalik fotosuratiga tushing!"
    ],
    extra: ["Loyihangizning Scratch havolasini yoki Tinkercad modelini ota-onangizga yuboring.", "Keyingi yilda 5-sinfda Arduino va elektronika olamini o'rganishga tayyorlaning!"],
    ask: [
      ["Bu yil 4-sinfda eng muhim nimalarni o'rgandingiz?", "O'z bloklarimiz (funksiyalar), klonlar, sakrash fizikasi, ro'yxatlar, Tinkercad'da 3D modellashtirish, tekislash va guruhlash."],
      ["Taqdimot paytida nima uchun hayajonlanmaslik kerak?", "Chunki bu siz yaratgan shaxsiy ajoyib ish va hamma uni qiziqish bilan kutyapti."],
      ["Keyingi yilda robototexnikada nimalarni o'rganishni orzu qilasiz?", "Haqiqiy simlar, mikrokontrollerlar, Arduino platalari va dasturlash."],
      ["Dasturlash va robototexnika sizga nima berdi?", "Muammolarni mustaqil hal qilish, ijodkorlik va do'stlar bilan jamoada ishlash."]
    ],
    quiz: [
      ["Loyiha taqdimotida eng muhim narsa nima?", "Loyihaning asosiy g'oyasini tushunarli va ravon ko'rsatib berish", "Juda tez gapirish", "Hech narsa demasdan turish"],
      ["4-sinf davomida qaysi ikkita asosiy dasturiy vositani o'rgandik?", "Scratch va Tinkercad", "Faqat Word", "Faqat Paint"],
      ["Tinkercad dasturi nima uchun ishlatiladi?", "3D modellashtirish va fazoviy dizayn uchun", "Faqat musiqa eshitish uchun", "Faqat matn terish uchun"],
      ["Scratch'da o'z bloklarimiz nima deb ataladi?", "My Blocks (Funksiyalar)", "Lists", "Variables"],
      ["Kelgusi 5-sinfda bizni nimalar kutmoqda?", "Arduino mikrokontrollerlari va elektronika", "Hech narsa", "Faqat rasmlar"]
    ],
    game: {
      type: "quiz",
      title: "Yillik bilimlar sinovi",
      items: [
        ["Scratch'da cheksiz nusxalar qaysi asbob bilan olinadi?", "Klonlar (Clones)", "O'zgaruvchilar", "Kostyumlar"],
        ["Tinkercad'da teshik ochuvchi vosita nima deb ataladi?", "Hole", "Solid", "Text"],
        ["Shakllarni markazlashtirib tekislash qaynoq tugmasi qaysi?", "L (Align)", "M (Mirror)", "D (Drop)"],
        ["O'yinlarda bitta klaviaturada 2 kishi o'ynashi nima deyiladi?", "Multiplayer", "Singleplayer", "Offline"]
      ]
    },
    topic: [
      { e: "🎓", h: "Buyuk marra — 4-sinf tamomlandi!", p: "Bir yil davomida siz juda katta yo'lni bosib o'tdingiz. Murakkab algoritmlar tuzdingiz, 3D buyumlar loyihaladingiz, o'yin fizikasi va klonlarni boshqardingiz. Siz endi boshlang'ich o'quvchi emassiz — siz haqiqiy yosh muhandis va dasturchisiz!", q: "Eng katta yutug'ingiz deb nimani hisoblaysiz?", a: "O'z qo'lim bilan ishlaydigan o'yin va 3D modellar yarata olganimni." },
      { e: "🤝", h: "Hamkorlik va do'stlik kuchi", p: "Sinfdoshlaringiz bilan birga o'rgandingiz, bir-biringizga yordam berdingiz va birga sinadingiz. Dasturlash va muhandislik olamidagi eng katta boylik — bu yaxshi jamoa va do'stlikdir.", q: "Birga ishlash nimani o'rgatdi?", a: "Fikr almashishni va bir-birimizni qo'llashni." },
      { e: "⚡", h: "Oldinda 5-sinf va Arduino kutmoqda!", p: "Keyingi sinfda biz kompyuter ekranidan chiqib, haqiqiy mikrokontrollerlar, chiroqlar (LED), tugmalar, dvigatellar va Arduino platasi bilan jonli sxemalar yasaymiz. Sarguzasht endi boshlanmoqda!", q: "Arduino'da birinchi nima yasashni xohlaysiz?", a: "Aqlli svetofor yoki robot mashina." }
    ],
    prog: [{ t: "Yillik yutuqlar formulasi", b: ["y:💡 Fikr va qoralama", "b:🧱 Scratch algoritmlari", "o:📐 Tinkercad 3D modellari", "g:🧪 Sinov va xatolarni tuzatish", "p:🏆 Muvaffaqiyatli taqdimot va sertifikat!"] }],
    video: [["wz5qGqZ7u88", "Kids Coding Demo Day Presentations"], ["2e3Z2N_Cj3g", "Bolalar loyihalari ko'rgazmasi"]],
    yq: "kids scratch tinkercad demo day project presentation",
    hw: ["O'z sertifikatingizni xonangizning ko'rinarli joyiga ilib qo'ying va yozgi ta'tilda yangi o'yin g'oyalarini to'plang!"]
  }
);

