import React from "react";
// import { useData } from "../api/apiServices";
import { useParams } from "react-router-dom";
import Welcome from "../components/Welcome";
import Sidebar from "../components/Sidebar";
import BarsChart from "../components/Charts/BarsChart";
import Card from "../components/Card";
import LinesChart from "../components/Charts/LinesChart";
import RadarsChart from "../components/Charts/RadarsChart";
import RadialsBarChart from "../components/Charts/RadialsBarChart";

// -------------------------------------
// Import mocked data
// -------------------------------------
import {
   getMockedUserInfo,
   getMockedUserActivity,
   getMockedUserAverage,
   getMockedUserPerformance,
} from "../api/mocks/mockServices";
// -------------------------------------

/**
 * Displays a profile page containing the user's profile charts
 * @const {number} id - User page id
 * @const {object} datas - Object returned after fetch and containing all user datas
 * @const {object} user - Contains user data: id, keyData, score, userInfos
 * @const {object} userInfos - User identity information (firstname, lastname, age)
 * @const {object} nutritionalValues - User nutritional values
 * @const {array} dailyActivity - Weight and calories burned each day
 * @const {array} dailyActivityTime - Duration of daily activity sessions
 * @const {object} activityTypeValues - Values ​​of each type of activity
 * @return {JSX.Element} - A personal profile page for each user
 */

const Profile = () => {
   const { id } = useParams();

   //

   // -----------------------------------------------------
   // Displays API data (comes from "apiServices" file)
   // -----------------------------------------------------
   //    const datas = useData(id);

   //    const user = datas.user;
   //    const userInfos = datas.user.userInfos;
   //    const nutritionalValues = datas.user.keyData;
   //    const dailyActivity = datas.activity.sessions;
   //    const dailyActivityTime = datas.average.sessions;
   //    const activityTypeValues = datas.performance.data;
   // -----------------------------------------------------

   // -----------------------------------------------------
   // Displays mocked data (comes from "mockServices" file)
   // -----------------------------------------------------
   const mockedUser = getMockedUserInfo(id);
   const mockedActivity = getMockedUserActivity(id);
   const mockedAverage = getMockedUserAverage(id);
   const mockedPerformance = getMockedUserPerformance(id);

   const user = mockedUser;
   const userInfos = mockedUser.userInfos;
   const nutritionalValues = mockedUser.keyData;
   const dailyActivity = mockedActivity.sessions;
   const dailyActivityTime = mockedAverage.sessions;
   const typeActivity = mockedPerformance.kind;
   const activityTypeValues = mockedPerformance.data;
   // -----------------------------------------------------

   //

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
