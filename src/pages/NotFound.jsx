import React from "react";
import Sidebar from "../components/Sidebar";

const NotFound = () => {
   return (
      <div className="notFound">
         <main className="main">
            <Sidebar />
            <div className="notFound-content">
               <div className="error-code">404</div>
               <h1 className="error-message">
                  Oups ! La page que vous recherchez semble introuvable...
               </h1>
            </div>
         </main>
      </div>
   );
};

export default NotFound;
