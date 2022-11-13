import './CSS/App.css';

import Header from './components/Header/Header'
import Slider from './components/Slider'
import Services from './components/services/Services';
import Footer from './components/Footer';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <NewsLetter/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
