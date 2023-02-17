import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import "./Signup.scss";

const Signup = () => {
  const { creds } = useAuth();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(JSON.stringify(creds));
  return (
    <div className="controll">
      <form className="form-signup" onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            type="text"
            placeholder="Username "
            required
            ref={usernameRef}
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="E-mail"
            required
            ref={emailRef}
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="Password"
            required
            ref={passwordRef}
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="Confirm password"
            required
            ref={confirmPasswordRef}
            onChange={handleInput}
          />
        </div>
        <button>Sign up</button>
      </form>
      <button>Sign up with Google</button>
      <button>Sign up with Github</button>
    </div>
  );
};

export default Signup;
