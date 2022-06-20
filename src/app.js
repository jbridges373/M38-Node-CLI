const Movie = require("./utlis");
const input = process.argv;
// const movies = [];
// console.log(input[2]);

// const movies = [];

// movies.push(input[2]);

// console.log(movies);

if (input[2] === "add") {
    // movies.push({title: input[3], actor: input[4]});
    // console.log(movies);
    const movieObj = new Movie(input[3], input[4]);
    movieObj.add();
}