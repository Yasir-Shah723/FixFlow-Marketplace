import { Search, SendHorizonal } from 'lucide-react';

const conversations = [
  { id: 'c1', user: 'Ali Cooling Services', last: 'I can inspect your unit today.', time: '2m ago', unread: 2 },
  { id: 'c2', user: 'Lahore Plumbing Co.', last: 'Thanks, I am en route now.', time: '1h ago', unread: 0 },
];

function MessagesPage() {
  return (
    <div className="container-shell py-12 md:py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Messages</div>
          <h1 className="section-title mt-3">Your conversations</h1>
        </div>
      </div>

      <div className="soft-card overflow-hidden">
        <div className="grid min-h-[560px] lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="border-b border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/70 lg:border-b-0 lg:border-r">
            <div className="mb-4 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950">
              <Search size={16} className="text-slate-500" />
              <input className="w-full border-0 bg-transparent outline-none" placeholder="Search conversations" />
            </div>
            <div className="space-y-3">
              {conversations.map((chat) => (
                <button key={chat.id} className="flex w-full items-center justify-between rounded-2xl bg-white p-3 text-left shadow-sm dark:bg-slate-950">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{chat.user}</div>
                    <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{chat.last}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 dark:text-slate-400">{chat.time}</div>
                    {chat.unread > 0 && <div className="mt-1 ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-[10px] font-bold text-white">{chat.unread}</div>}
                  </div>
                </button>
              ))}
            </div>
          </aside>

          <section className="flex flex-col bg-white dark:bg-slate-950">
            <div className="border-b border-slate-200 p-4 dark:border-slate-800">
              <div className="text-lg font-bold text-slate-900 dark:text-white">Ali Cooling Services</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Online now</div>
            </div>
            <div className="flex-1 space-y-4 p-4">
              <div className="max-w-[80%] rounded-2xl bg-slate-100 p-3 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">Hi, can you help with my AC?</div>
              <div className="ml-auto max-w-[80%] rounded-2xl bg-brand-500 p-3 text-sm text-white">Yes, I can inspect it today.</div>
              <div className="max-w-[80%] rounded-2xl bg-slate-100 p-3 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">Great, please share the unit model and issue details.</div>
            </div>
            <div className="border-t border-slate-200 p-4 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <input placeholder="Type a message" className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-900" />
                <button className="brand-button brand-button-primary"><SendHorizonal size={16} className="mr-2" /> Send</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
