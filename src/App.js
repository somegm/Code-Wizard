import './App.css';
import Navbar from "./components/Navbar/index.js";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import InfoSection from './components/InfoSection';
import SignUp from "./components/SignUp/index"
import Login from "./components/LoginSection/index"
import Step from "./components/Steps/index"
import ChooseType from './components/ChooseType';



function App() {
  return (
    <Router>
      <ChooseType/>
       <Routes>
        <Route exact path="/signup" Component={SignUp} />
        <Route exact path="/login" Component={Login} />
      </Routes>
      
    </Router>
  );
}

export default App;
