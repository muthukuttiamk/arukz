import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  
  const serviceData = {
    1: {
      title: "Search Engine Optimization (SEO)",
      category: "Core Digital Marketing",
      icon: "🔍",
      description: "Improve your Google ranking, drive organic traffic, and grow brand visibility with our comprehensive SEO strategies.",
      details: [
        "Our SEO services help businesses achieve sustainable growth through organic search visibility. We conduct thorough keyword research, optimize website structure, and create content that ranks higher on search engines.",
        "We focus on both on-page and off-page optimization, ensuring your website meets all modern SEO standards while providing exceptional user experience that converts visitors into customers."
      ],
      features: [
        "Comprehensive keyword research and analysis",
        "On-page optimization and technical SEO",
        "High-quality backlink building strategies",
        "Local SEO for location-based businesses",
        "Monthly performance reports and analytics",
        "Competitor analysis and market insights"
      ],
      benefits: [
        "Increased organic traffic and visibility",
        "Higher search engine rankings",
        "Better user experience and site performance",
        "Long-term sustainable growth",
        "Improved brand credibility and trust",
        "Higher conversion rates and ROI"
      ],
      process: [
        "Website audit and current ranking analysis",
        "Keyword strategy development",
        "On-page and technical optimization",
        "Content creation and optimization",
        "Link building and authority development", 
        "Continuous monitoring and optimization"
      ]
    },
    2: {
      title: "Social Media Marketing (SMM)",
      category: "Core Digital Marketing", 
      icon: "📱",
      description: "Manage and grow presence across Facebook, Instagram, LinkedIn, and more with strategic social media campaigns.",
      details: [
        "Transform your social media presence with our comprehensive SMM strategies. We create engaging content, manage your community, and run targeted campaigns across all major platforms.",
        "Our team understands the nuances of each platform and creates tailored content that resonates with your audience, builds brand loyalty, and drives measurable business results."
      ],
      features: [
        "Multi-platform social media management",
        "Content creation and curation strategy",
        "Community management and engagement",
        "Social media advertising campaigns",
        "Influencer collaboration programs",
        "Performance analytics and reporting"
      ],
      benefits: [
        "Increased brand awareness and reach",
        "Higher audience engagement rates",
        "Improved customer relationships",
        "Enhanced brand reputation management",
        "Direct sales and lead generation",
        "Cost-effective marketing ROI"
      ],
      process: [
        "Social media audit and strategy planning",
        "Content calendar development",
        "Creative content production",
        "Community engagement and management",
        "Paid advertising campaign setup",
        "Performance tracking and optimization"
      ]
    },
    // Add more services as needed
  };

  const service = serviceData[parseInt(serviceId || '1') as keyof typeof serviceData];
  
  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link to="/services" className="flex items-center text-primary hover:text-primary/80 transition-colors mr-6">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4">{service.icon}</div>
                <div>
                  <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{service.title}</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-lg py-4 px-8">
                  Get Started Now
                </Link>
                <Link to="/pricing" className="btn-secondary text-lg py-4 px-8">
                  View Pricing
                </Link>
              </div>
            </div>
            
            <div className="animate-fade-in-up">
              <div className="card-premium">
                <h3 className="text-2xl font-bold mb-4">Quick Overview</h3>
                <div className="space-y-4">
                  {service.details.map((detail, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="scroll-reveal">
              <h2 className="text-3xl font-bold mb-8">What's Included</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="scroll-reveal">
              <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Step-by-step approach to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="card-premium text-center scroll-reveal hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <p className="text-muted-foreground">{step}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's discuss how this service can help grow your business and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90 text-lg py-4 px-10">
                <span className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <Link to="/services" className="btn-secondary bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg py-4 px-10">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;