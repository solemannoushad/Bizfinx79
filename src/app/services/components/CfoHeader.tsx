interface CFOHeaderProps {
    heading: string
    description: string
    headingColor?: string
    descriptionColor?: string
  }
  
  export default function CFOHeader({
    heading = "A CFO to Guide Your Financial Strategy",
    description = "Navigate the complexities of business finance with a dedicated, outsourced CFO by your side. Benefit from tailored strategies, in-depth financial analysis, and expert advice, ensuring your business remains agile, profitable, and poised for sustainable growth.",
    headingColor = "text-[#bd9300]",
    descriptionColor = "text-gray-600",
  }: CFOHeaderProps) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="md:w-5/12">
            <h1 className={`text-4xl md:text-5xl font-bold leading-tight ${headingColor}`}>{heading}</h1>
          </div>
          <div className="md:w-6/12">
            <p className={`text-base md:text-lg leading-relaxed ${descriptionColor}`} dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>
      </div>
    )
  }
  