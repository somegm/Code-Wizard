import { useState } from "react";
import "./formInput.scss";
import FormInput from "../SignUp/FormInput";
import myAmblem from '../Navbar/amblem.svg' 

const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      pattern: values.password,
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
    
    <div className="sign-contain">
    <div className="app">
      <form onSubmit={handleSubmit}>
      <div className="head-sign">
        <img src={myAmblem} alt='amblem'></img>
        <h1>SIGN UP</h1>
      </div>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
        <div className="sub">Already have an account?<a className="buttonOne">Login</a>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignUp;