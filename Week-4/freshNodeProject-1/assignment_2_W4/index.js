const { Command } = require('commander');
const program = new Command();

program
  .name('Manage_todos')
  .description('This command add, deletes and edits items from the todos file')
  .version('1.0.0');

const fs = require("fs");

program
  .command('add_todo taskname')
  .description('adds the todo to the desired file')
  .action((taskname) => {
    fs.writefile("file.json", taskname , (err,data) => {
        if(err) return err;
        else{
            
        }
    })
  });


program.parse(process.argv);