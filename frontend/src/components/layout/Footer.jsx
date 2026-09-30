import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-950/90">
      <div className="container-shell grid gap-8 py-12 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-lg font-black text-white">F</div>
            <div className="text-xl font-black tracking-tight text-slate-900 dark:text-white">FixFlow</div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">The local service marketplace for everyday repairs, bookings and trusted professionals.</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Company</h3>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/how-it-works">How it works</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Services</h3>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li><Link to="/services">Browse services</Link></li>
            <li><Link to="/providers">Find providers</Link></li>
            <li><Link to="/provider/dashboard">Provider dashboard</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Legal</h3>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © 2026 FixFlow. Built for better local service experiences.
      </div>
    </footer>
  );
}

export default Footer;
