import {
  Brain,
  Bot,
  MessageSquare,
  Database,
  ChartLine,
  Bug,
  Wrench,
  Zap,
  Star,
} from "lucide-react";
import ServiceCard from "../services/ServiceCard";
import { motion } from "framer-motion";

const AIServiceSection = () => {
  const aiServices = [
    {
      title: "AI & ML Integrations",
      description:
        "Integrate cutting-edge AI and ML capabilities into your existing systems to enhance functionality and decision-making.",
      icon: <Brain />,
      link: "/services/ai/integrations",
    },
    {
      title: "AI Automation Solutions",
      description:
        "Automate routine tasks and workflows with intelligent AI systems that learn and improve over time.",
      icon: <Bot />,
      link: "/services/ai/automation",
    },
    {
      title: "Chatbot Development",
      description:
        "Create intelligent conversational agents that engage with your customers, answer questions, and provide assistance.",
      icon: <MessageSquare />,
      link: "/services/ai/chatbots",
    },
    {
      title: "Intelligent Data Processing",
      description:
        "Process and analyze large datasets with AI-powered tools that extract valuable insights and patterns.",
      icon: <Database />,
      link: "/services/ai/data-processing",
    },
    {
      title: "Predictive Analytics",
      description:
        "Leverage AI to forecast trends, behaviors, and outcomes based on historical data patterns.",
      icon: <ChartLine />,
      link: "/services/ai/predictive-analytics",
    },
    {
      title: "Software Testing & QA",
      description:
        "Ensure software quality with AI-driven testing methodologies that identify issues before they impact users.",
      icon: <Bug />,
      link: "/services/ai/testing",
    },
    // {
    //   title: "App Maintenance & Support",
    //   description:
    //     "Keep your applications running smoothly with proactive AI-powered maintenance and support services.",
    //   icon: <Wrench />,
    //   link: "/services/ai/maintenance",
    // },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/20">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">AI Solutions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            AI & Automation <span className="text-brand-teal">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to automate tasks, gain insights, and
            create smarter solutions for your business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {aiServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 p-6 shadow-sm hover:shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-teal/10 rounded-full mb-4 border border-brand-teal/20">
                  <div className="text-brand-teal">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 font-medium transition-colors">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServiceSection;
