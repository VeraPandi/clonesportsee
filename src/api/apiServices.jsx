import { useState, useEffect } from "react";
import axios from "axios";

export function useData(id) {
   const [user, setUser] = useState([]);
   const [userInfo, setUserInfo] = useState([]);
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
            const userInfoDatas = datas[0].data.data.userInfos;
            const activityDatas = datas[1].data.data;
            const averageDatas = datas[2].data.data;
            const performanceDatas = datas[3].data.data;
            setUser(userDatas);
            setUserInfo(userInfoDatas);
            setActivity(activityDatas);
            setAverage(averageDatas);
            setPerformance(performanceDatas);
            // console.log(userInfo);
         })
      );
   };

   useEffect(() => {
      fetchData();
   }, []);

   //    console.log(info.firstName);
   return { user, userInfo, activity, average, performance };
}
