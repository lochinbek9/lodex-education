import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { useTitle } from '../components/ui.jsx';
import { BRAND, LINKS } from '../config.js';
import { useI18n } from '../i18n/index.jsx';

export default function About() {
  const { t } = useI18n();
  useTitle(t('titles.about'));
  return (
    <div className="container-lx max-w-3xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">{t('about.title')}</h1>
      <div className="prose-lx mt-6">
        <p>{t('about.intro', { brand: `${BRAND.name} ${BRAND.suffix}` })}</p>
        <h2>{t('about.whyTitle')}</h2>
        <p>{t('about.why')}</p>
        <h2>{t('about.whatTitle')}</h2>
        <ul>{t('about.what').map(x => <li key={x}>{x}</li>)}</ul>
        <h2>{t('about.statusTitle')}</h2>
        <p>{t('about.status')}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/kurslar" className="btn-primary">{t('about.ctaCourses')}<Icon name="arrowRight" className="h-4 w-4" /></Link>
        <a href={LINKS.simulator} className="btn-secondary">{t('about.ctaSim')}</a>
      </div>
    </div>
  );
}
