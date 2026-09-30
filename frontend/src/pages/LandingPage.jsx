import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, CheckCircle2, MapPinned, MessageSquareText, ShieldCheck, Sparkles, Star, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { serviceCategories, providerHighlights } from '../data/categories';

const quickStats = [
  { label: 'Trusted pros', value: '4.8k+' },
  { label: 'Jobs completed', value: '96k' },
  { label: 'Average response', value: '12 min' },
  { label: 'City coverage', value: '18 cities' },
];

const steps = [
  { title: 'Share your issue', description: 'Describe the job, location and preferred time in a few taps.' },
  { title: 'Compare quotes', description: 'Review trusted professionals, ratings and clear pricing.' },
  { title: 'Track progress', description: 'Book, chat and keep an eye on work in real time.' },
];

const benefits = [
  'Verified local professionals',
  'Upfront pricing and quotes',
  'Live chat and status tracking',
  'Fast booking with clear timelines',
];

const testimonials = [
  { name: 'Ayesha M.', quote: 'I booked an AC technician in under 20 minutes. The experience felt premium and the communication was excellent.' },
  { name: 'Abdul R.', quote: 'Switching from random service ads to FixFlow made it easy to compare real pros and pick the right one.' },
];

function LandingPage() {
  return (
    <div className="pb-16">
      <section className="container-shell relative py-10 md:py-16">
        <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700 dark:border-brand-900 dark:bg-brand-950/50 dark:text-brand-200">
              <Sparkles size={14} />
              Trusted local service marketplace
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-[0.96] tracking-[-0.06em] text-slate-900 dark:text-white md:text-7xl">
              Get the right professional for the job.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-600 dark:text-slate-300">
              Find trusted local professionals, compare quotes, book services, and track every job from one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/services" className="brand-button brand-button-primary">
                Find a Service <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/providers" className="brand-button brand-button-secondary">
                Become a Provider
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <ShieldCheck className="text-brand-600" size={18} />
                Verified professionals
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <MapPinned className="text-brand-600" size={18} />
                Coverage in 18 cities
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative">
            <div className="soft-card overflow-hidden p-4 sm:p-6">
              <div className="rounded-[28px] bg-slate-900 p-5 text-white dark:bg-slate-800">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-300">Customer request</div>
                    <div className="mt-2 text-xl font-bold">AC not cooling</div>
                  </div>
                  <div className="rounded-full bg-brand-500/20 px-2 py-1 text-xs font-semibold text-brand-200">Urgent</div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-800 p-3">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Matching providers</div>
                    <div className="mt-2 flex gap-2">
                      {[1,2,3].map((item) => (
                        <div key={item} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sm font-bold">P{item}</div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-800 p-3">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Quote comparison</div>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span>Ali Cooling</span>
                      <span className="font-semibold text-brand-300">Rs. 3,200</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span>Green Air</span>
                      <span className="font-semibold text-brand-300">Rs. 3,700</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span>CoolFix</span>
                      <span className="font-semibold text-brand-300">Rs. 4,100</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-brand-500/15 p-3 text-sm text-brand-100">
                    <div className="font-semibold text-brand-100">Booking confirmed</div>
                    <div className="mt-1">Today • 10:00 AM • F-7, Islamabad</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-shell py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-4">
          {quickStats.map((item) => (
            <div key={item.label} className="soft-card p-5 text-center">
              <div className="text-3xl font-black text-slate-900 dark:text-white">{item.value}</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-12 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Popular services</div>
            <h2 className="section-title">Book what you need, when you need it</h2>
          </div>
          <Link to="/services" className="hidden text-sm font-semibold text-brand-600 md:inline-flex dark:text-brand-400">Browse all services</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-5">
          {serviceCategories.slice(0, 10).map((category) => (
            <Link key={category.slug} to={`/services/${category.slug}`} className="soft-card group p-5 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200">{category.icon}</div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">{category.title}</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{category.description}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-shell py-12 md:py-20">
        <div className="mb-8 text-center">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">How it works</div>
          <h2 className="section-title">Fast, clear and reliable from day one</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="soft-card p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white dark:bg-brand-500 dark:text-slate-950">0{index + 1}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-12 md:py-20">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="soft-card p-7">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Why customers choose FixFlow</div>
            <h2 className="section-title text-4xl">Built to remove the guesswork.</h2>
            <div className="mt-6 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 text-brand-600" size={18} />
                  <span className="text-slate-700 dark:text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-card p-7">
            <div className="mb-4 flex items-center gap-2 text-brand-600 dark:text-brand-400">
              <TrendingUp size={18} />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">Service request preview</span>
            </div>
            <div className="rounded-[28px] bg-slate-900 p-5 text-white dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-300">Request</div>
                  <div className="mt-2 text-xl font-bold">AC not cooling</div>
                </div>
                <div className="rounded-full bg-brand-500/15 px-2 py-1 text-xs font-semibold text-brand-200">Soon</div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-2xl bg-slate-800 p-3 text-sm">
                  <span>Available pros</span>
                  <span className="font-semibold text-brand-300">03 professionals</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-800 p-3 text-sm">
                  <span>Quote range</span>
                  <span className="font-semibold text-brand-300">Rs. 2,600 - Rs. 4,200</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-800 p-3 text-sm">
                  <span>Booking status</span>
                  <span className="font-semibold text-brand-300">Confirmed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-12 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Experts near you</div>
            <h2 className="section-title">Top professionals this week</h2>
          </div>
          <Link to="/providers" className="hidden text-sm font-semibold text-brand-600 md:inline-flex dark:text-brand-400">See all providers</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {providerHighlights.map((provider) => (
            <div key={provider.name} className="soft-card p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-lg font-black text-slate-700 dark:bg-slate-800 dark:text-slate-100">{provider.name.charAt(0)}</div>
                {provider.verified && <div className="inline-flex items-center gap-1 rounded-full bg-brand-100 px-2 py-1 text-[11px] font-semibold text-brand-700 dark:bg-brand-900/50 dark:text-brand-300"><BadgeCheck size={12} /> Verified</div>}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{provider.name}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{provider.profession}</p>
              <div className="mt-4 flex items-center gap-2 text-brand-600 dark:text-brand-300">
                <Star size={16} className="fill-brand-500 text-brand-500" />
                <span className="font-semibold">{provider.rating}</span>
                <span className="text-slate-500 dark:text-slate-400">(127 reviews)</span>
              </div>
              <div className="mt-5 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                <span>Starting from</span>
                <span className="font-bold text-slate-900 dark:text-white">{provider.price}</span>
              </div>
              <Link to={`/providers/${provider.name.toLowerCase().replace(/\s+/g, '-')}`} className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white dark:bg-brand-500 dark:text-slate-950">View Profile</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-12 md:py-20">
        <div className="mb-8 text-center">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Customer love</div>
          <h2 className="section-title">Trusted by busy homes and businesses</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.name} className="soft-card p-6">
              <div className="mb-4 flex items-center gap-1 text-brand-500">
                {[...Array(5)].map((_, index) => <Star key={index} size={16} className="fill-current" />)}
              </div>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">“{item.quote}”</p>
              <div className="mt-5 font-semibold text-slate-900 dark:text-white">{item.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-12 md:py-20">
        <div className="soft-card overflow-hidden p-8 md:p-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Ready to get started?</div>
              <h2 className="section-title text-4xl md:text-5xl">Book smarter. Fix faster.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/register" className="brand-button brand-button-primary">Get Started</Link>
              <Link to="/provider/dashboard" className="brand-button brand-button-secondary">List your services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
