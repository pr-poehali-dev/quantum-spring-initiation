const categories = [
  {
    label: "Фотография",
    tag: "Photo",
    description:
      "Живые моменты, пойманные в кадр. Портреты, репортажи, пейзажи — каждый снимок рассказывает свою историю.",
    image: "/images/mountain-landscape.jpg",
    alt: "Пример фотографии",
  },
  {
    label: "Видео",
    tag: "Video",
    description:
      "Динамичные ролики и короткий метр. От съёмки до монтажа — создаю видео, которые хочется смотреть до конца.",
    image: "/images/exterior.png",
    alt: "Пример видео",
  },
  {
    label: "Тексты",
    tag: "Text",
    description:
      "Статьи, сценарии, посты. Пишу ясно и по делу — так, чтобы читатель не отрывался от экрана.",
    image: "/images/desk.png",
    alt: "Пример текста",
  },
];

export default function Featured() {
  return (
    <div id="works" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="uppercase text-sm tracking-widest text-neutral-500 mb-4">
          Примеры работ
        </h2>
        <p className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 leading-tight max-w-2xl">
          Фото, видео и тексты — в одном месте
        </p>

        <div className="flex flex-col gap-24">
          {categories.map((item, i) => (
            <div
              key={item.tag}
              className={`flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[320px] lg:h-[480px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="uppercase text-xs tracking-widest text-neutral-400 mb-3">
                  {item.tag}
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-5">
                  {item.label}
                </h3>
                <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                  {item.description}
                </p>
                <button className="bg-black text-white border border-black px-5 py-2.5 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
                  Смотреть работы
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
