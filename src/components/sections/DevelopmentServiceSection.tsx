import {
  Globe,
  Smartphone,
  Code,
  Database,
  Link,
  Cloud,
  Cog,
  Code as CodeIcon,
} from "lucide-react";
import ServiceCard from "../services/ServiceCard";
import { motion } from "framer-motion";

const DevelopmentServiceSection = () => {
  const devServices = [
    {
      title: "Web Development",
      description:
        "Create responsive, modern web applications with cutting-edge technologies and user-centric design.",
      icon: <Globe />,
      link: "/services/development/web",
    },
    {
      title: "Mobile App Development",
      description:
        "Build native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      icon: <Smartphone />,
      link: "/services/development/mobile",
    },
    {
      title: "Custom Software Development",
      description:
        "Develop bespoke software solutions tailored to your specific business requirements and challenges.",
      icon: <Code />,
      link: "/services/development/custom",
    },
    {
      title: "CRM & ERP Solutions",
      description:
        "Implement and customize enterprise systems to streamline operations and enhance business efficiency.",
      icon: <Database />,
      link: "/services/development/crm-erp",
    },
    // {
    //   title: "API Development & Integration",
    //   description:
    //     "Create and integrate APIs to connect your systems and enable seamless data exchange between applications.",
    //   icon: <Link />,
    //   link: "/services/development/api",
    // },
    {
      title: "Cloud Solutions",
      description:
        "Harness the power of cloud technology for scalable, secure, and cost-effective infrastructure solutions.",
      icon: <Cloud />,
      link: "/services/development/cloud",
    },
    {
      title: "DevOps Services",
      description:
        "Implement DevOps practices to improve collaboration, increase deployment frequency, and ensure product quality.",
      icon: <Cog />,
      link: "/services/development/devops",
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
            From concept to deployment, we deliver robust software solutions tailored to your unique
            business needs.
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
