import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { useTitle } from '../components/ui.jsx';

export default function NotFound() {
  useTitle('Sahifa topilmadi');
  return (
    <div className="container-lx flex flex-col items-center py-24 text-center">
      <div className="text-7xl font-extrabold text-brand-100">404</div>
      <h1 className="mt-4 text-2xl font-bold">Sahifa topilmadi</h1>
      <p className="mt-2 max-w-md text-ink-mute">Siz qidirgan sahifa mavjud emas yoki ko'chirilgan. Bosh sahifadan davom eting.</p>
      <Link to="/" className="btn-primary mt-6"><Icon name="arrowLeft" className="h-4 w-4" />Bosh sahifa</Link>
    </div>
  );
}
