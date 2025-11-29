import mermaidImage from '../assets/mermaid.png';

function MermaidWater(): React.JSX.Element {
  return (
    <div className="background">
      <div className="mermaid-container">
        <img src={mermaidImage} alt="Mermaid" className="mermaid-image" />
      </div>
    </div>
  );
}

export default MermaidWater;

