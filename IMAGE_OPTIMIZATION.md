# Image Optimization Guide

This project uses responsive image optimization to serve appropriately sized images for different devices.

## How It Works

### For `<img>` Tags

Use the `ResponsiveImage` component:

```tsx
import ResponsiveImage from './components/responsive_image';
// @ts-ignore - responsive-loader types
import myImage from '../assets/my-image.jpg?sizes[]=400&sizes[]=800&sizes[]=1200';

<ResponsiveImage 
  src={myImage} 
  alt="Description"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
/>
```

### For Background Images

Use the `useResponsiveBackground` hook:

```tsx
import { useResponsiveBackground } from '../hooks/use_responsive_background';
import { useRef } from 'react';
// @ts-ignore - responsive-loader types
import bgImage from '../assets/background.jpg?sizes[]=800&sizes[]=1600&sizes[]=2400';

function MyComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const optimizedBg = useResponsiveBackground(bgImage, containerRef);
  
  return (
    <div 
      ref={containerRef}
      style={{ backgroundImage: `url(${optimizedBg})` }}
    />
  );
}
```

## Image Sizes

The query string `?sizes[]=400&sizes[]=800&sizes[]=1200` tells webpack to generate:
- 400px wide image (for mobile)
- 800px wide image (for tablets)
- 1200px wide image (for desktops)

All images are automatically:
- Converted to WebP format (better compression)
- Optimized with 85% quality
- Generated with a 50px placeholder for lazy loading

## Current Optimized Images

- **About Section**: `vanessa_aders.png` - 400px, 800px, 1200px
- **Services Section**: `services1-3.jpg` - 600px, 1200px, 1800px
- **Background**: `background.png` - 800px, 1600px, 2400px

## Adding New Responsive Images

1. Import with sizes query:
   ```tsx
   import myImage from './assets/my-image.jpg?sizes[]=400&sizes[]=800&sizes[]=1200';
   ```

2. Use in component:
   - For `<img>`: Use `ResponsiveImage` component
   - For backgrounds: Use `useResponsiveBackground` hook

3. The browser will automatically select the best size based on:
   - Viewport width
   - Device pixel ratio
   - Network conditions

## Performance Benefits

- **Mobile**: Smaller images (400-600px) = faster loading
- **Desktop**: Larger images (1200-2400px) = better quality
- **WebP format**: ~30% smaller file sizes than JPEG/PNG
- **Lazy loading**: Images load only when needed

## Build Output

During production build, webpack generates optimized images in `dist/images/`:
- `my-image-400.webp`
- `my-image-800.webp`
- `my-image-1200.webp`

The browser automatically selects the appropriate size using the `srcset` attribute.
