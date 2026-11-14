// 4-sinf · 3 oylik dastur · 12 hafta × 2 dars = 24 dars (har biri 45 daqiqa)
// Format 2 va 3-sinf bilan bir xil.
// Asosiy yo'nalishlar: Scratch chuqurlashtirilgan dasturlash va Tinkercad 3D modellash.
// prog rang kodi: y — hodisa (sariq), o — boshqaruv (to'q sariq), b — harakat (ko'k),
//   p — ko'rinish (binafsha), s — sezgi (havorang), v — o'zgaruvchi/ro'yxat (qizg'ish), g — operator/funksiya (yashil), r — tovush (qizil)
window.QOLLANMA.grades[4] = {
  title: "4-sinf · 3 oylik dastur",
  desc: "9–10 yoshli o'quvchilar uchun: Scratch'da murakkab algoritmlar, o'z bloklarimiz (funksiyalar), klonlar va o'yin fizikasi hamda Tinkercad'da fazoviy fikrlash va 3D modellashtirish asoslari.",
  stats: [["12", "hafta"], ["24", "dars"], ["45", "daqiqa"], ["3", "modul"]],
  modules: [
    {
      id: 1,
      color: "m1",
      title: "1-modul. Scratch: Murakkab dasturlash va o'yin mexanikasi",
      weeks: "1–4-hafta",
      desc: "O'z bloklarimiz (funksiyalar), parametrlar, gravitatsiya va sakrash fizikasi, klonlar va ro'yxatlar (massivlar).",
      progNote: "Ranglar Scratch bloklariga mos: sariq — hodisalar, to'q sariq — boshqaruv, ko'k — harakat, binafsha — ko'rinish, havorang — sezgi, qizg'ish — o'zgaruvchi va ro'yxat, yashil — operatorlar."
    },
    {
      id: 2,
      color: "m2",
      title: "2-modul. Tinkercad: 3D modellashtirish asoslari",
      weeks: "5–8-hafta",
      desc: "3D fazoda ishlash, shakllarni o'lchash, guruhlash, teshiklar o'yish, tekislash va shaxsiy brelok hamda 3D buyumlar loyihalash."
    },
    {
      id: 3,
      color: "m3",
      title: "3-modul. Dizayn va kod integratsiyasi / Yakuniy loyihalar",
      weeks: "9–12-hafta",
      desc: "3D modellarni Scratch'ga sprayt sifatida o'tkazish, psevdo-3D effektlar, 3D bosib chiqarish asoslari va yakuniy mustaqil loyiha."
    }
  ],
  lessons: [
    {
      n: 1, mod: 1, t: "Scratch 3.0: Koordinatalar va silliq harakat",
      goal: "O'quvchilar X va Y koordinata o'qlari bo'yicha harakatni chuqurlashtiradi, spraytning sahnada silliq siljishi va chegaralardan qaytish mexanikasini o'rganadi.",
      out: ["X (-240..240) va Y (-180..180) koordinatalarini to'g'ri ko'rsatadi", "Klaviatura strelkalari bilan silliq harakat skriptini tuzadi", "Sprayt yo'nalishini (direction) va aylanish uslubini to'g'ri sozlaydi"],
      need: ["Kompyuterlar, Scratch 3.0", "Koordinata to'ri foni (X-Y Grid)"],
      plan: [["5", "Tanishuv va 4-sinf rejasi: bu yil Scratch'da haqiqiy o'yinlar fizikasi va Tinkercad'da 3D modellashni o'rganamiz."], ["8", "Tezkor takrorlash: X va Y o'qlari. Markaz (0, 0), o'ng (+), chap (-), yuqori (+), past (-)."], ["5", "Silliq harakat sir-asrorlari: `if key pressed` sikl ichida."], ["20", "Amaliy ish: Silliq boshqariladigan kosmik kema."], ["4", "Test."], ["3", "Xulosa va saqlash."]],
      tips: ["`when key pressed` hodisasi bosilganda dastlab bitta sakrab, keyin sekin davom etadi. Silliq harakat uchun `forever` ichida `if key pressed? then change x by ...` usulini o'rgating.", "Sprayt teskari to'ntarilib qolmasligi uchun `set rotation style left-right` blokini eslatib o'ting."],
      pt: "Amaliy ish: «Fazoviy parvoz»",
      steps: [
        "Scratch'da yangi loyiha oching va sahnaga `X-Y Grid` fonini qo'ying.",
        "Mushuk o'rniga kosmik kema yoki uchuvchi sprayt tanlang. Hajmini 50% qiling.",
        "Boshlang'ich joylashuv: `when green flag clicked` → `go to x: 0 y: 0` → `set rotation style left-right`.",
        "`forever` sikli yarating va uning ichiga 4 ta `if` bloki qo'ying.",
        "O'ng strelka: `if <key (right arrow) pressed?> then` → `change x by 8` → `point in direction 90`.",
        "Chap strelka: `if <key (left arrow) pressed?> then` → `change x by -8` → `point in direction -90`.",
        "Tepaga: `if <key (up arrow) pressed?> then` → `change y by 8`.",
        "Pastga: `if <key (down arrow) pressed?> then` → `change y by -8`.",
        "Yashil bayroqchani bosing va harakat qanchalik silliq ekanini sinab ko'ring!"
      ],
      extra: ["Agar sprayt ekrandan chiqib ketmasligi uchun `if on edge, bounce` blokini qo'shing.", "Tezlikni o'zgaruvchiga chiqarib, Shift tugmasi bosilganda tezlikni 15 ga oshiring (turbo rejim)."],
      ask: [
        ["Scratch sahnasining markazi qaysi koordinatada?", "X: 0, Y: 0 nuqtasida."],
        ["Spraytni o'ngga surish uchun qaysi koordinata o'zgaradi?", "X koordinatasi musbat songa oshadi (`change x by 10`)."],
        ["Pastga tushish uchun Y qanday o'zgaradi?", "Y manfiy songa kamayadi (`change y by -10`)."],
        ["Nega `when key pressed` o'rniga `if key pressed` ishlatdik?", "Harakat uzluksiz va silliq bo'lishi uchun."]
      ],
      quiz: [
        ["Scratch sahnasining eng yuqori Y nuqtasi necha?", "180", "240", "360"],
        ["Sahnaning eng chap X nuqtasi necha?", "-240", "0", "-180"],
        ["Spraytni silliq boshqarish uchun bloklar qayerda turishi kerak?", "forever sikli ichida", "when space key pressed ostida", "Faqat bir marta"],
        ["Qahramon boshini pastga qilib teskari aylanmasligi uchun qaysi blok kerak?", "set rotation style left-right", "turn 180 degrees", "point in direction 0"],
        ["X koordinatasi nimani bildiradi?", "Gorizontal (gorizont bo'ylab) o'rinni", "Vertikal (balandlik) o'rnini", "Hajmni"]
      ],
      game: {
        type: "memory",
        title: "Juftini top: Koordinatalar va harakat",
        pairs: [
          ["(0, 0)", "Sahna markazi"],
          ["X o'qi", "Gorizontal (chap-o'ng)"],
          ["Y o'qi", "Vertikal (yuqori-past)"],
          ["X: 240", "Eng o'ng chet"],
          ["Y: 180", "Eng yuqori chet"],
          ["Silliq harakat", "forever + if pressed"]
        ]
      },
      topic: [
        { e: "🌐", h: "Koordinatalar — xaritadagi manzil", p: "Scratch sahnasi — 480 qadam kenglik va 360 qadam balandlikdagi tekislik. Har bir nuqtaning ikkita aniq manzili bor: X (eni) va Y (balandligi).", q: "Agar X=100, Y=100 bo'lsa, qahramon qaysi burchakda turadi?", a: "O'ng yuqori burchakda." },
        { e: "🎮", h: "Silliq o'yin boshqaruvi", p: "Professional o'yinlarda qahramon tugmani bosib turganda to'xtovsiz yurishi kerak. Bunga `forever` sikli va `key pressed?` sezgi bloki orqali erishiladi.", q: "Nega oddiy hodisa bloki kechikish bilan ishlaydi?", a: "Operatsion tizim bitta bosish va ushlab turishni ajratguncha kichik pauza qiladi." },
        { e: "🚀", h: "4-sinfda bizni nimalar kutmoqda?", p: "Bu yil biz faqat spraytlarni yurgizmaymiz: o'z bloklarimizni yaratamiz, fizika (sakrash) qonunlarini dasturlaymiz va Tinkercad'da o'z 3D modellarimizni loyihalaymiz!", q: "3D nima degani?", a: "Uch o'lchamli: uzunligi, kengligi va balandligi bor jism." }
      ],
      prog: [{ t: "Silliq harakat skripti", b: ["y:🏳 Bayroq bosilganda", "b:x: 0 y: 0 ga bor", "o:🔁 Doim [", "o:Agar", "s:o'ng strelka bosilsa", "b:x ni 8 ga o'zgartir", "o:Agar", "s:chap strelka bosilsa", "b:x ni -8 ga o'zgartir", "o:]"] }],
      video: [["wY9kQz1B-lM", "Scratch 3.0: Koordinatalar bilan ishlash"], ["AKUtkYZTUfo", "Scratch'da silliq harakat yaratish"]],
      yq: "scratch koordinatalar x y harakat",
      hw: ["Daftaringizga koordinata to'rini chizing va (50, 50), (-100, 50), (0, -100) nuqtalarini belgilang."]
    },
    {
      n: 2, mod: 1, t: "O'z bloklarimiz (My Blocks): Funksiyalar",
      goal: "O'quvchilar «My Blocks» bo'limi orqali shaxsiy blok (funksiya) yaratishni, kodni ixchamlashtirish va takrorlanishlarning oldini olishni o'rganadi.",
      out: ["Funksiya nima ekanini va nima uchun kerakligini tushuntiradi", "Scratch'da yangi blok e'lon qiladi (`define block`)", "Bitta blok yordamida takrorlanuvchi geometrik shakl yoki harakatni chaqiradi"],
      need: ["Kompyuterlar, Scratch 3.0, «Pen» (Qalam) kengaytmasi"],
      plan: [["6", "Muammo: agar bir xil kodni 10 marta yozish kerak bo'lsa nima qilamiz? Nusxalashmi yoki bitta nom berishmi?"], ["8", "Yangi mavzu: «O'z bloklarimiz» (My Blocks). Blokni yaratish va ta'riflash (`define`)."], ["23", "Amaliy ish: Geometrik naqshlar chizuvchi o'z blokimiz."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
      tips: ["Dasturlashdagi asosiy qoida: DRY — Don't Repeat Yourself (O'zingni takrorlama). O'quvchilarga bu qoidani oddiy tilda tushuntiring.", "Blok nomini uning nima qilishiga qarab aniq nomlashni odat qildiring: masalan, «sakrash», «kvadrat chiz»."],
      pt: "Amaliy ish: «Kvadrat chizuvchi blok»",
      steps: [
        "Scratch chap pastki burchagidan «Pen» (Qalam) kengaytmasini qo'shing.",
        "«My Blocks» (Mening bloklarim) bo'limiga kiring va «Make a Block» tugmasini bosing.",
        "Blok nomiga `kvadrat chiz` deb yozing va OK bosing. Sahnada pushti rangli `define kvadrat chiz` bloki paydo bo'ladi.",
        "Ta'rif ostiga quyidagilarni ulang: `repeat 4` → `move 80 steps` → `turn 90 degrees`.",
        "Asosiy skriptda: `when green flag clicked` → `erase all` → `pen down`.",
        "Endi yaratgan pushti `kvadrat chiz` blokimizni oling va uni 3 marta turli joylarda chaqiring!",
        "Qarang: 20 ta blok o'rniga atigi 3 ta chaqiruv bilan 3 ta kvadrat chizildi."
      ],
      extra: ["«aylana chiz» nomli yangi blok yarating (`repeat 36 [move 10, turn 10]`).", "Blok oxiriga `change pen color by 20` qo'shib, rang-barang naqsh hosil qiling."],
      ask: [
        ["Dasturlashda funksiya nima?", "Nom berilgan va qayta-qayta ishlatiladigan buyruqlar to'plami."],
        ["«O'z bloklarimiz» ning eng katta foydasi nima?", "Kodni qisqartiradi, chalkashlikni yo'qotadi va o'qishni osonlashtiradi."],
        ["`define` bloki nimani bildiradi?", "Bu blok qanday ishlashini tushuntiruvchi ta'rif."],
        ["Ta'riflangan blokni necha marta ishlatish mumkin?", "Xohlagancha — 1 marta, 10 marta yoki 100 marta."]
      ],
      quiz: [
        ["Scratch'da o'z blokimiz qaysi rangda bo'ladi?", "Pushti (qizg'ish)", "Sariq", "Ko'k"],
        ["Blok yaratganda qaysi blok avtomatik hosil bo'ladi?", "define (ta'riflash)", "when clicked", "forever"],
        ["Nega o'z bloklarimizdan foydalanamiz?", "Kodni takrorlamaslik va tartibli qilish uchun", "Scratch tezroq yuklanishi uchun", "Chiroyli ko'rinishi uchun"],
        ["Yaratilgan blokni chaqirmasa nima bo'ladi?", "U umuman ishlamaydi", "O'zi ishga tushadi", "Xato beradi"],
        ["Qalam bilan chizish uchun qaysi kengaytma kerak?", "Pen", "Music", "Video Sensing"]
      ],
      game: {
        type: "order",
        title: "Tartibga sol: Shaxsiy blok yaratish",
        steps: [
          "«My Blocks» bo'limiga kirish",
          "«Make a Block» tugmasini bosish",
          "Blok nomini yozish (masalan: sakrash)",
          "«define» bloki ostiga bajariladigan buyruqlarni terish",
          "Asosiy dasturda yangi blokni chaqirish"
        ]
      },
      topic: [
        { e: "🧱", h: "Funksiya — bitta tayyor g'isht", p: "Tasavvur qiling, har safar devor qurganda loy qormaysiz, balki tayyor g'ishtdan foydalanasiz. Dasturlashda ham buyruqlar guruhiga nom berib, tayyor blok sifatida ishlatamiz.", q: "Hayotda qanday funksiyalarga misol keltirasiz?", a: "«Choy damla» — bu bitta so'z, lekin ichida suv qaynatish, quruq choy solish va damlash qadamlari bor." },
        { e: "🧹", h: "Tartibli kod — usta dasturchi belgisi", p: "Katta loyihalarda yuzlab bloklar bo'ladi. Agar ularni bloklarga ajratmasangiz, xatoni topish juda qiyinlashadi. O'z bloklaringiz kodni toza va tushunarli saqlaydi.", q: "Katta skriptni qanday qismlarga bo'lish mumkin?", a: "Harakat, hujum, sakrash, xavf signali kabi bo'laklarga." },
        { e: "⚡", h: "Run without screen refresh", p: "Yangi blok yaratayotganda «Run without screen refresh» degan parametr bor. U belgilansa, blok ichidagi sikl bir lahzada (ekranni yangilamasdan) chaqmoqdek tez bajariladi!", q: "Bu xususiyat qachon asqotadi?", a: "Katta naqsh yoki labirintni bir soniyada chizib olish kerak bo'lganda." }
      ],
      prog: [{ t: "O'z blokimizni ta'riflash va chaqirish", b: ["g:define kvadrat", "o:🔁 4 marta [", "b:80 qadam yur", "b:↻ 90 gradus buril", "o:]", "y:▶ Bayroq bosilganda", "g:kvadrat", "b:100 qadam yur", "g:kvadrat"] }],
      video: [["wz5qGqZ7u88", "Scratch 3.0: Custom Blocks (My Blocks)"], ["a68_g2IpepU", "Scratch'da funksiyalar bilan ishlash"]],
      yq: "scratch 3.0 my blocks make a block",
      hw: ["Uyingizdagi ertalabki tartibingizni funksiya sifatida daftarga yozing: «ertalabki_mashq» blokining ichida qanday 4 ta buyruq bor?"]
    },
    {
      n: 3, mod: 1, t: "Parametrli bloklar: universal funksiyalar",
      goal: "O'quvchilar funksiyalarga parametr (son yoki matn) uzatishni, har safar turli o'lcham va xususiyatga ega universal bloklar tuzishni o'rganadi.",
      out: ["Parametr nima ekanini va u qanday ishlashini tushunadi", "Blok yaratishda «Add an input (number or text)» qo'shadi", "Bitta blok bilan kichik va katta shakllarni chizadi"],
      need: ["Kompyuterlar, Scratch 3.0, «Pen» kengaytmasi"],
      plan: [["5", "O'tgan darsni eslash: kvadrat blokimiz har doim 80 o'lchamda chizdi. Katta yoki kichik qilish uchun nima kerak?"], ["8", "Yangi mavzu: parametrlar — blok ichiga uzatiladigan son."], ["22", "Amaliy ish: `shakl(tomonlar, olcham)` universal bloki."], ["5", "Viktorina va muhokama."], ["5", "Xulosa va saqlash."]],
      tips: ["Parametrni matematikadagi o'zgaruvchi $x$ bilan solishtiring: u bo'sh quticha bo'lib, unga qanday son solsak, blok o'sha son bilan ishlaydi.", "Ko'pburchakning tashqi burchagi har doim $360 / n$ ga teng ekanini ko'rsating (uchburchak uchun $360/3=120$, beshburchak uchun $360/5=72$)."],
      pt: "Amaliy ish: «Sehrli universal shakl chizgich»",
      steps: [
        "«My Blocks» bo'limida «Make a Block» ni bosing.",
        "Blok nomiga `ko'pburchak` deb yozing, so'ng «Add an input (number/text)» tugmasini bosing va unga `tomonlar` deb nom bering.",
        "Yana «Add an input» ni bosing va unga `olcham` deb nom bering. OK bosing.",
        "`define ko'pburchak (tomonlar) (olcham)` bloki ostiga quyidagilarni yozing:",
        "`repeat (tomonlar)` → `move (olcham) steps` → `turn right (360 / tomonlar) degrees`.",
        "Asosiy skriptda sinang: `ko'pburchak (3) (100)` — uchburchak!",
        "`ko'pburchak (4) (80)` — kvadrat!",
        "`ko'pburchak (5) (60)` — beshburchak, `ko'pburchak (36) (10)` — doira!",
        "Bitta universal blok bilan butun geometriya olamini chizamiz."
      ],
      extra: ["Parametrga rang kiritishni ham qo'shing: `shakl(tomonlar, olcham, rang)`.", "Ushbu blok yordamida bir-birining ichida joylashgan konsentrik naqshlar chizing."],
      ask: [
        ["Parametr nima?", "Blok chaqirilganda unga uzatiladigan aniq qiymat (son yoki so'z)."],
        ["Nega parametrdan foydalanamiz?", "Har xil o'lchamlar uchun 10 ta alohida blok ochmasdan, bitta universal blok yasash uchun."],
        ["Doira chizish uchun `tomonlar` parametriga qanday son beramiz?", "36 yoki undan katta son (kichik qadamlar bilan)."],
        ["Ko'pburchak burilish burchagi qanday hisoblanadi?", "360 ni tomonlar soniga bo'lish orqali (`360 / tomonlar`)."]
      ],
      quiz: [
        ["Parametrli blokda qaysi imkoniyat bor?", "Chaqirayotganda turli sonlarni kiritish", "Faqat bir xil son bilan ishlash", "Blok rangini o'zgartirish"],
        ["Beshburchak chizish uchun burilish burchagi necha gradus?", "72 gradus (360 / 5)", "90 gradus", "120 gradus"],
        ["Parametr qayerga joylashadi?", "Blok nomining ichidagi doiracha katakka", "Faqat ekranga", "Sahnaning burchagiga"],
        ["Agar `ko'pburchak (3) (100)` chaqirilsa, nima chiziladi?", "Teng tomonli uchburchak", "Kvadrat", "Yulduzcha"],
        ["Matematik amallar bo'limidagi qaysi blok burchakni hisoblashda yordam beradi?", "Bo'lish bloki (/)", "Qo'shish bloki (+)", "Tenglik bloki (=)"]
      ],
      game: {
        type: "quiz",
        title: "Test: Qaysi parametr qanday shakl beradi?",
        items: [
          ["tomonlar: 4, olcham: 50 parametrida nima chiziladi?", "Kvadrat", "Uchburchak", "Doira"],
          ["tomonlar: 3, olcham: 100 parametrida nima chiziladi?", "Uchburchak", "Oltiburchak", "Beshburchak"],
          ["tomonlar: 6 parametrida burilish burchagi qancha bo'ladi?", "60 gradus", "90 gradus", "45 gradus"],
          ["Doira chizish uchun tomonlar soni qanday bo'lishi kerak?", "Katta son (masalan, 36)", "Faqat 2", "Faqat 1"]
        ]
      },
      topic: [
        { e: "🎛️", h: "Parametr — buyruqqa sozlama berish", p: "Mikroto'lqinli pechda «Isitish» degan bitta tugma bor, lekin unga vaqt (masalan, 2 daqiqa) kiritasiz. Vaqt — bu parametr. Bloklarimiz ham shunday sozlanadi.", q: "O'yinlarda qanday parametrlarni ko'rgansiz?", a: "Zarar miqdori, sakrash kuchi, yugurish tezligi." },
        { e: "📐", h: "Matematika san'atga aylanadi", p: "Har qanday to'g'ri ko'pburchakning tashqi burchaklari yig'indisi 360 gradus. Shuning uchun `360 / n` formulasi yordamida istalgan shaklni chizish mumkin.", q: "Sakkizburchakning burchagi necha gradus?", a: "360 / 8 = 45 gradus." },
        { e: "💡", h: "Kelajak dasturchisi kodi", p: "Professional dasturchilar (Python, JavaScript) barcha funksiyalarini argumentlar (parametrlar) bilan yozadilar. Biz hozirdan shu tamoyilni o'rganyapmiz!", q: "Bitta funksiya ko'p parametrlarga ega bo'lishi mumkinmi?", a: "Ha, masalan: `mashina_chiz(rang, tezlik, gildirak_soni)`." }
      ],
      prog: [{ t: "Parametrli universal shakl bloki", b: ["g:define shakl (n) (uzunlik)", "o:🔁 (n) marta [", "b:(uzunlik) qadam yur", "b:↻ (360 / n) gradus buril", "o:]", "y:▶ Bayroq bosilganda", "g:shakl (3) (120)", "g:shakl (6) (60)"] }],
      video: [["P7t_V6tC9gM", "Scratch: Custom Blocks with Inputs"], ["2e3Z2N_Cj3g", "Scratch 3.0: Parametrli bloklar"]],
      yq: "scratch custom block with input parameters",
      hw: ["Daftaringizga `sakrash(balandlik)` bloki uchun reja yozing: qahramon qanday parametrlarga qarab sakrashi kerak?"]
    },
    {
      n: 4, mod: 1, t: "O'yin fizikasi: Gravitatsiya va sakrash",
      goal: "O'quvchilar o'yinlarda tortishish kuchi (gravitatsiya), yerga tushish tezlanishi va platformer uslubidagi realistik sakrash fizikasini yaratadi.",
      out: ["Gravitatsiya o'yinda qanday ishlashini tushunadi", "`tezlik_y` o'zgaruvchisini yaratadi va har qadamda kamaytirib boradi", "Yerga tegish (`touching color`) shartini to'g'ri dasturlaydi"],
      need: ["Kompyuterlar, Scratch 3.0", "Platformer qahramoni va yer foni"],
      plan: [["6", "Nega Mario yoki qahramonlar havoda qolib ketmaydi? Haqiqiy dunyoda bizni yer nima bilan tortadi?"], ["8", "Tezlanish va o'zgaruvchi: `tezlik_y` boshida 0, sakraganda +12, tushganda har soniya kamayadi."], ["23", "Amaliy ish: Platformer sakrashi va pol."], ["4", "«Saralash» o'yini."], ["4", "Xulosa va test."]],
      tips: ["Gravitatsiya formulasi: har qadamda `change y by (tezlik_y)`, keyin `change tezlik_y by -1` (pastga tortish).", "Agar qahramon polga botib qolsa, `repeat until not touching ground [change y by 1]` bilan pol ustiga chiqarib qo'yish kerak."],
      pt: "Amaliy ish: «Haqiqiy sakraydigan qahramon»",
      steps: [
        "Sahnaning pastki qismiga yashil pol (platforma) chizing.",
        "Qahramon tanlang va «Variables» (O'zgaruvchilar) bo'limidan `tezlik_y` nomli o'zgaruvchi oching.",
        "Boshlash: `when green flag clicked` → `go to x: 0 y: 100` → `set tezlik_y to 0`.",
        "`forever` sikli ichida: `change y by (tezlik_y)`.",
        "Yerga tushish: `change tezlik_y by -1` (bu gravitatsiya kuchi!).",
        "Polga tekkanda: `if <touching color (yashil)?> then` → `set tezlik_y to 0` → pol ustiga chiqish.",
        "Sakrash: yerda turganda `if <key (space) pressed?> then` → `set tezlik_y to 12`.",
        "Sinab ko'ring: bo'sh joy tugmasini bosing — qahramon sakraydi va ohista yerga tushadi!"
      ],
      extra: ["Ikki marta sakrash (Double Jump) mexanikasini qo'shing.", "Havoda harakatlanayotganda chap va o'ng strelkalar bilan oldinga surilish imkonini bering."],
      ask: [
        ["O'yinlarda gravitatsiya qanday hosil qilinadi?", "Har qadamda vertikal tezlikni kamaytirib borish orqali (`change tezlik_y by -1`)."],
        ["Sakraganda `tezlik_y` ga qanday qiymat beriladi?", "Musbat son (masalan, 12 yoki 15)."],
        ["Qahramon qachon sakray olishi kerak?", "Faqat polga tegib turganda (aks holda u cheksiz osmonga uchib ketadi)."],
        ["Polga tekkanda `tezlik_y` necha bo'lishi kerak?", "0 bo'lishi kerak (harakat to'xtaydi)."]
      ],
      quiz: [
        ["Gravitatsiya qahramonni qaysi tomonga tortadi?", "Pastga (-Y)", "Yuqoriga (+Y)", "O'ngga (+X)"],
        ["Sakrash uchun `tezlik_y` nima qilinadi?", "Musbat songa o'rnatiladi (masalan: 12)", "0 ga tenglashtiriladi", "Manfiy qilinadi"],
        ["Agar polga tekkanini tekshirmasak nima bo'ladi?", "Qahramon ekrandan pastga tushib ketadi", "Qahramon sakray olmaydi", "O'yin muzlaydi"],
        ["Har qadamda `tezlik_y` dan 1 ayirilsa, nima sodir bo'ladi?", "Pastga qarab tezlanish (haqiqiy fizika)", "Harakat to'xtaydi", "Qahramon tepaga uchadi"],
        ["Bo'sh joy (space) bosilganda nima sodir bo'ladi?", "Sakrash boshlanadi", "O'yin to'xtaydi", "Fon o'zgaradi"]
      ],
      game: {
        type: "sort",
        title: "Tezlik_Y qanday o'zgaradi?",
        desc: "Qahramonning harakatiga qarab tezlik_y qiymatini guruhlang:",
        cats: ["Musbat (+)", "Manfiy (-) yoki 0"],
        items: [
          ["Sakrash lahzasi (yuqoriga sakradi)", 0],
          ["Yerga tushib, polda tinch turibdi", 1],
          ["Pastga qulamoqda", 1],
          ["Raketa kabi yuqoriga uchmoqda", 0],
          ["Sakrashning eng yuqori nuqtasida bir zum", 1],
          ["Polga tegdi", 1]
        ]
      },
      topic: [
        { e: "🍎", h: "Nyuton qonuni o'yin ichida", p: "Daraxtdan olma yerga tushgani kabi, o'yindagi qahramon ham pastga tortilishi kerak. Biz fizika qonunini atigi ikkita blok bilan yaratdik: `change y by tezlik` va `change tezlik by -1`.", q: "Oydagi gravitatsiya yer nikidan qanday farq qiladi?", a: "Oyda gravitatsiya 6 marta kuchsizroq, u yerda balandroq sakrash mumkin." },
        { e: "🦘", h: "Realistik sakrash siri", p: "Agar shunchaki `change y by 100` qilsak, qahramon xuddi teleportatsiya bo'lgandek ko'rinadi. Silliq sakrash esa sekinlashish va tezlanish orqali hosil bo'ladi.", q: "Sakrash balandligini qanday oshirish mumkin?", a: "`tezlik_y` ning boshlang'ich sonini kattalashtirish orqali (masalan, 12 o'rniga 16)." },
        { e: "🧱", h: "Platformer nima?", p: "Platformer — qahramon turli platformalar ustida sakrab, to'siqlardan o'tadigan eng mashhur o'yin janri (Super Mario, Sonic).", q: "Platformerda pol qanday aniqlanadi?", a: "Rang sensori (`touching color`) yoki spraytga tegish orqali." }
      ],
      prog: [{ t: "Gravitatsiya va sakrash fizikasi", b: ["y:▶ Bayroq bosilganda", "v:tezlik_y = 0", "o:🔁 Doim [", "b:y ni (tezlik_y) ga o'zgartir", "v:tezlik_y ni -1 ga o'zgartir", "o:Agar", "s:yashil polga tegsa", "v:tezlik_y = 0", "o:Agar", "s:bo'sh joy bosilsa", "v:tezlik_y = 12", "o:]"] }],
      video: [["r_dY3nNqFzA", "Scratch 3.0 Platformer Tutorial: Gravity & Jumping"], ["T_8wM6V2b7w", "Scratch'da sakrash fizikasi"]],
      yq: "scratch platformer tutorial gravity jumping physics",
      hw: ["Daftaringizga bitta qahramon va 3 xil balandlikdagi platforma chizing. Sakrash yo'lini yoy chizig'i bilan ko'rsating."]
    },
    {
      n: 5, mod: 1, t: "Klonlar (Clones): Cheksiz nusxalar",
      goal: "O'quvchilar `create clone of myself` va `when I start as a clone` bloklari yordamida obyektlardan ko'p sonli mustaqil nusxalar yaratishni va xotirani tozalashni o'rganadi.",
      out: ["Asl sprayt va klon o'rtasidagi farqni tushuntiradi", "Avtomatik tushuvchi yulduzlar yoki dushmanlar klonini yaratadi", "Vazifasi tugagan klonni `delete this clone` bilan o'chirishni biladi"],
      need: ["Kompyuterlar, Scratch 3.0", "Yulduzcha yoki tosh sprayti"],
      plan: [["5", "Muammo: agar o'yinda 50 ta meteorit tushishi kerak bo'lsa, 50 ta sprayt chizamizmi?"], ["8", "Yangi mavzu: Klonlash. Bitta sprayt — yuzlab nusxalar. Klonning tug'ilishi va o'chirilishi."], ["23", "Amaliy ish: «Yulduzlar yomg'iri» o'yini."], ["5", "Viktorina va muhokama."], ["4", "Xulosa va saqlash."]],
      tips: ["Asosiy spraytni `hide` qilib, faqat uning klonlarini `show` qilish yaxshi odatdir — shunda original sprayt ekranda xalaqit bermaydi.", "Eng muhim qoida: `delete this clone` blokini unutmang! Scratch maksimal 300 ta klon yarata oladi, o'chirilmasa o'yin qotib qoladi."],
      pt: "Amaliy ish: «Yulduzlar yomg'iri»",
      steps: [
        "Sahnaga tungi osmon fonini qo'ying va bitta kichik yulduzcha spraytini tanlang.",
        "Asosiy sprayt skripti: `when green flag clicked` → `hide` → `forever` sikli ichida:",
        "`wait (pick random 0.5 to 1.5) seconds` → `create clone of myself`.",
        "Klonning hayoti: yangi hodisa bloki — `when I start as a clone`.",
        "Boshlang'ich joy: `show` → `go to x: (pick random -220 to 220) y: 180`.",
        "Pastga tushish: `repeat until <y position < -160>` → `change y by -6`.",
        "Pastga yetib borgach: `delete this clone` (klon o'chadi va kompyuter xotirasini bo'shatadi!).",
        "Sinang: osmondan tasodifiy joylardan to'xtovsiz yulduzlar yog'iladi!"
      ],
      extra: ["Savat qo'shing: agar klon savatga tegsa, ball oshsin va klon yo'qolsin.", "Yulduzlar tushish tezligini har xil qiling (`pick random -4 to -10`)."],
      ask: [
        ["Klon nima?", "Asl spraytdan dastur orqali nusxalangan mustaqil nusxa."],
        ["Klon paydo bo'lganda qaysi blok ishga tushadi?", "`when I start as a clone` bloki."],
        ["Nega `delete this clone` blokini ishlatish shart?", "Ekranni tozalash va Scratch xotirasi to'lib qotib qolishining oldini olish uchun."],
        ["Asl sprayt bilan uning klonlari bir xil kodni bajaradimi?", "Yo'q, klonlar `when I start as a clone` ostidagi o'z kodini bajaradi."]
      ],
      quiz: [
        ["Klon yaratuvchi blok qaysi?", "create clone of myself", "duplicate sprite", "stamp"],
        ["Klon ishga tushganda qaysi blok boshlaydi?", "when I start as a clone", "when green flag clicked", "when this sprite clicked"],
        ["Vazifasi tugagan klon nima qilinadi?", "delete this clone bilan o'chiriladi", "hide qilib qoldiriladi", "boshqa joyga ko'chiriladi"],
        ["Scratch bitta loyihada birdaniga nechta klon yarata oladi?", "300 tagacha", "10 tagacha", "Cheksiz"],
        ["Asl sprayt ko'rinmasligi uchun nima qilinadi?", "hide (yashirish) bloki ishlatiladi", "O'chirib tashlanadi", "Rangi oq qilinadi"]
      ],
      game: {
        type: "quiz",
        title: "Test: Klonlar qoidasi",
        items: [
          ["Klon yaratish buyrug'i qaysi bo'limda?", "Control (Boshqaruv)", "Motion (Harakat)", "Looks (Ko'rinish)"],
          ["Klonlar qachon yo'q bo'lishi kerak?", "Vazifasini bajarib, ekrandan chiqqanda", "Hech qachon", "O'yin boshlanganda"],
          ["`pick random -220 to 220` nima beradi?", "Tasodifiy gorizontal koordinata", "Doim bitta nuqta", "Balandlikni"]
        ]
      },
      topic: [
        { e: "👥", h: "Klon — bir zumda yuzlab yordamchi", p: "O'yinlarda otilgan yuzlab o'qlar, yog'ayotgan qor parchalari yoki yugurib kelayotgan raqiblarning hammasi klonlardir. Dasturchi faqat bitta namuna yasaydi, qolganini kod ko'paytiradi.", q: "Yana qaysi o'yinlarda klonlar ishlatiladi?", a: "Minecraft'da zombi to'dalari, tank o'yinlarida snaryadlar." },
        { e: "🗑️", h: "Raqamli tozalik — xotirani asrash", p: "Agar har bir yaratilgan klon ekrandan chiqib ketgach o'chirilmasa, ular Scratch xotirasida to'planib qoladi va o'yin sekinlashadi. Shuning uchun `delete this clone` har bir klonning oxirgi buyrug'i bo'lishi shart.", q: "Scratch limiti necha dona?", a: "Bir vaqtning o'zida maksimal 300 ta klon." },
        { e: "🎯", h: "Har bir klonning o'z hayoti bor", p: "Klon paydo bo'lganda o'z o'lchami, o'z tezligi va o'z koordinatasiga ega bo'lishi mumkin. Ular bir xil ko'rinsa ham, mustaqil harakat qiladi.", q: "Klonlarni qanday qilib turlicha qilish mumkin?", a: "Kostyumini yoki rang effektini tasodifiy o'zgartirish orqali." }
      ],
      prog: [{ t: "Klon yaratish va uni boshqarish", b: ["y:▶ Bayroq bosilganda", "p:yashirin", "o:🔁 Doim [", "o:⏳ 1 soniya kut", "o:o'zimning klonimni yarat", "o:]", "y:👥 Men klon bo'lib boshlaganimda", "p:ko'rin", "b:x: tasodifiy y: 180 ga bor", "o:🔁 to y < -160 gacha [", "b:y ni -5 ga o'zgartir", "o:]", "o:bu klonni o'chir"] }],
      video: [["j_eA6dO2P_g", "Scratch 3.0: Clones Tutorial"], ["mK8E8V3o6f8", "Scratch'da klonlar bilan ishlash"]],
      yq: "scratch clone tutorial create clone of myself",
      hw: ["Uyingizdagi qor parchalari tushishi loyihasi uchun algoritm yozing: qor qayerdan boshlanadi, qanday tushadi va qayerda eriydi?"]
    },
    {
      n: 6, mod: 1, t: "Ro'yxatlar (Lists): Ma'lumotlar ombori",
      goal: "O'quvchilar ro'yxat (massiv) tushunchasini, oddiy o'zgaruvchi bilan ro'yxatning farqini, element qo'shish, o'chirish va qidirish amallarini o'rganadi.",
      out: ["Ro'yxat va oddiy o'zgaruvchi farqini tushuntiradi", "Scratch'da yangi ro'yxat yaratadi va elementlar qo'shadi", "O'yinchining to'plagan buyumlari inventarini dasturlaydi"],
      need: ["Kompyuterlar, Scratch 3.0"],
      plan: [["6", "Hayotiy misol: bozorlik ro'yxati yoki o'quvchilar jurnali. Bitta daftarga faqat bitta ism yozamizmi yoki ko'pmi?"], ["8", "Yangi mavzu: «Make a List». Ro'yxat elementlari, ularning indeksi (1, 2, 3...)."], ["22", "Amaliy ish: «Sehrgar sumkasi» (O'yin inventari)."], ["5", "«Saralash» o'yini."], ["4", "Xulosa va test."]],
      tips: ["O'zgaruvchi — bitta quti (bitta narsa sig'adi). Ro'yxat esa — javon yoki qutilar qatori (raqamlangan bo'limlari bor). Bu vizual o'xshatish bolalarga juda tez tushuniladi.", "Ro'yxat boshlanishida `delete all of list` blokini ishlatishni eslatib turing, aks holda har safar bayroq bosilganda ro'yxat eskilari ustiga qo'shilib ketaveradi."],
      pt: "Amaliy ish: «Sehrgar inventari»",
      steps: [
        "«Variables» bo'limiga kiring va «Make a List» tugmasini bosing.",
        "Ro'yxat nomiga `sumka` deb yozing. Ekranda bo'sh kulrang ro'yxat jadvali ochiladi.",
        "Boshlash: `when green flag clicked` → `delete all of sumka` (avvalgi narsalarni tozalash).",
        "Sahnaga 3 ta turli buyum spraytini qo'ying: Olma, Kalit, Sehrli tayoqcha.",
        "Har bir buyumga skript yozing: `when this sprite clicked`:",
        "`add (buyum nomi) to sumka` → `say (Olingan!) for 1 second` → `hide`.",
        "Sehrgar spraytiga skript yozing: `when space key pressed` → `say (join [Sumkada jami: ] (length of sumka)) for 2 seconds`.",
        "Buyumlarni bosing — ular sahnadan yo'qolib, sumka ro'yxatiga tartib bilan tushadi!"
      ],
      extra: ["Agar buyum allaqachon sumkada bo'lsa, `if <sumka contains (buyum)?> then` ogohlantirish bersin.", "Sumkadagi ma'lum buyumni ishlatib, uni ro'yxatdan o'chirish (`delete 1 of sumka`) tugmasini qo'shing."],
      ask: [
        ["Oddiy o'zgaruvchi bilan ro'yxatning nima farqi bor?", "O'zgaruvchi bitta qiymat saqlaydi, ro'yxat esa ko'plab tartiblangan qiymatlarni saqlaydi."],
        ["Ro'yxatdagi har bir element qanday topiladi?", "Uning tartib raqami (indeksi) bo'yicha: 1-element, 2-element..."],
        ["`length of list` bloki nimani bildiradi?", "Ro'yxatda jami nechta element borligini (uzunligini)."],
        ["O'yinlarda ro'yxatlar qayerda ishlatiladi?", "Top-o'yinchilar jadvali (Leaderboard), do'kondagi buyumlar, so'z topish o'yinlarida."]
      ],
      quiz: [
        ["Ro'yxatga yangi element qo'shish bloki qaysi?", "add ... to list", "insert ... at", "set list to"],
        ["Ro'yxatni boshida tozalash uchun qaysi blok kerak?", "delete all of list", "hide list", "clear"],
        ["Ro'yxatda ma'lum bir so'z borligini qaysi blok tekshiradi?", "list contains ...?", "item ... of list", "length of list"],
        ["Ro'yxatning 1-elementini olish uchun qaysi blok ishlatiladi?", "item 1 of list", "length of list", "add 1 to list"],
        ["Scratch'da ro'yxat qaysi rangdagi bloklar ichida?", "Qizg'ish (to'q sariq)", "Yashil", "Binafsha"]
      ],
      game: {
        type: "sort",
        title: "O'zgaruvchimi yoki Ro'yxat?",
        desc: "Qaysi ma'lumotni bitta o'zgaruvchida, qaysinisini ro'yxatda saqlash to'g'ri?",
        cats: ["Oddiy o'zgaruvchi", "Ro'yxat (List)"],
        items: [
          ["O'yinchining joriy balli (Score)", 0],
          ["Eng yaxshi 10 ta natija jadvali", 1],
          ["Qahramonning qolgan jonlari soni", 0],
          ["Sumkadagi qurollar va sehrlar to'plami", 1],
          ["O'yinchining ismi", 0],
          ["Krossvorddagi topilishi kerak bo'lgan 20 ta so'z", 1]
        ]
      },
      topic: [
        { e: "📋", h: "Ro'yxat — raqamli daftar", p: "Bitta sonni eslab qolish oson. Lekin 50 ta do'stingizning tug'ilgan kunini eslab qolish uchun ro'yxat kerak. Dasturlashda bunday qator ma'lumotlar massiv (Array yoki List) deyiladi.", q: "Telefoningizdagi kontaktlar ro'yxatmi?", a: "Ha, u ismlar va raqamlardan iborat ulkan ro'yxat." },
        { e: "🎒", h: "O'yin inventari qanday ishlaydi?", p: "RPG yoki sarguzasht o'yinlarida kalit, tanga, dori topasiz. Dastur ularni `add to inventory` orqali saqlaydi va eshikka borganingizda `if inventory contains kalit?` deb tekshiradi.", q: "Agar kalit yo'q bo'lsa nima bo'ladi?", a: "Eshik ochilmaydi va «Kalit kerak» degan xabar chiqadi." },
        { e: "🔢", h: "Indeks — har narsaning o'z o'rni bor", p: "Ro'yxatdagi har bir element raqamlangan: birinchi element — 1, ikkinchisi — 2. Istalgan paytda «3-o'rindagi elementni ol» deb buyruq berish mumkin.", q: "Ro'yxat bo'sh bo'lsa uzunligi necha bo'ladi?", a: "0 ga teng bo'ladi." }
      ],
      prog: [{ t: "Sumkaga narsa yig'ish va tekshirish", b: ["y:▶ Bayroq bosilganda", "v:sumkaning barcha elementlarini o'chir", "y:🔘 Bu sprayt bosilganda", "v:olmani sumkaga qo'sh", "p:«Olma olindi!» de 1 soniya", "p:yashirin", "y:⌨️ bo'sh joy bosilganda", "o:Agar", "s:sumkada kalit bormi?", "p:«Eshik ochildi!» de", "o:Aks holda", "p:«Eshik qulflangan» de"] }],
      video: [["F_v73T6wBv8", "Scratch 3.0: Lists Tutorial"], ["mK8E8V3o6f8", "Scratch'da ro'yxatlar bilan ishlash"]],
      yq: "scratch 3.0 lists inventory tutorial",
      hw: ["Daftaringizga o'zingizning sevimli 5 ta o'yiningiz ro'yxatini tuzing va ularni 1 dan 5 gacha raqamlang."]
    },
    {
      n: 7, mod: 1, t: "Murakkab mantiq: VA, YOKI, EMAS operatorlari",
      goal: "O'quvchilar mantiqiy operatorlar (`and`, `or`, `not`) yordamida bir vaqtning o'zida bir nechta shartlarni birlashtirishni va murakkab qarorlar qabul qilishni o'rganadi.",
      out: ["`and` (ikkalasi ham rost), `or` (kamida bittasi rost) va `not` (inkor) amallarini tushuntiradi", "Ikki shartli o'yin qoidalarini tuzadi", "Murakkab shartli darvoza ochilish mexanikasini dasturlaydi"],
      need: ["Kompyuterlar, Scratch 3.0"],
      plan: [["6", "Hayotiy mantiq: «Agar darslar tugasa VA ob-havo yaxshi bo'lsa — sayrga chiqamiz». Sayrga chiqish uchun nima bo'lishi kerak?"], ["8", "Yangi mavzu: Yashi rangli operatorlar: `and`, `or`, `not`. Rost va yolg'on."], ["22", "Amaliy ish: «Xazina xonasi darvozasi»."], ["5", "«Juftini top» o'yini."], ["4", "Xulosa va test."]],
      tips: ["Mantiq jadvalini doskaga oddiy qilib yozing: VA amali juda talabchan (ikkalasi ham to'g'ri bo'lishi shart). YOKI amali esa ko'ngilchan (bittasi to'g'ri bo'lsa ham yetarli).", "Murakkab shartlarni ichma-ich joylashtirganda qavslar o'rniga bloklarning joylashuviga e'tibor qarating."],
      pt: "Amaliy ish: «Sehrli darvoza shartlari»",
      steps: [
        "Sahnaga qahramon, qulf darvoza va ikkita kalit (oltin va kumush) qo'ying.",
        "O'zgaruvchilar oching: `oltin_kalit` va `kumush_kalit` (boshida 0 ga teng).",
        "Kalitlarga tekkanda ular o'zgaruvchini 1 ga o'zgartirsin va yashirinsin.",
        "1-darvoza (VA sharti): `if <(oltin_kalit = 1) and (kumush_kalit = 1)> then` → `say (Darvoza ochildi!)` (ikkala kalit ham kerak!).",
        "2-qoida (YOKI sharti): `if <key (space) pressed? or touching (qahramon)?> then` → signal chalinsin.",
        "3-qoida (EMAS sharti): `if <not (oltin_kalit = 1)> then` → `say (Oltin kalit yo'q!)`.",
        "Turli holatlarni sinab ko'ring: bitta kalit bilan darvoza ochiladimi? Ikkalasi bilan-chi?"
      ],
      extra: ["Uchinchi shart qo'shing: `VA vaqt > 0` bo'lsa.", "O'yinchi uchun parol kiritish mexanizmini `ask and wait` orqali qo'shing."],
      ask: [
        ["Qachon `VA` (AND) amali rost bo'ladi?", "Faqat har ikkala shart ham to'g'ri (rost) bo'lganda."],
        ["Qachon `YOKI` (OR) amali rost bo'ladi?", "Shartlardan aqalli bittasi to'g'ri bo'lsa kifoya."],
        ["`EMAS` (NOT) amali nima qiladi?", "Rostni yolg'onga, yolg'onni rostga aylantiradi (teskarisiga o'giradi)."],
        ["Agar kalit bo'lsa, lekin eshikka tegmagan bo'lsa, `kalit=1 and touching eshik?` nima beradi?", "Yolg'on (False) beradi, chunki eshikka tegmagan."]
      ],
      quiz: [
        ["`and` bloki qachon ishlaydi?", "Ikkala shart ham bajarilganda", "Faqat bittasi bajarilganda", "Hech biri bajarilmaganda"],
        ["`or` bloki qachon ishlaydi?", "Kamida bitta shart bajarilsa yetarli", "Faqat ikkalasi bajarilganda", "Faqat birinchisi bajarilganda"],
        ["`not (rost)` nimaga teng?", "Yolg'on (False)", "Rost (True)", "0 ga"],
        ["Mantiqiy bloklar Scratch'da qaysi rangda?", "Yashil (Operators)", "Moviy", "Sariq"],
        ["«Agar yomg'ir yog'sa YOKI qor yog'sa soyabon ol». Yomg'ir yog'mayapti, lekin qor yog'yapti. Soyabon olamizmi?", "Ha, olamiz", "Yo'q, olmaymiz", "Bilmayman"]
      ],
      game: {
        type: "memory",
        title: "Juftini top: Mantiq qoidalari",
        pairs: [
          ["A va B (AND)", "Ikkalasi ham to'g'ri bo'lishi shart"],
          ["A yoki B (OR)", "Bittasi to'g'ri bo'lsa yetarli"],
          ["Emas (NOT)", "Teskarisiga o'zgartiradi"],
          ["Rost va Rost", "Natija: Rost"],
          ["Rost va Yolg'on", "Natija: Yolg'on"],
          ["Rost yoki Yolg'on", "Natija: Rost"]
        ]
      },
      topic: [
        { e: "🧠", h: "Mantiq — kompyuterning fikrlashi", p: "Kompyuter faqat 0 va 1 (yolg'on va rost) bilan o'ylaydi. Murakkab qarorlar qabul qilish uchun bir nechta shartlarni `va`, `yoki`, `emas` so'zlari bilan bog'laymiz.", q: "Bankomat qanday shart bilan pul beradi?", a: "«Karta kiritilgan bo'lsa VA parol to'g'ri bo'lsa VA hisobda pul yetarli bo'lsa»." },
        { e: "⚖️", h: "VA va YOKI farqi", p: "«Muzqaymoq VA shokolad olib ber» — bu ikkalasini ham talab qilish. «Muzqaymoq YOKI shokolad olib ber» — ixtiyoriy bittasiga rozi bo'lish.", q: "Qaysi biri ko'proq imkoniyat beradi?", a: "YOKI amali, chunki bitta to'g'ri shart yetarli." },
        { e: "🛡️", h: "O'yin xavfsizligi va qoidalar", p: "O'yin qahramoni suvdan o'tishi uchun: `qayiq_bor = 1 YOKI suzish_biladi = 1`. Shunday qilib bir necha yo'l bilan yutish imkoniyati yaratiladi.", q: "O'yinchiga tanlov berish o'yinni qiziq qiladimi?", a: "Albatta, erkinlik o'yinni ancha qiziqarli qiladi." }
      ],
      prog: [{ t: "Murakkab shartlar bilan darvoza ochish", b: ["y:▶ Bayroq bosilganda", "o:🔁 Doim [", "o:Agar", "g:<(kalit = 1) va (eshikka tegdimi?)>", "p:«Darvoza ochildi!» de", "o:Aks holda", "o:Agar", "g:emas (kalit = 1)", "p:«Kalitni toping!» de", "o:]"] }],
      video: [["wY9kQz1B-lM", "Scratch Operators: AND, OR, NOT"], ["a68_g2IpepU", "Scratch mantiqiy amallar"]],
      yq: "scratch boolean operators and or not",
      hw: ["Uyingizdagi 2 ta qoidani «VA» yoki «YOKI» operatorlari orqali daftarga yozing."]
    },
    {
      n: 8, mod: 1, t: "1-modul loyihasi: «Kosmik himoyachi» (Space Shooter)",
      goal: "O'quvchilar 1-modulda o'rganilgan barcha mavzularni (silliq harakat, klonlar, o'z bloklarimiz, mantiqiy shartlar va ballar hisobi) birlashtirib, to'liq o'yin yaratadi.",
      out: ["Mustaqil ravishda to'laqonli o'yin mexanikasini yig'adi", "O'qlar va dushmanlar uchun klonlash tizimidan foydalanadi", "Ballar, jonlar va o'yin tugashi (Game Over) shartini dasturlaydi"],
      need: ["Kompyuterlar, Scratch 3.0", "Kosmik kema, lazer va asteroid spraytlari"],
      plan: [["5", "Loyiha brifingi: bugun 1-modul yakuni bo'yicha haqiqiy «Space Shooter» arkada o'yinini quramiz."], ["8", "O'yin arxitekturasi: boshqaruvchi kema, otiluvchi lazer klonlari, tushuvchi meteoritlar, ball va jon."], ["25", "Amaliy ish: o'yinni yig'ish va sozlash."], ["4", "O'yinlarni bir-biriga sinatish."], ["3", "1-modul xulosasi va sertifikatlash."]],
      tips: ["O'quvchilar vaqtni rasm chizishga sarflab qo'ymasliklari uchun tayyor kutubxona spraytlaridan foydalanishni tavsiya qiling.", "Tez tugatganlarga meteorit portlash effekti yoki tovush qo'shishni topshiring."],
      pt: "Yakuniy loyiha: «Kosmik himoyachi»",
      steps: [
        "Sahnaga yulduzli fazo fonini qo'ying. 3 ta sprayt oling: Kema, Lazer (kichik chiziqcha) va Asteroid.",
        "Kema: X o'qi bo'ylab sichqoncha yoki strelkalar bilan silliq harakatlansin (`set x to mouse x`).",
        "Lazer otish: bo'sh joy bosilganda `create clone of (Lazer)`. Lazer kloni kemadan boshlanib, yuqoriga uchsin (`change y by 12`) va chetga tekkanda o'chsin.",
        "Asteroidlar: tepadan tasodifiy tushuvchi klonlar zanjiri.",
        "To'qnashuv 1 (Lazer va Asteroid): agar asteroid lazerga tegsa, ball 1 ga oshsin, portlash ovozi chiqsin va ikkala klon o'chsin.",
        "To'qnashuv 2 (Asteroid va Kema): agar asteroid kemaga tegsa, `jon` 1 taga kamaysin.",
        "Game Over: agar `jon = 0` bo'lsa, `broadcast (Game Over)` va `stop all`.",
        "Do'stingiz bilan o'ynab ko'ring: kim ko'proq ball to'playdi?"
      ],
      extra: ["Har 10 balldan keyin asteroidlar tushish tezligini oshiring.", "Ekranda eng yuqori rekordni (High Score) saqlaydigan ro'yxat yoki o'zgaruvchi qo'shing."],
      ask: [
        ["Bu o'yinda klonlar qayerda ishlatildi?", "Otiladigan ko'p sonli lazerlarda va tinimsiz tushuvchi asteroidlarda."],
        ["To'qnashuv qanday blok bilan aniqlanadi?", "`touching (sprayt nomi)?` sezgi bloki bilan."],
        ["O'yin tugashini dastur qanday biladi?", "`if jon = 0 then stop all` sharti orqali."],
        ["1-modulda qaysi mavzu sizga eng qiziq bo'ldi?", "O'quvchining shaxsiy fikri va xulosasi."]
      ],
      quiz: [
        ["Kosmik kema sichqonchaga ergashishi uchun qaysi blok kerak?", "set x to mouse x", "glide to mouse-pointer", "move 10 steps"],
        ["Lazer asteroidga tekkanda ball nima bo'ladi?", "change ball by 1", "set ball to 0", "delete ball"],
        ["Nega lazer kloni ekrandan chiqqanda o'chirilishi kerak?", "Xotirani tozalash va Scratch qotmasligi uchun", "Kema to'xtashi uchun", "Fon o'zgarishi uchun"],
        ["O'yinda «Jon» tugaganda nima sodir bo'ladi?", "O'yin to'xtaydi (Game Over)", "Yangi daraja ochiladi", "Ballar ko'payadi"],
        ["Katta o'yinni yaratishda birinchi qadam nima?", "Reja tuzish va spraytlarni tayyorlash", "Bir zumda hamma kodni yozish", "Faqat ovoz yozish"]
      ],
      game: {
        type: "order",
        title: "Tartibga sol: O'yin qanday yasaladi?",
        steps: [
          "O'yin g'oyasi va qoidalarini aniqlash",
          "Fon va kerakli spraytlarni sahnaga joylash",
          "Qahramonning silliq harakatini dasturlash",
          "Klonlar orqali to'siqlar va o'qlar tizimini yaratish",
          "To'qnashuv shartlari, ball va jon hisobini qo'shish",
          "O'yinni sinash, xatolarni to'g'rilash va o'ynash"
        ]
      },
      topic: [
        { e: "👾", h: "Arkada o'yinlari tarixi", p: "1978-yilda chiqqan «Space Invaders» o'yini butun dunyoda mashhur bo'lgan. Bugun siz xuddi o'sha mashhur o'yin mexanikasini o'z qo'lingiz bilan noldan yaratdingiz!", q: "Nega bunday o'yinlar hamon qiziqarli?", a: "Chunki ular tezkor reaksiya, epchillik va diqqatni talab qiladi." },
        { e: "🏆", h: "1-modul cho'qqisi", p: "Siz o'z bloklaringizni yaratishni, parametrlarni, gravitatsiya fizikasini, klonlarni va ro'yxatlarni o'rgandingiz. Bu dasturlashning eng muhim fundamental tushunchalaridir.", q: "Keyingi modulda nima o'rganamiz?", a: "Tinkercad dasturida haqiqiy 3D modellashtirish olamiga qadam qo'yamiz!" },
        { e: "🎖️", h: "Mustaqil geym-dizayner", p: "Yaxshi o'yin faqat kod emas, balki qoidalar muvozanati (balans) hamdir. O'yin juda oson ham, juda qiyin ham bo'lmasligi kerak.", q: "O'yin balansini qanday topish mumkin?", a: "Ko'p marta sinab ko'rish va boshqa o'yinchilarning fikrini olish orqali." }
      ],
      prog: [{ t: "Space Shooter: Lazer va to'qnashuv", b: ["y:👥 Lazer klon bo'lib boshlanganda", "b:kema oldiga bor", "p:ko'rin", "o:🔁 to y > 170 gacha [", "b:y ni 12 ga o'zgartir", "o:Agar", "s:asteroidga tegsa", "v:ball ni 1 ga oshir", "o:bu klonni o'chir", "o:]", "o:bu klonni o'chir"] }],
      video: [["wY9kQz1B-lM", "Scratch Space Shooter Full Game"], ["AKUtkYZTUfo", "Scratch'da to'liq o'yin yaratish"]],
      yq: "scratch space shooter game tutorial",
      hw: ["O'yiningizga yangi turdagi dushman (masalan, tez uchadigan uchar likopcha) g'oyasini o'ylab toping va qog'ozda chizing."]
    }
  ]
};

