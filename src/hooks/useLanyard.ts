import { useEffect, useState } from 'react';

export interface DiscordUser {
  id: string;
  username: string;
  global_name?: string | null;
  discriminator?: string;
  avatar?: string | null;
}

export interface Activity {
  name: string;
  type: number;
  state?: string | null;
  details?: string | null;
  application_id?: string;
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
}

export interface LanyardData {
  discord_user: DiscordUser;
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  active_on_discord_mobile?: boolean;
  active_on_discord_desktop?: boolean;
  activities: Activity[];
  listening_to_spotify?: boolean;
  spotify?: {
    track_id: string;
    timestamps: {
      start: number;
      end: number;
    };
    song: string;
    artist: string;
    album: string;
    album_art_url: string;
  } | null;
}

interface LanyardResponse {
  success: boolean;
  data: LanyardData;
}

export function useLanyard(userId: string) {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchPresence = async () => {
      try {
        const response = await fetch(
          `https://api.lanyard.rest/v1/users/${userId}`
        );

        if (!response.ok) {
          throw new Error('Unable to fetch Discord presence');
        }

        const result: LanyardResponse =
          await response.json();

        if (!result.success) {
          throw new Error('Lanyard returned an unsuccessful response');
        }

        if (mounted) {
          setData(result.data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(
            err instanceof Error
              ? err.message
              : 'Unable to fetch Discord presence'
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchPresence();

    const interval = window.setInterval(
      fetchPresence,
      30000
    );

    return () => {
      mounted = false;
      window.clearInterval(interval);
    };
  }, [userId]);

  return {
    data,
    loading,
    error,
  };
}

export function getAvatarUrl(
  user: DiscordUser
) {
  if (!user.avatar) {
    return `https://cdn.discordapp.com/embed/avatars/0.png`;
  }

  const extension = user.avatar.startsWith('a_')
    ? 'gif'
    : 'png';

  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${extension}?size=256`;
}

export function getStatusColor(
  status: LanyardData['discord_status']
) {
  switch (status) {
    case 'online':
      return '#57F287';

    case 'idle':
      return '#FEE75C';

    case 'dnd':
      return '#ED4245';

    default:
      return '#747F8D';
  }
}

export function getStatusLabel(
  status: LanyardData['discord_status']
) {
  switch (status) {
    case 'online':
      return 'Online';

    case 'idle':
      return 'Idle';

    case 'dnd':
      return 'Do Not Disturb';

    default:
      return 'Offline';
  }
}

export function getActivity(
  data: LanyardData | null
) {
  if (!data?.activities?.length) {
    return null;
  }

  const activity = data.activities.find(
    (item) => item.type !== 4
  );

  if (!activity) {
    return null;
  }

  switch (activity.type) {
    case 0:
      return {
        label: 'Playing',
        value: activity.name,
      };

    case 1:
      return {
        label: 'Streaming',
        value: activity.name,
      };

    case 2:
      return {
        label: 'Listening to',
        value: activity.name,
      };

    case 3:
      return {
        label: 'Watching',
        value: activity.name,
      };

    case 5:
      return {
        label: 'Competing in',
        value: activity.name,
      };

    default:
      return {
        label: 'Active',
        value: activity.name,
      };
  }
}
