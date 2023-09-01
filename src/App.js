

import Navbar from "./components/Navbar/index.js";
import { BrowserRouter as Router } from 'react-router-dom';

/* import Login from "./components/LoginSection/index"
import SignUp from "./components/SignUp/index.js" */
import Info from "./components/InfoSection/index.js"

function App() {
  return (
    <Router>
      <Navbar />
      <Info />


 
     
        
    </Router>
  );
}

export default App;
