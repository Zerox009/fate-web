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
  const { data, loading } = useLanyard(member.id);

  const user = data?.discord_user;

  const name =
    user?.global_name ||
    user?.username ||
    member.name;

  const username = user?.username
    ? `@${user.username}`
    : `@${member.name.toLowerCase().replace(/\s+/g, '')}`;

  const avatar = user
    ? getAvatarUrl(user)
    : member.avatar ||
      'https://cdn.discordapp.com/embed/avatars/0.png';

  const status = data?.discord_status || 'offline';
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

            <div className="h-[76px] w-[76px] rounded-full border-[4px] border-[#151515] bg-zinc-800 shadow-lg">
              <img
                src={avatar}
                alt={name}
                className="h-full w-full rounded-full object-cover"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src =
                    'https://cdn.discordapp.com/embed/avatars/0.png';
                }}
              />
            </div>

            <span
              className="absolute bottom-0 right-0 h-[19px] w-[19px] rounded-full border-[4px] border-[#151515]"
              style={{
                backgroundColor: getStatusColor(status),
              }}
              title={getStatusLabel(status)}
            />

          </div>

          <a
            href={`https://discord.com/users/${member.id}`}
            target="_blank"
            rel="noreferrer"
            className="mb-1 flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-zinc-400 transition hover:border-white/20 hover:text-white"
          >
            <ExternalLink size={15} />
          </a>

        </div>

        <div className="mt-4">

          <h3 className="text-base font-semibold text-white">
            {name}
          </h3>

          <p className="mt-0.5 text-xs text-zinc-500">
            {username}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">

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

        {loading && (
          <div className="mt-4 rounded-lg border border-white/10 bg-[#101010] p-3">
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
                  applicationId={activity.applicationId}
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
  let src = '';

  if (image.startsWith('mp:external/')) {
    src = `https://media.discordapp.net/${image.replace(
      'mp:external/',
      ''
    )}`;
  } else if (image.startsWith('spotify:')) {
    src = `https://i.scdn.co/image/${image.replace(
      'spotify:',
      ''
    )}`;
  } else if (applicationId) {
    src = `https://cdn.discordapp.com/app-assets/${applicationId}/${image}.png?size=128`;
  }

  if (!src) {
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-12 w-12 shrink-0 rounded-md object-cover"
      loading="lazy"
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
          See who is behind the project and whether they are around on Discord right now.
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
