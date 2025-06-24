const divide = function() {
  return 2000 / 100;
};

const square = x => x * x;

const add = (a, b) => a + b;

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

