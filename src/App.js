import './CSS/App.css';

import Navbar from './components/Header/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';

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
