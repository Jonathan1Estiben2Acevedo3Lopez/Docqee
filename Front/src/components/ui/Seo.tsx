import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { applySeo, type SeoConfig } from '@/lib/seo';

type SeoProps = Omit<SeoConfig, 'path'>;

export function Seo({
  description,
  imagePath,
  noIndex,
  ogDescription,
  ogTitle,
  title,
  type,
}: SeoProps) {
  const location = useLocation();

  useEffect(() => {
    const config: SeoConfig = {
      description,
      path: location.pathname,
      title,
    };

    if (imagePath !== undefined) {
      config.imagePath = imagePath;
    }

    if (noIndex !== undefined) {
      config.noIndex = noIndex;
    }

    if (ogDescription !== undefined) {
      config.ogDescription = ogDescription;
    }

    if (ogTitle !== undefined) {
      config.ogTitle = ogTitle;
    }

    if (type !== undefined) {
      config.type = type;
    }

    applySeo(config);
  }, [description, imagePath, location.pathname, noIndex, ogDescription, ogTitle, title, type]);

  return null;
}
