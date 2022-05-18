import "./App.css";
import { Sidebar } from "./components/Note";
import { useAuth } from "./context/AuthProvider";
import { Router } from "./Router/Router";
import "./styles/main.css"

function App() {
  const { login } = useAuth();
  return (
    <>
      <Sidebar login={login} />
      < Router />
    </>
  );
}

export default App;