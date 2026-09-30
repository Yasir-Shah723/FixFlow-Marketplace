import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const favorites = [
  { id: 'p1', name: 'Ali Cooling Services', profession: 'AC & HVAC Specialist', rating: 4.8, city: 'Islamabad' },
  { id: 'p3', name: 'Lahore Plumbing Co.', profession: 'Plumbing Expert', rating: 4.9, city: 'Lahore' },
];

function FavoritesPage() {
  return (
    <div className="container-shell py-12 md:py-16">
      <div className="mb-8 text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Saved providers</div>
        <h1 className="section-title mt-3">Your trusted shortlist</h1>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {favorites.map((provider) => (
          <div key={provider.id} className="soft-card p-5">
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-lg font-black text-slate-700 dark:bg-slate-800 dark:text-slate-100">{provider.name.charAt(0)}</div>
              <Heart className="fill-brand-500 text-brand-500" size={18} />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">{provider.name}</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{provider.profession}</p>
            <div className="mt-4 flex items-center gap-2 text-brand-600 dark:text-brand-300">
              <Star size={16} className="fill-current" />
              <span className="font-bold">{provider.rating}</span>
              <span className="text-slate-500 dark:text-slate-400">{provider.city}</span>
            </div>
            <Link to={`/providers/${provider.id}`} className="mt-5 inline-flex rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white dark:bg-brand-500 dark:text-slate-950">View Profile</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
