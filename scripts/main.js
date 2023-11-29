import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

    //for (let i = 0; i < fish.length; i++) {

      

// Import the FishList function from the correct module
import { FishList } from './FishList.js'

const fishCard = getFish(); {
    /*
        What is the CSS selector for the element where you
        want to display the fish?
    
        Use . for elements with a "class" attribute
        Use # for elements with an "id" attribute
     */
}    
const parentHTMLElement = document.querySelectorAll('.fishCard');

parentHTMLElement.innerHTML = FishList();