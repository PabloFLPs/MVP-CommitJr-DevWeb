import './App.css';
import Header from "./components/Header/header.js"
import Releases from "./components/Releases/releases.js"
import Highlights from "./components/Highlights/highlights.js"
import Footer from "./components/Footer/footer.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <Releases/>
      {/*<Highlights/>*/}
      <Footer/>
    </div>
  );
}

export default App;
