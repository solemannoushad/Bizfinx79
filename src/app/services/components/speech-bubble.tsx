interface SpeechBubbleProps {
  title: string
  text: string
  accentColor: string
}

export default function SpeechBubble({ title, text, accentColor = "bg-purple-700" }: SpeechBubbleProps) {
  return (
    <div className="absolute top-1/4 right-4 md:right-16 lg:right-24 xl:right-32 z-10">
      <div className="relative flex items-center">
        {/* Speech bubble content */}
        <div
          className="rounded-2xl py-3 px-4 shadow-md w-48 md:w-64"
          style={{
            background: "linear-gradient(to right, #fcd34d, #fef3c7)",
          }}
        >
          <h4 className="font-bold text-black text-base">{title}</h4>
          <p className="text-sm text-black">{text}</p>
        </div>

        {/* Purple arrow */}
        <div
          className={`${accentColor} w-8 h-8 ml-1`}
          style={{
            clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
          }}
        ></div>
      </div>
    </div>
  )
}

