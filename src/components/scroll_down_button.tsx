import './scroll_down_button.css';

type Props = { nextSection: string };

function ScrollDownButton({ nextSection }: Props): React.JSX.Element {
  const handleClick = () => {
    const el = document.getElementById(nextSection);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button className="scroll-down-btn" onClick={handleClick} aria-label="Scroll to next section">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7L10 13L16 7" stroke="rgba(30,30,30,0.8)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

export default ScrollDownButton;
