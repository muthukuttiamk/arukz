import { ExternalLink, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import portfolioImage1 from '../assets/portfolio-1.jpg';
import portfolioImage2 from '../assets/portfolio-2.jpg';
import portfolioImage3 from '../assets/portfolio-3.jpg';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Social Media Campaign - Local Restaurant',
      category: 'Social Media Management',
      image: portfolioImage1,
      description: 'Increased followers by 400% and doubled customer footfall through strategic social media campaigns.',
      results: {
        engagement: '+300%',
        followers: '2.5K to 12K',
        sales: '+200%'
      }
    },
    {
      id: 2,
      title: 'Political Campaign - Local Elections',
      category: 'Campaign Management',
      image: portfolioImage2,
      description: 'Managed comprehensive digital campaign reaching 50,000+ voters with targeted messaging.',
      results: {
        reach: '50K+ voters',
        engagement: '+450%',
        awareness: '+80%'
      }
    },
    {
      id: 3,
      title: 'Festival Poster Designs',
      category: 'Content Design',
      image: portfolioImage3,
      description: 'Created vibrant festival posters for traditional events, generating high community engagement.',
      results: {
        designs: '25+ posters',
        engagement: '+250%',
        shares: '1000+'
      }
    }
  ];

  const managedPages = [
    {
      name: 'Our Tirunelveli',
      followers: '44,000+',
      category: 'Local Community',
      description: 'Local news, events, and community updates for Tirunelveli region',
      engagement: 'High'
    },
    {
      name: 'Thoothukudi People',
      followers: '189,000+',
      category: 'Regional News',
      description: 'Comprehensive coverage of Thoothukudi district news and events',
      engagement: 'Excellent'
    },
    {
      name: 'Uvari Devotional',
      followers: '41,000+',
      category: 'Spiritual Content',
      description: 'Religious content, temple updates, and spiritual guidance',
      engagement: 'Very High'
    },
    {
      name: 'Our Tuticorin',
      followers: '19,000+',
      category: 'Local Community',
      description: 'Local business promotion and community engagement platform',
      engagement: 'High'
    }
  ];

  const clientLogos = [
    'Local Restaurant Chain',
    'Political Campaign Office',
    'Cultural Association',
    'Educational Institution',
    'Healthcare Center',
    'Retail Business',
    'Event Management',
    'Religious Organization'
  ];

  const achievements = [
    { icon: Users, number: '300K+', label: 'Total Followers Managed' },
    { icon: TrendingUp, number: '50+', label: 'Successful Campaigns' },
    { icon: Award, number: '95%', label: 'Client Retention Rate' },
    { icon: ExternalLink, number: '200+', label: 'Projects Completed' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our successful projects and the impressive results we've achieved for our clients across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{achievement.number}</div>
                <div className="text-muted-foreground font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take a look at some of our most successful campaigns and the outstanding results we delivered.
            </p>
          </div>
          <div className="space-y-16">
            {portfolioItems.map((item, index) => (
              <div key={item.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`scroll-reveal ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-premium"
                  />
                </div>
                <div className={`scroll-reveal ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="mb-4">
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{item.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(item.results).map(([key, value], resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-2xl font-bold text-gradient">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Complete Service Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital marketing and technology solutions across 51 specialized services
            </p>
          </div>
          
          {/* Service Categories Grid */}
          <div className="space-y-16">
            {[
              {
                title: "Core Digital Marketing Services",
                services: [
                  "Search Engine Optimization (SEO)", "Social Media Marketing (SMM)", "Pay-Per-Click (PPC) Advertising", 
                  "Content Marketing", "Email Marketing & Automation", "Influencer Marketing", "Affiliate Marketing", 
                  "Video Marketing", "Mobile Marketing", "Conversion Rate Optimization (CRO)"
                ]
              },
              {
                title: "Creative & Branding Solutions", 
                services: [
                  "Logo & Brand Identity Design", "Poster & Creative Design", "Social Media Content Creation",
                  "Corporate Branding", "Packaging & Product Design", "Website Design & Development",
                  "UI/UX Design", "Google Maps Business Profile Setup", "Brand Strategy Consulting", "Photography & Videography"
                ]
              },
              {
                title: "Advertising & Promotion",
                services: [
                  "Facebook & Instagram Ads", "LinkedIn Ads", "Twitter (X) Ads", "YouTube Ads", "OTT Platform Advertising",
                  "Print & Outdoor Advertising", "TV & Radio Advertising", "Marketplace Advertising", "App Store Optimization (ASO)",
                  "WhatsApp & Telegram Marketing", "Full-Spectrum Advertising Campaigns"
                ]
              },
              {
                title: "Regional-Level Advanced Services",
                services: [
                  "Full Social Media Creation & Management", "Podcast Marketing", "E-commerce Marketing", "Festive Campaign Marketing",
                  "Regional Language Marketing", "Local SEO & Hyperlocal Ads", "Event Marketing (Online + Offline)", "PR & Media Coverage",
                  "Customer Loyalty & Referral Programs", "Political & Election Campaign Management"
                ]
              },
              {
                title: "Global Future-Tech Services",
                services: [
                  "AI-Powered Marketing Automation", "Chatbot Development", "Programmatic Advertising", "AR/VR Marketing",
                  "Metaverse Branding", "NFT & Web3 Marketing", "Voice Search Optimization", "Data Analytics & Predictive Insights",
                  "Personalized Marketing with AI", "Cybersecurity & Brand Protection"
                ]
              }
            ].map((category, categoryIndex) => (
              <div key={categoryIndex} className="scroll-reveal">
                <h3 className="text-2xl font-bold mb-8 text-gradient text-center">{category.title}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {category.services.map((service, serviceIndex) => {
                    const serviceId = categoryIndex * 10 + serviceIndex + 1;
                    return (
                      <Link 
                        key={serviceIndex}
                        to={`/services/${serviceId}`}
                        className="card-premium text-center hover:scale-105 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-3 group-hover:shadow-glow transition-all duration-300">
                          <span className="text-white font-bold text-sm">{serviceId}</span>
                        </div>
                        <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-tight">
                          {service}
                        </h4>
                        <div className="mt-2 flex items-center justify-center text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn More
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground">
              We're proud to work with diverse clients across various industries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="card-premium text-center scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-muted-foreground">{client.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-sm text-foreground">{client}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Client Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Arukz doubled our restaurant's social media following and increased customer visits by 200%. Outstanding results!",
                author: "Rajesh Kumar",
                role: "Restaurant Owner"
              },
              {
                quote: "Their political campaign management helped us reach over 50,000 voters effectively. Professional and reliable service.",
                author: "Priya Sharma",
                role: "Campaign Manager"
              },
              {
                quote: "The poster designs for our cultural events were creative and engaging. Community response was phenomenal!",
                author: "Arun Krishnan",
                role: "Event Organizer"
              }
            ].map((testimonial, index) => (
              <div key={index} className="card-premium scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let us help you achieve similar results for your business. Start your journey to digital marketing success today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90 text-lg py-4 px-10">
                Start Your Project
              </Link>
              <Link to="/services" className="btn-secondary bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg py-4 px-10">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;