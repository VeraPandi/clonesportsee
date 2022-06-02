import { useState, useEffect } from "react";
import axios from "axios";

export function useData(id) {
   const [user, setUser] = useState([]);
   const [activity, setActivity] = useState([]);
   const [average, setAverage] = useState([]);
   const [performance, setPerformance] = useState([]);

   const fetchData = () => {
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

      axios.all([getUser, getActivity, getAverage, getPerformance]).then(
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
   };

   useEffect(() => {
      fetchData();
   }, []);

   return {
      user,
      activity,
      average,
      performance,
   };
}
