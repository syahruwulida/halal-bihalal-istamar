import { event } from "../data/event";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="border-t border-neutral-200 bg-[linear-gradient(180deg,#ecfdf5,#ffffff)]"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-xl sm:p-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
              Kontak Panitia
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
              Butuh informasi lebih lanjut?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-neutral-600">
              Hubungi panitia untuk pertanyaan seputar registrasi, lokasi, dan
              pelaksanaan acara.
            </p>
          </div>

          <div className="mt-6 lg:mt-0">
            <a
              href={event.waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-neutral-950 px-6 py-4 text-base font-semibold text-white"
            >
              Hubungi Panitia: {event.contact}
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-neutral-500">
          Website undangan Halal Bihalal Keluarga Besar DDI • 
        </div>
      </div>
    </footer>
  );
}