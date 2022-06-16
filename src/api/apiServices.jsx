import { useState, useEffect } from "react";
import axios from "axios";

/**
 * Function returning the API data of the user's sports activity
 * @param {number} id - User page id
 * @const {object} user - User identity information and user nutritional values
 * @const {object} activity - Weight and calories burned each day
 * @const {object} average - Duration of daily activity sessions
 * @const {object} performance - Values ​​of each type of activity
 * @return {object} - All user datas
 */

export function useData(id) {
   const [user, setUser] = useState([]);
   const [activity, setActivity] = useState([]);
   const [average, setAverage] = useState([]);
   const [performance, setPerformance] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);

   useEffect(() => {
      setIsError(false);
      setIsLoading(true);

      try {
         const getUser = axios.get(`http://localhost:3000/user/${id}`);
         const getActivity = axios.get(
            `http://localhost:3000/user/${id}/activity`
         );
         const getAverage = axios.get(
            `http://localhost:3000/user/${id}/average-sessions`
         );
         const getPerformance = axios.get(
            `http://localhost:3000/user/${id}/performance`
         );

         Promise.all([getUser, getActivity, getAverage, getPerformance]).then(
            axios.spread((...datas) => {
               const userDatas = datas[0].data.data;
               const activityDatas = datas[1].data.data;
               const averageDatas = datas[2].data.data;
               const performanceDatas = datas[3].data.data;
               setUser(userDatas);
               setActivity(activityDatas);
               setAverage(averageDatas);
               setPerformance(performanceDatas);
            })
         );
      } catch (error) {
         setIsError(true);
      }
      setIsLoading(false);
   }, []);

   return {
      user,
      activity,
      average,
      performance,
      isLoading,
      isError,
   };
}
