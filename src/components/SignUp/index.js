import { useState } from "react";
import "../SignUp/formInput.css";
import FormInput from "../SignUp/FormInput";
import {Link} from "react-router-dom"

const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isPasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      required: true,
    },
];

  const handleSubmit = (e) => {
    e.preventDefault();

    

    // Şifrelerin uyuşup uyuşmadığını kontrol edilen kısım
    if (!isPasswordMatch(values.password, values.confirmPassword)) {
      alert("Passwords do not match!");
      return;
    }

    // Form verilerini hazırlama kısmı
    const formData = {
      email: values.email,
      password: values.password,
    };

    // Verileri backend'e gönderme kısmı
    sendDataToBackend(formData);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const sendDataToBackend = (data) => {
    fetch("https://s-tekin.jotform.dev/intern-api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // PHP scriptinden gelen cevabı işleme kısmı
        console.log(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>SIGN UP</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Submit</button>
        <div className="sub">
          Already have an account?<Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
