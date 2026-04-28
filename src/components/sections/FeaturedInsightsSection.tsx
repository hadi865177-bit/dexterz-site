import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogsList } from "../../data/blogs";
import { useState, useEffect } from "react";
import { supabase, Blog } from "@/lib/supabase";
import { generateSlug } from "@/utils/slugify";

interface InsightCard {
  id: string;
  type: "Case Study" | "Blogs";
  title: string;
  image: string;
  link: string;
}

const FeaturedInsightsSection = () => {
  const [insights, setInsights] = useState<InsightCard[]>([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('publish_date', { ascending: false })
        .limit(5);

      if (error) throw error;
      
      if (data && data.length > 0) {
        const formattedInsights = data.map(blog => ({
          id: blog.id,
          type: "Blogs" as const,
          title: blog.title,
          image: blog.image,
          link: `/${generateSlug(blog.title)}`,
        }));
        setInsights(formattedInsights);
      } else {
        const recentBlogs = BlogsList.slice(0, 5);
        const staticInsights = recentBlogs.map((blog) => ({
          id: blog.id,
          type: "Blogs" as const,
          title: blog.title,
          image: blog.image,
          link: `/blog/${blog.id}`,
        }));
        setInsights(staticInsights);
      }
    } catch (error) {
      const recentBlogs = BlogsList.slice(0, 5);
      const staticInsights = recentBlogs.map((blog) => ({
        id: blog.id,
        type: "Blogs" as const,
        title: blog.title,
        image: blog.image,
        link: `/blog/${blog.id}`,
      }));
      setInsights(staticInsights);
    }
  };

  if (insights.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background gradient for right side */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-blue-50/30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Featured Insights */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            {/* Badge */}
            <div className="inline-flex items-center">
              <span className="text-brand-teal text-sm font-semibold uppercase tracking-wider">
                Latest Insights
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Business Across <span className="text-brand-teal"> AI Industries</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Explore our latest insights on Data Science, AI/ML, Full Stack development, DevOps, and enterprise technology trends.
              </p>

              {/* <h3 className="text-2xl md:text-3xl font-normal text-gray-600">
                From Ideas to Results
              </h3> */}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <Button
                size="lg"
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center">
                  Explore More
                  <ArrowRight className="ml-2" size={20} />
                </div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Case Studies & Blogs Grid */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}>
            {/* Row 1: 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insights.slice(0, 2).map((insight, index) => (
                <motion.div
                  key={insight.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  onClick={() => window.open(insight.link, "_blank")}>
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-teal text-white">
                        {insight.type}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-105 group-hover:blur-sm transition-all duration-600 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-600 ease-out" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-brand-teal transition-colors duration-600 ease-out">
                        {insight.title.split(" ").length > 4
                          ? insight.title.split(" ").slice(0, 4).join(" ") + "..."
                          : insight.title}
                      </h3>

                      {/* Explore More Button */}
                      <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-600 ease-out">
                        <div className="mt-3 transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-600 ease-out">
                          <Button
                            size="sm"
                            className="bg-brand-teal hover:bg-brand-teal/90 text-white px-4 py-2 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center">
                              Explore More
                              <ArrowRight className="ml-1" size={16} />
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insights.slice(2, 5).map((insight, index) => (
                <motion.div
                  key={insight.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  onClick={() => window.open(insight.link, "_blank")}>
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-teal text-white">
                        {insight.type}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-105 group-hover:blur-sm transition-all duration-600 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-600 ease-out" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-sm leading-tight mb-2 group-hover:text-brand-teal transition-colors duration-600 ease-out">
                        {insight.title.split(" ").length > 3
                          ? insight.title.split(" ").slice(0, 3).join(" ") + "..."
                          : insight.title}
                      </h3>

                      {/* Explore More Button */}
                      <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-600 ease-out">
                        <div className="mt-3 transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-600 ease-out">
                          <Button
                            size="xs"
                            className="bg-brand-teal hover:bg-brand-teal/90 text-white px-2 py-1 text-xs font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center">
                              Explore More
                              <ArrowRight className="ml-1" size={12} />
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightsSection;
