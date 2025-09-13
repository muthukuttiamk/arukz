import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard = ({ name, price, period, description, features, isPopular }: PricingCardProps) => {
  return (
    <div className={`card-premium relative ${isPopular ? 'ring-2 ring-primary shadow-glow' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-gradient">₹{price}</span>
          <span className="text-muted-foreground ml-2">/{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Link 
        to="/contact"
        className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
          isPopular 
            ? 'btn-primary' 
            : 'bg-muted text-muted-foreground hover:bg-primary hover:text-white'
        }`}
      >
        Get Started
      </Link>
    </div>
  );
};

export default PricingCard;