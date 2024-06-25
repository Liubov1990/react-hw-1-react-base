import "./App.css";
import Footer from "./components/Footer";
import WeatherGrid from "./components/WeatherGrid";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="container--inner">
        <Header />
        <main>
          <WeatherGrid />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
