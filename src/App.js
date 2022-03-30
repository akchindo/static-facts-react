import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true) 
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className="App-container">
      <Header darkMode={darkMode}  toggleDarkMode={toggleDarkMode}   />
      <MainContent darkMode={darkMode}/>
    </div>
  );
}

export default App;
