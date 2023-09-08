import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/index.js";
// import Login from "./components/LoginSection/index"
// import SignUp from "./components/SignUp/index.js";
// import Info from "./components/InfoSection/index.js";
// import ChooseType from "./components/ChooseType/index.js";
//import EditInformation from "./components/EditInformation/index.js";
//import ChooseType from "./components/ChooseType/index.js";
import EditInformation from "./components/EditInformation/index.js";

{/* <Route exact path="/signup" Component={SignUp} />
<Route exact path="/login" Component={Login} />
</Routes>
</Router>
);     {/*   <Routes>*/}

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Navbar/>}></Route>
        <Route path="/edit" element={<EditInformation/>}></Route>

      </Routes>
    </Router>
  )
}
export default App;
