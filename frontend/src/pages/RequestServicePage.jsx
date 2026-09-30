import { CalendarDays, Camera, MapPin, Send, TimerReset } from 'lucide-react';

function RequestServicePage() {
  return (
    <div className="container-shell py-12 md:py-16">
      <div className="mb-8 text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Request a service</div>
        <h1 className="section-title mt-3">Tell us what needs fixing</h1>
      </div>

      <div className="mx-auto max-w-4xl soft-card p-6 md:p-8">
        <form className="grid gap-5 md:grid-cols-2">
          <label className="block md:col-span-1">
            <span className="mb-2 block text-sm font-medium">Service category</span>
            <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
              <option>AC & HVAC</option>
              <option>Electrical</option>
              <option>Plumbing</option>
              <option>Computer Repair</option>
            </select>
          </label>
          <label className="block md:col-span-1">
            <span className="mb-2 block text-sm font-medium">Specific service</span>
            <input placeholder="AC not cooling" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900" />
          </label>
          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium">Problem description</span>
            <textarea rows="5" placeholder="Describe the issue, symptoms and any details that could help the professionals respond faster." className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900" />
          </label>
          <label className="block md:col-span-1">
            <span className="mb-2 block text-sm font-medium">Preferred date</span>
            <input type="date" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900" />
          </label>
          <label className="block md:col-span-1">
            <span className="mb-2 block text-sm font-medium">Preferred time</span>
            <input type="time" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900" />
          </label>
          <label className="block md:col-span-1">
            <span className="mb-2 block text-sm font-medium">Location</span>
            <input placeholder="F-7, Islamabad" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900" />
          </label>
          <label className="block md:col-span-1">
            <span className="mb-2 block text-sm font-medium">Budget range</span>
            <input placeholder="Rs. 2500 - 5000" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900" />
          </label>
          <label className="block md:col-span-1">
            <span className="mb-2 block text-sm font-medium">Urgency</span>
            <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
              <option>Normal</option>
              <option>Soon</option>
              <option>Urgent</option>
            </select>
          </label>
          <label className="block md:col-span-1">
            <span className="mb-2 block text-sm font-medium">Images</span>
            <div className="flex items-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-3 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <Camera size={16} />
              Upload reference photos
            </div>
          </label>
          <button className="brand-button brand-button-primary md:col-span-2">Submit service request</button>
        </form>
      </div>
    </div>
  );
}

export default RequestServicePage;
