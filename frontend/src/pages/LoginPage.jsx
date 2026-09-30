import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ id: 'u1', name: 'Demo Customer', email: 'customer@fixflow.com', role: 'customer' }, 'demo-token');
    navigate('/dashboard');
  };

  return (
    <div className="container-shell grid py-12 md:grid-cols-2 md:py-16">
      <div className="soft-card p-8 md:p-10">
        <div className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Sign in</div>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white">Welcome back</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</span>
            <input defaultValue="customer@fixflow.com" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Password</span>
            <input type="password" defaultValue="Customer123!" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
          </label>
          <button className="brand-button brand-button-primary w-full">Sign in</button>
        </form>
        <div className="mt-6 text-sm text-slate-600 dark:text-slate-300">
          New to FixFlow? <Link to="/register" className="font-semibold text-brand-600 dark:text-brand-400">Create an account</Link>
        </div>
      </div>

      <div className="hidden items-center justify-center md:flex">
        <div className="soft-card grid gap-4 p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-lg font-black text-white">F</div>
            <div>
              <div className="text-xl font-bold text-slate-900 dark:text-white">FixFlow</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Fast field service</div>
            </div>
          </div>
          <div className="rounded-[28px] bg-slate-900 p-5 text-white dark:bg-slate-800">
            <div className="text-xs uppercase tracking-[0.18em] text-slate-300">Today</div>
            <div className="mt-3 text-2xl font-black">3 providers available</div>
            <div className="mt-4 text-sm text-slate-300">From nearby locations with live availability.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
