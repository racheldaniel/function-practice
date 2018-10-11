// Book 3 Ch. 3 Practice exercise 2-- Battle of the bands. Instructions are in console.log comments


let bandNumber = 0

const takeNumber = function (bandName) {
  bandNumber++
  return `${bandNumber}. ${bandName}`
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console







// Book 3 Ch. 3 Practice exercise 3-- Cookout. Instructions are as follows:


//Given:

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}


const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];
const cookedFood = [];


function grill (currentObject) {
  currentObject.cooked = true;
  cookedFood.push(currentObject);
};

//...Your task is to iterate over the array of uncookedFood and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.

uncookedFood.forEach((foodItem) => {
  grill(foodItem)
})
console.log(cookedFood)