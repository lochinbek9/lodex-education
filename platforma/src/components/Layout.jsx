import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BRAND, LINKS } from '../config.js';
import { useAuth } from '../context/AuthContext.jsx';
import { LANGS, useI18n } from '../i18n/index.jsx';
import Icon from './Icon.jsx';
import { Logo } from './ui.jsx';

const navClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? 'text-brand-700 bg-brand-50' : 'text-ink-soft hover:text-ink hover:bg-slate-100'}`;

function LangSwitch({ className = '' }) {
  const { lang, setLang, t } = useI18n();
  return (
    <div className={`flex items-center rounded-lg bg-slate-100 p-0.5 text-xs font-semibold ${className}`} role="group" aria-label={t('nav.language')}>
      {LANGS.map(l => (
        <button key={l.code} onClick={() => setLang(l.code)} title={l.label} aria-pressed={lang === l.code}
          className={`rounded-md px-2 py-1 transition ${lang === l.code ? 'bg-white text-ink shadow-sm' : 'text-ink-mute hover:text-ink'}`}>
          {l.short}
        </button>
      ))}
    </div>
  );
}

function UserMenu({ user, onLogout }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const close = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);
  const initials = user.name.split(/\s+/).map(s => s[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(o => !o)} className="flex items-center gap-2 rounded-xl py-1 pl-1 pr-3 hover:bg-slate-100" aria-expanded={open}>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">{initials}</span>
        <span className="hidden max-w-[140px] truncate text-sm font-medium sm:block">{user.name}</span>
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg">
          <div className="border-b border-slate-100 px-4 py-2.5">
            <div className="truncate text-sm font-semibold">{user.name}</div>
            <div className="truncate text-xs text-ink-mute">{user.email}</div>
          </div>
          <Link to="/kabinet" onClick={() => setOpen(false)} className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-50"><Icon name="user" className="h-4 w-4" />{t('nav.cabinet')}</Link>
          <button onClick={() => { setOpen(false); onLogout(); }} className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"><Icon name="logout" className="h-4 w-4" />{t('nav.logout')}</button>
        </div>
      )}
    </div>
  );
}

function Header() {
  const { user, logout } = useAuth();
  const { t } = useI18n();
  const nav = useNavigate();
  const [mobile, setMobile] = useState(false);
  const loc = useLocation();
  useEffect(() => setMobile(false), [loc.pathname]);
  const doLogout = async () => { await logout(); nav('/'); };

  const links = (
    <>
      <NavLink to="/kurslar" className={navClass}>{t('nav.courses')}</NavLink>
      <a href={LINKS.simulator} className={navClass({ isActive: false })}>{t('nav.simulator')}</a>
      <a href={LINKS.mentorGuide} className={navClass({ isActive: false })}>{t('nav.mentors')}</a>
      <NavLink to="/biz-haqimizda" className={navClass}>{t('nav.about')}</NavLink>
    </>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container-lx flex h-16 items-center gap-2 sm:gap-4">
        <Logo />
        <nav className="ml-6 hidden items-center gap-1 lg:flex">{links}</nav>
        <div className="ml-auto flex items-center gap-2">
          <LangSwitch className="hidden sm:flex" />
          {user ? (
            <UserMenu user={user} onLogout={doLogout} />
          ) : (
            <>
              <Link to="/kirish" className="btn-ghost hidden sm:inline-flex">{t('nav.login')}</Link>
              <Link to="/royxatdan-otish" className="btn-primary whitespace-nowrap px-3 sm:px-4">
                <span className="hidden sm:inline">{t('nav.signup')}</span><span className="sm:hidden">{t('nav.signupShort')}</span>
              </Link>
            </>
          )}
          <button className="btn-ghost px-2 lg:hidden" onClick={() => setMobile(m => !m)} aria-label={t('nav.menu')}>
            <Icon name={mobile ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      {mobile && (
        <nav className="container-lx flex flex-col gap-1 border-t border-slate-100 pb-4 pt-2 lg:hidden">
          {links}
          {!user && <NavLink to="/kirish" className={navClass}>{t('nav.login')}</NavLink>}
          <div className="flex items-center gap-3 px-3 pt-2 text-sm text-ink-mute">{t('nav.language')}: <LangSwitch /></div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-lx grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-ink-mute">{t('footer.about')}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">{t('footer.platform')}</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-mute">
            <li><Link to="/kurslar" className="hover:text-ink">{t('footer.courses')}</Link></li>
            <li><a href={LINKS.simulator} className="hover:text-ink">{t('footer.simulator')}</a></li>
            <li><a href={LINKS.mentorGuide} className="hover:text-ink">{t('footer.mentorGuide')}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">{t('footer.info')}</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-mute">
            <li><Link to="/biz-haqimizda" className="hover:text-ink">{t('nav.about')}</Link></li>
            <li><Link to="/kabinet" className="hover:text-ink">{t('footer.cabinet')}</Link></li>
            {BRAND.supportEmail && <li><a href={`mailto:${BRAND.supportEmail}`} className="hover:text-ink">{BRAND.supportEmail}</a></li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container-lx flex flex-col gap-2 py-5 text-xs text-ink-mute sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {BRAND.name} {BRAND.suffix}</span>
          <span>{t('footer.demo')}</span>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  );
}
