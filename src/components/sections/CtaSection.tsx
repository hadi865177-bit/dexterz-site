import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Star } from "lucide-react";
import { scrollToContact } from "@/utils/scrollToContact";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
            <Rocket className="h-4 w-4" />
            <span className="text-sm font-medium">Get Started</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business with{" "}
            <span className="text-brand-teal">Advanced Technology?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Partner with Dexterz Technologies to leverage Data Science, AI/ML engineering, Full Stack development, 
            DevOps automation, and Microsoft Dynamics 365 expertise that accelerates your digital transformation.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
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
              className="border-white/30 text-white bg-transparent hover:bg-white hover:text-brand-navy px-8 py-3 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
