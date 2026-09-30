import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="container-shell flex min-h-[70vh] items-center justify-center py-16">
      <div className="soft-card max-w-xl p-10 text-center">
        <div className="text-7xl font-black tracking-[-0.08em] text-brand-600">404</div>
        <h1 className="mt-4 text-4xl font-black text-slate-900 dark:text-white">Looks like this job doesn’t exist.</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">The page you tried to reach is missing or the service isn’t available right now.</p>
        <Link to="/" className="brand-button brand-button-primary mt-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
