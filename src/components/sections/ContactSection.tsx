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
                    <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors">
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
                    <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                          clipRule="evenodd"
                        />
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
