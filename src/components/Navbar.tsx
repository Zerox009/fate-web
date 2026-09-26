import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const INVITE_URL =
  'https://discord.com/oauth2/authorize?client_id=1550175506308010016&permissions=8&integration_type=0&scope=bot+applications.commands';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Modules', href: '#modules' },
  { label: 'Commands', href: '#commands' },
  { label: 'Team', href: '#team' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#101010]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1110px] items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="flex items-center gap-3 text-white"
        >
          <img
            src="/images/fate-avatar.png"
            alt="Fate bot avatar"
            className="h-8 w-8 rounded-full border border-white/20 object-cover"
          />

          <span className="font-semibold tracking-tight">
            Fate
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/55 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-md bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-[#e9ddd2] md:block"
        >
          Add Fate
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#101010] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/70"
              >
                {link.label}
              </a>
            ))}

            <a
              href={INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-md bg-white px-4 py-2 text-center text-sm font-bold text-black"
            >
              Add Fate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
