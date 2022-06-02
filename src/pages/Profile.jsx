import React from "react";
import { useData } from "../api/apiServices";
import { useParams } from "react-router-dom";
import Welcome from "../components/Welcome";
import Sidebar from "../components/Sidebar";
import BarsChart from "../components/Charts/BarsChart";
import Card from "../components/Card";
import LinesChart from "../components/Charts/LinesChart";
import RadarsChart from "../components/Charts/RadarsChart";
import RadialsBarChart from "../components/Charts/RadialsBarChart";

// -------------------------------------
// Importe les données mockées
// -------------------------------------
// import {
//    getMockedUserInfo,
//    getMockedUserActivity,
//    getMockedUserAverage,
//    getMockedUserPerformance,
// } from "../api/mocks/mockServices";
// -------------------------------------

// -----------------------------------------------------
// Affiche les données mockées (fichier "mockServices")
// -----------------------------------------------------
// const mockedUser = getMockedUserInfo(id);
// const mockedActivity = getMockedUserActivity(id);
// const mockedAverage = getMockedUserAverage(id);
// const mockedPerformance = getMockedUserPerformance(id);

// const user = mockedUser;
// const userInfos = mockedUser.userInfos;
// const nutritionalValues = mockedUser.keyData;
// const dailyActivity = mockedActivity.sessions;
// const dailyActivityTime = mockedAverage.sessions;
// const typeActivity = mockedPerformance.kind;
// const activityTypeValues = mockedPerformance.data;
// -----------------------------------------------------

//

const Profile = () => {
   let { id } = useParams();
   const datas = useData(id);

   const user = datas.user;
   const userInfos = datas.user.userInfos;
   const nutritionalValues = datas.user.keyData;
   const dailyActivity = datas.activity.sessions;
   const dailyActivityTime = datas.average.sessions;
   const activityTypeValues = datas.performance.data;

   if (user && dailyActivity) {
      const dailyActivityArray = dailyActivity.map((element) => element);
      const dailyActivityTimeArray = dailyActivityTime.map(
         (element) => element
      );
      const activityTypeValuesArray = activityTypeValues.map(
         (element) => element
      );

      return (
         <div className="profile">
            <main className="main">
               <Sidebar />
               <div className="content">
                  <Welcome firstName={userInfos.firstName} />
                  <div className="items">
                     <section className="charts">
                        <BarsChart data={dailyActivityArray} />
                        <div className="small-charts">
                           <LinesChart data={dailyActivityTimeArray} />
                           <RadarsChart dataValue={activityTypeValuesArray} />
                           <RadialsBarChart data={user} />
                        </div>
                     </section>
                     <aside className="cards">
                        <Card data={nutritionalValues} />
                     </aside>
                  </div>
               </div>
            </main>
         </div>
      );
   }
};

export default Profile;
