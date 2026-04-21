import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Briefcase,
  Monitor,
  Globe,
  Search,
  Clock,
  Shield,
  TrendingUp,
  Zap,
  Target,
  Award,
  Rocket,
  Star,
  CheckCircle,
  Heart,
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

const StaffAugmentation = () => {
  const staffingServices = [
    {
      title: "Embedded Engineering Squads",
      description:
        "High-performance development teams that fully integrate with your internal R&D, adopting your tools, culture, and delivery standards for true synergy.",
      icon: <Users size={24} />,
    },
    {
      title: "Executive Talent Advisory",
      description:
        "Strategic talent consulting for large-scale digital initiatives, identifying key technical leaders and domain specialists who align with your long-term roadmap.",
      icon: <Briefcase size={24} />,
    },
    {
      title: "Global Capability Centers (GCC)",
      description:
        "Setting up managed technical centers that act as a seamless extension of your global footprint, ensuring standardized quality and cross-border innovation.",
      icon: <Monitor size={24} />,
    },
    {
      title: "Niche Domain Augmentation",
      description:
        "Infusing mission-critical projects with rare expertise in AI, Cloud Governance, or Fintech compliance to bridge specialized knowledge gaps.",
      icon: <Globe size={24} />,
    },
    {
      title: "Engineering Culture Synergy",
      description:
        "Beyond technical skills, we provide professionals who match your organizational values and operational maturity, ensuring low friction and high output.",
      icon: <Search size={24} />,
    },
    {
      title: "Strategic Mission Units",
      description:
        "Agile task forces assembled for rapid deployment on high-stakes, time-sensitive projects with defined performance benchmarks and strategic goals.",
      icon: <Clock size={24} />,
    },
  ];

  const benefits = [
    {
      title: "Rapid Scaling",
      description:
        "Scale your team up or down quickly based on project requirements and business needs",
      icon: <Zap size={24} />,
    },
    {
      title: "Cost Efficiency",
      description: "Reduce hiring costs, overhead, and training expenses while maintaining quality",
      icon: <TrendingUp size={24} />,
    },
    {
      title: "Expert Talent",
      description: "Access to pre-vetted, experienced professionals with proven track records",
      icon: <Award size={24} />,
    },
    {
      title: "Risk Mitigation",
      description: "Minimize hiring risks with our comprehensive screening and guarantee processes",
      icon: <Shield size={24} />,
    },
  ];

  const roles = [
    "Frontend Developers",
    "Backend Developers",
    "Full-Stack Developers",
    "Mobile Developers",
    "DevOps Engineers",
    "Data Scientists",
    "UI/UX Designers",
    "Project Managers",
    "QA Engineers",
    "System Architects",
    "Cloud Engineers",
    "AI/ML Engineers",
  ];

  const technologies = [
    "React",
    "Node.js",
    "Python",
    "Java",
    "C#",
    "PHP",
    "Ruby",
    "Go",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Elasticsearch",
    "TensorFlow",
    "PyTorch",
  ];

  const stats = [
    { number: "200+", label: "Skilled Developers", icon: <Users className="h-6 w-6" /> },
    { number: "50+", label: "Companies Served", icon: <Briefcase className="h-6 w-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
    { number: "2-3", label: "Weeks Average Time", icon: <Clock className="h-6 w-6" /> },
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
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Staff Augmentation</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand-teal/90 to-white bg-clip-text text-transparent">
              Staff Augmentation
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Empowering global enterprises by integrating world-class engineering culture and 
              specialized expertise directly into their core development ecosystems.
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
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">Talent Solutions</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                The Embedded <span className="text-brand-teal">Expert Model</span>
              </h2>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We don't just provide talent; we integrate technical excellence directly into your 
                organizational fabric. For our enterprise partners, we offer an **Embedded Expert 
                Model** where our high-performing engineers become a permanent, dedicated 
                extension of your in-house departments. 
              </p>

              <p className="text-lg text-gray-600 mb-8">
                By aligning with your internal SDLC, communication protocols, and cultural values, 
                we ensure that our teams operate with the same passion and focus as your own 
                full-time employees. This deep integration allows us to handle high-stakes, 
                large-scale projects for global industry leaders who require precision, 
                security, and long-term scalability.
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
                  <h4 className="text-xl font-semibold text-white mb-4">Our Expertise</h4>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-brand-teal" />
                      <span>Tech Team Building</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-brand-teal" />
                      <span>Specialized Recruitment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Monitor className="h-5 w-5 text-brand-teal" />
                      <span>Remote Team Management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-brand-teal" />
                      <span>Global Talent Pool</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Search className="h-5 w-5 text-brand-teal" />
                      <span>Pre-vetted Candidates</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-brand-teal" />
                      <span>Quick Turnaround</span>
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
              <Briefcase className="h-4 w-4" />
              <span className="text-sm font-medium">Our Solutions</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Staffing <span className="text-brand-teal">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive staffing and recruitment services designed to meet your unique business
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffingServices.map((service, index) => (
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
              Why Choose Our <span className="text-brand-teal">Staffing Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the advantages of partnering with us for your staffing and recruitment needs
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

      {/* Roles Section - Light */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Roles We Cover</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Roles We <span className="text-brand-teal">Specialize In</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access to a diverse pool of skilled professionals across all technology domains
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={role}
                className="bg-gray-50 p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}>
                <span className="text-sm font-medium text-brand-navy">{role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium">Technologies</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-brand-teal">Technologies</span> Our Experts Master
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our professionals are proficient in the latest technologies and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-white/5 backdrop-blur-sm p-4 rounded-lg shadow-md text-center hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 border border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}>
                <span className="text-sm font-medium text-white">{tech}</span>
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
              Our Recruitment <span className="text-brand-teal">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to finding and placing the perfect talent for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Cultural & Operational Audit",
                description: "We analyze your internal engineering culture, tools, and communication styles to ensure our experts sync perfectly from day one.",
              },
              {
                step: "02",
                title: "Synergy Selection",
                description: "Sourcing domain-specific engineers who not only possess the skills but also the mindset to thrive within your specific enterprise ecosystem.",
              },
              {
                step: "03",
                title: "Ecosystem Integration",
                description: "Our experts join your internal channels, stand-ups, and sprint planning, becoming indistinguishable from your core in-house team.",
              },
              {
                step: "04",
                title: "Managed Scaling & Success",
                description: "Ongoing partnership reviews and performance optimization to ensure our integrated capacity evolves with your business growth.",
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
              Ready to Build Your <span className="text-brand-teal">Dream Team</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss how our staffing solutions can help you scale your team, fill critical
              roles, and achieve your business objectives.
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

export default StaffAugmentation;
