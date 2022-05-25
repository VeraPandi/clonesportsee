import React from "react";
import { useParams } from "react-router-dom";
import Welcome from "../components/Welcome";
import { useData } from "../api/apiServices";

//

// -------------------------------------
// Affiche les données mockées
// -------------------------------------
// import {
//    getMockedUserInfo,
//    getMockedUserActivity,
//    getMockedUserAverage,
//    getMockedUserPerformance,
// } from "../api/mocks/mockServices";

// -----------------------------------------------------
// Affiche les données mockées (fichier "mockServices")
// -----------------------------------------------------
// const info = getMockedUserInfo(id);
// const activity = getMockedUserActivity(id);
// const average = getMockedUserAverage(id);
// const performance = getMockedUserPerformance(id);
// -----------------------------------------------------

//

const Dashboard = () => {
   let { id } = useParams();
   const datas = useData(id);

   return (
      <main>
         <Welcome firstName={datas.userInfo.firstName} />
      </main>
   );
};

export default Dashboard;
