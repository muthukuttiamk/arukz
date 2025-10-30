import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: string;
  structuredData?: object;
}

const SEO = ({
  title = 'Arukz - Leading Digital Marketing & Advertising Agency in Tamil Nadu',
  description = 'Transform your business with Arukz - Premier digital marketing agency specializing in social media marketing, SEO, paid advertising, content creation, and branding services.',
  keywords = 'digital marketing agency, social media marketing, SEO services, paid advertising, content marketing, branding, Tirunelveli, Tuticorin, Tamil Nadu',
  canonicalUrl = 'https://arukz.com',
  ogImage = 'https://arukz.com/arukz.jpg',
  type = 'website',
  structuredData
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
