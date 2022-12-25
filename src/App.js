import './App.css';
import { CityProvider } from './context/CityContext';
import { WeatherProvider } from './context/WeatherContext';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <CityProvider>
        <WeatherProvider>
        <Header/>
        <Main/>
        <Footer/>
        </WeatherProvider>
      </CityProvider>
    </div>
  );
}

export default App;
