var myPetsArray = [
    {
        animalType: [
            "Dog",
            "Cat", 
            "Bird"
        ],
        name: [
            "Pujdo",
            "Maca",
            "Tweety"
        ]
    }  
];
function myPetsFunction(pets) {
    var nameValue = pets["name"];
    return nameValue;
}
console.log(myPetsFunction(pets));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;