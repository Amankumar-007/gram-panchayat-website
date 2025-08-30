import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any inquiries or feedback
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Send us a message</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Full name" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="email@example.com" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                Send Message
              </button>
            </div>
          </motion.form>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Longwala, Pilibanga, Hanumangarh, Rajasthan</p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">+91 82091 30531</p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">info@smartvillageseva.in</p>
              </div>
            </div>
            
            <div className="mt-6 rounded-xl overflow-hidden">
              <iframe 
                title="map" 
                className="w-full h-64 border-0"
                src="https://maps.google.com/maps?q=Longwala%20Rajasthan&t=&z=12&ie=UTF8&iwloc=&output=embed"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
