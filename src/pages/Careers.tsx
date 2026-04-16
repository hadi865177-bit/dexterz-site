import { useState } from "react";
import emailjs from "@emailjs/browser";
import { JOB_APPLICATION_EMAILJS_CONFIG } from "@/config/emailjs";
import { uploadFileToSupabase } from "@/services/fileUpload";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Heart,
  Zap,
  Globe,
  Award,
  Send,
  Building2,
  Lightbulb,
  Target,
  ArrowRight,
  Star,
  TrendingUp,
  Rocket,
  CheckCircle,
  X,
  Upload,
  User,
  Mail,
} from "lucide-react";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  isOpen: boolean;
}

interface ApplicationForm {
  name: string;
  email: string;
  jobPosition: string;
  cv: File | null;
}

const Careers = () => {
  // Initialize EmailJS
  emailjs.init(JOB_APPLICATION_EMAILJS_CONFIG.PUBLIC_KEY);

  const { toast } = useToast();

  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [cvError, setCvError] = useState<string>("");

  const [applicationForm, setApplicationForm] = useState<ApplicationForm>({
    name: "",
    email: "",
    jobPosition: "",
    cv: null,
  });

  const jobPositions: JobPosition[] = [
    {
      id: "2",
      title: "AI/ML Engineer",
      department: "AI & Automation",
      location: "Lahore, Pakistan",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Join our AI team to develop innovative machine learning solutions that solve real-world problems. You'll work with cutting-edge AI technologies and help drive our automation initiatives.",
      requirements: [
        "Experience with Python, TensorFlow, and PyTorch",
        "Knowledge of machine learning algorithms",
        "Experience with data preprocessing and feature engineering",
        "Understanding of MLOps practices",
        "Strong mathematical foundation",
      ],
      benefits: [
        "Competitive salary and equity",
        "Access to latest AI tools and resources",
        "Conference and training opportunities",
        "Flexible work arrangements",
        "Health and wellness benefits",
      ],
      isOpen: true,
    },
    {
      id: "5",
      title: "Backend Developer (Python)",
      department: "Engineering",
      location: "Lahore, Pakistan",
      type: "Full-time",
      experience: "5+ years",
      description:
        "We are seeking a skilled Backend Developer with expertise in Python to build and maintain robust server-side applications. You'll collaborate with cross-functional teams to design, develop, and deploy scalable APIs and services that power our platform.",
      requirements: [
        "Proven experience with Python and frameworks like Django or Flask",
        "Strong knowledge of RESTful API design and implementation",
        "Experience with database systems (PostgreSQL, MySQL, or MongoDB)",
        "Familiarity with version control (Git) and CI/CD pipelines",
        "Ability to troubleshoot and optimize backend performance",
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Flexible remote work environment",
        "Comprehensive health and dental insurance",
        "Access to online learning platforms",
      ],
      isOpen: true,
    },
    {
      id: "6",
      title: "Full Stack Developer (React/Python)",
      department: "Engineering",
      location: "Lahore, Pakistan",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Join our team as a Full Stack Developer proficient in React and Python to develop end-to-end solutions. You'll work on both frontend interfaces and backend systems, ensuring seamless integration and a high-quality user experience.",
      requirements: [
        "Solid experience with React and JavaScript/TypeScript",
        "Proficiency in Python with frameworks like Django or FastAPI",
        "Knowledge of frontend build tools (Webpack, Vite) and backend databases (SQL/NoSQL)",
        "Experience with version control (Git) and agile methodologies",
        "Strong problem-solving skills and attention to detail",
      ],
      benefits: [
        "Competitive salary with stock options",
        "Remote work with flexible hours",
        "Health, vision, and dental coverage",
        "Professional growth and training programs",
      ],
      isOpen: true,
    },
    {
      id: "7",
      title: "Sales (B-2-B) Support",
      department: "Sales",
      location: "New York, United States",
      type: "Full-time",
      experience: "2+ years",
      description:
        "We are looking for a dedicated Sales (B-2-B) Support professional to assist our sales team in managing client relationships and driving business growth. You'll provide administrative support, handle inquiries, and ensure smooth communication with business clients.",
      requirements: [
        "Experience in B2B sales support or customer service",
        "Excellent verbal and written communication skills",
        "Proficiency with CRM software (e.g., Salesforce, HubSpot)",
        "Ability to manage multiple tasks and prioritize effectively",
        "Strong organizational skills and attention to detail",
      ],
      benefits: [
        "Competitive base salary with commission opportunities",
        "Remote work flexibility",
        "Health insurance and wellness programs",
        "Career development and training support",
        "Paid holidays and personal time off",
      ],
      isOpen: true,
    },
  ];
  const companyValues = [
    {
      icon: <Heart className="h-8 w-8 text-brand-teal" />,
      title: "Passion for Innovation",
      description:
        "We're driven by curiosity and the desire to solve complex problems with creative solutions.",
    },
    {
      icon: <Users className="h-8 w-8 text-brand-teal" />,
      title: "Collaboration First",
      description:
        "Great ideas come from diverse perspectives working together towards common goals.",
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-teal" />,
      title: "Fast Execution",
      description: "We move quickly, learn from failures, and iterate to deliver value faster.",
    },
    {
      icon: <Globe className="h-8 w-8 text-brand-teal" />,
      title: "Global Impact",
      description: "Our solutions help businesses worldwide become more efficient and innovative.",
    },
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: <Users className="h-6 w-6" /> },
    { number: "25+", label: "Countries", icon: <Globe className="h-6 w-6" /> },
    { number: "100+", label: "Projects Delivered", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
  ];

  const openPositions = jobPositions.filter((job) => job.isOpen);

  const handleViewJob = (job: JobPosition) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleApply = (jobTitle: string) => {
    setApplicationForm((prev) => ({ ...prev, jobPosition: jobTitle }));
    setIsApplicationModalOpen(true);
    setIsModalOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (validTypes.includes(file.type)) {
        setApplicationForm((prev) => ({ ...prev, cv: file }));
        setCvError("");
        console.log("File selected:", file);
      } else {
        setCvError("Please select a valid file type (.pdf, .doc, .docx)");
        setApplicationForm((prev) => ({ ...prev, cv: null }));
      }
    }
  };

  const handleInputChange = (field: keyof ApplicationForm, value: string) => {
    setApplicationForm((prev) => ({ ...prev, [field]: value }));
    console.log(value);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (validTypes.includes(file.type)) {
        setApplicationForm((prev) => ({ ...prev, cv: file }));
        setCvError("");
      } else {
        setCvError("Please select a valid file type (.pdf, .doc, .docx)");
        setApplicationForm((prev) => ({ ...prev, cv: null }));
      }
    }
  };

  // const handleSubmitApplication = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     // Prepare EmailJS template parameters
  //     const templateParams = {
  //       to_name: "HR Team",
  //       from_name: applicationForm.name,
  //       from_email: applicationForm.email,
  //       job_position: applicationForm.jobPosition,
  //       message: `New job application received for ${applicationForm.jobPosition} position.`,
  //     };

  //     // Send email using EmailJS
  //     const result = await emailjs.send(
  //       JOB_APPLICATION_EMAILJS_CONFIG.SERVICE_ID,
  //       JOB_APPLICATION_EMAILJS_CONFIG.TEMPLATE_ID,
  //       templateParams,
  //       JOB_APPLICATION_EMAILJS_CONFIG.PUBLIC_KEY
  //     );

  //     console.log("Email sent successfully:", result);

  //     // Reset form and close modal
  //     setApplicationForm({
  //       name: "",
  //       email: "",
  //       jobPosition: "",
  //       cv: null,
  //     });
  //     setCvError("");
  //     setIsApplicationModalOpen(false);

  //     // Reset form and close modal
  //     handleCloseModal();
  //     // Show success message
  //     alert("Application submitted successfully! We'll get back to you soon.");
  //   } catch (error) {
  //     console.error("Error submitting application:", error);
  //     alert("There was an error submitting your application. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!applicationForm.name || !applicationForm.email || !applicationForm.cv) {
        const errorMsg = "Please fill in all required fields and upload your CV.";
        toast({
          title: "Validation Error",
          description: errorMsg,
          variant: "destructive",
        });
        return;
      }

      // Upload CV file to Supabase storage
      const fileUrl = await uploadFileToSupabase(applicationForm.cv);

      // Prepare EmailJS template parameters
      const templateParams = {
        to_name: "HR Team",
        from_name: applicationForm.name,
        from_email: applicationForm.email,
        job_position: applicationForm.jobPosition,
        cv_filename: applicationForm.cv.name,
        cv_size: `${(applicationForm.cv.size / 1024 / 1024).toFixed(2)} MB`,
        cv_download_url: fileUrl,
        time: new Date().toLocaleString(), // optional: display time in email template
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        JOB_APPLICATION_EMAILJS_CONFIG.SERVICE_ID,
        JOB_APPLICATION_EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        JOB_APPLICATION_EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("Application email sent successfully:", result);

      // Reset form and close modal
      setApplicationForm({
        name: "",
        email: "",
        jobPosition: "",
        cv: null,
      });
      setCvError("");
      setIsApplicationModalOpen(false);

      // Show success toast
      const successMsg = "Application submitted successfully! We'll get back to you soon.";
      toast({
        title: "Application Submitted!",
        description: successMsg,
        variant: "default",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      const errorMsg = "There was an error submitting your application. Please try again.";
      toast({
        title: "Submission Failed",
        description: errorMsg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setApplicationForm({
      name: "",
      email: "",
      jobPosition: "",
      cv: null,
    });
    setCvError("");
    setIsApplicationModalOpen(false);
  };

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
              <Rocket className="h-4 w-4" />
              <span className="text-sm font-medium">We're Hiring!</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand-teal/90 to-white bg-clip-text text-transparent">
              Join Our Team
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Help us build the future of technology. We're looking for passionate individuals who
              want to make a difference and grow with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() =>
                  document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" })
                }>
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white bg-transparent hover:bg-white hover:text-brand-navy px-8 py-3 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1">
                Learn About Culture
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-10 animate-bounce">
          <div className="w-20 h-20 bg-brand-teal rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 animate-pulse">
          <div className="w-32 h-32 bg-brand-blue rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Stats Section - Light */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-full group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-brand-navy mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-navy/80 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Work With <span className="text-brand-teal">Us?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in creating an environment where innovation thrives and people can do their
              best work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {companyValues.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Culture & Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building2 className="h-6 w-6 text-brand-teal mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Flexible Work Environment</h4>
                    <p className="text-gray-300">
                      Remote-first culture with flexible hours and locations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-6 w-6 text-brand-teal mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Innovation Labs</h4>
                    <p className="text-gray-300">
                      Dedicated time for exploring new ideas and technologies
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-brand-teal mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Career Growth</h4>
                    <p className="text-gray-300">
                      Clear career paths and continuous learning opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-teal/20 to-brand-blue/20 rounded-2xl p-8 border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-4">Perks & Benefits</h4>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-brand-teal" />
                  <span>Competitive salary & equity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-brand-teal" />
                  <span>Health, dental & vision insurance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-brand-teal" />
                  <span>401(k) with company match</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-brand-teal" />
                  <span>Unlimited PTO</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-brand-teal" />
                  <span>Professional development budget</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-brand-teal" />
                  <span>Home office setup allowance</span>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </section>

      {/* Open Positions Section - Light */}
      <section id="open-positions" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <Briefcase className="h-4 w-4" />
              <span className="text-sm font-medium">Current Openings</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Open <span className="text-brand-teal">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to join our team? Check out our current openings and find the perfect role for
              you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((job) => (
              <Card
                key={job.id}
                className="transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-gray-900">{job.title}</CardTitle>
                    <Badge variant="secondary" className="bg-brand-teal/10 text-brand-teal">
                      {job.type}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center space-x-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.department}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.experience}</span>
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-700 mb-6 line-clamp-3">{job.description}</p>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white transition-all duration-300"
                      onClick={() => handleViewJob(job)}>
                      View Details
                    </Button>
                    <Button
                      className="flex-1 bg-brand-teal hover:bg-brand-teal/90 text-white transition-all duration-300"
                      onClick={() => handleApply(job.title)}>
                      <Send className="h-4 w-4 mr-2" />
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {openPositions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No open positions at the moment. Check back later or send us your resume for future
                opportunities!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full mb-6 border border-brand-teal/30">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Join Our Journey</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
              Don't See the Right <span className="text-brand-teal">Role?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals to join our team. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@dexterztechnologies.com?subject=Job%20Application&body=Hello%20Dexterz%20Technologies."
                className="inline-block">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-brand-teal text-brand-teal bg-white hover:bg-brand-teal hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Send Us An Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[95%] md:w-full max-w-4xl max-h-[90vh] overflow-y-auto md:mx-auto">
          <DialogHeader>
            <div className="flex items-start">
              <div>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  {selectedJob?.title}
                  <Badge variant="secondary" className="bg-brand-teal/10 text-brand-teal ml-4">
                    {selectedJob?.type}
                  </Badge>
                </DialogTitle>
                <DialogDescription className="text-gray-600 mt-2">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{selectedJob?.department}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedJob?.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{selectedJob?.experience}</span>
                    </span>
                  </div>
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h3>
              <p className="text-gray-700 leading-relaxed">{selectedJob?.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {selectedJob?.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {selectedJob?.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" className="flex-1" onClick={() => setIsModalOpen(false)}>
                Close
              </Button>
              <Button
                className="flex-1 bg-brand-teal hover:bg-brand-teal/90 text-white"
                onClick={() => selectedJob && handleApply(selectedJob.title)}>
                <Send className="h-4 w-4 mr-2" />
                Apply Now
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Application Form Modal */}
      <Dialog open={isApplicationModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="w-[95%] md:w-full max-w-2xl max-h-[90vh] overflow-y-auto md:mx-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-brand-teal">
              Apply for {applicationForm.jobPosition}
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Please fill out the form below to submit your application. We'll review your
              information and get back to you soon.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmitApplication} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name *
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    required
                    value={applicationForm.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="pl-10"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    required
                    value={applicationForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cv" className="text-sm font-medium text-gray-700">
                CV/Resume *
              </Label>
              <div className="relative">
                {!applicationForm.cv ? (
                  <div
                    className={`w-full p-6 border-2 border-dashed rounded-lg transition-all duration-300 cursor-pointer ${isDragOver
                        ? "border-brand-teal bg-brand-teal/10"
                        : "border-gray-300 bg-gray-50 hover:bg-gray-100"
                      }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById("cv")?.click()}>
                    <Input
                      id="cv"
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <div className="text-center text-gray-600">
                      <div className="flex justify-center items-center mb-3">
                        <Upload
                          className={`h-6 w-6 ${isDragOver ? "text-brand-teal" : "text-brand-teal"
                            }`}
                        />
                      </div>
                      <p className="text-sm">
                        {isDragOver ? "Drop your file here" : "Drag & Drop your file here or"}
                      </p>
                      <button
                        type="button"
                        className="mt-2 text-brand-teal font-semibold hover:underline">
                        Browse Files
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full p-4 border-2 border-brand-teal rounded-lg bg-brand-teal/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-brand-teal/10 rounded-full">
                          <Upload className="h-5 w-5 text-brand-teal" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{applicationForm.cv.name}</p>
                          <p className="text-sm text-gray-500">
                            {(applicationForm.cv.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => document.getElementById("cv-change")?.click()}
                          className="text-brand-teal border-brand-teal/30 hover:bg-brand-teal/10">
                          Change
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setApplicationForm((prev) => ({ ...prev, cv: null }))}
                          className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {/* Hidden input for changing file */}
                    <Input
                      id="cv-change"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                )}
                {cvError && (
                  <p className="text-sm text-red-600 mt-2 flex items-center">
                    <X className="h-4 w-4 mr-1" />
                    {cvError}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" className="flex-1" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-brand-teal hover:bg-brand-teal/90 text-white"
                disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Careers;
