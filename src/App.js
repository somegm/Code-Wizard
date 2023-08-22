import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/index.js";
import { BrowserRouter as Router } from 'react-router-dom';
import InfoSection from './components/InfoSection';
import SignUp from "./components/SignUp/index"
import Login from "./components/LoginSection/index"
function App() {
  return (
    <Router>
      <Navbar/>
      <Login/>
    </Router>
  );
}

export default App;
