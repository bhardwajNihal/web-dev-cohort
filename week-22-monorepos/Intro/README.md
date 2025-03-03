
Understood : 
- what are monorepos
- why monorepos
- common monorepo framework in node js - turborepo
- history of turborepo
- build system v/s build system orchestrator v/s monorepo framework 
- turborepo as a build system orchestrator 

- initialization of a simple turborepo
- exploring folder structure
- running the project

- Understanding the import export syntax
    - Define a custom text-input component 
    - define export in the package.json  ---> "./text-input": "./src/text-input"
    - make sure the project folder has the component's root folder as dependency ---> "@repo/ui": "*", 
    - import the component in the project as ---> import {TextInput} from "@repo/ui/text-input"

- Writing rough backend for a chat-like-app
    - add http-server >> npm init -y  >> npx tsc --init
    - add ws-server >> npm init -y  >> npx tsc --init
    - once added package.json in both
    - add default configurations in the common backends.json in packages/typescript-config
    - simply extend the configurations from packages/typescript-config in the http and ws server
        - remove rootdir and outdir from the common package, and add it individually to the http and ws server to denote their respective src and dist folder.
    - make sure all the apps are served on different port.

    - add code to http-server/index.ts
        - add build, start and dev scripts 

    ** Add a turbo.json to both the http and ws backend, and configure it to cache the dist folder. (by default turbo build only caches the .next folder spit out by by the default next apps.)
