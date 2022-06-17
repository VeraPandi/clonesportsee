import {
   USER_MAIN_DATA,
   USER_ACTIVITY,
   USER_AVERAGE_SESSIONS,
   USER_PERFORMANCE,
} from "./mocks.js";

const getMockedUserInfo = (id) => {
   const user = USER_MAIN_DATA.filter(
      (element) => element.id === Number(id)
   ).shift();

   return user;
};

const getMockedUserActivity = (id) => {
   const activity = USER_ACTIVITY.filter(
      (element) => element.userId === Number(id)
   ).shift();

   return activity;
};

const getMockedUserAverage = (id) => {
   const average = USER_AVERAGE_SESSIONS.filter(
      (element) => element.userId === Number(id)
   ).shift();

   return average;
};

const getMockedUserPerformance = (id) => {
   const performance = USER_PERFORMANCE.filter(
      (element) => element.userId === Number(id)
   ).shift();

   return performance;
};

/**
 * Function returning the mocked datas of the user's sports activity
 * @param {string} id - User page id
 * @const {object} user - User identity information and user nutritional values
 * @const {object} activity - Weight and calories burned each day
 * @const {object} average - Duration of daily activity sessions
 * @const {object} performance - Values ​​of each type of activity
 * @return {object} - All user datas
 */

const mockedDatas = (id) => {
   const user = getMockedUserInfo(id);
   const activity = getMockedUserActivity(id);
   const average = getMockedUserAverage(id);
   const performance = getMockedUserPerformance(id);

   return {
      user,
      activity,
      average,
      performance,
   };
};

export default mockedDatas;
