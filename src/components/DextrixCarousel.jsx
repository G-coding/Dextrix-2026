import { useState } from "react";
import DextrixCard from "./DextrixCard";

const data = [
  {
    title: "Dextrix 2.0",
    image: "/images/dextrix 2.0.jpeg",
  },
  {
    title: "Dextrix 3.0",
    image: "/images/dextrix 3.0.jpeg",
  },
  {
    title: "Dextrix 4.0",
    image: "/images/dextrix 4.0.jpeg",
  },
];

export default function DextrixCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + data.length) % data.length);
  const next = () =>
    setIndex((index + 1) % data.length);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-[#081636] via-[#050b1e] to-[#040814] text-white">

      {/* Background stars */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:60px_60px]" />

      {/* Title */}
      <h1 className="relative z-10 text-5xl font-extrabold italic tracking-wider mb-12">
        Past Events
      </h1>

      {/* Carousel Stage */}
      <div className="relative w-[520px] h-[620px]">

        {data.map((item, i) => {
          let pos =
            "opacity-30 scale-[0.90] pointer-events-none blur-[1px]";

          if (i === index) {
            pos = "z-30 scale-[1.02] opacity-100 blur-0";
          } else if (
            i === (index - 1 + data.length) % data.length
          ) {
            pos =
              "-translate-x-56 opacity-30 scale-[0.90] z-20 blur-[1px]";
          } else if (
            i === (index + 1) % data.length
          ) {
            pos =
              "translate-x-56 opacity-30 scale-[0.90] z-20 blur-[1px]";
          }

          return (
            <div
              key={i}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${pos}`}
            >
              <DextrixCard title={item.title} image={item.image} />
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex gap-10 mt-12">
        <button
          onClick={prev}
          className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/30 transition flex items-center justify-center text-2xl"
        >
          ❮
        </button>
        <button
          onClick={next}
          className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/30 transition flex items-center justify-center text-2xl"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
