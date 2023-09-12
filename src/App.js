import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/index.js";
import Info from "./components/InfoSection/index.js";
import SignUp from "./components/SignUp/index.js";
 import Login from "./components/LoginSection/index"
 import MyProfileDashboard from "./components/MyProfileDashboard/index.js";
 import ChooseType from "./components/ChooseType/index.js";
 import EditInformation from "./components/EditInformation/index.js";
 import Customize from "./components/Customize/index.js";
import Save from "./components/Save/index.js";
import MyProfile from "./components/MyProfile/index.js";



{/* <Route exact path="/signup" Component={SignUp} />
<Route exact path="/login" Component={Login} />
</Routes>
</Router>
);     {/*   <Routes>*/}

function App() {
  return (
    
    <Router>
    <Navbar/>
      <Routes>
      {/*   <Route index element={}></Route> */}
        <Route path="/info" element={<Info/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/myprofile" element={<MyProfileDashboard/>}></Route>
        <Route path="/choosetype" element={<ChooseType/>}></Route>
        <Route path="/edit" element={<EditInformation/>}></Route>
        <Route path="/customize" element={<Customize/>}></Route>
        <Route path="/save" element={<Save/>}></Route>
        <Route path="/profile" element={<MyProfile/>}></Route>

      </Routes>
    </Router>
  )
}
export default App;
