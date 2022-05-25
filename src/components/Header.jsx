import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Header = () => {
   return (
      <header className="header">
         <Logo />
         <Navbar />
      </header>
   );
};

export default Header;
