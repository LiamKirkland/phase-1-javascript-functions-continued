// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flare="*") {
    function inner(desc = "special") {
        return `You are ${flare}${desc}${flare}!`
    }
    return inner
}

const encouragingMessage = wrapAdjective("<3")("super cool")