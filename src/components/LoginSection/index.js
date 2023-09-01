import { useState, useEffect } from "react";
import "../SignUp/formInput.css";
import FormInput from "../SignUp/FormInput";
import { Link } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [userToken, setUserToken] = useState(""); // Token'i saklamak için kullanılacak state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Kullanıcının oturum açık olup olmadığını izlemek için kullanılan state

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
      errorMessage: "You wrote the wrong password",
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
          localStorage.setItem('user_token', data.token);
          setUserToken(data.token);
          setIsLoggedIn(true); // Kullanıcı oturum açtı
          console.log("Giriş başarılı. Token:", data.user_token); // Token'i console'da gösterme
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
    <div className="app">
      {isLoggedIn ? (
        <div>
          {/* Kullanıcı oturum açtıysa burada kullanıcı verilerini görüntüle */}
          <h1>Welcome, User!</h1>
          <button onClick={handleLogout}>Logout</button>
          {/* Kullanıcı verilerini burada görüntüle */}
        </div>
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
          <button>Login</button>
          <div className="h2">
            Already have an account?<Link to="/signup">Sign Up</Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
