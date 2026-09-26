import {
  ExternalLink,
  Crown,
  Code2,
} from 'lucide-react';

import {
  useLanyard,
  getAvatarUrl,
  getStatusColor,
  getStatusLabel,
  getActivity,
} from '../hooks/useLanyard';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  banner?: string;
}

interface TeamProps {
  members: TeamMember[];
}

function TeamCard({ member }: { member: TeamMember }) {
  const {
    data,
    loading,
    error,
  } = useLanyard(member.id);

  const discordUser = data?.discord_user;

  const displayName =
    discordUser?.global_name ||
    discordUser?.username ||
    member.name;

  const username = discordUser?.username
    ? `@${discordUser.username}`
    : `@${member.name.toLowerCase().replace(/\s+/g, '')}`;

  const avatar =
    discordUser
      ? getAvatarUrl(discordUser)
      : member.avatar;

  const status =
    data?.discord_status || 'offline';

  const activity = getActivity(data);

  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#151515] transition-all duration-300 hover:border-white/20">
      <div className="relative h-24 overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
        {member.banner && (
          <img
            src={member.banner}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#151515]" />
      </div>

      <div className="relative px-4 pb-5">
        <div className="-mt-10 flex items-end justify-between">
          <div className="relative">
            <div className="h-[76px] w-[76px] overflow-hidden rounded-full border-[4px] border-[#151515] bg-zinc-800 shadow-lg">
              {avatar ? (
                <img
                  src={avatar}
                  alt={displayName}
                  className="block h-full w-full object-cover"
                  onError={(event) => {
                    const image =
                      event.currentTarget;

                    if (
                      image.src !==
                      'https://cdn.discordapp.com/embed/avatars/0.png'
                    ) {
                      image.src =
                        'https://cdn.discordapp.com/embed/avatars/0.png';
                    }
                  }}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xl font-semibold text-white">
                  {displayName.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            <span
              className="absolute bottom-1 right-1 h-[18px] w-[18px] rounded-full border-[4px] border-[#151515]"
              style={{
                backgroundColor:
                  getStatusColor(status),
              }}
              title={getStatusLabel(status)}
            />
          </div>

          <a
            href={`https://discord.com/users/${member.id}`}
            target="_blank"
            rel="noreferrer"
            className="mb-1 flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-zinc-400 transition hover:border-white/20 hover:text-white"
            aria-label={`Open ${displayName}'s Discord profile`}
          >
            <ExternalLink size={15} />
          </a>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-white">
              {displayName}
            </h3>
          </div>

          <p className="mt-0.5 text-xs text-zinc-500">
            {username}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-[#1b1b1b] px-2.5 py-1 text-xs text-zinc-300">
              {member.role.toLowerCase().includes('owner') ? (
                <Crown size={12} />
              ) : (
                <Code2 size={12} />
              )}

              {member.role}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-[#1b1b1b] px-2.5 py-1 text-xs text-zinc-300">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor:
                    getStatusColor(status),
                }}
              />

              {getStatusLabel(status)}
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-zinc-400">
          {member.bio}
        </p>

        {loading && !data && (
          <div className="mt-4 rounded-lg border border-white/10 bg-[#101010] px-3 py-3">
            <div className="h-2 w-20 animate-pulse rounded bg-zinc-800" />
            <div className="mt-2 h-3 w-32 animate-pulse rounded bg-zinc-800" />
          </div>
        )}

        {activity && (
          <div className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-[#101010]">
            <div className="flex gap-3 p-3">
              {activity.assets?.large_image && (
                <ActivityImage
                  image={activity.assets.large_image}
                  applicationId={
                    data?.activities.find(
                      (item) =>
                        item.name === activity.value
                    )?.application_id
                  }
                  alt={activity.value}
                />
              )}

              <div className="min-w-0 flex-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                  {activity.label}
                </p>

                <p className="mt-0.5 truncate text-sm font-semibold text-white">
                  {activity.value}
                </p>

                {activity.details && (
                  <p className="mt-0.5 truncate text-xs text-zinc-400">
                    {activity.details}
                  </p>
                )}

                {activity.state && (
                  <p className="truncate text-xs text-zinc-500">
                    {activity.state}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {!loading && error && (
          <p className="mt-3 text-xs text-zinc-600">
            Discord presence unavailable
          </p>
        )}
      </div>
    </article>
  );
}

function ActivityImage({
  image,
  applicationId,
  alt,
}: {
  image: string;
  applicationId?: string;
  alt: string;
}) {
  let src = image;

  if (image.startsWith('mp:external/')) {
    src = `https://media.discordapp.net/${image.replace(
      'mp:external/',
      ''
    )}`;
  } else if (
    image.startsWith('spotify:')
  ) {
    src = `https://i.scdn.co/image/${image.replace(
      'spotify:',
      ''
    )}`;
  } else if (applicationId) {
    src = `https://cdn.discordapp.com/app-assets/${applicationId}/${image}.png?size=128`;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-12 w-12 shrink-0 rounded-md object-cover"
      onError={(event) => {
        event.currentTarget.style.display = 'none';
      }}
    />
  );
}

export default function Team({
  members,
}: TeamProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-sm text-zinc-400">
          See who is behind the project and whether
          they are around on Discord right now.
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
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
