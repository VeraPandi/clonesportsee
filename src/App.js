import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./styles/main.scss";

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path="/user/:id" element={<Dashboard />} />
         </Routes>
      </Router>
   );
};

export default App;
