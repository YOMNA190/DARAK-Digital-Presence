import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

export default function SEO({ title, description, keywords, canonical }: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      if (keywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      if (canonical) {
        linkCanonical.setAttribute('href', canonical);
      }
    }
  }, [title, description, keywords, canonical]);

  return null;
}
