import { ArrowRight, Users, Target, TrendingUp, Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { Share2, Megaphone, Palette, BarChart3 } from 'lucide-react';
import heroImage from '../assets/hero-bg.jpg';

const Home = () => {
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
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      company: 'Local Restaurant Chain',
      content: 'Arukz transformed our social media presence completely. Our engagement increased by 300% and footfall doubled within 3 months.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Event Organizer',
      company: 'Cultural Events',
      content: 'Their creative designs and strategic promotions helped us achieve sold-out events consistently. Highly recommended!',
      rating: 5
    },
    {
      name: 'Arun Krishnan',
      role: 'Political Campaign Manager',
      company: 'Local Elections',
      content: 'Professional, reliable, and results-driven. Arukz helped us reach thousands of voters effectively through targeted campaigns.',
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Grow Your Business
              <span className="block text-gradient-secondary">with Arukz</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Social Media Marketing & Advertising Solutions for Tirunelveli, Tuticorin, Kanyakumari & Tenkasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-primary text-lg py-4 px-10 group">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="btn-secondary text-lg py-4 px-10 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scroll-reveal">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to grow your business and reach your target audience effectively.
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

      {/* About Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Why Choose Arukz?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With years of experience in digital marketing and a proven track record of managing successful social media pages with thousands of followers, we bring expertise that drives real results.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-primary mr-4" />
                  <span>300K+ Total Followers Managed</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-primary mr-4" />
                  <span>Specialized in Local Business Growth</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-6 h-6 text-primary mr-4" />
                  <span>Proven Campaign Success Rate</span>
                </div>
              </div>
              <Link to="/about" className="btn-primary inline-flex items-center">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="scroll-reveal">
              <div className="grid grid-cols-2 gap-4">
                <div className="card-premium">
                  <h4 className="font-bold text-primary mb-2">Our Tirunelveli</h4>
                  <p className="text-2xl font-bold">44K+</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div className="card-premium">
                  <h4 className="font-bold text-primary mb-2">Thoothukudi People</h4>
                  <p className="text-2xl font-bold">189K+</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div className="card-premium">
                  <h4 className="font-bold text-primary mb-2">Uvari Devotional</h4>
                  <p className="text-2xl font-bold">41K+</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div className="card-premium">
                  <h4 className="font-bold text-primary mb-2">Our Tuticorin</h4>
                  <p className="text-2xl font-bold">19K+</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with Arukz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
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
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful businesses that trust Arukz for their digital marketing needs.
              Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90 text-lg py-4 px-10">
                Start Your Project
              </Link>
              <Link to="/pricing" className="btn-secondary bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg py-4 px-10">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;