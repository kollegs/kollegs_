import './App.css';
import Service from './components/services/Service';
import Process from './components/process/Process';
import Landpage from './sections/Landpage';
import Offers from './sections/Offers';
import ProjectSection from './sections/ProjectSection';
import Payment from './components/Payments/Payment';
import Application from './components/faqs/Application';
import Faqs from './components/faqs/Faqs';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Landpage />
      <Offers/>
      <Service />
      <ProjectSection />
      <Process />
      <Payment />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
