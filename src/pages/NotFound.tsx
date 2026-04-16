import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, FileX, AlertCircle, Search, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="min-h-[80vh] flex items-center justify-center section-padding relative overflow-hidden">
        {/* Animated Background Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <FileX className="absolute top-20 left-20 w-8 h-8 text-primary/10 animate-float" style={{ animationDelay: '0s' }} />
          <Search className="absolute top-40 right-32 w-6 h-6 text-secondary/15 animate-float" style={{ animationDelay: '2s' }} />
          <AlertCircle className="absolute bottom-40 left-16 w-10 h-10 text-teal-500/50 animate-float" style={{ animationDelay: '4s' }} />
          <Code className="absolute top-60 left-1/3 w-7 h-7 text-teal-500/50 animate-float" style={{ animationDelay: '1s' }} />
          <Globe className="absolute bottom-32 right-20 w-9 h-9 text-teal-500/50 animate-float" style={{ animationDelay: '3s' }} />
          <FileX className="absolute bottom-60 right-1/3 w-6 h-6 text-secondary/10 animate-float" style={{ animationDelay: '5s' }} />
          
          {/* Floating geometric shapes */}
          <div className="absolute top-32 right-16 w-20 h-20 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-48 left-32 w-16 h-16 rounded-full bg-gradient-to-r from-secondary/8 to-primary/8 animate-float blur-sm" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-48 left-1/4 w-12 h-12 rounded-full bg-gradient-to-r from-primary/6 to-secondary/6 animate-float blur-lg" style={{ animationDelay: '6s' }}></div>
          <div className="absolute bottom-40 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-secondary/4 to-primary/4 animate-float blur-md" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            {/* Clean 404 Design */}
            <div className="mb-12">
              <h1 className="text-9xl md:text-[12rem] lg:text-[14rem] font-black bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-4">
                404
              </h1>
            </div>

            {/* Content */}
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                  Page Not Found
                </h2>
                <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  We couldn't find the page you're looking for. It might have been moved, 
                  deleted, or you entered the wrong URL.
                </p>
              </div>

              {/* Single Action Button */}
              <div className="pt-4">
                <Button asChild size="lg" className="group px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/">
                    <Home className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
