import { event } from "../data/event";

export default function Tentang() {
  return (
    <section
      id="tentang"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-xl shadow-neutral-100 sm:p-8">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
            Tentang Acara
          </div>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
            Silaturahmi hangat dalam suasana Halal Bihalal dan Temu Alumni DDI
          </h2>

          <div className="mt-5 space-y-4 text-base leading-8 text-neutral-600">
            <p>Assalamu Alaikum Wr. Wb.</p>

            <p>
              Seiring salam dan doa semoga segenap aktivitas keseharian kita
              selalu dalam lindungan Allah SWT, Aamiin.
            </p>

            <p>
              Sehubungan dengan akan dilaksanakannya kegiatan{" "}
              <span className="font-semibold text-neutral-800">
                {event.title}
              </span>{" "}
              yang diselenggarakan oleh{" "}
              <span className="font-semibold text-neutral-800">
                {event.org}
              </span>
              , maka kami selaku panitia pelaksana dalam hal ini mengundang dan
              mengharapkan dukungan, perhatian, serta kebersamaan seluruh tamu
              undangan dalam menyukseskan kegiatan tersebut.
            </p>

            <p>
              Kegiatan ini menjadi momentum untuk mempererat tali silaturahmi,
              meneguhkan ukhuwah, dan menguatkan amanah bersama santri serta
              alumni DDI demi Maros yang berkah.
            </p>
          </div>

          <div className="mt-6 rounded-[1.75rem] bg-emerald-50 p-5">
            <div className="text-sm font-bold text-emerald-800">Tema Acara</div>
            <p className="mt-2 text-sm leading-7 text-emerald-900 sm:text-base">
              “{event.theme}”
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-amber-100 bg-[linear-gradient(180deg,#fffef8,#ffffff)] p-6 shadow-lg shadow-amber-50">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
              Pembawa Hikmah
            </div>
            <p className="mt-3 text-lg font-semibold leading-8 text-neutral-900">
              {event.speaker}
            </p>
            <p className="mt-2 text-sm leading-7 text-neutral-600">
              {event.speakerDesc}
            </p>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-lg shadow-neutral-100">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-neutral-500">
              Informasi Pelaksanaan
            </div>

            <div className="mt-4 space-y-4 text-sm sm:text-base">
              <div>
                <div className="font-semibold text-neutral-800">Hari/Tanggal</div>
                <div className="mt-1 text-neutral-600">
                  {event.hijriDate} / {event.dateLabel}
                </div>
              </div>

              <div>
                <div className="font-semibold text-neutral-800">Waktu</div>
                <div className="mt-1 text-neutral-600">{event.time}</div>
              </div>

              <div>
                <div className="font-semibold text-neutral-800">Tempat</div>
                <div className="mt-1 text-neutral-600">{event.venue}</div>
              </div>

              <div>
                <div className="font-semibold text-neutral-800">Penyelenggara</div>
                <div className="mt-1 text-neutral-600">{event.org}</div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-100 bg-[linear-gradient(180deg,#f0fdf4,#ffffff)] p-6 shadow-lg shadow-emerald-50">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
              Penutup
            </div>
            <p className="mt-3 text-sm leading-7 text-neutral-700 sm:text-base">
              Kami sangat mengharapkan kehadiran dan partisipasi seluruh
              undangan. Semoga kegiatan ini menjadi jalan kebaikan, mempererat
              persaudaraan, dan menghadirkan keberkahan bagi santri, alumni,
              serta masyarakat Maros.
            </p>
            <p className="mt-4 text-sm font-medium text-neutral-700">
              Wassalamu Alaikum Wr. Wb.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}