// @ts-ignore - responsive-loader types
import backgroundImage from '../assets/background.png?sizes[]=800&sizes[]=1600&sizes[]=2400';
import { useResponsiveBackground } from '../hooks/use_responsive_background';
import { useRef, useState, useEffect } from 'react';
import './global_water.css';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

function GlobalWater(): React.JSX.Element {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const optimizedBackground = useResponsiveBackground(backgroundImage, backgroundRef);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleIdRef = useRef(0);
  const lastRippleTimeRef = useRef(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle ripples to avoid too many at once
      if (now - lastRippleTimeRef.current < 100) {
        return;
      }
      lastRippleTimeRef.current = now;
      
      const newRipple: Ripple = {
        id: rippleIdRef.current++,
        x: e.clientX,
        y: e.clientY,
      };
      
      setRipples((prev) => [...prev, newRipple]);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div
      ref={backgroundRef}
      className="background"
      style={{
        backgroundImage: `url(${optimizedBackground})`,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <div className="water"></div>
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}
      <svg className="water-filter">
        <filter id="turbulence" x="0" y="0" width="100%" height="100%">
          <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
          <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
          <animate
            href="#sea-filter"
            attributeName="baseFrequency"
            dur="60s"
            keyTimes="0;0.5;1"
            values="0.02 0.06;0.04 0.08;0.02 0.06"
            repeatCount="indefinite"
          ></animate>
        </filter>
      </svg>
    </div>
  );
}

export default GlobalWater;
