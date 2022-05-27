import React from "react";
import yoga from "../assets/icons/yoga.png";
import swim from "../assets/icons/swim.png";
import cycling from "../assets/icons/cycling.png";
import bodybuilding from "../assets/icons/bodybuilding.png";

const Sidebar = () => {
   return (
      <aside className="sidebar">
         <ul>
            <li>
               <img src={yoga} alt="Icône du yoga" />
            </li>
            <li>
               <img
                  className="swim-icon"
                  src={swim}
                  alt="Icône de la natation"
               />
            </li>
            <li>
               <img
                  className="cycling-icon"
                  src={cycling}
                  alt="Icône du cyclisme"
               />
            </li>
            <li>
               <img src={bodybuilding} alt="Icône de la musculation" />
            </li>
         </ul>

         <span className="copyright">Copyright, SportSee 2020</span>
      </aside>
   );
};

export default Sidebar;
