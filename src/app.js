//Solution One
// const Movie = require("./utils");
// const input = process.argv;

// for (i = 2; i < input.length; i++) {
//     if (input[i] === "add") {
//       i += 1;
//       const movieObj = new Movie(input[i], input[i + 1]);
//       movieObj.add();
//     }
//   }

//Solution Two
//   const Movie = require("./utils");
//   const input = process.argv;
    
//   if (input[2] === "add") {      
//       const movieObj = new Movie(input[3], input[4]);
//       const movieObj1 = new Movie(input[5], input[6]);
//       const movieObj2 = new Movie(input[7], input[8]);
//       const movieObj3 = new Movie(input[9], input[10]);
  
  
//       movieObj.add();
//       movieObj1.add();
//       movieObj2.add();
//       movieObj3.add();
//   }

//Solution Three
// const Movie = require("./utils");
// const input = process.argv;

// if (input[2] === "add") {
//     const movieObj = new Movie(input[3], input[4]);
//     movieObj.add();
// } else if (input[2] === "add multi") {
//     let num = parseInt(input[3]);
//     let titleMod = 4;
//     let actorMod = 5;
//     for (i = 0; i < num; i++) {
//         const movieObj = new Movie(input[i + titleMod], input[i + actorMod]);
//         actorMod += 1;
//         titleMod += 1;
//         movieObj.add();
//     }
// }

//Solution Four
// const Movie = require("./utils");
// const yargs = require("yargs");

// console.log(yargs.argv);
// const app = (argvArr) => {
//     if (input[2] === "add") {
//         const movieObj = new Movie(argvArr[3], argvArr[4]);
//         movieObj.add();
//     }else if (argvArr[2] === "addMulti") {
//         const movie1 = new Movie(argvArr[3], argvArr[4]);
//         const movie2 = new Movie(argvArr[5], argvArr[6]);
//         movie1.add();
//         movie2.add();
//     }

// }

const yargs = require("yargs");
const Movie = require("./utils");

const app = () => {
	// Check if command given is "add"
	if (yargs.argv.command === "add") {
		// If so, a single movie should be added using the Movie constructor & function
		const movieObj = new Movie(yargs.argv.title, yargs.argv.actor);
		movieObj.add();
	}
	// Otherwise check if the command given is "addMulti"
	else if (yargs.argv.command === "addMulti") {
		// if so, loop over the titles
		for (i in yargs.argv.title) {
			// Check if the actor variable is provided, but NOT given a specific value (defaulting to True)
			if (yargs.argv.actor[i] === true) {
				// If so, create the movie using the Movie constructor, passing undefined as the actor variable
				const movieObj = new Movie(yargs.argv.title[i], undefined);
				movieObj.add();
			} else {
				// otherwise, create a movie using the Movie constructor and specifying the actor via yargs.argv.actor[i]
				const movieObj = new Movie(yargs.argv.title[i], yargs.argv.actor[i]);
				movieObj.add();
			}
		}
	}
};

app();
