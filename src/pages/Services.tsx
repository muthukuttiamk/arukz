import { Link } from 'react-router-dom';
import { 
  Search, Share2, MousePointer, FileText, Mail, Users, Trophy, Video, 
  Smartphone, TrendingUp, Palette, Eye, Globe, Package, Code, Map,
  Target, Camera, Facebook, Linkedin, Twitter, Youtube, Tv, Radio,
  ShoppingCart, Star, Megaphone, Calendar, Newspaper, Heart, Vote,
  Bot, Cpu, Zap, VolumeX, Shield, BarChart3, Brain, Headphones,
  MessageSquare, ArrowRight, CheckCircle
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: "Core Digital Marketing Services",
      subtitle: "Boost visibility, reach, and conversions",
      services: [
        { id: 1, icon: Search, title: "Search Engine Optimization (SEO)", description: "Improve your Google ranking, drive organic traffic, and grow brand visibility." },
        { id: 2, icon: Share2, title: "Social Media Marketing (SMM)", description: "Manage and grow presence across Facebook, Instagram, LinkedIn, and more." },
        { id: 3, icon: MousePointer, title: "Pay-Per-Click (PPC) Advertising", description: "Smart paid ads on Google, Meta, and other platforms for instant reach." },
        { id: 4, icon: FileText, title: "Content Marketing", description: "Engaging blogs, articles, and content strategies to attract and convert." },
        { id: 5, icon: Mail, title: "Email Marketing & Automation", description: "Personalized campaigns that build trust and repeat sales." },
        { id: 6, icon: Users, title: "Influencer Marketing", description: "Collaborations with relevant influencers to grow brand authority." },
        { id: 7, icon: Trophy, title: "Affiliate Marketing", description: "Commission-based partner programs to increase sales and reach." },
        { id: 8, icon: Video, title: "Video Marketing", description: "Professional ad videos, reels, and shorts to boost engagement." },
        { id: 9, icon: Smartphone, title: "Mobile Marketing", description: "App-based and SMS-driven campaigns tailored for mobile audiences." },
        { id: 10, icon: TrendingUp, title: "Conversion Rate Optimization (CRO)", description: "Optimize landing pages and funnels to increase sales." }
      ]
    },
    {
      title: "Creative & Branding Solutions",
      subtitle: "Build a strong and memorable identity",
      services: [
        { id: 11, icon: Palette, title: "Logo & Brand Identity Design", description: "Unique branding that makes your business unforgettable." },
        { id: 12, icon: Eye, title: "Poster & Creative Design", description: "Stunning posters, creatives, and festival campaigns." },
        { id: 13, icon: Share2, title: "Social Media Content Creation", description: "High-quality posts, reels, and stories crafted for engagement." },
        { id: 14, icon: Globe, title: "Corporate Branding", description: "End-to-end identity development for startups and enterprises." },
        { id: 15, icon: Package, title: "Packaging & Product Design", description: "Eye-catching packaging for both retail & e-commerce." },
        { id: 16, icon: Code, title: "Website Design & Development", description: "Custom, responsive, and SEO-friendly websites." },
        { id: 17, icon: Smartphone, title: "UI/UX Design", description: "Modern, user-focused interfaces that convert visitors to customers." },
        { id: 18, icon: Map, title: "Google Maps Business Profile Setup", description: "Rank in local search and attract nearby customers." },
        { id: 19, icon: Target, title: "Brand Strategy Consulting", description: "Strategic planning to position your brand for long-term growth." },
        { id: 20, icon: Camera, title: "Photography & Videography", description: "Professional shoots for products, events, and campaigns." }
      ]
    },
    {
      title: "Advertising & Promotion",
      subtitle: "Reach customers everywhere they are",
      services: [
        { id: 21, icon: Facebook, title: "Facebook & Instagram Ads", description: "Targeted campaigns with maximum ROI." },
        { id: 22, icon: Linkedin, title: "LinkedIn Ads", description: "B2B ad campaigns for professional audiences." },
        { id: 23, icon: Twitter, title: "Twitter (X) Ads", description: "Real-time ads to capture trending conversations." },
        { id: 24, icon: Youtube, title: "YouTube Ads", description: "Video advertising that captures attention." },
        { id: 25, icon: Tv, title: "OTT Platform Advertising", description: "Ads on Hotstar, SonyLiv, JioCinema & more." },
        { id: 26, icon: Eye, title: "Print & Outdoor Advertising", description: "Hoardings, flyers, and banners for local reach." },
        { id: 27, icon: Radio, title: "TV & Radio Advertising", description: "Traditional media campaigns with digital synergy." },
        { id: 28, icon: ShoppingCart, title: "Marketplace Advertising", description: "Promotions on Amazon, Flipkart, and e-commerce stores." },
        { id: 29, icon: Star, title: "App Store Optimization (ASO)", description: "Improve app ranking in Play Store & App Store." },
        { id: 30, icon: MessageSquare, title: "WhatsApp & Telegram Marketing", description: "Personalized direct communication campaigns." },
        { id: 31, icon: Megaphone, title: "Full-Spectrum Advertising Campaigns", description: "End-to-end ad solutions for local & global reach." }
      ]
    },
    {
      title: "Indian-Level Advanced Services",
      subtitle: "Made for Indian businesses & audiences",
      services: [
        { id: 32, icon: Share2, title: "Full Social Media Creation & Management", description: "Setup + manage all platforms for your brand." },
        { id: 33, icon: Headphones, title: "Podcast Marketing", description: "Build influence through podcast branding & promotions." },
        { id: 34, icon: ShoppingCart, title: "E-commerce Marketing", description: "Shopify, WooCommerce & custom store growth solutions." },
        { id: 35, icon: Calendar, title: "Festive Campaign Marketing", description: "Special Diwali, Pongal, Holi campaigns tailored for India." },
        { id: 36, icon: Globe, title: "Regional Language Marketing", description: "Ads & content in Tamil, Hindi, Telugu & more." },
        { id: 37, icon: Map, title: "Local SEO & Hyperlocal Ads", description: "Dominate your neighborhood searches." },
        { id: 38, icon: Calendar, title: "Event Marketing (Online + Offline)", description: "Campaigns for product launches, events, and expos." },
        { id: 39, icon: Newspaper, title: "PR & Media Coverage", description: "Get featured in newspapers, magazines, and TV." },
        { id: 40, icon: Heart, title: "Customer Loyalty & Referral Programs", description: "Build repeat customers and word-of-mouth growth." },
        { id: 41, icon: Vote, title: "Political & Election Campaign Management", description: "End-to-end voter outreach & branding." }
      ]
    },
    {
      title: "Global Future-Tech Services",
      subtitle: "Next-gen innovations for global brands",
      services: [
        { id: 42, icon: Bot, title: "AI-Powered Marketing Automation", description: "Data-driven campaigns powered by machine learning." },
        { id: 43, icon: MessageSquare, title: "Chatbot Development", description: "Smart bots for WhatsApp, websites, and apps." },
        { id: 44, icon: Cpu, title: "Programmatic Advertising", description: "Automated AI-driven ad placements for best ROI." },
        { id: 45, icon: Eye, title: "AR/VR Marketing", description: "Virtual experiences and immersive brand storytelling." },
        { id: 46, icon: Globe, title: "Metaverse Branding", description: "Digital showrooms and events in metaverse platforms." },
        { id: 47, icon: Zap, title: "NFT & Web3 Marketing", description: "Advanced blockchain-based branding solutions." },
        { id: 48, icon: VolumeX, title: "Voice Search Optimization", description: "Prepare for Alexa, Siri, and Google voice commands." },
        { id: 49, icon: BarChart3, title: "Data Analytics & Predictive Insights", description: "Real-time dashboards & business intelligence." },
        { id: 50, icon: Brain, title: "Personalized Marketing with AI", description: "Tailor-made campaigns for each customer segment." },
        { id: 51, icon: Shield, title: "Cybersecurity & Brand Protection", description: "Protect brand reputation and digital assets." }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-6 flex justify-center">
              <div className="flex items-center bg-primary/10 backdrop-blur-sm rounded-full px-6 py-2 border border-primary/20">
                <Target className="w-4 h-4 text-primary mr-2" />
                <span className="text-primary text-sm font-medium">360° Digital Growth Partner</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient" style={{ fontFamily: 'Inter, sans-serif' }}>arukz – Services</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Modern, minimal, responsive, and professional digital marketing and technology solutions for your business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg py-4 px-10">
                Get Custom Quote
              </Link>
              <Link to="/pricing" className="btn-secondary text-lg py-4 px-10">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 1 ? 'bg-muted/30' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">{category.title}</h2>
              <p className="text-lg text-muted-foreground italic">({category.subtitle})</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.services.map((service, index) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution, we follow a proven methodology to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Discovery & Analysis", desc: "Understanding your business, goals, and target audience" },
              { step: 2, title: "Strategy Development", desc: "Creating customized marketing strategies for your brand" },
              { step: 3, title: "Creative Execution", desc: "Designing and developing compelling content and campaigns" },
              { step: 4, title: "Campaign Launch", desc: "Implementing and monitoring campaigns across all channels" },
              { step: 5, title: "Optimization", desc: "Continuous testing and optimization for better performance" },
              { step: 6, title: "Report & Grow", desc: "Detailed reporting and scaling successful strategies" }
            ].map((process, index) => (
              <div key={index} className="card-premium text-center scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{process.title}</h3>
                <p className="text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized expertise across various industries with tailored marketing approaches
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Retail & E-commerce", "Healthcare & Wellness", "Food & Restaurants", "Real Estate",
              "Education & Training", "Technology & SaaS", "Fashion & Beauty", "Travel & Tourism",
              "Automotive", "Financial Services", "Entertainment", "Non-Profit Organizations"
            ].map((industry, index) => (
              <div key={index} className="card-premium text-center scroll-reveal" style={{ animationDelay: `${index * 0.05}s` }}>
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground">{industry}</h3>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Choose from our comprehensive range of services or let us create a custom solution for your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90 text-lg py-4 px-10">
                <span className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <Link to="/pricing" className="btn-secondary bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg py-4 px-10">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ service, delay }: { service: any; delay: number }) => {
  const { icon: Icon, title, description } = service;
  
  return (
    <div 
      className="card-premium group hover:scale-105 transition-all duration-300 cursor-pointer scroll-reveal" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Learn More
        <ArrowRight className="ml-1 w-4 h-4" />
      </div>
    </div>
  );
};

export default Services;