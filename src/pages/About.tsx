import { motion } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";
import {
  RollerCoaster,
  User,
  Users,
  Target,
  Award,
  Heart,
  Zap,
  Building2,
  Globe,
  Star,
  ArrowRight,
  TrendingUp,
  Crown,
  Briefcase,
  Lightbulb,
  UserRound,
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Shahmeer H.",
      role: "CEO & Co-founder",
      icon: <UserRound className="h-20 w-20 text-brand-teal" />, 
    },
    {
      name: "Musaffa S.",
      role: "COO & Co-founder",
      icon: <UserRound className="h-20 w-20 text-brand-teal" />,
    },
    {
      name: "Mehroze K.",
      role: "CGO",
      icon: <UserRound className="h-20 w-20 text-brand-teal" />,
    },
  ];

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const companyValues = [
    {
      icon: <Target className="h-8 w-8 text-brand-teal" />,
      title: "Innovation",
      description:
        "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
    },
    {
      icon: <Award className="h-8 w-8 text-brand-teal" />,
      title: "Excellence",
      description:
        "We set high standards for our work and strive to exceed client expectations in everything we do.",
    },
    {
      icon: <Users className="h-8 w-8 text-brand-teal" />,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, both internally and with our clients, to achieve the best results.",
    },
    {
      icon: <Heart className="h-8 w-8 text-brand-teal" />,
      title: "Integrity",
      description:
        "We operate with transparency, honesty, and ethical conduct in all our business dealings.",
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
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Building2 className="h-4 w-4" />
              <span className="text-sm font-medium">About Us</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 pb-4 bg-gradient-to-r from-white via-brand-teal/90 to-white bg-clip-text text-transparent">
              About Dexterz Technologies
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              We build intelligent software solutions that empower businesses to thrive in the
              digital age.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-10 animate-bounce">
          <div className="w-20 h-20 bg-brand-teal rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 animate-pulse">
          <div className="w-32 h-32 bg-brand-teal rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Our Story Section - Light */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6 text-brand-navy">
                Our <span className="text-brand-teal">Story</span>
              </h2>

              <p className="text-gray-700 mb-4">
                Founded in 2024, Dexterz Technologies began with a vision to bridge the gap between
                advanced AI technologies and practical business applications. Our founders, with
                backgrounds in software engineering, data science, and enterprise systems, saw the potential for 
                AI/ML, Full Stack development, DevOps, and Microsoft Dynamics 365 to transform businesses across industries.
              </p>

              <p className="text-gray-700 mb-4">
                What started as a small team of passionate technologists has grown into a
                comprehensive software company offering cutting-edge AI solutions, custom software
                development, and specialized staff augmentation services to clients worldwide.
              </p>

              <p className="text-gray-700">
                Today, we're proud to have helped over 100 companies across 25 countries implement
                AI-powered solutions, DevOps pipelines, and Microsoft Dynamics 365 systems that drive growth, efficiency, and innovation.
              </p>
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
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
                    alt="Dexterz Technologies Team"
                    className="rounded-xl"
                  />
                </div>

                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="font-bold text-brand-teal">EST. 2024</div>
                  <div className="text-sm text-gray-600">Innovation Journey</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium">Our Foundation</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Mission & <span className="text-brand-teal">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in creating an environment where innovation thrives and people can do their
              best work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <motion.div
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}>
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses through intelligent technology solutions that solve real-world
                problems, drive growth, and create value. We aim to make advanced AI, Data Science, Full Stack development, 
                DevOps, and Microsoft Dynamics 365 capabilities accessible and practical for companies of all sizes.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}>
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the premier provider of AI-powered software solutions and tech talent,
                recognized globally for our innovation, expertise in Data Science, AI/ML, Full Stack, DevOps, and Microsoft Dynamics 365, 
                and the measurable business impact we create for our clients.
              </p>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}>
              <h3 className="text-xl font-bold text-white mb-6">Our Core Values</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {companyValues.map((value, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-brand-teal mb-2">{value.title}</h4>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section - Light */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-navy">
              Our <span className="text-brand-teal">Leadership</span> Team
            </h2>
            <p className="text-lg text-gray-600">
              Meet the experts leading our innovation and growth.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center w-60"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className="relative mb-6 mx-auto w-48 h-48">
                  {/* Background ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-teal to-blue-500 transform rotate-6"></div>

                  {/* Profile Icon Avatar */}
                  <div className="relative z-10 w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    {member.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl text-brand-navy mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats Section - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Our Impact</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="text-brand-teal">Impact</span> in Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable results we've delivered for our clients worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}>
              <div className="text-brand-teal text-4xl font-bold mb-2">100+</div>
              <div className="text-gray-300">AI Projects Delivered</div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}>
              <div className="text-brand-teal text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-300">Skilled Developers</div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}>
              <div className="text-brand-teal text-4xl font-bold mb-2">25+</div>
              <div className="text-gray-300">Countries Served</div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}>
              <div className="text-brand-teal text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Light */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-brand-navy">
              Ready to Work with <span className="text-brand-teal">Dexterz Technologies</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join the companies that have transformed their businesses with our AI solutions and
              expert development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 bg-brand-teal text-white font-medium rounded-lg hover:bg-brand-teal/90 transition-colors">
                  Contact Us
                  <ArrowRight className="inline ml-2 h-4 w-4" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/services"
                  className="inline-block px-6 py-3 bg-white border border-gray-300 text-brand-navy font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Explore Services
                  <ArrowRight className="inline ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
