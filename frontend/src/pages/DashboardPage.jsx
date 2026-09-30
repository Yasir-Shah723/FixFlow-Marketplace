import { Bell, BriefcaseBusiness, Heart, MessageSquareText, Star, TrendingUp } from 'lucide-react';

const cards = [
  { title: 'Active service request', value: 'AC not cooling', hint: '2 matching professionals' },
  { title: 'Upcoming booking', value: 'Tomorrow • 10:00 AM', hint: 'Ali Cooling Services' },
  { title: 'Saved providers', value: '07', hint: 'Near your location' },
  { title: 'Recent activity', value: 'Quote received', hint: 'New update' },
];

function DashboardPage() {
  return (
    <div className="container-shell py-12 md:py-16">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Customer dashboard</div>
          <h1 className="section-title mt-3">Your service hub</h1>
        </div>
        <button className="brand-button brand-button-secondary"><Bell size={16} className="mr-2" /> Notifications</button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div key={card.title} className="soft-card p-5">
            <div className="text-sm text-slate-500 dark:text-slate-400">{card.title}</div>
            <div className="mt-4 text-2xl font-black text-slate-900 dark:text-white">{card.value}</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{card.hint}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="soft-card p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Recent activity</h2>
            <TrendingUp className="text-brand-600" size={18} />
          </div>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-3 dark:bg-slate-800"><span>Quote received from Ali Cooling Services</span><span className="font-semibold text-brand-600 dark:text-brand-300">New</span></div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-3 dark:bg-slate-800"><span>Service request updated to Matching</span><span>Today</span></div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-3 dark:bg-slate-800"><span>Saved provider list refreshed</span><span>Earlier</span></div>
          </div>
        </div>

        <div className="soft-card p-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Recommended services</h2>
          <div className="mt-6 space-y-3">
            {['AC repair', 'Plumber', 'Electrical wiring', 'Home cleaning'].map((service) => (
              <div key={service} className="flex items-center justify-between rounded-2xl border border-slate-200 px-3 py-3 text-sm dark:border-slate-700">
                <span className="text-slate-700 dark:text-slate-200">{service}</span>
                <span className="text-brand-600 dark:text-brand-300">Popular</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
