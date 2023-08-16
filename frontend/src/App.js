import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Onboarding from "./components/Onboarding";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const authToken = cookies.AuthToken;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {authToken && <Route path="/dashboard" element={<Dashboard />} />}
        {authToken && <Route path="/onboarding" element={<Onboarding />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
