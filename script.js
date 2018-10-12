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






//Overly excited practice challenge-- create an array of words, then create a function addExcitement that console logs rows of words until it reaches the end of the array


let sentence = ["The", "only", "thing", "we", "have", "to", "fear", "is", "fear", "itself"];



function addExcitement (theWordArray) {

    
    let buildMeUp = ""

    theWordArray.forEach((word) => {
      buildMeUp += `${word} `
      console.log(buildMeUp)
    })

}
addExcitement(sentence)

// modify last challenge as follows:  
//     If the current value of `i` divided by 3 has no
//     remainder, add an exclamation point to the end of
//     the word and then concatenate it to `buildMeUp`.
//     Otherwise, just concatenate the word itself. 

function addMoreExcitement (theWordArray) {

    
  let buildMeUp2 = ""

  for(let i = 0; i < theWordArray.length; i++) {
    if (i % 3 === 0){
      buildMeUp2 += (`${theWordArray[i]}! `);
      console.log(buildMeUp2)
    } else {
      buildMeUp2 += `${theWordArray[i]} `;
      console.log(buildMeUp2)
    }
  }
}
addMoreExcitement(sentence)