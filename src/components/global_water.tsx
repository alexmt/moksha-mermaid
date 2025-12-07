import backgroundImage from '../assets/background.png';
import butterflyGif from '../assets/butterfly.gif';

function GlobalWater(): React.JSX.Element {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${backgroundImage})`,
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
      <div className="butterfly">
        <div style={{ backgroundImage: `url(${butterflyGif})` }} className="butterfly-image" />
      </div>

    </div>
  );
}

export default GlobalWater;
