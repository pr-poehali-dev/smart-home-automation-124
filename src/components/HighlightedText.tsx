import { useEffect, useRef, useState, ReactNode } from "react"

interface HighlightedTextProps {
  children: ReactNode
}

export function HighlightedText({ children }: HighlightedTextProps) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (spanRef.current) {
      observer.observe(spanRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <span ref={spanRef} className="relative inline-block">
      {children}
      <svg
        className="absolute -bottom-1 left-0 w-full h-4 overflow-visible"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shimmer-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c084fc">
              <animate attributeName="stop-color" values="#c084fc;#f472b6;#fb923c;#facc15;#34d399;#60a5fa;#c084fc" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#60a5fa">
              <animate attributeName="stop-color" values="#60a5fa;#c084fc;#f472b6;#fb923c;#facc15;#34d399;#60a5fa" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <path
          d="M0 8 Q50 2, 100 6 T200 8"
          stroke="url(#shimmer-line)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 200,
            strokeDashoffset: isVisible ? 0 : 200,
            transition: "stroke-dashoffset 0.8s ease-out",
          }}
        />
      </svg>
    </span>
  )
}