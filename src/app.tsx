import Navigation from './components/navigation';
import HomeSection from './components/home_section';
import GlobalWater from './components/global_water';
import AboutSection from './components/about_section';
import ServicesSection from './components/services_section';
import BookSection from './components/book_section';
import Footer from './components/footer';

function App(): React.JSX.Element {
  return (
    <div className="app">
      <GlobalWater />
      <Navigation />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <BookSection />
      <Footer />
    </div>
  );
}

export default App;

