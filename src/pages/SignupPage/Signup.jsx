import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import "./Signup.scss";

const Signup = () => {
  const { creds, signup, setCurrentUser, checkIfUserExists } = useAuth();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    if (checkIfUserExists(usernameRef.current.value, emailRef.current.value)) {
      return setError("That didn't work. User already exists");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        usernameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch {
      setError("Something went wrong! Try again.");
    }
    setCurrentUser(usernameRef.current.value);
    setLoading(false);
  };

  console.log(JSON.stringify(creds));
  return (
    <div className="controll">
      {error && <div className="error">{error}</div>}
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
        <button disabled={loading}>Sign up</button>
      </form>
      <button>Sign up with Google</button>
      <button>Sign up with Github</button>
    </div>
  );
};

export default Signup;
