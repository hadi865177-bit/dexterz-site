
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      
      <Navbar />
      <main className="flex-grow pt-16 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
