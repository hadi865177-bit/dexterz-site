import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Smartphone,
  Tablet,
  Monitor,
  Zap,
  Shield,
  Target,
  TrendingUp,
  Code,
  Palette,
  Smartphone as Phone,
  Globe,
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

const MobileDevelopment = () => {
  const mobileServices = [
    {
      title: "iOS App Development",
      description:
        "Create native iOS applications with Swift and SwiftUI for iPhone and iPad with seamless user experiences.",
      icon: <Smartphone size={24} />,
    },
    {
      title: "Android App Development",
      description:
        "Build native Android applications using Kotlin and Jetpack Compose for optimal performance and user engagement.",
      icon: <Phone size={24} />,
    },
    {
      title: "Cross-Platform Development",
      description:
        "Develop apps that work seamlessly across iOS and Android using React Native, Flutter, or Xamarin.",
      icon: <Globe size={24} />,
    },
    {
      title: "Progressive Web Apps (PWA)",
      description:
        "Create web applications that provide native app-like experiences with offline capabilities and push notifications.",
      icon: <Monitor size={24} />,
    },
    {
      title: "App UI/UX Design",
      description:
        "Design intuitive and engaging user interfaces that enhance user experience and drive app adoption.",
      icon: <Palette size={24} />,
    },
    {
      title: "App Maintenance & Updates",
      description:
        "Provide ongoing support, maintenance, and regular updates to keep your mobile apps current and secure.",
      icon: <Code size={24} />,
    },
    {
      title: "App Store Optimization",
      description:
        "Optimize your app for better visibility and higher rankings in the App Store and Google Play Store.",
      icon: <Target size={24} />,
    },
    {
      title: "Mobile App Testing",
      description:
        "Comprehensive testing across devices and platforms to ensure quality and performance.",
      icon: <Shield size={24} />,
    },
  ];

  const benefits = [
    {
      title: "Enhanced User Experience",
      description:
        "Create intuitive, responsive mobile experiences that keep users engaged and satisfied",
      icon: <TrendingUp size={24} />,
    },
    {
      title: "Increased Accessibility",
      description:
        "Reach users anywhere, anytime with mobile apps that work offline and sync when connected",
      icon: <Globe size={24} />,
    },
    {
      title: "Better Performance",
      description:
        "Optimize apps for speed, battery efficiency, and smooth performance across devices",
      icon: <Zap size={24} />,
    },
    {
      title: "Security & Privacy",
      description: "Implement robust security measures to protect user data and ensure compliance",
      icon: <Shield size={24} />,
    },
  ];

  const technologies = [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Xamarin",
    "Ionic",
    "Cordova",
    "Firebase",
    "AWS Mobile",
    "Google Cloud",
    "MongoDB",
    "SQLite",
    "Realm",
    "Redux",
    "MobX",
    "GraphQL",
    "REST APIs",
    "Push Notifications",
    "Analytics",
  ];

  const platforms = [
    "iOS (iPhone & iPad)",
    "Android",
    "Cross-Platform",
    "Progressive Web Apps",
    "Wearable Apps",
    "Smart TV Apps",
    "Enterprise Mobile Apps",
    "E-commerce Apps",
    "Social Media Apps",
    "Gaming Apps",
    "Utility Apps",
    "Business Apps",
  ];

  const stats = [
    { number: "50+", label: "Apps Developed", icon: <Smartphone className="h-6 w-6" /> },
    { number: "1M+", label: "App Downloads", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "4.8★", label: "Average Rating", icon: <Star className="h-6 w-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <Heart className="h-6 w-6" /> },
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
              <Smartphone className="h-4 w-4" />
              <span className="text-sm font-medium">Mobile Development</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand-teal/90 to-white bg-clip-text text-transparent">
              Mobile App Development
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Create powerful, engaging mobile applications that connect with your users and drive
              business growth
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
                <Smartphone className="h-4 w-4" />
                <span className="text-sm font-medium">Mobile Solutions</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Mobile Apps That <span className="text-brand-teal">Transform</span> Your Business
              </h2>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Our Mobile App Development services help businesses create powerful, user-friendly
                applications that drive engagement and deliver measurable results. We specialize in
                native and cross-platform development for iOS and Android, ensuring your app reaches
                the widest possible audience.
              </p>

              <p className="text-lg text-gray-300 mb-8">
                From concept to launch and beyond, our experienced mobile development team uses
                cutting-edge technologies and best practices to create apps that not only look great
                but also perform exceptionally well and provide real value to your users.
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
                  <h4 className="text-xl font-semibold text-white mb-4">Mobile Expertise</h4>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-center space-x-2">
                      <Smartphone className="h-5 w-5 text-brand-teal" />
                      <span>iOS Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-brand-teal" />
                      <span>Android Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-brand-teal" />
                      <span>Cross-Platform Apps</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Monitor className="h-5 w-5 text-brand-teal" />
                      <span>Progressive Web Apps</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Palette className="h-5 w-5 text-brand-teal" />
                      <span>UI/UX Design</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Code className="h-5 w-5 text-brand-teal" />
                      <span>App Maintenance</span>
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
              Our Mobile Development <span className="text-brand-teal">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive mobile app development solutions for all platforms and business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => (
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
              Why Choose Our <span className="text-brand-teal">Mobile Development</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the advantages of mobile apps for your business and users
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
              Modern mobile development technologies and frameworks for optimal performance
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
              Comprehensive mobile development across all major platforms and device types
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
              Our Mobile Development <span className="text-brand-teal">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to delivering successful mobile applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "Understand your business goals and define the app strategy",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Create wireframes, UI/UX designs, and interactive prototypes",
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build the app with continuous testing and quality assurance",
              },
              {
                step: "04",
                title: "Launch & Maintenance",
                description: "Deploy to app stores and provide ongoing support",
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
              Ready to Build Your <span className="text-brand-teal">Mobile App</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss how our mobile development expertise can help you create engaging apps
              that connect with your users and drive business growth.
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

export default MobileDevelopment;
