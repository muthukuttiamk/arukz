import { User, Target, Eye, Award, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const achievements = [
    { icon: Users, title: 'Multiple Pages Managed', desc: 'Successfully managing pages with 300K+ total followers' },
    { icon: Award, title: 'DevOps Experience', desc: 'Professional background in technology and systems' },
    { icon: TrendingUp, title: 'Proven Growth', desc: 'Consistent growth in follower engagement and business results' },
  ];

  const pages = [
    { name: 'Our Tirunelveli', followers: '44K+', category: 'Local Community' },
    { name: 'Thoothukudi People', followers: '189K+', category: 'Regional News' },
    { name: 'Uvari Devotional', followers: '41K+', category: 'Spiritual Content' },
    { name: 'Our Tuticorin', followers: '19K+', category: 'Local Community' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">About Arukz</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with strategic digital marketing solutions that drive real growth and meaningful engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Arukz was born from a passion for helping businesses thrive in the digital age. What started as a personal interest in social media marketing has evolved into a comprehensive digital marketing agency that serves businesses, political campaigns, traditional events, and devotional pages across India, with a special focus on Chennai and Tamil Nadu.
                </p>
                <p>
                  Our founder brings a unique blend of technical expertise as a DevOps Engineer in Chennai and practical social media marketing experience. This combination allows us to approach digital marketing with both strategic thinking and technical precision.
                </p>
                <p>
                  We've successfully built and managed multiple Facebook pages with hundreds of thousands of followers, giving us deep insights into what resonates with local audiences and how to create content that drives genuine engagement.
                </p>
              </div>
            </div>
            <div className="scroll-reveal">
              <div className="card-premium">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Founder's Background</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Professional Role:</strong> DevOps Engineer, Chennai</p>
                  <p><strong>Expertise:</strong> Social Media Marketing & Management</p>
                  <p><strong>Experience:</strong> Managing 300K+ followers across multiple platforms</p>
                  <p><strong>Specialty:</strong> Local business growth and community engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Pages Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Pages We Manage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our track record speaks for itself. We currently manage multiple successful Facebook pages with engaged communities totaling over 300,000 followers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {pages.map((page, index) => (
              <div key={index} className="card-premium scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{page.name}</h3>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {page.category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gradient">{page.followers}</span>
                  <span className="text-muted-foreground">Followers</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card-premium scroll-reveal">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses of all sizes with effective digital marketing strategies that create meaningful connections with their audience, drive engagement, and generate measurable results. We believe every business deserves a strong digital presence that reflects their values and reaches their goals.
              </p>
            </div>
            <div className="card-premium scroll-reveal">
              <div className="w-16 h-16 rounded-2xl gradient-secondary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the leading digital marketing agency in India, known for our innovative approaches, personalized service, and commitment to client success. We envision a future where every business, regardless of size, can leverage the power of digital marketing to achieve their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Why We're Different</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our unique combination of technical expertise and marketing experience sets us apart in the digital marketing landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.desc}</p>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help grow your business with our proven digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90 text-lg py-4 px-10">
                Get In Touch
              </Link>
              <Link to="/services" className="btn-secondary bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg py-4 px-10">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;