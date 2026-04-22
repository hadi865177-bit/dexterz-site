import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Brain, Bot, MessageSquare, Database, ChartLine, Bug, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceCardsSection = () => {
    const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: "AI/ML & Data Science",
      description:
        "Integrate cutting-edge AI and ML capabilities with sophisticated data science models using TensorFlow, PyTorch, and advanced algorithms to enhance decision-making.",
      backgroundColor: "bg-brand-teal",
      textColor: "text-white hover:text-white",
      icon: <Brain />,
      skills: ["Machine Learning", "Deep Learning", "Data Science", "TensorFlow", "PyTorch"],
      graphic: (
        <div className="absolute top-4 left-8 right-8 h-56">
          <div className="flex items-center justify-center h-full">
            <div className="text-white/20">
              <Brain size={150} />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "AI Automation Solutions",
      description:
        "Automate routine tasks and complex workflows with intelligent AI systems and RPA that learn and improve over time.",
      backgroundColor: "bg-brand-teal/10",
      textColor: "text-teal-500 hover:text-teal-500",
      icon: <Bot />,
      skills: [
        "RPA",
        "Workflow Automation",
        "Process Mining",
        "Intelligent Automation",
        "AI Orchestration",
      ],
      graphic: (
        <div className="absolute top-4 left-8 right-8 h-56">
          <div className="flex items-center justify-center h-full">
            <div className="text-brand-teal/20">
              <Bot size={150} />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Chatbot Development",
      description:
        "Create intelligent conversational agents that engage with your customers, answer questions, and provide assistance using advanced NLP.",
      backgroundColor: "bg-brand-teal",
      textColor: "text-white hover:text-white",
      icon: <MessageSquare />,
      skills: ["NLP", "Conversational AI", "ChatGPT", "Dialogflow", "Voice Assistants"],
      graphic: (
        <div className="absolute top-4 left-8 right-8 h-56">
          <div className="flex items-center justify-center h-full">
            <div className="text-white/20">
              <MessageSquare size={150} />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Intelligent Data Processing",
      description:
        "Process and analyze large datasets with AI-powered tools that extract valuable insights and patterns for strategic decisions.",
      backgroundColor: "bg-brand-teal/10",
      textColor: "text-teal-500 hover:text-teal-500",
      icon: <Database />,
      skills: ["Data Analytics", "Big Data", "ETL Pipelines", "Data Mining", "Predictive Modeling"],
      graphic: (
        <div className="absolute top-4 left-8 right-8 h-56">
          <div className="flex items-center justify-center h-full">
            <div className="text-brand-teal/20">
              <Database size={150} />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex w-full justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-gray-700 mb-4 text-left">
            AI & Automation <span className="text-brand-teal">Solutions</span>
          </h2>
          {/* button */}
          <Button
          onClick={() => navigate('/services')}
           className="bg-brand-teal hover:bg-brand-teal/90 text-white px-4 py-4 text-lg font-semibold rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            View All Services 
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${service.backgroundColor} ${service.textColor} p-8 h-96 md:h-[70vh] relative overflow-hidden cursor-pointer group`}>
              {/* Graphic */}
              {service.graphic}

              {/* Content */}
              <div className="absolute bottom-4 left-8 right-8">
                {/* Main Content - slides up on hover */}
                <div className="transform group-hover:-translate-y-8 transition-all duration-500 ease-out">
                  <div className="flex items-center mb-2">
                    <h3
                      className={`text-2xl font-bold group-hover:${service.textColor} transition-colors duration-300`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm opacity-90 leading-relaxed">{service.description}</p>
                </div>

                {/* Skills Tags - slide up from below */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-0 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          service.backgroundColor === "bg-brand-teal"
                            ? "bg-white/20 text-white border border-white/30"
                            : "bg-brand-teal/20 text-brand-teal border border-brand-teal/30"
                        }`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSection;
