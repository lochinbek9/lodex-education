import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard.jsx';
import Icon from '../components/Icon.jsx';
import { useTitle } from '../components/ui.jsx';
import { LINKS } from '../config.js';
import { useAuth } from '../context/AuthContext.jsx';
import { COURSES } from '../data/courses.js';
import { getCourseProgress } from '../api/progress.js';

const FEATURES = [
  { icon: 'robot', title: '3D robot simulyatori', text: "Fizikali maydon, motorlar, rang va masofa sensorlari, giroskop. Hech narsa o'rnatish shart emas — hammasi brauzerda." },
  { icon: 'puzzle', title: 'Bloklardan Pythonga', text: "Avval bloklar bilan boshlaysiz, keyin xuddi shu dasturni Python kodida ko'rasiz va o'zingiz yozasiz." },
  { icon: 'checkCircle', title: 'Avtomatik tekshiruv', text: "Har bir amaliy topshiriq simulyatorda tekshiriladi: nazorat nuqtalari, vaqt limiti va natija darhol ko'rinadi." },
  { icon: 'bulb', title: "Tushunarli xatolar", text: "Port xatosi yoki Python sintaksis xatosi — xabar o'zbekcha va nima qilish kerakligini aytadi." },
  { icon: 'layers', title: 'Ketma-ket darslar', text: "Darslar oddiydan murakkabga: har modul nazariya, test va amaliyotdan iborat. Keyingi dars oldingisidan keyin ochiladi." },
  { icon: 'award', title: 'Sertifikat', text: "Kursni to'liq tugatganingizda raqamli sertifikat beriladi — uni chop etish yoki PDF sifatida saqlash mumkin." },
];

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-200/60 via-indigo-100/50 to-transparent blur-2xl" />
      <div className="card relative overflow-hidden">
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <span className="ml-3 text-xs font-medium text-ink-mute">Chiziq bo'ylab yurish</span>
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-2 space-y-2 border-r border-slate-100 p-4 text-[11px] font-semibold text-white">
            <div className="rounded-md bg-amber-500 px-2 py-1.5">▶ Dastur boshlanganda</div>
            <div className="rounded-md bg-emerald-600 px-2 py-1.5">Doimo takrorlash</div>
            <div className="ml-3 rounded-md bg-sky-600 px-2 py-1.5">Rul: (50 − yorug'lik) × 1,2</div>
            <div className="ml-3 rounded-md bg-sky-600 px-2 py-1.5">Quvvat: 35%</div>
            <pre className="mt-3 overflow-hidden rounded-md bg-slate-900 p-2 font-mono text-[10px] font-normal leading-4 text-slate-200">{`while True:
  xato = 50 - rang.reflection()
  robot.steer(xato*1.2, 35)`}</pre>
          </div>
          <div className="col-span-3 bg-[#e9edf2] p-4">
            <svg viewBox="0 0 200 140" className="h-full w-full">
              <rect x="6" y="6" width="188" height="128" rx="4" fill="#fff" stroke="#59636e" strokeWidth="3" />
              <rect x="40" y="30" width="120" height="80" rx="30" fill="none" stroke="#111" strokeWidth="3.5" />
              <rect x="80" y="64" width="9" height="9" fill="#d1242f" /><rect x="93" y="64" width="9" height="9" fill="#f2c200" />
              <rect x="106" y="64" width="9" height="9" fill="#2da44e" /><rect x="119" y="64" width="9" height="9" fill="#1f6feb" />
              <circle cx="160" cy="70" r="7" fill="none" stroke="#8250df" strokeWidth="1.5" />
              <g transform="translate(62 104)"><rect x="-9" y="-7" width="18" height="14" rx="3" fill="#f0f0f0" stroke="#2b3440" /><rect x="-4" y="-4" width="8" height="6" fill="#2b3440" /><circle cx="9" cy="0" r="2" fill="#cf222e" /></g>
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 px-4 py-2.5 text-xs">
          <span className="font-semibold text-emerald-700">✓ Topshiriq bajarildi: 30,5 s</span>
          <span className="text-ink-mute">Nuqtalar: 4/4</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  useTitle('');
  const { user } = useAuth();
  const main = COURSES[0];
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.brand.50),transparent_60%)]" />
        <div className="container-lx grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="badge bg-brand-50 text-brand-700"><Icon name="sparkle" className="h-3.5 w-3.5" />O'zbek tilida, brauzerda</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Robototexnikani <span className="text-brand-600">simulyatorda</span> o'rganing
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink-soft">
              Robot to'plami shart emas. 3D simulyatordagi robotni bloklar va Python bilan dasturlang, sensorlarni sinang va musobaqa topshiriqlarini bajaring.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={user ? `/kurslar/${main.slug}` : '/royxatdan-otish'} className="btn-primary btn-lg">
                {user ? "O'qishni davom ettirish" : 'Bepul boshlash'}<Icon name="arrowRight" className="h-4 w-4" />
              </Link>
              <a href={LINKS.simulator} className="btn-secondary btn-lg"><Icon name="play" className="h-4 w-4" />Simulyatorni sinab ko'rish</a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-mute">
              {["O'rnatish kerak emas", 'Kompyuter va planshetda', 'Natija avtomatik tekshiriladi'].map(t => (
                <li key={t} className="flex items-center gap-1.5"><Icon name="check" className="h-4 w-4 text-emerald-600" />{t}</li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="container-lx">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Qanday o'qiysiz</h2>
            <p className="mt-3 text-ink-mute">Har bir modul uch qadamdan iborat — tushunish, tekshirish va amalda qo'llash.</p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ['1', "Qisqa dars o'qing", "Har bir tushuncha misollar va jadvallar bilan, 5–10 daqiqada o'qiladigan darslarda tushuntiriladi."],
              ['2', "Bilimingizni tekshiring", "Test va interaktiv topshiriqlar asosiy g'oyani o'zlashtirganingizni ko'rsatadi."],
              ['3', 'Simulyatorda bajaring', "Robotni dasturlab, topshiriqni bajaring — natija avtomatik hisobga olinadi va keyingi dars ochiladi."],
            ].map(([n, t, d]) => (
              <li key={n} className="card p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">{n}</span>
                <h3 className="mt-4 font-semibold">{t}</h3>
                <p className="mt-1.5 text-sm leading-6 text-ink-mute">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16">
        <div className="container-lx">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Kurslar</h2>
              <p className="mt-3 text-ink-mute">Birinchi kurs ochiq va bepul. Keyingilari tayyorlanmoqda.</p>
            </div>
            <Link to="/kurslar" className="link flex items-center gap-1 text-sm">Barcha kurslar<Icon name="arrowRight" className="h-4 w-4" /></Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {COURSES.map(c => <CourseCard key={c.slug} course={c} progress={user && c.status === 'open' ? getCourseProgress(user.id, c) : null} />)}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-lx">
          <h2 className="text-3xl font-bold tracking-tight">Platforma imkoniyatlari</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(f => (
              <div key={f.title} className="rounded-2xl border border-slate-200 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><Icon name={f.icon} /></div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-ink-mute">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-lx">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-indigo-700 px-8 py-12 text-white sm:px-12">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
            <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">Mentor yoki o'qituvchimisiz?</h2>
                <p className="mt-2 max-w-xl text-brand-100">
                  Sinflar bo'yicha dars rejalari, mashg'ulot ssenariylari va o'yinlar jamlangan metodik qo'llanmadan foydalaning.
                </p>
              </div>
              <a href={LINKS.mentorGuide} className="btn btn-lg bg-white text-brand-700 hover:bg-brand-50">Qo'llanmani ochish<Icon name="external" className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
