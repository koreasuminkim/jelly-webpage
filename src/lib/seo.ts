export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const defaultSEO: SEOProps = {
  title: "볼트랩(Boltlab) - 혁신적인 웹 개발 및 디지털 솔루션",
  description: "볼트랩(Boltlab)은 최신 기술로 비즈니스의 디지털 전환을 지원하는 전문 개발 업체입니다. Boltlab은 웹사이트, 앱 개발, 디지털 마케팅 서비스를 제공합니다.",
  keywords: "볼트랩, Boltlab, 볼트 랩, 볼트랩 개발, Boltlab 개발, 웹개발, 앱개발, 디지털 마케팅, 소프트웨어 개발, 기술 컨설팅",
  ogType: "website",
  ogImage: "/public/images/boltlab-og-image.jpg",
  canonicalUrl: "https://teamBoltlab.co.kr"
};

export const getPageTitle = (pageTitle?: string): string => {
  if (!pageTitle) return defaultSEO.title || '';
  return `${pageTitle} | 볼트랩(Boltlab)`;
};

export const pageSEO = (props: SEOProps): SEOProps => {
  return {
    ...defaultSEO,
    ...props,
    title: getPageTitle(props.title)
  };
}; 