import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Качество в каждой детали",
    description:
      "Мы выбираем только проверенные материалы и надёжных производителей. Каждая вещь проходит контроль качества перед отправкой.",
  },
  {
    title: "Актуальный стиль",
    description:
      "Следим за мировыми трендами и собираем коллекции, которые помогут вам выглядеть современно и уверенно каждый день.",
  },
  {
    title: "Честные цены",
    description:
      "Работаем напрямую, без лишних наценок. Стильные вещи должны быть доступны — мы держим цены справедливыми.",
  },
  {
    title: "Забота о клиенте",
    description: "Поможем подобрать размер, ответим на вопросы и подскажем сочетания. Ваш комфорт для нас на первом месте.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Title and image */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">О бренде</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Стиль с
              <br />
              <HighlightedText>характером</HighlightedText>
            </h2>

            <div className="relative hidden lg:block mt-8">
              <img
                src="https://cdn.poehali.dev/projects/7972384d-106a-45e1-b4b0-079166f1640d/files/45055464-265b-4e37-94a3-6e59761bb47c.jpg"
                alt="Эскиз пальто"
                className="w-64 opacity-85 relative z-10"
              />
            </div>
          </div>

          {/* Right column - Description and Philosophy items */}
          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Мода — это больше, чем вещи. Это способ выразить себя. Мы собираем одежду, обувь и украшения, которые подчёркивают вашу индивидуальность.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}