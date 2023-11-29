/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            type: "Dwarf Pufferfish",
            species: "Carinotetraodon travancoricus",
            description: "Dwarf Pufferfish are popular for their bright colours and small size.",
            name: "Bart",
            food: "Crustaceans",
            size: 3.5,
            harvestLocation: "Vembanadu Lake",
        },
        {
            type: "Clownfish",
            species: "A. ocellaris",
            description: "The clownfish can be many different colours. Most have white details.",
            name: "Chuckles",
            food: "Algae Flakes",
            size: 7.7,
            harvestLocation: "Great Barrier Reef",
            image: "",
        },
        {
            type: "Discus",
            species: "S. aequifasciatus",
            description: "The Discus is a calm, beautiful fish.",
            name: "Pinky",
            food: "Algae Flakes, Tropical Flakes, or Shrimp Pellets",
            size: 10.3,
            harvestLocation: "Amazon River Delta",
        },
        {
            type: "Zebra Plecos",
            species: "Hypancistrus zebra",
            description: "The Zebra Plecos is best known for its black and white color pattern.",
            name: "Zebra",
            food: "Algae",
            size: 9.0,
            harvestLocation: "Amazon River",
        },
        {
            type: "African Cichlids",
            species: "Labidochromis Caeruleusa",
            description: "African cichlid is a large exotic freshwater fish that comes in various colors.",
            name: "Sunny",
            food: "Algae, Aquatic Plants, Biofilm",
            size: 15.2,
            harvestLocation: "Lake Malawi",
        },
        {
            type: "Flowerhorn Cichlid",
            species: "Carinotetraodon travancoricus",
            description: "Flowerhorn Cichlid has a bulbous head and bright coloring.",
            name: "Einstein",
            food: "Crustaceans",
            size: 40.1,
            harvestLocation: "Not found in the wild",
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}
