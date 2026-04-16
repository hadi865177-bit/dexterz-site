import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Database,
  BarChart3,
  Search,
  Filter,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Bot,
  Rocket,
  Star,
  CheckCircle,
  Brain,
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

const IntelligentDataProcessing = () => {
  const dataServices = [
    {
      title: "Big Data Analytics",
      description:
        "Process and analyze large datasets to extract meaningful insights and patterns for strategic decision-making.",
      icon: <Database size={28} />,
    },
    {
      title: "Predictive Analytics",
      description:
        "Use machine learning algorithms to forecast trends, behaviors, and outcomes based on historical data.",
      icon: <BarChart3 size={28} />,
    },
    {
      title: "Data Mining & Discovery",
      description:
        "Discover hidden patterns, correlations, and valuable insights from complex datasets.",
      icon: <Search size={28} />,
    },
    {
      title: "Real-time Processing",
      description:
        "Implement streaming data processing solutions for real-time analytics and decision support.",
      icon: <Filter size={28} />,
    },
  ];

  const benefits = [
    {
      title: "Data-Driven Insights",
      description: "Transform raw data into actionable business intelligence",
      icon: <Target size={28} />,
    },
    {
      title: "Faster Processing",
      description: "Process large volumes of data quickly and efficiently",
      icon: <Zap size={28} />,
    },
    {
      title: "Better Decision Making",
      description: "Make informed decisions based on comprehensive data analysis",
      icon: <TrendingUp size={28} />,
    },
    {
      title: "Secure Processing",
      description: "Ensure data privacy and security throughout the processing pipeline",
      icon: <Shield size={28} />,
    },
  ];

  const dataTypes = [
    "Structured Data",
    "Unstructured Data",
    "Time Series Data",
    "Geospatial Data",
    "Text Analytics",
    "Image Recognition",
    "Sensor Data",
    "Social Media Data",
    "Financial Data",
    "Healthcare Data",
    "IoT Data",
    "Web Analytics",
  ];

  const technologies = [
    "Apache Spark",
    "Hadoop",
    "Apache Kafka",
    "TensorFlow",
    "PyTorch",
    "Pandas",
    "NumPy",
    "Elasticsearch",
    "MongoDB",
    "PostgreSQL",
    "AWS Analytics",
    "Google Cloud AI",
    "Azure AI",
    "Databricks",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Data Assessment",
      description: "Evaluate data sources, quality, and processing requirements",
      icon: <Database className="h-6 w-6" />,
    },
    {
      number: "02",
      title: "Strategy Design",
      description: "Design data processing architecture and analytics strategy",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      number: "03",
      title: "Implementation",
      description: "Deploy data processing pipelines and analytics systems",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      number: "04",
      title: "Optimization",
      description: "Monitor performance and continuously improve processing efficiency",
      icon: <TrendingUp className="h-6 w-6" />,
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
              <Brain className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Analytics</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand-teal/90 to-white bg-clip-text text-transparent">
              Intelligent Data Processing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform raw data into actionable insights with advanced AI-powered processing and
              analytics
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

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6">
                Transform Data into <span className="text-gradient">Intelligent Insights</span>
              </h2>

              <p className="text-gray-700 mb-4">
                Our Intelligent Data Processing services help organizations harness the power of
                their data through advanced AI and machine learning techniques. We process large
                volumes of structured and unstructured data to uncover hidden patterns, trends, and
                insights that drive strategic business decisions.
              </p>

              <p className="text-gray-700 mb-6">
                From real-time analytics to predictive modeling, our data processing solutions
                provide the intelligence you need to stay competitive in today's data-driven
                business environment. We handle everything from data ingestion to visualization and
                reporting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center px-6 py-3 bg-brand-teal text-white font-medium rounded-lg hover:bg-brand-teal/90 transition-colors">
                  Get Started <ArrowRight className="ml-2" size={16} />
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
                <div className="bg-gradient-to-br from-brand-teal to-brand-navy rounded-2xl p-1">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                    alt="Data Processing"
                    className="rounded-xl"
                  />
                </div>

                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="font-bold text-brand-teal">SMART DATA</div>
                  <div className="text-sm text-gray-600">AI Processing</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Our Data Processing <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive data processing solutions for extracting maximum value from your data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataServices.map((service, index) => (
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

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Benefits of Intelligent <span className="text-gradient">Data Processing</span>
            </h2>
            <p className="text-lg text-gray-600">
              Discover how AI-powered data processing can transform your business intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className="bg-brand-teal/10 p-3 rounded-lg text-brand-teal flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Types Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Data Types We <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive processing capabilities for various data formats and sources
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {dataTypes.map((type, index) => (
              <motion.div
                key={type}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}>
                <span className="text-sm font-medium text-brand-navy">{type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-gradient">Technologies</span> We Use
            </h2>
            <p className="text-lg text-gray-600">
              Advanced tools and platforms for scalable data processing solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-gray-50 p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
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

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Our Data Processing <span className="text-gradient">Methodology</span>
            </h2>
            <p className="text-lg text-gray-600">
              Systematic approach to extracting maximum value from your data assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Data Assessment",
                description: "Analyze data sources, quality, and processing requirements",
              },
              {
                step: "02",
                title: "Pipeline Design",
                description: "Design efficient data processing pipelines and workflows",
              },
              {
                step: "03",
                title: "AI Implementation",
                description: "Apply machine learning algorithms for intelligent processing",
              },
              {
                step: "04",
                title: "Insights Delivery",
                description: "Generate reports, visualizations, and actionable insights",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Unlock Your{" "}
              <span className="bg-gradient-to-r from-brand-teal to-brand-navy bg-clip-text text-transparent">
                Data's Potential
              </span>
              ?
            </h2>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's transform your data into intelligent insights that drive strategic business
              decisions and competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-colors">
                Get Started
              </Link>
              <Link
                to="/services/ai"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors">
                Back to AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default IntelligentDataProcessing;
