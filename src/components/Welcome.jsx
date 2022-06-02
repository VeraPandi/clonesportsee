import React from "react";
import PropTypes from "prop-types";

const Welcome = ({ firstName }) => {
   return (
      <header className="titles">
         <h1>Bonjour </h1>
         <h2 className="name">{firstName}</h2>
         <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
   );
};

Welcome.propTypes = {
   firstName: PropTypes.string,
};

export default Welcome;
