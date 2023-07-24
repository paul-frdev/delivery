import { About } from './components/about';
import { Faq } from './components/faq';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { How } from './components/how';
import { Testimonials } from './components/testimonials';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <How />
      {/* <Faq /> */}
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}

export default App;
