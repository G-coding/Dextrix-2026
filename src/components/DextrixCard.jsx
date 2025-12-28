export default function DextrixCard({ title, image }) {
  return (
    <div
      className="relative w-[420px] h-[560px]"
      style={{ transform: "translateZ(0)" }}
    >

      {/* Outer neon frame WITH top notch */}
      <div className="absolute inset-0
        bg-gradient-to-b from-[#4f5dff] via-[#2a1fa8] to-[#160447]
        shadow-[0_-14px_55px_rgba(130,150,255,0.95),0_32px_70px_rgba(80,100,255,0.9)]
        clip-top-notch
      " />

      {/* Inner panel */}
      <div className="absolute inset-[10px]
        bg-gradient-to-b from-[#2e1380] via-[#220b5c] to-[#14023a]
        border border-[#6b7cff]
        shadow-inner
      ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover
            brightness-90 contrast-110
          "
        />

        {/* Subtle overlay for sci-fi tint */}
        <div className="absolute inset-0 bg-gradient-to-b
          from-transparent via-[#2a137a]/40 to-[#14023a]/80
        " />
        {/* Yellow corner cuts – INNER PANEL */}
        <div className="absolute top-0 left-0 w-10 h-10 bg-yellow-400 clip-tl" />
        <div className="absolute top-0 right-0 w-10 h-10 bg-yellow-400 clip-tr" />
        <div className="absolute bottom-0 left-0 w-10 h-10 bg-yellow-400 clip-bl" />
        <div className="absolute bottom-0 right-0 w-10 h-10 bg-yellow-400 clip-br" />

        {/* Pink stripes */}
        <div className="absolute top-4 left-14 flex gap-1">
          <span className="w-3 h-1 bg-pink-400" />
          <span className="w-3 h-1 bg-pink-400" />
          <span className="w-3 h-1 bg-pink-400" />
        </div>

        <div className="absolute bottom-4 right-14 flex gap-1">
          <span className="w-3 h-1 bg-pink-400" />
          <span className="w-3 h-1 bg-pink-400" />
          <span className="w-3 h-1 bg-pink-400" />
        </div>

      </div>

      {/* Header tab – embedded */}
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2
        px-16 py-3
        rounded-lg
        bg-gradient-to-b from-[#4637ff] to-[#1a0a4a]
        border-2 border-[#9aacff]
        shadow-[0_0_45px_rgba(160,180,255,1)]
        font-extrabold tracking-wide text-xl
        whitespace-nowrap
        z-20
      ">
        {title}
      </div>

      {/* Bottom glow arc */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2
        w-[140%] h-28 rounded-full
        bg-blue-500/40 blur-3xl
      " />

    </div>
  );
}
