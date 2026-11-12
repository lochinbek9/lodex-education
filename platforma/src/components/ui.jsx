import { useEffect } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { BRAND } from '../config.js';
import { useAuth } from '../context/AuthContext.jsx';
import Icon from './Icon.jsx';

export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${BRAND.name} ${BRAND.suffix}` : `${BRAND.name} ${BRAND.suffix} — ${BRAND.tagline}`;
  }, [title]);
}

export function Logo({ className = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-2 font-extrabold tracking-tight text-ink ${className}`}>
      <img src="/favicon.svg" alt="" className="h-8 w-8" />
      <span className="whitespace-nowrap text-lg">{BRAND.name}<span className="font-semibold text-brand-600"> {BRAND.suffix}</span></span>
    </Link>
  );
}

export function ProgressBar({ percent, className = '' }) {
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-slate-100 ${className}`} role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-brand-600 transition-all duration-500" style={{ width: `${percent}%` }} />
    </div>
  );
}

export function RequireAuth({ children }) {
  const { user } = useAuth();
  const loc = useLocation();
  if (!user) return <Navigate to={`/kirish?next=${encodeURIComponent(loc.pathname)}`} replace />;
  return children;
}

export function CourseIcon({ course, size = 'h-12 w-12' }) {
  return (
    <div className={`flex ${size} shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${course.color} text-white shadow-sm`}>
      <Icon name={course.icon} className="h-1/2 w-1/2" />
    </div>
  );
}

export function Spinner({ className = 'h-5 w-5' }) {
  return <span className={`inline-block animate-spin rounded-full border-2 border-current border-t-transparent ${className}`} aria-label="Yuklanmoqda" />;
}

export function EmptyState({ icon = 'sparkle', title, children, action }) {
  return (
    <div className="card flex flex-col items-center px-6 py-12 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600"><Icon name={icon} /></div>
      <h3 className="text-lg font-semibold">{title}</h3>
      {children && <p className="mt-1 max-w-md text-sm text-ink-mute">{children}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
