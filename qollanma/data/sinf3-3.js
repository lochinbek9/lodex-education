// 3-sinf · 17–24-darslar
window.QOLLANMA.grades[3].lessons.push(
  {
    n: 17, mod: 3, t: "Shartlar: labirint o'yini",
    goal: "O'quvchilar `if ... then` sharti va rangga tegishni tekshirish orqali devorlardan o'ta olmaydigan qahramonli labirint o'yinini yaratadi.",
    out: ["Shart nima ekanini hayotiy misolda tushuntiradi", "`touching color` bilan devorga tegishni tekshiradi", "G'alaba shartini dasturlaydi"],
    need: ["Kompyuterlar, Scratch 3", "Qog'ozda chizilgan labirint namunasi"],
    plan: [["5", "Takrorlash: koordinatalar va strelka bilan boshqarish."], ["7", "Yangi mavzu: shart — «agar ... bo'lsa, unda ...». Sezgi bloklari savolga «ha» yoki «yo'q» deb javob beradi."], ["24", "Amaliy ish: labirint."], ["3", "Bir-birining labirintini o'ynash."], ["3", "Test."], ["3", "Saqlash."]],
    tips: ["Devor rangi bitta va aniq bo'lsin (masalan, to'q ko'k). Rangni blok ichidagi pipetka bilan to'g'ridan-to'g'ri sahnadan oling — qo'lda tanlasa mos kelmaydi.", "Qahramon kichik bo'lsin (`set size to 30 %`), yo'laklar keng. Aks holda o'yin bajarib bo'lmaydigan bo'lib qoladi."],
    steps: ["Fon muharririda to'q ko'k chiziqlar bilan oddiy labirint chizing. Yo'laklar keng bo'lsin.", "Marraga yashil to'rtburchak chizing.", "Qahramon tanlang, kichraytiring: `set size to 30 %`.", "O'tgan darsdagi 4 ta strelka skriptini tuzing (`change x by 5`, `change y by 5`...).", "Boshlash: `when green flag clicked` → `go to x: -200 y: 150` (start nuqtasi).", "Devor sharti: `forever` ichiga `if <touching color (ko'k)?> then` → `go to x: -200 y: 150`. Rangni pipetka bilan oling.", "G'alaba sharti: yana bir `if <touching color (yashil)?> then` → `say Yutdingiz! for 2 seconds` → `stop all`.", "O'ynab ko'ring va labirintni qiyinlashtiring."],
    extra: ["Devorga tegganda startga qaytmasin, faqat bir qadam orqaga chekinsin.", "Labirintga harakatlanuvchi to'siq qo'shing."],
    ask: [["Shart nima?", "«Ha» yoki «yo'q» deb javob beriladigan savol. Javob «ha» bo'lsa, ichidagi buyruqlar bajariladi."], ["Nega shart `forever` ichida turadi?", "O'yin davomida har lahzada tekshirib turish uchun."], ["`touching color` nimani tekshiradi?", "Sprayt ko'rsatilgan rangga tegib turibdimi-yo'qmi."], ["WeDo'da shartga o'xshash nima bor edi?", "Datchikni kutish: narsa ko'rinsa — to'xta."]],
    quiz: [["«Agar ... bo'lsa» bloki qaysi?", "if ... then", "forever", "glide"], ["Devorga tegishni qaysi blok tekshiradi?", "touching color", "change x by", "next costume"], ["Shart bloki nega forever ichida?", "Doim tekshirish uchun", "Chiroyli turishi uchun", "Tezroq ishlashi uchun"], ["Sezgi bloklari qanday javob beradi?", "Ha yoki yo'q", "Son bilan", "Rasm bilan"], ["Devor rangini qanday aniq tanlaymiz?", "Pipetka bilan sahnadan olamiz", "Taxminan tanlaymiz", "Rang nomini yozamiz"]],
    game: { type: "grid", title: "Labirintdan chiq", levels: [{ map: ["S#...", ".#.#.", "...#F"] }, { map: ["..#..", "S.#.F", "#...#"] }, { map: ["S.....", "####.#", "F....."] }] },
    topic: [
      { e: "❓", h: "Shart — savol", p: "Kompyuter savol beradi: «Devorga tegdimmi?» Javob faqat ikki xil: ha yoki yo'q. «Ha» bo'lsa — ichidagi buyruqlarni bajaradi, «yo'q» bo'lsa — o'tkazib yuboradi.", q: "«Agar qorong'i bo'lsa — chiroqni yoq». Bu yerda shart qaysi?", a: "«Qorong'i bo'lsa»." },
      { e: "🎨", h: "Rangni sezish", p: "Havorang sezgi bloklari — spraytning «datchiklari». `touching color` sprayt ma'lum rangga tegdimi, shuni tekshiradi.", q: "Bu WeDo'dagi qaysi detalga o'xshaydi?", a: "Harakat datchigiga — u ham «oldimda narsa bormi?» deb tekshiradi." },
      { e: "🏁", h: "O'yin qoidalari = shartlar", p: "Har o'yinda kamida ikki shart bor: yutqazish (devorga tegdi) va yutish (marraga yetdi). O'yin qoidasini avval so'z bilan aytamiz, keyin blokka aylantiramiz.", q: "Futbolda gol sharti qanday?", a: "Agar to'p darvoza chizig'idan to'liq o'tsa — gol." }
    ],
    prog: [{ t: "Labirint qoidalari", b: ["y:🏳 Bayroq bosilganda", "b:Startga bor", "o:🔁 Doim [", "o:Agar", "s:ko'k rangga tegsa", "b:Startga qayt", "o:Agar", "s:yashil rangga tegsa", "p:«Yutdingiz!» de", "o:]"] }],
    video: [["hqOgyIv-kcI", "Scratch'da labirint o'yinini yaratish (o'zbek tilida)"], ["AKUtkYZTUfo", "Scratch'da labirint o'yini (ingliz tilida)"]],
    yq: "scratch labirint o'yini yasash",
    hw: ["Sevimli o'yiningizning 3 ta qoidasini «agar ... bo'lsa, unda ...» shaklida yozing."]
  },
  {
    n: 18, mod: 3, t: "O'zgaruvchi: hisob va jonlar",
    goal: "O'quvchilar o'zgaruvchi — son saqlanadigan «quti» ekanini tushunadi va o'yiniga hisob hamda jonlar sonini qo'shadi.",
    out: ["O'zgaruvchi yaratadi va unga nom beradi", "`set` va `change` bloklari farqini tushuntiradi", "Hisob ma'lum songa yetganda o'yinni tugatadi"],
    need: ["Kompyuterlar, Scratch 3", "Quti va ichiga solinadigan raqamli kartochkalar (namoyish uchun)"],
    plan: [["5", "Namoyish: qutiga «Hisob» deb yozamiz, ichiga 0 kartochkasini solamiz. Ochko oldik — kartochkani almashtiramiz."], ["7", "Yangi mavzu: o'zgaruvchi yaratish, `set ... to` va `change ... by`."], ["24", "Amaliy ish: «Olma terimchi» hisob va jon bilan."], ["3", "«Saralash» o'yini."], ["3", "Test."], ["3", "Saqlash."]],
    tips: ["Eng ko'p uchraydigan xato: o'yin boshida hisobni 0 ga qaytarmaslik. Ikkinchi marta o'ynaganda eski hisob qolib ketadi — bolalar buni o'zi sezsin.", "O'zgaruvchi nomi ma'noli bo'lsin: «Hisob», «Jon». «a», «x» emas."],
    steps: ["Qahramon (strelkalar bilan boshqariladi) va Apple spraytini qo'shing.", "«O'zgaruvchilar» bo'limida «O'zgaruvchi yaratish»ni bosing, nomini «Hisob» qo'ying.", "Qahramon skripti boshiga: `when green flag clicked` → `set Hisob to 0`.", "Olma skripti: `forever` ichida `if <touching Qahramon?> then` → `change Hisob by 1` → `go to random position`.", "O'ynab ko'ring: sahnaning burchagida hisob o'sib boryaptimi?", "Ikkinchi o'zgaruvchi: «Jon». Boshida `set Jon to 3`.", "Dushman sprayti qo'shing (masalan, Bat): u `forever` uchib yuradi. Qahramonga tegsa — `change Jon by -1` va qahramon markazga qaytadi.", "Tugash sharti: `if <Jon = 0> then` → `say O'yin tugadi` → `stop all`. `if <Hisob = 10> then` → `say Yutdingiz!` → `stop all`."],
    extra: ["Oltin olma qo'shing: u 5 ochko beradi, lekin kam paydo bo'ladi.", "Hisob oshgan sari dushman tezlashsin."],
    ask: [["O'zgaruvchi nima?", "Nomi bor quti. Ichida bitta qiymat (son yoki so'z) saqlanadi va o'zgarishi mumkin."], ["`set Hisob to 0` va `change Hisob by 1` farqi nima?", "`set` qiymatni aniq songa tenglaydi, `change` hozirgisiga qo'shadi."], ["Nega o'yin boshida hisob 0 ga tenglanadi?", "Aks holda oldingi o'yindagi hisob qolib ketadi."], ["Jonni kamaytirish uchun `change` ga qanday son yoziladi?", "Manfiy son: -1."]],
    quiz: [["O'zgaruvchi nima?", "Qiymat saqlanadigan nomli quti", "Sprayt turi", "Fon rasmi"], ["Hisobni 1 ga oshiradigan blok?", "change Hisob by 1", "set Hisob to 1", "say Hisob"], ["O'yin boshida hisobni nolga tenglaydigan blok?", "set Hisob to 0", "change Hisob by 0", "hide Hisob"], ["Jonni kamaytirish uchun nima yozamiz?", "change Jon by -1", "change Jon by 1", "set Jon to 3"], ["O'zgaruvchiga qanday nom bergan ma'qul?", "Ma'noli: Hisob, Jon", "Bitta harf: a", "Nomsiz"]],
    game: { type: "sort", title: "set'mi yoki change'mi?", desc: "Bu vaziyatda qaysi blok kerak?", cats: ["set (aniq tenglash)", "change (qo'shish/ayirish)"], items: [["O'yin boshlandi: hisob 0 bo'lsin", 0], ["Olma terildi: hisob +1", 1], ["O'yin boshlandi: jon 3 bo'lsin", 0], ["Dushmanga tegdi: jon -1", 1], ["Yangi bosqich: vaqt 30 bo'lsin", 0], ["Har soniyada vaqt -1", 1], ["Oltin olma: hisob +5", 1], ["Qayta boshlash: tezlik 3 bo'lsin", 0]] },
    topic: [
      { e: "📦", h: "O'zgaruvchi — nomli quti", p: "Kompyuter eslab qolishi kerak bo'lgan narsani qutiga solamiz va qutiga nom beramiz: «Hisob». Qutiga qarab, ichida nechchi borligini bilamiz.", q: "Futbol tablosi nimaga o'xshaydi?", a: "Ikkita o'zgaruvchiga: har jamoaning hisobi." },
      { e: "🔢", h: "set va change", p: "`set Hisob to 0` — qutidagi sonni olib tashlab, 0 solamiz. `change Hisob by 1` — qutidagi songa 1 qo'shamiz.", q: "Hisob 7. `change Hisob by 2` dan keyin nechchi?", a: "9." },
      { e: "❤️", h: "Jonlar", p: "Jon ham o'zgaruvchi: 3 dan boshlanadi va xato qilganda 1 ga kamayadi. 0 bo'lganda — o'yin tugaydi. Buni shart bilan tekshiramiz.", q: "Kamaytirish uchun `change` ga nima yozamiz?", a: "Manfiy son: -1." }
    ],
    prog: [
      { t: "Olma: terilsa — ochko", b: ["y:🏳 Bayroq bosilganda", "v:Hisob = 0", "o:🔁 Doim [", "o:Agar", "s:Qahramonga tegsa", "v:Hisob +1", "b:Tasodifiy joyga bor", "o:]"] },
      { t: "Tugash sharti", b: ["o:Agar", "g:Jon = 0", "p:«O'yin tugadi» de", "o:Hammasini to'xtat"] }
    ],
    video: [["YPB_DwRNw0g", "Scratch boshlang'ich darslar, 8-dars (o'zbek tilida)"], ["ykJ8cJ8QR7A", "Scratch'da mini o'yin yaratish (o'zbek tilida)"]],
    yq: "scratch o'zgaruvchi hisob ochko",
    hw: ["Hayotdan 5 ta «o'zgaruvchi» toping: nomi va hozirgi qiymati (masalan: Yoshim = 9, Sinfdagi o'quvchilar = 24)."]
  },
  {
    n: 19, mod: 3, t: "Tasodifiy sonlar: osmondan yulduz tutamiz",
    goal: "O'quvchilar tasodifiy sonlar yordamida har safar boshqacha bo'ladigan o'yin yaratadi: yuqoridan tushayotgan yulduzlarni savatga tutadi.",
    out: ["`pick random` blokini koordinata va tezlikda ishlatadi", "Narsa pastga tushib, yana tepadan paydo bo'ladigan sikl tuzadi", "Sichqoncha bilan boshqariladigan sprayt yaratadi"],
    need: ["Kompyuterlar, Scratch 3", "O'yin kubigi (zar)"],
    plan: [["5", "Zar tashlaymiz: keyingi son nechchi chiqishini bilamizmi? Bu — tasodif."], ["6", "Yangi mavzu: `pick random 1 to 10`. O'yinda tasodif nega kerak?"], ["25", "Amaliy ish: «Yulduz tutish»."], ["3", "«Juftini top» o'yini."], ["3", "Test."], ["3", "Saqlash."]],
    tips: ["Yulduz tepadan paydo bo'lishi uchun y aniq (180), x esa tasodifiy (-220 dan 220 gacha). Buni doskada sahna chizib ko'rsating.", "Savatni sichqoncha bilan boshqarish strelkadan osonroq va tezroq — kichik bolalarga ma'qul."],
    steps: ["Tungi osmon fonini tanlang. Bowl (savat) va Star spraytlarini qo'shing.", "Savat: `when green flag clicked` → `forever` ichida `set x to (mouse x)`. Savatni pastga joylang: `set y to -150`.", "Yulduz boshlanishi: `when green flag clicked` → `set Hisob to 0` → `go to x: (pick random -220 to 220) y: 180`.", "Tushish: `forever` ichida `change y by -5`.", "Tutildi: `if <touching Bowl?> then` → `change Hisob by 1` → `play sound` → tepaga qaytish (`go to x: (pick random -220 to 220) y: 180`).", "Tushib ketdi: `if <(y position) < -170> then` → tepaga qaytish.", "Tezlikni ham tasodifiy qiling: «Tezlik» o'zgaruvchisi, har safar `set Tezlik to (pick random 3 to 8)`, tushishda `change y by (0 - Tezlik)`.", "30 ochkoga yetganda «Yutdingiz!»."],
    extra: ["Ikkinchi narsa: bomba. Uni tutsangiz — jon kamayadi.", "Taymer qo'shing: 30 soniya ichida nechta tutasiz?"],
    ask: [["Tasodifiy son nima?", "Oldindan aytib bo'lmaydigan son, xuddi zar tashlagandek."], ["Nega o'yinda tasodif kerak?", "Har safar bir xil bo'lsa, o'yin zerikarli va oson bo'lib qoladi."], ["Yulduz tepadan chiqishi uchun qaysi koordinata o'zgarmas?", "y = 180. x esa tasodifiy."], ["Yulduz pastga tushishi uchun y ni nima qilamiz?", "Kamaytiramiz: `change y by -5`."]],
    quiz: [["Tasodifiy son beradigan blok?", "pick random", "set x to", "glide"], ["Yulduz pastga tushishi uchun?", "y kamayadi", "y ortadi", "x ortadi"], ["Savat sichqonchaga ergashishi uchun?", "set x to mouse x", "move 10 steps", "next costume"], ["Yulduz qayerdan paydo bo'ladi?", "Tepadan, tasodifiy x da", "Doim markazdan", "Pastdan"], ["pick random 1 to 6 nimaga o'xshaydi?", "Zar tashlashga", "Soatga", "Chizg'ichga"]],
    game: { type: "memory", title: "Juftini top: o'yin qismlari", pairs: [["🎲 pick random", "Tasodifiy son"], ["🖱 mouse x", "Sichqoncha joyi"], ["⬇️ change y by -5", "Pastga tushadi"], ["📦 Hisob", "Ochkoni saqlaydi"], ["❓ if touching", "Tegdimi?"], ["🔁 forever", "To'xtovsiz"]] },
    topic: [
      { e: "🎲", h: "Tasodif", p: "Zar tashlaganda qaysi son chiqishini hech kim bilmaydi. Kompyuter ham shunday «zar tashlay» oladi: `pick random 1 to 6`.", q: "`pick random 1 to 100` necha xil natija berishi mumkin?", a: "100 xil." },
      { e: "🌠", h: "Tepadan tushish retsepti", p: "1) Tepaga bor: y = 180, x — tasodifiy. 2) Doim: y ni kamaytir. 3) Pastga yetdimi yoki tutildimi? — yana tepaga.", q: "x ham tasodifiy bo'lmasa nima bo'lardi?", a: "Yulduz doim bir joydan tushardi — savatni qimirlatish shart bo'lmasdi." },
      { e: "🖱", h: "Sichqoncha bilan boshqarish", p: "`mouse x` — sichqoncha ko'rsatkichining x koordinatasi. Savatning x ini shunga tenglasak, savat sichqonchaga ergashadi.", q: "Nega savatning y ini o'zgartirmaymiz?", a: "Savat faqat chap-o'ngga yurishi, pastda qolishi kerak." }
    ],
    prog: [
      { t: "Savat sichqonchaga ergashadi", b: ["y:🏳 Bayroq bosilganda", "o:🔁 Doim [", "b:x = sichqoncha x", "o:]"] },
      { t: "Yulduz tushadi", b: ["y:🏳 Bayroq bosilganda", "o:🔁 Doim [", "b:y ni -5 ga o'zgartir", "o:Agar", "s:Savatga tegsa", "v:Hisob +1", "b:Tepaga, tasodifiy x ga", "o:]"] }
    ],
    video: [["7NN5v2wSL4U", "Scratch'da «tutish» o'yini (ingliz tilida)"], ["lGQ-L7UVzbs", "Scratch'da savat va olma o'yini (o'zbek tilida)"]],
    yq: "scratch catch game tutorial",
    hw: ["Zarni 20 marta tashlang va har son necha marta chiqqanini jadvalga yozing. Qaysi biri ko'p chiqdi?"]
  },
  {
    n: 20, mod: 3, t: "Xabarlar: sahnalar va suhbat",
    goal: "O'quvchilar spraytlar bir-biriga xabar yuborishini (`broadcast`) o'rganadi va fon almashadigan, qahramonlar navbat bilan gapiradigan interaktiv hikoya yaratadi.",
    out: ["`broadcast` va `when I receive` juftligini ishlatadi", "Xabar orqali fonni va spraytlarni boshqaradi", "Tugma spraytini yaratadi"],
    need: ["Kompyuterlar, Scratch 3", "Qog'oz varaqcha — «xabar» o'yini uchun"],
    plan: [["6", "Harakatli o'yin: mentor «Sakrang!» deb e'lon qiladi — faqat qizil kiyimdagilar sakraydi. Xabar hammaga yetadi, lekin kim javob berishi oldindan kelishilgan."], ["6", "Yangi mavzu: `broadcast` — e'lon, `when I receive` — eshitib javob berish."], ["24", "Amaliy ish: «Sehrli eshik» hikoyasi."], ["3", "«Tartibga sol» o'yini."], ["3", "Test."], ["3", "Saqlash."]],
    tips: ["O'tgan yili suhbat `wait` bilan vaqtni sanab tuzilgan edi. Bugun xabar bilan qayta tuzing va farqni so'rang: qaysi biri ishonchliroq?", "Xabar nomlari ma'noli bo'lsin: «o'rmonga o'tish», «javob ber». «message1» qoldirilmasin."],
    steps: ["Ikkita fon tanlang: xona va o'rmon. Ikki qahramon va «Eshik» tugmasi (istalgan sprayt) qo'shing.", "Boshlanish: sahna skripti — `when green flag clicked` → `switch backdrop to Xona`.", "Eshik skripti: `when this sprite clicked` → `broadcast (o'rmonga o'tish)`.", "Sahna skripti: `when I receive (o'rmonga o'tish)` → `switch backdrop to O'rmon`.", "Eshik ham shu xabarni eshitib yashirinsin: `when I receive (o'rmonga o'tish)` → `hide`. Boshida `show`.", "1-qahramon: `when I receive (o'rmonga o'tish)` → `say Voy, biz qayerdamiz? for 2 seconds` → `broadcast (javob ber)`.", "2-qahramon: `when I receive (javob ber)` → `say Bu sehrli o'rmon! for 2 seconds`.", "Hikoyani davom ettiring: yana bir xabar va uchinchi fon."],
    extra: ["Ikki tugma qo'shing — hikoya ikki xil davom etsin (tanlovli hikoya).", "O'tgan darsdagi o'yinga «Yutdingiz» xabarini qo'shing: hamma sprayt bayram qilsin."],
    ask: [["`broadcast` nima qiladi?", "Barcha spraytlarga xabar yuboradi."], ["Xabarni kim qabul qiladi?", "Faqat `when I receive` bloki bor spraytlar javob beradi."], ["Xabar `wait` bilan vaqt sanashdan nimasi bilan yaxshi?", "Vaqtni taxmin qilish shart emas: biri tugatishi bilan ikkinchisi boshlaydi."], ["Bitta xabarga bir nechta sprayt javob bera oladimi?", "Ha, hammasi bir vaqtda."]],
    quiz: [["Xabar yuboradigan blok?", "broadcast", "say", "glide"], ["Xabarni qabul qiladigan blok?", "when I receive", "when flag clicked", "forever"], ["Fonni almashtiradigan blok?", "switch backdrop to", "next costume", "go to"], ["Xabarga nechta sprayt javob bera oladi?", "Istagancha", "Faqat bitta", "Hech qaysi"], ["Spraytni yashiradigan blok?", "hide", "stop", "wait"]],
    game: { type: "order", title: "Tartibga sol: xabar yo'li", steps: ["O'yinchi «Eshik» tugmasini bosadi", "Eshik «o'rmonga o'tish» xabarini yuboradi", "Sahna xabarni eshitib, fonni almashtiradi", "1-qahramon gapiradi va «javob ber» xabarini yuboradi", "2-qahramon xabarni eshitib javob beradi"] },
    topic: [
      { e: "📢", h: "Xabar — e'lon", p: "Maktab radiosi e'lon qiladi — hamma eshitadi, lekin faqat tegishli sinf harakat qiladi. `broadcast` ham shunday: hamma spraytga yetadi.", q: "Kim javob beradi?", a: "Faqat shu xabar uchun `when I receive` bloki borlar." },
      { e: "🔗", h: "Zanjir", p: "Bir sprayt ishini tugatib xabar yuboradi, ikkinchisi eshitib o'z ishini boshlaydi va yana xabar yuboradi. Shunday qilib uzun hikoya zanjiri tuziladi.", q: "Estafeta yugurishiga o'xshaydimi?", a: "Ha: tayoqcha — xabar, yuguruvchilar — spraytlar." },
      { e: "🖼", h: "Sahnani almashtirish", p: "Sahnaning ham o'z skripti bor! U xabarni eshitib, fonni almashtiradi. O'yinlarda bosqichlar, menyu va yakuniy ekran shunday qilinadi.", q: "O'yinda qanday sahnalar bo'ladi?", a: "Boshlang'ich menyu, o'yin, g'alaba ekrani, mag'lubiyat ekrani." }
    ],
    prog: [
      { t: "Eshik: bosilsa — e'lon qiladi", b: ["y:🖱 Sprayt bosilganda", "y:📢 «o'rmonga o'tish» xabarini yubor"] },
      { t: "Sahna: eshitdi — fonni almashtirdi", b: ["y:📩 «o'rmonga o'tish» kelganda", "p:Fonni «O'rmon»ga almashtir"] },
      { t: "Qahramon: eshitdi — gapirdi — navbatni uzatdi", b: ["y:📩 «o'rmonga o'tish» kelganda", "p:«Biz qayerdamiz?» de", "y:📢 «javob ber» xabarini yubor"] }
    ],
    video: [["NIAQ0_9AAl8", "Scratch'da broadcast (xabar) qanday ishlaydi (ingliz tilida)"], ["5X97da49FyQ", "Scratch'da animatsion multfilm yaratish (o'zbek tilida)"]],
    yq: "scratch broadcast xabar yuborish",
    hw: ["3 sahnali hikoya rejasini yozing: qayerda, kim nima deydi, qaysi xabar keyingi sahnani ochadi."]
  },
  {
    n: 21, mod: 3, t: "Klonlar: yomg'ir va meteoritlar",
    goal: "O'quvchilar bitta spraytdan ko'p nusxa — klon yaratishni o'rganadi va osmondan ko'plab meteorit tushadigan o'yin tuzadi.",
    out: ["Klon nima ekanini tushuntiradi", "`create clone`, `when I start as a clone`, `delete this clone` uchligini ishlatadi", "Klonlar sonini vaqt bilan boshqaradi"],
    need: ["Kompyuterlar, Scratch 3", "Muhr (shtamp) va qog'oz — namoyish uchun"],
    plan: [["5", "Namoyish: bitta muhr — ko'p iz. Savol: 50 ta yomg'ir tomchisi uchun 50 ta sprayt yaratamizmi?"], ["7", "Yangi mavzu: klon. Asl sprayt — «fabrika», klonlar — mahsulot."], ["24", "Amaliy ish: «Meteorit yomg'iri»."], ["3", "«Saralash» o'yini."], ["3", "Test."], ["3", "Saqlash."]],
    tips: ["Klon o'chirilmasa, sahna to'lib, kompyuter sekinlashadi (Scratch 300 ta klondan ortig'ini yaratmaydi). `delete this clone` ni unutmaslikni alohida ta'kidlang.", "Asl spraytni `hide` qilib, klonni `show` qilish — standart usul. Aks holda bitta meteorit tepada osilib turadi."],
    steps: ["Kosmos foni, Rocketship (kema) va Rocks (meteorit) spraytlarini qo'shing.", "Kema: sichqonchaga ergashadi (`set x to (mouse x)`), pastda turadi.", "Meteorit — «fabrika»: `when green flag clicked` → `hide` → `forever` ichida `create clone of myself` → `wait 0.8 seconds`.", "Klon skripti: `when I start as a clone` → `go to x: (pick random -220 to 220) y: 180` → `show`.", "Davomi: `repeat until <(y position) < -170>` ichida `change y by -6`.", "Sikldan keyin: `change Hisob by 1` → `delete this clone` (o'tkazib yuborilgan har meteorit — ochko).", "To'qnashuv: klon siklining ichida `if <touching Rocketship?> then` → `change Jon by -1` → `delete this clone`.", "Jon 0 bo'lsa — o'yin tugaydi. `wait` vaqtini kamaytirsangiz, meteoritlar ko'payadi."],
    extra: ["Har klon o'lchami tasodifiy bo'lsin: `set size to (pick random 40 to 120) %`.", "Hisob oshgan sari `wait` qisqarib borsin."],
    ask: [["Klon nima?", "Spraytning o'yin paytida yaratiladigan nusxasi. U asl sprayt kabi ko'rinadi va o'z skriptini bajaradi."], ["Nega klonni o'chirish kerak?", "Aks holda ular to'planib, o'yin sekinlashadi va yangi klon yaratilmay qoladi."], ["Asl sprayt nega yashiriladi?", "U faqat klon chiqaradigan «fabrika», o'zi o'yinda qatnashmaydi."], ["Klonlar bir xil joydan chiqmasligi uchun nima qilamiz?", "x koordinatasini tasodifiy qilamiz."]],
    quiz: [["Klon nima?", "Spraytning nusxasi", "Yangi fon", "Tovush turi"], ["Klon yaratadigan blok?", "create clone of myself", "broadcast", "next costume"], ["Klon ishini qaysi blok boshlaydi?", "when I start as a clone", "when flag clicked", "when I receive"], ["Ishini tugatgan klonni nima qilamiz?", "delete this clone", "hide", "wait"], ["Meteoritlar ko'payishi uchun wait vaqtini?", "Kamaytiramiz", "Oshiramiz", "O'zgartirmaymiz"]],
    game: { type: "sort", title: "Klon kerakmi?", desc: "Bu narsa uchun klon ishlatamizmi yoki bitta sprayt yetadimi?", cats: ["Klon kerak (ko'p nusxa)", "Bitta sprayt yetadi"], items: [["Yomg'ir tomchilari", 0], ["Bosh qahramon", 1], ["Qor parchalari", 0], ["«Boshlash» tugmasi", 1], ["Dushmanlar to'dasi", 0], ["O'q-yoy o'qlari", 0], ["Hisob tablosi", 1], ["Osmondagi yulduzlar", 0]] },
    topic: [
      { e: "🧬", h: "Klon — nusxa", p: "Bitta meteorit chizdik. O'yin paytida kompyuter undan xohlagancha nusxa yasaydi. Har nusxa mustaqil harakat qiladi.", q: "50 ta spraytni qo'lda yaratishdan nimasi yaxshi?", a: "Skript bitta. O'zgartirish kerak bo'lsa — bir joyda o'zgartiramiz." },
      { e: "🏭", h: "Fabrika va mahsulot", p: "Asl sprayt yashirinib turadi va har 0.8 soniyada klon chiqaradi. Klon paydo bo'ladi, pastga tushadi va ishini tugatib o'chadi.", q: "Fabrika tezroq ishlashi uchun nimani o'zgartiramiz?", a: "Klonlar orasidagi `wait` vaqtini qisqartiramiz." },
      { e: "🧹", h: "O'zidan keyin tozalash", p: "Har klon ishini tugatgach `delete this clone` bilan o'zini o'chirishi shart. Bo'lmasa sahna ko'rinmas klonlarga to'lib qoladi.", q: "WeDo darsida bu qaysi qoidaga o'xshaydi?", a: "Dars oxirida detallarni yig'ishtirishga." }
    ],
    prog: [
      { t: "Fabrika: klon chiqaradi", b: ["y:🏳 Bayroq bosilganda", "p:Yashirin", "o:🔁 Doim [", "o:O'zimdan klon yarat", "o:⏳ 0.8 soniya", "o:]"] },
      { t: "Klon: tushadi va o'chadi", b: ["o:Klon bo'lib boshlaganda", "b:Tepaga, tasodifiy x ga", "p:Ko'rin", "o:🔁 Pastga yetguncha [", "b:y ni -6 ga o'zgartir", "o:]", "v:Hisob +1", "o:Klonni o'chir"] }
    ],
    video: [["8G-QDBi7AOo", "Scratch: klonlar (ingliz tilida)"], ["ihaCsZq3nEg", "Scratch'da klon yaratish (qisqa)"]],
    yq: "scratch clones tutorial",
    hw: ["Sevimli o'yiningizda qaysi narsalar «klon» bo'lishi mumkin? 3 tasini yozing."]
  },
  {
    n: 22, mod: 3, t: "Qalam: kompyuter rasm chizadi",
    goal: "O'quvchilar Qalam kengaytmasi yordamida sprayt bilan geometrik shakllar chizadi va sikl ichidagi burilish burchagi shaklni qanday belgilashini kashf etadi.",
    out: ["Qalam kengaytmasini qo'shadi va `pen down` / `pen up` ni ishlatadi", "Uchburchak, kvadrat, oltiburchak chizadi", "Sikl ichida sikl bilan naqsh yaratadi"],
    need: ["Kompyuterlar, Scratch 3", "Doskada burchaklar jadvali: 3 tomon — 120, 4 — 90, 5 — 72, 6 — 60"],
    plan: [["5", "Harakatli mashq: bir o'quvchi polda kvadrat bo'ylab yuradi. Necha qadam, necha burilish?"], ["6", "Yangi mavzu: Qalam kengaytmasi. Qalam tushirilgan bo'lsa — sprayt iz qoldiradi."], ["25", "Amaliy ish: shakllar va naqsh."], ["3", "«Juftini top» o'yini."], ["3", "Test."], ["3", "Saqlash."]],
    tips: ["Burchakni hisoblash formulasini bermang. Jadval bering va qonuniyatni so'rang: «Tomonlar ko'paysa, burilish nima bo'lyapti?» Kuchli bolalar 360 ÷ tomonlar sonini o'zi topadi.", "Har sinovdan oldin `erase all` bo'lmasa, sahna chalkashib ketadi. Uni bayroq skripti boshiga qo'ydiring."],
    steps: ["Pastki chap burchakdagi «Kengaytma qo'shish» tugmasi orqali «Qalam» (Pen) ni qo'shing.", "Tayyorgarlik: `when green flag clicked` → `erase all` → `go to x: 0 y: 0` → `point in direction 90` → `pen down`.", "Kvadrat: `repeat 4` ichida `move 100 steps` → `turn 90 degrees`.", "Uchburchak: `repeat 3`, burilish 120. Oltiburchak: `repeat 6`, burilish 60.", "Rangni o'zgartiring: sikl ichiga `change pen color by 10`. Qalinlik: `set pen size to 4`.", "Naqsh: kvadrat siklini yana bir `repeat 12` ichiga oling va har kvadratdan keyin `turn 30 degrees` qo'shing.", "Aylana: `repeat 36` ichida `move 10 steps` → `turn 10 degrees`.", "O'z naqshingizni yarating va saqlang."],
    extra: ["Sichqoncha bilan chizadigan dastur: sprayt sichqonchaga ergashadi, bo'sh joy bosilganda `pen down`.", "Yulduz: `repeat 5`, `move 150`, `turn 144`."],
    ask: [["`pen down` nima qiladi?", "Qalamni tushiradi — sprayt yurganda iz qoladi."], ["Kvadrat chizishda necha darajaga burilamiz?", "90 daraja, 4 marta."], ["Tomonlar ko'paygan sari burilish burchagi nima bo'ladi?", "Kichrayadi: 120, 90, 72, 60..."], ["Sikl ichida sikl nima beradi?", "Bitta shaklni ko'p marta burib takrorlaydi — naqsh hosil bo'ladi."]],
    quiz: [["Iz qoldirish uchun qaysi blok?", "pen down", "pen up", "erase all"], ["Uchburchak uchun burilish burchagi?", "120", "90", "60"], ["Oltiburchak uchun repeat nechchi?", "6", "4", "3"], ["Sahnani tozalaydigan blok?", "erase all", "hide", "stop all"], ["Naqsh hosil qilish uchun nima ishlatdik?", "Sikl ichida sikl", "Ikki sprayt", "Ikki fon"]],
    game: { type: "memory", title: "Juftini top: shakl va burilish", pairs: [["🔺 Uchburchak", "3 marta, 120°"], ["⬛ Kvadrat", "4 marta, 90°"], ["⬟ Beshburchak", "5 marta, 72°"], ["⬢ Oltiburchak", "6 marta, 60°"], ["⭕ Aylana", "36 marta, 10°"], ["⭐ Yulduz", "5 marta, 144°"]] },
    topic: [
      { e: "✏️", h: "Qalam", p: "Spraytning ko'rinmas qalami bor. `pen down` — qalam qog'ozga tegdi, sprayt yursa chiziq qoladi. `pen up` — qalam ko'tarildi, iz yo'q.", q: "Ikki alohida shakl chizish uchun orasida nima qilamiz?", a: "`pen up` qilib, yangi joyga o'tamiz, keyin yana `pen down`." },
      { e: "📐", h: "Shakl = yur + buril", p: "Har qanday ko'pburchak bir xil retsept bilan chiziladi: yur, buril — va buni tomonlar soni marta takrorla. Faqat burilish burchagi o'zgaradi.", q: "Jadvalga qarang: 3→120, 4→90, 6→60. 8 tomon uchun nechchi?", a: "45. (Hammasi bo'lib 360 daraja burilamiz.)" },
      { e: "🌀", h: "Sikl ichida sikl", p: "Ichki sikl bitta kvadrat chizadi. Tashqi sikl uni 12 marta takrorlaydi va har safar biroz buradi. Natijada — gulga o'xshash naqsh.", q: "Ichki sikl jami necha marta `move` bajaradi?", a: "12 × 4 = 48 marta." }
    ],
    prog: [{ t: "Kvadratlardan naqsh", b: ["y:🏳 Bayroq bosilganda", "g:Hammasini o'chir", "g:Qalamni tushir", "o:🔁 12 marta [", "o:🔁 4 marta [", "b:100 qadam yur", "b:90° buril", "o:]", "b:30° buril", "g:Rangni o'zgartir", "o:]"] }],
    video: [["3m32UyuaGX0", "Scratch qalami bilan shakllar chizish (ingliz tilida)"], ["x6UZW5U0XeE", "Scratch'da shakllar chizish"]],
    yq: "scratch qalam pen shakllar chizish",
    hw: ["Daftarga 3 ta shakl chizing va har biri uchun algoritm yozing: necha marta takrorlanadi, necha qadam, necha daraja."]
  },
  {
    n: 23, mod: 3, t: "Viktorina: kompyuter savol beradi",
    goal: "O'quvchilar foydalanuvchidan javob oladigan (`ask`) va uni tekshiradigan (`if ... else`) viktorina o'yinini yaratadi.",
    out: ["`ask` va `answer` bloklarini ishlatadi", "`if ... then ... else` bilan to'g'ri va noto'g'ri javobga har xil munosabat bildiradi", "To'g'ri javoblar sonini o'zgaruvchida hisoblaydi"],
    need: ["Kompyuterlar, Scratch 3", "Har o'quvchi oldindan tayyorlagan 3 ta savol"],
    plan: [["5", "Suhbat: shu saytdagi testlar qanday ishlaydi? Kompyuter javobni qanday tekshiradi?"], ["7", "Yangi mavzu: `ask` — so'raydi va kutadi; `answer` — yozilgan javob; `=` — solishtirish; `else` — aks holda."], ["24", "Amaliy ish: 3 savolli viktorina."], ["3", "Bir-birining viktorinasini o'ynash."], ["3", "Test."], ["3", "Saqlash."]],
    tips: ["Javob yozuvi aniq mos kelishi kerak. Savollarni bir so'zli yoki sonli javob bilan tuzdiring (masalan, «2 + 3 nechchi?»), aks holda imlo xatosi tufayli to'g'ri javob ham xato chiqadi.", "Scratch katta-kichik harfni farqlamaydi: «Toshkent» va «toshkent» teng. Buni aytib qo'ying."],
    steps: ["Boshlovchi sprayt va viktorina fonini tanlang. «Ball» o'zgaruvchisini yarating.", "Boshlanish: `when green flag clicked` → `set Ball to 0` → `say Viktorinaga xush kelibsiz! for 2 seconds`.", "Birinchi savol: `ask (O'zbekiston poytaxti qaysi shahar?) and wait`.", "Tekshirish: `if <(answer) = (Toshkent)> then` → `say To'g'ri! for 1 seconds` → `change Ball by 1`.", "`else` qismiga: `say Noto'g'ri. To'g'ri javob: Toshkent for 2 seconds`.", "Shu blokni nusxalab, yana 2 ta savol qo'shing (o'z savollaringiz).", "Yakun: `say (join (Sizning ballingiz: ) (Ball)) for 3 seconds`.", "Ball 3 bo'lsa — maxsus tabrik va tovush qo'shing."],
    extra: ["Matematik savol tasodifiy bo'lsin: ikki son `pick random` bilan tanlanadi, javob `(a) + (b)` bilan solishtiriladi.", "Har to'g'ri javobda boshlovchi kostyumini almashtirsin."],
    ask: [["`ask` bloki nima qiladi?", "Savolni ko'rsatadi va foydalanuvchi javob yozib Enter bosguncha kutadi."], ["Yozilgan javob qayerda saqlanadi?", "`answer` blokida."], ["`if ... else` oddiy `if` dan nimasi bilan farq qiladi?", "Shart bajarilmasa ham nima qilishni aytadi: «aks holda»."], ["Ikki narsani solishtirish uchun qaysi blok?", "Yashil `=` operatori."]],
    quiz: [["Savol beradigan blok?", "ask and wait", "say", "broadcast"], ["Foydalanuvchi javobi qayerda?", "answer blokida", "Hisob o'zgaruvchisida", "Fonda"], ["«Aks holda» degan qism qaysi blokda?", "if ... then ... else", "forever", "repeat"], ["Ikki qiymat tengligini qaysi blok tekshiradi?", "=", "+", "pick random"], ["Ikki matnni birlashtiradigan blok?", "join", "ask", "hide"]],
    game: { type: "order", title: "Tartibga sol: bitta savol qanday ishlaydi", steps: ["Kompyuter savolni ko'rsatadi", "O'yinchi javob yozib, Enter bosadi", "Kompyuter javobni to'g'ri javob bilan solishtiradi", "To'g'ri bo'lsa — ball qo'shadi, aks holda to'g'risini aytadi", "Keyingi savolga o'tadi"] },
    topic: [
      { e: "💬", h: "Kompyuter so'raydi", p: "Shu paytgacha biz kompyuterga tugma bilan buyruq berdik. `ask` bloki bilan kompyuter bizdan so'z yoki son so'raydi va javobni `answer` ga saqlaydi.", q: "`answer` nimaga o'xshaydi?", a: "O'zgaruvchiga — ichida oxirgi yozilgan javob turadi." },
      { e: "⚖️", h: "Solishtirish", p: "Yashil `=` bloki ikki narsani solishtiradi va «ha» yoki «yo'q» deydi. Uni `if` ichiga qo'yamiz: javob to'g'ri javobga tengmi?", q: "`<` va `>` belgilari nimani tekshiradi?", a: "Kichikmi yoki kattami." },
      { e: "🔀", h: "if ... else — ikki yo'l", p: "Shart «ha» bo'lsa — birinchi yo'l, «yo'q» bo'lsa — ikkinchi yo'l. Hech qachon ikkalasi birga bajarilmaydi va hech qachon ikkalasi ham o'tkazib yuborilmaydi.", q: "«Agar yomg'ir yog'sa — soyabon ol, aks holda — ...»?", a: "Masalan: «aks holda — kepka kiy»." }
    ],
    prog: [{ t: "Bitta savol", b: ["s:«Poytaxt qaysi?» deb so'ra", "o:Agar", "g:javob = Toshkent", "p:«To'g'ri!» de", "v:Ball +1", "o:Aks holda", "p:«Noto'g'ri» de"] }],
    video: [["6M2WMlGZxKk", "Scratch dasturida Quiz o'yin tayyorlash (o'zbek tilida)"], ["x7_P_LkOInE", "Scratch'da viktorina yasash (ingliz tilida)"]],
    yq: "scratch viktorina savol javob o'yini",
    hw: ["Yakuniy loyihangiz rejasini tayyorlang: o'yin nomi, qahramon, qoidalar («agar ... bo'lsa»), qanday yutiladi."]
  },
  {
    n: 24, mod: 3, t: "Yakuniy loyiha, himoya va 3 oylik test",
    goal: "O'quvchilar o'z o'yinini tugatadi, sinfdoshlariga o'ynatib fikr oladi, himoya qiladi va 3 oyda o'rganganlari bo'yicha yakuniy testdan o'tadi.",
    out: ["O'zgaruvchi, shart va sikl ishlatilgan o'yin yaratadi", "Boshqa o'quvchining o'yinini sinab, foydali fikr bildiradi", "Mexanizmlar, WeDo va Scratch bo'yicha asosiy tushunchalarni biladi"],
    need: ["Kompyuterlar, Scratch 3, proyektor", "Fikr varaqchalari: «Menga yoqdi...», «Taklifim...»", "Sertifikatlar"],
    plan: [["13", "Loyihani tugatish va xatolarni tuzatish."], ["10", "O'yin zali: hamma o'rnidan turib, kamida 2 ta boshqa o'yinni o'ynaydi va fikr varaqchasi qoldiradi."], ["8", "Himoya: 4–5 nafar xohlovchi proyektorda ko'rsatadi."], ["10", "3 oylik yakuniy test (12 savol)."], ["4", "Sertifikat, umumiy surat."]],
    tips: ["«O'yin zali» usuli har bolaga tomoshabin beradi — bu 1 daqiqalik taqdimotdan qimmatliroq.", "Fikr qoidasi: avval yoqqan narsa, keyin bitta taklif. «Yomon» so'zi ishlatilmaydi.", "Test natijasi bo'yicha eng ko'p xato qilingan 3 mavzuni yozib qo'ying — keyingi chorak takrorlashdan boshlanadi."],
    pt: "Loyiha uchun tekshiruv ro'yxati",
    steps: ["O'yin `when green flag clicked` bilan boshlanadi va o'zgaruvchilar boshlang'ich qiymatga qaytadi.", "Kamida bitta o'zgaruvchi bor (Hisob, Jon yoki Vaqt).", "Kamida ikkita shart bor: yutish va yutqazish.", "Tasodif ishlatilgan (`pick random`).", "O'yin tugashi aniq: yozuv, tovush yoki fon almashishi.", "Boshqa odam tushuntirishsiz o'ynay oladi (boshida qisqa yo'riqnoma bor).", "Loyiha nom bilan saqlangan."],
    extra: ["Sinfdoshingiz taklifidan bittasini hoziroq qo'shing.", "Ikkinchi bosqich qo'shing: `broadcast` bilan fon almashsin va o'yin tezlashsin."],
    ask: [["O'yiningizda qaysi o'zgaruvchilar bor va ular nimani saqlaydi?", "Erkin javob."], ["Eng qiyin xato qaysi edi va uni qanday topdingiz?", "Erkin javob. Xatoni topish usulini so'rang."], ["WeDo va Scratch'da qaysi g'oyalar bir xil?", "Algoritm, takrorlash, shart (datchikni kutish), hodisa."], ["Keyingi chorakda nimani o'rganmoqchisiz?", "Erkin javob. Yozib oling."]],
    quiz: [["Kichik g'ildirak kattasini aylantirsa chiqish qanday?", "Sekin, lekin kuchli", "Tez va kuchsiz", "O'zgarmaydi"], ["Aylanishni borib-kelishga aylantiradigan mexanizm?", "Krivoship", "Tasma", "Lebyodka"], ["Adolatli tajribada nechta narsa o'zgaradi?", "Bitta", "Hammasi", "Uchta"], ["Kran nega ag'darilmaydi?", "Qarshi yuki bor", "Juda yengil", "Motori kuchli"], ["WeDo'da pult sifatida qaysi datchikni ishlatdik?", "Egilish datchigini", "Harakat datchigini", "Tutun datchigini"], ["Scratch sahnasining markazi?", "x: 0, y: 0", "x: 240, y: 180", "x: 100, y: 100"], ["Spraytni yuqoriga ko'tarish uchun?", "y ni oshiramiz", "x ni oshiramiz", "y ni kamaytiramiz"], ["O'zgaruvchi nima?", "Qiymat saqlanadigan nomli quti", "Sprayt kostyumi", "Tovush"], ["Tasodifiy son beradigan blok?", "pick random", "broadcast", "glide"], ["Xabarni qabul qiladigan blok?", "when I receive", "create clone", "ask"], ["Spraytning nusxasi nima deyiladi?", "Klon", "Fon", "Skript"], ["«Aks holda» qaysi blokda bor?", "if ... then ... else", "forever", "repeat 10"]],
    game: [
      { type: "memory", title: "Juftini top: 3 oyda o'rganganlarimiz", pairs: [["⚙️ Tishli uzatma", "Tezlik va kuch"], ["🔧 Krivoship", "Borib-kelish harakati"], ["📍 x va y", "Sprayt manzili"], ["📦 O'zgaruvchi", "Hisobni saqlaydi"], ["📢 broadcast", "Xabar yuboradi"], ["🧬 Klon", "Sprayt nusxasi"]] },
      { type: "sort", title: "WeDo'mi yoki Scratch'mi?", cats: ["WeDo 2.0", "Scratch"], items: [["Lebyodka", 0], ["Klon", 1], ["Qarshi yuk", 0], ["Koordinata", 1], ["Egilish pulti", 0], ["O'zgaruvchi", 1], ["Zilzila simulyatori", 0], ["Qalam", 1]] }
    ],
    topic: [
      { e: "🧪", h: "Sinab ko'ruvchi", p: "Haqiqiy o'yinlar chiqishidan oldin yuzlab odam ularni sinab ko'radi. Bugun siz ham sinovchisiz: o'ynang, xato qidiring, fikr yozing.", q: "Yaxshi fikr qanday bo'ladi?", a: "Aniq va foydali: «Qahramon juda sekin, tezlatsang qiziqroq bo'ladi»." },
      { e: "🐞", h: "Xato topish", p: "Xato — dasturchining har kungi ishi. Usul: nima bo'lishi kerak edi? Aslida nima bo'ldi? Qaysi blok shunga javobgar? O'sha blokni tekshiramiz.", q: "Hisob ikkinchi o'yinda 0 dan boshlanmadi. Qaysi blok unutilgan?", a: "Boshidagi `set Hisob to 0`." },
      { e: "🏆", h: "3 oyda nimaga erishdik?", p: "Mexanizmlarni tushundik, tajriba o'tkazdik, o'z robotimizni loyihaladik va hisobli, shartli, klonli o'yinlar yaratdik.", q: "Eng faxrlanadigan ishingiz qaysi?", a: "Har kimning o'z javobi bor." }
    ],
    prog: [{ t: "Har o'yinning skeleti", b: ["y:🏳 Bayroq bosilganda", "v:Hisob = 0", "v:Jon = 3", "o:🔁 Doim [", "o:Agar", "g:Jon = 0", "p:«O'yin tugadi»", "o:Agar", "g:Hisob = 10", "p:«Yutdingiz!»", "o:]"] }],
    video: [["wBlJBiO-iHQ", "Scratch'da to'liq o'yin yaratish: futbol (o'zbek tilida)"], ["hqOgyIv-kcI", "Scratch'da labirint o'yini (o'zbek tilida)"]],
    yq: "scratch o'yin loyihalari bolalar uchun",
    hw: ["Ta'tilda o'yiningizni oilangizga o'ynating. Eng yuqori hisob kimniki bo'ldi?"]
  }
);
