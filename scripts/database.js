/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
export const database = {
    fish: [
        {
            type: "Dwarf Pufferfish",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-sfXIFJj-rbJ2n6ODzUdp6ZAeGcYFNVJrg&usqp=CAU",
            species: "Carinotetraodon travancoricus",
            description: "Dwarf Pufferfish are popular for their bright colours and small size.",
            name: "Bart",
            food: "Crustaceans",
            size: 3,
            harvestLocation: "Vembanadu Lake",
        },
        {
            type: "Clownfish",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwTm85_s5_CUlpGt8ECbc4wfF4kB_Ce5W9A&usqp=CAU", 
            species: "A. ocellaris",
            description: "The clownfish can be many different colours. Most have white details.",
            name: "Chuckles",
            food: "Algae Flakes",
            size: 4,
            harvestLocation: "Great Barrier Reef",
            image: "",
        },
        {
            type: "Discus",
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjttGvCwrHk72e3SFpo9N6K8qIuYGYG2JQA&usqp=CAU`,
            species: "S. aequifasciatus",
            description: "The Discus is a calm, beautiful fish.",
            name: "Pinky",
            food: "Algae Flakes, Tropical Flakes, or Shrimp Pellets",
            size: 10,
            harvestLocation: "Amazon River Delta",
        },
        {
            type: "Zebra Plecos",
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-zcytlobYtKJTU4GAQMuxdWvicmNYDxyTQ&usqp=CAU`,
            species: "Hypancistrus zebra",
            description: "The Zebra Plecos is best known for its black and white color pattern.",
            name: "Zebra",
            food: "Algae",
            size: 5,
            harvestLocation: "Amazon River",
        },
        {
            type: "African Cichlids",
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRTBIhVWZZ7J_vNC_AWxOMr4jlsgMPb47iA&usqp=CAU`,
            species: "Labidochromis Caeruleusa",
            description: "African cichlid is a large exotic freshwater fish that comes in various colors.",
            name: "Sunny",
            food: "Algae, Aquatic Plants, Biofilm",
            size: 15,
            harvestLocation: "Lake Malawi",
        },
        {
            type: "Flowerhorn Cichlid",
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN7Cy-vi2fdnXy93XFspNP0oqOLyBHs4gieA&usqp=CAU`,
            species: "Carinotetraodon travancoricus",
            description: "Flowerhorn Cichlid has a bulbous head and bright coloring.",
            name: "Einstein",
            food: "Crustaceans",
            size: 40,
            harvestLocation: "Not found in the wild",
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}

export const fishTips = ["Cycle the Tank Before Adding Fish",
    "Test and Monitor Water Parameters",
    "Perform Regular Water Changes",
    "Research Fish Before Purchasing",
    "Avoid Overfeeding Fish",
    "Manage Light in and Around Aquarium"];

export const tankTips = ["Maintain Balance Before Adding Fish",
    "Decorate Aquarium for the Fish",
    "Don't Worry if Fish Hide at First",
    "Lighting Used to Create Day and Night Cycles",
    "Clean Aquarium Regularly, Just Not Right After Setup",
    "Do Research Before Buying More Fish"];

//module.exports = { fishTips };
//module.exports = { tankCare }
