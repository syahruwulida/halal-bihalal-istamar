import { agenda } from "../data/event";

export default function Agenda() {
  return (
    <section id="agenda" className="bg-emerald-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-4xl font-black text-emerald-800 sm:text-5xl">
          Rangkaian Acara
        </h2>

        <div className="mt-10 grid gap-6">
          {agenda.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-md"
            >
              <h3 className="text-lg font-bold text-emerald-700 sm:text-xl">
                {index + 1}. {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-neutral-600 sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}