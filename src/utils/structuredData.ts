// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Arukz",
  "description": "Leading digital marketing and advertising agency in Tamil Nadu specializing in social media marketing, SEO, paid advertising, and creative services.",
  "url": "https://arukz.com",
  "logo": "https://arukz.com/arukz.jpg",
  "image": "https://arukz.com/arukz.jpg",
  "telephone": "+91-95978-41535",
  "email": "arukzhq@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tirunelveli",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "8.7289",
    "longitude": "77.7085"
  },
  "sameAs": [
    "https://www.facebook.com/arukz",
    "https://www.instagram.com/arukz",
    "https://www.linkedin.com/company/arukz",
    "https://twitter.com/arukz"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Tirunelveli"
    },
    {
      "@type": "City",
      "name": "Tuticorin"
    },
    {
      "@type": "City",
      "name": "Chennai"
    },
    {
      "@type": "State",
      "name": "Tamil Nadu"
    }
  ]
};

// LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arukz",
  "image": "https://arukz.com/arukz.jpg",
  "@id": "https://arukz.com",
  "url": "https://arukz.com",
  "telephone": "+91-95978-41535",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tirunelveli",
    "addressLocality": "Tirunelveli",
    "addressRegion": "TN",
    "postalCode": "627001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 8.7289,
    "longitude": 77.7085
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
};

// Service Schema
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Digital Marketing Services",
  "provider": {
    "@type": "Organization",
    "name": "Arukz",
    "url": "https://arukz.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Marketing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Search Engine Optimization (SEO)"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pay-Per-Click Advertising"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Marketing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Identity Design"
        }
      }
    ]
  }
};

// WebSite Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Arukz",
  "url": "https://arukz.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://arukz.com/services?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// BreadcrumbList for services
export const serviceBreadcrumb = (serviceName: string, serviceId: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://arukz.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://arukz.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": serviceName,
      "item": `https://arukz.com/services/${serviceId}`
    }
  ]
});
