interface AdBannerProps {
  size: "large" | "medium" | "small"
  position: "top" | "middle" | "bottom" | "sidebar"
  className?: string
}

export default function AdBanner({ size, position, className = "" }: AdBannerProps) {
  const getAdDimensions = () => {
    switch (size) {
      case "large":
        return "h-32 md:h-40"
      case "medium":
        return "h-24 md:h-32"
      case "small":
        return "h-16 md:h-20"
      default:
        return "h-24 md:h-32"
    }
  }

  const getAdContent = () => {
    switch (position) {
      case "top":
        return "Premium Advertisement Space - Top Banner"
      case "middle":
        return "Featured Advertisement - Content Area"
      case "bottom":
        return "Advertisement Space - Footer Area"
      case "sidebar":
        return "Sidebar Ad Space"
      default:
        return "Advertisement Space Available"
    }
  }

  return (
    <div
      className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center ${getAdDimensions()} ${className}`}
    >
      <div className="text-center text-gray-500">
        <div className="text-sm font-medium">{getAdContent()}</div>
        <div className="text-xs mt-1">728x90 / 970x250 / Responsive</div>
      </div>
    </div>
  )
}
