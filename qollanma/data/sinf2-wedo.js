// 2-sinf · WeDo 2.0 darslari (5–16) uchun qo'shimcha: interaktiv mavzu kartochkalari va dastur sxemalari.
//   topic — [{ e: belgi, h: sarlavha, p: tushuntirish, q: o'ylab ko'r savoli, a: javobi }]
//   prog  — [{ t: zanjir nomi, b: ["y:Boshlash", "g:Quvvat 8", ...] }]
//           rang kodi: y — boshqaruv (sariq), g — motor va chiroq (yashil), r — ekran va tovush (qizil), o — datchik (to'q sariq)
(function () {
  const add = {
    5: {
      topic: [
        { e: "🟦", h: "Smarthub — robotning miyasi", p: "Smarthub — to'plamdagi eng muhim detal. U planshetdan buyruq oladi va motorga yetkazadi. Unda 2 ta port, yashil tugma va chiroq bor. 2 ta AA batareya bilan ishlaydi.", q: "Smarthub planshet bilan nima orqali gaplashadi?", a: "Simsiz — Bluetooth orqali." },
        { e: "⚙️", h: "Motor — robotning mushagi", p: "Motor aylanadi va modelni harakatga keltiradi: g'ildirakni, parrakni, qo'lni. U Smarthub portiga sim bilan ulanadi.", q: "Motor bo'lmasa model nima qila oladi?", a: "Hech narsa — u faqat turadi. Harakat uchun motor kerak." },
        { e: "👀", h: "Ikki datchik — robotning sezgisi", p: "Harakat datchigi oldidagi narsani sezadi (ikki «ko'zi» bor). Egilish datchigi qaysi tomonga qiyshayganini sezadi.", q: "Qaysi datchik to'siqni ko'radi?", a: "Harakat datchigi." },
        { e: "🧱", h: "Mexanik detallar", p: "G'isht va plastinalar — tana. O'q va vtulka — aylanadigan qismlar. Tishli g'ildirak, shkiv va tasma — aylanishni uzatadi.", q: "G'ildirak nimaga kiydiriladi?", a: "O'qqa." }
      ]
    },
    6: {
      topic: [
        { e: "📱", h: "Dastur muhiti", p: "WeDo 2.0 ilovasida bloklar ekran pastida turadi. Ularni barmoq yoki sichqoncha bilan dastur maydoniga sudrab, bir-biriga ulaymiz.", q: "Bloklarda yozuv bormi?", a: "Yo'q, faqat rasm. Shuning uchun har blokning rasmini eslab qolamiz." },
        { e: "🟡", h: "Blok ranglari", p: "Sariq bloklar — boshqaruv (boshlash, kutish, takrorlash). Yashil bloklar — motor va chiroq. Qizil bloklar — ekran va tovush. To'q sariq belgilar — datchiklar.", q: "Motorni aylantirish uchun qaysi rangdagi blok kerak?", a: "Yashil." },
        { e: "🔢", h: "Motor quvvati: 0 dan 10 gacha", p: "Quvvat — motor qanchalik kuchli aylanishi. 0 — turadi, 5 — o'rtacha, 10 — eng tez.", q: "Quvvat 0 bo'lsa nima bo'ladi?", a: "Motor aylanmaydi." },
        { e: "➡️", h: "Dastur chapdan o'ngga o'qiladi", p: "Robot bloklarni xuddi biz kitob o'qigandek bajaradi: birinchisidan boshlab, birma-bir, oxirigacha.", q: "Tartibni almashtirsak nima bo'ladi?", a: "Robot boshqacha ishlaydi yoki umuman ishlamaydi." }
      ],
      prog: [{ t: "Parrak 2 soniya aylanadi", b: ["y:▶ Boshlash", "g:Quvvat 5", "g:↻ Soat yo'nalishida", "g:⏱ 2 soniya"] }]
    },
    7: {
      topic: [
        { e: "🚀", h: "Rover nima?", p: "Rover — odam bora olmaydigan joylarni o'rganadigan g'ildirakli robot. Marsda hozir ham roverlar ishlayapti: ular surat oladi va tosh namunalarini tekshiradi.", q: "Nega Marsga odam emas, robot yuborildi?", a: "Yo'l juda uzoq, u yerda nafas olib bo'lmaydi va juda sovuq." },
        { e: "🧩", h: "Yo'riqnoma bo'yicha yig'ish", p: "Har qadamda qaysi detal kerakligi rasmda ko'rsatilgan. Avval detallarni topamiz, keyin rasmdagidek joylaymiz. Shoshilmaymiz!", q: "Detal mos kelmasa nima qilamiz?", a: "Bir qadam orqaga qaytib, rasmni qayta tekshiramiz." },
        { e: "📏", h: "Vaqt va masofa", p: "Motor qancha uzoq ishlasa, Milo shuncha uzoqqa boradi. 2 soniya — qisqa yo'l, 4 soniya — ikki barobar uzun yo'l.", q: "Milo 2 soniyada 30 sm yurdi. 4 soniyada-chi?", a: "Taxminan 60 sm." }
      ],
      prog: [{ t: "Milo oldinga yuradi", b: ["y:▶ Boshlash", "g:Quvvat 8", "g:↻ Soat yo'nalishida", "g:⏱ 2 soniya"] }]
    },
    8: {
      topic: [
        { e: "👀", h: "Harakat datchigi qanday ko'radi?", p: "Datchik ko'zga ko'rinmas nur yuboradi. Nur narsaga urilib qaytadi — datchik «oldimda nimadir bor» deb biladi. U taxminan 15 sm gacha sezadi.", q: "Ko'rshapalak qorong'ida qanday uchadi?", a: "Xuddi shunday: tovush yuboradi va qaytgan aks-sadoni eshitadi." },
        { e: "⏳", h: "Kutish bloki", p: "Kutish bloki dasturni to'xtatib turadi. Ichiga datchik belgisi qo'yilsa — datchik narsani sezmaguncha keyingi blokka o'tmaydi.", q: "Kutish bloki paytida motor ishlaydimi?", a: "Ha! Motor yonib qolgan, Milo yurib boradi. Dastur faqat keyingi buyruqni kutadi." },
        { e: "🚪", h: "Hayotdagi datchiklar", p: "Do'kon eshigi o'zi ochiladi, yo'lakda chiroq o'zi yonadi, mashina orqaga yurganda «pip-pip» qiladi — hammasi harakat yoki masofa datchigi.", q: "Yana qayerda datchik ko'rgansiz?", a: "Qo'l quritgich, avtomatik jo'mrak, lift eshigi." }
      ],
      prog: [{ t: "Milo namunani topib to'xtaydi", b: ["y:▶ Boshlash", "g:Quvvat 8", "g:↻ Soat yo'nalishida", "o:⏳ Kutish 👀", "g:■ To'xta", "r:🔊 Tovush"] }]
    },
    9: {
      topic: [
        { e: "↕️", h: "Egilish datchigi", p: "Bu datchik qaysi tomonga qiyshayganini biladi: oldinga, orqaga, chapga, o'ngga yoki tekis. Silkitilganini ham sezadi.", q: "Telefonda bu datchik nima qiladi?", a: "Telefonni yonboshlatsak, ekrandagi rasm ham buriladi." },
        { e: "🔀", h: "Ikki holat — ikki dastur", p: "Bugun birinchi marta ikkita alohida dastur zanjiri tuzamiz. Datchik pastga egilsa — birinchisi, yuqoriga egilsa — ikkinchisi ishlaydi.", q: "Ikkala zanjir bir vaqtda ishlaydimi?", a: "Ikkalasi ham kutib turadi. Qaysi hodisa bo'lsa, o'shanisi ishlaydi." },
        { e: "📡", h: "Xabar yuborish", p: "Rover topilmani bazaga xabar qilishi shart. Milo ikki usulda xabar beradi: Smarthub chirog'i rangi va ekrandagi matn bilan.", q: "Xabarsiz topilmaning foydasi bormi?", a: "Yo'q — olimlar bilmay qoladi." }
      ],
      prog: [
        { t: "Pastga egilsa — qizil chiroq", b: ["y:▶ Boshlash", "o:⏳ Kutish ↓", "g:💡 Chiroq: qizil"] },
        { t: "Yuqoriga egilsa — ekranda xabar", b: ["y:▶ Boshlash", "o:⏳ Kutish ↑", "r:💬 Matn: Topdim!"] }
      ]
    },
    10: {
      topic: [
        { e: "🌀", h: "Ventilyator qanday sovutadi?", p: "Parrak aylanib havoni itaradi — shamol hosil bo'ladi. Shamol teridagi issiqlikni olib ketadi va biz salqinlikni sezamiz.", q: "Parrak tezroq aylansa shamol qanday bo'ladi?", a: "Kuchliroq." },
        { e: "➰", h: "Shkiv va tasma", p: "Motor bir shkivni aylantiradi. Tasma (rezina halqa) aylanishni ikkinchi shkivga olib boradi, u esa parrakni aylantiradi. Velosiped zanjiri ham shunga o'xshaydi.", q: "Tasma tushib ketsa nima bo'ladi?", a: "Motor aylanadi, lekin parrak aylanmaydi." },
        { e: "⚠️", h: "Xavfsizlik", p: "Aylanayotgan parrakka barmoq, soch va kiyim yaqinlashtirilmaydi. Avval motorni to'xtatamiz, keyin modelga tegamiz.", q: "Modelni tuzatish kerak bo'lsa, birinchi nima qilamiz?", a: "Dasturni to'xtatamiz." }
      ],
      prog: [
        { t: "Ventilyator yonadi", b: ["y:▶ Boshlash", "g:Quvvat 3", "g:↻ Soat yo'nalishida"] },
        { t: "Tugma bosilsa — to'xtaydi", b: ["y:⌨ Tugma bosilganda", "g:■ To'xta"] }
      ]
    },
    11: {
      topic: [
        { e: "💪", h: "Kuch nima?", p: "Kuch — narsani itarish yoki tortish. Robot savatni tortganda motor kuchi ishlaydi. Yuk qancha og'ir bo'lsa, shuncha ko'p kuch kerak.", q: "Bo'sh sumka va kitobli sumka: qaysi birini ko'tarish qiyin?", a: "Kitoblisini — u og'irroq, ko'proq kuch kerak." },
        { e: "🧊", h: "Ishqalanish", p: "Narsa sirt ustida sirpanganda sirt unga «qarshilik» qiladi. Muzda ishqalanish kam — sirpanamiz. Gilamda ko'p — surish qiyin.", q: "Nega qishda yo'lga qum sepiladi?", a: "Ishqalanishni oshirish uchun — oyoq va g'ildirak sirpanmaydi." },
        { e: "🔬", h: "Olimdek ishlaymiz", p: "Avval taxmin qilamiz, keyin tekshiramiz, natijani yozamiz. Har safar faqat bitta narsani o'zgartiramiz: yukni yoki sirtni.", q: "Nega ikkala narsani birdan o'zgartirmaymiz?", a: "Unda qaysi biri ta'sir qilganini bilolmaymiz." }
      ],
      prog: [{ t: "Robot 3 soniya tortadi", b: ["y:▶ Boshlash", "g:Quvvat 10", "g:↻ Soat yo'nalishida", "g:⏱ 3 soniya"] }]
    },
    12: {
      topic: [
        { e: "🏎", h: "Tezlik nima?", p: "Tezlik — kim bir xil yo'lni qisqaroq vaqtda bosib o'tishi. 1 metrni 2 soniyada o'tgan mashina 5 soniyada o'tganidan tezroq.", q: "Gepard va toshbaqa 10 metrga yugurdi. Kim kam vaqt sarflaydi?", a: "Gepard — u tezroq." },
        { e: "⚖️", h: "Adolatli poyga", p: "Taqqoslash to'g'ri bo'lishi uchun hammada bir xil start chizig'i, bir xil masofa va bir vaqtda boshlash bo'lishi kerak.", q: "Bir mashina 1 metr, ikkinchisi 2 metr yursa, taqqoslab bo'ladimi?", a: "Yo'q, masofa bir xil bo'lishi kerak." },
        { e: "🛞", h: "G'ildirak o'lchami", p: "Katta g'ildirak bir marta aylanganda kichigidan uzoqroq yo'l bosadi. Shuning uchun g'ildirakni almashtirsak, tezlik ham o'zgaradi.", q: "Velosipedning g'ildiragi katta, samokatniki kichik. Bir aylanishda qaysi biri uzoq yuradi?", a: "Velosiped." }
      ],
      prog: [{ t: "Qo'l signali bilan start", b: ["y:▶ Boshlash", "o:⏳ Kutish 👀", "g:Quvvat 10", "g:↻ Soat yo'nalishida"] }]
    },
    13: {
      topic: [
        { e: "🥚", h: "Qurbaqa qanday o'sadi?", p: "Qurbaqa suvga tuxum qo'yadi. Tuxumdan itbaliq chiqadi — u baliqqa o'xshaydi. Keyin oyoqlar o'sadi, dum yo'qoladi va u quruqlikka chiqadi.", q: "Itbaliq quruqlikda yashay oladimi?", a: "Yo'q, u faqat suvda yashaydi." },
        { e: "🦋", h: "Metamorfoz", p: "Bolasi ota-onasiga o'xshamay tug'ilib, keyin butunlay o'zgarishi metamorfoz deyiladi. Kapalak ham shunday: qurt → g'umbak → kapalak.", q: "Mushuk bolasi metamorfozdan o'tadimi?", a: "Yo'q, u tug'ilgandayoq mushukka o'xshaydi, faqat kattalashadi." },
        { e: "🧪", h: "Model nima uchun kerak?", p: "Haqiqiy qurbaqa bir necha oyda o'sadi. Modelda biz buni bir darsda ko'ramiz: detallarni almashtirib, bosqichlarni solishtiramiz.", q: "Model haqiqiy qurbaqadan nimasi bilan farq qiladi?", a: "U tirik emas, ovqat yemaydi, faqat harakatni ko'rsatadi." }
      ],
      prog: [{ t: "Qurbaqa yuradi va ovoz chiqaradi", b: ["y:▶ Boshlash", "g:Quvvat 5", "g:↻ Soat yo'nalishida", "g:⏱ 3 soniya", "r:🔊 Tovush"] }]
    },
    14: {
      topic: [
        { e: "🐝", h: "Asalari nima uchun gulga qo'nadi?", p: "Asalari guldan shirin nektar ichadi. Shu payt oyoqlariga gulchang yopishadi. Keyingi gulga qo'nganda gulchang o'sha gulga o'tadi.", q: "Asalari buni ataylab qiladimi?", a: "Yo'q, u ovqat qidiradi. Changlatish o'z-o'zidan bo'ladi." },
        { e: "🍎", h: "Changlanish — meva boshlanishi", p: "Gulchang boshqa gulga tushgandan keyingina meva va urug' tugiladi. Olma, gilos, bodring — hammasi changlatuvchilar tufayli.", q: "Asalarilar yo'qolsa nima bo'ladi?", a: "Ko'p meva va sabzavotlar juda kamayib ketadi." },
        { e: "🔁", h: "Takrorlash bloki", p: "Asalari bir marta emas, kun bo'yi uchadi. Buyruqlarni qayta-qayta yozmaslik uchun ularni Takrorlash bloki ichiga solamiz.", q: "Takrorlash bloki bo'lmasa, 10 marta uchirish uchun nima qilardik?", a: "Xuddi shu bloklarni 10 marta ketma-ket terardik." }
      ],
      prog: [{ t: "Asalari gulga qo'nadi, dam oladi va yana uchadi", b: ["y:▶ Boshlash", "y:🔁 Takrorlash [", "g:Quvvat 3", "g:↻ Soat yo'nalishida", "o:⏳ Kutish 👀", "g:■ To'xta", "r:🔊 Tovush", "y:⏳ 2 soniya", "y:]"] }]
    },
    15: {
      topic: [
        { e: "🌊", h: "Toshqin nima?", p: "Yomg'ir ko'p yog'sa yoki qor tez erisa, daryo to'lib, qirg'oqdan toshadi. Suv uylar va ekinlarni bosishi mumkin.", q: "Toshqin ko'proq qaysi faslda bo'ladi?", a: "Bahorda — qor eriydi va yomg'ir ko'p yog'adi." },
        { e: "🚧", h: "To'g'on va darvoza", p: "To'g'on — daryoni to'sadigan katta devor. Uning darvozasi ochilsa suv o'tadi, yopilsa to'planadi. Shunday qilib odamlar suvni boshqaradi.", q: "To'plangan suv nimaga ishlatiladi?", a: "Ekin sug'orishga, ichimlik suviga va elektr olishga." },
        { e: "🤖", h: "Avtomatik boshqaruv", p: "Qo'lda boshqarishda odam tugmani bosadi. Avtomatik boshqaruvda datchik suv sathini o'zi kuzatadi va darvozani dastur ochadi.", q: "Avtomatik to'g'onning qanday afzalligi bor?", a: "Kechasi ham, odam yo'q paytda ham ishlaydi va kechikmaydi." }
      ],
      prog: [
        { t: "Darvozani ochish", b: ["y:▶ Boshlash", "g:↻ Soat yo'nalishida", "g:⏱ 1 soniya"] },
        { t: "Darvozani yopish", b: ["y:⌨ Tugma bosilganda", "g:↺ Soatga teskari", "g:⏱ 1 soniya"] },
        { t: "Avtomatik: suv ko'tarilsa ochadi, keyin yopadi", b: ["y:▶ Boshlash", "o:⏳ Kutish 👀", "g:↻ 1 soniya", "y:⏳ 3 soniya", "g:↺ 1 soniya"] }
      ]
    },
    16: {
      topic: [
        { e: "💡", h: "Muhandis qanday ishlaydi?", p: "Muhandislar har doim bir xil yo'ldan boradi: muammo → g'oya → reja → yasash → sinash → yaxshilash. Bugun siz ham muhandissiz.", q: "Birinchi sinovda ishlamasa, bu muvaffaqiyatsizlikmi?", a: "Yo'q. Sinash va yaxshilash — ishning oddiy qismi." },
        { e: "🧰", h: "Bizda nimalar bor?", p: "1 ta motor (harakat), harakat datchigi (narsani sezadi), egilish datchigi (qiyalikni sezadi), chiroq, tovush va ekrandagi matn.", q: "Avtomatik eshik uchun qaysi datchik kerak?", a: "Harakat datchigi." },
        { e: "🎤", h: "Taqdimot qoidasi", p: "Uch gap ayting: robotimning nomi, u nima qiladi, eng qiyin joyi nima bo'ldi. Boshqalar gapirganda tinglaymiz va qarsak chalamiz.", q: "Do'stingiz loyihasiga qanday fikr bildirish to'g'ri?", a: "Avval nimasi yoqqanini, keyin bitta taklifni aytamiz." }
      ],
      prog: [{ t: "Namuna: avtomatik eshik", b: ["y:▶ Boshlash", "o:⏳ Kutish 👀", "g:↻ 1 soniya", "y:⏳ 3 soniya", "g:↺ 1 soniya"] }]
    }
  };
  window.QOLLANMA.grades[2].lessons.forEach((l) => { if (add[l.n]) Object.assign(l, add[l.n]); });
})();
