import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./register.css";
import axios from "axios";

const Register = () => {
  const user = useSelector((state) => state.user.userInfo);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState("");
  const [answer, setAnswer] = useState("");
  const [password, setPassword] = useState("");
  const [retrypePassword, setRetrypePassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();

    if (password !== retrypePassword) {
      setError("Incorrect Password");
      return;
    }
    try {
      const data = await axios.post("http://localhost:5000/auth/register", {
        name,
        email,
        phone,
        location,
        answer,
        password,
      });
      console.log(data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    user && navigate("/");
  }, [navigate, user]);

  return (
    <div className="register-form">
      <div className="form-box-register">
        <div className="form-value">
          <form action="">
            <h2 className="h-login">Register</h2>
            <div className="inputbox">
              <i className="ri-user-line"></i>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
              />
              <label htmlFor="">name</label>
            </div>

            <div className="inputbox">
              <i className="ri-mail-line"></i>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
              <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">
              <i className="bx bxs-phone"></i>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                required
              />
              <label htmlFor="">phone</label>
            </div>
            <div className="inputbox">
              <i className="bx bxs-briefcase"></i>{" "}
              <input
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                required
              />
              <label htmlFor="">location</label>
            </div>
            <div className="inputbox">
              <i className="bx bxs-briefcase"></i>{" "}
              <input
                onChange={(e) => setAnswer(e.target.value)}
                type="text"
                required
              />
              <label htmlFor="">answer</label>
            </div>
            <div className="inputbox">
              <i className="ri-lock-fill"></i>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
              <label htmlFor="">Password</label>
            </div>
            <div className="inputbox">
              <i className="ri-lock-fill"></i>
              <input
                onChange={(e) => setRetrypePassword(e.target.value)}
                type="password"
                required
              />

              <label htmlFor="">Confirme Password</label>
            </div>

            <button onClick={registerHandler} className="log-in">
              Register
            </button>
            {error && <span className="error">{error}</span>}

            <div className="register-button">
              <br />
              <p>
                You have an Account <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
