import { useEffect, useState } from 'react';

export interface DiscordUser {
  id: string;
  username: string;
  global_name?: string | null;
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
  activities: Activity[];
}

interface ResponseData {
  success: boolean;
  data: LanyardData;
}

export function useLanyard(userId: string) {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const response = await fetch(
          `https://api.lanyard.rest/v1/users/${userId}`,
          {
            cache: 'no-store',
          }
        );

        if (!response.ok) {
          throw new Error('Lanyard request failed');
        }

        const result: ResponseData = await response.json();

        if (active && result.success && result.data) {
          setData(result.data);
        }
      } catch {
        if (active) {
          setData(null);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    load();

    const interval = window.setInterval(load, 15000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, [userId]);

  return {
    data,
    loading,
    error: !data && !loading,
  };
}

export function getAvatarUrl(user: DiscordUser) {
  if (!user.avatar) {
    return 'https://cdn.discordapp.com/embed/avatars/0.png';
  }

  const extension = user.avatar.startsWith('a_')
    ? 'gif'
    : 'png';

  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${extension}?size=256`;
}

export function getStatusColor(
  status: LanyardData['discord_status']
) {
  if (status === 'online') return '#23a559';
  if (status === 'idle') return '#f0b232';
  if (status === 'dnd') return '#f23f42';

  return '#80848e';
}

export function getStatusLabel(
  status: LanyardData['discord_status']
) {
  if (status === 'online') return 'Online';
  if (status === 'idle') return 'Idle';
  if (status === 'dnd') return 'Do Not Disturb';

  return 'Offline';
}

export function getActivity(data: LanyardData | null) {
  if (!data?.activities?.length) {
    return null;
  }

  const activity = data.activities.find(
    (item) => item.type !== 4
  );

  if (!activity) {
    return null;
  }

  const labels: Record<number, string> = {
    0: 'Playing',
    1: 'Streaming',
    2: 'Listening to',
    3: 'Watching',
    5: 'Competing in',
  };

  return {
    label: labels[activity.type] || 'Active',
    value: activity.name,
    details: activity.details,
    state: activity.state,
    assets: activity.assets,
    applicationId: activity.application_id,
  };
}
