import { motion } from "framer-motion";
import { data } from "../data/content";

export default function News() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Latest News & Updates</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest announcements and events
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.news.map((item, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {item.category || 'Update'}
                  </span>
                  <time className="text-sm text-gray-500">{item.date}</time>
                </div>
                
                <h3 className="mt-3 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                
                <p className="mt-2 text-gray-600">
                  {item.body}
                </p>
                
                <div className="mt-4">
                  <a 
                    href={item.link} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
