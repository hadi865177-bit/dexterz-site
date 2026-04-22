import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Cpu, Zap } from "lucide-react";
import "swiper/swiper-bundle.css";

const technologies = [
  // Data Science & ML
  {
    name: "Python",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753318212/PythonLogo_aj1js1.jpg",
  },
  {
    name: "TensorFlow",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753318190/tensorflowlogo_mdbxbl.png",
  },
  {
    name: "OpenAI",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753321377/open-ai-logo-png_seeklogo-428036_hp2wef.png",
  },
  {
    name: "Pinecone",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753321377/pinecone-logo-png_seeklogo-482364_bp9dec.png",
  },

  // Full Stack - Backend
  {
    name: "Django",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753321376/djangologo_mhsy44.png",
  },
  {
    name: "Flask",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753321377/flask-logo-png-transparent_wvldea.png",
  },
  {
    name: "FastAPI",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753321376/fastapi-logo-png_seeklogo-499530_dyv5js.png",
  },

  // Full Stack - Frontend
  {
    name: "React",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753318223/reactlogo_dhip9x.webp",
  },
  {
    name: "Next.js",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753318195/NextLogo_tudqbn.png",
  },
  {
    name: "Vue",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753318171/VueLogo_gmrp0e.png",
  },

  // Mobile Development
  {
    name: "React Native",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753321828/reactnative_vcftgu.png",
  },
  {
    name: "Flutter",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753321828/flutterlogo_ir4kg5.png",
  },

  // DevOps & Cloud
  {
    name: "Docker",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753318171/dockerLogo_xmdvjw.png",
  },
  {
    name: "Kubernetes",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753318195/kubernetesLogo_zke3hc.png",
  },
  {
    name: "AWS",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753318218/awslogo_onfroy.png",
  },
  {
    name: "Azure",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753318227/azureLogo_topzlj.png",
  },
  {
    name: "Google Cloud",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753318219/cloudLogo_lrh7v6.png",
  },

  // Databases
  {
    name: "PostgreSQL",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753321376/images_jqhoyq.png",
  },
  {
    name: "MongoDB",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753321376/mongodb-icon-logo-png_seeklogo-503274_ecbgcr.png",
  },

  // Automation
  {
    name: "Zapier",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753321377/Zapier_logo.svg_xgt6up.png",
  },
  {
    name: "n8n",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753321377/N8n-logo-new.svg_b6ufcb.png",
  },
  {
    name: "Make",
    icon: "https://res.cloudinary.com/diqz9omkm/image/upload/v1753321376/make-logo-png_seeklogo-464017_hc6luf.png",
  },
];

const TechnologySection = () => {
  return (
    <section className="py-10 bg-white relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
            <Cpu className="h-4 w-4" />
            <span className="text-sm font-medium">Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-navy">
            Our <span className="text-brand-teal">Technology</span> Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to deliver innovative solutions for our clients.
          </p>
        </div> */}

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1000 }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 4, spaceBetween: 15 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
          className="max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <SwiperSlide key={tech.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-3 mb-3 hover:scale-90 transition-all duration-300 border border-gray-100 hover:border-brand-teal/30 hover:shadow-xl">
                  <img src={tech.icon} alt={tech.name} className="max-w-full max-h-full" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{tech.name}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TechnologySection;
