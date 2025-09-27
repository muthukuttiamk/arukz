import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight, Search, Share2, MousePointer, FileText, Mail, Users, Trophy, Video, Smartphone, TrendingUp, Palette, Eye, Globe, Package, Code, Map, Target, Camera, Facebook, Linkedin, Twitter, Youtube, Tv, Radio, ShoppingCart, Star, Megaphone, Calendar, Newspaper, Heart, Vote, Bot, Cpu, Zap, VolumeX, Shield, BarChart3, Brain, Headphones, MessageSquare } from 'lucide-react';

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

  // Generate data for remaining services (3-51)
  const serviceCategories = [
    {
      range: [3, 10],
      category: "Core Digital Marketing",
      services: [
        "Pay-Per-Click (PPC) Advertising - Smart paid ads on Google, Meta, and other platforms for instant reach.",
        "Content Marketing - Engaging blogs, articles, and content strategies to attract and convert.",
        "Email Marketing & Automation - Personalized campaigns that build trust and repeat sales.",
        "Influencer Marketing - Collaborations with relevant influencers to grow brand authority.",
        "Affiliate Marketing - Commission-based partner programs to increase sales and reach.",
        "Video Marketing - Professional ad videos, reels, and shorts to boost engagement.",
        "Mobile Marketing - App-based and SMS-driven campaigns tailored for mobile audiences.",
        "Conversion Rate Optimization (CRO) - Optimize landing pages and funnels to increase sales."
      ]
    },
    {
      range: [11, 20],
      category: "Creative & Branding Solutions",
      services: [
        "Logo & Brand Identity Design - Unique branding that makes your business unforgettable.",
        "Poster & Creative Design - Stunning posters, creatives, and festival campaigns.",
        "Social Media Content Creation - High-quality posts, reels, and stories crafted for engagement.",
        "Corporate Branding - End-to-end identity development for startups and enterprises.",
        "Packaging & Product Design - Eye-catching packaging for both retail & e-commerce.",
        "Website Design & Development - Custom, responsive, and SEO-friendly websites.",
        "UI/UX Design - Modern, user-focused interfaces that convert visitors to customers.",
        "Google Maps Business Profile Setup - Rank in local search and attract nearby customers.",
        "Brand Strategy Consulting - Strategic planning to position your brand for long-term growth.",
        "Photography & Videography - Professional shoots for products, events, and campaigns."
      ]
    },
    {
      range: [21, 31],
      category: "Advertising & Promotion",
      services: [
        "Facebook & Instagram Ads - Targeted campaigns with maximum ROI.",
        "LinkedIn Ads - B2B ad campaigns for professional audiences.",
        "Twitter (X) Ads - Real-time ads to capture trending conversations.",
        "YouTube Ads - Video advertising that captures attention.",
        "OTT Platform Advertising - Ads on Hotstar, SonyLiv, JioCinema & more.",
        "Print & Outdoor Advertising - Hoardings, flyers, and banners for local reach.",
        "TV & Radio Advertising - Traditional media campaigns with digital synergy.",
        "Marketplace Advertising - Promotions on Amazon, Flipkart, and e-commerce stores.",
        "App Store Optimization (ASO) - Improve app ranking in Play Store & App Store.",
        "WhatsApp & Telegram Marketing - Personalized direct communication campaigns.",
        "Full-Spectrum Advertising Campaigns - End-to-end ad solutions for local & global reach."
      ]
    },
    {
      range: [32, 41],
      category: "Regional-Level Advanced Services",
      services: [
        "Full Social Media Creation & Management - Setup + manage all platforms for your brand.",
        "Podcast Marketing - Build influence through podcast branding & promotions.",
        "E-commerce Marketing - Shopify, WooCommerce & custom store growth solutions.",
        "Festive Campaign Marketing - Special Diwali, Pongal, Holi campaigns tailored for Regional.",
        "Regional Language Marketing - Ads & content in Tamil, Hindi, Telugu & more.",
        "Local SEO & Hyperlocal Ads - Dominate your neighborhood searches.",
        "Event Marketing (Online + Offline) - Campaigns for product launches, events, and expos.",
        "PR & Media Coverage - Get featured in newspapers, magazines, and TV.",
        "Customer Loyalty & Referral Programs - Build repeat customers and word-of-mouth growth.",
        "Political & Election Campaign Management - End-to-end voter outreach & branding."
      ]
    },
    {
      range: [42, 51],
      category: "Global Future-Tech Services",
      services: [
        "AI-Powered Marketing Automation - Data-driven campaigns powered by machine learning.",
        "Chatbot Development - Smart bots for WhatsApp, websites, and apps.",
        "Programmatic Advertising - Automated AI-driven ad placements for best ROI.",
        "AR/VR Marketing - Virtual experiences and immersive brand storytelling.",
        "Metaverse Branding - Digital showrooms and events in metaverse platforms.",
        "NFT & Web3 Marketing - Advanced blockchain-based branding solutions.",
        "Voice Search Optimization - Prepare for Alexa, Siri, and Google voice commands.",
        "Data Analytics & Predictive Insights - Real-time dashboards & business intelligence.",
        "Personalized Marketing with AI - Tailor-made campaigns for each customer segment.",
        "Cybersecurity & Brand Protection - Protect brand reputation and digital assets."
      ]
    }
  ];

  // Generate service data for services 3-51
  serviceCategories.forEach(categoryData => {
    categoryData.services.forEach((serviceDesc, index) => {
      const serviceId = categoryData.range[0] + index;
      const [title, description] = serviceDesc.split(' - ');
      
      allServicesData[serviceId] = {
        title,
        category: categoryData.category,
        description,
        details: [
          `Our ${title.toLowerCase()} service delivers exceptional results through strategic planning and expert execution. We understand the unique challenges and opportunities in this area.`,
          `With proven methodologies and cutting-edge tools, we help businesses achieve their goals effectively and efficiently, ensuring measurable growth and success.`
        ],
        features: [
          "Strategic planning and consultation",
          "Professional implementation and execution",
          "Performance tracking and analytics",
          "Ongoing optimization and support",
          "Regular reporting and insights",
          "Expert guidance and recommendations"
        ],
        benefits: [
          "Increased brand visibility and awareness",
          "Higher engagement and conversion rates",
          "Improved ROI and business growth",
          "Enhanced customer experience",
          "Competitive advantage in the market",
          "Long-term sustainable results"
        ],
        process: [
          "Initial consultation and requirement analysis",
          "Strategy development and planning",
          "Implementation and execution",
          "Monitoring and optimization",
          "Performance evaluation and reporting",
          "Continuous improvement and scaling"
        ]
      };
    });
  });

  const service = allServicesData[serviceId || '1'];
  const ServiceIcon = serviceIcons[serviceId || '1'];

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gradient mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/services" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>
          </div>
          
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center">
                <ServiceIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="mb-4">
              <span className="text-sm bg-primary/10 text-primary px-4 py-2 rounded-full">
                {service.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">{service.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="scroll-reveal">
              <h2 className="text-3xl font-bold mb-8 text-gradient">Service Overview</h2>
              <div className="space-y-6">
                {service.details.map((detail: string, index: number) => (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
            <div className="scroll-reveal">
              <div className="card-premium h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Key Features</h3>
                <ul className="space-y-4">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits & Process */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="scroll-reveal">
              <h2 className="text-3xl font-bold mb-8 text-gradient">Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="scroll-reveal">
              <h2 className="text-3xl font-bold mb-8 text-gradient">Our Process</h2>
              <div className="space-y-4">
                {service.process.map((step: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full border-2 border-primary text-primary flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{step}</span>
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
              Let's discuss how our {service.title.toLowerCase()} service can help grow your business and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90 text-lg py-4 px-10">
                <span className="flex items-center">
                  Get Quote
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