import { Lightbulb, Compass, Zap, Brain, Layers, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "../services/ServiceCard";
import { motion } from "framer-motion";

const ConsultationSection = () => {
  const consultationServices = [
    {
      title: "Data Science & AI Strategy",
      description:
        "Architecting long-term AI roadmaps that leverage data science to create predictive advantages and innovation-driven leadership.",
      icon: <Brain />,
    },
    {
      title: "DevOps Transformation",
      description:
        "Modernizing your delivery pipeline with high-availability CI/CD architecture and site reliability engineering for mission-critical apps.",
      icon: <Zap />,
    },
    {
      title: "Microsoft Dynamics Advisory",
      description:
        "Expert strategic guidance on Dynamics 365 implementation to unify enterprise operations and drive organizational efficiency.",
      icon: <Layers />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
            <Lightbulb className="h-4 w-4" />
            <span className="text-sm font-medium">Expert Advisory</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-navy">
            Technology <span className="text-brand-teal">Consultation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic advisory services guiding enterprises through digital transformation with expertise in Data Science, AI/ML, DevOps, and Microsoft Dynamics 365.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {consultationServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-brand-teal/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-brand-teal/10 p-3 rounded-lg inline-flex items-center justify-center text-brand-teal w-12 h-12 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services/consultation"
              className="inline-flex items-center px-8 py-4 bg-brand-teal hover:bg-brand-teal/90 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Learn More About Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
