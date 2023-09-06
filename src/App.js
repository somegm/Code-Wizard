import Navbar from "./components/Navbar/index.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/index.js";
// import Login from "./components/LoginSection/index"
import SignUp from "./components/SignUp/index.js"
// import Info from "./components/InfoSection/index.js";
// import ChooseType from "./components/ChooseType/index.js";
// import EditInformation from "./components/EditInformation/index.js";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/signup" Component={SignUp} />
        <Route exact path="/login" Component={Login} />
      </Routes>
      <ChooseType/>
    </Router>
  );
}

export default App;
