import mermaidImage from '../assets/mermaid.png';
import backgroundImage from '../assets/background.png';

function MermaidWater(): React.JSX.Element {
  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="mermaid-container">
        <img src={mermaidImage} alt="Mermaid" className="mermaid-image" />
      </div>
    </div>
  );
}

export default MermaidWater;

