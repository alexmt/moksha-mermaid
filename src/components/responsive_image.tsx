import React from 'react';

interface ResponsiveImageProps {
  src: string | { src: string; srcSet: string; placeholder?: string; images: Array<{ path: string; width: number }> };
  alt: string;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * ResponsiveImage component that handles both regular images and responsive-loader output
 * Usage: <ResponsiveImage src={require('./image.jpg?sizes=400w+800w+1200w')} alt="..." />
 */
function ResponsiveImage({ src, alt, className, sizes, loading = 'lazy' }: ResponsiveImageProps): React.JSX.Element {
  // Check if src is a responsive-loader object
  if (typeof src === 'object' && 'srcSet' in src) {
    return (
      <img
        src={src.src}
        srcSet={src.srcSet}
        alt={alt}
        className={className}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px'}
        loading={loading}
        decoding="async"
      />
    );
  }
  
  // Regular image string
  return (
    <img
      src={src as string}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
    />
  );
}

export default ResponsiveImage;
