const { Command } = require('commander');
const program = new Command();

program
  .name('Manage_todos')
  .description('This command add, deletes and edits items from the todos file')
  .version('1.0.0');

const fs = require("fs");


let todolist = [];

program
  .command('list_todos')
  .description('prints out the list of todos on the console')
  .action(() => {
    fs.readFile("file.json", "utf-8" , (err,data)=>{
      if(err) console.log("error reading the todos");
      else{
        console.log(data);
      }
    })
  });

  program
  .command('add_todo <taskname>')
  .description('adds a todo item to the current list')
  .action(() => {
    fs.readFile("file.json", "utf-8" , (err,data)=>{
      if(err) console.log("error reading the todos");
      else{
        todolist = JSON.parse(data);      //convert json data to js object
        let currentId = 1;                    
        let itemToAdd = process.argv[3];        // to fetch the item to be added
        for(let i = 0;i<todolist.length;i++){     //to keep track of the Id
          currentId++;
        }
        todolist.push({
          id : currentId,
          todo : itemToAdd,
          isdone : false
        })
        fs.writeFile("file.json", JSON.stringify(todolist,null,2), (err)=>{
          if(err) return err;
          else {
            console.log("Item added successfully!");
            
          }
        })
      }
    })
  });


  program
  .command('mark_as_done <id>')
  .description('mark a given todo as done')
  .action(() => {
    fs.readFile("file.json", "utf-8" , (err,data)=>{
      if(err) console.log("error reading the todos");
      else{
        todolist = JSON.parse(data);
        let idtomark = process.argv[3];
        todolist[idtomark-1].isdone = true;
        fs.writeFile("file.json", JSON.stringify(todolist,null,2),(err)=>{
          if(err) console.log(err);
          else console.log("item marked successfully!!");
            
        });
      }
    })
  });

  program
  .command('delete_todo <id>')
  .description('removes the todo item of given id from the list')
  .action(() => {
    fs.readFile("file.json", "utf-8" , (err,data)=>{
      if(err) console.log("error reading the todos");
      else{
        todolist = JSON.parse(data);
        let idToDelete = process.argv[3];
        let updatedtodo = todolist.filter((item)=>{
          if(item.id != idToDelete) return item;
        })
        let startindex = 1;
        for(let i = 0; i<updatedtodo.length; i++){
          updatedtodo[i].id = startindex++;
        }
        todolist = updatedtodo;
        fs.writeFile("file.json", JSON.stringify(todolist,null,2),(err)=>{});
      }
    })
  });

program.parse(process.argv);