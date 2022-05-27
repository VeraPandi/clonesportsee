import React from "react";
import fire from "../assets/icons/fire.png";
import chicken from "../assets/icons/chicken.png";
import apple from "../assets/icons/apple.png";
import cheeseburger from "../assets/icons/cheeseburger.png";

const Card = ({ data }) => {
   return (
      <section className="cards-container">
         <div className="card">
            <div className="fire-label">
               <img src={fire} alt="Label des calories" />
            </div>
            <div className="result">
               <span className="result-count">{data.calorieCount}kCal</span>
               <span className="result-name">Calories</span>
            </div>
         </div>

         <div className="card">
            <div className="chicken-label">
               <img src={chicken} alt="Label des protéines" />
            </div>
            <div className="result">
               <span className="result-count">{data.proteinCount}g</span>
               <span className="result-name">Protéines</span>
            </div>
         </div>

         <div className="card">
            <div className="apple-label">
               <img src={apple} alt="Label des glucides" />
            </div>
            <div className="result">
               <span className="result-count">{data.carbohydrateCount}g</span>
               <span className="result-name">Glucides</span>
            </div>
         </div>

         <div className="card">
            <div className="cheeseburger-label">
               <img src={cheeseburger} alt="Label des lipides" />
            </div>
            <div className="result">
               <span className="result-count">{data.lipidCount}g</span>
               <span className="result-name">Lipides</span>
            </div>
         </div>
      </section>
   );
};

export default Card;
