import React from "react";
import yoga from "../assets/icons/yoga.png";
import swim from "../assets/icons/swim.png";
import cycling from "../assets/icons/cycling.png";
import bodybuilding from "../assets/icons/bodybuilding.png";

const Sidebar = () => {
   return (
      <section className="sidebar">
         <ul>
            <li>
               <img src={yoga} alt="logo de SportSee" />
            </li>
            <li>
               <img src={swim} alt="logo de SportSee" />
            </li>
            <li>
               <img src={cycling} alt="logo de SportSee" />
            </li>
            <li>
               <img src={bodybuilding} alt="logo de SportSee" />
            </li>
         </ul>
      </section>
   );
};

export default Sidebar;
