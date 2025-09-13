import { Check, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PricingCard from '../components/PricingCard';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '15,000',
      period: 'month',
      description: 'Perfect for small businesses getting started with social media',
      features: [
        '2 Social Media Platforms',
        '12 Posts per Month',
        'Basic Content Creation',
        'Community Management',
        'Monthly Analytics Report',
        'Email Support'
      ]
    },
    {
      name: 'Standard',
      price: '25,000',
      period: 'month',
      description: 'Ideal for growing businesses seeking comprehensive marketing',
      features: [
        '4 Social Media Platforms',
        '20 Posts per Month',
        'Custom Content Design',
        'Paid Ad Management (₹5,000 ad spend)',
        'Community Management',
        'Bi-weekly Analytics Reports',
        'Phone & Email Support',
        'Content Calendar'
      ],
      isPopular: true
    },
    {
      name: 'Premium',
      price: '45,000',
      period: 'month',
      description: 'Complete solution for established businesses and campaigns',
      features: [
        'All Social Media Platforms',
        '30+ Posts per Month',
        'Professional Content Creation',
        'Advanced Paid Ad Management (₹15,000 ad spend)',
        'Influencer Collaborations',
        'Weekly Strategy Calls',
        'Real-time Analytics Dashboard',
        'Priority Support',
        'Brand Consulting',
        'Crisis Management'
      ]
    }
  ];

  const additionalServices = [
    { service: 'Custom Poster Design', price: '500', unit: 'per design' },
    { service: 'Video Content Creation', price: '2,000', unit: 'per video' },
    { service: 'Website Landing Page', price: '15,000', unit: 'one-time' },
    { service: 'SEO Optimization', price: '10,000', unit: 'per month' },
    { service: 'Email Marketing', price: '8,000', unit: 'per month' },
    { service: 'Brand Identity Package', price: '25,000', unit: 'one-time' }
  ];

  const testimonials = [
    {
      name: 'Kavitha Menon',
      business: 'Boutique Owner',
      content: 'The Standard package transformed our business. Sales increased 200% in just 3 months!',
      rating: 5
    },
    {
      name: 'Suresh Kumar',
      business: 'Restaurant Chain',
      content: 'Premium package delivered exceptional ROI. Our social media following grew from 500 to 25,000.',
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Pricing Plans</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transparent pricing with no hidden fees. Choose the perfect plan for your business growth needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <PricingCard {...plan} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 scroll-reveal">
            <p className="text-muted-foreground mb-4">
              All plans include setup assistance and 30-day money-back guarantee
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Get Custom Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your marketing strategy with our additional services, available as add-ons to any plan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((item, index) => (
              <div key={index} className="card-premium scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-foreground flex-1">{item.service}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gradient">₹{item.price}</div>
                    <div className="text-sm text-muted-foreground">{item.unit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                question: 'Can I upgrade or downgrade my plan anytime?',
                answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply from the next billing cycle.'
              },
              {
                question: 'What\'s included in the ad spend budget?',
                answer: 'The ad spend budget is separate from our service fee and goes directly to the platforms (Facebook, Google, etc.) for promoting your content.'
              },
              {
                question: 'Do you provide content in multiple languages?',
                answer: 'Yes, we create content in Tamil, English, and other regional languages based on your target audience needs.'
              },
              {
                question: 'How do you measure success?',
                answer: 'We track engagement rates, follower growth, website traffic, lead generation, and conversion rates. You\'ll receive detailed monthly reports.'
              },
              {
                question: 'Is there a contract commitment?',
                answer: 'We offer both monthly plans and discounted 6-month/annual packages. No long-term contracts required for monthly plans.'
              }
            ].map((faq, index) => (
              <div key={index} className="card-premium scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-premium scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-95" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Choose Your Plan?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Start growing your business today with our proven digital marketing strategies. 
              Get a free consultation to find the perfect plan for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90 text-lg py-4 px-10">
                Get Free Consultation
              </Link>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg py-4 px-10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;