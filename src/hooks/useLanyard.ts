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
  timestamps?: {
    start?: number;
    end?: number;
  };
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
  active_on_discord_mobile?: boolean;
  active_on_discord_desktop?: boolean;
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

interface LanyardEvent {
  op: number;
  t?: string;
  d?: {
    heartbeat_interval?: number;
    [key: string]: unknown;
  };
}

export function useLanyard(userId: string) {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    let socket: WebSocket | null = null;
    let heartbeat: number | null = null;
    let reconnectTimer: number | null = null;

    const fetchInitial = async () => {
      try {
        const response = await fetch(
          `https://api.lanyard.rest/v1/users/${userId}`
        );

        if (!response.ok) {
          throw new Error('Unable to fetch Discord presence');
        }

        const result: LanyardResponse = await response.json();

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

    const connect = () => {
      if (!mounted) return;

      socket = new WebSocket('wss://api.lanyard.rest/socket');

      socket.onopen = () => {
        socket?.send(
          JSON.stringify({
            op: 2,
            d: {
              subscribe_to_id: userId,
            },
          })
        );
      };

      socket.onmessage = (event) => {
        try {
          const message: LanyardEvent = JSON.parse(event.data);

          if (message.op === 1) {
            const interval = message.d?.heartbeat_interval;

            if (interval) {
              heartbeat = window.setInterval(() => {
                socket?.send(
                  JSON.stringify({
                    op: 3,
                  })
                );
              }, interval);
            }

            return;
          }

          if (message.op === 0 && message.t === 'INIT_STATE') {
            const presence = message.d as unknown as LanyardData;

            if (presence?.discord_user && mounted) {
              setData(presence);
              setError(null);
              setLoading(false);
            }

            return;
          }

          if (message.op === 0 && message.t === 'PRESENCE_UPDATE') {
            const presence = message.d as unknown as LanyardData;

            if (presence?.discord_user && mounted) {
              setData(presence);
              setError(null);
              setLoading(false);
            }
          }
        } catch {
          if (mounted) {
            setError('Invalid presence response');
          }
        }
      };

      socket.onerror = () => {
        if (mounted) {
          setError('Discord presence connection failed');
        }
      };

      socket.onclose = () => {
        if (heartbeat) {
          window.clearInterval(heartbeat);
          heartbeat = null;
        }

        if (mounted) {
          reconnectTimer = window.setTimeout(connect, 5000);
        }
      };
    };

    fetchInitial();
    connect();

    return () => {
      mounted = false;

      if (heartbeat) {
        window.clearInterval(heartbeat);
      }

      if (reconnectTimer) {
        window.clearTimeout(reconnectTimer);
      }

      socket?.close();
    };
  }, [userId]);

  return {
    data,
    loading,
    error,
  };
}

export function getAvatarUrl(user: DiscordUser) {
  if (!user.avatar) {
    return 'https://cdn.discordapp.com/embed/avatars/0.png';
  }

  const extension = user.avatar.startsWith('a_') ? 'gif' : 'png';

  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${extension}?size=256`;
}

export function getStatusColor(
  status: LanyardData['discord_status']
) {
  switch (status) {
    case 'online':
      return '#23a559';

    case 'idle':
      return '#f0b232';

    case 'dnd':
      return '#f23f42';

    default:
      return '#80848e';
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

  switch (activity.type) {
    case 0:
      return {
        label: 'Playing',
        value: activity.name,
        details: activity.details,
        state: activity.state,
        assets: activity.assets,
      };

    case 1:
      return {
        label: 'Streaming',
        value: activity.name,
        details: activity.details,
        state: activity.state,
        assets: activity.assets,
      };

    case 2:
      return {
        label: 'Listening to',
        value: activity.name,
        details: activity.details,
        state: activity.state,
        assets: activity.assets,
      };

    case 3:
      return {
        label: 'Watching',
        value: activity.name,
        details: activity.details,
        state: activity.state,
        assets: activity.assets,
      };

    case 5:
      return {
        label: 'Competing in',
        value: activity.name,
        details: activity.details,
        state: activity.state,
        assets: activity.assets,
      };

    default:
      return {
        label: 'Active',
        value: activity.name,
        details: activity.details,
        state: activity.state,
        assets: activity.assets,
      };
  }
}
