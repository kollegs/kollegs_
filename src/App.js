import './App.css';
import Service from './components/services/Service';
import Landpage from './sections/Landpage';
import Offers from './sections/Offers';

function App() {
  return (
    <div className="App">
      <Landpage />
      <Offers/>
      <Service />
    </div>
  );
}

export default App;
