import "./App.scss";
import AuthContextProvider from "./context/AuthContextProvider";
import Signup from "./pages/SignupPage/Signup";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Signup />
      </AuthContextProvider>
    </div>
  );
}

export default App;
