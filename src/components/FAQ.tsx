import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Как оформить заказ?",
    answer:
      "Просто напишите нам на почту — укажите, что вас заинтересовало, и мы подскажем наличие, размеры и цены. Поможем подобрать всё под ваш образ и оформим заказ.",
  },
  {
    question: "Как осуществляется доставка?",
    answer:
      "Мы доставляем заказы по всей России. Способ и сроки доставки уточняем индивидуально при оформлении заказа, чтобы вам было удобно получить покупку.",
  },
  {
    question: "Можно ли обменять или вернуть товар?",
    answer:
      "Да, если вещь вам не подошла по размеру или фасону, мы поможем с обменом или возвратом в соответствии с законодательством. Напишите нам, и мы всё подскажем.",
  },
  {
    question: "Как выбрать правильный размер?",
    answer:
      "Напишите нам свои параметры — мы поможем подобрать подходящий размер по размерной сетке конкретной модели, чтобы вещь села идеально.",
  },
  {
    question: "Оригинальные ли товары?",
    answer:
      "Мы работаем только с проверенными поставщиками и гарантируем качество каждой позиции. Все вещи проходят контроль перед отправкой.",
  },
  {
    question: "Как с вами связаться?",
    answer:
      "Напишите нам на почту slslsnikia@gmail.com — ответим на все вопросы, подскажем по наличию и поможем с выбором.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}