import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className="navbar">
         <Link to="/" className="home-link">
            Accueil
         </Link>
         <Link to="/profile" className="profile-link">
            Profil
         </Link>
         <Link to="/setting" className="setting-link">
            Réglage
         </Link>
         <Link to="/community" className="community-link">
            Communauté
         </Link>
      </nav>
   );
};

export default Navbar;
