import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageSquare,
  Smartphone,
  Globe,
  Brain,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Bot,
  Rocket,
  Star,
  CheckCircle,
  MessageCircle,
  Cpu,
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
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-teal/20 relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}>
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 w-full h-16 bg-brand-teal text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-500">
        {icon}
      </div>
      <h3 className="relative z-10 text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors duration-300">
        {title}
      </h3>
      <p className="relative z-10 text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const ChatbotDevelopment = () => {
  const chatbotServices = [
    {
      title: "Customer Service Bots",
      description:
        "Intelligent chatbots that handle customer inquiries, provide support, and resolve issues 24/7.",
      icon: <MessageSquare size={28} />,
    },
    {
      title: "Mobile App Integration",
      description:
        "Seamlessly integrate chatbots into mobile applications for enhanced user engagement.",
      icon: <Smartphone size={28} />,
    },
    {
      title: "Web Chat Solutions",
      description:
        "Deploy sophisticated web-based chatbots that enhance visitor experience on your website.",
      icon: <Globe size={28} />,
    },
    {
      title: "AI-Powered Conversations",
      description:
        "Advanced natural language processing for human-like conversational experiences.",
      icon: <Brain size={28} />,
    },
  ];

  const benefits = [
    {
      title: "24/7 Availability",
      description: "Provide round-the-clock customer support without human intervention",
      icon: <Shield size={28} />,
    },
    {
      title: "Instant Response",
      description: "Deliver immediate answers to customer queries and reduce wait times",
      icon: <Zap size={28} />,
    },
    {
      title: "Cost Effective",
      description: "Reduce support costs while maintaining high-quality customer service",
      icon: <TrendingUp size={28} />,
    },
    {
      title: "Personalized Experience",
      description: "Deliver tailored interactions based on user preferences and history",
      icon: <Target size={28} />,
    },
  ];

  const chatbotFeatures = [
    "Natural Language Understanding",
    "Multi-language Support",
    "Voice Integration",
    "Sentiment Analysis",
    "Live Chat Handoff",
    "CRM Integration",
    "Analytics Dashboard",
    "Custom Workflows",
    "FAQ Automation",
    "Lead Generation",
    "Appointment Scheduling",
    "Order Processing",
  ];

  const platforms = [
    "Facebook Messenger",
    "WhatsApp Business",
    "Telegram",
    "Slack",
    "Microsoft Teams",
    "Website Widget",
    "Mobile Apps",
    "SMS/Text",
    "Voice Assistants",
    "Email Integration",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Requirements Analysis",
      description: "Understand your business needs and chatbot objectives",
      icon: <MessageCircle className="h-6 w-6" />,
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Create conversation flows and user experience design",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      number: "03",
      title: "Development",
      description: "Build and train the chatbot with AI capabilities",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Thorough testing and deployment to production",
      icon: <CheckCircle className="h-6 w-6" />,
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
              <Bot className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Chatbots</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand-teal/90 to-white bg-clip-text text-transparent leading-tight pb-2">
              Chatbot Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Build intelligent, conversational AI chatbots that enhance customer engagement and
              automate support across all platforms
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <button
                onClick={scrollToContact}
                className="px-10 py-4 bg-brand-teal hover:bg-brand-teal/90 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[200px] text-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <Link
                to="/services"
                className="px-10 py-4 border-2 border-white/30 text-white bg-transparent hover:bg-white hover:text-brand-navy text-lg font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 min-w-[200px] text-center">
                View All Services
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

      {/* Overview Section - Light */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
                <Rocket className="h-4 w-4" />
                <span className="text-sm font-medium">Overview</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Intelligent <span className="text-gradient">Chatbot Development</span>
              </h2>

              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Our Chatbot Development services create intelligent conversational agents that
                enhance customer experience, automate support processes, and provide 24/7 assistance
                across multiple channels. We build chatbots that understand context, learn from
                interactions, and deliver personalized responses.
              </p>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                From simple FAQ bots to sophisticated AI-powered assistants, our chatbots integrate
                seamlessly with your existing systems and can handle complex conversations while
                maintaining a natural, human-like interaction style.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="px-8 py-4 bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-teal/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg min-w-[180px] text-center">
                  Get Started <ArrowRight className="ml-2 inline" size={18} />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}>
              <div className="relative">
                <div className="bg-gradient-to-br from-brand-teal to-brand-navy rounded-2xl p-1">
                  <img
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80"
                    alt="Chatbot Development"
                    className="rounded-xl w-full h-80 object-cover"
                  />
                </div>

                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="font-bold text-brand-teal">SMART CHAT</div>
                  <div className="text-sm text-gray-600">AI Conversational</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Chatbot <span className="text-brand-teal">Services</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Comprehensive chatbot solutions for different platforms and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chatbotServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group">
                <div className="block bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-brand-teal/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-brand-teal/20 to-brand-teal/30 text-brand-teal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>

                  <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-brand-teal transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="relative z-10 text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Light */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Benefits of <span className="text-gradient">Chatbot Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover how intelligent chatbots can transform your customer engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}>
                <div className="w-fit bg-brand-teal/10 p-4 rounded-2xl text-brand-teal flex-shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Advanced Features</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Chatbot <span className="text-brand-teal">Features</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Advanced features to create powerful and engaging chatbot experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {chatbotFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                className="bg-white/5 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-brand-teal/30"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}>
                <span className="text-sm font-medium text-white">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section - Light */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">Multi-Platform Support</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Supported <span className="text-brand-teal">Platforms</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Deploy chatbots across multiple channels and platforms for maximum reach
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform}
                className="bg-white/5 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-brand-teal/30"
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Chatbot <span className="text-gradient">Development Process</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Structured approach to building intelligent and effective chatbot solutions
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((process, index) => (
                <motion.div
                  key={process.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group">
                  {/* Background gradient on hover */}
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-teal/20 to-brand-teal/30 text-brand-teal rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                      {process.icon}
                    </div>

                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {process.number}
                    </div>

                    <h3 className="text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors duration-300">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{process.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Dark */}
      <section className="py-20 bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Rocket className="h-4 w-4" />
              <span className="text-sm font-medium">Ready to Get Started?</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your{" "}
              <span className="bg-gradient-to-r from-brand-teal to-brand-navy bg-clip-text text-transparent">
                Smart Chatbot
              </span>
              ?
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's create an intelligent chatbot that enhances customer experience and automates
              your support processes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Link
                to="/contact"
                className="px-10 py-4 bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg min-w-[200px] text-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link
                to="/services"
                className="px-10 py-4 border-2 border-white/30 text-white hover:bg-white hover:text-brand-navy font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm text-lg min-w-[200px] text-center">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ChatbotDevelopment;
