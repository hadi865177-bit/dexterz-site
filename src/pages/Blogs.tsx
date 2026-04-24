import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  User,
  Clock,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  PenTool,
} from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { useState, useEffect } from "react";
import { supabase, Blog } from "@/lib/supabase";
import { BlogsList } from "../data/blogs";
import BrandedLoader from "../components/ui/BrandedLoader";
import { generateSlug } from "@/utils/slugify";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const blogsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('publish_date', { ascending: false });

      if (error) throw error;
      
      if (data && data.length > 0) {
        // Database has data - use it
        const formattedBlogs = data.map(blog => ({
          ...blog,
          publishDate: blog.publish_date,
          readTime: blog.read_time
        }));
        setBlogs(formattedBlogs);
      } else {
        // Database is empty - use static data
        setBlogs(BlogsList as any);
      }
    } catch (error) {
      console.log('Database not setup yet, using static blogs');
      // Database not setup - use static data
      setBlogs(BlogsList as any);
    } finally {
      setLoading(false);
    }
  };

  // Calculate pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageLayout>
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/90 text-white py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">Insights & Updates</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand-teal/90 to-white bg-clip-text text-transparent">
              Our Blog
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Insights, tutorials, and industry perspectives from our team of experts
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-10 animate-bounce">
          <div className="w-20 h-20 bg-brand-teal rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 animate-pulse">
          <div className="w-32 h-32 bg-brand-teal rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {loading ? (
            <BrandedLoader message="Loading blogs..." />
          ) : blogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No blogs found</p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                onClick={() => navigate(`/${generateSlug(blog.title)}`)}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-brand-teal/30 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-brand-teal bg-brand-teal/10 px-3 py-1.5 rounded-full border border-brand-teal/20">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock size={12} className="mr-1" />
                      {(blog as any).read_time || (blog as any).readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-brand-navy mb-3 line-clamp-2 group-hover:text-brand-teal transition-colors duration-300">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{blog.excerpt}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-200 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {blog.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date((blog as any).publish_date || (blog as any).publishDate).toLocaleDateString()}
                    </div>
                  </div>

                  <Link
                    to={`/${generateSlug(blog.title)}`}
                    className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 font-medium group-hover:translate-x-1 transition-all duration-300">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          )}

          {/* Enhanced Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <div className="flex items-center space-x-2 bg-white rounded-xl shadow-lg border border-gray-100 p-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed bg-gray-50"
                      : "text-gray-700 hover:text-brand-teal hover:bg-brand-teal/10 hover:shadow-md"
                  }`}>
                  <ChevronLeft size={16} className="mr-1" />
                  Previous
                </button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, index) => {
                    const pageNumber = index + 1;
                    const isCurrentPage = pageNumber === currentPage;

                    // Show first page, last page, current page, and pages around current page
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                            isCurrentPage
                              ? "bg-brand-teal text-white shadow-lg"
                              : "text-gray-700 hover:text-brand-teal hover:bg-brand-teal/10 hover:shadow-md"
                          }`}>
                          {pageNumber}
                        </button>
                      );
                    } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                      return (
                        <span key={pageNumber} className="px-2 text-gray-400">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed bg-gray-50"
                      : "text-gray-700 hover:text-brand-teal hover:bg-brand-teal/10 hover:shadow-md"
                  }`}>
                  Next
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Enhanced Page Info */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
              <PenTool className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">
                Showing {indexOfFirstBlog + 1}-{Math.min(indexOfLastBlog, blogs.length)} of{" "}
                {blogs.length} blogs
              </span>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blogs;
