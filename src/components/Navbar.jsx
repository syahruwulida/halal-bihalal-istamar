import { useState } from "react";
import { event } from "../data/event";
import logo from "../assets/LogoBase64.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    ["Beranda", "#beranda"],
    ["Tentang", "#tentang"],
    ["Agenda", "#agenda"],
    ["Lokasi", "#lokasi"],
    ["Kontak", "#kontak"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#beranda" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
            <img
              src={logo}
              alt="Logo ISTAMAR"
              className="h-8 w-8 rounded-xl object-contain"
            />
          </div>

          <div>
            <div className="text-sm font-black tracking-[0.2em] text-emerald-700">
              ISTAMAR
            </div>
            <div className="text-xs text-neutral-500">Halal Bihalal</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {menus.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold text-neutral-700 transition hover:text-emerald-700"
            >
              {label}
            </a>
          ))}

          <a
            href={event.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white"
          >
            Buka Lokasi
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex rounded-2xl border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 md:hidden"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-100 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {menus.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"
              >
                {label}
              </a>
            ))}

            <a
              href={event.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-emerald-700 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Buka Lokasi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}