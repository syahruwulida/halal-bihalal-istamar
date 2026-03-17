import { event } from "../data/event";

export default function Lokasi() {
  return (
    <section
      id="lokasi"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
        <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-xl sm:p-8">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
            Lokasi Acara
          </div>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
            Langsung arahkan ke lokasi lewat Google Maps
          </h2>

          <div className="mt-6 space-y-4 text-neutral-700">
            <div>
              <div className="text-sm font-bold text-neutral-500">Tempat</div>
              <div className="mt-1 text-lg font-semibold text-neutral-900">
                {event.venue}
              </div>
            </div>

            <div>
              <div className="text-sm font-bold text-neutral-500">Alamat</div>
              <div className="mt-1 text-base leading-7">{event.address}</div>
            </div>

            <div>
              <div className="text-sm font-bold text-neutral-500">Jadwal</div>
              <div className="mt-1 text-base leading-7">
                {event.hijriDate} / {event.dateLabel} • {event.time}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={event.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white"
            >
              Arahkan ke Lokasi
            </a>

            <a
              href={event.waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-700"
            >
              Tanya Panitia
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-2xl">
          <div className="border-b border-neutral-100 px-5 py-4">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-neutral-500">
              Maps Preview
            </div>
          </div>

          <div className="aspect-[4/5] w-full sm:aspect-[16/10]">
            <iframe
              title="Lokasi Ruang Pola Lantai 3 Kantor Bupati Maros"
              src={event.mapEmbed}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}