
const fs = require("fs");

function countWords(filepath){
    fs.readFile(filepath, "utf-8", (err,data)=>{
        let wordcount = 0;
        for(let i =0;i< data.length ;i++){
            if(data[i] === " ") wordcount++;
        }
        console.log(wordcount + 1);
        
    })
}

// helps in creating custom CLI 
countWords(process.argv[2]);        //helps to pass the filename dynamically in the CLI 
