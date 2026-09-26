import { useMemo, useState } from 'react';
import { Search, Terminal } from 'lucide-react';
import { commands } from '@/data/content';

const categories = ['All', ...Array.from(new Set(commands.map((command) => command.category)))];

export default function Commands() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return commands.filter((command) => {
      const categoryMatch = active === 'All' || command.category === active;
      if (!categoryMatch) return false;
      if (!term) return true;
      return [command.name, command.description, command.usage, command.category, ...command.aliases]
        .join(' ')
        .toLowerCase()
        .includes(term);
    });
  }, [active, query]);

  return (
    <section id="commands" className="border-y border-white/10 bg-[#111111] px-6 py-24">
      <div className="mx-auto max-w-[1110px]">
        <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.13em] text-[#9c8c80]">The command shelf</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">Every command that ships with Fate.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#a99b90]">
            This list is built from the bot source, so the categories and command names are not a made-up showcase. Search it, filter it, and open anything you want to inspect.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <label className="relative block flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search commands, aliases, or what they do..." className="w-full rounded-md border border-white/10 bg-[#181818] py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#dfcabb]/50" />
          </label>
          <div className="flex items-center rounded-md border border-white/10 bg-[#181818] px-4 py-3 text-xs text-white/50">
            {filtered.length} of {commands.length} commands
          </div>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button key={category} type="button" onClick={() => setActive(category)} className={`whitespace-nowrap rounded-md border px-3 py-2 text-xs font-bold transition ${active === category ? 'border-white bg-white text-black' : 'border-white/10 text-white/55 hover:border-white/30 hover:text-white'}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {filtered.map((command) => (
            <article key={`${command.source}-${command.name}`} className="rounded-lg border border-white/10 bg-[#181818] p-4 transition hover:border-[#dfcabb]/40">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="break-all text-sm font-bold text-white">{command.name}</code>
                    {command.ownerOnly && <span className="rounded border border-[#dfcabb]/30 px-2 py-0.5 text-[10px] uppercase tracking-wide text-[#dfcabb]">owner</span>}
                  </div>
                  <p className="mt-1 text-sm leading-6 text-[#a99b90]">{command.description}</p>
                </div>
                <span className="shrink-0 rounded border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-[#9c8c80]">{command.category}</span>
              </div>

              <div className="mt-4 grid gap-2 border-t border-white/10 pt-3 text-xs text-white/45 sm:grid-cols-2">
                <p><span className="text-white/25">Usage:</span> <code className="text-white/65">{command.usage}</code></p>
                <p><span className="text-white/25">Cooldown:</span> <span className="text-white/65">{command.cooldown}s</span></p>
                {command.aliases.length > 0 && <p className="sm:col-span-2"><span className="text-white/25">Aliases:</span> <span className="text-white/65">{command.aliases.join(', ')}</span></p>}
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-5 rounded-lg border border-dashed border-white/10 bg-[#151515] px-6 py-12 text-center">
            <p className="font-semibold text-white">Nothing matched that search.</p>
            <p className="mt-2 text-sm text-white/45">Try a shorter command name or switch back to All.</p>
          </div>
        )}

        <div className="mt-8 flex items-center gap-2 text-xs text-[#7f746c]">
          <Terminal className="h-4 w-4" />
          Command details are taken from the current Fate source tree.
        </div>
      </div>
    </section>
  );
}
