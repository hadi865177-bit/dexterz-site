import {
  Globe,
  Smartphone,
  Code,
  Database,
  Cloud,
  Cog,
  Brain,
  Building2,
  Code as CodeIcon,
} from "lucide-react";
import ServiceCard from "../services/ServiceCard";
import { motion } from "framer-motion";

const DevelopmentServiceSection = () => {
  const devServices = [
    {
      title: "Full Stack Development",
      description:
        "Building robust, end-to-end web and mobile applications using modern frameworks and mission-critical reliability standards.",
      icon: <Globe />,
      link: "/services/development",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Developing intelligent systems and predictive models that leverage advanced neural networks and deep learning.",
      icon: <Brain />,
      link: "/services/ai",
    },
    {
      title: "Data Science & Analytics",
      description:
        "Extracting actionable insights from complex datasets to drive data-driven decision making and strategic growth.",
      icon: <Database />,
      link: "/services/ai",
    },
    {
      title: "DevOps & Cloud Engineering",
      description:
        "Automating CI/CD pipelines and managing high-availability cloud infrastructure for seamless global scaling.",
      icon: <Cog />,
      link: "/services/cloud",
    },
    {
      title: "Microsoft Dynamics 365",
      description:
        "Strategic implementation and customization of Dynamics 365 to unify enterprise operations and workflows.",
      icon: <Building2 />,
      link: "/services/consultation",
    },
    {
      title: "Custom Software Engineering",
      description:
        "Architecting bespoke software solutions tailored to solve complex operational challenges and drive innovation.",
      icon: <Code />,
      link: "/services/development",
    },
  ];

  return (
    <section className="py-20 bg-white relative text-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/20">
            <CodeIcon className="h-4 w-4" />
            <span className="text-sm font-medium">Development</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Software <span className="text-brand-teal">Development</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade software engineering across Data Science, AI/ML, Full Stack, DevOps, and Microsoft Dynamics 365 platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {devServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 p-6 shadow-sm hover:shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-teal/10 rounded-full mb-4 border border-brand-teal/20">
                  <div className="text-brand-teal">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 font-medium transition-colors">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentServiceSection;
