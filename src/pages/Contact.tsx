import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import SEO from '../components/SEO';
import { localBusinessSchema, faqSchema } from '../utils/structuredData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 95978 41535', 'Primary Contact'],
      action: 'tel:+919597841535'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['arukzhq@gmail.com', 'contact@arukz.com'],
      action: 'mailto:arukzhq@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Tirunelveli, Tamil Nadu', 'Chennai (DevOps Office)'],
      action: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      action: '#'
    }
  ];

  const services = [
    'Social Media Management',
    'Paid Ad Promotions',
    'Poster/Content Designing',
    'Campaign Management',
    'Brand Consulting',
    'Other'
  ];

  const faqs = [
    {
      question: 'How quickly can you start working on my project?',
      answer: 'We can typically start within 2-3 business days after our initial consultation and agreement on project scope.'
    },
    {
      question: 'Do you work with businesses outside Tamil Nadu?',
      answer: 'Yes, while we\'re based in Tamil Nadu, we work with clients across India and can adapt our strategies for different regional markets.'
    },
    {
      question: 'What makes Arukz different from other agencies?',
      answer: 'Our unique combination of technical expertise (DevOps background) and proven social media success (300K+ followers managed) gives us a strategic edge in digital marketing.'
    },
    {
      question: 'Do you provide monthly reports?',
      answer: 'Yes, we provide detailed monthly reports showing engagement metrics, growth statistics, and campaign performance with actionable insights.'
    }
  ];

  return (
    <>
      <SEO 
        title="Contact Arukz - Get Free Digital Marketing Consultation | Call +91-95978-41535"
        description="Get in touch with Arukz for expert digital marketing services. Free consultation available. Call +91-95978-41535 or email arukzhq@gmail.com. Based in Tirunelveli, Tamil Nadu."
        keywords="contact digital marketing agency, digital marketing consultation, Tirunelveli contact, Tamil Nadu marketing agency"
        canonicalUrl="https://arukz.com/contact"
        structuredData={[localBusinessSchema, faqSchema(faqs)]}
      />
      <div className="pt-20">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-full px-6 py-2 border border-primary/20 mb-8">
              <Mail className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary text-sm font-medium">We're Here to Help</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-gradient">Get In Touch</h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to grow your business? Let's discuss your project and create a customized strategy that delivers results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="scroll-reveal">
              <div className="card-premium">
                <h2 className="text-3xl font-bold mb-8 text-gradient">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-foreground">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold mb-2 text-foreground">
                        Interested Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full text-lg py-3 group">
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="scroll-reveal">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-8 text-gradient">Contact Information</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    We're here to help you grow your business. Reach out to us through any of the following channels, and we'll respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="card-premium">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {info.action !== '#' ? (
                                <a href={info.action} className="hover:text-primary transition-colors">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Contact Buttons */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Quick Contact</h3>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/919597841535"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full inline-flex items-center justify-center bg-green-500 text-white hover:bg-green-600"
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      WhatsApp Chat
                    </a>
                    <a
                      href="tel:+919597841535"
                      className="btn-secondary w-full inline-flex items-center justify-center"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Call Now
                    </a>
                    <a
                      href="mailto:arukzhq@gmail.com"
                      className="btn-secondary w-full inline-flex items-center justify-center"
                    >
                      <Mail className="mr-2 w-5 h-5" />
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Tirunelveli, serving clients across Tamil Nadu
            </p>
          </div>
          <div className="card-premium scroll-reveal">
            <div className="w-full h-96 rounded-xl overflow-hidden">
              <iframe
                title="Tirunelveli Location Map"
                src="https://www.google.com/maps?q=Tirunelveli%2C%20Tamil%20Nadu&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map of Tirunelveli, Tamil Nadu"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-premium scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;