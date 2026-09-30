import { ArrowUpRight, Users, Wrench, ShieldCheck } from 'lucide-react';

const stats = [
  { label: 'Total users', value: '8,420' },
  { label: 'Providers', value: '1,240' },
  { label: 'Verified providers', value: '972' },
  { label: 'Bookings', value: '2,880' },
];

function AdminPage() {
  return (
    <div className="container-shell py-12 md:py-16">
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Admin dashboard</div>
        <h1 className="section-title mt-3">Marketplace control center</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((card) => (
          <div key={card.label} className="soft-card p-5">
            <div className="text-sm text-slate-500 dark:text-slate-400">{card.label}</div>
            <div className="mt-4 text-3xl font-black text-slate-900 dark:text-white">{card.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="soft-card p-6">
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-300"><Users size={18} /> <span className="text-xs uppercase tracking-[0.18em]">Users</span></div>
          <div className="mt-4 text-xl font-bold text-slate-900 dark:text-white">Latest accounts</div>
          <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-800">Customer • Islamabad</div>
            <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-800">Provider • Lahore</div>
          </div>
        </div>

        <div className="soft-card p-6">
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-300"><Wrench size={18} /> <span className="text-xs uppercase tracking-[0.18em]">Services</span></div>
          <div className="mt-4 text-xl font-bold text-slate-900 dark:text-white">Category health</div>
          <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-800">AC & HVAC • 182 active listings</div>
            <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-800">Electrical • 160 active listings</div>
          </div>
        </div>

        <div className="soft-card p-6">
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-300"><ShieldCheck size={18} /> <span className="text-xs uppercase tracking-[0.18em]">Verification</span></div>
          <div className="mt-4 text-xl font-bold text-slate-900 dark:text-white">Pending approvals</div>
          <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-800">3 provider verification requests</div>
            <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-800">2 complaints need review</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
