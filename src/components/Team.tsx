import { useLanyard, getAvatarUrl, getBannerColor, type LanyardData } from '@/hooks/useLanyard';
import { team } from '@/data/content';
import { Code2, Crown, Loader2 } from 'lucide-react';

const roleIcon: Record<string, React.ReactNode> = { 'Lead Developer': <Code2 className="h-4 w-4" />, Owner: <Crown className="h-4 w-4" /> };

function TeamCard({ member }: { member: (typeof team)[number] }) {
  const { data, loading } = useLanyard(member.id);
  const status = data?.discord_status ?? 'offline';
  return <article className="rounded-lg border border-white/10 bg-[#151515] p-5"><div className="flex items-center gap-4"><div className="relative">{loading ? <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10"><Loader2 className="h-5 w-5 animate-spin text-white/40" /></div> : <img src={data ? getAvatarUrl(data.discord_user) : ''} alt={member.name} className="h-16 w-16 rounded-full border border-white/10 object-cover" />}<span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-4 border-[#151515]" style={{ backgroundColor: getBannerColor(status) }} /></div><div><h3 className="text-lg font-bold text-white">{member.name}</h3><p className="mt-1 flex items-center gap-1.5 text-xs text-[#dfcabb]">{roleIcon[member.role]}{member.role}</p></div></div><p className="mt-5 text-sm leading-6 text-[#a99b90]">{member.bio}</p><div className="mt-5 border-t border-white/10 pt-4 text-xs text-[#9c8c80]">{data?.discord_user.global_name ?? data?.discord_user.username ?? 'Checking Discord presence'} <span className="float-right capitalize" style={{ color: getBannerColor(status) }}>{status}</span></div></article>;
}

export default function Team() { return <section id="team" className="px-6 py-24"><div className="mx-auto max-w-[1110px]"><p className="mb-3 text-xs font-bold uppercase tracking-[0.13em] text-[#9c8c80]">The people keeping the project moving</p><h2 className="text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">A small team, a lot of code.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-[#a99b90]">Fate is maintained by people who actually use Discord servers. The goal is simple: make the bot useful, keep it understandable, and keep improving the bits that matter.</p><div className="mt-10 grid gap-3 md:grid-cols-3">{team.map((member) => <TeamCard key={member.id} member={member} />)}</div></div></section>; }

export function StatusRow({ label, value }: { label: string; value: string }) { return <div className="flex justify-between text-sm"><span className="text-white/40">{label}</span><span className="text-white/70">{value}</span></div>; }
export function PlatformRow({ data }: { data: LanyardData | null }) { return <StatusRow label="Presence" value={data ? 'Discord' : '—'} />; }
