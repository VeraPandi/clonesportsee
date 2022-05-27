import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Sidebar from "../components/Sidebar";
import DailyActivityChart from "../components/DailyActivityChart";
import NutritionLabels from "../components/NutritionLabels";
import { useData } from "../api/apiServices";

//

// -------------------------------------
// Importe les données mockées
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

   //    console.log(datas.activity.sessions);
   //    const dailyActivity = datas.activity.sessions;
   //    console.log(sessionsArray);
   //    console.log(datas.activitySession);
   //    console.log(datas.user.keyData);

   const sessionsArray = datas.activitySession.map((element) => element);
   console.log(datas);

   return (
      <>
         <Header />
         <Sidebar />
         <main className="main">
            <div className="content">
               <Welcome firstName={datas.userInfo.firstName} />
               <DailyActivityChart data={sessionsArray} />
               {/* <NutritionLabels data={}/> */}
            </div>
         </main>
      </>
   );
};

export default Dashboard;
