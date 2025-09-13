import { Share2, Megaphone, Palette, BarChart3, Users, Zap, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const mainServices = [
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Complete social media presence management across all major platforms including Facebook, Instagram, Twitter, and LinkedIn.',
      features: [
        'Content Strategy Development',
        'Daily Content Creation & Posting',
        'Community Management & Engagement',
        'Hashtag Research & Optimization',
        'Social Media Analytics & Reporting',
        'Brand Voice & Tone Development'
      ]
    },
    {
      icon: Megaphone,
      title: 'Paid Ad Promotions',
      description: 'Strategic advertising campaigns designed to reach your target audience and maximize your return on investment.',
      features: [
        'Facebook & Instagram Ads',
        'Google Ads & YouTube Advertising',
        'Audience Research & Targeting',
        'Ad Creative Development',
        'Campaign Optimization',
        'Conversion Tracking & Analysis'
      ]
    },
    {
      icon: Palette,
      title: 'Poster/Content Designing',
      description: 'Eye-catching visual content that captures attention and communicates your brand message effectively.',
      features: [
        'Social Media Post Design',
        'Brand Identity & Logo Design',
        'Marketing Collateral Design',
        'Event Poster Creation',
        'Infographic Design',
        'Video Graphics & Animation'
      ]
    },
    {
      icon: BarChart3,
      title: 'Campaign Management',
      description: 'End-to-end campaign planning and execution ensuring your marketing goals are achieved efficiently.',
      features: [
        'Strategic Campaign Planning',
        'Content Calendar Management',
        'Multi-Platform Coordination',
        'Performance Monitoring',
        'Real-time Optimization',
        'Detailed Performance Reports'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Connect with local influencers to amplify your brand reach and build authentic relationships with your audience.'
    },
    {
      icon: Zap,
      title: 'Crisis Management',
      description: 'Protect your brand reputation with proactive monitoring and rapid response strategies for social media issues.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support to ensure your social media presence never sleeps.'
    },
    {
      icon: Award,
      title: 'Brand Consulting',
      description: 'Strategic guidance on brand positioning, messaging, and digital transformation for long-term success.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current digital presence, understand your goals, and identify opportunities for growth.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a customized digital marketing strategy tailored to your business objectives and target audience.'
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Develop engaging content that resonates with your audience and reflects your brand personality.'
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Execute the strategy across all chosen platforms with consistent posting and active community management.'
    },
    {
      step: '05',
      title: 'Monitor & Optimize',
      description: 'Continuously track performance, analyze results, and optimize campaigns for better outcomes.'
    },
    {
      step: '06',
      title: 'Report & Grow',
      description: 'Provide detailed reports and scale successful strategies to accelerate your business growth.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions designed to grow your business, engage your audience, and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure your digital marketing campaigns deliver exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="card-premium text-center scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complementary services to enhance your digital marketing strategy and ensure comprehensive coverage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="card-premium text-center scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 rounded-2xl gradient-secondary flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expertise spans across various industries, allowing us to create targeted strategies for different business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Small Businesses',
              'Political Campaigns',
              'Traditional Events',
              'Devotional Pages',
              'Restaurants & Food',
              'Educational Institutions',
              'Healthcare Services',
              'E-commerce Stores'
            ].map((industry, index) => (
              <div key={index} className="card-premium text-center scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold text-foreground">{industry}</h3>
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
              Let's discuss which services are right for your business and create a customized strategy that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90 text-lg py-4 px-10">
                Get Free Consultation
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

export default Services;