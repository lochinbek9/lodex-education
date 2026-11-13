// 3-sinf · 9–16-darslar
window.QOLLANMA.grades[3].lessons.push(
  {
    n: 9, mod: 2, t: "Xavf signali: qo'riqchi qurilma",
    goal: "O'quvchilar harakat datchigi asosida ogohlantiruvchi qurilma loyihalaydi: xavf sezilganda tovush, chiroq va harakat bilan signal beradi.",
    out: ["Ogohlantirish tizimi nimalardan iboratligini aytadi", "Bitta hodisaga uch xil javob (tovush, chiroq, harakat) dasturlaydi", "Signalni takrorlanadigan qiladi"],
    need: ["WeDo 2.0 to'plami", "Planshet yoki kompyuter", "Model kutubxonasi (asos uchun)"],
    plan: [["6", "Suhbat: yong'in signali, svetofor, tez yordam sirenasi — ular bizga nima deydi? Qanday sezamiz?"], ["5", "Vazifa: «Xonamni qo'riqlaydigan qurilma». Yo'riqnoma yo'q — o'zimiz loyihalaymiz."], ["24", "Amaliy ish: loyihalash, yig'ish, dasturlash."], ["4", "Namoyish: 2–3 juftlik."], ["3", "Test."], ["3", "Yig'ishtirish."]],
    tips: ["Bu birinchi ochiq loyiha. Qotib qolgan juftlikka tayyor g'oya emas, savol bering: «Qurilmang nimani sezadi? Sezgach nima qiladi?»", "Sinfda tovush ko'payib ketadi. Ovozni past qo'ying yoki navbat bilan sinating."],
    pt: "Ochiq loyiha: qo'riqchi qurilma",
    steps: ["Reja chizing: datchik qayerda turadi? Nima harakatlanadi (bayroqcha, to'siq, qo'l)?", "Asosni yig'ing: Smarthub, motor va harakat datchigi mahkam tursin.", "Motorga harakatlanuvchi qism o'rnating — masalan, ko'tariladigan bayroqcha.", "Dastur: `Boshlash` → `Kutish` (harakat datchigi) → `Chiroq: qizil` → `Tovush` → `Motor 1 soniya`.", "Sinang: qo'l yaqinlashganda uchala signal ham ishladimi?", "Butun zanjirni `Takrorlash` ichiga oling — qurilma qayta-qayta qo'riqlasin.", "Oxiriga `Motor teskari 1 soniya` qo'shing — bayroqcha joyiga qaytsin."],
    extra: ["Ekranda «DIQQAT!» yozuvi chiqsin.", "Signal 3 marta takrorlanib, keyin kutish holatiga qaytsin."],
    ask: [["Ogohlantirish tizimi nimalardan iborat?", "Xavfni sezadigan datchik va odamga bildiradigan signal: tovush, chiroq yoki harakat."], ["Nega signal bir necha xil bo'lgani yaxshi?", "Eshitmagan odam ko'radi, ko'rmagan eshitadi."], ["Nega `Takrorlash` kerak bo'ldi?", "Qurilma bir marta emas, doim qo'riqlab turishi uchun."], ["Hayotda qanday xavf datchiklari bor?", "Tutun datchigi, gaz datchigi, mashina signalizatsiyasi."]],
    quiz: [["Qo'riqchi qurilma xavfni nima bilan sezadi?", "Datchik bilan", "Motor bilan", "Tasma bilan"], ["Qaysi biri signal emas?", "Batareya", "Sirena tovushi", "Miltillovchi chiroq"], ["Qurilma doim ishlashi uchun qaysi blok kerak?", "Takrorlash", "Tovush", "Ekranda son"], ["Tutun datchigi nimadan ogohlantiradi?", "Yong'indan", "Yomg'irdan", "Shamoldan"], ["Yo'riqnomasiz loyihada birinchi qadam nima?", "Reja tuzish", "Detallarni sochish", "Dasturni yozish"]],
    game: { type: "memory", title: "Juftini top: signal va ma'nosi", pairs: [["🚨 Sirena", "Yo'l bering!"], ["🔴 Qizil chiroq", "To'xta"], ["🔔 Maktab qo'ng'irog'i", "Dars boshlandi"], ["🚭 Tutun datchigi", "Yong'in xavfi"], ["🚗 Mashina signalizatsiyasi", "Kimdir tegdi"], ["⏰ Budilnik", "Uyg'onish vaqti"]] },
    topic: [
      { e: "🚨", h: "Signal — ma'lumot", p: "Signal bizga so'zsiz xabar beradi: qizil chiroq — to'xta, sirena — yo'l ber, qo'ng'iroq — dars boshlandi.", q: "Yana qanday signallarni bilasiz?", a: "Telefon jiringlashi, svetofor, mashina burilish chirog'i, hushtak." },
      { e: "🧩", h: "Sezish → qaror → signal", p: "Har qanday ogohlantirish tizimi uch qismdan iborat: datchik sezadi, dastur qaror qiladi, chiroq va tovush xabar beradi.", q: "Bu uch qism sizga nimani eslatadi?", a: "Robotning uch qismini: datchik, dastur, harakat." },
      { e: "✏️", h: "Yo'riqnomasiz ishlaymiz", p: "Bugun tayyor rasm yo'q. Avval qog'ozda reja chizamiz, keyin quramiz, sinaymiz va yaxshilaymiz. Har kimning qurilmasi boshqacha chiqadi — bu to'g'ri!", q: "Birinchi variant ishlamasa-chi?", a: "Nima xalaqit berayotganini topamiz va o'zgartiramiz." }
    ],
    prog: [{ t: "Qo'riqchi: sezdi — signal berdi — yana qo'riqlaydi", b: ["y:▶ Boshlash", "o:🔁 Takrorlash [", "o:⏳ Kutish 👀", "g:💡 Chiroq: qizil", "r:🔊 Tovush", "g:↻ 1 soniya", "g:↺ 1 soniya", "o:]"] }],
    video: [["_nFSxqctGcA", "WeDo 2.0: qo'riqchi radar (namuna)"], ["aPYi93fDfIQ", "LEGO WeDo: datchiklardan foydalanish"]],
    yq: "wedo 2.0 hazard alarm motion sensor",
    hw: ["Uyingizda qanday ogohlantiruvchi qurilmalar bor? Ro'yxat tuzing va har biri nimadan ogohlantirishini yozing."]
  },
  {
    n: 10, mod: 2, t: "Yirtqich va o'lja: timsoh",
    goal: "O'quvchilar og'zini ochib-yopadigan yirtqich modelini yasaydi, datchik yordamida o'ljani «tutadigan» dastur tuzadi va hayvonlarning ov hamda himoya usullarini muhokama qiladi.",
    out: ["Yirtqich va o'lja munosabatiga misol keltiradi", "Datchik signali bilan tez harakatni dasturlaydi", "Modelga hayvon xususiyatlarini qo'shadi"],
    need: ["WeDo 2.0 to'plami", "Planshet yoki kompyuter (model kutubxonasidagi «Ushlash» asosi)", "«O'lja» uchun kichik detal"],
    plan: [["6", "Suhbat: yirtqichlar qanday ov qiladi? O'lja qanday himoyalanadi (tezlik, rang, tikan)?"], ["20", "Yig'ish: jag'li model."], ["12", "Dasturlash: o'lja yaqinlashsa — jag' yopiladi."], ["3", "Test."], ["4", "Yig'ishtirish."]],
    tips: ["Jag' juda tez yopilsa detallar sochiladi, juda sekin bo'lsa «o'lja» qochib ulguradi. Quvvat va vaqtni sozlash — darsning asosiy muhandislik vazifasi.", "Barmoqni «o'lja» qilish qiziq, lekin detal ishlatishni so'rang."],
    steps: ["Model kutubxonasidan «Ushlash» asosiy modelini oching va yig'ing.", "Uni timsohga aylantiring: uzun jag', tishlar, ko'z, dum.", "Harakat datchigini og'iz ichiga yoki tumshuq ostiga o'rnating.", "Dastur: `Boshlash` → `Kutish` (harakat datchigi) → `Quvvat 10` → `Motor 0.5 soniya` (jag' yopiladi) → `Tovush`.", "Davomi: `Kutish 2 soniya` → `Motor teskari 0.5 soniya` (jag' ochiladi).", "Hammasini `Takrorlash` ichiga oling.", "O'ljani har xil tezlikda yaqinlashtiring. Timsoh ulguryaptimi?"],
    extra: ["O'lja modelini ham yasang: unda qanday himoya bo'ladi?", "Jag' yopilishidan oldin 1 soniya «pistirma» kutish qo'shing."],
    ask: [["Yirtqich kim, o'lja kim?", "Yirtqich boshqa hayvonni ovlaydi, o'lja — ovlanadigan hayvon."], ["O'lja qanday himoyalanadi?", "Tez qochadi, yashirinadi, rangini moslaydi, tikani yoki qobig'i bor."], ["Timsoh qanday ov qiladi?", "Suvda qimirlamay kutadi va o'lja yaqinlashganda birdan tashlanadi."], ["Modelda timsohning «ko'zi» nima?", "Harakat datchigi."]],
    quiz: [["Yirtqich nima qiladi?", "Boshqa hayvonni ovlaydi", "Faqat o't yeydi", "Doim uxlaydi"], ["Qaysi biri o'ljaning himoyasi?", "Tez yugurish", "O'tkir tish", "Pistirma"], ["Timsoh modeli o'ljani nima bilan sezadi?", "Harakat datchigi", "Egilish datchigi", "Motor"], ["Jag' tez yopilishi uchun nimani oshiramiz?", "Motor quvvatini", "Kutish vaqtini", "Tovush balandligini"], ["Xameleon qanday himoyalanadi?", "Rangini o'zgartiradi", "Uchib ketadi", "Baqiradi"]],
    game: { type: "sort", title: "Yirtqichmi yoki o'ljami?", cats: ["Yirtqich", "O'lja"], items: [["🐊 Timsoh", 0], ["🐇 Quyon", 1], ["🦁 Sher", 0], ["🦌 Kiyik", 1], ["🦅 Burgut", 0], ["🐭 Sichqon", 1], ["🐺 Bo'ri", 0], ["🐑 Qo'y", 1]] },
    topic: [
      { e: "🐊", h: "Yirtqich va o'lja", p: "Tabiatda har bir hayvon ovqat topishi kerak. Yirtqichlar ov qiladi, o'ljalar esa qochish va yashirinishni o'rgangan. Ikkalasi ham tabiat uchun kerak.", q: "Yirtqichlar yo'qolsa nima bo'ladi?", a: "O'txo'r hayvonlar juda ko'payib, o'simliklarni yeb bitiradi." },
      { e: "🛡", h: "Himoya usullari", p: "Quyon tez yuguradi, tipratikanning tikani bor, toshbaqa qobig'iga yashirinadi, xameleon rangini o'zgartiradi.", q: "Zebra yo'llari unga qanday yordam beradi?", a: "Podada yo'llar aralashib, yirtqich bitta zebrani ajrata olmay qoladi." },
      { e: "⚡", h: "Tezlik muhim", p: "Timsoh jag'i bir zumda yopiladi. Modelda buning uchun motor quvvatini 10 qilamiz va vaqtni juda qisqa olamiz.", q: "Quvvat katta, vaqt uzun bo'lsa nima bo'ladi?", a: "Jag' yopilgach ham motor aylanaveradi va model buzilishi mumkin." }
    ],
    prog: [{ t: "Timsoh ov qiladi", b: ["y:▶ Boshlash", "o:🔁 Takrorlash [", "o:⏳ Kutish 👀", "g:Quvvat 10", "g:↻ 0.5 soniya", "r:🔊 Tovush", "o:⏳ 2 soniya", "g:↺ 0.5 soniya", "o:]"] }],
    video: [["9gu0NzD_Z54", "WeDo 2.0: alligator roboti"], ["xQPd85f8tRQ", "WeDo 2.0: timsoh roboti (qisqa)"]],
    yq: "wedo 2.0 predator and prey crocodile",
    hw: ["Bitta yirtqich va uning o'ljasini tanlang. Har birining 2 tadan «quroli» yoki himoyasini yozing."]
  },
  {
    n: 11, mod: 2, t: "Hayvonlar muloqoti: yaltiroq qo'ng'iz",
    goal: "O'quvchilar hayvonlar bir-biri bilan qanday «gaplashishini» o'rganadi va chiroq, tovush hamda harakat orqali xabar beradigan jonzot modelini yasaydi.",
    out: ["Hayvonlar muloqotining 3 usulini aytadi", "Chiroq rangini ketma-ket o'zgartiradigan dastur tuzadi", "Ikki xil holatga ikki xil «xabar» dasturlaydi"],
    need: ["WeDo 2.0 to'plami", "Planshet yoki kompyuter", "Xonani biroz qorong'ilatish imkoni"],
    plan: [["6", "Suhbat: it dumini likillatsa nima degani? Qushlar nega sayraydi? Yaltiroq qo'ng'iz nega yonadi?"], ["17", "Yig'ish: o'z jonzotingiz (Smarthub — tanasi, chirog'i ko'rinib tursin)."], ["14", "Dasturlash: «salomlashish» va «xavf!» xabarlari."], ["3", "Ko'rgazma qorong'i xonada."], ["3", "Test."], ["2", "Yig'ishtirish."]],
    tips: ["Smarthub chirog'i 10 xil rangda yonadi (0 — o'chiq). Ranglar jadvalini doskaga chizib qo'ying.", "Chiroqni yoqib-o'chirib «miltillatish» uchun orasiga qisqa `Kutish` qo'yish kerak — aks holda ko'z ilg'amaydi."],
    steps: ["Smarthub atrofida jonzot yasang: qanot, mo'ylov, oyoq. Chiroq yopilib qolmasin.", "Motorga qanot yoki dumni ulang.", "«Salom» xabari: `Boshlash` → `Chiroq: yashil` → `Kutish 0.5 soniya` → `Chiroq: o'chiq` → `Kutish 0.5 soniya`. Buni `Takrorlash 3` ichiga oling.", "Sinang: jonzot 3 marta yashil miltilladi.", "«Xavf!» xabari (alohida zanjir): `Boshlash` → `Kutish` (harakat datchigi) → `Chiroq: qizil` → `Tovush` → `Motor 1 soniya` (qanot qoqadi).", "Ikkala xabarni sinang.", "O'z «tilingizni» o'ylab toping: masalan, 2 marta ko'k = «bu yerda ovqat bor»."],
    extra: ["Qo'shni juftlik bilan «gaplashing»: ular signal bersa, sizniki javob qaytarsin (harakat datchigi orqali)."],
    ask: [["Hayvonlar qanday usullarda muloqot qiladi?", "Tovush, harakat, rang va yorug'lik, hid orqali."], ["Yaltiroq qo'ng'iz nega yonadi?", "Juftini chaqirish va bir-birini topish uchun."], ["Asalarilar ovqat joyini qanday aytadi?", "Maxsus «raqs» bilan: yo'nalish va masofani ko'rsatadi."], ["Chiroqni miltillatish uchun dasturga nima kerak?", "Yoqish va o'chirish orasiga qisqa kutish."]],
    quiz: [["Yaltiroq qo'ng'iz nima bilan xabar beradi?", "Yorug'lik bilan", "Hid bilan", "Yozuv bilan"], ["It dumini likillatsa, bu nima?", "Harakat orqali muloqot", "Kasallik", "Uyqu"], ["Smarthub chirog'ini qaysi blok boshqaradi?", "Chiroq bloki", "Kutish bloki", "Motor bloki"], ["Miltillash uchun yoqish va o'chirish orasiga nima qo'yamiz?", "Kutish", "Tovush", "Boshlash"], ["Asalarilar xabarni qanday beradi?", "Raqs bilan", "Xat yozib", "Rangini o'zgartirib"]],
    game: { type: "memory", title: "Juftini top: kim qanday gaplashadi?", pairs: [["🐝 Asalari", "Raqsga tushadi"], ["✨ Yaltiroq qo'ng'iz", "Yonib-o'chadi"], ["🐕 It", "Dumini likillatadi"], ["🐦 Qush", "Sayraydi"], ["🐜 Chumoli", "Hid izi qoldiradi"], ["🐋 Kit", "Suv ostida kuylaydi"]] },
    topic: [
      { e: "💬", h: "So'zsiz til", p: "Hayvonlar gapirmaydi, lekin xabar bera oladi: «bu mening hududim», «xavf bor», «men bu yerdaman», «ovqat topdim».", q: "Mushuk miyovlashidan tashqari yana qanday «gapiradi»?", a: "Xurillaydi, dumini ko'taradi, junini hurpaytiradi." },
      { e: "✨", h: "Yorug'lik bilan xabar", p: "Yaltiroq qo'ng'izlar qorong'ida o'ziga xos ritmda yonib-o'chadi. Har bir turning o'z «paroli» bor. Dengiz tubidagi ba'zi baliqlar ham yorug'lik chiqaradi.", q: "Odamlar yorug'lik bilan qanday xabar beradi?", a: "Svetofor, mayoq, mashina chiroqlari, fonar bilan signal." },
      { e: "🎨", h: "Smarthub chirog'i", p: "Chiroq bloki ichiga son yozamiz — har son bir rang. 0 — o'chiq, 9 — qizil. Ranglarni ketma-ket almashtirsak, o'z «tilimiz» paydo bo'ladi.", q: "«Xavf» uchun qaysi rangni tanlar edingiz? Nega?", a: "Qizil — odamlar va ko'p hayvonlar uni xavf belgisi deb biladi." }
    ],
    prog: [
      { t: "«Salom»: 3 marta yashil miltillaydi", b: ["y:▶ Boshlash", "o:🔁 Takrorlash 3 [", "g:💡 Yashil", "o:⏳ 0.5 soniya", "g:💡 O'chiq", "o:⏳ 0.5 soniya", "o:]"] },
      { t: "«Xavf!»: qizil chiroq, tovush, qanot", b: ["y:▶ Boshlash", "o:⏳ Kutish 👀", "g:💡 Qizil", "r:🔊 Tovush", "g:↻ 1 soniya"] }
    ],
    video: [["DTF0EA62dGE", "WeDo 2.0: hayvonlar muloqoti (namuna)"], ["fphkaMCB9bw", "WeDo 2.0: hayvon modellari (g'oya uchun)"]],
    yq: "wedo 2.0 animal expression",
    hw: ["Uy hayvoningiz yoki ko'chadagi qushni 10 daqiqa kuzating. U qanday «xabar» berdi? 3 ta kuzatuv yozing."]
  },
  {
    n: 12, mod: 2, t: "Koinot roveri: pult bilan boshqaramiz",
    goal: "O'quvchilar o'z roverini loyihalaydi va uni egilish datchigi orqali masofadan boshqaradi; koinotni o'rganishda robotlarning vazifasini muhokama qiladi.",
    out: ["Rover qanday vazifalarni bajarishini aytadi", "Egilish datchigining 3 holatiga 3 xil buyruq dasturlaydi", "Roverga vazifaga mos qurilma qo'shadi"],
    need: ["WeDo 2.0 to'plami", "Planshet yoki kompyuter", "Polda «Mars yuzasi»: skotch bilan belgilangan baza va namuna joylari"],
    plan: [["5", "Suhbat: Marsda hozir qanday robotlar ishlayapti? Ular nima qiladi?"], ["18", "Yig'ish: o'z roveringiz (Milo'dan farqli)."], ["14", "Dasturlash: egilish pulti."], ["4", "Missiya: bazadan namunagacha va orqaga."], ["2", "Test."], ["2", "Yig'ishtirish."]],
    tips: ["Bitta motor bilan rover faqat oldinga-orqaga yuradi, burila olmaydi. Bu cheklovni bolalar o'zi sezsin va «ikkinchi motor bo'lsa edi» degan fikrga kelsin.", "Datchik simi qisqa — pult roverga yaqin bo'ladi. Uni «boshqaruv kabeli» deb ayting."],
    steps: ["O'z roveringizni chizing: nechta g'ildirak? Qanday qurilmasi bor (antenna, kamera, kovsh)?", "Yig'ing: motor g'ildirak o'qini aylantirsin. Tishli yoki tasmali uzatmadan foydalaning.", "Egilish datchigini uzun simda qoldiring — bu pult.", "1-zanjir: `Boshlash` → `Kutish` (oldinga egilish) → `Motor soat yo'nalishida`.", "2-zanjir: `Boshlash` → `Kutish` (orqaga egilish) → `Motor soatga teskari`.", "3-zanjir: `Boshlash` → `Kutish` (tekis) → `Motor to'xtasin`.", "Har zanjirni `Takrorlash` ichiga oling — pult qayta-qayta ishlasin.", "Missiya: roverni bazadan namunagacha haydang, to'xtating va orqaga qaytaring."],
    extra: ["Sekin va tez rejim qo'shing: datchik silkitilsa quvvat 10 bo'lsin.", "Harakat datchigini qo'shsangiz bo'lardi, lekin port 2 ta. Qaysi qurilmadan voz kechasiz? Nega?"],
    ask: [["Rover Marsda nima qiladi?", "Surat oladi, tosh va tuproqni tekshiradi, ob-havoni o'lchaydi, suv izlarini qidiradi."], ["Nega roverni Yerdan joystik bilan to'g'ridan-to'g'ri boshqarish qiyin?", "Signal Marsga bir necha daqiqada yetib boradi — kechikish katta."], ["Pultimiz qanday ishlaydi?", "Egilish datchigi holatiga qarab har xil dastur zanjiri ishga tushadi."], ["Bitta motorli rover nega burila olmaydi?", "Ikkala g'ildirak bir xil aylanadi. Burilish uchun g'ildiraklar har xil tezlikda aylanishi kerak."]],
    quiz: [["Rover nima?", "Sayyorani o'rganuvchi g'ildirakli robot", "Kosmik kema", "Sun'iy yo'ldosh"], ["Pult vazifasini qaysi datchik bajardi?", "Egilish datchigi", "Harakat datchigi", "Hech qaysi"], ["Smarthubda nechta port bor?", "2 ta", "3 ta", "4 ta"], ["Roverni to'xtatish uchun datchik qanday turadi?", "Tekis", "Oldinga egilgan", "Silkitilgan"], ["Marsga signal qancha vaqtda yetadi?", "Bir necha daqiqada", "Bir zumda", "Bir yilda"]],
    game: { type: "grid", title: "Roverni namunaga yetkaz", desc: "Marsda signal kechikadi: butun yo'lni oldindan dasturlash kerak. Strelkalar bilan to'liq marshrut tuzing.", levels: [{ map: ["S..#.", ".#...", ".#.#F"] }, { map: ["...#F", ".#.#.", "S#..."] }, { map: ["S.#...", "#.#.#.", "#...#F"] }] },
    topic: [
      { e: "🪐", h: "Robotlar koinotda", p: "Odam hali Marsga bormagan, lekin u yerda roverlar yillab ishlayapti. Ular quyosh nuri yoki maxsus batareyadan quvvat oladi.", q: "Nega avval robot yuboriladi?", a: "Yo'l uzoq va xavfli. Robotga havo, suv, ovqat kerak emas." },
      { e: "📡", h: "Masofadan boshqarish", p: "Yerdan yuborilgan buyruq Marsga bir necha daqiqada yetadi. Shuning uchun olimlar roverga butun kunlik rejani oldindan yuboradi.", q: "Bu sizga nimani eslatadi?", a: "Algoritmni — buyruqlarni oldindan tartib bilan yozishni." },
      { e: "🎮", h: "Egilish pulti", p: "Datchikni oldinga egamiz — rover oldinga, orqaga egamiz — orqaga, tekis tutamiz — to'xtaydi. Har holat uchun alohida dastur zanjiri.", q: "Nechta zanjir kerak bo'ladi?", a: "Uchta: oldinga, orqaga, to'xta." }
    ],
    prog: [
      { t: "Oldinga egilsa — oldinga", b: ["y:▶ Boshlash", "o:🔁 [", "o:⏳ Kutish ↓", "g:↻ Yur", "o:]"] },
      { t: "Orqaga egilsa — orqaga", b: ["y:▶ Boshlash", "o:🔁 [", "o:⏳ Kutish ↑", "g:↺ Yur", "o:]"] },
      { t: "Tekis tursa — to'xtaydi", b: ["y:▶ Boshlash", "o:🔁 [", "o:⏳ Kutish ▬", "g:■ To'xta", "o:]"] }
    ],
    video: [["NjLrP7b40qQ", "WeDo rover yasash (batafsil)"], ["XhlkfEe4ikc", "WeDo 2.0: kosmik rover (namuna)"]],
    yq: "wedo 2.0 space exploration rover",
    hw: ["Mars haqida 3 ta qiziqarli fakt toping va roveringizga nom qo'ying."]
  },
  {
    n: 13, mod: 2, t: "Ko'tarma kran: yuklarni ko'chiramiz",
    goal: "O'quvchilar yukni ko'tarib, boshqa joyga qo'yadigan kran yasaydi; muvozanat va qarshi yuk tushunchasini tajribada ko'radi.",
    out: ["Kranning asosiy qismlarini aytadi: minora, strela, lebyodka, qarshi yuk", "Yukni belgilangan balandlikka ko'tarib tushiradi", "Kran ag'darilmasligi uchun qarshi yuk qo'yadi"],
    need: ["WeDo 2.0 to'plami", "Planshet yoki kompyuter", "Yuklar: har xil og'irlikdagi LEGO detallari", "Chizg'ich"],
    plan: [["5", "Suhbat: qurilishda og'ir plitalarni kim ko'taradi? Kran nega ag'darilmaydi?"], ["20", "Yig'ish: minora kran."], ["12", "Dasturlash va tajriba: eng og'ir yuk."], ["3", "«Tartibga sol» o'yini."], ["3", "Test."], ["2", "Yig'ishtirish."]],
    tips: ["Avval qarshi yuksiz sinab ko'rishsin — kran ag'dariladi. Muammoni ko'rgach, yechim esda qoladi.", "7-darsdagi lebyodka shu yerda qaytadi. «Qayerda ko'rgan edik?» deb so'rang."],
    steps: ["Keng va og'ir asos yasang, ustiga minora quring.", "Minoraga gorizontal strela o'rnating.", "Motorga g'altak ulang, arqonni strela uchidan o'tkazib, ilgak bog'lang.", "Ko'tarish: `Boshlash` → `Motor soat yo'nalishida` → `Motor 2 soniya`. Tushirish: `Tugma bosilganda` → `Motor soatga teskari` → `Motor 2 soniya`.", "Yengil yukni ko'taring. Keyin og'irroq yuk qo'ying. Kran qachon og'a boshladi?", "Strelaning orqa tomoniga qarshi yuk (og'ir detallar) qo'ying va qayta sinang.", "Natijani yozing: qarshi yuksiz va qarshi yuk bilan eng og'ir yuk."],
    extra: ["Tishli uzatma qo'shib, kranni kuchliroq qiling (kichik → katta).", "Harakat datchigi yuk yetib kelganini sezsa, motor o'zi to'xtasin."],
    ask: [["Kran nega ag'darilmaydi?", "Orqa tomonida qarshi yuk bor — u strela va yuk og'irligini muvozanatlaydi."], ["Yuk strela uchiga qancha uzoq bo'lsa nima bo'ladi?", "Kranni ag'darish kuchi ortadi."], ["Kranni kuchliroq qilish uchun qaysi uzatma kerak?", "Sekinlatuvchi: kichik g'ildirak kattasini aylantiradi."], ["Qarshi yuk bizga qaysi mavzuni eslatadi?", "Richagni — arg'imchoqdagi muvozanatni."]],
    quiz: [["Kran ag'darilmasligi uchun nima qo'yiladi?", "Qarshi yuk", "Qo'shimcha chiroq", "Uzunroq arqon"], ["Kranda arqonni nima o'raydi?", "Lebyodka", "Datchik", "Strela"], ["Kran asosi qanday bo'lishi kerak?", "Keng va og'ir", "Tor va yengil", "Farqi yo'q"], ["Og'ir yukni ko'tarish uchun qaysi uzatma ma'qul?", "Kichik → katta", "Katta → kichik", "Uzatmasiz"], ["Qarshi yuk qayerda turadi?", "Strelaning orqa tomonida", "Ilgakda", "Arqon uchida"]],
    game: { type: "order", title: "Tartibga sol: kran ishi", steps: ["Ilgak yukka tushiriladi", "Yuk ilgakka mahkamlanadi", "Lebyodka arqonni o'raydi — yuk ko'tariladi", "Strela kerakli joyga buriladi", "Yuk sekin pastga tushiriladi"] },
    topic: [
      { e: "🏗", h: "Kran qismlari", p: "Minora — tik ustun. Strela — yon tomonga cho'zilgan qo'l. Lebyodka — arqonni o'raydi. Qarshi yuk — orqadagi og'ir blok.", q: "Qaysi qismi yukni ko'taradi?", a: "Lebyodka — u arqonni o'raydi." },
      { e: "⚖️", h: "Muvozanat", p: "Kran — katta richag. Bir tomonda yuk, ikkinchi tomonda qarshi yuk, o'rtada minora — tayanch. Ikki tomon teng bo'lsa, kran tik turadi.", q: "Yuk og'irlashsa, qarshi yukni nima qilamiz?", a: "Og'irlashtiramiz yoki minoradan uzoqroqqa suramiz." },
      { e: "💪", h: "Kuchni oshirish", p: "Motor kuchi yetmasa, tishli uzatma yordam beradi: kichik g'ildirak kattasini aylantiradi — sekinroq, lekin ancha kuchli ko'taradi.", q: "Kranga tezlik muhimmi yoki kuch?", a: "Kuch va ehtiyotkorlik — og'ir yuk sekin ko'tariladi." }
    ],
    prog: [
      { t: "Yukni ko'tarish", b: ["y:▶ Boshlash", "g:Quvvat 8", "g:↻ 2 soniya"] },
      { t: "Yukni tushirish", b: ["y:⌨ Tugma bosilganda", "g:Quvvat 4", "g:↺ 2 soniya"] }
    ],
    video: [["veY5RRotzPQ", "WeDo 2.0: aylanuvchi kran"], ["xkyYoaaOIJA", "WeDo 2.0: minora kran — yig'ish yo'riqnomasi"]],
    yq: "wedo 2.0 crane",
    hw: ["Yakuniy loyihaga tayyorgarlik: qanday muammoni hal qiladigan robot yasamoqchisiz? Chizma va 3 gapli tavsif tayyorlang."]
  },
  {
    n: 14, mod: 2, t: "WeDo yakuniy loyihasi va ko'rgazma",
    goal: "O'quvchilar haqiqiy muammoni tanlab, uni hal qiladigan robotni mustaqil loyihalaydi, yig'adi, dasturlaydi va himoya qiladi.",
    out: ["Muammodan boshlab yechim loyihalaydi", "Mexanizm, datchik va takrorlashni bitta modelda birlashtiradi", "Loyihasini savollarga javob berib himoya qiladi"],
    need: ["WeDo 2.0 to'plami, planshet yoki kompyuter", "Loyiha pasporti varag'i: muammo, yechim, mexanizm, datchik", "Baholash stikerlari"],
    plan: [["4", "Vazifa va baholash mezonlari: ishlaydi, mexanizmi bor, datchik ishlatilgan, tushuntira oladi."], ["22", "Yig'ish va dasturlash."], ["13", "Ko'rgazma-yarmarka: yarim sinf ko'rsatadi, yarmi tomosha qiladi, keyin almashadi."], ["3", "WeDo moduli testi."], ["3", "Suratga olish va yig'ishtirish."]],
    tips: ["«Yarmarka» usuli vaqtni tejaydi: hamma bir vaqtda taqdim qiladi, hech kim zerikib kutmaydi.", "Har o'quvchiga 2 ta stiker bering: «eng foydali» va «eng aqlli mexanizm» uchun ovoz berishsin."],
    pt: "Loyiha bosqichlari",
    steps: ["Muammo: kimga va nimada yordam kerak? (Masalan: bobomga og'ir sumka ko'tarish qiyin.)", "Yechim: robotingiz nima qiladi? Bir gap bilan yozing.", "Mexanizm tanlang: tishli uzatma, tasma, lebyodka, krivoship yoki richag.", "Datchik tanlang: u nimani sezadi va sezgach nima bo'ladi?", "Yig'ing — avval mustahkam asos, keyin mexanizm.", "Dasturlang. Kamida bitta `Kutish` (datchik) va bitta `Takrorlash` bo'lsin.", "Sinang va bitta narsani yaxshilang.", "Himoya: muammo → yechim → qanday ishlaydi → nimani yaxshilagan bo'lardim."],
    extra: ["Loyihangizga reklama shiori o'ylab toping."],
    ask: [["Loyihangiz qanday muammoni hal qiladi?", "Erkin javob. Muammo aniq aytilishini so'rang."], ["Qaysi mexanizmni ishlatdingiz va nega?", "Erkin javob. Tanlov asoslanishi kerak."], ["Eng qiyin joyi nima bo'ldi va qanday hal qildingiz?", "Erkin javob."], ["Yana bir motor bo'lsa, nima qo'shardingiz?", "Erkin javob."]],
    quiz: [["Sekin, lekin kuchli uzatma qaysi?", "Kichik g'ildirak → katta g'ildirak", "Katta → kichik", "Ikkalasi teng"], ["Aylanishni borib-kelishga nima aylantiradi?", "Krivoship", "Tasma", "Qarshi yuk"], ["Arqonni o'rab yuk ko'taruvchi mexanizm?", "Lebyodka", "Richag", "Shkiv"], ["Adolatli tajribada nechta narsa o'zgaradi?", "Bitta", "Ikkita", "Hammasi"], ["Qo'riqchi qurilma doim ishlashi uchun qaysi blok?", "Takrorlash", "Tovush", "Chiroq"], ["Kranni nima muvozanatlaydi?", "Qarshi yuk", "Uzun arqon", "Datchik"]],
    game: { type: "memory", title: "Juftini top: mexanizm va vazifasi", pairs: [["⚙️ Tishli uzatma", "Tezlik va kuchni o'zgartiradi"], ["➰ Tasma", "Uzoqqa uzatadi"], ["🔧 Krivoship", "Aylanish → borib-kelish"], ["🧵 Lebyodka", "Arqonni o'raydi"], ["⚖️ Qarshi yuk", "Muvozanat saqlaydi"], ["🎮 Egilish datchigi", "Pult bo'la oladi"]] },
    topic: [
      { e: "🎯", h: "Muammodan boshlaymiz", p: "Yaxshi ixtiro «nima yasasam ekan?» degan savoldan emas, «kimga nima qiyin?» degan savoldan boshlanadi.", q: "Maktabda qanday muammoni robot hal qila olardi?", a: "Masalan: doskani artish, gullarga suv quyish, eshikni ochib turish." },
      { e: "🧰", h: "Asboblar qutimiz", p: "5 ta mexanizm (tishli uzatma, tasma, krivoship, richag, lebyodka), 2 ta datchik, chiroq, tovush, takrorlash. Kerakligini tanlaymiz — hammasini emas.", q: "Hammasini bitta modelga tiqsak yaxshi bo'ladimi?", a: "Yo'q. Yaxshi model — vazifasiga yetarli, ortiqchasi yo'q." },
      { e: "🗣", h: "Himoya", p: "To'rt gap: muammo nima edi, robotim nima qiladi, u qanday ishlaydi, yana nimani yaxshilardim. Savollarga xotirjam javob beramiz.", q: "«Bilmayman» deyish mumkinmi?", a: "Ha: «Buni hali sinab ko'rmadim, lekin o'ylashimcha...»" }
    ],
    prog: [{ t: "Namuna: sezadi — ishlaydi — kutadi — takrorlaydi", b: ["y:▶ Boshlash", "o:🔁 Takrorlash [", "o:⏳ Kutish 👀", "g:↻ 2 soniya", "r:🔊 Tovush", "o:⏳ 3 soniya", "o:]"] }],
    video: [["aJOMnWbEc80", "WeDo 2.0 dan 22 ta qiziqarli model (g'oya uchun)"], ["WTY9iwY3esA", "WeDo 2.0: 40 ta model to'plami"]],
    yq: "wedo 2.0 creative projects",
    hw: ["Scratch'ni eslang: o'tgan yili qanday loyiha qilgan edingiz? Uni ochib ko'ring yoki eslab chizing."]
  },
  {
    n: 15, mod: 3, t: "Scratch'ga qaytamiz: jonli akvarium",
    goal: "O'quvchilar Scratch asoslarini tiklaydi (sprayt, hodisa, harakat, sikl, kostyum) va bir nechta baliq mustaqil suzadigan akvarium yaratadi.",
    out: ["Har bir sprayt o'z skriptiga ega ekanini tushuntiradi", "`forever`, `move`, `if on edge, bounce` bilan uzluksiz harakat tuzadi", "Skriptni boshqa spraytga nusxalaydi va o'zgartiradi"],
    need: ["Har o'quvchiga kompyuter", "Scratch 3 (scratch.mit.edu yoki oflayn)", "Proyektor"],
    plan: [["5", "Takrorlash savollari: sprayt, sahna, yashil bayroq, sikl."], ["5", "Namuna ko'rsatish: tayyor akvarium."], ["25", "Amaliy ish: akvarium."], ["4", "«Juftini top» o'yini."], ["3", "Test."], ["3", "Loyihani saqlash."]],
    tips: ["Skriptni nusxalash: bloklar to'plamini sichqoncha bilan ushlab, boshqa sprayt belgisi ustiga tashlang. Bu «sehr»ni albatta ko'rsating.", "Baliq teskari suzib qolsa: yo'nalish sozlamasida aylanish uslubini «chap-o'ng» qiling."],
    steps: ["Yangi loyiha. Mushukni o'chiring, «Underwater» fonini tanlang.", "Fish spraytini qo'shing.", "Skript: `when green flag clicked` → `forever` ichiga `move 3 steps` va `if on edge, bounce`.", "Baliq teskari bo'lib qolmasligi uchun boshiga `set rotation style left-right` qo'shing.", "Ikkinchi baliq qo'shing va birinchisining skriptini unga sudrab nusxalang. Tezligini 5 qiling.", "Har baliqqa boshlang'ich yo'nalish bering: `point in direction 45` (bittasiga), `-60` (boshqasiga).", "Uchinchi sprayt — qisqichbaqa: bosilganda `say Salom! for 1 seconds`.", "Loyihani «Akvarium» nomi bilan saqlang."],
    extra: ["Baliq suzganda kostyumi almashsin (`next costume`).", "Pufakcha qo'shing: pastdan yuqoriga ko'tarilsin va tepaga yetganda yana pastdan chiqsin."],
    ask: [["Nega har baliqqa alohida skript kerak?", "Har bir sprayt faqat o'z skriptini bajaradi."], ["`forever` bo'lmasa baliq nima qilardi?", "Bir marta 3 qadam yurib, to'xtab qolardi."], ["Skriptni boshqa spraytga qanday nusxalaymiz?", "Bloklarni ushlab, o'sha sprayt belgisi ustiga tashlaymiz."], ["Baliq tezligini nima belgilaydi?", "`move` blokidagi qadamlar soni."]],
    quiz: [["Uzluksiz harakat uchun qaysi blok kerak?", "forever", "wait", "say"], ["Sprayt chetdan qaytishi uchun qaysi blok?", "if on edge, bounce", "go to x y", "hide"], ["Baliqni tezlashtirish uchun nimani o'zgartiramiz?", "move blokidagi sonni", "Fon rangini", "Sprayt nomini"], ["Har bir sprayt nimani bajaradi?", "Faqat o'z skriptini", "Hamma skriptlarni", "Hech narsani"], ["Dastur nima bosilganda boshlanadi?", "Yashil bayroq", "Qizil tugma", "Fon"]],
    game: { type: "memory", title: "Juftini top: Scratch bloklari", pairs: [["🟨 when flag clicked", "Dasturni boshlaydi"], ["🟦 move 10 steps", "Yurgizadi"], ["🟧 forever", "To'xtovsiz takrorlaydi"], ["🟪 next costume", "Ko'rinishni almashtiradi"], ["🟦 if on edge, bounce", "Chetdan qaytaradi"], ["🟪 say", "Gapirtiradi"]] },
    topic: [
      { e: "🐠", h: "Har spraytning o'z dasturi", p: "Scratch'da har bir sprayt — alohida «robot». Baliqni tanlab yozgan skriptimiz faqat shu baliqqa tegishli.", q: "10 ta baliq bo'lsa, 10 marta yozamizmi?", a: "Yo'q — bir marta yozib, qolganlariga nusxalaymiz." },
      { e: "🔁", h: "Uzluksiz harakat retsepti", p: "`forever` ichida: bir oz yur → chetga yetdingmi, qayt. Shu ikki blok har qanday «jonli» spraytning asosi.", q: "Bu WeDo'dagi qaysi blokka o'xshaydi?", a: "`Takrorlash` blokiga." },
      { e: "🧭", h: "Yo'nalish", p: "Sprayt qaysi tomonga qarasa, o'sha tomonga yuradi. 90 — o'ngga, -90 — chapga, 0 — yuqoriga, 180 — pastga. Orasidagi sonlar — qiya yo'nalish.", q: "45 qaysi tomon?", a: "O'ng-yuqoriga, qiya." }
    ],
    prog: [{ t: "Suzuvchi baliq", b: ["y:🏳 Bayroq bosilganda", "b:Aylanish uslubi: chap-o'ng", "o:🔁 Doim [", "b:3 qadam yur", "b:Chetga tegsa, qayt", "o:]"] }],
    video: [["jzvWBP1QusA", "Scratch dasturini o'rganamiz, 1-dars (o'zbek tilida)"], ["5rhjX2JDM3A", "Scratch haqida boshlang'ich ma'lumot (o'zbek tilida)"]],
    yq: "scratch akvarium animatsiya",
    hw: ["Akvariumingizga yana qanday jonzot qo'shardingiz? U qanday harakatlanadi? Chizib, harakatini so'z bilan yozing."]
  },
  {
    n: 16, mod: 3, t: "Koordinatalar: x va y",
    goal: "O'quvchilar sahnadagi har bir nuqtaning manzili — x va y koordinatalarini o'rganadi va spraytni aniq joyga yuboradi.",
    out: ["Sahna markazi (0, 0) ekanini va chegaralarini biladi", "`go to x: y:` va `glide` bloklari bilan spraytni aniq nuqtaga olib boradi", "`change x by` / `change y by` bilan to'rt tomonga harakat tuzadi"],
    need: ["Kompyuterlar, Scratch 3", "Doskada katakli sahna chizmasi", "«Xy-grid» foni (Scratch fonlar kutubxonasida)"],
    plan: [["5", "O'yin: «Dengiz jangi»dagi kabi — doskadagi katakda nuqtani topish."], ["8", "Yangi mavzu: x — chap-o'ng, y — past-yuqori. Markaz (0, 0)."], ["22", "Amaliy ish: «Xazina izlovchi»."], ["4", "«Saralash» o'yini."], ["3", "Test."], ["3", "Saqlash."]],
    tips: ["Manfiy sonlar 3-sinfda o'tilmagan bo'lishi mumkin. «Minus — markazdan chapga yoki pastga» deb tushuntiring, hisob-kitobga kirmang.", "Sichqonchani sahna ustida yurgizsangiz, pastda x va y ko'rinadi. Bolalar burchaklarni shu bilan tekshirsin."],
    steps: ["«Xy-grid» fonini tanlang: unda o'qlar va sonlar ko'rinadi.", "Mushukni sichqoncha bilan suring va pastdagi x, y sonlari o'zgarishini kuzating.", "Skript: `when green flag clicked` → `go to x: 0 y: 0`. Mushuk markazga keldi.", "Qo'shing: `glide 1 secs to x: 200 y: 0` → `glide 1 secs to x: 200 y: 150` → `glide 1 secs to x: -200 y: 150` → `glide 1 secs to x: 0 y: 0`.", "Yangi skriptlar: `when right arrow key pressed` → `change x by 10`; chap strelka → `change x by -10`.", "Yuqori strelka → `change y by 10`; pastki strelka → `change y by -10`.", "Xazina sprayti qo'shing va uni `go to x: 180 y: -120` ga joylang.", "Mushukni strelkalar bilan xazinaga olib boring. Uning koordinatalari qanday bo'ldi?"],
    extra: ["Mushuk 5 ta nuqta bo'ylab yulduz shaklida suzib chiqsin.", "Xazina har safar boshqa joyda paydo bo'lsin: `go to random position`."],
    ask: [["x nimani bildiradi?", "Chap-o'ng bo'yicha joyni. O'ngga — katta, chapga — kichik (manfiy)."], ["y nimani bildiradi?", "Past-yuqori bo'yicha joyni. Yuqoriga — katta, pastga — manfiy."], ["Sahna markazining koordinatasi?", "x: 0, y: 0."], ["`go to` va `glide` farqi nima?", "`go to` bir zumda sakraydi, `glide` belgilangan vaqtda sirpanib boradi."]],
    quiz: [["Sahna markazi qayerda?", "x: 0, y: 0", "x: 100, y: 100", "x: 240, y: 180"], ["Spraytni o'ngga surish uchun nima qilamiz?", "x ni oshiramiz", "y ni oshiramiz", "x ni kamaytiramiz"], ["Spraytni pastga tushirish uchun?", "y ni kamaytiramiz", "y ni oshiramiz", "x ni oshiramiz"], ["Qaysi blok sirpanib boradi?", "glide", "go to", "hide"], ["x: -200 qayerda?", "Chap tomonda", "O'ng tomonda", "Tepada"]],
    game: { type: "sort", title: "Sprayt qayerda?", desc: "Koordinataga qarab sahnaning qaysi yarmida ekanini toping.", cats: ["O'ng yarmida", "Chap yarmida"], items: [["x: 150, y: 20", 0], ["x: -80, y: 100", 1], ["x: 200, y: -150", 0], ["x: -200, y: -100", 1], ["x: 30, y: 0", 0], ["x: -10, y: 170", 1], ["x: 240, y: 180", 0], ["x: -240, y: 0", 1]] },
    topic: [
      { e: "📍", h: "Har nuqtaning manzili bor", p: "Uyning manzili — ko'cha va uy raqami. Sahnadagi nuqtaning manzili — x va y. Ikki son bilan istalgan joyni aniq aytish mumkin.", q: "Kinoteatrdagi o'rin qanday topiladi?", a: "Qator va o'rin raqami bilan — bu ham ikki sonli manzil." },
      { e: "↔️", h: "x — chap va o'ng", p: "Markazda x = 0. O'ngga yurgan sari x ortadi (240 gacha). Chapga yurgan sari kamayadi (-240 gacha).", q: "x: 240 qayerda?", a: "Sahnaning eng o'ng chetida." },
      { e: "↕️", h: "y — past va yuqori", p: "Markazda y = 0. Yuqoriga — ortadi (180 gacha), pastga — kamayadi (-180 gacha). Yozganda avval x, keyin y.", q: "O'ng yuqori burchak koordinatasi?", a: "x: 240, y: 180." }
    ],
    prog: [
      { t: "Markazdan aylanib chiqish", b: ["y:🏳 Bayroq bosilganda", "b:x: 0 y: 0 ga bor", "b:1 soniyada x: 200 y: 0 ga suz", "b:1 soniyada x: 200 y: 150 ga suz", "b:1 soniyada x: 0 y: 0 ga suz"] },
      { t: "Strelka bilan o'ngga", b: ["y:⌨ O'ng strelka bosilganda", "b:x ni 10 ga o'zgartir"] }
    ],
    video: [["4Wx0EaF5J4E", "Scratch: x va y koordinatalar (ingliz tilida)"], ["YPB_DwRNw0g", "Scratch boshlang'ich darslar (o'zbek tilida)"]],
    yq: "scratch koordinatalar x y",
    hw: ["Katakli daftarga o'qlar chizing va 5 ta nuqtani belgilang: (2, 3), (-2, 3), (-2, -1), (2, -1), (0, 5). Ularni tutashtirsangiz nima chiqadi?"]
  }
);
