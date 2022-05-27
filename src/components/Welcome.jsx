import React from "react";

const Welcome = ({ firstName }) => {
   return (
      <section className="titles">
         <h1>Bonjour </h1>
         <h2 className="name">{firstName}</h2>
         <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
   );
};

export default Welcome;
