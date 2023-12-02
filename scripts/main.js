import { holyFish } from './data-fish-provider.js'
import { soldierFish } from './data-fish-provider.js'
import { nonHolyFish } from './data-fish-provider.js'

//const { tipList } = require("./tipList.js")
//const { tankCare } = require("./database.js")

import { fishTips, tankTips, getFish, database } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

    //for (let i = 0; i < fish.length; i++) {

      

// Import the FishList function from the correct module
import { FishList } from './FishList.js'
import { tipList } from './TipList.js'

const fishCard = getFish(); {
    /*
        What is the CSS selector for the element where you
        want to display the fish?
    
        Use . for elements with a "class" attribute
        Use # for elements with an "id" attribute
     */
}    
const parentHTMLElement = document.querySelectorAll('.fishCard');
document.getElementById("Holy_Fish").innerText = "Holy Fish: " + holyFish[0]['type'] + ", " + holyFish[1]['type'] + "."
document.getElementById("Soldier_Fish").innerText = "Soldier Fish: " + soldierFish[0]['type'] + ", " + soldierFish[1]['type'] + ", " + soldierFish[2]['type'] + "."
document.getElementById("Nonholy_Fish").innerText = "Non-Holy Fish: " + nonHolyFish[0]['type'] + "."


const FishTipDiv = document.getElementById("Fish_Tips")
for (var i = 0; i < fishTips.length; i++) {
    var temp = document.createElement('div');
    FishTipDiv.appendChild(temp)
    temp.innerText = fishTips[i]
}

const TankTipDiv = document.getElementById("Tank_Tips")
for (var i = 0; i < tankTips.length; i++) {
    var temp = document.createElement('div');
    TankTipDiv.appendChild(temp)
    temp.innerText = tankTips[i]
}

//document.getElementById("Fish_Card").innerText = database.fish.length;

//example of how to retrieve a single line for a fish card
//document.getElementById("Fish_Card").innerText = "Type: " + database.fish[0]['type'] + " Name: " + database.fish[0]['name'];

/* 
const onPageLoad = () => {
    const fishListHTML = FishList();
    const fishListContainer = document.getElementById("fishListContainer");
    fishListContainer.innerHTML = fishListHTML;
};
window.addEventListener("load", onPageLoad);
*/

//begin automated code
/* var FishCardDiv = document.getElementById("Fish_Card")
FishCardDiv.innerText = database.fish.length; */
var tblRow_1 = document.getElementById("tblRow1")
var tblRow_2 = document.getElementById("tblRow2")
for (var i = 0; i < database.fish.length; i++) {
    var tblCell = document.createElement('td')
    for (let x in database.fish[i]) {
        
        let txt = "";
        txt += database.fish[i][x]; 
        
        if (x == "image")
            {
            var oImg = document.createElement("img");
            oImg.setAttribute('src', txt); 
            tblCell.append(oImg);
            //xtemp.innerText = "<img src='" + txt + "' >"
            if (i < 3) { tblRow_1.appendChild(tblCell); } else { tblRow_2.appendChild(tblCell); }
            
            }
            else
            {
            var xtemp = document.createElement("div");
            xtemp.setAttribute("id", x + i)
            tblCell.appendChild(xtemp)    
            
            xtemp.innerText = x + ": " + txt;
            if (i < 3) { tblRow_1.appendChild(tblCell); } else { tblRow_2.appendChild(tblCell); }
            }
        
    }
    //FishCardDiv.innerText = FishCardDiv.innerText + '\n'
}
//end automated code */

parentHTMLElement.innerHTML = FishList();


console.log(holyFish);
console.log(soldierFish);
console.log(nonHolyFish);

//console.log(`Helpful Fish Tips: \n${tipList}\n`);
//console.log(tankCare);