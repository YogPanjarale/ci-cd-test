console.log("Hello World")
const user = process.env.GITHUB_ACTOR
const repo = process.env.GITHUB_REPOSITORY

// load fs
const fs = require("fs");
const path = `./contributors/${user}`

if (fs.existsSync(path)){

    // read the file
    const content = fs.readFileSync(path);
}else{
    throw new Error(`File contributors/${user}.json does not exist`);
}

// console.log(process.env.GITHUB_ACTOR)