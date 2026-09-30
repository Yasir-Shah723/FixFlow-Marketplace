import { Link } from 'react-router-dom';
import { serviceCategories } from '../data/categories';

function ServicesPage() {
  return (
    <div className="container-shell py-12 md:py-16">
      <div className="mb-8 text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Service categories</div>
        <h1 className="section-title mt-3">Choose the right fix for your home or business</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {serviceCategories.map((category) => (
          <Link key={category.slug} to={`/services/${category.slug}`} className="soft-card group p-6 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-2xl text-brand-700 dark:bg-brand-900/40 dark:text-brand-200">{category.icon}</div>
              {category.featured && <span className="rounded-full bg-brand-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">Featured</span>}
            </div>
            <h2 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">{category.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{category.description}</p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400">
              Explore services <span aria-hidden>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
