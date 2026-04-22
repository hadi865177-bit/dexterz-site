import { Users, Briefcase, Monitor, Globe, Users as UsersIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "../services/ServiceCard";
import { motion } from "framer-motion";

const StaffAugmentationSection = () => {
  const staffingFeatures = [
    {
      title: "AI & Data Science Squads",
      description: "Dedicated squads of data scientists and ML engineers who embed within your R&D for mission-critical AI innovation and intelligent automation.",
      icon: <Users />,
    },
    {
      title: "Full Stack & DevOps Integration",
      description: "End-to-end engineering teams capable of managing complex architectures while automating CI/CD pipelines for rapid, reliable delivery.",
      icon: <Monitor />,
    },
    {
      title: "Microsoft Dynamics 365 Experts",
      description: "Certified professionals providing strategic implementation and customization of Dynamics 365 CRM, ERP, and Power Platform ecosystems.",
      icon: <Globe />,
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
            <UsersIcon className="h-4 w-4" />
            <span className="text-sm font-medium">Talent Solutions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-navy">
            Staff <span className="text-brand-teal">Augmentation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Integrating world-class engineering squads directly into your organization's core operations to drive mission-critical innovation across Data Science, AI/ML, Full Stack, DevOps, and Microsoft Dynamics 365.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {staffingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className="bg-brand-teal/10 p-3 rounded-lg inline-flex items-center justify-center text-brand-teal w-12 h-12 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
              to="/services/staff-augmentation"
              className="inline-flex items-center px-8 py-4 bg-brand-teal hover:bg-brand-teal/90 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Staffing Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StaffAugmentationSection;
