import './CSS/App.css';

import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Services/>
    </div>
  );
}

export default App;
