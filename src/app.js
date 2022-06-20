const Movie = require("./utils");
const input = process.argv;

for (i = 2; i < input.length; i++) {
    if (input[i] === "add") {
      i += 1;
      const movieObj = new Movie(input[i], input[i + 1]);
      movieObj.add();
    }
  }
