import './CSS/App.css';

import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
