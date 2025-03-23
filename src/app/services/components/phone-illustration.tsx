import Image from "next/image"

interface PhoneIllustrationProps {
  imageUrl: string
  altText?: string
  width?: number
  height?: number
}

export default function PhoneIllustration({
  imageUrl,
  altText = "Phone illustration",
  width = 200,
  height = 300,
}: PhoneIllustrationProps) {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={altText}
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  )
}

