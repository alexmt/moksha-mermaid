import Navigation from './components/navigation';
import HomeSection from './components/home_section';
import AboutSection from './components/about_section';
import ServicesSection from './components/services_section';
import BookSection from './components/book_section';

function App(): React.JSX.Element {
  return (
    <div className="app">
      <Navigation />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <BookSection />
    </div>
  );
}

export default App;

