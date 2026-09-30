import { Menu, Moon, Sparkles, Sun, UserRound } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/providers', label: 'Providers' },
  { to: '/request-service', label: 'Request' },
  { to: '/messages', label: 'Messages' },
  { to: '/dashboard', label: 'Dashboard' },
];

function Navbar() {
  const { theme, setTheme } = useTheme();
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/75">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-lg font-black text-white shadow-lg shadow-brand-500/30">
            F
          </div>
          <div>
            <div className="text-xl font-black tracking-tight text-slate-900 dark:text-white">FixFlow</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Local experts</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {user ? (
            <>
              <Link to="/provider/dashboard" className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 md:flex">
                <UserRound size={15} />
                {user.name || 'Profile'}
              </Link>
              <button onClick={logout} className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white dark:bg-brand-500 dark:text-slate-950 md:inline-flex">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white dark:bg-brand-500 dark:text-slate-950 md:inline-flex">
              Sign in
            </Link>
          )}

          <button
            aria-label="Open mobile navigation"
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white p-4 lg:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
                {item.label}
              </NavLink>
            ))}
            {!user && (
              <Link to="/login" onClick={() => setMobileOpen(false)} className="mt-2 rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white dark:bg-brand-500 dark:text-slate-950">
                Sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
