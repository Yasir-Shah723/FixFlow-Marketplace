import { BriefcaseBusiness, Clock3, DollarSign, Star, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Today\'s jobs', value: '08', icon: BriefcaseBusiness },
  { label: 'Pending requests', value: '04', icon: Clock3 },
  { label: 'Monthly earnings', value: 'Rs. 128K', icon: DollarSign },
  { label: 'Rating', value: '4.8', icon: Star },
];

function ProviderDashboardPage() {
  return (
    <div className="container-shell py-12 md:py-16">
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Provider dashboard</div>
        <h1 className="section-title mt-3">Operations overview</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="soft-card p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-500 dark:text-slate-400">{item.label}</div>
                <Icon className="text-brand-600" size={18} />
              </div>
              <div className="mt-4 text-3xl font-black text-slate-900 dark:text-white">{item.value}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="soft-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Upcoming jobs</h2>
            <TrendingUp className="text-brand-600" size={18} />
          </div>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-800"><strong>AC repair</strong> • Today • 10:00 AM • F-7</div>
            <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-800"><strong>Electrical check</strong> • Tomorrow • 02:00 PM • G-6</div>
            <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-800"><strong>Water heater fix</strong> • Thu • 12:30 PM • E-11</div>
          </div>
        </div>

        <div className="soft-card p-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Performance snapshot</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center justify-between"><span>Response rate</span><span className="font-bold text-slate-900 dark:text-white">96%</span></div>
            <div className="flex items-center justify-between"><span>On-time jobs</span><span className="font-bold text-slate-900 dark:text-white">92%</span></div>
            <div className="flex items-center justify-between"><span>Repeat customers</span><span className="font-bold text-slate-900 dark:text-white">74%</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderDashboardPage;
