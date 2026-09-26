import { Heart } from 'lucide-react';

const INVITE_URL =
  'https://discord.com/oauth2/authorize?client_id=1550175506308010016&permissions=8&integration_type=0&scope=bot+applications.commands';

export default function Footer() {
  return (
    <footer
      id="invite"
      className="border-t border-white/10 bg-[#111111] px-6 py-14"
    >
      <div className="mx-auto flex max-w-[1110px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/fate-avatar.png"
              alt="Fate"
              className="h-8 w-8 rounded-full border border-white/10 object-cover"
            />

            <span className="font-bold text-white">
              Fate
            </span>
          </div>

          <p className="mt-4 max-w-sm text-sm leading-6 text-[#a99b90]">
            A practical Discord bot for teams that want fewer tabs open,
            fewer repetitive jobs, and a server that feels looked after.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <a
            href={INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-[#e9ddd2]"
          >
            Add Fate to your server
          </a>

          <p className="flex items-center gap-1.5 text-xs text-[#7f746c]">
            Built and maintained by the Fate team

            <Heart className="h-3 w-3 fill-[#dfcabb] text-[#dfcabb]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
