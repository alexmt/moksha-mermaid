import { useEffect, useState } from 'react';

interface ResponsiveImage {
  src: string;
  srcSet: string;
  images: Array<{ path: string; width: number }>;
}

/**
 * Hook to get the best image URL for a given viewport width
 * Returns the appropriate image URL based on current viewport size
 */
export function useResponsiveBackground(
  responsiveImage: ResponsiveImage | string,
  containerRef?: React.RefObject<HTMLElement | null>
): string {
  const [imageUrl, setImageUrl] = useState<string>(() => {
    if (typeof responsiveImage === 'string') {
      return responsiveImage;
    }
    // Default to the largest image
    return responsiveImage.images[responsiveImage.images.length - 1]?.path || responsiveImage.src;
  });

  useEffect(() => {
    if (typeof responsiveImage === 'string') {
      setImageUrl(responsiveImage);
      return;
    }

    const updateImage = () => {
      const width = containerRef?.current?.offsetWidth || window.innerWidth;
      
      // Find the best matching image based on container/viewport width
      let bestImage = responsiveImage.images[0]?.path || responsiveImage.src;
      
      for (const img of responsiveImage.images) {
        if (img.width >= width * 1.5) { // Use 1.5x for retina displays
          bestImage = img.path;
          break;
        }
        bestImage = img.path;
      }
      
      setImageUrl(bestImage);
    };

    updateImage();
    
    const resizeObserver = containerRef?.current
      ? new ResizeObserver(updateImage)
      : null;
    
    if (resizeObserver && containerRef?.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    window.addEventListener('resize', updateImage);
    
    return () => {
      window.removeEventListener('resize', updateImage);
      resizeObserver?.disconnect();
    };
  }, [responsiveImage, containerRef]);

  return imageUrl;
}
