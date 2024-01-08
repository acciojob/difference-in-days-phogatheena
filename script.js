var dateDiffInDays = function (date1, date2) {
  //   write your code here
	// let date1 = new Date('2023-12-01');
// let date2 = new Date('2023-12-10');

// Convert dates to UTC milliseconds
let utcDate1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
let utcDate2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

// Calculate the difference in days
let timeDifferenceInMilliseconds = utcDate2 - utcDate1;
let daysDifference = timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24);

console.log(daysDifference);

};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
