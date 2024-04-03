// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
  let mondayWork = function(activity="go to the office") {
   return `This Monday, I will ${activity}.`
  }
  //function saturdayFun(activity = 'roller-skate'){
   // return `Saturday, I have to ${activity}.`
    //console.log('roller-skate');
    //default argument, 'roller-skate' when no arguments are passed.
    //It allows the default argument to be overridden.
//}
//f//unction mondayWork(activity= 'go to the office' ){
   // return `Monday, I have to ${activity}.`
   // console.log('go to the office');
//default argument, 'go to the office' when no arguments are passed.
//It allows the default argument to be overridden
//}
////function wrapAdjective(){
   // return
    let wrapAdjective = function(style="*") {
        return function(adjective="special") {
          return `You are ${style}${adjective}${style}!`
        }
      }
//     It should return a function. This "inner" function should:
// take a single parameter that should default to "special". Name it however you wish.
// return a String of the form "You are ...!" where ... should be the adjective this function received wrapped in visual flair.
// It should take as parameter a String that will be used to create visual flair.
// You may call the parameter whatever you like, but its default value should be "*".
// Call example: const encouragingPromptFunction = wrapAdjective("!!!")
//wrapAdjective("%")("a dedicated programmer");
//}
//function razzle(lawyer = "Billy", target = "'em") {
  //  console.log(`${lawyer} razzle-dazzles ${target}!`);
 // }
 // razzle(); //=> Billy razzle-dazzles 'em!
 // razzle("Methuselah", "T'challah"); //=> Methuselah razzle-dazzles T'challah!