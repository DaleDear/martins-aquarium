import { getFish } from "./database.js"

export const holyFish = [];
export const soldierFish = [];
export const nonHolyFish = [];

let fishes = getFish();
 //for (let i = 0; i < getFish.size.length; i++);

for (let fish of fishes) {
    const size = fish.size;
   
    if (size % 3 === 0) {
        holyFish.push(fish);
    } else if (size % 5 === 0) {
        soldierFish.push(fish);
    } else {
        nonHolyFish.push(fish);
    }
}

