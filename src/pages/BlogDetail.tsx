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

                  {/* Dynamic content based on blog category */}
                  {blog.category === "AI & Technology" && (
                    <>
                      <h2 className="text-3xl font-bold text-brand-navy mb-6">
                        The Future of AI in Software Development
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Artificial Intelligence is revolutionizing the software development
                        landscape in unprecedented ways. From automated testing to intelligent code
                        generation, AI is becoming an integral part of modern development workflows.
                        This transformation is not just about efficiency—it's about fundamentally
                        changing how we approach software creation.
                      </p>

                      <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                        Key Benefits of AI in Development
                      </h3>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Automated code generation and suggestions
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Intelligent bug detection and prevention
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Enhanced testing automation and coverage
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Improved code quality and maintainability
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Faster development cycles and time-to-market
                          </span>
                        </li>
                      </ul>

                      <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                        Implementation Strategies
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Implementing AI in your development process requires a strategic approach.
                        Start with identifying repetitive tasks that can be automated, such as code
                        reviews, testing, and documentation generation. Gradually integrate AI tools
                        into your existing workflow, ensuring team adoption and proper training.
                      </p>

                      <blockquote className="border-l-4 border-brand-teal pl-6 italic text-gray-700 bg-brand-teal/5 py-4 rounded-r-lg mb-6">
                        "AI will not replace developers, but developers who use AI will replace
                        those who don't." - Unknown
                      </blockquote>

                      <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                        Future Considerations
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        As AI continues to evolve, we can expect even more sophisticated tools that
                        will further streamline development processes. The key is to stay informed
                        about emerging technologies and be ready to adapt your development practices
                        accordingly.
                      </p>
                    </>
                  )}

                  {blog.category === "Frontend Development" && (
                    <>
                      <h2 className="text-3xl font-bold text-brand-navy mb-6">
                        Advanced React Performance Optimization
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Performance optimization in React applications is crucial for delivering
                        exceptional user experiences. Modern web applications face increasing
                        complexity, making it essential to implement advanced optimization
                        techniques that go beyond basic best practices.
                      </p>

                      <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                        Core Optimization Techniques
                      </h3>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            React.memo for component memoization
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            useMemo and useCallback for expensive computations
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Code splitting with React.lazy and Suspense
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Bundle optimization and tree shaking
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Virtual scrolling for large datasets
                          </span>
                        </li>
                      </ul>

                      <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                        Implementation Best Practices
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Start by identifying performance bottlenecks using React DevTools Profiler.
                        Focus on optimizing re-renders first, then move to bundle size optimization.
                        Remember that premature optimization can lead to unnecessary
                        complexity—measure first, optimize second.
                      </p>

                      <blockquote className="border-l-4 border-brand-teal pl-6 italic text-gray-700 bg-brand-teal/5 py-4 rounded-r-lg mb-6">
                        "Premature optimization is the root of all evil." - Donald Knuth
                      </blockquote>

                      <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                        Monitoring and Maintenance
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Continuous monitoring of your application's performance is essential. Use
                        tools like Lighthouse, WebPageTest, and real user monitoring to track
                        performance metrics and identify areas for improvement.
                      </p>
                    </>
                  )}

                  {blog.category === "Cloud Computing" && (
                    <>
                      <h2 className="text-3xl font-bold text-brand-navy mb-6">
                        Building Cloud-Native Applications
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Cloud-native applications represent a paradigm shift in how we design,
                        develop, and deploy software. These applications are built specifically to
                        leverage the advantages of cloud computing, including scalability,
                        resilience, and operational efficiency.
                      </p>

                      <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                        Core Principles of Cloud-Native Design
                      </h3>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Microservices architecture for modularity
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Containerization for consistency and portability
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Orchestration for automated deployment and scaling
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            DevOps practices for continuous delivery
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Observability for monitoring and debugging
                          </span>
                        </li>
                      </ul>

                      <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                        Implementation Strategy
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Begin your cloud-native journey by breaking down monolithic applications
                        into microservices. Implement containerization using Docker and
                        orchestration with Kubernetes. Establish CI/CD pipelines and adopt
                        infrastructure as code practices.
                      </p>

                      <blockquote className="border-l-4 border-brand-teal pl-6 italic text-gray-700 bg-brand-teal/5 py-4 rounded-r-lg mb-6">
                        "Cloud-native is not just about technology—it's about culture and
                        processes." - Unknown
                      </blockquote>

                      <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                        Best Practices for Success
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Focus on designing for failure, implementing proper monitoring and logging,
                        and ensuring security from the ground up. Remember that cloud-native is a
                        journey, not a destination—continuous improvement is key to long-term
                        success.
                      </p>
                    </>
                  )}

                  {blog.category === "Security" && (
                    <>
                      <h2 className="text-3xl font-bold text-brand-navy mb-6">
                        Essential Cybersecurity Practices
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        In today's interconnected digital landscape, cybersecurity is not
                        optional—it's essential. Every web application faces potential threats,
                        making it crucial to implement robust security measures that protect both
                        your application and your users.
                      </p>

                      <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                        Critical Security Measures
                      </h3>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Input validation and sanitization</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Authentication and authorization best practices
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            HTTPS implementation and certificate management
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Regular security audits and penetration testing
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Data encryption at rest and in transit
                          </span>
                        </li>
                      </ul>

                      <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                        Implementation Guidelines
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Start by following the OWASP Top 10 guidelines and implement security
                        measures from the beginning of your development process. Use security
                        headers, implement proper session management, and regularly update
                        dependencies to patch vulnerabilities.
                      </p>

                      <blockquote className="border-l-4 border-brand-teal pl-6 italic text-gray-700 bg-brand-teal/5 py-4 rounded-r-lg mb-6">
                        "Security is not a product, but a process." - Bruce Schneier
                      </blockquote>

                      <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                        Ongoing Security Maintenance
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Security is an ongoing process that requires regular attention. Establish
                        security monitoring, conduct regular audits, and stay informed about
                        emerging threats and best practices in the cybersecurity landscape.
                      </p>
                    </>
                  )}

                  {/* Default content for other categories */}
                  {![
                    "AI & Technology",
                    "Frontend Development",
                    "Cloud Computing",
                    "Security",
                    "Mobile Development",
                    "Data Science",
                    "Backend Development",
                    "DevOps",
                    "Blockchain",
                  ].includes(blog.category) && (
                    <>
                      <h2 className="text-3xl font-bold text-brand-navy mb-6">
                        Industry Insights and Best Practices
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        In today's rapidly evolving technology landscape, staying informed about
                        industry trends and best practices is crucial for success. This article
                        explores key insights and practical approaches that can help you navigate
                        the complexities of modern software development and technology
                        implementation.
                      </p>

                      <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                        Key Industry Trends
                      </h3>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Emerging technologies and their impact
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Best practices for modern development
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Strategies for staying competitive</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Tools and frameworks for success</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Future-proofing your technology stack
                          </span>
                        </li>
                      </ul>

                      <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                        Implementation Strategies
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Focus on continuous learning and adaptation to stay ahead in the technology
                        landscape. Implement proven methodologies, leverage modern tools and
                        frameworks, and build a culture of innovation and experimentation within
                        your organization.
                      </p>

                      <blockquote className="border-l-4 border-brand-teal pl-6 italic text-gray-700 bg-brand-teal/5 py-4 rounded-r-lg mb-6">
                        "The only constant in technology is change." - Heraclitus
                      </blockquote>

                      <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                        Looking Forward
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        As technology continues to evolve, the key to success lies in adaptability
                        and continuous improvement. Stay informed about emerging trends, invest in
                        learning and development, and build systems that can evolve with changing
                        requirements.
                      </p>
                    </>
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
                      <p className="text-sm text-gray-600 mt-1">Technical Writer & Developer</p>
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
