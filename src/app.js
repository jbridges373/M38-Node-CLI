const Movie = require("./utils");
const input = process.argv;

if (input[2] === "add") {   
    const movieObj = new Movie(input[3], input[4]);
    const movieObj1 = new Movie(input[5], input[6]);
    const movieObj2 = new Movie(input[7], input[8]);
    const movieObj3 = new Movie(input[9], input[10]);


    movieObj.add();
    movieObj1.add();
    movieObj2.add();
    movieObj3.add();
}