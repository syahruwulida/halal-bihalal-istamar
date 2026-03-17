import useCountdown from "../hooks/useCountdown";
import { event } from "../data/event";
import logo from "../assets/LogoBase64.jpeg";

function CountCard({ label, value }) {
  return (
    <div className="rounded-3xl border border-emerald-100 bg-white/90 p-4 text-center shadow-lg shadow-emerald-100/40">
      <div className="text-2xl font-black text-emerald-700 sm:text-3xl">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const countdown = useCountdown(event.countdownTarget);

  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f9fcf9_0%,#f3fbf6_45%,#fff8e9_100%)]"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-20">
        
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <span className="mb-4 inline-flex w-fit rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-emerald-700">
            Undangan Resmi
          </span>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            {event.title}
          </h1>

          <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-neutral-800 sm:text-xl">
            {event.org}
          </p>

          <p className="mt-2 max-w-2xl text-base leading-7 text-neutral-600">
            {event.subtitle}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/80 bg-white/90 p-5 shadow-xl">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
                Tanggal
              </div>
              <div className="mt-2 text-sm font-semibold text-neutral-800">
                {event.dateLabel}
              </div>
              <div className="mt-1 text-sm text-neutral-500">
                {event.hijriDate}
              </div>
            </div>

            <div className="rounded-3xl border border-white/80 bg-white/90 p-5 shadow-xl">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
                Waktu
              </div>
              <div className="mt-2 text-sm font-semibold text-neutral-800">
                {event.time}
              </div>
            </div>

            <div className="rounded-3xl border border-white/80 bg-white/90 p-5 shadow-xl">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
                Tempat
              </div>
              <div className="mt-2 text-sm font-semibold text-neutral-800">
                {event.venue}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lokasi"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white"
            >
              Lihat Lokasi
            </a>

            <a
              href={event.waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700"
            >
              Hubungi Panitia
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <CountCard label="Hari" value={countdown.days} />
            <CountCard label="Jam" value={countdown.hours} />
            <CountCard label="Menit" value={countdown.minutes} />
            <CountCard label="Detik" value={countdown.seconds} />
          </div>
        </div>

        <div className="order-1 relative lg:order-2">
          <div className="relative rounded-[2rem] border border-white/80 bg-white/85 p-4 shadow-2xl">
            <div className="rounded-[1.7rem] border border-amber-200 bg-[linear-gradient(180deg,#fffef8,#ffffff)] p-6 shadow-inner sm:p-8">
              <div className="mx-auto flex w-full max-w-[260px] items-center justify-center rounded-[2rem] bg-white p-4 shadow-xl">
                <img
                  src={logo}
                  alt="Logo ISTAMAR"
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="mt-6 text-center">
                <div className="text-sm font-bold uppercase tracking-[0.32em] text-emerald-700">
                  {event.title}
                </div>
                <div className="mt-3 text-3xl font-black leading-tight text-neutral-900 sm:text-4xl">
                  Keluarga Besar DDI
                </div>
                <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
                  {event.theme}
                </p>
              </div>

              <div className="mt-6 rounded-3xl bg-emerald-50 p-5 text-center">
                <div className="text-sm font-bold text-emerald-800">
                  {event.dateLabel}
                </div>
                <div className="mt-1 text-sm text-emerald-700">
                  {event.time}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}