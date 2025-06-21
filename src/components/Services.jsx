import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaBullhorn, FaImages, FaMobileAlt, FaChartLine, FaStar } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "We build responsive, high-performance websites and web applications using cutting-edge technologies like React, Node.js, and modern CSS frameworks.",
    icon: <FaCode className="text-blue-500" />,
    images: [
      "/assets/webdev1.jpg",
      "/assets/webdev2.jpg",
      "/assets/webdev3.jpg"
    ],
    features: [
      "Custom CMS Development",
      "E-commerce Solutions",
      "API Integrations",
      "Progressive Web Apps",
      "Ongoing Maintenance"
    ],
    review: {
      name: "Arun Kumar",
      position: "CTO, TechSolutions",
      feedback: "Delivered our complex SaaS platform 3 weeks ahead of schedule with perfect functionality.",
      stars: 5
    }
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital strategies to increase your online visibility and drive qualified traffic to your business.",
    icon: <FaBullhorn className="text-green-500" />,
    images: [
      "/assets/marketing1.jpg",
      "/assets/marketing2.jpg",
      "/assets/marketing3.jpg"
    ],
    features: [
      "SEO & Content Strategy",
      "Social Media Management",
      "PPC Advertising",
      "Email Marketing",
      "Conversion Optimization"
    ],
    review: {
      name: "Priya Nair",
      position: "Marketing Director",
      feedback: "Tripled our lead generation within 6 months of working together!",
      stars: 5
    }
  },
  {
    title: "AI Data Services",
    description: "High-quality training data and annotation services for machine learning and computer vision applications.",
    icon: <FaImages className="text-purple-500" />,
    images: [
      "/assets/ai1.jpg",
      "/assets/ai2.jpg",
      "/assets/ai3.jpg"
    ],
    features: [
      "Image Annotation",
      "Video Labeling",
      "Text Classification",
      "Data Collection",
      "Quality Assurance"
    ],
    review: {
      name: "Dr. Sanjay Patel",
      position: "AI Research Lead",
      feedback: "Improved our model accuracy by 22% with their precise annotations.",
      stars: 5
    }
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We deliver end-to-end solutions tailored to your specific business needs and goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden flex flex-col"
            >
              {/* Service Header */}
              <div className="p-8 pb-0">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-blue-50">
                  {React.cloneElement(service.icon, { size: 28 })}
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 text-center mb-6">
                  {service.description}
                </p>
              </div>

              {/* Image Gallery */}
              <div className="relative h-64 w-full">
                {service.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`${service.title} example ${i+1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: i === index % service.images.length ? 1 : 0,
                      scale: i === index % service.images.length ? 1 : 0.95
                    }}
                    transition={{ duration: 1, delay: i * 0.3 }}
                  />
                ))}
              </div>

              {/* Features List */}
              <div className="p-8 pt-6 flex-1">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              {service.review && (
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-t">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`${i < service.review.stars ? "text-yellow-400" : "text-gray-300"} mr-1`} 
                        size={16}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-3">"{service.review.feedback}"</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">{service.review.name}</span>
                    <span className="text-sm text-gray-600">{service.review.position}</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;