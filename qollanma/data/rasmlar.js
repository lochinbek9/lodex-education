// Dars rasmlari. Hammasi Wikimedia Commons'dan, erkin litsenziyali; internet orqali yuklanadi.
//   kalit: "sinf.dars" · f — Commons'dagi fayl nomi · a — muallif · lic — litsenziya · c — rasm osti yozuvi
// Rasmni almashtirish: commons.wikimedia.org dan fayl topib, nomini f ga yozing va muallif bilan litsenziyani yangilang.
(function () {
  const R = {
    "2.1": { f: "Honda ASIMO (ver. 2011) 2011 Tokyo Motor Show.jpg", a: "Morio", lic: "CC BY-SA 3.0", c: "ASIMO — yura oladigan, zinadan chiqadigan odamsimon robot" },
    "2.2": { f: "Factory Automation Robotics Palettizing Bread.jpg", a: "KUKA Roboter GmbH, Bachmann", lic: "Public domain", c: "Zavod robotlari mahsulotni taxlamoqda" },
    "2.3": { f: "Robot Vacuum - Charging (50841204983).jpg", a: "ajay_suresh", lic: "CC BY 2.0", c: "Robot changyutgich: datchigi, motori, batareyasi va dasturi bor" },
    "2.5": { f: "Lego WeDo 2.0 Motor and Sensors.jpg", a: "Klaus-Dieter Keller", lic: "CC0", c: "WeDo 2.0: Smarthub, motor va ikki datchik" },
    "2.6": { f: "RobotAtelier.jpg", a: "Epn.slsl", lic: "CC BY-SA 4.0", c: "Smarthub ulanganda chirog'i yonib turadi" },
    "2.7": { f: "Curiosity - Robot Geologist and Chemist in One!.jpg", a: "NASA/JPL-Caltech", lic: "Public domain", c: "«Curiosity» roveri Marsda (rassom tasviri)" },
    "2.8": { f: "Front Doors of the WIPO New Building.jpg", a: "Peacearth", lic: "CC BY-SA 4.0", c: "Avtomatik eshik: harakat datchigi odamni sezadi" },
    "2.9": { f: "Black smartphone in hand (Unsplash).jpg", a: "Dennis Cortés", lic: "CC0", c: "Telefon ichida ham egilish datchigi bor" },
    "2.10": { f: "Modern electric fan at a school.jpg", a: "Curpharar", lic: "CC BY-SA 4.0", c: "Ventilyator: motor parrakni aylantiradi" },
    "2.11": { f: "Bronze statue of two children playing tug-of-war with dog at Clotilde Merlo Park.jpg", a: "Tried100X", lic: "CC0", c: "Arqon tortish: kim kuchliroq tortsa, o'sha yutadi" },
    "2.12": { f: "Formel3 racing car amk.jpg", a: "AngMoKio", lic: "CC BY-SA 2.5", c: "Poyga mashinasi: tezlik uchun yaratilgan" },
    "2.13": { f: "Metamorphosis frog Meyers.png", a: "muallifi noma'lum", lic: "Public domain", c: "Qurbaqaning o'sishi: itbaliqdan katta qurbaqagacha" },
    "2.14": { f: "European honey bee extracts nectar.jpg", a: "John Severns", lic: "Public domain", c: "Asalari guldan nektar yig'moqda" },
    "2.15": { f: "Alum Creek Dam Spillway 2.jpg", a: "Sixflashphoto", lic: "CC BY-SA 4.0", c: "To'g'on darvozalari suvni boshqaradi" },
    "2.16": { f: "Сhildren's robotics 3.jpg", a: "Alena Nesterova", lic: "CC BY 4.0", c: "Bolalar yasagan robot musobaqa maydonida" },
    "2.17": { f: "Scratch 3.0 editor.png", a: "Scratch Foundation", lic: "CC BY-SA 2.0", c: "Scratch 3 muhiti: bloklar, skriptlar maydoni va sahna" },
    "2.18": { f: "Scratch 3.0 Screenshot, Gravity Script.png", a: "Blink456", lic: "CC BY-SA 4.0", c: "Scratch bloklari bir-biriga ulanib, skript hosil qiladi" },
    "2.20": { f: "RaspberryPi KeyBoardHub 04.jpg", a: "Elmepi", lic: "CC BY-SA 4.0", c: "Klaviatura: har tugma — alohida hodisa" },
    "2.21": { f: "Ferris wheel Nice Dec 2008 a.jpg", a: "Cayambe", lic: "CC BY-SA 3.0", c: "Charxpalak — to'xtovsiz takrorlanadigan harakat" },
    "2.22": { f: "Zoetrope NN.jpg", a: "Runner1616", lic: "CC BY-SA 3.0", c: "Zoetrop: aylanganda rasmlar jonlanadi — eng qadimgi animatsiya" },
    "2.23": { f: "Apples in basket 2018 G1.jpg", a: "George Chernilevsky", lic: "Public domain", c: "O'yinimizda shunday olmalarni teramiz" },
    "3.1": { f: "Lego WeDo 2.0 Milo part C.jpg", a: "Klaus-Dieter Keller", lic: "CC0", c: "WeDo 2.0 modeli: Smarthub, motor va datchik bitta robotda" },
    "3.2": { f: "Abandoned concrete factory mechanism.jpg", a: "Diacritica", lic: "CC BY 3.0", c: "Tishli g'ildiraklar: tishlar ilashib, aylanishni uzatadi" },
    "3.4": { f: "Jansen Theo Strandbeest Oper.jpg", a: "Axel Hindemith", lic: "Public domain", c: "«Strandbeest» — shamol kuchi bilan yuradigan mexanizm" },
    "3.6": { f: "Taipei 101 Tuned Mass Damper 2010.jpg", a: "Armand du Plessis", lic: "CC BY 3.0", c: "Osmono'par bino ichidagi ulkan shar tebranishni so'ndiradi" },
    "3.7": { f: "Air-sea-rescue-falmouth.jpg", a: "Tim Green", lic: "CC BY 2.0", c: "Qutqaruv vertolyoti arqon (lebyodka) bilan ishlamoqda" },
    "3.8": { f: "NEA recycling bins, Orchard Road.JPG", a: "Terence Ong", lic: "CC BY 2.5", c: "Chiqindi turiga qarab alohida qutilarga tashlanadi" },
    "3.9": { f: "Smoke detector (1).JPG", a: "Georg Pik", lic: "Public domain", c: "Tutun datchigi: xavfni sezadi va signal beradi" },
    "3.10": { f: "Crocodile Open Mouth Basking Ranganathittu Jan24 A7C 09067.jpg", a: "Timothy A. Gonsalves", lic: "CC BY-SA 4.0", c: "Timsoh — pistirmada kutadigan yirtqich" },
    "3.11": { f: "F2019-07-02 1982.jpg", a: "Terry Priest", lic: "CC BY-SA 4.0", c: "Yaltiroq qo'ng'iz yorug'lik bilan xabar beradi" },
    "3.12": { f: "Diagram of the perseverance rover-instruments.jpg", a: "NASA", lic: "Public domain", c: "«Perseverance» roveri va uning asboblari" },
    "3.13": { f: "Tower crane, close-up.jpg", a: "High Contrast", lic: "CC BY 3.0 DE", c: "Minora kran: strela, arqon va orqadagi qarshi yuk" },
    "3.15": { f: "Aquarium fish at Reply's.jpg", a: "FaysaLBinDaruL", lic: "CC BY-SA 4.0", c: "Akvarium — bugungi loyihamiz uchun ilhom" },
    "3.17": { f: "Hedge maze in Parque São Roque da Lameira 4.jpg", a: "Joseolgon", lic: "CC0", c: "Butalardan yasalgan labirint" },
    "3.18": { f: "Wheelchair rugby scoreboard (22228).jpg", a: "Lee Vilenski", lic: "CC BY-SA 4.0", c: "Tablo — o'yin hisobini saqlaydigan «o'zgaruvchi»" },
    "3.19": { f: "Spielwürfel.jpg", a: "Schlurcher", lic: "CC BY 4.0", c: "Zar — tasodifiy son manbai" },
    "3.22": { f: "Various Spirograph Designs.jpg", a: "muallifi ko'rsatilmagan", lic: "Public domain", c: "Takrorlash va burilishdan hosil bo'lgan naqshlar" }
  };
  Object.keys(R).forEach((k) => {
    const [g, n] = k.split(".").map(Number);
    const grade = window.QOLLANMA.grades[g];
    const l = grade && grade.lessons.find((x) => x.n === n);
    if (l) l.img = R[k];
  });
  // Mavzu kartochkalari uchun rasmlar. Kalit: "sinf.dars.kartochka" (kartochka 0 dan sanaladi).
  const T = {
    "2.5.3": ["Lego technic gears.jpg", "Oz1sej", "Public domain"],
    "2.7.0": ["NASA Mars Rover.jpg", "NASA/JPL/Cornell University", "Public domain"],
    "2.8.0": ["Bat flying at night.png", "manbada ko'rsatilgan", "CC BY 2.5"],
    "2.9.0": ["Spirit level bubble 20170625.jpg", "Santeri Viinamäki", "CC BY-SA 4.0"],
    "2.9.2": ["Erdfunkstelle Raisting 2.jpg", "Richard Bartz", "CC BY-SA 2.5"],
    "2.10.0": ["Ceiling fan with lamp.jpg", "Hans Olav Lien", "CC BY-SA 3.0"],
    "2.10.1": ["Bicycle crankset Shimano 105 R7000 (chainring 50-34, length 172.5mm, 11 speed).jpg", "Petar Milošević", "CC BY-SA 4.0"],
    "2.11.1": ["Curling Stones.jpg", "Michael McCullough", "CC BY 2.0"],
    "2.12.0": ["Cheetah chase.jpg", "Hein waschefort", "CC BY-SA 3.0"],
    "2.12.1": ["Athletics track start line numbers 1, 2, 3.jpg", "Santeri Viinamäki", "CC BY-SA 4.0"],
    "2.12.2": ["Penny farthings, Cyclingworld Europe 2024, Meerbusch (P1170888).jpg", "Matti Blume", "CC BY-SA 4.0"],
    "2.13.0": ["Australia green tree frog (Litoria caerulea) crop.jpg", "LiquidGhoul", "Public domain"],
    "2.13.1": ["Monarch butterfly after emerging from chrysalis (27850956870).jpg", "USFWSmidwest", "Public domain"],
    "2.14.0": ["Bee pollen sac, Meconopsis cambrica, Chapeltoun, North Ayrshire.jpg", "Rosser1954", "CC BY-SA 4.0"],
    "2.14.1": ["Apple-tree blossoms 2017 G3.jpg", "George Chernilevsky", "Public domain"],
    "2.15.0": ["Flooded building and tree trunk in the muddy water of the Mekong in Si Phan Don, Laos, September 2019.jpg", "Basile Morin", "CC BY-SA 4.0"],
    "2.15.1": ["Hoover Dam and Black Canyon seen from the Mike O'Callaghan–Pat Tillman Memorial Bridge, panorama, Arizona–Nevada.jpg", "Christian David", "CC BY-SA 4.0"],
    "2.16.0": ["Gebouw 'Irene' Hindeloopen. Nieuwe toestand na verbouwing in 1938, kaartnr 014126.jpg", "A. Baart sr.", "CC BY-SA 4.0"],
    "3.1.0": ["Legged Squad Support System robot prototype.jpg", "Tactical Technology Office", "Public domain"],
    "3.2.0": ["Quartz Watch Mechanism Closeup.jpg", "Glosome", "CC BY-SA 4.0"],
    "3.2.1": ["Bicycle cassette - 10-speed.jpg", "Cjp24", "CC BY-SA 4.0"],
    "3.3.0": ["Belt Wheel (15912185557).jpg", "darkday", "CC BY 2.0"],
    "3.4.0": ["Hexapod walking robot.jpg", "Mdenton", "Public domain"],
    "3.4.1": ["Chelyabinsk. The driving wheels of the Kommunar steam locomotive. 54 Zwilling Street.jpg", "Александр Байдуков", "CC BY-SA 4.0"],
    "3.4.2": ["Up and down.jpg", "Roberto Picco", "CC BY 2.0"],
    "3.5.0": ["Tectonic plates.png", "USGS", "Public domain"],
    "3.5.1": ["Kinemetrics seismograph.jpg", "muallifi ko'rsatilmagan", "CC BY-SA 3.0"],
    "3.6.1": ["Burj Khalifa (16260269606).jpg", "Laika ac", "CC BY-SA 2.0"],
    "3.6.2": ["The Great Sphinx, Pyramids of Gizeh-1839) by David Roberts, RA.jpg", "David Roberts", "Public domain"],
    "3.7.0": ["Zepper-BK 117-C2-(EC145)-SchweizerischeRettungsflugwacht.jpg", "Matthias Zepper", "CC BY-SA 3.0"],
    "3.7.2": ["Nintendo-Switch-Pro-Controller-FL.jpg", "Evan-Amos", "Public domain"],
    "3.8.0": ["Plastic bottles for recycling.jpg", "Radulf del Maresme", "CC BY-SA 4.0"],
    "3.8.1": ["Recycling combine - Sunset Pk, NYC 05.jpg", "CaptJayRuffins", "CC BY-SA 4.0"],
    "3.8.2": ["Recology Lodal Garbage Truck 14425 in San Francisco.jpg", "Dllu", "CC BY-SA 4.0"],
    "3.9.0": ["Traffic Light, Vienna.jpg", "John Samuel", "CC BY-SA 4.0"],
    "3.10.0": ["Lion (Panthera leo) male 6y.jpg", "Charles J. Sharp", "CC BY-SA 4.0"],
    "3.10.1": ["Erinaceus roumanicus 2020 G2.jpg", "George Chernilevsky", "Public domain"],
    "3.11.0": ["Indian Peacock courtship display at Pench national park (April, 2024) 08, edited.jpg", "Rohit Sharma", "CC BY 4.0"],
    "3.11.1": ["The Alcatraz Lighthouse and Warden's Mansion.jpg", "Stan Fong", "CC BY-SA 3.0"],
    "3.11.2": ["LED RGB 5mm.jpg", "Mister rf", "CC BY-SA 4.0"],
    "3.12.0": ["Curiosity rover self portrait at John Klein site (PIA16764, cropped).jpg", "NASA/JPL-Caltech/MSSS", "Public domain"],
    "3.12.1": ["NASA's Deep Space Antenna Upgrade to Affect Voyager.jpg", "NASA", "Public domain"],
    "3.13.0": ["Балхаш, МАЗ-кран на Жезказганской.jpg", "Nikolai Bulykin", "CC BY-SA 4.0"],
    "3.13.1": ["Akan MHNT.ETH.2010.25.009.jpg", "Roger Culos", "CC BY-SA 4.0"],
    "3.15.0": ["Amphiprion ocellaris (Clown anemonefish) by Nick Hobgood.jpg", "Nick Hobgood", "CC BY-SA 3.0"],
    "3.15.2": ["Plastic-compass.jpg", "Evan-Amos", "Public domain"],
    "3.16.0": ["Chessboard 2.jpg", "Tiia Monto", "CC BY-SA 4.0"],
    "3.17.2": ["Association football goal net.jpg", "muallifi ko'rsatilmagan", "Public domain"],
    "3.18.0": ["Box.agr.jpg", "ArnoldReinhold", "CC BY-SA 3.0"],
    "3.19.2": ["2023 Mysz komputerowa Logitech G903 Lightspeed.jpg", "Jacek Halicki", "CC BY-SA 4.0"],
    "3.20.2": ["Design for a Stage Curtain MET DP809810.jpg", "Eugène Ciceri", "CC0"],
    "3.21.0": ["Matryoshka from Hungary.jpg", "Wilfredor", "CC0"],
    "3.22.1": ["Western honey bee on a honeycomb.jpg", "Matthew T Rader", "CC BY-SA 4.0"],
    "3.22.2": ["Dülmen, Heilig-Kreuz-Kirche, Rosette -- 2022 -- 0669 (crop, kreativ).jpg", "Dietmar Rabich", "CC BY-SA 4.0"],
    "3.23.2": ["Fork in the path, St Clements Road, Keynsham - geograph.org.uk - 5706821.jpg", "Derek Harper", "CC BY-SA 2.0"]
  };
  Object.keys(T).forEach((k) => {
    const [g, n, i] = k.split(".").map(Number);
    const grade = window.QOLLANMA.grades[g];
    const l = grade && grade.lessons.find((x) => x.n === n);
    if (l && l.topic && l.topic[i]) l.topic[i].img = { f: T[k][0], a: T[k][1], lic: T[k][2] };
    else console.warn("Rasm uchun kartochka topilmadi:", k);
  });
})();
