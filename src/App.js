import './App.css';
import Service from './components/services/Service';
import Process from './components/process/Process';
import Landpage from './sections/Landpage';
import Offers from './sections/Offers';
import ProjectSection from './sections/ProjectSection';
function App() {
  return (
    <div className="App">
      <Landpage />
      <Offers/>
      <Service />
      <ProjectSection />
      <Process />
    </div>
  );
}

export default App;
