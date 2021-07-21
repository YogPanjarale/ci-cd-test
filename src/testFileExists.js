// console.log("Hello World")
const user = process.env.GITHUB_ACTOR 
const repo = process.env.GITHUB_REPOSITORY

// load fs
const fs = require("fs");
const path_ = require('path');
const path = path_.join(__dirname,`../contributors/${user}`)
// console.log(path)
if (process.env.GITHUB_ACTIONS){

    if (fs.existsSync(path)){
        
        // read the file
        const content = fs.readFileSync(path);
        const contributor = JSON.parse(content);
        const keys = Object.keys(contributor);
        if (contributor['github-username']!=user){
            console.error(`${contributor['github-username']} does not match you username ${user}`)
            throw new Error(`${contributor['github-username']} does not match you username ${user}`)
        }
        if (keys!=[
            'github-username',
            'favourite-emoji',
            'favourite-music',
            'favourite-color'
          ]){
              console.error("All The Properties not present or extra properties given")
              throw new Error("All The Properties not present or extra properties given")
          }
    }else{
        console.error(`File contributors/${user}.json does not exist`)
        throw new Error(`File contributors/${user}.json does not exist`);
    }
}else{
const obj={
    "github-username": "YogPanjarale",
    "favourite-emoji": "🍕",
    "favourite-music": "https://open.spotify.com/track/6RM5WJcShIHsxrja11M1iK?si=e2d7fbad9eaf4bee",
    "favourite-color": "#008081"
}
const map = Object.keys(obj);
console.log(map)
}

// console.log(process.env.GITHUB_ACTOR)