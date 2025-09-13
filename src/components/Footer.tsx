import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold text-gradient">Arukz</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Premium Social Media Marketing & Advertising agency helping brands in Tirunelveli, Tuticorin, Kanyakumari & Tenkasi grow online.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-3">
              {links.map((link) => (
                <Link key={link.name} to={link.path} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center"><Phone className="w-4 h-4 mr-2 text-primary" /> +91 98765 43210</li>
              <li className="flex items-center"><Mail className="w-4 h-4 mr-2 text-primary" /> <a href="mailto:muthukuttiamk@gmail.com" className="hover:text-primary">muthukuttiamk@gmail.com</a></li>
              <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-primary" /> Tirunelveli, Tamil Nadu</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Arukz. All rights reserved.</p>
          <p>Built with care • Digital growth for local brands</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
