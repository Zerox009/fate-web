import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { features } from '@/data/content';

export default function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-[1110px]">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.13em] text-[#9c8c80]">The useful stuff</p>
          <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">A lot of moving parts. One place to find them.</h2>
          <p className="mt-5 text-lg leading-8 text-[#a99b90]">Fate is built more like a toolkit than a single-purpose bot. Some features are commands, some run quietly in the background, and they are designed to work together instead of fighting for space.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[feature.icon] ?? Icons.Sparkles;
            return <article key={feature.title} className="group rounded-lg border border-white/10 bg-[#151515] p-5 transition hover:-translate-y-1 hover:border-[#dfcabb]/50"><div className="mb-8 flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-[#dfcabb] transition group-hover:bg-[#dfcabb] group-hover:text-black"><Icon className="h-5 w-5" /></div><h3 className="text-lg font-bold text-white">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-[#a99b90]">{feature.description}</p></article>;
          })}
        </div>
      </div>
    </section>
  );
}
