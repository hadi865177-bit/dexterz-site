
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  category?: string;
}

const ServiceCard = ({ title, description, icon, link, category }: ServiceCardProps) => {
  return (
    <div className="bg-white hover-scale card-shadow rounded-lg p-6 border border-gray-100 flex flex-col h-full">
      <div className="mb-4">
        <div className="bg-brand-teal/10 p-3 rounded-lg inline-flex items-center justify-center text-brand-teal w-12 h-12">
          {icon}
        </div>
        {category && (
          <span className="text-xs font-medium bg-brand-navy/10 text-brand-navy px-2 py-1 rounded-full ml-2">
            {category}
          </span>
        )}
      </div>
      <h3 className="font-bold text-lg mb-2 text-brand-navy">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-brand-teal font-medium hover:underline mt-auto"
      >
        Learn more <ArrowRight className="ml-1" size={16} />
      </Link>
    </div>
  );
};

export default ServiceCard;
