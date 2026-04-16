import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechVision Inc.",
    content:
      "Dexterz Technologies transformed our customer support with their AI chatbot solution. The implementation was smooth, and our customer satisfaction scores have increased by 35%.",
    image: "/assets/sarah-johnson-avatar.svg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateSoft",
    content:
      "The developers we hired through Dexterz Technologies' staff augmentation service integrated seamlessly with our team and helped us deliver our project ahead of schedule.",
    image: "/assets/michael-chen-avatar.svg",
  },
  {
    id: 3,
    name: "Laura Patel",
    role: "Director of Operations",
    company: "GlobalTech Solutions",
    content:
      "Their predictive analytics solution has given us invaluable insights that have directly contributed to a 28% increase in our operational efficiency.",
    image: "/assets/sarah-johnson-avatar.svg",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Client Success</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            What Our <span className="text-brand-teal">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from the companies that have transformed their businesses with our solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/10 shadow-lg">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M32 16H16V32H32V16Z" fill="#1ABC9C" fillOpacity="0.2" />
                <path d="M64 16H48V32H64V16Z" fill="#1ABC9C" fillOpacity="0.2" />
                <path d="M32 48H16V64H32V48Z" fill="#1ABC9C" fillOpacity="0.2" />
                <path d="M64 48H48V64H64V48Z" fill="#1ABC9C" fillOpacity="0.2" />
              </svg>
            </div>

            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10">
              <div className="mb-8">
                <svg
                  className="text-brand-teal w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32">
                  <path d="M10 8c-2.2 0-4 1.8-4 4v10h10V12H6c0-1.1 0.9-2 2-2h2V8h-0zM22 8c-2.2 0-4 1.8-4 4v10h10V12h-10c0-1.1 0.9-2 2-2h2V8h-0z" />
                </svg>
              </div>

              <blockquote className="text-xl font-medium text-gray-300 mb-8 leading-relaxed">
                {currentTestimonial.content}
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4 border-2 border-brand-teal/30">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-white">{currentTestimonial.name}</div>
                  <div className="text-gray-300 text-sm">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-6 right-6 flex space-x-3">
              <button
                onClick={prevTestimonial}
                className="bg-white/10 hover:bg-brand-teal/20 text-white hover:text-brand-teal p-2 rounded-full transition-all duration-300 hover:scale-110 border border-white/20">
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white/10 hover:bg-brand-teal/20 text-white hover:text-brand-teal p-2 rounded-full transition-all duration-300 hover:scale-110 border border-white/20">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full mx-1 transition-all duration-200 hover:scale-125 ${
                  idx === currentIndex ? "bg-brand-teal" : "bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
