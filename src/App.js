import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import "./styles/main.scss";

const App = () => {
   return (
      <Router basename={process.env.PUBLIC_URL}>
         <Header />
         <Routes>
            <Route path="/user/:id" element={<Profile />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
         </Routes>
      </Router>
   );
};

export default App;
