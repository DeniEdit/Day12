function myNes() {
    var myStorage = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passenger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }
        }
    };
   var gloveBox = myStorage.car["inside"]["glove box"];
    return gloveBox ;
}
console.log(myNes());
module.exports = myNes;