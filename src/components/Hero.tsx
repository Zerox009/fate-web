import { Bot, ChevronRight, Circle, Command, ShieldCheck, Ticket } from 'lucide-react';
import { botStats } from '@/data/content';

const avatarUrl = '/images/fate-avatar.png';

export default function Hero() {
  return (
    <section id="home" className="px-4 pb-20 pt-24 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-[1110px] border-l-4 border-white bg-[#151515] px-6 py-10 shadow-[0_0_0_1px_rgba(255,255,255,0.12)] sm:px-10 sm:py-12 lg:px-9 lg:py-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.13em] text-[#9c8c80]">A Discord bot built for the parts of a server people actually notice</p>
            <h1 className="max-w-[650px] text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.25rem]">Let the server stay fun. <span className="text-[#dfcabb]">Fate</span> can handle the boring parts.</h1>
            <p className="mt-6 max-w-[590px] text-lg leading-8 text-[#c4b5a9]">Security, moderation, music, tickets, giveaways, voice tools, utilities, and a stack of small features that save staff from doing the same job twice.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#invite" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-[#e9ddd2]"><Bot className="h-4 w-4" />Bring Fate in</a>
              <a href="#commands" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">Browse every command<ChevronRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-8 grid max-w-[590px] grid-cols-2 gap-2 sm:grid-cols-4">
              {botStats.map((stat) => <div key={stat.label} className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-3"><p className="text-lg font-bold text-white">{stat.value}</p><p className="mt-1 text-[10px] uppercase tracking-wide text-[#8f837a]">{stat.label}</p></div>)}
            </div>
          </div>
          <FateCard />
        </div>
      </div>
    </section>
  );
}

function FateCard() {
  return <div className="mx-auto w-full max-w-[390px] rounded-xl border border-white/10 bg-[#202020] p-5 shadow-2xl lg:mx-0">
    <div className="flex items-center gap-4 border-b border-white/10 pb-5">
      <div className="relative"><img src={avatarUrl} alt="Fate bot avatar" className="h-16 w-16 rounded-full border-2 border-white/10 object-cover" /><span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-4 border-[#202020] bg-[#8fcf8b]" /></div>
      <div><h2 className="text-xl font-bold text-white">Fate</h2><p className="flex items-center gap-1.5 text-sm text-[#c4b5a9]"><Circle className="h-2.5 w-2.5 fill-[#8fcf8b] text-[#8fcf8b]" />Built to keep the server moving</p></div>
    </div>
    <div className="grid grid-cols-3 gap-2 py-4">
      <MiniFeature icon={<ShieldCheck />} title="Security" subtitle="10 defenses" />
      <MiniFeature icon={<Command />} title="Commands" subtitle={`${botStats[0].value} in source`} />
      <MiniFeature icon={<Ticket />} title="Support" subtitle="tickets & logs" />
    </div>
    <p className="border-t border-white/10 pt-4 text-sm leading-6 text-[#c4b5a9]">It is the kind of bot you should be able to set up once, explain to your staff once, and then mostly stop thinking about.</p>
  </div>;
}

function MiniFeature({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return <div className="rounded-md bg-[#151515] px-2 py-3 text-center"><div className="mx-auto mb-1 hidden h-4 w-4 text-[#dfcabb] sm:block">{icon}</div><p className="text-sm font-bold text-white">{title}</p><p className="text-[11px] text-[#9c8c80]">{subtitle}</p></div>;
}
