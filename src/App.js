import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./styles/main.scss";

const App = () => {
   return (
      <Router>
         <Header />
         <Routes>
            <Route path="/user/:id" element={<Dashboard />} />
         </Routes>
         <Sidebar />
      </Router>
   );
};

export default App;
