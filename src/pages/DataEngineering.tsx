import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Database,
  Code,
  Zap,
  Shield,
  Target,
  TrendingUp,
  CheckCircle,
  Heart,
  Clock,
  Star,
  Rocket,
  GitBranch,
  Server,
  BarChart3,
  Workflow,
  CloudCog,
  FileJson,
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

const DataEngineering = () => {
  const dataServices = [
    {
      title: "Data Pipeline Development",
      description:
        "Build robust, scalable ETL/ELT pipelines to automate data ingestion, transformation, and loading processes.",
      icon: <GitBranch size={24} />,
    },
    {
      title: "Data Warehouse Design",
      description:
        "Design and implement enterprise-grade data warehouses optimized for analytics and business intelligence.",
      icon: <Database size={24} />,
    },
    {
      title: "Real-time Data Streaming",
      description:
        "Implement real-time data streaming solutions using Kafka, Kinesis, and other streaming technologies.",
      icon: <Zap size={24} />,
    },
    {
      title: "Data Lake Architecture",
      description:
        "Build scalable data lakes to store structured and unstructured data for advanced analytics and ML.",
      icon: <Server size={24} />,
    },
    {
      title: "Data Quality & Governance",
      description:
        "Implement data quality frameworks and governance policies to ensure data accuracy and compliance.",
      icon: <Shield size={24} />,
    },
    {
      title: "Cloud Data Solutions",
      description:
        "Leverage AWS, Azure, and GCP cloud platforms for scalable and cost-effective data infrastructure.",
      icon: <CloudCog size={24} />,
    },
    {
      title: "Data Integration",
      description:
        "Integrate data from multiple sources including APIs, databases, and third-party applications.",
      icon: <Workflow size={24} />,
    },
    {
      title: "Data Modeling & Optimization",
      description:
        "Design efficient data models and optimize query performance for faster insights and reporting.",
      icon: <BarChart3 size={24} />,
    },
  ];

  const benefits = [
    {
      title: "Scalable Infrastructure",
      description:
        "Build data infrastructure that scales seamlessly with your growing data volumes and business needs",
      icon: <TrendingUp size={24} />,
    },
    {
      title: "Data Security",
      description: "Implement robust security measures to protect sensitive data and ensure compliance",
      icon: <Shield size={24} />,
    },
    {
      title: "High Performance",
      description: "Optimize data pipelines and queries for maximum performance and efficiency",
      icon: <Zap size={24} />,
    },
    {
      title: "Future-Ready",
      description:
        "Build with modern technologies that ensure long-term maintainability and adaptability",
      icon: <Target size={24} />,
    },
  ];

  const technologies = [
    "Apache Spark",
    "Apache Kafka",
    "Apache Airflow",
    "Databricks",
    "Snowflake",
    "AWS Redshift",
    "Google BigQuery",
    "Azure Synapse",
    "PostgreSQL",
    "MongoDB",
    "Cassandra",
    "Redis",
    "Elasticsearch",
    "dbt",
    "Fivetran",
    "Airbyte",
    "Python",
    "Scala",
    "SQL",
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS Glue",
    "AWS Lambda",
    "Azure Data Factory",
    "GCP Dataflow",
    "Apache Flink",
  ];

  const platforms = [
    "AWS Data Services",
    "Azure Data Platform",
    "Google Cloud Platform",
    "Snowflake Data Cloud",
    "Databricks Lakehouse",
    "Apache Hadoop",
    "Apache Spark",
    "Kafka Streaming",
    "Data Warehouses",
    "Data Lakes",
    "Real-time Analytics",
    "Batch Processing",
  ];

  const stats = [
    { number: "50+", label: "Data Projects", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "30+", label: "Happy Clients", icon: <Heart className="h-6 w-6" /> },
    { number: "99.9%", label: "Pipeline Uptime", icon: <Shield className="h-6 w-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Clock className="h-6 w-6" /> },
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
              <Database className="h-4 w-4" />
              <span className="text-sm font-medium">Data Engineering</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand-teal/90 to-white bg-clip-text text-transparent">
              Data Engineering Services
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Build scalable data pipelines, warehouses, and ETL processes for enterprise-grade data infrastructure
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
                <Database className="h-4 w-4" />
                <span className="text-sm font-medium">Enterprise Data Solutions</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Building Robust <span className="text-brand-teal">Data Infrastructure</span>
              </h2>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Our Data Engineering services encompass the complete data lifecycle, from ingestion and transformation to storage and analytics. We specialize in creating scalable, reliable, and high-performance data infrastructure that powers data-driven decision making.
              </p>

              <p className="text-lg text-gray-300 mb-8">
                Whether you need to build data pipelines, implement a data warehouse, or migrate to cloud-based data platforms, our experienced data engineers use cutting-edge technologies and best practices to deliver solutions that scale with your business.
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
                  <h4 className="text-xl font-semibold text-white mb-4">Data Engineering Expertise</h4>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-center space-x-2">
                      <GitBranch className="h-5 w-5 text-brand-teal" />
                      <span>ETL/ELT Pipelines</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Database className="h-5 w-5 text-brand-teal" />
                      <span>Data Warehousing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-brand-teal" />
                      <span>Real-time Streaming</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Server className="h-5 w-5 text-brand-teal" />
                      <span>Data Lake Architecture</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CloudCog className="h-5 w-5 text-brand-teal" />
                      <span>Cloud Data Platforms</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-brand-teal" />
                      <span>Data Governance</span>
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
              <Database className="h-4 w-4" />
              <span className="text-sm font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Data Engineering <span className="text-brand-teal">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive data engineering solutions designed to transform your data infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Benefits Section - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="text-brand-teal">Data Engineering Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the advantages of partnering with us for your data engineering needs
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
              Modern data engineering tools and platforms to build robust and scalable data infrastructure
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
              <CloudCog className="h-4 w-4" />
              <span className="text-sm font-medium">Platforms</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Platforms We <span className="text-brand-teal">Work With</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive data engineering across all major cloud platforms and data technologies
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
              Our Data Engineering <span className="text-brand-teal">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology to deliver high-quality data solutions on time and within budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Assessment & Planning",
                description:
                  "Analyze current data landscape, identify requirements, and create detailed roadmap",
              },
              {
                step: "02",
                title: "Architecture Design",
                description: "Design scalable data architecture and select appropriate technologies",
              },
              {
                step: "03",
                title: "Implementation & Testing",
                description: "Build pipelines with continuous testing and quality validation",
              },
              {
                step: "04",
                title: "Deployment & Monitoring",
                description: "Deploy to production with 24/7 monitoring and optimization",
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
              Ready to Transform Your <span className="text-brand-teal">Data Infrastructure</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss how our data engineering expertise can help you build scalable, reliable data solutions that power your business insights.
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

export default DataEngineering;
