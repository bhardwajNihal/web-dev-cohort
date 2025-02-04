const { Command } = require('commander');
const program = new Command();

program
  .name('count_words')
  .description('this commands counts the no. words or lines in the specified file')
  .version('1.0.0');

const fs = require("fs");

program
  .command('count_words <filepath>')
  .description('counts the no. of words in the specified file')
  .action((filepath) => {
    fs.readFile(filepath, "utf-8", (err,data) => {
        if(err) return err;
        else{
            let wordcount = data.split(" ").length;
            console.log(`there are ${wordcount} no. of words in this file`);
        }
    })
  });

  program
  .command('count_lines <filepath>')
  .description('counts the no. of lines in the specified file')
  .action((filepath) => {
    fs.readFile(filepath, "utf-8", (err,data) => {
        if(err) return err;
        else{
            let array = data.split("\n");
            let linecount =0;
            for(let i =0;i<array.length ;i++){
                if(array[i] === "\r" || array[i] ==="") continue;
                else linecount++;
            }
            
            console.log(`there are ${linecount} no. of lines in this file`);
        }
    })
  });

program.parse(process.argv);