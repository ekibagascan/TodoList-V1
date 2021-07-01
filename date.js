//jshint esversion:6

const today = new Date();
const options = { 
    weekday: "long",
    month: "long",
    day: "numeric"
};
exports.day = today.toLocaleDateString("en-US", options);

const options2 = { 
    weekday: "long",
};
exports.month = today.toLocaleDateString("en-US", options2);

// with function, old way
// module.exports.getDate = getDate;
// function getDate() {
//     let today = new Date();
//     let options = { 
//     weekday: "long",
//     month: "long",
//     day: "numeric"
// };
//     let day = today.toLocaleDateString("en-US", options);

//     return day;
// }

//OR
// exports.getDate = function() {
//     let today = new Date();
//     let options = { 
//     weekday: "long",
//     month: "long",
//     day: "numeric"
// };
//     return day = today.toLocaleDateString("en-US", options);
// }