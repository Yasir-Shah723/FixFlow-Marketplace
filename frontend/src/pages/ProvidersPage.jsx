import { Search, SlidersHorizontal, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const providers = [
  { id: 'p1', name: 'Ali Cooling Services', profession: 'AC & HVAC Specialist', rating: 4.8, reviews: 127, city: 'Islamabad', price: 'Rs. 2,000', response: '12 min', verified: true },
  { id: 'p2', name: 'Lahore Plumbing Co.', profession: 'Plumbing Expert', rating: 4.9, reviews: 210, city: 'Lahore', price: 'Rs. 1,800', response: '10 min', verified: true },
  { id: 'p3', name: 'Karachi Electric Works', profession: 'Electrical Technician', rating: 4.7, reviews: 94, city: 'Karachi', price: 'Rs. 1,500', response: '20 min', verified: true },
  { id: 'p4', name: 'Rawalpindi Computer Care', profession: 'Computer Repair', rating: 4.6, reviews: 82, city: 'Rawalpindi', price: 'Rs. 1,200', response: '25 min', verified: false },
];

function ProvidersPage() {
  return (
    <div className="container-shell py-12 md:py-16">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Provider discovery</div>
          <h1 className="section-title mt-3">Find trusted experts in your area</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="brand-button brand-button-secondary">Verified only</button>
          <button className="brand-button brand-button-secondary"><SlidersHorizontal size={16} className="mr-2" /> Filters</button>
        </div>
      </div>

      <div className="soft-card mb-8 p-4">
        <div className="grid gap-3 md:grid-cols-[1.3fr_0.8fr_0.8fr_0.6fr]">
          <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-900">
            <Search size={16} className="text-slate-500" />
            <input placeholder="Search by service or provider" className="w-full border-0 bg-transparent text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100" />
          </label>
          <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-900">
            <option>Category</option>
            <option>Electrical</option>
            <option>Plumbing</option>
            <option>AC & HVAC</option>
          </select>
          <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-900">
            <option>Location</option>
            <option>Islamabad</option>
            <option>Lahore</option>
            <option>Karachi</option>
          </select>
          <button className="brand-button brand-button-primary">Search</button>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {providers.map((provider) => (
          <div key={provider.id} className="soft-card overflow-hidden p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-lg font-black text-slate-700 dark:bg-slate-800 dark:text-slate-100">{provider.name.charAt(0)}</div>
              {provider.verified && <span className="rounded-full bg-brand-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">Verified</span>}
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{provider.name}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">{provider.profession}</p>
              <div className="flex items-center gap-2 text-brand-600 dark:text-brand-300">
                <Star size={16} className="fill-current" />
                <span className="font-bold">{provider.rating}</span>
                <span className="text-slate-500 dark:text-slate-400">({provider.reviews} reviews)</span>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">{provider.city} • {provider.response} response</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Starting from <span className="font-bold text-slate-900 dark:text-white">{provider.price}</span></div>
            </div>

            <div className="mt-5 flex gap-3">
              <Link to={`/providers/${provider.id}`} className="flex-1 rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white dark:bg-brand-500 dark:text-slate-950">View Profile</Link>
              <button className="rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200">Message</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProvidersPage;
