
1. initialize an empty node project
2. npm install typescript                   || or npm install -g typescript for installing globally and using across multiple projects
3. npx tsc --init            ==> to create a typescript config.json file
4. create a .ts file to start writing ts code

*can't directly run the .ts file, 
--> npx tsc -b     => builds a .js file just next to it, which runs after being successfully compiled
--> tsc --watch  => changes the .js file at the runtime continuously, no need to compile everytime any changes are made

learnt : 
1. defining datatypes
2. functions 
3. return types
4. passing functional arguments
5. tsconfig 
6. rootDir and outDir   - will have the .ts and .js file respectively
7. noImpliciteAny   -- by default is true, prevents the any type implicitely