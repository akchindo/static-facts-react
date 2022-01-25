import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App-container">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
