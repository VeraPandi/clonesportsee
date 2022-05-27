import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Sidebar from "../components/Sidebar";
import BarsChart from "../components/BarsChart";
import Card from "../components/Card";
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

   console.log(datas);
   const activitySessionArray = datas.activitySession.map((element) => element);

   //    console.log(datas);

   return (
      <>
         <Header />
         <Sidebar />
         <main className="main">
            <Welcome firstName={datas.userInfo.firstName} />
            <div className="content">
               <section className="charts">
                  <BarsChart data={activitySessionArray} />
               </section>
               <aside className="cards">
                  <Card data={datas.userKeyData} />
               </aside>
            </div>
         </main>
      </>
   );
};

export default Dashboard;
