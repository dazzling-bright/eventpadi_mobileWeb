import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import Community from "./components/Community";
import Networking from "./components/Networking";

function App() {
  return (
    <Router>
      <Hero />
      <Routes>
        <Route path="/" element={<Navigate to="/event-details" />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/community" element={<Community />} />
        <Route path="/networking" element={<Networking />} />
      </Routes>
    </Router>
  );
}

export default App;
