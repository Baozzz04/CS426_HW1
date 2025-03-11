// import activities from "./constants";

// const calculateCarbonUsage = () => {
//   const today = new Date();
//   const thisWeek = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() - today.getDay()
//   );
//   const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);

//   const weekCarbonUsage = activities
//     .filter((activity) => new Date(activity.activityDate) >= thisWeek)
//     .reduce((acc, activity) => acc + activity.carbonProduced, 0);
//   const monthCarbonUsage = activities
//     .filter((activity) => new Date(activity.activityDate) >= thisMonth)
//     .reduce((acc, activity) => acc + activity.carbonProduced, 0);

//   return { weekCarbonUsage, monthCarbonUsage };
// };

// export default calculateCarbonUsage;
