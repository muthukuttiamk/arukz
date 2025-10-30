import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight, Search, Share2, MousePointer, FileText, Mail, Users, Trophy, Video, Smartphone, TrendingUp, Palette, Eye, Globe, Package, Code, Map, Target, Camera, Facebook, Linkedin, Twitter, Youtube, Tv, Radio, ShoppingCart, Star, Megaphone, Calendar, Newspaper, Heart, Vote, Bot, Cpu, Zap, VolumeX, Shield, BarChart3, Brain, Headphones, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import { serviceBreadcrumb } from '../utils/structuredData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  
  // Service icons mapping
  const serviceIcons: { [key: string]: any } = {
    1: Search, 2: Share2, 3: MousePointer, 4: FileText, 5: Mail, 6: Users, 7: Trophy, 8: Video, 9: Smartphone, 10: TrendingUp,
    11: Palette, 12: Eye, 13: Share2, 14: Globe, 15: Package, 16: Code, 17: Smartphone, 18: Map, 19: Target, 20: Camera,
    21: Facebook, 22: Linkedin, 23: Twitter, 24: Youtube, 25: Tv, 26: Eye, 27: Radio, 28: ShoppingCart, 29: Star, 30: MessageSquare, 31: Megaphone,
    32: Share2, 33: Headphones, 34: ShoppingCart, 35: Calendar, 36: Globe, 37: Map, 38: Calendar, 39: Newspaper, 40: Heart, 41: Vote,
    42: Bot, 43: MessageSquare, 44: Cpu, 45: Eye, 46: Globe, 47: Zap, 48: VolumeX, 49: BarChart3, 50: Brain, 51: Shield
  };
  
  // Comprehensive service data for all 51 services
  const allServicesData: { [key: string]: any } = {
    1: {
      title: "Search Engine Optimization (SEO)",
      category: "Core Digital Marketing",
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
      description: "Manage and grow presence across Facebook, Instagram, LinkedIn, and more with strategic social media campaigns.",
      details: [
        "Transform your social media presence with our comprehensive SMM strategies. We create engaging content, manage your community, and run targeted campaigns across all major platforms.",
        "Our team understands the nuances of each platform and creates tailored content that resonates with your audience, builds brand loyalty, and drives measurable business results."
      ],
      features: [
        "Multi-platform content creation and management",
        "Community management and engagement",
        "Targeted advertising campaigns",
        "Brand voice development and consistency",
        "Social media analytics and reporting",
        "Influencer collaboration strategies"
      ],
      benefits: [
        "Increased brand awareness and reach",
        "Higher engagement and customer loyalty",
        "Direct communication with target audience",
        "Cost-effective marketing solutions",
        "Real-time customer feedback and insights",
        "Improved website traffic and conversions"
      ],
      process: [
        "Social media audit and strategy planning",
        "Content calendar development",
        "Creative content production",
        "Campaign implementation and monitoring",
        "Community engagement and management",
        "Performance analysis and optimization"
      ]
    }
  };

  // Generate comprehensive data for all services (3-51)
  const generateServiceData = (id: number, title: string, category: string, description: string) => ({
    title,
    category,
    description,
    details: [
      `Our comprehensive ${title.toLowerCase()} services are designed to deliver exceptional results for businesses of all sizes. We combine industry expertise with cutting-edge technology to create strategies that drive measurable growth and sustainable success.`,
      `With years of experience in digital marketing and a proven track record of successful campaigns, we understand what it takes to make your business stand out in today's competitive landscape. Our approach is data-driven, customer-focused, and results-oriented.`
    ],
    features: [
      "Strategic planning and implementation",
      "Advanced analytics and reporting", 
      "Dedicated account management",
      "Creative content development",
      "Performance optimization",
      "Regular monitoring and updates"
    ],
    benefits: [
      "Increased brand visibility and awareness",
      "Higher engagement and conversion rates",
      "Improved ROI and business growth",
      "Enhanced customer relationships",
      "Competitive market advantage",
      "Sustainable long-term results"
    ],
    process: [
      "Initial consultation and strategy development",
      "Campaign setup and implementation", 
      "Content creation and optimization",
      "Launch and active management",
      "Performance monitoring and analysis",
      "Continuous improvement and scaling"
    ]
  });

  // Complete service definitions for all 51 services
  const allServiceTitles = [
    "", "", // 1-2 already defined above
    "Pay-Per-Click (PPC) Advertising", "Content Marketing", "Email Marketing & Automation", "Influencer Marketing", "Affiliate Marketing", "Video Marketing", "Mobile Marketing", "Conversion Rate Optimization (CRO)",
    "Logo & Brand Identity Design", "Poster & Creative Design", "Social Media Content Creation", "Corporate Branding", "Packaging & Product Design", "Website Design & Development", "UI/UX Design", "Google Maps Business Profile Setup", "Brand Strategy Consulting", "Photography & Videography",
    "Facebook & Instagram Ads", "LinkedIn Ads", "Twitter (X) Ads", "YouTube Ads", "OTT Platform Advertising", "Print & Outdoor Advertising", "TV & Radio Advertising", "Marketplace Advertising", "App Store Optimization (ASO)", "WhatsApp & Telegram Marketing", "Full-Spectrum Advertising Campaigns",
    "Full Social Media Creation & Management", "Podcast Marketing", "E-commerce Marketing", "Festive Campaign Marketing", "Regional Language Marketing", "Local SEO & Hyperlocal Ads", "Event Marketing (Online + Offline)", "PR & Media Coverage", "Customer Loyalty & Referral Programs", "Political & Election Campaign Management",
    "AI-Powered Marketing Automation", "Chatbot Development", "Programmatic Advertising", "AR/VR Marketing", "Metaverse Branding", "NFT & Web3 Marketing", "Voice Search Optimization", "Data Analytics & Predictive Insights", "Personalized Marketing with AI", "Cybersecurity & Brand Protection"
  ];

  const serviceDescriptions = [
    "", "", // 1-2 already defined
    "Smart paid ads on Google, Meta, and other platforms for instant reach and maximum ROI.",
    "Engaging blogs, articles, and content strategies to attract and convert your target audience.",
    "Personalized email campaigns that build trust, nurture leads, and drive repeat sales.",
    "Strategic collaborations with relevant influencers to grow brand authority and reach.",
    "Commission-based partner programs designed to increase sales and expand market reach.",
    "Professional ad videos, reels, and shorts to boost engagement across all platforms.",
    "App-based and SMS-driven campaigns tailored specifically for mobile audiences.",
    "Optimize landing pages and sales funnels to increase conversions and maximize revenue.",
    "Unique and memorable branding solutions that make your business unforgettable.",
    "Stunning posters, creatives, and festival campaigns that capture attention and drive action.",
    "High-quality posts, reels, and stories crafted specifically for social media engagement.",
    "End-to-end identity development services for startups and established enterprises.",
    "Eye-catching packaging designs optimized for both retail and e-commerce success.",
    "Custom, responsive, and SEO-friendly websites that convert visitors into customers.",
    "Modern, user-focused interfaces designed to enhance user experience and conversions.",
    "Professional Google Business Profile setup to rank higher in local search results.",
    "Strategic planning and consulting to position your brand for long-term growth and success.",
    "Professional photography and videography services for products, events, and campaigns.",
    "Targeted advertising campaigns across Facebook and Instagram for maximum engagement.",
    "Professional B2B advertising campaigns designed to reach decision-makers on LinkedIn.",
    "Real-time advertising strategies to capture trending conversations and viral moments.",
    "Engaging video advertising campaigns that capture attention and drive conversions.",
    "Strategic advertising placements across Hotstar, SonyLiv, JioCinema, and other OTT platforms.",
    "Traditional advertising solutions including hoardings, flyers, and banners for local reach.",
    "Comprehensive TV and radio advertising campaigns with seamless digital integration.",
    "Strategic promotions across Amazon, Flipkart, and other major e-commerce marketplaces.",
    "Professional app store optimization to improve rankings in Play Store and App Store.",
    "Direct communication campaigns through WhatsApp and Telegram for personalized engagement.",
    "End-to-end advertising solutions covering local, regional, national, and global reach.",
    "Complete social media setup and management services for comprehensive online presence.",
    "Build influence and authority through professional podcast branding and promotion strategies.",
    "Specialized marketing strategies for Shopify, WooCommerce, and custom online stores.",
    "Special campaign management for festivals like Diwali, Pongal, Holi, and regional celebrations.",
    "Targeted advertising and content creation in Tamil, Hindi, Telugu, and other regional languages.",
    "Dominate neighborhood searches with hyperlocal SEO and location-based advertising strategies.",
    "Comprehensive event marketing services for product launches, conferences, and exhibitions.",
    "Professional PR services to get featured in newspapers, magazines, TV, and online media.",
    "Strategic loyalty programs and referral systems to build repeat customers and word-of-mouth growth.",
    "End-to-end political and election campaign management with comprehensive voter outreach strategies.",
    "Advanced marketing automation powered by artificial intelligence and machine learning algorithms.",
    "Smart chatbot development for WhatsApp, websites, and mobile applications.",
    "Automated AI-driven advertising placements optimized for the best possible return on investment.",
    "Immersive virtual and augmented reality experiences for cutting-edge brand storytelling.",
    "Digital showrooms, virtual events, and brand experiences in metaverse platforms.",
    "Advanced blockchain-based branding solutions including NFT marketing and Web3 strategies.",
    "Optimization strategies for voice search queries through Alexa, Siri, and Google Assistant.",
    "Real-time business intelligence dashboards with predictive analytics and market insights.",
    "AI-powered personalized marketing campaigns tailored for individual customer segments.",
    "Comprehensive cybersecurity solutions to protect brand reputation and digital assets."
  ];

  const serviceCategories = [
    "", "", // 1-2 already defined
    "Core Digital Marketing", "Core Digital Marketing", "Core Digital Marketing", "Core Digital Marketing", "Core Digital Marketing", "Core Digital Marketing", "Core Digital Marketing", "Core Digital Marketing",
    "Creative & Branding Solutions", "Creative & Branding Solutions", "Creative & Branding Solutions", "Creative & Branding Solutions", "Creative & Branding Solutions", "Creative & Branding Solutions", "Creative & Branding Solutions", "Creative & Branding Solutions", "Creative & Branding Solutions", "Creative & Branding Solutions",
    "Advertising & Promotion", "Advertising & Promotion", "Advertising & Promotion", "Advertising & Promotion", "Advertising & Promotion", "Advertising & Promotion", "Advertising & Promotion", "Advertising & Promotion", "Advertising & Promotion", "Advertising & Promotion", "Advertising & Promotion",
    "Regional-Level Advanced Services", "Regional-Level Advanced Services", "Regional-Level Advanced Services", "Regional-Level Advanced Services", "Regional-Level Advanced Services", "Regional-Level Advanced Services", "Regional-Level Advanced Services", "Regional-Level Advanced Services", "Regional-Level Advanced Services", "Regional-Level Advanced Services",
    "Global Future-Tech Services", "Global Future-Tech Services", "Global Future-Tech Services", "Global Future-Tech Services", "Global Future-Tech Services", "Global Future-Tech Services", "Global Future-Tech Services", "Global Future-Tech Services", "Global Future-Tech Services", "Global Future-Tech Services"
  ];

  // Generate all service data
  for (let i = 3; i <= 51; i++) {
    if (!allServicesData[i] && allServiceTitles[i]) {
      allServicesData[i] = generateServiceData(
        i, 
        allServiceTitles[i], 
        serviceCategories[i], 
        serviceDescriptions[i]
      );
    }
  }

  const currentService = allServicesData[serviceId || '1'];
  const IconComponent = serviceIcons[serviceId || '1'] || Search;

  if (!currentService) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gradient mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${currentService.title} - Digital Marketing Service | Arukz`}
        description={currentService.description}
        keywords={`${currentService.title}, digital marketing, ${currentService.category}`}
        canonicalUrl={`https://arukz.com/services/${serviceId}`}
        structuredData={serviceBreadcrumb(currentService.title, serviceId || '1')}
      />
      <div className="pt-20">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/services" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="mb-4">
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {currentService.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                {currentService.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {currentService.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/pricing" className="btn-secondary">
                  View Pricing
                </Link>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="card-premium text-center">
                <div className="w-24 h-24 rounded-3xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <IconComponent className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Service</h3>
                <p className="text-muted-foreground">
                  Expert implementation with dedicated support and measurable results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="scroll-reveal">
              <h2 className="text-3xl font-bold mb-8 text-gradient">About This Service</h2>
              <div className="space-y-6">
                {currentService.details?.map((detail: string, index: number) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="scroll-reveal">
              <h3 className="text-3xl font-bold mb-8 text-gradient">Key Features</h3>
              <div className="space-y-4">
                {currentService.features?.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="scroll-reveal">
              <h3 className="text-3xl font-bold mb-8 text-gradient">Benefits</h3>
              <div className="grid gap-6">
                {currentService.benefits?.map((benefit: string, index: number) => (
                  <div key={index} className="card-premium">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mr-4">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="scroll-reveal">
              <h3 className="text-3xl font-bold mb-8 text-gradient">Our Process</h3>
              <div className="space-y-6">
                {currentService.process?.map((step: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white font-semibold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              Let's discuss how {currentService.title.toLowerCase()} can help grow your business.
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90 text-lg py-4 px-10">
                Get Free Consultation
              </Link>
              <Link to="/services" className="btn-secondary bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg py-4 px-10">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ServiceDetail;