import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Building2,
  Users,
  ChevronDown,
} from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  // Initialize EmailJS
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    service: "AI & Automation",
  });

  // EmailJS state management
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ state management
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.full_name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          full_name: formData.full_name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          company: formData.company || "Not provided",
          subject: formData.subject,
          service: formData.service,
          message: formData.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        service: "AI & Automation",
      });
    } catch (error) {
      console.error("Error sending email:", error);

      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-brand-teal" />,
      title: "Email Us",
      details: "info@dexterztechnologies.com",
      link: "mailto:info@dexterztechnologies.com",
    },
    {
      icon: <Phone className="text-brand-teal" />,
      title: "Call Us",
      details: "+1 (945) 200-7124",
      link: "tel:+19452007124",
    },
    {
      icon: <MapPin className="text-brand-teal" />,
      title: "Visit Us",
      details: "1425 Woodward Ave, Detroit, MI 48226, United States",
      link: "https://goo.gl/maps/Q7Y6J8X2j5a1L3m6",
    },
  ];

  const faqData = [
    {
      question: "What industries do you specialize in?",
      answer:
        "We work with clients across diverse industries including healthcare, finance, e-commerce, education, manufacturing, and more. Our solutions are tailored to meet the specific needs of each industry sector.",
    },
    {
      question: "How quickly can you assemble a development team?",
      answer:
        "Depending on your specific requirements, we can typically assemble a skilled development team within 1-2 weeks. For more specialized roles or larger teams, the timeline might extend slightly.",
    },
    {
      question: "Do you offer maintenance and support after project completion?",
      answer:
        "Yes, we offer comprehensive maintenance and support services to ensure your applications continue running smoothly after launch. We offer various support packages tailored to different needs and budgets.",
    },
    {
      question: "How do you ensure the security of AI implementations?",
      answer:
        "Security is paramount in all our AI implementations. We employ industry best practices including data encryption, secure APIs, regular security audits, and compliance with relevant regulations such as GDPR or HIPAA when applicable.",
    },
    {
      question: "Can you integrate AI into our existing systems?",
      answer:
        "Absolutely! Our team specializes in seamlessly integrating AI capabilities into existing systems and workflows, minimizing disruption while maximizing the benefits of intelligent automation and insights.",
    },
  ];

  return (
    <PageLayout>
      {/* Enhanced Hero Section - Dark */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/90 text-white py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand-teal/90 to-white bg-clip-text text-transparent">
              Contact Us
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Get in touch with our team to discuss how we can help transform your business with
              innovative technology solutions.
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

      {/* Contact Info Cards - Light */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-gray-50 p-6 rounded-xl text-center hover:scale-105 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="w-12 h-12 mx-auto bg-brand-teal/10 rounded-lg flex items-center justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-brand-navy">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-gray-600 hover:text-brand-teal transition-colors">
                  {info.details}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}>
                <div className="bg-white/5 backdrop-blur-sm text-white h-full rounded-xl border border-white/10 overflow-hidden transition-all duration-300">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6">
                      How Can We <span className="text-brand-teal">Help?</span>
                    </h2>

                    <div className="space-y-6 text-gray-300">
                      <p>
                        Whether you're looking to implement AI solutions, need development
                        expertise, or want to scale your team, we're here to help you succeed.
                      </p>

                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-brand-teal" />
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-white">Office Hours</h3>
                          <p>Monday - Friday: 9AM - 6PM EST</p>
                          <p>Saturday - Sunday: Closed</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-4 text-white flex items-center">
                          <Building2 className="h-5 w-5 text-brand-teal mr-2" />
                          Our Office
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm">
                              1425 Woodward Ave
                              <br />
                              Detroit, MI 48226, United States
                              <br />
                              <a
                                href="tel:+19452007124"
                                className="text-brand-teal hover:underline">
                                +1 (945) 200-7124
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-white/20 pt-8">
                      <h3 className="font-semibold text-lg mb-4 text-white flex items-center">
                        <Users className="h-5 w-5 text-brand-teal mr-2" />
                        Connect With Us
                      </h3>
                      <div className="flex space-x-4">
                        {/* Facebook */}
                        <a
                          href="https://www.facebook.com/people/Dexterz-Technologies/61576606963537/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal/20 transition-colors">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>

                        {/* Instagram */}
                        <a
                          href="https://www.instagram.com/dexterztechnologies/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal/20 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                          href="https://www.linkedin.com/company/dexterztechnologies"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal/20 transition-colors">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>

                        {/* Twitter/X */}
                        <a
                          href="https://x.com/Dexterzofficial"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal/20 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 h-full transition-all duration-300">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Send Us a <span className="text-brand-teal">Message</span>
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="full_name" className="text-sm font-medium text-gray-300">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <Input
                          id="full_name"
                          name="full_name"
                          value={formData.full_name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('This field is required.')}
                          onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-teal"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('This field is required.')}
                          onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-teal"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (xxx) xxx-xxxx"
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-teal"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-gray-300">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-teal"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                          Subject <span className="text-red-400">*</span>
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                          onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('This field is required.')}
                          onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-teal"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-gray-300">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option className="text-black">AI & Automation</option>
                          <option className="text-black">Staff Augmentation</option>
                          <option className="text-black">Software Development</option>
                          <option className="text-black">Mobile Development</option>
                          <option className="text-black">Cloud Solutions</option>
                          <option className="text-black">Other Services</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please tell us how we can help you..."
                        rows={5}
                        required
                        onInvalid={(e) => (e.target as HTMLTextAreaElement).setCustomValidity('This field is required.')}
                        onInput={(e) => (e.target as HTMLTextAreaElement).setCustomValidity('')}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-teal resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="bg-brand-teal hover:bg-brand-teal/90 text-white w-full py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Light with Toggleable Accordion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Frequently Asked <span className="text-brand-teal">Questions</span>
              </h2>
              <p className="text-lg text-gray-600">
                Find answers to some common questions about our services
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}>
                  {/* FAQ Header - Clickable */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 rounded-t-lg">
                    <h3 className="text-lg font-semibold text-brand-navy pr-4">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0">
                      <ChevronDown className="h-5 w-5 text-brand-teal" />
                    </motion.div>
                  </button>

                  {/* FAQ Content - Animated */}
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden">
                        <div className="px-6 py-4 text-gray-700 border-t border-gray-200">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
