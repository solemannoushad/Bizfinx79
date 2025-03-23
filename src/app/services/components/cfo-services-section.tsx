import PhoneIllustration from "./phone-illustration"
import SpeechBubble from "./speech-bubble"

interface CFOServicesSectionProps {
  heading: string
  description: string
  bulletPoints: string[]
  conclusion: string
  speechBubbleTitle: string
  speechBubbleText: string
  phoneImageUrl: string
  phoneImageAlt?: string
  phoneImageWidth?: number
  phoneImageHeight?: number
  backgroundColor?: string
  accentColor?: string
  textColor?: string
}

export default function CFOServicesSection({
  heading = "Why Opt for Outsourced CFO Services?",
  description = "The value of CFO advisory services is undeniable. A fractional CFO is pivotal for business longevity, from strategizing growth to organizing finances. Outsourcing these services offers added advantages",
  bulletPoints = [
    "Crystal-clear financial insights for audit or fundraising readiness.",
    "Enhanced efficiency with top-tier accounting or ERP solutions.",
    "Peace of mind with ensured compliance, immaculate books, and up-to-date financials.",
  ],
  conclusion = "Outsourced CFO Services integrate seamlessly into your business model and budget. Entrust your CFO responsibilities to indinero.",
  speechBubbleTitle = "Expert management",
  speechBubbleText = "Outsourced CFO services offer growth",
  phoneImageUrl = "/placeholder.svg",
  phoneImageAlt = "Purple telephone illustration",
  phoneImageWidth = 200,
  phoneImageHeight = 300,
  backgroundColor = "bg-yellow-300",
  accentColor = "text-purple-700",
  textColor = "text-purple-950",
}: CFOServicesSectionProps) {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left side with phone image and speech bubble */}
        <div
          className={`relative rounded-3xl overflow-hidden ${backgroundColor} p-8 md:w-1/2 h-[400px] md:h-[500px] flex items-center justify-center`}
        >
          {/* Container for phone and speech bubble */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Phone illustration */}
            <PhoneIllustration
              imageUrl={phoneImageUrl}
              altText={phoneImageAlt}
              width={phoneImageWidth}
              height={phoneImageHeight}
            />

            {/* Speech bubble - positioned absolutely */}
            <SpeechBubble
              title={speechBubbleTitle}
              text={speechBubbleText}
              accentColor={accentColor.replace("text-", "bg-")}
            />
          </div>
        </div>

        {/* Right side with content */}
        <div className="md:w-1/2">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>{heading}</h2>
          <p className="text-gray-700 mb-6">{description}</p>

          <ul className="space-y-3 mb-6">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className={`mr-2 text-xl ${accentColor}`}>•</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-700">{conclusion}</p>
        </div>
      </div>
    </div>
  )
}

