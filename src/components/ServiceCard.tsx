import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="card-premium group">
      <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;