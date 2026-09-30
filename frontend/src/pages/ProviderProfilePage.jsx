import { BadgeCheck, CircleDashed, MapPin, MessageSquareText, ShieldCheck, Star, Wrench } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const provider = {
  name: 'Ali Cooling Services',
  profession: 'AC & HVAC Specialist',
  city: 'Islamabad',
  verified: true,
  experience: '8 years',
  jobs: 127,
  rating: 4.8,
  reviews: 127,
  responseTime: '12 min',
  services: ['AC Installation', 'Gas Refills', 'Ventilation Checks', 'Maintenance'],
  pricing: ['AC repair from Rs. 2,000', 'Maintenance plans from Rs. 4,500'],
  areas: ['F-6', 'F-7', 'G-6', 'G-7', 'Blue Area'],
  availability: 'Available today',
  about: 'We specialize in residential and commercial cooling systems, delivering careful diagnostics and fair pricing for homes, offices and retail spaces.',
};

function ProviderProfilePage() {
  const { id } = useParams();

  return (
    <div className="container-shell py-12 md:py-16">
      <div className="soft-card overflow-hidden p-4 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-slate-100 text-2xl font-black text-slate-700 dark:bg-slate-800 dark:text-slate-100">A</div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white">{provider.name}</h1>
                {provider.verified && <BadgeCheck className="text-brand-600" size={20} />}
              </div>
              <div className="mt-1 text-slate-600 dark:text-slate-300">{provider.profession}</div>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-1"><Star size={14} className="fill-brand-500 text-brand-500" /> {provider.rating}</div>
                <div>{provider.reviews} reviews</div>
                <div>{provider.jobs} completed jobs</div>
                <div>{provider.experience} experience</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/request-service" className="brand-button brand-button-primary">Request Service</Link>
            <button className="brand-button brand-button-secondary"><MessageSquareText size={16} className="mr-2" /> Send Message</button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="soft-card p-6">
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">About</div>
            <p className="leading-7 text-slate-600 dark:text-slate-300">{provider.about}</p>
          </div>

          <div className="soft-card p-6">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Services</div>
            <div className="flex flex-wrap gap-2">
              {provider.services.map((service) => (
                <span key={service} className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">{service}</span>
              ))}
            </div>
          </div>

          <div className="soft-card p-6">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Service areas</div>
            <div className="flex flex-wrap gap-2">
              {provider.areas.map((area) => (
                <span key={area} className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-200">{area}</span>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="soft-card p-6">
            <div className="flex items-center gap-2 text-brand-600 dark:text-brand-300">
              <ShieldCheck size={18} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Verification</span>
            </div>
            <div className="mt-4 text-lg font-bold text-slate-900 dark:text-white">Verified professional</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between"><span>Response time</span><strong className="text-slate-900 dark:text-white">{provider.responseTime}</strong></div>
              <div className="flex items-center justify-between"><span>Availability</span><strong className="text-slate-900 dark:text-white">{provider.availability}</strong></div>
              <div className="flex items-center justify-between"><span>Service city</span><strong className="text-slate-900 dark:text-white">{provider.city}</strong></div>
            </div>
          </div>

          <div className="soft-card p-6">
            <div className="mb-3 flex items-center gap-2 text-brand-600 dark:text-brand-300">
              <Wrench size={18} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Pricing</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {provider.pricing.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ProviderProfilePage;
