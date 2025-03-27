import { Helmet } from 'react-helmet';
import { SEOProps, defaultSEO } from '@/lib/seo';

interface SeoComponentProps {
  seo?: SEOProps;
}

export const SEO = ({ seo = defaultSEO }: SeoComponentProps) => {
  const {
    title,
    description,
    keywords,
    ogType,
    ogImage,
    canonicalUrl
  } = { ...defaultSEO, ...seo };

  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* 표준 URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}; 