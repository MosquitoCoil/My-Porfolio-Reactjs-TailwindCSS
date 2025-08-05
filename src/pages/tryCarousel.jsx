import { useState } from "react";
import Carousel from "./carousel";

const slides = [
  {
    title: "Maternal Health System",
    subtitle: "Figma",
    description:
      "A user-friendly system that streamlines maternal healthcare, improving communication, appointment tracking, and access to essential resources. I focused on UI/UX design, ensuring an intuitive and seamless experience for both mothers and healthcare providers.",
    link: "https://www.figma.com/community/file/1432685041631817472/maternal-system",
    image: "/Screenshot/figma.png",
  },
  {
    title: "Tarpaulin & Brochure",
    subtitle: "Adobe Photoshop",
    description:
      "During my internship, I focused on graphic design projects for a truck company, creating impactful tarpaulins and brochures using Adobe Photoshop. This experience allowed me to develop practical design skills and understand how to visually communicate brand messages effectively.",
    link: "https://drive.google.com/drive/folders/1OzrYhKDmK6XgZI6CWwFyv7I_L_JkIqCT?usp=sharing",
    images: [
      "/carousel/sbi1.png",
      "/carousel/sbi2.png",
      "/carousel/sbi3.jpg",
      "/carousel/sbi4.jpg",
      "/carousel/sbi5.png",
      "/carousel/sbi6.png",
    ],
  },
];

export default function ProjectCarousel() {
  const [curr, setCurr] = useState(0);

  const next = () => setCurr((curr + 1) % slides.length);
  const prev = () => setCurr((curr - 1 + slides.length) % slides.length);

  return (
    <section className="bg-gray-950 font-mono" id="about-me">
      <div className="relative w-full overflow-hidden mt-8 grid gap-8 md:grid-cols-3 lg:grid-cols-3">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-full flex-shrink-0 p-4">
              <div className="hover:bg-gray-500/5 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-cyan-400/10 hover:shadow-cyan-400/10">
                <a href={slide.link} className="group relative block">
                  {slide.image && (
                    <img
                      alt=""
                      src={slide.image}
                      className="h-full w-full object-contain transition-opacity group-hover:opacity-50"
                    />
                  )}

                  {slide.images && (
                    <Carousel autoSlide={true} autoSlideInterval={3000}>
                      {slide.images.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt=""
                          className="h-full w-full object-contain transition-opacity group-hover:opacity-50"
                        />
                      ))}
                    </Carousel>
                  )}

                  <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">
                      {slide.subtitle}
                    </p>
                    <p className="text-xl font-bold text-white sm:text-2xl">
                      {slide.title}
                    </p>
                    <div className="mt-32 sm:mt-48 lg:mt-64">
                      <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-white">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded"
        >
          ›
        </button>
      </div>
    </section>
  );
}
