import { Users, Briefcase, Monitor, Globe, Users as UsersIcon } from "lucide-react";
import ServiceCard from "../services/ServiceCard";
import { motion } from "framer-motion";

const StaffAugmentationSection = () => {
  const staffServices = [
    {
      title: "Hire Developers & Tech Teams",
      description:
        "Access skilled developers and complete tech teams on demand to scale your projects quickly and efficiently.",
      icon: <Users />,
      link: "/services/staff/developers",
    },
    {
      title: "HR Recruitment Solutions",
      description:
        "Find the perfect talent with our specialized tech recruitment services tailored to your company's needs.",
      icon: <Briefcase />,
      link: "/services/staff/recruitment",
    },
    {
      title: "Remote Team Management",
      description:
        "Efficiently manage distributed teams with our tools and methodologies designed for remote collaboration.",
      icon: <Monitor />,
      link: "/services/staff/remote-teams",
    },
    {
      title: "Resource Outsourcing",
      description:
        "Reduce operational costs and focus on your core business by outsourcing specific roles and projects.",
      icon: <Globe />,
      link: "/services/staff/outsourcing",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
            <UsersIcon className="h-4 w-4" />
            <span className="text-sm font-medium">Talent Solutions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-navy">
            Staff Augmentation & <span className="text-brand-teal">Recruitment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your ideal tech team with our flexible staffing solutions and expert recruitment
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {staffServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                category="Staffing"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffAugmentationSection;
