import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Bot,
  MessageSquare,
  Database,
  ChartLine,
  Bug,
  Wrench,
  Users,
  Briefcase,
  Monitor,
  Globe,
  Smartphone,
  Code,
  Link as LinkIcon,
  Cloud,
  Cog,
  Server,
  Shield,
  Zap,
  Star,
  TrendingUp,
  Rocket,
  CheckCircle,
  Target,
  Lightbulb,
  Award,
  Compass,
} from "lucide-react";
import PageLayout from "../components/layout/PageLayout";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: "teal" | "navy" | "blue";
  delay?: number;
}

const ServiceItem = ({ title, description, icon, link, color, delay = 0 }: ServiceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group">
      <Link
        to={link}
        className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-teal/20 relative overflow-hidden">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Icon container */}
        <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-brand-teal/10 to-brand-teal/20 text-brand-teal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
          {icon}
        </div>

        <h3 className="relative z-10 text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors duration-300">
          {title}
        </h3>
        <p className="relative z-10 text-gray-600 mb-6 leading-relaxed">{description}</p>

        <div className="relative z-10 flex items-center text-brand-teal font-semibold group-hover:text-brand-navy transition-colors duration-300">
          Learn more{" "}
          <ArrowRight
            size={18}
            className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
          />
        </div>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const aiServices = [
    {
      title: "AI & ML Integrations",
      description:
        "Integrate cutting-edge AI capabilities into existing systems for enhanced functionality and intelligent automation.",
      icon: <Brain size={28} />,
      link: "/services/ai/integrations",
      color: "teal" as const,
    },
    {
      title: "AI Automation Solutions",
      description:
        "Automate routine tasks with intelligent AI systems that learn and adapt to your business processes.",
      icon: <Bot size={28} />,
      link: "/services/ai/automation",
      color: "teal" as const,
    },
    {
      title: "Chatbot Development",
      description:
        "Build intelligent conversational agents that engage customers and provide 24/7 support.",
      icon: <MessageSquare size={28} />,
      link: "/services/ai/chatbots",
      color: "teal" as const,
    },
    {
      title: "Intelligent Data Processing",
      description:
        "Process large datasets using AI to extract valuable insights and drive data-driven decisions.",
      icon: <Database size={28} />,
      link: "/services/ai/data-processing",
      color: "teal" as const,
    },
  ];

  const staffingServices = [
    {
      title: "Integrated Engineering Teams",
      description:
        "Dedicated development squads that embed within your organization, adopting your culture and technical standards.",
      icon: <Users size={28} />,
      link: "/services/staff-augmentation",
      color: "navy" as const,
    },
    {
      title: "Strategic Talent Advisory",
      description:
        "Expert recruitment strategies designed for complex enterprise environments and specialized roles.",
      icon: <Briefcase size={28} />,
      link: "/services/staff-augmentation",
      color: "navy" as const,
    },
    {
      title: "Global Capability Centers",
      description:
        "Managed remote operations that function as a core extension of your business across borders.",
      icon: <Monitor size={28} />,
      link: "/services/staff-augmentation",
      color: "navy" as const,
    },
    {
      title: "Domain-Specific Augmentation",
      description:
        "Infuse your projects with deep technical expertise in AI, Cloud, or Fintech to accelerate delivery.",
      icon: <Globe size={28} />,
      link: "/services/staff-augmentation",
      color: "navy" as const,
    },
  ];

  const developmentServices = [
    {
      title: "Web Development",
      description:
        "Create responsive, modern web applications with cutting-edge technologies and best practices.",
      icon: <Globe size={28} />,
      link: "/services/development",
      color: "blue" as const,
    },
    {
      title: "Mobile App Development",
      description:
        "Build native and cross-platform mobile applications for iOS and Android platforms.",
      icon: <Smartphone size={28} />,
      link: "/services/mobile",
      color: "blue" as const,
    },
    {
      title: "Custom Software Development",
      description:
        "Develop bespoke software solutions tailored to your unique business requirements.",
      icon: <Code size={28} />,
      link: "/services/development",
      color: "blue" as const,
    },
    {
      title: "API Development & Integration",
      description: "Create and integrate APIs to connect your systems seamlessly and efficiently.",
      icon: <LinkIcon size={28} />,
      link: "/services/development",
      color: "blue" as const,
    },
  ];

  const mobileServices = [
    {
      title: "iOS App Development",
      description: "Create native iOS applications with Swift and SwiftUI for optimal performance.",
      icon: <Smartphone size={28} />,
      link: "/services/mobile",
      color: "teal" as const,
    },
    {
      title: "Android App Development",
      description: "Build native Android applications using Kotlin and Jetpack Compose.",
      icon: <Smartphone size={28} />,
      link: "/services/mobile",
      color: "teal" as const,
    },
    {
      title: "Cross-Platform Development",
      description: "Develop apps that work seamlessly across iOS and Android platforms.",
      icon: <Globe size={28} />,
      link: "/services/mobile",
      color: "teal" as const,
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "Create web applications that provide native app-like experiences.",
      icon: <Monitor size={28} />,
      link: "/services/mobile",
      color: "teal" as const,
    },
  ];

  const cloudServices = [
    {
      title: "Cloud Migration",
      description:
        "Seamlessly migrate your existing infrastructure to the cloud with minimal disruption.",
      icon: <Cloud size={28} />,
      link: "/services/cloud",
      color: "blue" as const,
    },
    {
      title: "Cloud Infrastructure Setup",
      description: "Design and implement scalable cloud infrastructure for your business needs.",
      icon: <Server size={28} />,
      link: "/services/cloud",
      color: "blue" as const,
    },
    {
      title: "DevOps & CI/CD",
      description: "Implement automated deployment pipelines and DevOps practices for efficiency.",
      icon: <Cog size={28} />,
      link: "/services/cloud",
      color: "blue" as const,
    },
    {
      title: "Cloud Security",
      description: "Implement robust security measures to protect your cloud infrastructure.",
      icon: <Shield size={28} />,
      link: "/services/cloud",
      color: "blue" as const,
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description:
        "We begin by understanding your business needs, challenges, and objectives to craft the perfect solution.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      number: "02",
      title: "Planning & Strategy",
      description:
        "Our experts develop a tailored strategy with clear milestones, resources, and timelines for your project.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      number: "03",
      title: "Development & Implementation",
      description:
        "Our skilled team executes the plan with regular updates, allowing for agile adjustments when needed.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      number: "04",
      title: "Testing & Refinement",
      description:
        "We thoroughly test all deliverables to ensure they meet our high standards of quality and your requirements.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      number: "05",
      title: "Deployment & Ongoing Support",
      description:
        "We deploy your solution and provide ongoing maintenance and support to ensure its continued success.",
      icon: <Rocket className="h-6 w-6" />,
    },
  ];

  return (
    <PageLayout>
      {/* Enhanced Hero Section - Dark */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/90 text-white py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Comprehensive Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand-teal/90 to-white bg-clip-text text-transparent">
              Our Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Comprehensive solutions to power your business growth and digital transformation. From
              AI automation to cloud infrastructure, we deliver excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center border-white/30 text-white bg-transparent hover:bg-white hover:text-brand-navy px-8 py-3 text-lg font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 opacity-10">
          <div className="w-20 h-20 bg-brand-teal rounded-full blur-xl"></div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 opacity-10">
          <div className="w-32 h-32 bg-brand-teal rounded-full blur-xl"></div>
        </motion.div>
      </section>

      {/* AI & Automation Services - Light */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Brain className="h-4 w-4" />
              <span className="text-sm font-medium">Core Service 1</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              AI & <span className="text-gradient">Automation</span> Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Harness the power of artificial intelligence to automate tasks, gain insights, and
              create intelligent solutions that transform your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <ServiceItem key={service.title} {...service} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12">
            <Link
              to="/services/ai"
              className="inline-flex items-center text-brand-teal hover:text-brand-navy font-semibold text-lg transition-colors duration-300">
              View all AI & Automation services{" "}
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Staff Augmentation & Recruitment Services - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Core Service 2</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Staff <span className="text-brand-teal">Augmentation</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Seamlessly integrating world-class technical expertise into your organization's core
              operations to drive long-term innovation and operational excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staffingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group">
                <Link
                  to={service.link}
                  className="block bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-brand-teal/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-brand-teal/20 to-brand-teal/30 text-brand-teal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>

                  <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-brand-teal transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="relative z-10 text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="relative z-10 flex items-center text-brand-teal font-semibold group-hover:text-white transition-colors duration-300">
                    Learn more{" "}
                    <ArrowRight
                      size={18}
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12">
            <Link
              to="/services/staff-augmentation"
              className="inline-flex items-center text-brand-teal hover:text-white font-semibold text-lg transition-colors duration-300">
              View all Staffing & Recruitment services{" "}
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Software Development Services - Light */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Code className="h-4 w-4" />
              <span className="text-sm font-medium">Core Service 3</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Software <span className="text-gradient">Development</span> Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From concept to deployment, we deliver robust software solutions tailored to your
              unique business needs. Quality code that scales with your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentServices.map((service, index) => (
              <ServiceItem key={service.title} {...service} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12">
            <Link
              to="/services/development"
              className="inline-flex items-center text-brand-teal hover:text-brand-navy font-semibold text-lg transition-colors duration-300">
              View all Development services{" "}
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mobile Development Services - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Smartphone className="h-4 w-4" />
              <span className="text-sm font-medium">Core Service 4</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Mobile <span className="text-brand-teal">Development</span> Services
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Create powerful, engaging mobile applications that connect with your users and drive
              business growth. Native and cross-platform solutions for every need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mobileServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group">
                <Link
                  to={service.link}
                  className="block bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-brand-teal/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-brand-teal/20 to-brand-teal/30 text-brand-teal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>

                  <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-brand-teal transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="relative z-10 text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="relative z-10 flex items-center text-brand-teal font-semibold group-hover:text-white transition-colors duration-300">
                    Learn more{" "}
                    <ArrowRight
                      size={18}
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12">
            <Link
              to="/services/mobile"
              className="inline-flex items-center text-brand-teal hover:text-white font-semibold text-lg transition-colors duration-300">
              View all Mobile Development services{" "}
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cloud Solutions Services - Light */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Cloud className="h-4 w-4" />
              <span className="text-sm font-medium">Core Service 5</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Cloud <span className="text-gradient">Solutions</span> Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Harness the power of cloud technology for scalable, secure, and cost-effective
              infrastructure solutions. Future-proof your business with cloud-first strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudServices.map((service, index) => (
              <ServiceItem key={service.title} {...service} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12">
            <Link
              to="/services/cloud"
              className="inline-flex items-center text-brand-teal hover:text-brand-navy font-semibold text-lg transition-colors duration-300">
              View all Cloud Solutions services{" "}
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Consultation Services - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Lightbulb className="h-4 w-4" />
              <span className="text-sm font-medium">Core Service 6</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Technology <span className="text-brand-teal">Consultation</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Empowering businesses with long-term strategic clarity and innovation-driven
              leadership to navigate the complex digital landscape and drive sustainable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Strategic Innovation Roadmaps",
                description: "Architecting technology paths that align with your business vision to ensure sustainable growth.",
                icon: <Compass size={28} />,
              },
              {
                title: "Enterprise Modernization",
                description: "Transforming legacy ecosystems into agile, digital-first operations that drive efficiency.",
                icon: <Zap size={28} />,
              },
              {
                title: "AI & Automation Strategy",
                description: "Identifying high-impact opportunities for intelligent automation to streamline operations.",
                icon: <Brain size={28} />,
              },
              {
                title: "Scalable Systems Architecture",
                description: "Designing robust, secure, and future-ready technical frameworks that provide for business growth.",
                icon: <Award size={28} />,
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group">
                <Link
                  to="/services/consultation"
                  className="block bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-brand-teal/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-brand-teal/20 to-brand-teal/30 text-brand-teal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>

                  <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-brand-teal transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="relative z-10 text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="relative z-10 flex items-center text-brand-teal font-semibold group-hover:text-white transition-colors duration-300">
                    Learn more{" "}
                    <ArrowRight
                      size={18}
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12">
            <Link
              to="/services/consultation"
              className="inline-flex items-center text-brand-teal hover:text-white font-semibold text-lg transition-colors duration-300">
              View all Consultation services{" "}
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Service Process - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Rocket className="h-4 w-4" />
              <span className="text-sm font-medium">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Service <span className="text-brand-teal">Process</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              A streamlined approach to delivering high-quality solutions that exceed expectations
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group">
                  {/* Connection line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-brand-teal/30 to-transparent transform -translate-y-1/2 z-0"></div>
                  )}

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-teal/20 to-brand-teal/30 text-brand-teal rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                      {step.icon}
                    </div>

                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-teal transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Light */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Ready to Get Started?</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Business with Our{" "}
              <span className="text-gradient">Expert Services</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us today to discuss how our AI solutions, talent resources, and development
              expertise can help you achieve your business goals and stay ahead of the competition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
