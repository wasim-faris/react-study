import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      <Login />
      <Dashboard />
    </LoginContext.Provider>
  );
}

function Login() {
  const { login, logout } = useContext(LoginContext);

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

function Dashboard() {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <h1>
      {isLoggedIn ? "Welcome User" : "Please Login"}
    </h1>
  );
}

export default App;