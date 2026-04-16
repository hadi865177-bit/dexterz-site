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
} from "lucide-react";
import PageLayout from "../src/components/layout/PageLayout";
import { BlogsList, type Blog } from "../data/blogs";
import { useState } from "react";

const BlogDetail = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Find the blog by ID
  const blog = BlogsList.find((b) => b.id === id);

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
      {/* Hero Section */}
      <div className="relative bg-brand-navy text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-teal/20 animate-float blur-3xl"></div>
          <div
            className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500/20 animate-float blur-3xl"
            style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">

            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full text-sm font-medium">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <motion.h1
              className="text-3xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              {blog.title}
            </motion.h1>

            {/* Meta Information */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>
                  {new Date(blog.publishDate).toLocaleDateString("en-US", {
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
      </div>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Featured Image */}
                <motion.div
                  className="mb-8 rounded-2xl overflow-hidden shadow-xl"
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

                  {/* Placeholder content - you can replace this with actual blog content */}
                  <h2>The Evolution of Technology</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <h3>Key Benefits</h3>
                  <ul>
                    <li>Improved efficiency and productivity</li>
                    <li>Enhanced user experience</li>
                    <li>Scalable architecture</li>
                    <li>Cost-effective solutions</li>
                  </ul>

                  <h3>Implementation Strategy</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <blockquote className="border-l-4 border-brand-teal pl-6 italic text-gray-700">
                    "Technology is best when it brings people together." - Matt Mullenweg
                  </blockquote>

                  <h3>Future Considerations</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </motion.div>

                {/* Tags */}
                <motion.div
                  className="mt-12 pt-8 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}>
                  <h4 className="text-lg font-semibold text-brand-navy mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-3">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-brand-teal hover:text-white transition-colors cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Action Buttons */}
                  <motion.div
                    className="bg-gray-50 rounded-xl p-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}>
                    <h4 className="font-semibold text-brand-navy mb-4">Actions</h4>
                    <div className="space-y-3">

                      <button className="w-full flex items-center justify-center px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:border-brand-teal hover:text-brand-teal transition-colors">
                        <Share2 size={16} className="mr-2" />
                        Share
                      </button>
                    </div>
                  </motion.div>


                  {/* Author Info */}
                  <motion.div
                    className="bg-gray-50 rounded-xl p-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}>
                    <h4 className="font-semibold text-brand-navy mb-4">About the Author</h4>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-brand-teal rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl">
                        {blog.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <h5 className="font-medium text-gray-900">{blog.author}</h5>
                      <p className="text-sm text-gray-600 mt-1">Technical Writer & Developer</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-brand-navy mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              Related Articles
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BlogsList.filter((b) => b.id !== blog.id && b.category === blog.category)
                .slice(0, 3)
                .map((relatedBlog, index) => (
                  <motion.div
                    key={relatedBlog.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}>
                    <div className="h-40 overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-brand-navy mb-2 line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {relatedBlog.excerpt}
                      </p>
                      <Link
                        to={`/blog/${relatedBlog.id}`}
                        className="text-brand-teal hover:underline text-sm font-medium">
                        Read More →
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
