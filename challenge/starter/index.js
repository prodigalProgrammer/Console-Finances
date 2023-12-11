var finances = [
  ["Jan-2010", 867884],
  ["Feb-2010", 984655],
  ["Mar-2010", 322013],
  ["Apr-2010", -69417],
  ["May-2010", 310503],
  ["Jun-2010", 522857],
  ["Jul-2010", 1033096],
  ["Aug-2010", 604885],
  ["Sep-2010", -216386],
  ["Oct-2010", 477532],
  ["Nov-2010", 893810],
  ["Dec-2010", -80353],
  ["Jan-2011", 779806],
  ["Feb-2011", -335203],
  ["Mar-2011", 697845],
  ["Apr-2011", 793163],
  ["May-2011", 485070],
  ["Jun-2011", 584122],
  ["Jul-2011", 62729],
  ["Aug-2011", 668179],
  ["Sep-2011", 899906],
  ["Oct-2011", 834719],
  ["Nov-2011", 132003],
  ["Dec-2011", 309978],
  ["Jan-2012", -755566],
  ["Feb-2012", 1170593],
  ["Mar-2012", 252788],
  ["Apr-2012", 1151518],
  ["May-2012", 817256],
  ["Jun-2012", 570757],
  ["Jul-2012", 506702],
  ["Aug-2012", -1022534],
  ["Sep-2012", 475062],
  ["Oct-2012", 779976],
  ["Nov-2012", 144175],
  ["Dec-2012", 542494],
  ["Jan-2013", 359333],
  ["Feb-2013", 321469],
  ["Mar-2013", 67780],
  ["Apr-2013", 471435],
  ["May-2013", 565603],
  ["Jun-2013", 872480],
  ["Jul-2013", 789480],
  ["Aug-2013", 999942],
  ["Sep-2013", -1196225],
  ["Oct-2013", 268997],
  ["Nov-2013", -687986],
  ["Dec-2013", 1150461],
  ["Jan-2014", 682458],
  ["Feb-2014", 617856],
  ["Mar-2014", 824098],
  ["Apr-2014", 581943],
  ["May-2014", 132864],
  ["Jun-2014", 448062],
  ["Jul-2014", 689161],
  ["Aug-2014", 800701],
  ["Sep-2014", 1166643],
  ["Oct-2014", 947333],
  ["Nov-2014", 578668],
  ["Dec-2014", 988505],
  ["Jan-2015", 1139715],
  ["Feb-2015", 1029471],
  ["Mar-2015", 687533],
  ["Apr-2015", -524626],
  ["May-2015", 158620],
  ["Jun-2015", 87795],
  ["Jul-2015", 423389],
  ["Aug-2015", 840723],
  ["Sep-2015", 568529],
  ["Oct-2015", 332067],
  ["Nov-2015", 989499],
  ["Dec-2015", 778237],
  ["Jan-2016", 650000],
  ["Feb-2016", -1100387],
  ["Mar-2016", -174946],
  ["Apr-2016", 757143],
  ["May-2016", 445709],
  ["Jun-2016", 712961],
  ["Jul-2016", -1163797],
  ["Aug-2016", 569899],
  ["Sep-2016", 768450],
  ["Oct-2016", 102685],
  ["Nov-2016", 795914],
  ["Dec-2016", 60988],
  ["Jan-2017", 138230],
  ["Feb-2017", 671099],
];

// Variable containing amount of all arrays in the 'finances' variable.
const totalMonths = "Total Months: " + finances.length;

// Setting a variable to contain the total amount of Profit/Losses.
let totalPAndL = 0;

// Empty array to contain all Profit/Loss numbers.
let PandLArray = [];

// Empty array to contain all Profit/Loss dates.
let PandLDates = [];

// Empty array to contain all differences betwen the Profit/Loss dates.
let PandLChanges = [];

// for-Of Loop where I destructure the 'finances' variable into two different arrays.
for (const [dates, PandL] of finances) {
  // Adding each iteration of the Profit/Losses and totals them up into the 'totalPandL' variable.
  totalPAndL += PandL;
  // Creating an array made up of just the Profit/Loss numbers.
  PandLArray.push(PandL);
  // Creating an array made up of just the Profit/Loss dates.
  PandLDates.push(dates);
  // Ends Loop
}

// Creating a for loop where the second index of the Profit/Loss array is taken away from the first index to find the difference in the two numbers. Note that in this case, the 'i' variable loops from 1 not 0 because the first difference in months should take place on the second month.
for (let i = 1; i < PandLArray.length; ++i) {
  // 'Pushing' all amounts into the 'PandLChanges' variable as each index is looped over.
  PandLChanges.push(PandLArray[i] - PandLArray[i - 1]);
  // Ends loop
}

const avgChange =
  // Using the reduce() method to total all the differences between the months, then dividing by the total amount of months where a change has occured (85) to find the average amount. The 'toFixed()' method ensures that the decimal integer given is rounded to within two decimal points.
  (
    PandLChanges.reduce((acc, current) => acc + current) / PandLChanges.length
  ).toFixed(2);

// Using the spread operator to make the 'PandLChanges' array an iterable list so I can return only the largest number (using the Math.max() method). This is then stored in a variable.
const biggestProfit = Math.max(...PandLChanges);

// Using the spread operator to make the 'PandLChanges' array an iterable list so I can return only the smallest number (using the Math.min() method). This is then stored in a variable.
const biggestLoss = Math.min(...PandLChanges);

// -------------------------------------------------------------------
// CONSOLE LOGS
// -------------------------------------------------------------------

// '\n' added to create a backspace instead of two diffrent logs to the Console.
console.log("Financial Analysis\n----------------");
// 'totalMonths' variable displaying how many months are in the 'finances' variable.
console.log(totalMonths);
// Basic concatenation to combine a string with the 'totalPandL' variable.
console.log("Total: $" + totalPAndL);
// Using the string template literal way to combine a string with the 'avgChange' variable.
console.log(`Average Change: ${avgChange}`);

// Using the indexOf() method to return the position of the 'biggestProfit' number in the 'PandLChanges' array. I then use that same number to locate the relative position in the 'PandLDates' array (plus one additional index, because the 'PandLChanges' array start from the second month). Once the string is concatenated with the 'biggestProfit' variable, the sentence is complete.
console.log(
  `Greatest Increase in Profits/Losses: ${
    PandLDates[PandLChanges.indexOf(biggestProfit) + 1]
  } ($${biggestProfit})`
);

// Using the indexOf() method to return the position of the 'biggestLoss' number in the 'PandLChanges' array. I then use that same number to locate the relative position in the 'PandLDates' array (plus one additional index, because the 'PandLChanges' array start from the second month). Once the string is concatenated with the 'biggestLoss' variable, the sentence is complete.
console.log(
  `Greatest Decrease in Profits/Losses: ${
    PandLDates[PandLChanges.indexOf(biggestLoss) + 1]
  } ($${biggestLoss})`
);

// // Test version to calculate the changes between each Profit/Loss.
// const testArr = [1000, -50, -900, -800];
// const testChange = [];
// for (let i = 0; i < testArr.length; ++i) {
//   testChange.push(testArr[i] - testArr[i - 1]);
// }
// console.log(testChange);
// console.log(testChange.shift());

// // Test version for the total of the changes.
// console.log(testChange.reduce((acc, current) => acc + current));
