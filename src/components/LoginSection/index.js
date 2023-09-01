import { useState } from "react";
import "./login.scss"
import FormInput from "../SignUp/FormInput";
import myAmblem from '../Navbar/amblem.svg' 


const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

   const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ]; 

  

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
     <div className="login-panel">
     <div className="app">
      <form onSubmit={handleSubmit}>
      <div className="head-login">
        <img src={myAmblem} alt='amblem'></img>
        <h3>LOGIN</h3>
      </div>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Login</button>
        <div className="dont-have-account">Already have an account?
        
        <a href="">Sign Up</a>
        </div>
      </form>
    </div>
    </div>
      

   
      
  );
};

export default Login;