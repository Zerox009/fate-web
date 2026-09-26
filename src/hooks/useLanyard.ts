import { useEffect, useState, useCallback } from 'react';

export type LanyardActivity = {
  id: string;
  name: string;
  type: number;
  url?: string;
  created_at?: string;
  timestamps?: { start?: number; end?: number };
  application_id?: string;
  details?: string;
  state?: string;
  emoji?: { name: string; id?: string; animated?: boolean };
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
};

export type LanyardData = {
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    bot: boolean;
    global_name?: string;
    display_name?: string;
  };
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  activities: LanyardActivity[];
  listening_to_spotify: boolean;
  spotify?: {
    album_art_url: string;
    album: string;
    artist: string;
    song: string;
  };
  active_on_discord_web?: boolean;
  active_on_discord_desktop?: boolean;
  active_on_discord_mobile?: boolean;
};

export function useLanyard(userId: string) {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
      if (!res.ok) throw new Error('Failed to fetch');
      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setError(null);
      } else {
        setError('API returned error');
      }
    } catch {
      setError('Failed to load presence');
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, [fetchData]);

  return { data, loading, error };
}

export function getAvatarUrl(user: LanyardData['discord_user']): string {
  if (user.avatar) {
    const ext = user.avatar.startsWith('a_') ? 'gif' : 'png';
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=256`;
  }
  return `https://cdn.discordapp.com/embed/avatars/0.png`;
}

export function getBannerColor(status: string): string {
  switch (status) {
    case 'online':
      return '#43b581';
    case 'idle':
      return '#faa61a';
    case 'dnd':
      return '#f04747';
    default:
      return '#747f8d';
  }
}
