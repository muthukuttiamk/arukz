// Google Analytics Integration
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return;

  // Load GA script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window.gtag === 'undefined') return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag === 'undefined') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  trackEvent('click', 'Button', buttonName);
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('submit', 'Form', formName);
};

// Track service inquiries
export const trackServiceInquiry = (serviceName: string) => {
  trackEvent('inquiry', 'Service', serviceName);
};

// Track outbound links
export const trackOutboundLink = (url: string) => {
  trackEvent('click', 'Outbound Link', url);
};
