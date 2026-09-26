import {
  Code2,
  Crown,
  ExternalLink,
  Loader2,
} from 'lucide-react';

import {
  getActivity,
  getAvatarUrl,
  getStatusColor,
  getStatusLabel,
  useLanyard,
} from '@/hooks/useLanyard';

import { team } from '@/data/content';

const roleIcon: Record<string, React.ReactNode> = {
  'Lead Developer': (
    <Code2 className="h-4 w-4" />
  ),

  Owner: (
    <Crown className="h-4 w-4" />
  ),
};

function TeamCard({
  member,
}: {
  member: (typeof team)[number];
}) {
  const {
    data,
    loading,
    error,
  } = useLanyard(member.id);

  const status =
    data?.discord_status ?? 'offline';

  const activity = getActivity(data);

  const displayName =
    data?.discord_user.global_name ||
    data?.discord_user.username ||
    member.name;

  const username =
    data?.discord_user.username
      ? `@${data.discord_user.username}`
      : `@${member.name.toLowerCase().replace(/\s+/g, '')}`;

  const avatar = data
    ? getAvatarUrl(data.discord_user)
    : member.avatar;

  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-[#151515] transition hover:-translate-y-1 hover:border-[#dfcabb]/40">
      <div className="relative h-32 overflow-hidden bg-[#242424]">
        {member.banner ? (
          <img
            src={member.banner}
            alt=""
            className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#302a26] via-[#1c1c1c] to-[#101010]" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />

        <div className="absolute bottom-0 left-5 translate-y-1/2">
          <div className="relative">
            {loading ? (
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#151515] bg-[#252525]">
                <Loader2 className="h-5 w-5 animate-spin text-white/40" />
              </div>
            ) : (
              <img
                src={avatar}
                alt={displayName}
                className="h-20 w-20 rounded-full border-4 border-[#151515] bg-[#222] object-cover"
              />
            )}

            <span
              className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-4 border-[#151515]"
              style={{
                backgroundColor:
                  getStatusColor(status),
              }}
              title={getStatusLabel(status)}
            />
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 pt-12">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold text-white">
              {displayName}
            </h3>

            <p className="mt-0.5 truncate text-xs text-white/40">
              {username}
            </p>
          </div>

          <a
            href={`https://discord.com/users/${member.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/10 p-2 text-white/40 transition hover:border-white/20 hover:text-white"
            aria-label={`Open ${displayName}'s Discord profile`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5">
          <span
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor:
                getStatusColor(status),
            }}
          />

          <span className="text-xs text-white/65">
            {getStatusLabel(status)}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-xs text-[#dfcabb]">
          {roleIcon[member.role]}
          {member.role}
        </div>

        <p className="mt-4 text-sm leading-6 text-[#a99b90]">
          {member.bio}
        </p>

        {activity && (
          <div className="mt-5 rounded-lg border border-white/10 bg-[#101010] p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8f837a]">
              {activity.label}
            </p>

            <p className="mt-1 truncate text-sm font-semibold text-white">
              {activity.value}
            </p>
          </div>
        )}

        {data?.listening_to_spotify &&
          data.spotify && (
            <div className="mt-3 flex items-center gap-3 rounded-lg border border-white/10 bg-[#101010] p-3">
              <img
                src={data.spotify.album_art_url}
                alt=""
                className="h-10 w-10 rounded-md object-cover"
              />

              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8f837a]">
                  Listening to Spotify
                </p>

                <p className="truncate text-sm font-semibold text-white">
                  {data.spotify.song}
                </p>

                <p className="truncate text-xs text-white/40">
                  {data.spotify.artist}
                </p>
              </div>
            </div>
          )}

        {error && (
          <p className="mt-4 text-xs text-white/30">
            Discord presence is currently unavailable.
          </p>
        )}
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-[1110px]">
        <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
          The people behind Fate.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#a99b90]">
          See who is behind the project and whether they are around on
          Discord right now.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
