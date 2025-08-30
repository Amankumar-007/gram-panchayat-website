import { motion } from "framer-motion";
import { data } from "../data/content";

// Function to generate avatar with initials
const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
};

// Function to generate a consistent color based on name
const stringToColor = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const hue = hash % 360;
  return `hsl(${hue}, 70%, 80%)`;
};

export default function Members() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Panchayat Members</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team working for our community
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.members.map((member, index) => {
            const initials = getInitials(member.name);
            const bgColor = stringToColor(member.name);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6 text-center">
                  <div className="relative inline-block">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow-md"
                      />
                    ) : (
                      <div 
                        className="w-32 h-32 mx-auto rounded-full flex items-center justify-center text-4xl font-bold text-white"
                        style={{ backgroundColor: bgColor }}
                      >
                        {initials}
                      </div>
                    )}
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                    
                    {member.contact && (
                      <div className="mt-3 text-sm text-gray-600">
                        <p className="flex items-center justify-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {member.contact}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
