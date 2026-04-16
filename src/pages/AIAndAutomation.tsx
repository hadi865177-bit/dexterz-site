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
  Zap,
  Cpu,
  Target,
  TrendingUp,
  Rocket,
  Star,
  CheckCircle,
  Globe,
  Users,
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

const AIAndAutomation = () => {
  const aiServices = [
    {
      title: "AI & ML Integrations",
      description:
        "Seamlessly integrate cutting-edge AI and machine learning capabilities into your existing systems to enhance functionality and decision-making processes.",
      icon: <Brain size={24} />,
    },
    {
      title: "Intelligent Automation",
      description:
        "Automate routine tasks and complex workflows with AI systems that learn, adapt, and improve over time to maximize efficiency.",
      icon: <Bot size={24} />,
    },
    {
      title: "Chatbot Development",
      description:
        "Create intelligent conversational agents that engage with customers, answer questions, and provide 24/7 assistance across multiple channels.",
      icon: <MessageSquare size={24} />,
    },
    {
      title: "Data Processing & Analytics",
      description:
        "Process and analyze large datasets with AI-powered tools that extract valuable insights, patterns, and actionable intelligence.",
      icon: <Database size={24} />,
    },
    {
      title: "Predictive Analytics",
      description:
        "Leverage AI to forecast trends, behaviors, and outcomes based on historical data patterns for strategic decision-making.",
      icon: <ChartLine size={24} />,
    },
    {
      title: "AI-Powered Testing",
      description:
        "Ensure software quality with AI-driven testing methodologies that identify issues before they impact users.",
      icon: <Bug size={24} />,
    },
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description:
        "Automate repetitive tasks and streamline workflows to boost productivity by up to 60%",
      icon: <Zap size={24} />,
    },
    {
      title: "Enhanced Decision Making",
      description:
        "Leverage AI insights to make data-driven decisions with higher accuracy and confidence",
      icon: <Target size={24} />,
    },
    {
      title: "Cost Reduction",
      description:
        "Reduce operational costs through intelligent automation and optimized resource allocation",
      icon: <TrendingUp size={24} />,
    },
    {
      title: "24/7 Availability",
      description: "Provide round-the-clock service and support through AI-powered systems",
      icon: <Cpu size={24} />,
    },
  ];

  const technologies = [
    "OpenAI GPT Models",
    "TensorFlow",
    "PyTorch",
    "Natural Language Processing",
    "Computer Vision",
    "Machine Learning",
    "Deep Learning",
    "Neural Networks",
    "Predictive Modeling",
    "Data Mining",
    "Automated Testing",
    "Process Automation",
  ];

  const stats = [
    { number: "60%", label: "Efficiency Boost", icon: <Zap className="h-6 w-6" /> },
    { number: "24/7", label: "AI Availability", icon: <Cpu className="h-6 w-6" /> },
    { number: "95%", label: "Accuracy Rate", icon: <Target className="h-6 w-6" /> },
    { number: "50+", label: "AI Projects", icon: <Brain className="h-6 w-6" /> },
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
              <Brain className="h-4 w-4" />
              <span className="text-sm font-medium">AI & Automation</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand-teal/90 to-white bg-clip-text text-transparent">
              AI & Automation Services
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your business with intelligent automation and cutting-edge AI solutions that
              drive growth and efficiency
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
                <Brain className="h-4 w-4" />
                <span className="text-sm font-medium">AI Innovation</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Harness the Power of{" "}
                <span className="text-brand-teal">Artificial Intelligence</span>
              </h2>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Our AI & Automation services empower businesses to leverage the latest advancements
                in artificial intelligence and machine learning. We help organizations automate
                complex processes, gain valuable insights from data, and create intelligent systems
                that adapt and improve over time.
              </p>

              <p className="text-lg text-gray-300 mb-8">
                From intelligent chatbots that enhance customer experience to predictive analytics
                that drive strategic decisions, our AI solutions are designed to deliver measurable
                business impact and competitive advantage.
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
                  <h4 className="text-xl font-semibold text-white mb-4">AI Capabilities</h4>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-center space-x-2">
                      <Brain className="h-5 w-5 text-brand-teal" />
                      <span>Machine Learning Models</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Bot className="h-5 w-5 text-brand-teal" />
                      <span>Intelligent Automation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MessageSquare className="h-5 w-5 text-brand-teal" />
                      <span>Natural Language Processing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Database className="h-5 w-5 text-brand-teal" />
                      <span>Data Analytics & Insights</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ChartLine className="h-5 w-5 text-brand-teal" />
                      <span>Predictive Analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Bug className="h-5 w-5 text-brand-teal" />
                      <span>AI-Powered Testing</span>
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
              <Bot className="h-4 w-4" />
              <span className="text-sm font-medium">Our Solutions</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI & Automation <span className="text-brand-teal">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI services designed to transform your business operations and drive
              innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
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
              Why Choose Our <span className="text-brand-teal">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the transformative benefits of implementing AI and automation in your
              business
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
              <Cpu className="h-4 w-4" />
              <span className="text-sm font-medium">Technologies</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              AI <span className="text-brand-teal">Technologies</span> We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks to build robust AI solutions
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

      {/* Process Section - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Rocket className="h-4 w-4" />
              <span className="text-sm font-medium">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our AI Implementation <span className="text-brand-teal">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A systematic approach to delivering successful AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Understand your business needs and identify AI opportunities",
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description: "Develop a comprehensive AI implementation roadmap",
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build and rigorously test AI models and systems",
              },
              {
                step: "04",
                title: "Deployment & Optimization",
                description: "Deploy solutions and continuously optimize performance",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className="w-16 h-16 bg-brand-teal/20 text-brand-teal rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border border-brand-teal/30">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300 text-sm">{process.description}</p>
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
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Get Started</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
              Ready to Transform Your Business with{" "}
              <span className="text-brand-teal">AI & Automation</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss how our AI solutions can help you automate processes, gain insights, and
              achieve your business goals.
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

export default AIAndAutomation;
