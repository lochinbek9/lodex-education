import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { useTitle } from '../components/ui.jsx';
import { BRAND, LINKS } from '../config.js';

export default function About() {
  useTitle('Biz haqimizda');
  return (
    <div className="container-lx max-w-3xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">Biz haqimizda</h1>
      <div className="prose-lx mt-6">
        <p>
          <strong>{BRAND.name} {BRAND.suffix}</strong> — robototexnika va dasturlashni o'zbek tilida o'rgatish uchun onlayn platforma.
          Bizning maqsadimiz — robot to'plami bo'lmagan maktab va oilalarda ham bolalar muhandislik fikrlashini rivojlantira olishi.
        </p>
        <h2>Nima uchun simulyator?</h2>
        <p>
          Haqiqiy robot to'plamlari qimmat va har bir o'quvchiga yetmaydi. Brauzerdagi 3D simulyator esa har qanday kompyuter yoki planshetda ishlaydi:
          o'quvchi robotni dasturlaydi, sensorlarni sinaydi va natijani darhol ko'radi. Simulyatorda o'rganilgan tushunchalar — motorlar, sensorlar,
          proporsional boshqaruv — haqiqiy robotlarga to'g'ridan-to'g'ri o'tadi.
        </p>
        <h2>Platformada nimalar bor</h2>
        <ul>
          <li>Ketma-ket ochiladigan kurslar: matnli darslar, testlar, interaktiv va simulyator topshiriqlari</li>
          <li>Bloklar va Python bilan dasturlanadigan 3D robot simulyatori</li>
          <li>Mentorlar uchun sinflar bo'yicha metodik qo'llanma</li>
        </ul>
        <h2>Loyiha holati</h2>
        <p>
          Hozirgi versiya — demo: hisoblar va natijalar foydalanuvchi brauzerida saqlanadi. Keyingi bosqichlarda server qismi, o'qituvchi va maktab paneli,
          to'lovlar va sertifikatni onlayn tekshirish qo'shiladi.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/kurslar" className="btn-primary">Kurslarni ko'rish<Icon name="arrowRight" className="h-4 w-4" /></Link>
        <a href={LINKS.simulator} className="btn-secondary">Simulyator</a>
      </div>
    </div>
  );
}
