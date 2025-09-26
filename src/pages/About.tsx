import { User, Target, Eye, Award, Users, TrendingUp, Lightbulb, Rocket, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    { icon: Lightbulb, title: 'Innovation First', desc: 'We embrace cutting-edge technologies and creative solutions' },
    { icon: Heart, title: 'Client-Centric', desc: 'Your success is our priority, always' },
    { icon: Globe, title: 'Global Reach', desc: 'Local expertise with international standards' },
    { icon: Award, title: 'Excellence', desc: 'Committed to delivering exceptional quality in everything we do' },
  ];

  const achievements = [
    { icon: Users, title: '300K+ Followers Managed', desc: 'Successfully managing social media presence across platforms' },
    { icon: Rocket, title: '50+ Projects Delivered', desc: 'Helping businesses achieve digital transformation' },
    { icon: TrendingUp, title: '150% Average Growth', desc: 'Consistent growth in client engagement and business results' },
  ];

  const timeline = [
    { year: '2020', event: 'Founded with Vision', desc: 'arukz was born from a passion to help businesses thrive digitally' },
    { year: '2021', event: 'First Major Success', desc: 'Helped 50+ local businesses establish strong digital presence' },
    { year: '2022', event: 'Expansion & Growth', desc: 'Extended services to include full-stack development and DevOps' },
    { year: '2023', event: 'AI Integration', desc: 'Pioneered AI-powered marketing solutions for enhanced results' },
    { year: '2024', event: 'Future Vision', desc: 'Leading innovation in digital marketing and technology solutions' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient animate-gradient" style={{ fontFamily: 'Open Sans, sans-serif' }}>About arukz</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with strategic digital solutions that drive real growth and meaningful connections in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At <strong style={{ fontFamily: 'Open Sans, sans-serif' }}>arukz</strong>, we believe innovation begins where passion meets purpose. Founded with the vision of building future-ready digital solutions, our journey is driven by a shared commitment to technology, creativity, and impact.
                </p>
                <p>
                  What started as an idea soon grew into a mission: to design, develop, and deliver products and services that empower businesses, transform experiences, and create meaningful connections in a digital-first world.
                </p>
                <p>
                  Our team combines technical excellence with creative innovation, ensuring every solution we deliver not only meets current needs but anticipates future challenges. We're not just service providers – we're your partners in digital transformation.
                </p>
              </div>
            </div>
            <div className="scroll-reveal animate-slide-in-right">
              <div className="card-premium hover-lift">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Why Choose arukz?</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Professional Expertise:</strong> DevOps Engineers & Full Stack Developers</p>
                  <p><strong>Proven Track Record:</strong> Managing 300K+ followers across platforms</p>
                  <p><strong>Innovation Focus:</strong> Cutting-edge technologies and AI integration</p>
                  <p><strong>Results-Driven:</strong> Measurable growth and business impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we serve our clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-premium text-center scroll-reveal hover-lift animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a simple idea to a leading digital transformation partner
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm mr-8">
                    {item.year}
                  </div>
                  <div className="card-premium flex-1 hover-glow">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{item.event}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card-premium scroll-reveal hover-lift">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses of all sizes with innovative digital marketing strategies and cutting-edge technology solutions that create meaningful connections, drive sustainable growth, and deliver measurable results in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="card-premium scroll-reveal hover-lift">
              <div className="w-16 h-16 rounded-2xl gradient-secondary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the leading digital transformation partner globally, known for our innovative approaches, personalized service, and unwavering commitment to client success. We envision a future where every business can harness the full power of digital technology to achieve their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to excellence and client success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center scroll-reveal animate-pulse-slow" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 hover-glow">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">The arukz Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We believe in the power of collaboration, innovation, and authentic relationships. Our approach combines technical expertise with human insight, ensuring every solution we create resonates with real people and drives real results.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-premium text-center scroll-reveal hover-lift">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Innovation-Driven</h3>
              <p className="text-muted-foreground">
                We stay ahead of digital trends, constantly learning and adapting to provide cutting-edge solutions that give our clients a competitive advantage.
              </p>
            </div>
            <div className="card-premium text-center scroll-reveal hover-lift">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Results-Focused</h3>
              <p className="text-muted-foreground">
                Every strategy we develop is backed by data, optimized for performance, and designed to deliver measurable business outcomes that matter.
              </p>
            </div>
            <div className="card-premium text-center scroll-reveal hover-lift">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Partnership-Based</h3>
              <p className="text-muted-foreground">
                We don't just work for you – we work with you. Building long-term relationships based on trust, transparency, and shared success.
              </p>
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's work together to create digital experiences that drive growth, engagement, and success for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90 text-lg py-4 px-10 hover-lift">
                Start Your Journey
              </Link>
              <Link to="/services" className="btn-secondary bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg py-4 px-10 hover-lift">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;