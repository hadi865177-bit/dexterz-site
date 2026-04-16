
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  image: string;
  summary: string;
  services: string[];
  technologies: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "ai-chatbot-healthcare",
    title: "AI-Powered Healthcare Chatbot",
    client: "MediCare Solutions",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    summary: "Developed an AI chatbot that helped reduce patient wait times by 35% and improved appointment scheduling efficiency by 42%.",
    services: ["AI & ML Integration", "Chatbot Development"],
    technologies: ["Natural Language Processing", "TensorFlow", "React", "Node.js"]
  },
  {
    id: "erp-manufacturing",
    title: "Custom ERP System for Manufacturing",
    client: "GlobalTech Industries",
    industry: "Manufacturing",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    summary: "Created a tailored ERP solution that streamlined operations, resulting in a 28% increase in production efficiency and reduced costs.",
    services: ["Custom Software Development", "CRM & ERP Solutions"],
    technologies: ["React", "Node.js", "MongoDB", "Docker"]
  },
  {
    id: "ai-data-analytics",
    title: "AI-Driven Data Analytics Platform",
    client: "FinPro Services",
    industry: "Finance",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    summary: "Built a predictive analytics platform that helped identify market trends with 94% accuracy, leading to 22% increased portfolio performance.",
    services: ["AI & ML Integration", "Predictive Analytics"],
    technologies: ["Python", "TensorFlow", "React", "AWS"]
  },
  {
    id: "mobile-app-ecommerce",
    title: "Cross-Platform E-commerce Mobile App",
    client: "ShopWave",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    summary: "Developed a seamless mobile shopping experience that increased mobile sales by 47% and customer engagement by 35%.",
    services: ["Mobile App Development", "API Integration"],
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: "hr-recruitment-platform",
    title: "AI-Enhanced Talent Acquisition Platform",
    client: "TalentHub Corp",
    industry: "HR & Recruitment",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    summary: "Created an intelligent recruiting platform that reduced time-to-hire by 40% and improved candidate quality matches by 65%.",
    services: ["AI & ML Integration", "Custom Software Development"],
    technologies: ["Python", "React", "Node.js", "MongoDB"]
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Implementation",
    client: "CloudServe Technologies",
    industry: "IT Services",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    summary: "Implemented a comprehensive DevOps pipeline that reduced deployment time by 75% and increased release frequency by 3x.",
    services: ["DevOps Services", "Cloud Solutions"],
    technologies: ["Docker", "Kubernetes", "Jenkins", "AWS"]
  }
];

const CaseStudies = () => {
  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-navy text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-teal/20 animate-float blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500/20 animate-float blur-3xl" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-lg text-gray-300">
              Explore how we've helped our clients solve complex challenges and achieve remarkable results
            </p>
          </div>
        </div>
      </div>
      
      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-brand-teal bg-brand-teal/10 px-2 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-xs text-gray-500">
                      Client: {study.client}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    {study.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {study.summary}
                  </p>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-brand-teal hover:underline font-medium"
                  >
                    View Case Study <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Results Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Real <span className="text-gradient">Results</span> for Real Businesses
            </h2>
            <p className="text-lg text-gray-600">
              Our solutions drive measurable improvements across key business metrics
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { metric: "35%", description: "Average Efficiency Increase" },
              { metric: "40%", description: "Cost Reduction" },
              { metric: "53%", description: "Faster Time to Market" },
              { metric: "96%", description: "Client Satisfaction Rate" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-teal mb-2">{item.metric}</div>
                <div className="text-gray-600 text-sm">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              What Our <span className="text-gradient">Clients</span> Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Dexterz Technologies delivered an AI solution that completely transformed our customer service operations. Their team's expertise and dedication exceeded our expectations.",
                name: "Sarah Johnson",
                title: "CTO, MediCare Solutions"
              },
              {
                quote: "The custom ERP system developed by Dexterz Technologies has streamlined our manufacturing processes and given us invaluable insights into our operations.",
                name: "Michael Chen",
                title: "Operations Director, GlobalTech Industries"
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <svg className="text-brand-teal w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-2.2 0-4 1.8-4 4v10h10V12H6c0-1.1 0.9-2 2-2h2V8h-0zM22 8c-2.2 0-4 1.8-4 4v10h10V12h-10c0-1.1 0.9-2 2-2h2V8h-0z" />
                  </svg>
                </div>
                
                <blockquote className="text-lg font-medium text-gray-700 mb-4">
                  {testimonial.quote}
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <div className="font-bold text-brand-navy">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.title}</div>
                  </div>
                </div>
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
              Ready to Create Your <span className="bg-gradient-to-r from-brand-teal to-blue-400 bg-clip-text text-transparent">Success Story</span>?
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions, development expertise, and talent resources can help you achieve your business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/services" 
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CaseStudies;
