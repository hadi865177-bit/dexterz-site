import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    service: "AI & Automation",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      full_name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (newErrors.full_name || newErrors.email || newErrors.subject || newErrors.message) {
      setErrors(newErrors);
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
      setErrors({
        full_name: "",
        email: "",
        subject: "",
        message: "",
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

  return (
    <section className="py-20 bg-white relative" id="contact">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Contact Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-navy">
              Ready to <span className="text-brand-teal">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team to discuss how our AI solutions and services can help you
              achieve your business goals.
            </p>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-navy text-white p-8 lg:col-span-2">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-brand-teal mt-0.5" />
                    <div>
                      <p className="text-brand-teal mb-1 font-medium">Email</p>
                      <a
                        href="mailto:info@dexterztechnologies.com"
                        className="text-gray-300 hover:text-white transition-colors">
                        info@dexterztechnologies.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-brand-teal mt-0.5" />
                    <div>
                      <p className="text-brand-teal mb-1 font-medium">Phone</p>
                      <a
                        href="tel:+19452007124"
                        className="text-gray-300 hover:text-white transition-colors">
                        +1 (945) 200-7124
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-brand-teal mt-0.5" />
                    <div>
                      <p className="text-brand-teal mb-1 font-medium">Address</p>
                      <address className="text-gray-300 not-italic text-sm">
                        1425 Woodward Ave
                        <br />
                        Detroit, MI 48226, United States
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-brand-teal mt-0.5" />
                    <div>
                      <p className="text-brand-teal mb-1 font-medium">Working Hours</p>
                      <p className="text-gray-300">
                        Monday - Friday: 9AM - 6PM EST
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <div className="flex space-x-4">
                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/people/Dexterz-Technologies/61576606963537/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-brand-teal transition-colors">
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
                      className="text-gray-300 hover:text-brand-teal transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/dexterztechnologies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-brand-teal transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    {/* Twitter/X */}
                    <a
                      href="https://x.com/Dexterzofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-brand-teal transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 lg:col-span-3">
                <h3 className="text-xl font-bold text-brand-navy mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="full_name" className="text-sm font-medium text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="full_name"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`border-gray-200 focus:border-brand-teal focus:ring-brand-teal/20 ${errors.full_name ? 'border-red-500' : ''}`}
                      />
                      {errors.full_name && (
                        <p className="text-sm text-red-500 mt-1">{errors.full_name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className={`border-gray-200 focus:border-brand-teal focus:ring-brand-teal/20 ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (xxx) xxx-xxxx"
                        className="border-gray-200 focus:border-brand-teal focus:ring-brand-teal/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="border-gray-200 focus:border-brand-teal focus:ring-brand-teal/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className={`border-gray-200 focus:border-brand-teal focus:ring-brand-teal/20 ${errors.subject ? 'border-red-500' : ''}`}
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-500 mt-1">{errors.subject}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-gray-700">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option>AI & Automation</option>
                        <option>Staff Augmentation</option>
                        <option>Software Development</option>
                        <option>Mobile Development</option>
                        <option>Cloud Solutions</option>
                        <option>Other Services</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please tell us how we can help you..."
                      rows={5}
                      className={`border-gray-200 focus:border-brand-teal focus:ring-brand-teal/20 resize-none ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-brand-teal hover:bg-brand-teal/90 text-white w-full py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
