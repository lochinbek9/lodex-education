// 4-sinf · 9–16-darslar: 2-modul. Tinkercad: 3D modellashtirish asoslari
// Format sinf4.js bilan bir xil.
window.QOLLANMA.grades[4].lessons.push(
  {
    n: 9, mod: 2, t: "3D olamga qadam: Tinkercad bilan tanishuv",
    goal: "O'quvchilar ikki o'lchamli (2D) va uch o'lchamli (3D) fazoning farqini, Tinkercad ish maydonini (Workplane) va kamerani 3D fazoda erkin boshqarishni o'rganadi.",
    out: ["2D (tekis) va 3D (hajmli) tushunchalarini farqlaydi", "Tinkercad'da ViewCube va sichqoncha bilan kamerani buradi, yaqinlashtiradi va suradi", "Ish tekisligiga (Workplane) birinchi 3D shaklni joylashtiradi"],
    need: ["Kompyuterlar, internet brauzeri, Tinkercad (tinkercad.com) hisobi", "Sichqoncha (g'ildirakchali)"],
    plan: [["6", "2D va 3D farqi: qog'ozdagi rasm (2D) va qo'limizdagi olma (3D). Uzunlik, kenglik va balandlik."], ["8", "Tinkercad bilan tanishuv: ish tekisligi (Workplane), ViewCube va asboblar paneli."], ["23", "Amaliy ish: 3D maydonda sayohat va birinchi shakl."], ["4", "«Juftini top» o'yini."], ["4", "Xulosa va test."]],
    tips: ["3D modellashtirishda sichqoncha g'ildiragi va o'ng tugmasini ishlatish juda muhim. Sensorli panel (touchpad) o'rniga tashqi sichqoncha ishlatish ishni 10 barobar tezlashtiradi.", "Kamera bilan adashib qolgan o'quvchilarga ViewCube yonidagi «Home view» (Uy ko'rinishi) tugmasini bosishni o'rgating."],
    pt: "Amaliy ish: «3D fazoda sayohat»",
    steps: [
      "Brauzerda Tinkercad'ga kiring va «New 3D Design» tugmasini bosing.",
      "Moviy to'r chiziqli ish tekisligini (Workplane) ko'rib chiqing. Bu bizning raqamli stolimiz.",
      "Sichqonchaning o'ng tugmasini bosib ushlab turing va harakatlantiring — maydon har tomonga aylanadi (Orbit).",
      "Sichqoncha g'ildiragini aylantiring — yaqinlashadi va uzoqlashadi (Zoom).",
      "G'ildirakni bosib ushlab tursangiz — maydon yon tomonga siljiydi (Pan).",
      "O'ng tomondagi shakllar kutubxonasidan qizil kubni (Box) oling va ish tekisligiga qo'ying.",
      "Yuqori chap burchakdagi ViewCube kubigini aylantirib, shaklingizga tepadan, yonidan va pastdan qarang.",
      "Uy (Home) belgisini bosing — kamera boshlang'ich qulay holatga qaytadi!"
    ],
    extra: ["Turli shakllarni (silindr, konus, piramida) olib, ularni bir-birining yoniga terib chiqing.", "ViewCube'dagi «Top» (Tepa) yoki «Front» (Oldi) yozuvlarini bosib, tekis proyeksiyalarni ko'ring."],
    ask: [
      ["2D va 3D ning asosiy farqi nimada?", "2D faqat eni va bo'yiga ega (tekis), 3D esa balandlikka (hajmga) ham ega."],
      ["Tinkercad'da moviy to'rli maydon nima deyiladi?", "Ish tekisligi (Workplane)."],
      ["3D kamerani aylantirish uchun sichqonchaning qaysi tugmasi bosiladi?", "O'ng tugmasi."],
      ["Adashib qolsak, kamerani bosh holatga qaysi tugma qaytaradi?", "Home view (Uy ko'rinishi) tugmasi."]
    ],
    quiz: [
      ["3D qisqartmasi nimani bildiradi?", "Uch o'lchamli (Three-Dimensional)", "Uch barobar tez", "Uchinchi daraja"],
      ["Tinkercad'da ish tekisligiga yaqinlashish qanday bajariladi?", "Sichqoncha g'ildiragini aylantirish orqali", "Klaviaturadagi bo'sh joy bilan", "Chap tugmani ikki marta bosib"],
      ["Yuqori chapdagi aylanuvchi kubik nima deb ataladi?", "ViewCube (Ko'rinish kubi)", "Sehrli quti", "Compass"],
      ["Tinkercad dasturi qayerda ishlaydi?", "To'g'ridan-to'g'ri internet brauzerida", "Faqat telefonda", "Faqat fleshkada"],
      ["3D obyekt qanday 3 ta o'lchamga ega?", "Uzunlik, kenglik va balandlik", "Faqat rang va hajm", "Og'irlik va harorat"]
    ],
    game: {
      type: "memory",
      title: "Juftini top: Tinkercad boshqaruvi",
      pairs: [
        ["O'ng tugma", "Kamerani aylantirish (Orbit)"],
        ["Sichqoncha g'ildiragi", "Yaqinlashtirish (Zoom)"],
        ["G'ildirakni bosish", "Maydonni siljitish (Pan)"],
        ["Home tugmasi", "Bosh ko'rinishga qaytish"],
        ["Workplane", "Ish tekisligi"],
        ["ViewCube", "Ko'rinish burchagi kubi"]
      ]
    },
    topic: [
      { e: "📐", h: "Fazoviy fikrlash nima?", p: "Biz 3D dunyoda yashaymiz, lekin kompyuter ekrani tekis. Fazoviy fikrlash — bu miyamizda narsalarni har tomondan tasavvur qila olish qobiliyatidir. Tinkercad bu qobiliyatni kuchaytiradi.", q: "Qaysi kasb egalariga 3D fikrlash kerak?", a: "Me'morlar, avtomobil muhandislari, geym-dizaynerlar va shifokorlarga." },
      { e: "🌐", h: "Workplane — raqamli ish stoli", p: "Ish tekisligidagi har bir katakcha 1 millimetrga teng. Katta kvadratlar esa 1 santimetr (10 mm). Bu orqali biz buyumlarni millimetr aniqligida yasaymiz.", q: "1 santimetrda necha millimetr bor?", a: "10 millimetr." },
      { e: "🚀", h: "Tinkercad nima uchun qulay?", p: "U Autodesk kompaniyasi tomonidan yaratilgan bo'lib, hech qanday dastur o'rnatmasdan brauzerda ishlaydi va loyihalarni avtomatik tarzda bulutda saqlab boradi.", q: "Tinkercad'da yasalgan narsani ushlab ko'rish mumkinmi?", a: "Ha! Uni 3D printerda chiqarib, qo'lda ushlab ko'rish mumkin." }
    ],
    prog: [{ t: "Tinkercad: 3D fazoda navigatsiya zanjiri", b: ["y:🖱️ O'ng tugma: har tomondan qara", "b:🔍 G'ildirak: yaqinlashtir", "o:🏠 Home: bosh holatga qayt", "g:📦 Shaklni ish maydoniga qo'y"] }],
    video: [["M6s5w_q7a7E", "Tinkercad Tutorial for Beginners: Basics"], ["z7k9P1A5Ew8", "Tinkercad bilan 3D modellashtirish asoslari"]],
    yq: "tinkercad tutorial for beginners workplane navigation",
    hw: ["Uyingizdagi istalgan 3 ta buyumni (masalan: choynak, stul, quti) o'lchov tasmasi bilan o'lchang: uzunligi, eni va balandligi necha santimetr?"]
  },
  {
    n: 10, mod: 2, t: "Asosiy 3D shakllar va aniq o'lchamlar",
    goal: "O'quvchilar asosiy geometrik 3D jismlarni (kub, silindr, sfera, tom), ularning o'lchamlarini (uzunlik, kenglik, balandlik) millimetrlarda aniq o'zgartirishni o'rganadi.",
    out: ["Obyektning oq va qora nuqtalari (tutqichlari) vazifasini tushuntiradi", "O'lchamlarni sichqoncha bilan yoki son yozib aniq kiritadi", "Bir nechta shakllardan iborat kompozitsiya (masalan, minora) quradi"],
    need: ["Kompyuterlar, internet, Tinkercad"],
    plan: [["5", "O'tgan darsni takrorlash: 3D fazoda harakat. Savol: binolar qanday geometrik shakllardan quriladi?"], ["8", "Yangi mavzu: shakl tutqichlari (handles). Oq nuqtalar — ikkala o'lcham, qora nuqtalar — bitta o'lcham, tepa nuqta — balandlik."], ["23", "Amaliy ish: Aniq o'lchamli qasr minorasi."], ["5", "«Saralash» o'yini."], ["4", "Xulosa va test."]],
    tips: ["O'quvchilarga o'lchamni tortib emas, son ustiga bosib klaviaturada aniq raqam kiritishni (masalan: 30 mm) odat qildiring — bu professional muhandislik usulidir.", "Shift tugmasini bosib burchakni tortsa, shakl barcha tomonlarga proporsional (buzilmasdan) kattalashishini ko'rsating."],
    pt: "Amaliy ish: «Sehrli qasr minorasi»",
    steps: [
      "Tinkercad'da yangi dizayn oching va nomini «Minora» deb o'zgartiring.",
      "Maydonga qizil kub (Box) qo'ying. Burchakdagi oq nuqtani bosing: o'lchamlarini 40 mm × 40 mm qiling.",
      "Tepasidagi oq nuqtani bosib balandligini 10 mm qiling — bu bizning poydevor.",
      "Endi silindr (Cylinder) oling. O'lchamlarini 30 mm × 30 mm, balandligini 50 mm qilib sozlang.",
      "Silindr yonidagi sozlamalar oynasida «Sides» (Qirralar) slayderini 64 ga suring — silindr g'adir-budur emas, silliq bo'ladi!",
      "Piramida yoki konus (Cone) oling. O'lchamini 34 mm × 34 mm qilib, minora tomi uchun tayyorlang.",
      "Shakllar ranglarini o'zingizga yoqqan ranglarga bo'yang."
    ],
    extra: ["Shift tugmasi yordamida shaklni proporsional kichraytirish va kattalashtirishni sinang.", "Minoraning to'rtta burchagiga 4 ta kichik ustuncha qo'shing."],
    ask: [
      ["Tinkercad'da o'lchamlar qaysi birlikda ko'rsatiladi?", "Millimetrlarda (mm)."],
      ["Obyektdagi oq burchak nuqtasi nimani o'zgartiradi?", "Bir vaqtning o'zida ikkita o'lchamni (uzunlik va kenglikni)."],
      ["Silindr silliq bo'lishi uchun nima qilinadi?", "«Sides» (Qirralar) soni oshiriladi (masalan, 64 ga)."],
      ["Shift tugmasi bosib turilsa, shakl qanday o'zgaradi?", "Hamma tomonlari teng va proporsional kattalashadi."]
    ],
    quiz: [
      ["Tinkercad'da 20 mm necha santimetrga teng?", "2 sm", "20 sm", "0.2 sm"],
      ["Obyekt balandligini qaysi nuqta o'zgartiradi?", "Tepadagi oq kvadrat nuqta", "Pastdagi qora nuqta", "Yonidagi strelka"],
      ["Shaklni proporsional (shakli buzilmasdan) kattalashtirish uchun qaysi tugma bosib turiladi?", "Shift", "Ctrl", "Alt"],
      ["Silindrning qirralarini silliqlash uchun qaysi parametr oshiriladi?", "Sides", "Bevel", "Segments"],
      ["O'lchamni aniq kiritishning eng to'g'ri yo'li qaysi?", "Son ustiga bosib raqam yozish", "Ko'z bilan chamalab tortish", "Kamerani burish"]
    ],
    game: {
      type: "sort",
      title: "Qaysi shakldan yasaladi?",
      desc: "Buyumlar qaysi 3D asosiy shakllardan tashkil topgan?",
      cats: ["Silindr yoki Konus", "Kub yoki Parallelepiped"],
      items: [
        ["Sharbat stakani", 0],
        ["G'isht va quti", 1],
        ["Qalamning korpusi", 0],
        ["Kitob", 1],
        ["Muzqaymoq qolipi (rojok)", 0],
        ["Shkaf va stol usti", 1]
      ]
    },
    topic: [
      { e: "📏", h: "Millimetr — muhandislar tili", p: "Haqiqiy zavodlarda va 3D bosib chiqarishda hamma narsa millimetrda o'lchanadi. 1 millimetr xatolik sababli detal o'z joyiga tushmay qolishi mumkin. Shuning uchun aniqlik juda muhim!", q: "Oddiy chizg'ichda nechta millimetr bor?", a: "20 sm chizg'ichda 200 mm bor." },
      { e: "📦", h: "Oddiy shakllar — murakkab dunyo", p: "Mashhur haykaltaroshlar aytganidek: «Dunyodagi har qanday buyum kub, shar va silindrdan iborat». Avtomobil, samolyot yoki robot ham xuddi shunday oddiy shakllar yig'indisidir.", q: "Avtomobil g'ildiragi qaysi shakl?", a: "Silindr shaklida." },
      { e: "⚙️", h: "Sides — poligonlar siri", p: "Kompyuter aylanani kichik tekis qirralardan (poligonlardan) yasaydi. Qirralar soni qancha ko'p bo'lsa, aylana shuncha silliq bo'ladi.", q: "Nega kompyuter boshida kam qirra beradi?", a: "Kompyuter xotirasini tejash va tez ishlash uchun." }
    ],
    prog: [{ t: "Minora poydevori va o'lchamlari", b: ["y:📦 Kubni ol", "b:↔️ Eni: 40 mm", "b:↕️ Bo'yi: 40 mm", "b:⬆️ Balandligi: 10 mm", "g:🛢️ Silindr: 30×30 mm, balandlik: 50 mm", "p:🎨 Sides = 64 (silliq)"] }],
    video: [["wY9kQz1B-lM", "Tinkercad Dimensions and Shapes"], ["a68_g2IpepU", "Tinkercad'da aniq o'lchamlar kiritish"]],
    yq: "tinkercad basic shapes and dimensions tutorial",
    hw: ["Daftaringizga kubik chizing va uning uchta o'lchamiga (uzunlik, kenglik, balandlik) raqamlar yozing."]
  },
  {
    n: 11, mod: 2, t: "Fazoda ko'tarish va burchak ostida burish",
    goal: "O'quvchilar obyektni ish tekisligidan yuqoriga/pastga ko'tarishni (qora konus tutqichi) va 3 ta o'q bo'ylab aniq graduslarda burishni o'rganadi.",
    out: ["Qora konus yordamida shaklni Z o'qi bo'yicha ko'taradi", "Shaklni 22.5°, 45° va 90° burchaklarga buradi", "Minoraning ustiga tomini aniq ko'tarib o'rnatadi"],
    need: ["Kompyuterlar, internet, Tinkercad"],
    plan: [["5", "Muammo: o'tgan darsdagi minora tomi polda yotibdi. Uni minora ustiga qanday chiqarish mumkin?"], ["8", "Yangi mavzu: qora konus (Lift / Ko'tarish) va yarim aylana burilish o'qlari (Rotate)."], ["23", "Amaliy ish: Minorani to'liq yig'ish va burilgan detallar."], ["5", "Viktorina va muhokama."], ["4", "Xulosa va test."]],
    tips: ["Burish paytida sichqonchani ichki doirada ushlasangiz 22.5° qadam bilan aniq buriladi, tashqi doiraga chiqsangiz 1° qadam bilan erkin buriladi.", "Ko'tarish konusini bosganda pastda ko'tarilish balandligi son bilan chiqadi — u yerga to'g'ridan-to'g'ri son kiritish mumkin."],
    pt: "Amaliy ish: «Tomni minoraga o'rnatish»",
    steps: [
      "O'tgan darsdagi «Minora» loyihasini oching.",
      "Minora silindri 50 mm balandlikda va u 10 mm li poydevor ustida turishi kerak.",
      "Silindr ustidagi qora konusni yuqoriga torting va balandlikni roppa-rosa 10 mm qilib ko'taring.",
      "Endi minora tomini (konusni) tanlang. Poydevor (10) + silindr (50) = jami 60 mm balandlik!",
      "Tomning qora konusini ushlab, uni 60 mm yuqoriga ko'taring.",
      "Endi shaklni burish: yonda yangi kubik oling. Uning ustidagi yarim aylana strelkani ushlab 45 gradusga buring.",
      "Burilgan kubikni romb shaklida minora eshigi yoki bezak sifatida ishlating.",
      "Kamerani aylantirib tekshiring: tom silindrning ustiga to'g'ri tushdimi?"
    ],
    extra: ["Minoraning yoniga 90 gradus burilgan zambarak (pushka) trubasini yasang.", "D tugmasini bosing: agar shakl havoda osilib qolsa, D (Drop) tugmasi uni to'g'ridan-to'g'ri polga tushirib qo'yadi!"],
    ask: [
      ["Shaklni yuqoriga ko'tarish uchun qaysi tutqich ishlatiladi?", "Shakl ustidagi kichik qora konus."],
      ["Klaviaturadagi «D» harfi nima qiladi?", "Shaklni ish tekisligiga (polga) tushiradi (Drop)."],
      ["Ichki doirada burilganda burchak qanday o'zgaradi?", "22.5 graduslik aniq qadamlar bilan (45°, 90°, 180°)."],
      ["Agar minora 50 mm bo'lsa, tom qancha balandlikka ko'tariladi?", "50 mm ga (agar poydevor bo'lsa, poydevor balandligi ham qo'shiladi)."]
    ],
    quiz: [
      ["Tinkercad'da balandlikka ko'tarish belgisi qaysi?", "Qora konus", "Oq kvadrat", "Qizil to'rtburchak"],
      ["To'g'ri burchak necha gradusga teng?", "90 gradus", "45 gradus", "180 gradus"],
      ["Havodagi shaklni polga tushirish uchun qaysi klaviatura tugmasi bosiladi?", "D (Drop)", "S (Space)", "C (Clear)"],
      ["Burish strelkasini bosganda nima chiqadi?", "Gradusli transportir doirasi", "Ranglar palitrasi", "Kvadrat chizg'ich"],
      ["Shaklni teskari (pastga qaratib) qilish uchun necha gradus burish kerak?", "180 gradus", "90 gradus", "360 gradus"]
    ],
    game: {
      type: "quiz",
      title: "Test: Graduslarni aniqlang",
      items: [
        ["To'g'ri burchak ostida burish necha gradus?", "90°", "45°", "180°"],
        ["Yarim aylanib teskari bo'lish necha gradus?", "180°", "90°", "360°"],
        ["To'liq aylanib o'z joyiga qaytish necha gradus?", "360°", "180°", "270°"],
        ["90 gradusning yarmi necha bo'ladi?", "45°", "30°", "60°"]
      ]
    },
    topic: [
      { e: "🔺", h: "Konus tutqichi — gravitatsiyani yengish", p: "Haqiqiy dunyoda buyumlar havoda osilib tura olmaydi. Lekin 3D dizaynda biz buyumlarni bir-birining ustiga qo'yish uchun ularni istalgan balandlikka ko'tarishimiz mumkin.", q: "Minoraning qismlarini pastdan yuqoriga qarab quramizmi?", a: "Ha, xuddi uyni poydevoridan boshlab qurgandek." },
      { e: "🔄", h: "Graduslar — geometriya sehrlari", p: "Soat mili qanday aylansa, 3D shakllar ham transportir doirasi bo'yicha aylanadi. 45° — qiya qiyalik, 90° — to'g'ri burchak, 180° — teskari holat.", q: "Futbol to'pi havoda aylanayotganda necha o'qda aylanadi?", a: "Uchala o'qda (X, Y, Z) aylanadi." },
      { e: "⌨️", h: "Qaynoq tugmalar — usta maslahati", p: "`D` tugmasi (Drop) — buyumni yerga tushiradi. `Ctrl + Z` — xatoni bekor qiladi. Bu tugmalar bilan ishlash vaqtingizni juda tejaydi.", q: "Xato qilib shaklni o'chirib yuborsak nima qilamiz?", a: "`Ctrl + Z` ni bosib qaytaramiz." }
    ],
    prog: [{ t: "Ko'tarish va burish bosqichlari", b: ["y:▲ Qora konusni ushla", "b:⬆️ 60 mm ga ko'tar", "o:🔄 Burish yoyini ushla", "g:📐 45 gradusga bur", "p:👁️ Har tomondan tekshir"] }],
    video: [["P7t_V6tC9gM", "Tinkercad: Moving & Rotating Shapes in 3D"], ["2e3Z2N_Cj3g", "Tinkercad'da obyektlarni ko'tarish va burish"]],
    yq: "tinkercad rotate lift shapes tutorial",
    hw: ["Daftaringizga transportir chizing va 45°, 90°, 180° burchaklarni belgilang."]
  },
  {
    n: 12, mod: 2, t: "Guruhlash (Group) va ajratish (Ungroup)",
    goal: "O'quvchilar bir nechta oddiy 3D jismlarni birlashtirib (Group) bitta butun yangi murakkab shakl hosil qilishni va kerak bo'lganda yana ajratishni (Ungroup) o'rganadi.",
    out: ["Guruhlash (Group) asbobini va uning `Ctrl + G` tugmasini biladi", "Bir nechta shaklni birdaniga tanlashni (Select multiple) o'rganadi", "Oddiy shakllardan stol va stul to'plamini yasaydi"],
    need: ["Kompyuterlar, internet, Tinkercad"],
    plan: [["5", "Muammo: agar minorani boshqa joyga ko'chirmoqchi bo'lsak, tom qolib ketib silindr surilib ketyapti. Nima qilish kerak?"], ["8", "Yangi mavzu: Guruhlash (Group). Qanday qilib 5 ta detalni 1 ta qilib birlashtirish mumkin?"], ["23", "Amaliy ish: 3D mebel to'plami (Stol va stul)."], ["5", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Bir nechta shaklni tanlashning 2 ta yo'li bor: 1) sichqoncha bilan ramka tortish, 2) Shift tugmasini bosib turib shakllarni birma-bir bosish.", "Guruhlaganda hamma shakl bitta rangga aylanib qoladi. Asl ranglarni saqlash uchun rang menyusidagi «Multicolor» (Ko'p rangli) katagiga qushcha qo'yishni ko'rsating."],
    pt: "Amaliy ish: «3D Stol va stul yasash»",
    steps: [
      "Yangi loyiha oching va nomini «3D Mebel» deb qo'ying.",
      "Stol usti: qizil kub oling, o'lchamlarini 60 mm × 40 mm, balandligini 4 mm qiling. Uni konus bilan 30 mm balandlikka ko'taring.",
      "Stol oyog'i: bitta ingichka kub oling (4 mm × 4 mm, balandligi 30 mm).",
      "`Ctrl + C` va `Ctrl + V` (nusxalash va qo'yish) orqali stolga 4 ta oyoq yasang va burchaklarga qo'ying.",
      "Sichqonchaning chap tugmasini bosib, stol usti va 4 ta oyoqni bitta ramkaga oling (hammasi tanlandi!).",
      "Yuqori paneldagi «Group» (Guruhlash) tugmasini bosing (yoki `Ctrl + G`).",
      "Qarang: endi bu alohida 5 ta detal emas, bitta yaxlit «Stol» obyektiga aylandi! Uni suring — hamma qismi birga harakatlanadi.",
      "Xuddi shu usulda kichikroq stul yasang va uni ham guruhlang."
    ],
    extra: ["Stolning ustiga kichik choynak yoki noutbuk modeli yasab qo'ying.", "Agar o'lchamni o'zgartirmoqchi bo'lsangiz, «Ungroup» (`Ctrl + Shift + G`) tugmasini bosib qayta ajrating."],
    ask: [
      ["Guruhlash (Group) asbobi nima qiladi?", "Bir nechta alohida shakllarni bitta yaxlit obyektga aylantiradi."],
      ["Guruhlashning tezkor tugmasi qaysi?", "`Ctrl + G`."],
      ["Guruhlangan shaklni yana qismlarga qanday ajratish mumkin?", "«Ungroup» (`Ctrl + Shift + G`) tugmasi orqali."],
      ["Guruhlagandan keyin turli ranglarni saqlab qolish uchun nima qilinadi?", "Ranglar menyusidan «Multicolor» yoqiladi."]
    ],
    quiz: [
      ["Guruhlash belgisi qanday ko'rinishda?", "Kvadrat va doira birlashgan belgi", "Qaychi belgisi", "Qalam belgisi"],
      ["Guruhlashning klaviatura buyrug'i qaysi?", "Ctrl + G", "Ctrl + Z", "Ctrl + C"],
      ["Bir nechta shaklni birdaniga tanlash uchun qaysi tugma yordam beradi?", "Shift", "Alt", "Tab"],
      ["Guruhlangan buyumdan yana alohida qismlarni olish uchun qaysi asbob kerak?", "Ungroup (Ajratish)", "Delete (O'chirish)", "Duplicate"],
      ["Nega buyumlarni guruhlaymiz?", "Bitta jismga aylantirib, oson ko'chirish va saqlash uchun", "Rangini o'chirish uchun", "Faylni kichraytirish uchun"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Guruhlash bosqichlari",
      steps: [
        "Kerakli shakllarni maydonga qo'yish va o'lchamlarini sozlash",
        "Detallarni bir-biriga moslab kerakli joyga terish",
        "Barcha detallarni sichqoncha bilan belgilab tanlash",
        "«Group» tugmasini yoki Ctrl + G ni bosish",
        "Multicolor katakchasini yoqib, ranglarni saqlash"
      ]
    },
    topic: [
      { e: "🧩", h: "Lego kabi birlashtirish", p: "Lego konstruktorida mayda detallar birlashib bitta mashina bo'lgani kabi, 3D dasturda ham kub va silindrlar birlashib mebel, robot yoki binoga aylanadi. Bu jarayon Guruhlash deyiladi.", q: "Uyimizdagi qaysi narsalar ko'p detallar yig'indisi?", a: "Velosiped, stol, kompyuter, deraza." },
      { e: "🎨", h: "Multicolor — rang-baranglik", p: "Odatda guruhlanganda kompyuter shakllarni bitta rangga bo'yab qo'yadi. Lekin «Multicolor» sozlamasi har bir detal o'z rangini saqlab qolishiga imkon beradi.", q: "Qachon bitta rang bo'lgani ma'qul?", a: "Agar buyum haqiqatda bitta materialdan (masalan, yog'ochdan) yasalgan bo'lsa." },
      { e: "🔄", h: "Hech narsa yo'qolmaydi — Ungroup", p: "Eng ajoyib tomoni: xohlagan paytda «Ungroup» tugmasini bosib, guruhni buzishingiz va ichidagi detalni to'g'rilab, qayta guruhlashingiz mumkin.", q: "Bu xatolardan qo'rqmaslikka yordam beradimi?", a: "Albatta, 3D dizaynda xatoni to'g'rilash juda oson!" }
    ],
    prog: [{ t: "Guruhlash algoritmi", b: ["y:📦 4 ta oyoq va stol ustini ter", "b:🖱️ Hammasini birga tanla", "o:🔗 Group (Ctrl + G) ni bos", "p:🎨 Rang: Multicolor ni yoq"] }],
    video: [["r_dY3nNqFzA", "Tinkercad Group and Ungroup Tutorial"], ["T_8wM6V2b7w", "Tinkercad'da shakllarni birlashtirish"]],
    yq: "tinkercad group ungroup tutorial",
    hw: ["Uyingizdagi stulni qismlarga ajrating: unda nechta oyoq, qanday o'rindiq va suyang'ich bor? Qog'ozga eskiz chizing."]
  },
  {
    n: 13, mod: 2, t: "Bo'shliqlar va teshiklar (Hole): O'yish va qirqish",
    goal: "O'quvchilar «Hole» (Teshik) rejimini tushunib, qattiq jismdan boshqa jism shaklini qirqib olishni, ichi bo'sh shakllar (kosa, truba, deraza) yasashni o'rganadi.",
    out: ["Solid (jism) va Hole (bo'shliq) farqini biladi", "Har qanday shaklni Hole rejimiga o'tkazadi", "Guruhlash orqali stakan yoki ichi bo'sh quti yasaydi"],
    need: ["Kompyuterlar, internet, Tinkercad"],
    plan: [["6", "Savol: chashka yoki stakan ichiga choy quyish uchun uning ichi qanday bo'lishi kerak? Ichi bo'sh shakl qanday yasaladi?"], ["8", "Yangi mavzu: «Hole» (Teshik/Bo'shliq). Kulrang yarim shaffof shakllar. Guruhlanganda ular boshqa jismdan qirqib olinadi."], ["23", "Amaliy ish: Ichi bo'sh qalamdon idishi."], ["4", "«Saralash» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Eng muhim tushuncha: «Hole» shakli o'zi alohida teshik ocholmaydi! U faqat oddiy «Solid» shakl bilan birga tanlanib, «Group» bosilgandagina teshik hosil qiladi.", "Ichki teshik pastdan teshib chiqib ketmasligi uchun uni 2-3 mm yuqoriga ko'tarish kerakligini (tubini saqlash) eslatib o'ting."],
    pt: "Amaliy ish: «Sehrli kosa / qalamdon idishi»",
    steps: [
      "Yangi loyiha oching va nomini «Stakan» deb qo'ying.",
      "Asosiy silindr oling: o'lchami 40 mm × 40 mm, balandligi 50 mm. Bu bizning stakan tanasi.",
      "Endi ikkinchi silindr oling: o'lchamini biroz kichikroq qiling — 34 mm × 34 mm, balandligi 50 mm.",
      "Ikkinchi silindr sozlamalari oynasidan «Hole» (Teshik) tugmasini bosing — u yarim shaffof kulrang bo'lib qoladi!",
      "Hole silindrini qora konus orqali 3 mm yuqoriga ko'taring (stakanning tagida 3 mm pol qolishi uchun).",
      "Hole silindrini asosiy silindrning o'rtasiga surib kiring.",
      "Ikkala silindrni ham tanlang va «Group» (`Ctrl + G`) tugmasini bosing!",
      "Mo''jiza: kulrang silindr g'oyib bo'ldi va uning o'rnida stakanning ichki chuqur bo'shlig'i paydo bo'ldi!"
    ],
    extra: ["Stakanning yon devoriga yurakcha yoki yulduzcha shaklidagi «Hole» qo'yib, o'yma naqsh qiling.", "Idishga tutqich (Torus shakli) qo'shib, uni haqiqiy krujkaga aylantiring."],
    ask: [
      ["Tinkercad'da «Hole» nima?", "Boshqa shakllardan qirqib olinadigan teshik (bo'shliq) shakli."],
      ["Hole shakli qachon haqiqiy teshik hosil qiladi?", "Boshqa jism bilan birga tanlanib, «Group» (Guruhlash) bosilganda."],
      ["Nega ichki teshikni 3 mm yuqoriga ko'tardik?", "Stakanning tubi teshilib, choy oqib ketmasligi uchun."],
      ["Ixtiyoriy shaklni (masalan, matn yoki yulduzni) Hole qilish mumkinmi?", "Ha, istalgan shaklni Hole ga aylantirish mumkin."]
    ],
    quiz: [
      ["Hole rejimiga o'tgan shakl qanday ko'rinadi?", "Yarim shaffof kulrang chiziqli", "Qop-qora", "Yashil yonib turadi"],
      ["Teshik hosil bo'lishi uchun qaysi amalni bajarish shart?", "Group (Guruhlash)", "Delete", "Ungroup"],
      ["Stakan tubi teshilib qolmasligi uchun nima qilish kerak?", "Teshik shaklini bir necha mm yuqoriga ko'tarish", "Stakanni kattalashtirish", "Rangini o'zgartirish"],
      ["Qattiq jism rejimi inglizcha qanday ataladi?", "Solid", "Hole", "Liquid"],
      ["Hole shakli orqali qanday buyumlarni yasash mumkin?", "Kosa, quvur, deraza va eshik teshiklari", "Faqat sharlar", "Faqat tekis qog'oz"]
    ],
    game: {
      type: "sort",
      title: "Solidmi yoki Hole?",
      desc: "Buyum yasashda qaysi qism Solid (jism), qaysi biri Hole (teshik) bo'ladi?",
      cats: ["Solid (Qattiq jism)", "Hole (Bo'shliq / Teshik)"],
      items: [
        ["Uyning asosiy devori", 0],
        ["Devordagi deraza o'rni", 1],
        ["Mashina g'ildiragining o'qi o'tadigan teshigi", 1],
        ["Qalamdonning korpusi", 0],
        ["Kalit ilmoq teshigi", 1],
        ["Choynak qopqog'i", 0]
      ]
    },
    topic: [
      { e: "🕳️", h: "Hole — raqamli o'ymakorlik", p: "Yog'och usta asbob bilan yog'ochni o'yib kosa yasagani kabi, biz 3D dasturda «Hole» yordamida shakllarni o'yamiz. Bu muhandislikda «Boolean amali» (kesishma ayirmasi) deyiladi.", q: "Teshik kulrang ko'rinishi nimani bildiradi?", a: "U hali qirqilmagan, lekin qirqishga tayyor turgan pichoqdek narsa." },
      { e: "🚪", h: "Uyda eshik va deraza ochish", p: "Tinkercad'da bino yasaganda, avval katta to'rtburchak devor olinadi. Keyin unga kubik shaklidagi Hole qo'yilib guruhlanadi — bir lahzada eshik va derazalar tayyor bo'ladi!", q: "Deraza qanday shakldan o'yiladi?", a: "To'rtburchak yoki arkasimon shakldan." },
      { e: "💡", h: "Cheksiz shakllar imkoniyati", p: "Solid va Hole amallarini birlashtirib, dunyodagi istalgan eng murakkab mexanik detalni ham yasash mumkin.", q: "Teshikni qayta yo'qotish mumkinmi?", a: "Ha, `Ungroup` bosilsa, teshik yana alohida shaklga aylanadi." }
    ],
    prog: [{ t: "Ichi bo'sh idish yasash algoritmi", b: ["y:🛢️ Katta silindr: Solid", "b:🛢️ Kichik silindr: Hole", "o:⬆️ Hole'ni 3 mm yuqoriga ko'tar", "g:🎯 Ikkalasini markazga qo'y", "p:🔗 Group (Ctrl + G) ni bos!"] }],
    video: [["j_eA6dO2P_g", "Tinkercad: Creating Holes and Cutouts"], ["mK8E8V3o6f8", "Tinkercad teshik ochish va o'yish"]],
    yq: "tinkercad holes cutouts boolean subtract tutorial",
    hw: ["Uyingizdagi teshigi yoki bo'shlig'i bor 3 ta narsani toping (masalan: nina ko'zi, krujka, qulf teshigi)."]
  },
  {
    n: 14, mod: 2, t: "Amaliy loyiha: Shaxsiy nomli 3D brelok",
    goal: "O'quvchilar o'tgan darslardagi bilimlarni birlashtirib, kalit uchun shaxsiy ism yozilgan, ilmoq teshigiga ega haqiqiy 3D brelok loyihalaydi.",
    out: ["«Text» (Matn) shakli bilan ishlashni va shrift parametrlarini biladi", "Brelok tagligi, harflar va ilmoq teshigini to'g'ri o'lchamlarda birlashtiradi", "3D printerda chiqarishga yaroqli mustahkam model yaratadi"],
    need: ["Kompyuterlar, internet, Tinkercad"],
    plan: [["5", "Loyiha maqsadi: bugun har bir o'quvchi o'z ismi tushirilgan kalit osqich (brelok) modelini noldan yasaydi."], ["8", "Brelok anatomiyasi: asos plastina (3 mm), qabariq harflar (+2 mm) va kalit halqasi teshigi."], ["24", "Amaliy ish: Shaxsiy brelokni yasash."], ["4", "Modellarni tekshirish va baholash."], ["4", "Xulosa va saqlash."]],
    tips: ["Harflar asos plastinadan 1.5–2 mm baland bo'lsa kifoya — juda baland bo'lsa cho'ntakda sinib qolishi mumkin.", "Ism juda uzun bo'lsa (masalan: Muhammadali), brelok plastinasini cho'zishni yoki ismning qisqartmasini yozishni tavsiya qiling."],
    pt: "Loyiha: «Mening nomli 3D brelokim»",
    steps: [
      "Yangi dizayn oching va nomini «Mening brelokim» deb belgilang.",
      "Asos plastina: qizil Box oling. Eni: 60 mm, kengligi: 25 mm, balandligi: 3 mm qilib sozlang.",
      "Plastina burchaklarini yumaloqlash: Box sozlamalaridagi «Radius» slayderini 2.0 ga suring — qirralari chiroyli yumaloqlanadi!",
      "O'ng paneldagi «Text and Numbers» bo'limidan «TEXT» shaklini olib chiqing.",
      "Matn oynasiga o'z ismingizni yozing (masalan: «ALI»). Harflar balandligini 5 mm qiling.",
      "Ismni asos plastinaning ustiga qo'ying (u plastinadan 2 mm bo'rtib chiqib tursin).",
      "Kalit teshigi: silindr oling, «Hole» qiling, o'lchamini 5 mm × 5 mm qilib, brelokning chap chetiga qo'ying.",
      "Barcha qismlarni tanlang (Plastina + Ism + Teshik) va «Group» tugmasini bosing!",
      "Tabriklaymiz, sizning shaxsiy brelok modelingiz tayyor!"
    ],
    extra: ["Ism yoniga kichik yulduzcha yoki yurakcha shaklini qo'shing.", "Ikki rangli brelok dizaynini o'ylab ko'ring (harflar boshqa rangda)."],
    ask: [
      ["Brelok plastinasi nega juda qalin (masalan, 20 mm) bo'lmasligi kerak?", "Cho'ntakka sig'ishi qulay va yengil bo'lishi uchun (3–4 mm yetarli)."],
      ["Brelok qirralari nega yumaloqlanadi?", "Cho'ntakni yirtmasligi va qo'lga botmasligi uchun («Radius» parametri)."],
      ["Kalit teshigi qanday o'lchamda bo'lishi kerak?", "Kalit halqasi erkin o'tishi uchun kamida 4–5 mm."],
      ["Bu modelni 3D printerda chiqarish mumkinmi?", "Ha, bu to'liq 3D bosmaga tayyor model!"]
    ],
    quiz: [
      ["Tinkercad'da matn yozish shakli nima deb ataladi?", "Text", "Font", "Word"],
      ["Burchaklarni yumaloqlash uchun qaysi parametr suriladi?", "Radius", "Steps", "Length"],
      ["Brelok tagligining qulay qalinligi qancha?", "3–4 mm", "20 mm", "50 mm"],
      ["Harflar chiroyli ko'rinishi uchun asosdan qancha bo'rtib turishi ma'qul?", "1.5–2 mm", "10 mm", "0 mm (ko'rinmaydi)"],
      ["Kalit teshigini ochish uchun qaysi asbob ishlatiladi?", "Silindr shaklidagi Hole", "Konus", "Sfera"]
    ],
    game: {
      type: "memory",
      title: "Juftini top: Brelok qismlari",
      pairs: [
        ["Asos plastina", "3 mm qalinlik"],
        ["Radius slayderi", "Burchaklarni yumaloqlash"],
        ["Text shakli", "Ism yozish"],
        ["Hole silindr (5 mm)", "Kalit halqasi teshigi"],
        ["Group", "Bitta butun brelok"],
        ["3D Printer", "Plastikdan chiqarib beradi"]
      ]
    },
    topic: [
      { e: "🔑", h: "Haqiqiy foydali buyum", p: "Bugun siz oddiy mashq emas, balki hayotda ishlatiladigan haqiqiy buyum yaratdingiz. Dunyo bo'ylab millionlab odamlar o'zlariga 3D printerda brelok yasab taqib yuradilar.", q: "Brelokni yana qanday shaxsiylashtirish mumkin?", a: "Telefon raqami yoki sevimli sport jamoasi ramzini qo'yish orqali." },
      { e: "🖨️", h: "3D printer buni qanday chiqaradi?", p: "Printer suyuq issiq plastik ipni (PLA) qatlam-qatlam qilib quyib chiqadi: avval pastki taglikni, keyin teshikni va eng oxirida ismingiz harflarini.", q: "Bunday brelok necha daqiqada chop etiladi?", a: "Taxminan 20–30 daqiqada." },
      { e: "🎁", h: "Do'stlar uchun ajoyib sovg'a", p: "O'z qo'lingiz bilan yaratilgan, ustida do'stingizning ismi yozilgan brelok — eng qadrli va esda qolarli sovg'adir.", q: "Ota-onangiz uchun ham shunday brelok yasay olasizmi?", a: "Albatta, ularning ismlari bilan ham yasash mumkin!" }
    ],
    prog: [{ t: "Brelok yasash texnologik zanjiri", b: ["y:📦 Asos plastina: 60×25×3 mm", "p:🔘 Radius: 2.0 (yumaloq qirra)", "g:✍️ Text: ismni yoz va joyla", "b:🕳️ Silindr Hole: 5 mm (teshik)", "o:🔗 Group: hammasini birlashtir!"] }],
    video: [["wY9kQz1B-lM", "Tinkercad Keychain Tutorial"], ["a68_g2IpepU", "Tinkercad'da nomli brelok yasash"]],
    yq: "tinkercad keychain name tutorial for beginners",
    hw: ["Do'stingiz uchun brelok dizayni loyihasini qog'ozda chizing: qanday shakl va qanday yozuv bo'ladi?"]
  },
  {
    n: 15, mod: 2, t: "Aniq tekislash (Align) va akslantirish (Mirror)",
    goal: "O'quvchilar shakllarni bir chiziq yoki markaz bo'ylab mutlaqo aniq tekislashni (Align — L) va simmetrik nusxa hosil qilishni (Mirror — M) o'rganadi.",
    out: ["Align (Tekislash) asbobi va uning qora nuqtalarini boshqaradi", "Shakllarni markaz bo'yicha mukammal tekislaydi", "Mirror (Akslantirish) orqali simmetrik juftliklar (quloqlar, ko'zlar) yasaydi"],
    need: ["Kompyuterlar, internet, Tinkercad"],
    plan: [["5", "Muammo: ko'z bilan chamalab stakanning o'rtasiga teshik qo'yish juda qiyin — bir tomoni qalin, bir tomoni yupqa bo'lib qoladi. Qanday qilib 100% markazga qo'yish mumkin?"], ["8", "Yangi mavzu: Align (Tekislash — L) va Mirror (Akslantirish — M). Qora nuqtalar siri."], ["23", "Amaliy ish: Simmetrik robot kallasi."], ["5", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Align tugmasi bosilganda 9 ta qora nuqta paydo bo'ladi. O'rtadagi nuqtalar — markazlashtiradi, chekkadagi nuqtalar — chetga taqaydi.", "Mirror — bu oynadagi aks. Masalan, robotning o'ng qo'lini yasab, Mirror qilsangiz — chap qo'l hosil bo'ladi."],
    pt: "Amaliy ish: «Simmetrik robot kallasi»",
    steps: [
      "Yangi loyiha oching va «Robot kallasi» deb nomlang.",
      "Kalla uchun kubik oling (40 × 40 × 35 mm).",
      "Ko'zlar uchun ikkita kichik silindr (Hole) tayyorlang (o'lchami 8 × 8 mm).",
      "Ikkala ko'zni va kallani tanlang, so'ng klaviaturadagi «L» (Align) tugmasini bosing.",
      "Paydo bo'lgan nuqtalardan o'rtadagisini bosing — ko'zlar bir tekis gorizontal chiziqqa tushadi!",
      "Robot qulog'i: bitta quloq shaklini yasang (masalan, konus yoki antennasimon detal).",
      "`Ctrl + C` va `Ctrl + V` qiling, so'ng yuqori paneldagi «Mirror» (M) tugmasini bosing.",
      "Qarama-qarshi strelkani bosing — quloq ikkinchi tomonga oynadek akslanadi!",
      "Hamma detallarni tekislang va «Group» qiling — simmetrik robot kallasi tayyor!"
    ],
    extra: ["Robot boshiga aylanuvchi antenna qo'shing.", "Og'iz qismini bir nechta tekislangan tishlar bilan bezating."],
    ask: [
      ["Align (Tekislash) asbobi nima uchun kerak?", "Shakllarni ko'z bilan chamalamasdan, matematik aniqlikda markazlashtirish va tekislash uchun."],
      ["Align asbobining tezkor tugmasi qaysi?", "«L» harfi."],
      ["Mirror (Akslantirish) asbobi nima qiladi?", "Shaklning oynadagi kabi teskari simmetrik nusxasini yaratadi."],
      ["Odam yuzi va robotlarda simmetriya nima uchun kerak?", "Chiroyli, muvozanatli va tabiiy ko'rinishi uchun."]
    ],
    quiz: [
      ["Tekislash (Align) asbobining qaynoq tugmasi qaysi?", "L harfi", "A harfi", "T harfi"],
      ["Align nuqtalaridan o'rtadagisi nimani bildiradi?", "Markaz bo'yicha tekislash", "Eng chetga surish", "O'chirish"],
      ["Oynadagi akslantirish (Mirror) tugmasi qaysi?", "M harfi", "Ctrl + M", "Shift + M"],
      ["Shakllarni tekislash uchun avval nima qilish kerak?", "Kamida 2 ta shaklni tanlash kerak", "Bitta shaklni o'chirish kerak", "Rangini o'zgartirish kerak"],
      ["Robotning chap va o'ng quloqlari qanday hosil qilinadi?", "Bitta quloqni yasab, Mirror bilan akslantiriladi", "Ikkalasi boshqacha yasaladi", "Konus bilan o'yiladi"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Aniq tekislash (Align)",
      steps: [
        "Tekislanadigan ikkita yoki undan ko'p shaklni maydonga qo'yish",
        "Sichqoncha bilan ularning barchasini tanlash (Select)",
        "«L» tugmasini yoki yuqoridagi Align belgisini bosish",
        "O'rtadagi qora nuqtani bosib, markazlashtirish",
        "Kamerani aylantirib, natijani tekshirish"
      ]
    },
    topic: [
      { e: "🎯", h: "Align — muhandislik aniqligi", p: "Ko'z bilan qaraganda to'g'ri ko'ringan narsa aslida 1 mm qing'ir bo'lishi mumkin. Align vositasi barcha detallarni millisekundda qora nuqtalar bo'ylab bir tekis qilib tizib beradi.", q: "Yana qayerda Align ishlatiladi?", a: "Word matn muharririda matnni o'rtaga tekislashda." },
      { e: "🪞", h: "Mirror — tabiatdagi simmetriya", p: "Bizning ikki qo'limiz, kapalak qanotlari, samolyot qanotlari simmetrikdir. 3D dizaynda ikkala tomonni alohida chizib o'tirmaymiz: bittasini yasab, Mirror bilan akslantiramiz!", q: "Bu usul qancha vaqtni tejaydi?", a: "Ish vaqtini roppa-rosa ikki barobar qisqartiradi." },
      { e: "🤖", h: "Robototexnikada simmetriya", p: "Robot to'g'ri yurishi uchun uning chap va o'ng g'ildiraklari, og'irlik markazi mutlaqo simmetrik bo'lishi shart. Aks holda robot bir tomonga og'ib ketadi.", q: "Simulyatordagi robotimiz simmetrikmidi?", a: "Ha, ikki g'ildiragi bir xil markazda joylashgan." }
    ],
    prog: [{ t: "Align va Mirror texnikasi", b: ["y:📦 2 ta shaklni tanla", "b:⌨️ «L» (Align) tugmasini bos", "o:⚫ O'rta qora nuqtani bos (Markaz)", "g:📋 Nusxa ol (Ctrl + C, Ctrl + V)", "p:🪞 «M» (Mirror) bilan akslantir!"] }],
    video: [["wz5qGqZ7u88", "Tinkercad Align and Mirror Tutorial"], ["AKUtkYZTUfo", "Tinkercad'da tekislash va akslantirish"]],
    yq: "tinkercad align and mirror tool tutorial",
    hw: ["Uyingizdagi simmetrik bo'lgan 3 ta buyumni toping (masalan: qaychi, ko'zoynak, chashka)."]
  },
  {
    n: 16, mod: 2, t: "Amaliy loyiha: Stol usti qalamdoni",
    goal: "O'quvchilar 2-modulda o'rganilgan barcha usullarni (shakllar, aniq o'lcham, guruhlash, teshiklar ochish va tekislash) birlashtirib, funksional stol qalamdoni loyihasini yaratadi.",
    out: ["Mustaqil ravishda bir nechta bo'limli qalamdon modelini rejalashtiradi", "Align va Hole yordamida qalamlar va o'chirg'ichlar bo'limlarini o'yadi", "Haqiqiy foydalanishga yaroqli to'liq 3D modelni eksportga tayyorlaydi"],
    need: ["Kompyuterlar, internet, Tinkercad"],
    plan: [["5", "2-modul yakuni: bugun o'z stolimiz uchun haqiqiy ko'p bo'limli organayzer-qalamdon yasaymiz."], ["8", "Qalamdon tuzilmasi: qalamlar bo'limi (chuqur), o'chirg'ich bo'limi (keng va sayoz), stikerlar joyi."], ["25", "Amaliy ish: Qalamdonni loyihalash va bezatish."], ["4", "Ko'rgazma va o'zaro fikr almashish."], ["3", "2-modul xulosasi."]],
    tips: ["Qalamdon ag'darilib ketmasligi uchun uning asosi kamida 60 × 60 mm bo'lishi kerak.", "Devor qalinligi kamida 2.5–3 mm bo'lishini nazorat qiling, juda yupqa devor 3D printerda bosilganda sinuvchan bo'lib qoladi."],
    pt: "Yakuniy loyiha: «Mening stol qalamdonim»",
    steps: [
      "Yangi dizayn oching va «Mening qalamdonim» deb nomlang.",
      "Asos korpus: Box oling, o'lchamlari 80 mm (uzunlik) × 60 mm (kenglik) × 70 mm (balandlik). Radiusini 3.0 qilib yumaloqlang.",
      "1-bo'lim (qalamlar uchun): silindr Hole oling (o'lchami 35 × 35 mm, balandligi 70 mm). Uni 4 mm yuqoriga ko'taring va asosning chap tomoniga joylang.",
      "2-bo'lim (flomasterlar uchun): yana bitta silindr Hole oling va yoniga qo'ying.",
      "3-bo'lim (o'chirg'ich va qisqichlar uchun): to'rtburchak Box Hole oling (o'lchami 60 × 20 mm, balandligi 30 mm).",
      "Barcha bo'shliqlarni «Align» bilan chiroyli qilib tartiblang.",
      "Old devorga o'z ismingizni yoki sevimli emblemani bo'rtma qilib qo'ying.",
      "Barchasini tanlang va «Group» qiling!",
      "Ajoyib! Stol ustida turadigan haqiqiy shaxsiy organayzeringiz tayyor!"
    ],
    extra: ["Qalamdon oldiga telefon suyab qo'yish uchun maxsus qiya o'yiq qo'shing.", "Yon devorlariga geometrik qirqimlar bilan shamdon uslubidagi naqsh bering."],
    ask: [
      ["Qalamdon devori nega juda yupqa bo'lmasligi kerak?", "3D printerda chiqarilganda mustahkam turishi va sinib ketmasligi uchun."],
      ["Nega qalamlar bo'limi chuqur, o'chirg'ich bo'limi sayoz qilinadi?", "Qalamlar yiqilmasdan tik turishi, o'chirg'ichni esa barmoq bilan olish qulay bo'lishi uchun."],
      ["Bu loyihada Tinkercad'ning qaysi asboblari ishlatildi?", "Shakllar, o'lchamlar, ko'tarish, Hole, Align va Group."],
      ["2-modulda sizga eng yoqqan mavzu qaysi bo'ldi?", "O'quvchining shaxsiy fikri va xulosasi."]
    ],
    quiz: [
      ["Qalamdon ag'darilib ketmasligi uchun nima qilish kerak?", "Asosini yetarlicha keng va og'ir qilish kerak", "Faqat bo'yini baland qilish kerak", "Rangini qora qilish kerak"],
      ["Qalamdon bo'limlarini ochish uchun qaysi asbob ishlatiladi?", "Hole va Group", "Faqat Text", "Faqat Mirror"],
      ["3D printerda chiqarish uchun qulay devor qalinligi qancha?", "2–3 mm", "0.1 mm", "50 mm"],
      ["Tinkercad'dagi loyihani qanday formatda eksport qilib 3D printerga beriladi?", ".STL yoki .OBJ", ".MP3", ".DOCX"],
      ["2-modulda biz nimani o'rgandik?", "3D modellashtirish va fazoviy dizaynni", "Faqat Scratch bloklarini", "Faqat video ko'rishni"]
    ],
    game: {
      type: "quiz",
      title: "Test: 2-modul bo'yicha yakuniy sinov",
      items: [
        ["Tinkercad'da guruhlash tugmasi qaysi?", "Ctrl + G", "Ctrl + Z", "Ctrl + V"],
        ["Teshik ochuvchi shaffof shakl nima deyiladi?", "Hole", "Solid", "Shadow"],
        ["Shakllarni markazlashtirib tekislovchi vosita qaysi?", "Align (L)", "Mirror (M)", "Drop (D)"],
        ["O'lchamlar Tinkercad'da qaysi birlikda kiritiladi?", "Millimetrda (mm)", "Metrda", "Pikselda"]
      ]
    },
    topic: [
      { e: "🏆", h: "Haqiqiy 3D dizaynersiz!", p: "Atigi 8 dars ichida siz 3D fazoni o'zlashtirdingiz, shakllarni o'lchashni, teshiklar ochishni va shaxsiy brelok hamda qalamdon yaratishni o'rgandingiz. Bu haqiqiy muhandislik yutug'idir!", q: "Keyingi modulda nima qilamiz?", a: "3D dizayn va Scratch dasturlashni birlashtiramiz!" },
      { e: "📂", h: "STL — 3D bosma tili", p: "Dizayn tayyor bo'lgach, «Export» tugmasi bosiladi va `.STL` fayl yuklab olinadi. Bu faylni dunyodagi istalgan 3D printer tushunadi va uni real buyumga aylantiradi.", q: "3D printerda yana nimalar chiqariladi?", a: "O'yinchoqlar, robot qismlari, protezlar, hatto uylar!" },
      { e: "🌟", h: "Fikrdan buyumgacha", p: "Eng katta mo''jiza — bu miyangizdagi g'oyani avval kompyuter ekranida chizib, keyin qo'lingizda ushlay oladigan buyumga aylantirishdir.", q: "Kelajakda yana nima loyihalashni xohlaysiz?", a: "O'z orzuingizdagi robot yoki kosmik kema modelini." }
    ],
    prog: [{ t: "Qalamdon yaratish bosqichlari", b: ["y:📦 Asos korpus: 80×60×70 mm", "b:🕳️ Silindr Hole: qalamlar joyi", "o:🕳️ Box Hole: o'chirg'ich joyi", "g:🎯 Align: hammasini tekisla", "p:🔗 Group: yaxlit organayzer!"] }],
    video: [["P7t_V6tC9gM", "Tinkercad Desk Organizer Tutorial"], ["2e3Z2N_Cj3g", "Tinkercad'da qalamdon loyihalash"]],
    yq: "tinkercad desk organizer pencil holder tutorial",
    hw: ["Stolingizdagi qalamdonni ko'zdan kechiring: unga yana qanday qulay bo'limlar qo'shish mumkinligini o'ylab, daftarga chizing."]
  }
);

