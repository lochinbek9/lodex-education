// 3-sinf · 3 oylik dastur · 12 hafta × 2 dars = 24 dars (har biri 45 daqiqa)
// Format 2-sinf bilan bir xil. Qo'shimcha maydonlar: topic (mavzu kartochkalari), prog (dastur sxemasi).
// prog rang kodi: y — boshlash/hodisa, o — boshqaruv/kutish, g — motor (WeDo) yoki operator/qalam (Scratch),
//   r — tovush/ekran, b — harakat, p — ko'rinish, s — sezgi, v — o'zgaruvchi
window.QOLLANMA.grades[3] = {
  title: "3-sinf · 3 oylik dastur",
  desc: "8–9 yoshli o'quvchilar uchun: mexanizmlar qanday ishlashini tushunish, WeDo 2.0 da tajriba va ochiq loyihalar, Scratch'da hisobli, shartli va bosqichli o'yinlar yaratish.",
  stats: [["12", "hafta"], ["24", "dars"], ["45", "daqiqa"], ["3", "modul"]],
  modules: [
    { id: 1, color: "m1", title: "1-modul. Mexanizmlar", weeks: "1–2-hafta", desc: "Takrorlash va oddiy mexanizmlar: tishli uzatma, tasmali uzatma, richag va krivoship. Har darsda kichik tajriba." },
    { id: 2, color: "m2", title: "2-modul. WeDo 2.0 loyihalar", weeks: "3–7-hafta", desc: "Tajriba o'tkazish va natijani yozish, ikki datchikni birga ishlatish, ochiq loyihalar: o'quvchi modelni o'zi loyihalaydi." },
    { id: 3, color: "m3", title: "3-modul. Scratch: o'yin yaratish", weeks: "8–12-hafta", desc: "Koordinatalar, shartlar, o'zgaruvchilar, tasodifiy sonlar, xabarlar va klonlar. Har darsda bitta ishlaydigan o'yin.", progNote: "Ranglar Scratch'dagi blok guruhlariga mos: sariq — hodisalar, to'q sariq — boshqaruv, ko'k — harakat, binafsha — ko'rinish, havorang — sezgi, qizg'ish — o'zgaruvchi, yashil — operator va qalam." }
  ],
  lessons: [
    {
      n: 1, mod: 1, t: "Qaytamiz: robot, algoritm va WeDo qoidalari",
      goal: "O'quvchilar o'tgan yilgi bilimlarini tiklaydi: robot qismlari, algoritm, WeDo detallari va dastur bloklari. Kichik model yig'ib, uni uch xil dastur bilan sinaydi.",
      out: ["Robotning 4 qismini va vazifasini aytadi", "Smarthubni mustaqil ulaydi va motorni dasturlaydi", "Bir modelni kamida 3 xil dastur bilan ishlatadi"],
      need: ["Har juftlikka WeDo 2.0 to'plami", "WeDo 2.0 ilovasi o'rnatilgan planshet yoki kompyuter", "Proyektor"],
      plan: [["5", "Tanishuv va yil rejasi: bu yil mexanizmlarni o'rganamiz, o'z loyihamizni yasaymiz va Scratch'da o'yin tuzamiz."], ["8", "Tezkor takrorlash: «Juftini top» o'yini va savollar."], ["5", "To'plam qoidalari va juftlikdagi rollar: quruvchi, dasturchi."], ["20", "Amaliy ish: 10 daqiqada aylanuvchi model va 3 ta dastur."], ["4", "Test."], ["3", "Yig'ishtirish."]],
      tips: ["Yangi kelgan o'quvchi bo'lsa, uni tajribali o'quvchi bilan juftlang — tushuntirgan bola o'zi ham mustahkamlaydi.", "Bugun maqsad — murakkab model emas, ishonch. Hamma motorini aylantira olsin."],
      pt: "Amaliy ish: «Aylanma belgi»",
      steps: ["Smarthubga motorni ulang va motor o'qiga uzun to'sin (belgi) o'rnating.", "Smarthubni ilovaga ulang. Chiroq ko'k yondimi?", "1-dastur: belgi 3 soniya aylansin.", "2-dastur: belgi bir tomonga 2 soniya, keyin teskari tomonga 2 soniya aylansin.", "3-dastur: `Takrorlash` bloki ichida — aylan, 1 soniya kut, yana aylan. To'xtovsiz.", "Harakat datchigini ulang: qo'l yaqinlashsa, belgi to'xtasin.", "Dasturlaringizdan birini qo'shni juftlikka tushuntiring."],
      extra: ["Quvvat har aylanishda oshib borsin: 2, 5, 8, 10."],
      ask: [["Robot oddiy mashinadan nimasi bilan farq qiladi?", "Robot dastur bo'yicha o'zi ishlaydi: sezadi, qaror qiladi, harakat qiladi."], ["Algoritm nima?", "Buyruqlarning aniq tartibli ketma-ketligi."], ["WeDo'da qanday datchiklar bor?", "Harakat datchigi va egilish datchigi."], ["`Takrorlash` bloki nima qiladi?", "Ichidagi bloklarni qayta-qayta bajaradi."]],
      quiz: [["Robotning miyasi WeDo'da nima deyiladi?", "Smarthub", "Motor", "Tasma"], ["Motor quvvati qaysi oraliqda?", "0 dan 10 gacha", "1 dan 5 gacha", "0 dan 100 gacha"], ["Qaysi blok datchikni kutadi?", "Kutish bloki", "Tovush bloki", "Boshlash bloki"], ["Motorni teskari aylantirish uchun nima o'zgaradi?", "Yo'nalish", "Quvvat", "Vaqt"], ["Dars oxirida nima qilamiz?", "Detallarni joyiga yig'amiz", "Modelni uyga olib ketamiz", "Qutini ochiq qoldiramiz"]],
      game: { type: "memory", title: "Juftini top: o'tgan yilni eslaymiz", pairs: [["🟦 Smarthub", "Robotning miyasi"], ["⚙️ Motor", "Harakatlantiradi"], ["👀 Harakat datchigi", "Narsani sezadi"], ["↕️ Egilish datchigi", "Qiyalikni sezadi"], ["📝 Algoritm", "Buyruqlar tartibi"], ["🔁 Takrorlash", "Yana va yana"]] },
      topic: [
        { e: "🤖", h: "Robot = sezadi + o'ylaydi + harakat qiladi", p: "Datchik sezadi, dastur qaror qiladi, motor harakat qiladi. Shu uchtadan bittasi bo'lmasa — u robot emas, oddiy mashina.", q: "Pultli mashina robotmi?", a: "Yo'q: uni odam boshqaradi, o'zi sezib qaror qilmaydi." },
        { e: "🧭", h: "Bu yil nimalar o'rganamiz?", p: "Mexanizmlar ichida nima borligini ko'ramiz, WeDo'da tajriba o'tkazamiz va o'z loyihamizni yasaymiz. Keyin Scratch'da hisobli o'yinlar tuzamiz.", q: "Mexanizm nima deb o'ylaysiz?", a: "Harakatni bir joydan boshqa joyga uzatadigan yoki o'zgartiradigan qurilma." },
        { e: "🤝", h: "Juftlikda ishlash", p: "Biri quradi, biri detal topadi va dasturlaydi. Har 10 daqiqada rollar almashadi. Bahslashsak — ikkala g'oyani ham sinab ko'ramiz.", q: "Sherigingiz xato qilsa nima deysiz?", a: "«Kel, birga tekshiramiz» — xatoni birga topamiz." }
      ],
      prog: [{ t: "To'xtovsiz aylanib, dam oladigan belgi", b: ["y:▶ Boshlash", "o:🔁 Takrorlash [", "g:Quvvat 5", "g:↻ 2 soniya", "o:⏳ 1 soniya", "o:]"] }],
      video: [["bChj1Tx4SGc", "WeDo 2.0 bilan tanishuv (qisqa)"], ["97eQI2vxcYs", "Robototexnika nima? (o'zbek tilida)"]],
      yq: "lego wedo 2.0 darslar",
      hw: ["Uyda ichida mexanizm bor 5 ta narsani toping (soat, velosiped, mikser...). Ro'yxat qiling."]
    },
    {
      n: 2, mod: 1, t: "Tishli uzatma: tezlik va kuch",
      goal: "O'quvchilar tishli g'ildiraklar aylanishni qanday uzatishini, kichik va katta g'ildirak juftligi tezlik hamda kuchni qanday o'zgartirishini tajribada ko'radi.",
      out: ["Yetaklovchi va yetaklanuvchi g'ildirakni ko'rsatadi", "Tezlatuvchi va sekinlatuvchi uzatmani yig'adi", "Qo'shni g'ildiraklar qarama-qarshi aylanishini tushuntiradi"],
      need: ["WeDo 2.0 to'plami (8 tishli va 24 tishli g'ildiraklar)", "Planshet yoki kompyuter", "Belgilash uchun rangli stiker"],
      plan: [["5", "Uy vazifasi: mexanizmli narsalar. Savol: velosipedda nega zanjir va tishli g'ildirak bor?"], ["8", "Yangi mavzu: tishli uzatma. Tishlarni sanaymiz: 8 va 24."], ["20", "Amaliy ish: ikki xil uzatma va tajriba jadvali."], ["5", "«Saralash» o'yini."], ["4", "Test."], ["3", "Yig'ishtirish."]],
      tips: ["G'ildiraklarga stiker yopishtiring — aylanishlarni sanash osonlashadi.", "«Uzatish nisbati» atamasini kiritmang. «Kichigi 3 marta aylansa, kattasi 1 marta» degan kuzatuv yetarli."],
      steps: ["To'sinlardan ramka yasang va motorni mahkamlang.", "Motor o'qiga 8 tishli g'ildirak, yonidagi o'qqa 24 tishli g'ildirak o'rnating. Tishlar ilashsin.", "Katta g'ildirakka stiker yopishtiring. Dastur: `Boshlash` → `Quvvat 5` → `Motor 5 soniya`.", "Sanang: katta g'ildirak 5 soniyada necha marta aylandi? Jadvalga yozing.", "Endi g'ildiraklar o'rnini almashtiring: motorda 24 tishli, yonida 8 tishli.", "Yana sanang. Qaysi holatda chiqish tezroq?", "Chiqish o'qini barmoq bilan sekin ushlab ko'ring: qaysi holatda to'xtatish qiyinroq?", "G'ildiraklar qaysi tomonga aylanayotganini strelka bilan chizing."],
      extra: ["Uchinchi g'ildirak qo'shing. Birinchi va uchinchi g'ildirak qaysi tomonga aylanadi?"],
      ask: [["Tishli uzatma nima qiladi?", "Aylanishni bir o'qdan ikkinchisiga uzatadi, tezlik va kuchni o'zgartiradi."], ["Kichik g'ildirak kattasini aylantirsa nima bo'ladi?", "Chiqish sekinlashadi, lekin kuchi ortadi."], ["Katta g'ildirak kichigini aylantirsa-chi?", "Chiqish tezlashadi, lekin kuchi kamayadi."], ["Ikki qo'shni g'ildirak qaysi tomonga aylanadi?", "Qarama-qarshi tomonga."]],
      quiz: [["Motorda kichik, chiqishda katta g'ildirak. Chiqish qanday?", "Sekin, lekin kuchli", "Tez va kuchli", "O'zgarmaydi"], ["Qo'shni tishli g'ildiraklar qanday aylanadi?", "Qarama-qarshi tomonga", "Bir tomonga", "Aylanmaydi"], ["Tezlatish uchun motorga qaysi g'ildirak qo'yiladi?", "Katta", "Kichik", "Farqi yo'q"], ["8 tishli 3 marta aylansa, 24 tishli necha marta aylanadi?", "1 marta", "3 marta", "8 marta"], ["Tishli uzatma qayerda bor?", "Soat mexanizmida", "Kitobda", "Qalamda"]],
      game: { type: "sort", title: "Tezlashadimi yoki kuchayadimi?", desc: "Motordagi g'ildirak → chiqishdagi g'ildirak. Chiqishda nima bo'ladi?", cats: ["Tezlashadi", "Kuchayadi (sekinlashadi)"], items: [["Katta → kichik", 0], ["Kichik → katta", 1], ["24 tishli → 8 tishli", 0], ["8 tishli → 24 tishli", 1], ["Velosiped: tepalikka chiqish uzatmasi", 1], ["Velosiped: tekis yo'lda tez yurish uzatmasi", 0], ["Poyga mashinasi", 0], ["Og'ir yuk tortuvchi traktor", 1]] },
      topic: [
        { e: "⚙️", h: "Tishli g'ildirak", p: "Tishlari bir-biriga ilashib, biri ikkinchisini aylantiradi. Motorga ulangani — yetaklovchi, u aylantirayotgani — yetaklanuvchi.", q: "Tishlar bo'lmasa nima bo'lardi?", a: "G'ildiraklar sirpanib ketardi va aylanish uzatilmasdi." },
        { e: "🐢", h: "Kichik → katta: sekin, lekin kuchli", p: "8 tishli g'ildirak 24 tishlini aylantirsa, kattasi 3 marta sekin aylanadi. Evaziga kuchi ortadi — og'ir yukni tortadi.", q: "Tepalikka chiqayotgan velosipedchi qaysi uzatmani tanlaydi?", a: "Sekin, lekin kuchli uzatmani." },
        { e: "🐇", h: "Katta → kichik: tez, lekin kuchsiz", p: "24 tishli g'ildirak 8 tishlini aylantirsa, kichigi 3 marta tez aylanadi. Lekin uni barmoq bilan to'xtatish oson.", q: "Ventilyator parragi uchun qaysi biri ma'qul?", a: "Tezlatuvchi uzatma — parrak yengil, tez aylanishi kerak." }
      ],
      prog: [{ t: "Tajriba dasturi (ikkala uzatma uchun bir xil)", b: ["y:▶ Boshlash", "g:Quvvat 5", "g:↻ Soat yo'nalishida", "g:⏱ 5 soniya"] }],
      video: [["a68_g2IpepU", "Tishli uzatmalar haqida umumiy ma'lumot (o'zbek tilida)"], ["BY5ile8623w", "LEGO WeDo: tezlikni oshiruvchi tishli uzatma"]],
      yq: "tishli uzatma qanday ishlaydi lego",
      hw: ["Velosiped yoki soat rasmini chizing va tishli g'ildiraklarini belgilang."]
    },
    {
      n: 3, mod: 1, t: "Tasmali uzatma va aylanish yo'nalishi",
      goal: "O'quvchilar shkiv va tasma yordamida aylanishni uzoqroq masofaga uzatadi, tasmani kesishtirib yo'nalishni o'zgartiradi va tishli uzatma bilan taqqoslaydi.",
      out: ["Tasmali uzatma yig'adi", "To'g'ri va kesishgan tasma farqini ko'rsatadi", "Tishli va tasmali uzatmaning afzalliklarini aytadi"],
      need: ["WeDo 2.0 to'plami (shkivlar, tasmalar)", "Planshet yoki kompyuter", "Qog'ozdan qirqilgan parrak yoki gul"],
      plan: [["5", "Takrorlash: tishli uzatma. Savol: g'ildiraklar bir-biridan uzoq bo'lsa-chi?"], ["7", "Yangi mavzu: shkiv va tasma. To'g'ri va kesishgan tasma."], ["20", "Amaliy ish: karusel va tajriba."], ["5", "«Juftini top» o'yini."], ["5", "Test."], ["3", "Yig'ishtirish."]],
      tips: ["Tasma juda tarang bo'lsa motor qiynaladi, bo'sh bo'lsa sirpanadi. Bolalar o'zi sozlasin.", "Tasma sirpanishi — kamchilik emas, himoya: biror narsa tiqilsa, motor kuymaydi. Buni ayting."],
      steps: ["Motor o'qiga kichik shkiv, undan 10–12 sm narida boshqa o'qqa katta shkiv o'rnating.", "Ikkala shkivga tasma kiydiring.", "Katta shkiv o'qiga qog'oz parrak yoki platforma o'rnating — karusel tayyor.", "Dastur: `Boshlash` → `Quvvat 6` → `Motor soat yo'nalishida`. Ikkala shkiv qaysi tomonga aylanyapti?", "Tasmani «8» shaklida kesishtirib kiydiring. Endi-chi?", "Shkivlar o'rnini almashtiring: motorda katta, karuselda kichik. Tezlik qanday o'zgardi?", "Karuselni barmoq bilan sekin to'xtating. Motor nima qildi? Tasma-chi?"],
      extra: ["Dasturga `Takrorlash` qo'shing: karusel 3 soniya o'ngga, 3 soniya chapga aylansin."],
      ask: [["Tasmali uzatma qachon qulay?", "O'qlar bir-biridan uzoq bo'lganda va shovqinsiz ishlash kerak bo'lganda."], ["To'g'ri tasmada shkivlar qanday aylanadi?", "Bir tomonga."], ["Kesishgan tasmada-chi?", "Qarama-qarshi tomonga."], ["Tasmaning kamchiligi nima?", "Og'ir yukda sirpanib ketadi."]],
      quiz: [["To'g'ri tasmada shkivlar qanday aylanadi?", "Bir tomonga", "Qarama-qarshi", "Navbat bilan"], ["Tasmani «8» qilib kesishtirsak nima o'zgaradi?", "Aylanish yo'nalishi", "Motor quvvati", "Tasma rangi"], ["O'qlar uzoq bo'lsa qaysi uzatma qulay?", "Tasmali", "Tishli", "Hech qaysi"], ["Og'ir yukda tasma nima qiladi?", "Sirpanadi", "Kuchayadi", "Uzayadi"], ["Kichik shkiv kattasini aylantirsa chiqish qanday?", "Sekinlashadi", "Tezlashadi", "O'zgarmaydi"]],
      game: { type: "memory", title: "Juftini top: uzatmalar", pairs: [["⚙️ Tishli uzatma", "Sirpanmaydi, aniq"], ["➰ Tasmali uzatma", "Uzoqqa uzatadi"], ["➿ Kesishgan tasma", "Yo'nalishni o'zgartiradi"], ["🔘 Shkiv", "Tasma kiyadigan g'ildirak"], ["🚲 Velosiped", "Zanjirli uzatma"], ["🧺 Kir yuvish mashinasi", "Tasma barabanni aylantiradi"]] },
      topic: [
        { e: "➰", h: "Shkiv va tasma", p: "Shkiv — o'rtasida ariqchasi bor g'ildirak. Tasma shu ariqchaga kiyiladi va bir shkivdan ikkinchisiga aylanishni olib boradi.", q: "Tasma nimadan yasalgan va nega?", a: "Rezinadan — u cho'ziladi va shkivga yaxshi yopishadi." },
        { e: "🔄", h: "To'g'ri va kesishgan tasma", p: "Tasma oddiy kiyilsa, ikkala shkiv bir tomonga aylanadi. «8» shaklida kesishtirilsa — qarama-qarshi tomonga.", q: "Tishli uzatmada yo'nalishni o'zgartirish uchun nima qilardik?", a: "Hech narsa — qo'shni g'ildiraklar o'zi qarama-qarshi aylanadi." },
        { e: "⚖️", h: "Qaysi biri yaxshi?", p: "Tishli uzatma kuchli va aniq, lekin g'ildiraklar yonma-yon turishi shart. Tasmali uzatma uzoqqa yetadi va jim ishlaydi, lekin sirpanishi mumkin.", q: "Soat uchun qaysi uzatma kerak? Nega?", a: "Tishli — soat aniq yurishi kerak, sirpanish bo'lmasligi lozim." }
      ],
      prog: [{ t: "Karusel u yoqqa-bu yoqqa aylanadi", b: ["y:▶ Boshlash", "o:🔁 Takrorlash [", "g:↻ 3 soniya", "g:↺ 3 soniya", "o:]"] }],
      video: [["R7CZjpKr7EQ", "Aylanma harakatni uzatish usullari (o'zbek tilida)"], ["KhKbOYPYCbc", "WeDo 2.0: tasmali ventilyator (namuna)"]],
      yq: "tasmali uzatma shkiv lego wedo",
      hw: ["Jadval tuzing: tishli va tasmali uzatmaning 2 tadan yaxshi va 2 tadan yomon tomoni."]
    },
    {
      n: 4, mod: 1, t: "Richag va krivoship: yuradigan mexanizm",
      goal: "O'quvchilar aylanma harakat qanday qilib borib-keluvchi harakatga aylanishini ko'radi va g'ildiraksiz yuradigan model yig'adi.",
      out: ["Krivoship aylanishni borib-kelishga aylantirishini tushuntiradi", "Model kutubxonasidan «Yurish» asosini yig'adi", "Oyoq uzunligi qadamga ta'sirini kuzatadi"],
      need: ["WeDo 2.0 to'plami", "Planshet yoki kompyuter (ilovadagi model kutubxonasi)", "Chizg'ich"],
      plan: [["5", "Savol: hayvonlarda g'ildirak yo'q. Ular qanday yuradi? Robot ham yura oladimi?"], ["7", "Yangi mavzu: richag (tayanch nuqtasi) va krivoship (aylanadigan tirsak)."], ["22", "Amaliy ish: yuradigan model."], ["4", "«Tartibga sol» o'yini."], ["4", "Test."], ["3", "Yig'ishtirish."]],
      tips: ["Model yurmay, joyida titrasa — oyoq uchiga rezina detal qo'ying yoki gilamda sinang.", "Krivoshipni tushuntirish uchun velosiped pedalini ko'rsating: oyoq yuqori-pastga, g'ildirak aylanaga."],
      steps: ["Ilovada model kutubxonasidan «Yurish» asosiy modelini oching.", "Yo'riqnoma bo'yicha yig'ing. Motordan oyoqqacha harakat qanday o'tayotganini kuzating.", "Krivoshipni toping: o'qdan chetroqqa mahkamlangan detal. U aylanganda oyoq oldinga-orqaga boradi.", "Dastur: `Boshlash` → `Quvvat 6` → `Motor 5 soniya`. Model necha santimetr yurdi?", "Quvvatni 3 va 10 qilib sinang. Qaysi birida ravon yuradi?", "Oyoqlarni uzunroq to'singa almashtiring. Qadam kattalashdimi?", "Modelga hayvon ko'rinishini bering: bosh, dum, quloq."],
      extra: ["Egilish datchigini qo'shing: pult oldinga egilsa — oldinga, orqaga egilsa — orqaga yursin."],
      ask: [["Krivoship nima qiladi?", "Aylanma harakatni borib-keluvchi harakatga aylantiradi."], ["Richag nima?", "Tayanch nuqtasi atrofida buriladigan qattiq tayoq. Arg'imchoq, qaychi — richag."], ["Nega ba'zi robotlar g'ildirak o'rniga oyoq bilan yuradi?", "Oyoq zinapoya, tosh va notekis joydan o'ta oladi."], ["Oyoq uzaysa nima o'zgaradi?", "Qadam kattalashadi, lekin model beqarorroq bo'ladi."]],
      quiz: [["Krivoship nimani nimaga aylantiradi?", "Aylanishni borib-kelishga", "Tovushni yorug'likka", "Tezlikni rangga"], ["Qaysi biri richag?", "Arg'imchoq", "To'p", "Arqon"], ["Oyoqli robot qayerda g'ildiraklidan yaxshi?", "Notekis joyda", "Silliq yo'lda", "Suvda"], ["Velosiped pedalida oyoq qanday harakatlanadi?", "Yuqoriga-pastga", "Faqat oldinga", "Harakatlanmaydi"], ["Model joyida titrasa nima qilamiz?", "Oyoq uchiga rezina qo'yamiz", "Motorni olib tashlaymiz", "Smarthubni o'chiramiz"]],
      game: { type: "order", title: "Tartibga sol: harakat qanday uzatiladi?", desc: "Motordan oyoqqacha bo'lgan yo'lni tartiblang.", steps: ["Smarthub motorga buyruq beradi", "Motor o'qni aylantiradi", "O'q krivoshipni aylantiradi", "Krivoship oyoqni oldinga-orqaga suradi", "Model qadam tashlaydi"] },
      topic: [
        { e: "🦵", h: "G'ildiraksiz harakat", p: "Tabiatda g'ildirak yo'q: hayvonlar oyoq, qanot, suzgich bilan harakatlanadi. Muhandislar tabiatdan o'rganib, yuradigan robotlar yasaydi.", q: "Qaysi hayvonga o'xshash robot ko'rgansiz?", a: "Robot it, robot o'rgimchak, ilonsimon qutqaruvchi robot." },
        { e: "🔧", h: "Krivoship", p: "O'q aylanadi. Unga chetroqdan ulangan detal esa aylana chizadi. Shu detalga oyoq ulansa, u oldinga va orqaga boradi.", q: "Krivoshipni yana qayerda ko'ramiz?", a: "Velosiped pedali, tikuv mashinasi, parovoz g'ildiragi." },
        { e: "⚖️", h: "Richag", p: "Richag — tayanch atrofida buriladigan tayoq. Bir uchini bossak, ikkinchisi ko'tariladi. Tayanch qayerdaligi kuch va masofani o'zgartiradi.", q: "Arg'imchoqda og'ir bola qayerga o'tirsa, yengil bola uni ko'tara oladi?", a: "Tayanchga yaqinroq." }
      ],
      prog: [{ t: "Model 5 soniya yuradi", b: ["y:▶ Boshlash", "g:Quvvat 6", "g:↻ Soat yo'nalishida", "g:⏱ 5 soniya"] }],
      video: [["9yeE1JIxY_U", "WeDo 2.0 dan yuradigan robot yasash"], ["Vf7p8pnfx3E", "WeDo 2.0: T-rex roboti (g'oya uchun)"]],
      yq: "wedo 2.0 walking robot",
      hw: ["Qaychi, eshik tutqichi, belkurak — bularning qaysi qismi richag? Bittasini chizib, tayanch nuqtasini belgilang."]
    },
    {
      n: 5, mod: 2, t: "Mustahkam inshootlar: zilzila simulyatori",
      goal: "O'quvchilar zilzila simulyatorini yig'adi va uni har xil kuchda silkitadigan dastur tuzadi; zilzila nima ekanini va binolar nega bardoshli qurilishi kerakligini tushunadi.",
      out: ["Zilzila sababini sodda tilda aytadi", "Simulyatorni yig'adi va quvvat orqali silkinish kuchini boshqaradi", "Ekranga son chiqaradigan blokdan foydalanadi"],
      need: ["WeDo 2.0 to'plami", "Planshet yoki kompyuter (ilovada «Mustahkam inshootlar» loyihasi)", "Bino uchun LEGO g'ishtlari"],
      plan: [["6", "Suhbat: zilzila nima? O'zbekistonda zilzila bo'ladimi? Zilzila paytida nima qilish kerak?"], ["20", "Yig'ish: zilzila simulyatori."], ["10", "Dasturlash: silkinish kuchi 1 dan 10 gacha."], ["3", "Birinchi sinov: bitta minora."], ["3", "Test."], ["3", "Modelni keyingi dars uchun saqlab qo'yish."]],
      tips: ["Mavzu ba'zi bolalarni qo'rqitishi mumkin. Urg'uni xavfga emas, «muhandislar bizni qanday himoya qiladi»ga bering.", "Simulyatorni buzmang — keyingi darsda shu modelda tajriba davom etadi."],
      steps: ["Ilovada «Mustahkam inshootlar» loyihasini oching.", "Yo'riqnoma bo'yicha simulyatorni yig'ing: motor porshenni suradi, porshen platformani silkitadi.", "Dastur: `Boshlash` → `Quvvat 1` → `Motor 2 soniya ishlasin`.", "Platformaga bitta LEGO g'isht qo'yib sinang.", "Quvvatni 3, 5, 8 qilib o'zgartiring. Silkinish qanday o'zgardi?", "Dastur boshiga `Ekranda son` blokini qo'shing — ekranda zilzila kuchi ko'rinsin.", "5 ta g'ishtdan ingichka minora quring. Qaysi kuchda quladi?"],
      extra: ["`Takrorlash` bilan kuch o'zi oshib borsin: har 2 soniyada +1."],
      ask: [["Zilzila nimadan bo'ladi?", "Yer qobig'ining ulkan plitalari siljiydi va yer silkinadi."], ["Zilzila paytida bino ichida nima qilamiz?", "Derazadan uzoqlashamiz, mustahkam stol ostiga kiramiz, liftga chiqmaymiz."], ["Modelda silkinish kuchini nima o'zgartiradi?", "Motor quvvati."], ["Simulyator nima uchun kerak?", "Haqiqiy zilzilani kutmasdan binolarni xavfsiz sinab ko'rish uchun."]],
      quiz: [["Zilzila nima?", "Yerning silkinishi", "Kuchli shamol", "Daryo toshishi"], ["Modelda zilzila kuchini nima boshqaradi?", "Motor quvvati", "Smarthub rangi", "G'isht soni"], ["Zilzila paytida qayerga yashirinamiz?", "Mustahkam stol ostiga", "Deraza yoniga", "Liftga"], ["Simulyator nima?", "Hodisani taqlid qiluvchi model", "Haqiqiy zilzila", "Bino turi"], ["Platformani nima silkitadi?", "Motor va porshen", "Datchik", "Batareya"]],
      game: { type: "sort", title: "Zilzila paytida: to'g'rimi yoki xatomi?", cats: ["To'g'ri", "Xato"], items: [["Stol ostiga kirish", 0], ["Liftga chiqish", 1], ["Derazadan uzoqlashish", 0], ["Balkonga yugurish", 1], ["Boshni qo'l bilan himoyalash", 0], ["Shkaf yonida turish", 1], ["Ochiq maydonga chiqish (silkinish to'xtagach)", 0], ["Vahima qilib baqirish", 1]] },
      topic: [
        { e: "🌍", h: "Yer nega silkinadi?", p: "Yer qobig'i ulkan bo'laklardan — plitalardan iborat. Ular juda sekin siljiydi. Ba'zan bir-biriga tiqilib qoladi va birdan siljib ketadi — yer silkinadi.", q: "Zilzilani oldindan aniq aytib bo'ladimi?", a: "Hozircha yo'q. Shuning uchun binolar oldindan mustahkam quriladi." },
        { e: "📊", h: "Zilzila kuchi", p: "Olimlar zilzila kuchini son bilan o'lchaydi. Kichik son — sezilmaydi, katta son — binolar shikastlanadi. Modelimizda bu son — motor quvvati.", q: "Quvvat 2 va quvvat 9: qaysi biri kuchli zilzila?", a: "9." },
        { e: "🧪", h: "Simulyator", p: "Muhandislar yangi bino loyihasini avval kichik modelda, silkituvchi stol ustida sinaydi. Biz ham shunday stol yasaymiz.", q: "Nega haqiqiy binoda sinab ko'rilmaydi?", a: "Bu xavfli va juda qimmat. Model — arzon va xavfsiz." }
      ],
      prog: [{ t: "Zilzila kuchi ekranda ko'rinadi", b: ["y:▶ Boshlash", "r:🖥 Ekranda son: 3", "g:Quvvat 3", "g:⏱ 2 soniya"] }],
      video: [["e4fciKbM4EY", "WeDo 2.0: zilzila simulyatori — yig'ish"], ["mLKG0uOhGuw", "Zilzila simulyatori — yig'ish yo'riqnomasi"]],
      yq: "wedo 2.0 earthquake simulator",
      hw: ["Oilangiz bilan uyda zilzila paytidagi xavfsiz joyni aniqlang va chizib keling."]
    },
    {
      n: 6, mod: 2, t: "Zilzila tajribasi: qaysi bino bardoshli?",
      goal: "O'quvchilar adolatli tajriba o'tkazadi: bino balandligi va asos kengligi bardoshlilikka qanday ta'sir qilishini tekshiradi, natijani jadvalga yozib, xulosa chiqaradi.",
      out: ["Tajribada faqat bitta narsani o'zgartiradi", "Natijani jadvalga yozadi", "Dalilga asoslanib xulosa aytadi"],
      need: ["O'tgan darsdagi simulyator", "LEGO g'ishtlari", "Tajriba jadvali (chop etilgan yoki daftarda)", "Chizg'ich"],
      plan: [["5", "Takrorlash. Savol: baland bino mustahkammi yoki past bino? Taxminlarni doskaga yozamiz."], ["5", "Qoida: adolatli tajriba — bir safar bitta narsa o'zgaradi."], ["22", "Amaliy ish: 3 ta bino, 3 ta sinov."], ["6", "Xulosa: guruhlar natijalarini aytadi."], ["4", "Test."], ["3", "Yig'ishtirish."]],
      tips: ["Jadvalni oldindan tayyorlang: bino turi | qaysi kuchda quladi. Bo'sh joyni to'ldirish bolalarga oson.", "Natijalar guruhlarda har xil chiqsa — juda yaxshi. «Nega farq qildi?» — eng qimmatli savol."],
      pt: "Tajriba: uch bino sinovi",
      steps: ["A bino: 4 g'isht baland, tor asos. B bino: 8 g'isht baland, tor asos. C bino: 8 g'isht baland, keng asos.", "Har bino uchun taxminingizni yozing: qaysi kuchda quladi?", "A binoni platformaga qo'ying. Kuchni 1 dan boshlab bittadan oshiring.", "Qaysi kuchda qulaganini jadvalga yozing.", "B va C binolar bilan takrorlang. Bino har safar platformaning bir xil joyida tursin.", "Solishtiring: A va B (balandlik), B va C (asos).", "Xulosa yozing: «Bino ... bo'lsa, mustahkamroq»."],
      extra: ["Eng baland va 10-kuchga chidaydigan bino quring. Sinfda rekord kimniki?"],
      ask: [["Adolatli tajriba nima?", "Faqat bitta narsa o'zgartiriladi, qolgan hammasi bir xil qoladi."], ["Baland bino nega oson quladi?", "Og'irlik markazi yuqorida, ozgina qiyshaysa ag'dariladi."], ["Keng asos nima beradi?", "Bino barqarorroq turadi."], ["Taxmin noto'g'ri chiqsa, bu yomonmi?", "Yo'q. Tajriba aynan shuni bilish uchun o'tkaziladi."]],
      quiz: [["Adolatli tajribada nechta narsa o'zgaradi?", "Bitta", "Hammasi", "Hech narsa"], ["Qaysi bino bardoshliroq?", "Past va keng asosli", "Baland va tor asosli", "Farqi yo'q"], ["Natijani qayerga yozamiz?", "Jadvalga", "Hech qayerga", "Detallarga"], ["Xulosa nimaga asoslanadi?", "Tajriba natijasiga", "Taxminga", "Do'stning gapiga"], ["Baland binoni mustahkamlash uchun nima qilamiz?", "Asosini kengaytiramiz", "Yana balandroq quramiz", "Tomini olib tashlaymiz"]],
      game: { type: "order", title: "Tartibga sol: olimning ish tartibi", steps: ["Savol qo'yamiz", "Taxmin qilamiz", "Tajriba o'tkazamiz", "Natijani yozamiz", "Xulosa chiqaramiz"] },
      topic: [
        { e: "🔬", h: "Adolatli tajriba", p: "Balandlik ta'sirini bilmoqchimiz — faqat balandlikni o'zgartiramiz. Asos, g'isht turi, platformadagi joy bir xil qoladi.", q: "Balandlikni ham, asosni ham birdan o'zgartirsak nima bo'ladi?", a: "Qaysi biri ta'sir qilganini bilolmaymiz." },
        { e: "🏢", h: "Balandlik", p: "Bino qancha baland bo'lsa, tepasi shuncha ko'p chayqaladi. Shuning uchun osmono'par binolarga maxsus tebranishni so'ndiruvchi qurilmalar qo'yiladi.", q: "Qalamni tik qo'yish osonmi yoki yotqizib?", a: "Yotqizib — u past va keng tayanadi." },
        { e: "🧱", h: "Asos", p: "Keng asos binoni yerga yaxshiroq «tirab» turadi. Piramidalar ming yillardan beri turibdi — ularning asosi juda keng.", q: "Oyoqlarni kerib turish va juftlab turish: qaysi birida sizni itarish qiyin?", a: "Kerib turganda — tayanch kengroq." }
      ],
      prog: [{ t: "Kuch o'zi oshib boradi", b: ["y:▶ Boshlash", "g:Quvvat 2", "g:⏱ 2 soniya", "g:Quvvat 4", "g:⏱ 2 soniya", "g:Quvvat 6", "g:⏱ 2 soniya", "g:Quvvat 8", "g:⏱ 2 soniya"] }],
      video: [["NxSbihByC-c", "WeDo 2.0: mustahkam inshootlar — yo'riqli dars (ingliz tilida)"], ["e4fciKbM4EY", "Zilzila simulyatori (takrorlash uchun)"]],
      yq: "wedo 2.0 robust structures",
      hw: ["Uyda kubik yoki kitoblardan eng baland minora quring. Uni nima mustahkam qildi? 2 gap yozing."]
    },
    {
      n: 7, mod: 2, t: "Qutqaruv vertolyoti",
      goal: "O'quvchilar arqonni o'raydigan lebyodkali vertolyot yig'adi va yukni tushirib-ko'taradigan dastur tuzadi; tabiiy ofat paytida texnika odamlarga qanday yordam berishini muhokama qiladi.",
      out: ["Lebyodka (o'rash mexanizmi) qanday ishlashini tushuntiradi", "Motorni ikki yo'nalishda aniq vaqt bilan ishlatadi", "Egilish datchigini pult sifatida ishlatadi"],
      need: ["WeDo 2.0 to'plami", "Planshet yoki kompyuter (ilovada «Tashlash va qutqarish» loyihasi)", "Kichik yuk: LEGO odamcha yoki o'chirg'ich"],
      plan: [["5", "Suhbat: toshqin yoki yong'inda yo'l yopilsa, odamlarga kim yordam beradi?"], ["18", "Yig'ish: vertolyot va lebyodka."], ["14", "Dasturlash: tushirish, ko'tarish, pult."], ["3", "Qutqaruv mashqi: «orolcha»dan yukni olish."], ["3", "Test."], ["2", "Yig'ishtirish."]],
      tips: ["Arqon oxirigacha o'ralgach motor yana aylansa, arqon teskari o'raladi yoki chigallashadi. Vaqtni 1 soniyadan boshlang.", "Vertolyotni ikki stol orasiga yoki kitoblar ustiga qo'ying — yuk tushishi uchun balandlik kerak."],
      steps: ["Ilovada «Tashlash va qutqarish» loyihasini oching va vertolyotni yig'ing.", "Lebyodkani toping: motor g'altakni aylantiradi, g'altakka arqon o'raladi.", "Tushirish dasturi: `Boshlash` → `Motor soat yo'nalishida` → `Motor 2 soniya`.", "Ko'tarish dasturi (alohida zanjir): `Tugma bosilganda` → `Motor soatga teskari` → `Motor 2 soniya`.", "Vaqtni sozlang: ilgak aniq stolgacha tushsin.", "Egilish datchigini ulang: pastga egilsa — tushir, yuqoriga egilsa — ko'tar.", "Qutqaruv mashqi: yukni ilgakka ilib, «orolcha»dan xavfsiz joyga olib o'ting."],
      extra: ["Tushirishdan oldin ogohlantiruvchi tovush va chiroq yonsin.", "Yuk og'irlashsa, ko'tarish vaqti o'zgaradimi? Tekshiring."],
      ask: [["Lebyodka nima?", "Arqonni g'altakka o'rab, yukni ko'taradigan mexanizm."], ["Nega qutqaruvda vertolyot ishlatiladi?", "U yo'l yo'q joyga ucha oladi va havoda muallaq tura oladi."], ["Arqon chigallashsa nima qilamiz?", "Dasturni to'xtatamiz, arqonni qo'lda to'g'rilaymiz, vaqtni kamaytiramiz."], ["Pult sifatida qaysi datchikni ishlatdik?", "Egilish datchigini."]],
      quiz: [["Lebyodka nima qiladi?", "Arqonni o'rab yuk ko'taradi", "Havoni sovutadi", "Ovoz yozadi"], ["Yukni ko'tarish uchun motor qanday aylanadi?", "Tushirishga teskari yo'nalishda", "Xuddi shu yo'nalishda", "Aylanmaydi"], ["Vertolyot nega qutqaruvda qulay?", "Yo'lsiz joyga yetib boradi", "Eng arzon transport", "Suv ostida suzadi"], ["Pult vazifasini nima bajardi?", "Egilish datchigi", "Tasma", "G'isht"], ["Arqon ko'p o'ralib ketmasligi uchun nimani sozlaymiz?", "Motor ishlash vaqtini", "Smarthub nomini", "Ekran yorug'ligini"]],
      game: { type: "order", title: "Tartibga sol: qutqaruv amaliyoti", steps: ["Vertolyot voqea joyiga yetib keladi", "Ilgak pastga tushiriladi", "Yuk ilgakka ilinadi", "Arqon o'ralib, yuk ko'tariladi", "Yuk xavfsiz joyga olib boriladi"] },
      topic: [
        { e: "🚁", h: "Qutqaruv vertolyoti", p: "Toshqin, yong'in, tog'da yo'qolgan sayyohlar — yo'l bo'lmagan joyga vertolyot uchib boradi, havoda turib arqon tushiradi.", q: "Samolyot shunday qila oladimi?", a: "Yo'q, samolyot havoda bir joyda tura olmaydi." },
        { e: "🧵", h: "Lebyodka", p: "G'altak aylanadi — arqon o'raladi — yuk ko'tariladi. G'altak teskari aylansa — arqon yoziladi va yuk tushadi. Kran va liftda ham shu mexanizm.", q: "Quduqdan suv tortadigan chig'ir nimaga o'xshaydi?", a: "Xuddi lebyodka: dastani aylantirsak, arqon o'raladi." },
        { e: "🎮", h: "Datchik — pult", p: "Egilish datchigini qo'lda ushlab, uni pultga aylantiramiz: pastga egdik — yuk tushadi, yuqoriga — ko'tariladi.", q: "O'yin pultida egilish datchigi bormi?", a: "Ha, ko'p pult va telefonlarda bor — egib boshqariladigan o'yinlar shunday ishlaydi." }
      ],
      prog: [
        { t: "Pastga egilsa — yuk tushadi", b: ["y:▶ Boshlash", "o:⏳ Kutish ↓", "g:↻ 2 soniya"] },
        { t: "Yuqoriga egilsa — yuk ko'tariladi", b: ["y:▶ Boshlash", "o:⏳ Kutish ↑", "g:↺ 2 soniya"] }
      ],
      video: [["YMCYXqXzSy4", "WeDo 2.0: qutqaruv vertolyoti (namoyish)"], ["zp_nXLWPF-0", "WeDo 2.0: vertolyot — yig'ish"]],
      yq: "wedo 2.0 drop and rescue helicopter",
      hw: ["Qutqaruvchilar ishlatadigan 3 ta texnikani toping va har biri nima qilishini yozing."]
    },
    {
      n: 8, mod: 2, t: "Chiqindini saralovchi mashina",
      goal: "O'quvchilar kuzovi ko'tariladigan saralovchi mashina yig'adi, narsalarni shakliga qarab ajratadi va chiqindini qayta ishlash nima uchun muhimligini tushunadi.",
      out: ["Qayta ishlanadigan chiqindi turlarini aytadi", "Kuzovni ko'tarib-tushiradigan dastur tuzadi", "Saralash aniqligini oshirish uchun modelni o'zgartiradi"],
      need: ["WeDo 2.0 to'plami", "Planshet yoki kompyuter (ilovada «Saralash va qayta ishlash» loyihasi)", "Ikki xil o'lchamdagi «chiqindi» detallari"],
      plan: [["6", "Suhbat: tashlangan plastik butilka qayerga ketadi? Qayta ishlash nima?"], ["18", "Yig'ish: saralovchi mashina va ikki xil «chiqindi»."], ["12", "Dasturlash va sinov."], ["3", "«Saralash» o'yini."], ["3", "Test."], ["3", "Yig'ishtirish."]],
      tips: ["Mashina narsani datchik bilan emas, teshik o'lchami bilan ajratadi: kichigi tushadi, kattasi qoladi. Buni bolalar o'zi kashf etsin.", "Maktabingizda chiqindi saralanadimi? Bo'lmasa, sinf uchun qog'oz qutisi tashkil qilishni taklif qiling."],
      steps: ["Ilovada «Saralash va qayta ishlash» loyihasini oching va mashinani yig'ing.", "Ikki xil «chiqindi» yasang: kichik va katta.", "Dastur: `Boshlash` → `Motor soat yo'nalishida` → `Motor 1 soniya` → `Kutish 2 soniya` → `Motor soatga teskari` → `Motor 1 soniya`.", "Ikkala narsani kuzovga soling va ishga tushiring. Qaysi biri tushdi, qaysi biri qoldi?", "10 marta sinang. Necha marta to'g'ri saraladi? Yozing.", "Xato bo'lsa: kuzov burchagini yoki teshik o'lchamini o'zgartiring.", "Dastur boshiga ogohlantiruvchi tovush qo'shing."],
      extra: ["Uchinchi o'lchamdagi narsani ham ajratadigan qilib o'zgartiring."],
      ask: [["Qayta ishlash nima?", "Eski narsadan yangi narsa yasash: qog'ozdan qog'oz, plastikdan yangi buyum."], ["Qaysi chiqindilar qayta ishlanadi?", "Qog'oz, plastik, shisha, metall."], ["Mashinamiz narsalarni nimasiga qarab ajratdi?", "O'lchami va shakliga qarab."], ["Nega chiqindini saralash kerak?", "Aralash chiqindini qayta ishlab bo'lmaydi, u tabiatni ifloslaydi."]],
      quiz: [["Qayta ishlash nima?", "Chiqindidan yangi narsa yasash", "Chiqindini yoqish", "Chiqindini ko'mish"], ["Qaysi biri qayta ishlanadi?", "Plastik butilka", "Ovqat qoldig'i bilan bulg'angan salfetka", "Singan chinni"], ["Mashina narsalarni qanday ajratdi?", "O'lchamiga qarab", "Rangiga qarab", "Hidiga qarab"], ["Kuzovni nima ko'taradi?", "Motor", "Datchik", "Batareya"], ["Saralash xato bo'lsa nima qilamiz?", "Modelni o'zgartirib, qayta sinaymiz", "Tashlab qo'yamiz", "Natijani yashiramiz"]],
      game: { type: "sort", title: "Qayta ishlanadimi?", cats: ["Qayta ishlanadi", "Qayta ishlanmaydi"], items: [["📰 Eski gazeta", 0], ["🥤 Plastik butilka", 0], ["🍌 Banan po'chog'i", 1], ["🥫 Tunuka banka", 0], ["🧻 Ishlatilgan salfetka", 1], ["🍾 Shisha idish", 0], ["📦 Karton quti", 0], ["🍗 Ovqat qoldig'i", 1]] },
      topic: [
        { e: "♻️", h: "Qayta ishlash", p: "Bitta plastik butilka tabiatda yuzlab yil chirimaydi. Lekin uni eritib, yangi butilka, kiyim yoki o'yinchoq yasash mumkin.", q: "Siz uyda nimani qayta ishlatasiz?", a: "Masalan: shisha bankani idish qilib, qog'ozning orqa tomoniga chizib." },
        { e: "🗑", h: "Nega saralash kerak?", p: "Qog'oz, plastik, shisha va metall alohida-alohida qayta ishlanadi. Aralashib ketsa, ajratish juda qiyin va qimmat.", q: "Ho'l bo'lgan qog'ozni qayta ishlab bo'ladimi?", a: "Qiyin. Shuning uchun qog'oz alohida, quruq holda yig'iladi." },
        { e: "📐", h: "Mashina qanday saralaydi?", p: "Bizning mashina — elak kabi: kichik narsa teshikdan tushadi, kattasi qoladi. Haqiqiy zavodlarda magnit, havo oqimi va kameralar ham ishlatiladi.", q: "Temir bankani boshqa chiqindidan qanday ajratish mumkin?", a: "Magnit bilan." }
      ],
      prog: [{ t: "Kuzov ko'tariladi, kutadi va tushadi", b: ["y:▶ Boshlash", "r:🔊 Tovush", "g:↻ 1 soniya", "o:⏳ 2 soniya", "g:↺ 1 soniya"] }],
      video: [["vNFC9km0rZw", "WeDo 2.0: saralovchi mashina — yig'ish"], ["VVNa2sIp0yI", "WeDo 2.0 dan samosval yasash"]],
      yq: "wedo 2.0 sort to recycle truck",
      hw: ["Bir kun davomida uyingizda tashlangan chiqindilarni sanang: qog'oz, plastik, shisha, boshqa. Qaysi biri eng ko'p?"]
    }
  ]
};
