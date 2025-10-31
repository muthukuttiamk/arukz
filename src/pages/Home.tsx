import { ArrowRight, Users, Target, TrendingUp, Star, Play, ChevronRight, Sparkles, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { Share2, Megaphone, Palette, BarChart3 } from 'lucide-react';
import heroImage from '../assets/hero-bg.jpg';
import SEO from '../components/SEO';
import { organizationSchema, websiteSchema } from '../utils/structuredData';

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const animatedWords = ['Business', 'Brand', 'Reach', 'Impact'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Complete social media presence management across all platforms',
      features: ['Content Strategy', 'Daily Posting', 'Community Management', 'Analytics']
    },
    {
      icon: Megaphone,
      title: 'Paid Ad Promotions',
      description: 'Strategic advertising campaigns to reach your target audience',
      features: ['Facebook Ads', 'Instagram Ads', 'Google Ads', 'Campaign Optimization']
    },
    {
      icon: Palette,
      title: 'Poster/Content Designing',
      description: 'Creative visual content that captures attention and drives engagement',
      features: ['Custom Graphics', 'Brand Design', 'Social Media Posts', 'Marketing Materials']
    },
    {
      icon: BarChart3,
      title: 'Campaign Management',
      description: 'End-to-end campaign planning and execution for maximum ROI',
      features: ['Strategy Planning', 'Content Calendar', 'Performance Tracking', 'Reporting']
    }
  ];

  const testimonials = [
    {
      name: 'Shanthi Sweets',
      role: 'Sweet Shop Owner',
      company: 'Tirunelveli',
      content: 'arukz transformed our social media presence completely. Our online orders increased by 300% and customer footfall doubled within 3 months.',
      rating: 5
    },
    {
      name: 'Nila Sea Foods',
      role: 'Seafood Business',
      company: 'Tuticorin',
      content: 'Their creative designs and strategic promotions helped us reach more customers across Tamil Nadu. Highly recommended for local businesses!',
      rating: 5
    },
    {
      name: 'Velavan Hypermarket',
      role: 'Retail Chain',
      company: 'Tuticorin',
      content: 'Professional, reliable, and results-driven. arukz helped us connect with thousands of local customers through targeted digital campaigns.',
      rating: 5
    },
    {
      name: 'Chinnathurain & Co',
      role: 'Trading Business',
      company: 'Tirunelveli',
      content: 'Excellent social media management! Our business visibility improved significantly and we gained many new customers through their campaigns.',
      rating: 5
    },
    {
      name: 'Ganesh Jewellers',
      role: 'Jewelry Store',
      company: 'Tisaiyanvilai',
      content: 'Outstanding creative work! Their festival campaign designs generated exceptional engagement and brought us premium customers.',
      rating: 5
    }
  ];

  const stats = [
    { number: '50+', label: 'Happy Clients' },
    { number: '200+', label: 'Campaigns Delivered' },
    { number: '1M+', label: 'People Reached' },
    { number: '95%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <SEO 
        title="Arukz - Leading Digital Marketing & Advertising Agency in Tamil Nadu | Social Media Marketing"
        description="Transform your business with Arukz - Premier digital marketing agency specializing in social media marketing, SEO, paid advertising, content creation, and branding services. Serving Tirunelveli, Tuticorin & Chennai."
        keywords="digital marketing agency, social media marketing, SEO services, paid advertising, content marketing, branding, Tirunelveli, Tuticorin, Tamil Nadu, India"
        canonicalUrl="https://arukz.com"
        structuredData={[organizationSchema, websiteSchema]}
      />
      <div className="pt-0">
      {/* Hero Section - WPP Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
        {/* Glowing plasma effect background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/40 via-primary/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-primary-variant/30 via-primary/10 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
          <h1 className="text-5xl md:text-8xl font-bold mb-8 animate-fade-in-up text-white leading-tight">
            TRANSFORM YOUR BRAND
            <br />
            <span className="text-gradient">INTO DIGITAL SUCCESS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Delivering breakthrough intelligence and effective marketing solutions at speed and scale for businesses across Tamil Nadu.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact">
              <button className="text-lg px-12 py-7 bg-primary hover:bg-primary-variant text-white rounded-full font-semibold transition-all hover:scale-105 shadow-glow">
                Get Started Today
              </button>
            </Link>
            <Link to="/services">
              <button className="text-lg px-12 py-7 border-2 border-white text-white hover:bg-white hover:text-black rounded-full font-semibold transition-all hover:scale-105">
                View Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-background relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Proven <span className="text-gradient">Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading businesses across Tamil Nadu
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scroll-reveal">
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-4">{stat.number}</div>
                <div className="text-lg text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Comprehensive <span className="text-gradient">Digital Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From strategy to execution, we cover every aspect of your digital presence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Digital Ecosystem Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Your Complete Digital Growth
              <br />
              <span className="text-gradient">Ecosystem</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We architect comprehensive digital strategies that transform your brand's entire online presence into a revenue-generating powerhouse.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mr-4 group-hover:shadow-glow transition-all duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-foreground mb-2">AI-Powered Campaign Optimization</h4>
                    <p className="text-muted-foreground">Machine learning algorithms continuously optimize your campaigns for maximum ROI and engagement</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mr-4 group-hover:shadow-glow transition-all duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-foreground mb-2">Omnichannel Strategy Execution</h4>
                    <p className="text-muted-foreground">Synchronized campaigns across 15+ platforms with unified brand messaging and analytics</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mr-4 group-hover:shadow-glow transition-all duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-foreground mb-2">Predictive Intelligence Dashboard</h4>
                    <p className="text-muted-foreground">Real-time predictive insights that forecast trends and optimize budget allocation automatically</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scroll-reveal">
              <div className="grid grid-cols-2 gap-4">
                <div className="card-premium hover-lift relative overflow-hidden group">
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-500 opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">Revenue Growth</h4>
                  <p className="text-3xl font-bold text-gradient">+340%</p>
                  <p className="text-sm text-muted-foreground">Average client increase</p>
                </div>
                
                <div className="card-premium hover-lift relative overflow-hidden group">
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">Audience Reach</h4>
                  <p className="text-3xl font-bold text-gradient">2.5M+</p>
                  <p className="text-sm text-muted-foreground">Monthly impressions</p>
                </div>
                
                <div className="card-premium hover-lift relative overflow-hidden group">
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-3">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">Conversion Rate</h4>
                  <p className="text-3xl font-bold text-gradient">18.5%</p>
                  <p className="text-sm text-muted-foreground">Above industry avg</p>
                </div>
                
                <div className="card-premium hover-lift relative overflow-hidden group">
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">Client Satisfaction</h4>
                  <p className="text-3xl font-bold text-gradient">98.7%</p>
                  <p className="text-sm text-muted-foreground">Retention rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-muted/30 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Client <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with arukz.
            </p>
          </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#000000] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Ready to Transform Your
            <br />
            <span className="text-gradient">Digital Presence?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Partner with Arukz and experience data-driven digital marketing that delivers measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <button className="text-lg px-12 py-7 bg-primary hover:bg-primary-variant text-white rounded-full font-semibold transition-all hover:scale-105 shadow-glow">
                Schedule a Consultation
              </button>
            </Link>
            <Link to="/pricing">
              <button className="text-lg px-12 py-7 border-2 border-white text-white hover:bg-white hover:text-black rounded-full font-semibold transition-all hover:scale-105">
                View Pricing Plans
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;