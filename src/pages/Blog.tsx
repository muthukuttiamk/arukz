import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Digital Marketing Trends in Tamil Nadu for 2025',
      excerpt: 'Discover the latest digital marketing strategies that are transforming businesses across Tamil Nadu, from hyperlocal targeting to regional language content.',
      author: 'Arukz Team',
      date: '2025-10-15',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Social Media Marketing Success Stories from Tirunelveli',
      excerpt: 'Learn how local businesses in Tirunelveli achieved 300%+ growth through strategic social media marketing campaigns.',
      author: 'Arukz Team',
      date: '2025-10-10',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'SEO Best Practices for Regional Businesses in India',
      excerpt: 'Master local SEO strategies to rank #1 on Google for your regional business. Complete guide with actionable tips.',
      author: 'Arukz Team',
      date: '2025-10-05',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'How to Create Engaging Festival Marketing Campaigns',
      excerpt: 'Expert strategies for Diwali, Pongal, and regional festival marketing campaigns that drive maximum engagement and sales.',
      author: 'Arukz Team',
      date: '2025-09-28',
      category: 'Campaign Management',
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Instagram Reels Strategy for Small Business Growth',
      excerpt: 'Unlock the power of Instagram Reels to grow your follower base and increase sales with our proven content strategies.',
      author: 'Arukz Team',
      date: '2025-09-20',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Complete Guide to Facebook Ads for Tamil Nadu Businesses',
      excerpt: 'Learn how to create high-converting Facebook ad campaigns targeting Tamil Nadu audiences with regional insights.',
      author: 'Arukz Team',
      date: '2025-09-15',
      category: 'Paid Advertising',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
      readTime: '9 min read'
    }
  ];

  const categories = ['All', 'Digital Marketing', 'Social Media', 'SEO', 'Paid Advertising', 'Campaign Management'];

  return (
    <>
      <SEO 
        title="Digital Marketing Blog - Tips, Trends & Strategies | Arukz"
        description="Expert insights on digital marketing, social media strategies, SEO tips, and advertising best practices. Learn from Arukz's proven marketing expertise."
        keywords="digital marketing blog, social media tips, SEO strategies, marketing trends, Tamil Nadu marketing, advertising guides"
        canonicalUrl="https://arukz.com/blog"
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-full px-6 py-2 border border-primary/20 mb-8">
                <Tag className="w-4 h-4 text-primary mr-2" />
                <span className="text-primary text-sm font-medium">Marketing Insights & Expertise</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 text-gradient" style={{ fontFamily: 'Open Sans, sans-serif' }}>Marketing Blog</h1>
              <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Expert insights, proven strategies, and actionable tips to grow your business through digital marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    index === 0
                      ? 'bg-primary text-white'
                      : 'bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article 
                  key={post.id} 
                  className="card-premium group hover-lift scroll-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="card-premium">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get weekly marketing tips, industry insights, and exclusive strategies delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button type="submit" className="btn-primary px-8 py-3 whitespace-nowrap">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-95" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Implement These Strategies?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Let our expert team help you execute winning digital marketing campaigns for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90 text-lg py-4 px-10">
                  Get Free Consultation
                </Link>
                <Link to="/services" className="btn-secondary bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg py-4 px-10">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
