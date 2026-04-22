import { motion } from "framer-motion";
import { Users, Target, Award } from "lucide-react";
import HighlightedText from "../ui/HighlightedText";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative">
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}>
            <div className="relative">
              <motion.div
                className="bg-gradient-to-br from-brand-teal to-brand-teal/50 rounded-2xl p-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}>
                <motion.img
                  src="/assets/ai-img.jpg"
                  alt="Team collaboration"
                  className="rounded-xl"
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block border border-gray-100"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <motion.div
                      className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white text-xs font-bold"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, rotate: 5 }}>
                      AI
                    </motion.div>
                    <motion.div
                      className="w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center text-white text-xs font-bold"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, rotate: -5 }}>
                      Dev
                    </motion.div>
                    <motion.div
                      className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, rotate: 5 }}>
                      HR
                    </motion.div>
                  </div>
                  <motion.div
                    className="text-sm font-medium text-gray-700"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    viewport={{ once: true }}>
                    Complete
                    <br />
                    Solutions
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-brand-navy"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}>
              About
              <HighlightedText highlightColor="#1ABC9C" className="ml-2 text-brand-teal">
                Dexterz Technologies
              </HighlightedText>
            </motion.h2>

            <motion.p
              className="text-gray-700 mb-4 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}>
              At Dexterz Technologies, we specialize in Data Science, AI/ML engineering, Full Stack development, 
              DevOps automation, and Microsoft Dynamics 365 solutions—delivering transformative technology that 
              drives measurable business outcomes.
            </motion.p>

            <motion.p
              className="text-gray-700 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}>
              Our mission is to empower enterprises through intelligent automation, predictive analytics, 
              scalable cloud infrastructure, and world-class technical talent—all designed to accelerate 
              your digital transformation.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}>
              <motion.div
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200 hover:shadow-md"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}>
                <motion.div
                  className="text-brand-teal font-bold text-2xl md:text-3xl mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}>
                  100+
                </motion.div>
                <div className="text-gray-600 text-sm font-medium">AI Projects Delivered</div>
              </motion.div>
              <motion.div
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200 hover:shadow-md"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}>
                <motion.div
                  className="text-brand-teal font-bold text-2xl md:text-3xl mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}>
                  50+
                </motion.div>
                <div className="text-gray-600 text-sm font-medium">Experienced Developers</div>
              </motion.div>
              <motion.div
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200 hover:shadow-md"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}>
                <motion.div
                  className="text-brand-teal font-bold text-2xl md:text-3xl mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}>
                  98%
                </motion.div>
                <div className="text-gray-600 text-sm font-medium">Client Satisfaction</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
