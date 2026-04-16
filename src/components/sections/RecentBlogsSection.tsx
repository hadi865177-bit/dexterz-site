import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { BlogsList } from "../../data/blogs";
import { useEffect, useState } from "react";

const RecentBlogsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get the 3 most recent blogs
  const recentBlogs = BlogsList.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recentBlogs.length);
    }, 4000); // Change blog every 4 seconds

    return () => clearInterval(interval);
  }, [recentBlogs.length]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest thoughts on technology, development, and industry trends
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Content Area */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">
                From Our Blog
              </h3>
              <p className="text-gray-600 mb-8">
                Discover insights, tutorials, and industry perspectives from our team of experts. 
                We share our knowledge to help you stay ahead in the ever-evolving tech landscape.
              </p>
              <Link 
                to="/blogs" 
                className="inline-flex items-center text-brand-teal hover:underline font-medium text-lg"
              >
                View All Articles <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>

            {/* Recent Blogs Sidebar */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-brand-navy">Recent Posts</h3>
              </div>
              
              <div className="relative h-96">
                {recentBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    className={`absolute inset-0 p-6 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: index === currentIndex ? 1 : 0,
                      x: index === currentIndex ? 0 : 20
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="h-40 mb-4 rounded-lg overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <div className="flex items-center">
                        <User size={12} className="mr-1" />
                        {blog.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {new Date(blog.publishDate).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-brand-navy mb-3 line-clamp-2 text-base">
                      {blog.title}
                    </h4>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-brand-teal hover:underline text-sm font-medium inline-flex items-center"
                    >
                      Read More <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </motion.div>
                ))}
                
                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {recentBlogs.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 hover:scale-125 ${
                        index === currentIndex ? 'bg-brand-teal' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogsSection;
