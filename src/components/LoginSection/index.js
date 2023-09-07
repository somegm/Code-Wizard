import { useState, useEffect } from "react";
import "../SignUp/formInput.css";
import FormInput from "../SignUp/FormInput";
import { Link } from "react-router-dom";
import EditInformation from "../EditInformation";
import ChooseType from "../ChooseType";
import Background from '../SignUp/backgroundimg.svg'
import LoginImg from './LoginPageImg.svg'


const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [user_token, setUserToken] = useState(""); // Token'i saklamak için kullanılacak state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Kullanıcının oturum açık olup olmadığını izlemek için kullanılan state

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
      required: true,
    },
  ];

  const handleLogin = () => {
    fetch('https://s-tekin.jotform.dev/intern-api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "success") {
          // Başarılı giriş
          // Token'i localStorage'a kaydet
          localStorage.setItem('user_token', data.content.user_token);
          localStorage.setItem('userId', data.content.id);
          setUserToken(user_token);
          setIsLoggedIn(true); // Kullanıcı oturum açtı
          console.log("Giriş başarılı. Token:"); // Token'i console'da gösterme
        } else {
          // Başarısız giriş

          console.error("Giriş başarısız");
        }
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };

  const handleLogout = () => {
    // Kullanıcı çıkış yaparken token'i localStorage'dan kaldır
    localStorage.removeItem('user_token');
    setUserToken("");
    setIsLoggedIn(false); // Kullanıcı oturumu kapattı
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kullanıcı girişini işlemek için handleLogin'i çağırma işlemi
    handleLogin();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Sayfa yüklendiğinde localStorage'dan token'i al
  useEffect(() => {
    const storedToken = localStorage.getItem('user_token');
    if (storedToken) {
      setUserToken(storedToken);
      setIsLoggedIn(true); // Kullanıcı oturum açık
    }
  }, []);

  return (
    <div className="login-panel">
    <div className='landing'>
      <img src={LoginImg}></img>
    </div>
  <div className='login-main'>
    <h2 className='titleWel'>Welcome Back!</h2>
    <div className="app">
    {isLoggedIn ? (
      //  <div>

      // çık label
      // <button onClick={handleLogout}>logout</button>
      //  </div>
      <ChooseType/>
      
     
    ) : (
      <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Login</button>
        <div className="h2">
          Already have an account?<Link to="/signup">Sign Up</Link>
        </div>
      </form>
    )}
  </div>
  </div>
  </div>
  );
};

export default Login;
