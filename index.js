function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
const add = (a, b) => a + b;
const twoAdder = x => x + 2;
const sum = (a, b) => {
  console.log(`Adding ${a}`);
  console.log(`Adding ${b}`);
  return a + b;
};
const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2); 
const overdueTodoItems = [
  { className: "" },
  { className: "" },
  { className: "" }
];
const finishedItems = overdueTodoItems.map(item => item.className = "complete");

console.log(saturdayFun());
console.log(mondayWork());
console.log(wrapAdjective("!")("a hard worker")); 
console.log(add(2, 3));
console.log(twoAdder(5));
console.log(sum(4, 6));
console.log(squares);
console.log(finishedItems); 
