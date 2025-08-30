import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
};

const galleryImages = [
  { src: "/assets/birds.png", title: "Birds in Nature" },
  { src: "/assets/bus.png", title: "City Bus" },
  { src: "/assets/cctv.png", title: "Security Camera" },
  { src: "/assets/development.png", title: "Development" },
  { src: "/assets/front.png", title: "Front View" },
  { src: "/assets/girl.png", title: "Portrait" },
  { src: "/assets/road.png", title: "Scenic Road" },
];

export default function Gallery() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Gallery
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Explore our collection of images and designs
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-w-4 aspect-h-3 w-full">
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
