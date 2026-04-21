import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Lightbulb,
  Target,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Compass,
  Layers,
  Search,
  Clock,
  Award,
  Star,
  Rocket,
  Heart,
  CheckCircle,
  Users,
  Building2,
  Globe,
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

const Consultation = () => {
  const consultationServices = [
    {
      title: "Strategic Innovation Roadmaps",
      description:
        "Architecting long-term technology paths that align with your business vision, ensuring every investment creates a competitive advantage.",
      icon: <Compass size={24} />,
    },
    {
      title: "Enterprise Modernization",
      description:
        "Transforming legacy ecosystems into agile, digital-first operations that drive efficiency and enhance global scalability.",
      icon: <Zap size={24} />,
    },
    {
      title: "AI & Automation Strategy",
      description:
        "Identifying high-impact opportunities for intelligent automation to streamline complex workflows and unlock predictive insights.",
      icon: <Brain size={24} />,
    },
    {
      title: "Scalable Systems Architecture",
      description:
        "Designing robust, secure, and future-ready technical frameworks that provide the foundation for sustainable business growth.",
      icon: <Layers size={24} />,
    },
    {
      title: "Product Lifecycle Discovery",
      description:
        "Comprehensive market research and technical validation to define strategic MVPs and long-term product evolution paths.",
      icon: <Search size={24} />,
    },
    {
      title: "Operational Performance Audit",
      description:
        "Rigorous analysis of existing systems to identify bottlenecks and implement optimizations for superior speed and reliability.",
      icon: <BarChart3 size={24} />,
    },
  ];

  const benefits = [
    {
      title: "Expert Guidance",
      description:
        "Access seasoned consultants with 10+ years of experience across diverse industries and technology stacks",
      icon: <Award size={24} />,
    },
    {
      title: "Data-Driven Decisions",
      description:
        "Make informed choices backed by comprehensive market analysis, technical assessments, and ROI projections",
      icon: <TrendingUp size={24} />,
    },
    {
      title: "Risk Reduction",
      description:
        "Minimize project failures, budget overruns, and technical debt with proactive planning and proven methodologies",
      icon: <Shield size={24} />,
    },
    {
      title: "Faster Time-to-Market",
      description:
        "Accelerate delivery timelines with the right strategy, tools, and frameworks chosen from the start",
      icon: <Zap size={24} />,
    },
  ];

  const industries = [
    "Healthcare & MedTech",
    "FinTech & Banking",
    "E-Commerce & Retail",
    "Manufacturing & Industry AI",
    "HR & Recruitment Solutions",
    "Education & Learning Tech",
    "IT & Software Services",
    "Supply Chain & Logistics",
  ];

  const stats = [
    { number: "100+", label: "Projects Consulted", icon: <Lightbulb className="h-6 w-6" /> },
    { number: "40+", label: "Industries Served", icon: <Building2 className="h-6 w-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
    { number: "3x", label: "Avg. ROI Improvement", icon: <TrendingUp className="h-6 w-6" /> },
  ];

  return (
    <PageLayout>
      {/* Hero Section - Dark */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/90 text-white py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Lightbulb className="h-4 w-4" />
              <span className="text-sm font-medium">Consultation Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand-teal/90 to-white bg-clip-text text-transparent">
              Technology Consultation
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Empowering businesses with long-term strategic clarity and innovation-driven 
              leadership to navigate the complex digital landscape and drive sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={scrollToContact}
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[160px]">
                Book a Consultation <ArrowRight className="h-5 w-5" />
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
                <Lightbulb className="h-4 w-4" />
                <span className="text-sm font-medium">Strategic Advisory</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Make Smarter <span className="text-brand-teal">Technology Decisions</span>
              </h2>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Our Technology Consultation services provide businesses with the expert
                guidance they need to navigate complex technology landscapes. Whether
                you're planning a digital transformation, evaluating AI opportunities,
                or designing a new product — our consultants bring deep domain expertise
                and a results-driven approach.
              </p>

              <p className="text-lg text-gray-300 mb-8">
                We don't just advise — we partner with your team to define actionable
                strategies, validate ideas, and ensure every technology decision aligns
                with your business goals and budget.
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
                  <h4 className="text-xl font-semibold text-white mb-4">What We Deliver</h4>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal" />
                      <span>Technology Roadmaps & Strategy</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal" />
                      <span>Feasibility & ROI Analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal" />
                      <span>Architecture & System Design</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal" />
                      <span>Vendor & Tool Evaluation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal" />
                      <span>Digital Transformation Plans</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal" />
                      <span>AI & Automation Readiness Assessment</span>
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
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium">Our Expertise</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Consultation <span className="text-brand-teal">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive advisory services tailored to your unique challenges and growth ambitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultationServices.map((service, index) => (
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
              Why Our <span className="text-brand-teal">Consultation Matters</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Partner with experts who understand both technology and business to achieve real results
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

      {/* Industries Section - Light */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">Industries We Serve</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We <span className="text-brand-teal">Specialize In</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep domain expertise across a wide range of industries and verticals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-gray-50 p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}>
                <span className="text-sm font-medium text-brand-navy">{industry}</span>
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
              <span className="text-sm font-medium">Our Approach</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Consultation <span className="text-brand-teal">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven, structured approach to delivering actionable insights and strategic clarity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description: "Deep-dive into your business goals, pain points, current technology landscape, and market position",
              },
              {
                step: "02",
                title: "Analysis & Research",
                description: "Evaluate options, benchmark against industry standards, and identify the most impactful opportunities",
              },
              {
                step: "03",
                title: "Strategy & Roadmap",
                description: "Deliver a clear, actionable roadmap with defined milestones, timelines, budgets, and KPIs",
              },
              {
                step: "04",
                title: "Implementation Support",
                description: "Hands-on guidance throughout execution to ensure seamless adoption and measurable outcomes",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 border border-white/10"
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
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Let's Talk</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
              Ready to <span className="text-brand-teal">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Book a free consultation session with our experts and discover how the right
              technology strategy can unlock your business potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[160px]">
                Book a Consultation
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

export default Consultation;
