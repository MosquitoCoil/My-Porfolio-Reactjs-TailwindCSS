import Carousel from "./carousel";

function ProjectCard({
  href,
  images,
  carousel = false,
  tech,
  title,
  description,
}) {
  return (
    <div className="group relative block rounded-xl border border-gray-800 shadow-md overflow-hidden hover:border-cyan-400 hover:shadow-cyan-400 transition-all duration-300">
      <a href={href} className="block">
        {/* Images */}
        <div className="w-full h-auto p-2">
          {carousel ? (
            <Carousel autoSlide={true} autoSlideInterval={4000}>
              {images}
            </Carousel>
          ) : Array.isArray(images) ? (
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 max-w-full">
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Image ${i + 1}`}
                    className="w-full h-48 sm:h-64 md:h-64 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                  />
                ))}
              </div>
            </div>
          ) : (
            // Single image
            <img
              src={images}
              alt={title}
              className="w-full h-48 sm:h-64 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>

        {/* Text */}
        <div className="p-4 sm:p-6">
          {/* Always visible */}
          <p className="text-sm font-medium uppercase tracking-wide text-cyan-400">
            {tech}
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
            {title}
          </h3>

          {/* Only visible on hover */}
          <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
