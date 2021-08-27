const weeklyincome = parseInt(prompt("what is your weekly income: "));

const foodcost = parseInt(prompt("what is your food cost: "));
const housingcost = parseInt(prompt("what is your housing cost: "));
const transportationcost = parseInt(prompt("what is your transportation cost: "));
const othercost = parseInt(prompt("what are your total other cost: "));



const yearlysavings = parseInt(prompt("how much do you want to save in a year: "));



let weeklysavings = yearlysavings % 52;
let totalweeklycost = foodcost + housingcost + transportationcost + othercost;
let weeklydifference = weeklyincome - totalweeklycost;
let savingsneeded = weeklysavings - weeklydifference;



if (weeklydifference >= weeklysavings){
	console.log("Your on track!");
}	else{ console.log ("You need to save" + savingsneeded)}
