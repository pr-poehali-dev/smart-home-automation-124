import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

export function CallToAction() {
  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Оформить заказ</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
            Нашли что-то
            <br />
            <HighlightedText>по душе</HighlightedText>?
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Напишите нам — подскажем наличие, размеры и поможем оформить заказ. Ответим на любой ваш вопрос.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:slslsnikia@gmail.com"
              className="shimmer-border inline-flex items-center justify-center gap-3 p-px text-sm tracking-wide group"
            >
              <span className="inline-flex items-center gap-3 bg-foreground text-primary-foreground px-8 py-4 hover:bg-foreground/80 transition-colors duration-300 w-full">
                Написать нам
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="mailto:slslsnikia@gmail.com"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              slslsnikia@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}