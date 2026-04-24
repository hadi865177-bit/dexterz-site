import { Users, Briefcase, Monitor, Globe, Users as UsersIcon, ArrowRight, CheckCircle, Clock, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const StaffAugmentationSection = () => {
  const [activeTab, setActiveTab] = useState<'teams' | 'individuals'>('teams');

  const teamBenefits = [
    {
      title: "Rapid Team Deployment",
      description: "Get fully integrated development teams up and running within 2-3 weeks with our streamlined onboarding process.",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: "Seamless Integration",
      description: "Our teams adapt to your workflows, tools, and culture, becoming an extension of your in-house development force.",
      icon: <CheckCircle className="h-5 w-5" />,
    },
    {
      title: "Scalable Resources",
      description: "Scale your team up or down based on project demands without the overhead of traditional hiring processes.",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  const individualBenefits = [
    {
      title: "Pre-Vetted Experts",
      description: "Access top 5% of global talent with proven technical skills and cultural fit for your organization.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Quick Turnaround",
      description: "Fill critical skill gaps within days with our extensive network of specialized professionals.",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      title: "Flexible Engagement",
      description: "Choose from contract, contract-to-hire, or permanent placement options based on your needs.",
      icon: <Briefcase className="h-5 w-5" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
            <UsersIcon className="h-4 w-4" />
            <span className="text-sm font-medium">Talent Solutions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-navy">
            Hire Vetted, Qualified Talent <span className="text-brand-teal">Within a Week</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Access the top 1% of global talent through our AI-powered hiring system. Whether you need entire teams or individual experts, we deliver quality professionals tailored to your needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('teams')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'teams'
                  ? 'bg-gradient-to-r from-brand-teal to-cyan-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-brand-teal'
              }`}
            >
              Hire Teams
            </button>
            <button
              onClick={() => setActiveTab('individuals')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'individuals'
                  ? 'bg-gradient-to-r from-brand-teal to-cyan-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-brand-teal'
              }`}
            >
              Hire Individuals
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'teams' ? (
            <motion.div
              key="teams"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              {teamBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-brand-teal/10 p-3 rounded-lg inline-flex items-center justify-center text-brand-teal mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="individuals"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              {individualBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-brand-teal/10 p-3 rounded-lg inline-flex items-center justify-center text-brand-teal mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 mb-12 max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8 text-center">
            Why Choose <span className="text-brand-teal">Dexterz Technologies</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Access to top 5% of talent globally",
              "AI-powered matching for perfect fit",
              "Rigorous technical assessments",
              "Cultural compatibility screening",
              "Seamless onboarding process",
              "End-to-end support & management",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="bg-brand-teal/10 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-brand-teal" />
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services/staff-augmentation"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-teal to-cyan-500 hover:from-brand-teal/90 hover:to-cyan-500/90 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Staffing Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StaffAugmentationSection;
