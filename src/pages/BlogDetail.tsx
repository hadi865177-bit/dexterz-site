import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Tag,
  Share2,
  Bookmark,
  Twitter,
  Linkedin,
  Facebook,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { BlogsList, type Blog } from "../data/blogs";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import BrandedLoader from "../components/ui/BrandedLoader";

const BlogDetail = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      
      if (data) {
        setBlog({
          ...data,
          publishDate: data.publish_date,
          readTime: data.read_time
        });
      } else {
        const staticBlog = BlogsList.find((b) => b.id === id);
        setBlog(staticBlog);
      }
    } catch (error) {
      const staticBlog = BlogsList.find((b) => b.id === id);
      setBlog(staticBlog);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <PageLayout>
        <BrandedLoader message="Loading blog..." />
      </PageLayout>
    );
  }

  if (!blog) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-brand-navy mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blogs"
            className="inline-flex items-center text-brand-teal hover:underline font-medium">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blogs
          </Link>
        </div>
      </PageLayout>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = blog.title;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        );
        break;
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
    }
  };

  return (
    <PageLayout>
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/90 text-white py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blogs Link */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}>
              <Link
                to="/blogs"
                className="inline-flex items-center text-brand-teal/80 hover:text-brand-teal transition-colors font-medium">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blogs
              </Link>
            </motion.div>

            {/* Category Badge */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full border border-brand-teal/30">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">{blog.category}</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-brand-teal/90 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              {blog.title}
            </motion.h1>

            {/* Meta Information */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>
                  {new Date(blog.publish_date || blog.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{blog.readTime}</span>
              </div>
            </motion.div>
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

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Featured Image */}
                <motion.div
                  className="mb-8 rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}>
                  <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover" />
                </motion.div>

                {/* Blog Content */}
                <motion.div
                  className="prose prose-lg max-w-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">{blog.excerpt}</p>

                 {/* Dynamic content from database */}
                  {blog.content ? (
                    <div 
                      className="blog-content text-lg text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  ) : (
                    <div className="text-lg text-gray-700 leading-relaxed">
                      <h2 className="text-3xl font-bold text-brand-navy mb-6">
                        Industry Insights and Best Practices
                      </h2>
                      <p className="mb-6">
                        In today's rapidly evolving technology landscape, staying informed about
                        industry trends and best practices is crucial for success. This article
                        explores key insights and practical approaches that can help you navigate
                        the complexities of modern software development and technology
                        implementation.
                      </p>
                    </div>
                  )}
                </motion.div>

                {/* Enhanced Tags */}
                <motion.div
                  className="mt-12 pt-8 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}>
                  <h4 className="text-lg font-semibold text-brand-navy mb-4 flex items-center">
                    <Tag className="h-5 w-5 mr-2 text-brand-teal" />
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-brand-teal hover:text-white transition-all duration-300 cursor-pointer border border-gray-200 hover:border-brand-teal/30 hover:scale-105">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Action Buttons */}
                  <motion.div
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}>
                    <h4 className="font-semibold text-brand-navy mb-4">Actions</h4>
                    <div className="space-y-3">
                      <button
                        onClick={() => handleShare("twitter")}
                        className="w-full flex items-center justify-center px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:border-brand-teal hover:text-brand-teal hover:bg-brand-teal/5 transition-all duration-200 hover:scale-105">
                        <Share2 size={16} className="mr-2" />
                        Share
                      </button>
                    </div>
                  </motion.div>

                  {/* Author Info */}
                  <motion.div
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}>
                    <h4 className="font-semibold text-brand-navy mb-4">About the Author</h4>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {blog.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <h5 className="font-medium text-gray-900">{blog.author}</h5>
                      <p className="text-sm text-gray-600 mt-1">{blog.author_title || 'Technical Writer & Developer'}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Related Blogs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-4 border border-brand-teal/30">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">Related Content</span>
              </div>
              <h2 className="text-3xl font-bold text-brand-navy">Related Articles</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BlogsList.filter((b) => b.id !== blog.id && b.category === blog.category)
                .slice(0, 3)
                .map((relatedBlog, index) => (
                  <motion.div
                    key={relatedBlog.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-teal/30 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}>
                    <div className="h-40 overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-brand-navy mb-3 line-clamp-2 group-hover:text-brand-teal transition-colors duration-300">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {relatedBlog.excerpt}
                      </p>
                      <Link
                        to={`/blog/${relatedBlog.id}`}
                        className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 font-medium group-hover:translate-x-1 transition-all duration-300">
                        Read More <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogDetail;
