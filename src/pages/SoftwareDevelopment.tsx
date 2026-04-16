import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Code,
  Database,
  Link as LinkIcon,
  Cloud,
  Cog,
  Zap,
  Shield,
  Target,
  TrendingUp,
  Rocket,
  Star,
  CheckCircle,
  Heart,
  Clock,
} from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { scrollToContact } from "@/utils/scrollToContact";

interface ServiceFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceFeature = ({ title, description, icon, delay = 0 }: ServiceFeatureProps) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}>
      <div className="bg-brand-teal/10 p-3 rounded-lg inline-flex items-center justify-center text-brand-teal w-12 h-12 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-brand-navy mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const SoftwareDevelopment = () => {
  const devServices = [
    {
      title: "Web Development",
      description:
        "Create responsive, modern web applications with cutting-edge technologies and user-centric design principles.",
      icon: <Globe size={24} />,
    },
    {
      title: "Mobile App Development",
      description:
        "Build native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      icon: <Smartphone size={24} />,
    },
    {
      title: "Custom Software Development",
      description:
        "Develop bespoke software solutions tailored to your specific business requirements and challenges.",
      icon: <Code size={24} />,
    },
    {
      title: "CRM & ERP Solutions",
      description:
        "Implement and customize enterprise systems to streamline operations and enhance business efficiency.",
      icon: <Database size={24} />,
    },
    {
      title: "API Development & Integration",
      description:
        "Create and integrate APIs to connect your systems and enable seamless data exchange between applications.",
      icon: <LinkIcon size={24} />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Harness the power of cloud technology for scalable, secure, and cost-effective infrastructure solutions.",
      icon: <Cloud size={24} />,
    },
    {
      title: "DevOps Services",
      description:
        "Implement DevOps practices to improve collaboration, increase deployment frequency, and ensure product quality.",
      icon: <Cog size={24} />,
    },
    {
      title: "Legacy System Modernization",
      description:
        "Transform outdated systems into modern, efficient applications that meet current business needs.",
      icon: <Zap size={24} />,
    },
  ];

  const benefits = [
    {
      title: "Scalable Solutions",
      description:
        "Build applications that grow with your business and handle increasing user demands",
      icon: <TrendingUp size={24} />,
    },
    {
      title: "Security First",
      description: "Implement robust security measures to protect your data and applications",
      icon: <Shield size={24} />,
    },
    {
      title: "Performance Optimized",
      description: "Create high-performance applications that deliver exceptional user experiences",
      icon: <Zap size={24} />,
    },
    {
      title: "Future-Ready",
      description:
        "Develop with modern technologies that ensure long-term maintainability and growth",
      icon: <Target size={24} />,
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "Node.js",
    "Python",
    "Django",
    "Flask",
    "Java",
    "Spring Boot",
    "C#",
    ".NET",
    "PHP",
    "Laravel",
    "Ruby",
    "Rails",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitLab CI/CD",
  ];

  const platforms = [
    "Web Applications",
    "Mobile Apps (iOS/Android)",
    "Desktop Applications",
    "Progressive Web Apps",
    "Microservices",
    "Serverless Applications",
    "E-commerce Platforms",
    "Content Management Systems",
    "Business Intelligence Tools",
    "Workflow Automation",
    "Real-time Applications",
    "IoT Solutions",
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Heart className="h-6 w-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="h-6 w-6" /> },
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
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Code className="h-4 w-4" />
              <span className="text-sm font-medium">Software Development</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand-teal/90 to-white bg-clip-text text-transparent">
              Software Development Services
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              From concept to deployment, we deliver robust software solutions tailored to your
              unique business needs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={scrollToContact}
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[160px]">
                Get Started <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                to="/services"
                className="border-white/30 text-white bg-transparent hover:bg-white hover:text-brand-navy px-8 py-3 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 rounded-lg">
                Explore All Services
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-10 animate-bounce">
          <div className="w-20 h-20 bg-brand-teal rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 animate-pulse">
          <div className="w-32 h-32 bg-brand-blue rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Stats Section - Light */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-full group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-brand-navy mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}>
              <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
                <Code className="h-4 w-4" />
                <span className="text-sm font-medium">Custom Solutions</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Building the Future with <span className="text-brand-teal">Custom Software</span>
              </h2>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Our Software Development services encompass the entire spectrum of application
                development, from initial concept and design to deployment and ongoing maintenance.
                We specialize in creating scalable, secure, and high-performance solutions that
                drive business growth and operational efficiency.
              </p>

              <p className="text-lg text-gray-300 mb-8">
                Whether you need a web application, mobile app, enterprise system, or custom
                software solution, our experienced development team uses cutting-edge technologies
                and best practices to deliver exceptional results that exceed your expectations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[160px]">
                  Get Started <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}>
              <div className="relative">
                <div className="bg-gradient-to-br from-brand-teal/20 to-brand-blue/20 rounded-2xl p-8 border border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-4">Development Expertise</h4>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-brand-teal" />
                      <span>Web Applications</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Smartphone className="h-5 w-5 text-brand-teal" />
                      <span>Mobile Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Code className="h-5 w-5 text-brand-teal" />
                      <span>Custom Software</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Database className="h-5 w-5 text-brand-teal" />
                      <span>Enterprise Solutions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Cloud className="h-5 w-5 text-brand-teal" />
                      <span>Cloud Infrastructure</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Cog className="h-5 w-5 text-brand-teal" />
                      <span>DevOps Services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - Light */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Code className="h-4 w-4" />
              <span className="text-sm font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Development <span className="text-brand-teal">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive software development solutions designed to meet your business objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devServices.map((service, index) => (
              <ServiceFeature
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="text-brand-teal">Development Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the advantages of partnering with us for your software development needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className="bg-brand-teal/20 p-3 rounded-lg text-brand-teal flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Light */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium">Technologies</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-brand-teal">Technologies</span> We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern technologies and frameworks to build robust and scalable applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-gray-50 p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}>
                <span className="text-sm font-medium text-brand-navy">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">Platforms</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Platforms We <span className="text-brand-teal">Develop For</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive development across all major platforms and application types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform}
                className="bg-white/5 backdrop-blur-sm p-4 rounded-lg shadow-md text-center hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 border border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}>
                <span className="text-sm font-medium text-white">{platform}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Light */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Rocket className="h-4 w-4" />
              <span className="text-sm font-medium">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Development <span className="text-brand-teal">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology to deliver high-quality software solutions on time and within
              budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "Understand requirements, define scope, and create detailed project roadmap",
              },
              {
                step: "02",
                title: "Design & Architecture",
                description: "Create UI/UX designs and establish technical architecture",
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build features with continuous testing and quality assurance",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Deploy to production and provide ongoing maintenance",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border border-brand-teal/30">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Get Started</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
              Ready to Build Your <span className="text-brand-teal">Software Solution</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss how our development expertise can help you create innovative software
              solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[160px]">
                Get Started
              </Link>
              <Link
                to="/services"
                className="border-2 border-brand-teal text-brand-teal bg-transparent hover:bg-brand-teal hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 min-w-[160px]">
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SoftwareDevelopment;
