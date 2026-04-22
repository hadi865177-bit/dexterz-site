import { motion } from "framer-motion";
import { ArrowRight, Zap, Rocket, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { scrollToContact } from "@/utils/scrollToContact";
import HighlightedText from "../ui/HighlightedText";

const HeroSection = () => {
  return (
    <section className="bg-white text-gray-900 py-24 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/20">
                <Zap className="h-4 w-4" />
                <span className="text-sm font-medium">Innovation First</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-800">
                Accelerate Growth with <span className="text-brand-teal">AI Solutions</span> &{" "}
                <span className="text-brand-teal">Expert Teams</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                <HighlightedText highlightColor="#1ABC9C" className="font-bold text-brand-teal">
                  Dexterz Technologies
                </HighlightedText>{" "}
                transforms businesses with cutting-edge Data Science, AI/ML engineering, Full Stack development, 
                DevOps automation, and Microsoft Dynamics 365 solutions that drive measurable results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={scrollToContact}>
                  <div className="flex items-center">
                    Get Started <ArrowRight className="ml-2" size={20} />
                  </div>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:text-brand-navy px-8 py-3 text-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="relative max-w-lg mx-auto">
              <div className="bg-gradient-to-tr from-brand-teal to-brand-teal/30 rounded-2xl p-1 shadow-xl">
                <div className="bg-white rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="AI Technology Dashboard"
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-brand-teal text-white px-4 py-3 rounded-lg shadow-lg hover:bg-brand-teal/90 transition-all duration-300 transform hover:scale-105 cursor-pointer border border-brand-teal/20">
                <div className="text-xs font-bold">AI POWERED</div>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                  <span className="text-xs">Active</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white backdrop-blur-sm text-brand-navy px-4 py-3 rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                <div className="text-xs font-bold">FUTURE READY</div>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 bg-brand-teal rounded-full mr-1"></div>
                  <span className="text-xs">Innovation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-bounce">
        <div className="w-20 h-20 bg-brand-teal rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-pulse">
        <div className="w-32 h-32 bg-brand-teal rounded-full blur-xl"></div>
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-20 animate-float">
        <div className="w-16 h-16 bg-blue-400 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
