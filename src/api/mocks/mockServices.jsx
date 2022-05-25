import {
   USER_MAIN_DATA,
   USER_ACTIVITY,
   USER_AVERAGE_SESSIONS,
   USER_PERFORMANCE,
} from "./mocks.js";

export const getMockedUserInfo = (id) => {
   const info = USER_MAIN_DATA.filter(
      (element) => element.id === Number(id)
   ).shift();

   return info;
};

export const getMockedUserActivity = (id) => {
   const activity = USER_ACTIVITY.filter(
      (element) => element.userId === Number(id)
   ).shift();

   return activity;
};

export const getMockedUserAverage = (id) => {
   const average = USER_AVERAGE_SESSIONS.filter(
      (element) => element.userId === Number(id)
   ).shift();

   return average;
};

export const getMockedUserPerformance = (id) => {
   const performance = USER_PERFORMANCE.filter(
      (element) => element.userId === Number(id)
   ).shift();

   return performance;
};
