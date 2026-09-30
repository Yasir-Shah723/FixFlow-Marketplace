import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="container-shell py-12 md:py-16">
      <div className="mx-auto max-w-3xl soft-card p-8 md:p-10">
        <div className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Create account</div>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white">Join FixFlow</h1>
        <form className="mt-8 grid gap-5 md:grid-cols-2">
          <label className="block md:col-span-1">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Full name</span>
            <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
          </label>
          <label className="block md:col-span-1">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</span>
            <input type="email" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
          </label>
          <label className="block md:col-span-1">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Password</span>
            <input type="password" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
          </label>
          <label className="block md:col-span-1">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Role</span>
            <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
              <option>Customer</option>
              <option>Provider</option>
            </select>
          </label>
          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Location</span>
            <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
          </label>
          <button className="brand-button brand-button-primary md:col-span-2">Create account</button>
        </form>
        <div className="mt-6 text-sm text-slate-600 dark:text-slate-300">
          Already have an account? <Link to="/login" className="font-semibold text-brand-600 dark:text-brand-400">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
