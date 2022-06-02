import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import "./styles/main.scss";

const App = () => {
   return (
      <Router>
         <Header />
         <Routes>
            <Route path="/user/:id" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Router>
   );
};

export default App;
