import { useState } from 'react';
import { ChevronDown, ChevronUp, Layers3 } from 'lucide-react';
import { modules } from '@/data/content';

export default function Modules() {
  const [open, setOpen] = useState<string | null>('Security');

  return (
    <section id="modules" className="border-y border-white/10 bg-[#111111] px-6 py-24">
      <div className="mx-auto max-w-[1110px]">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.13em] text-[#9c8c80]">What actually lives inside Fate</p>
          <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">The whole bot, not just the headline features.</h2>
          <p className="mt-5 text-lg leading-8 text-[#a99b90]">
            The command list is only part of it. Fate also has background systems for security, logging, welcome flows, leveling, voice, music, tickets, and the little jobs that normally end up scattered across several bots.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {modules.map((module) => {
            const isOpen = open === module.title;
            return (
              <article key={module.title} className={`rounded-lg border bg-[#151515] transition ${isOpen ? 'border-[#dfcabb]/40' : 'border-white/10'}`}>
                <button type="button" onClick={() => setOpen(isOpen ? null : module.title)} className="flex w-full items-center justify-between gap-5 p-5 text-left">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#9c8c80]">{module.eyebrow}</p>
                    <h3 className="mt-1 text-xl font-bold text-white">{module.title}</h3>
                  </div>
                  {isOpen ? <ChevronUp className="h-5 w-5 shrink-0 text-[#dfcabb]" /> : <ChevronDown className="h-5 w-5 shrink-0 text-white/40" />}
                </button>
                {isOpen && (
                  <div className="border-t border-white/10 px-5 pb-5 pt-4">
                    <p className="text-sm leading-6 text-[#a99b90]">{module.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {module.items.map((item) => (
                        <span key={item} className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-white/70">
                          <Layers3 className="h-3.5 w-3.5 text-[#dfcabb]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
