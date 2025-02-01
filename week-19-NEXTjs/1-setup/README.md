

A modern, fast, and SEO-friendly web application built using Next.js.

## Features
    - 🚀 **Server-Side Rendering (SSR)**
    - ⚡ **Static Site Generation (SSG)**
    - 🌟 **File-based Routing**
    - 🔄 **API Routes for Full-stack Development**
    - 🖼️ **Built-in Image Optimization**
    - 🛠️ **TypeScript Ready** (if enabled)


#SETUP : 
> npm create-next-app@latest 

- File based routing 
    - In the app folder, the component in "page.tsx" will render on "/" route
    - for any other route, i.e. for "/me", add a folder "me" and a file "page.tsx" in it, every other folder will be ignored.

- Layout : let's us define the layout of our app by adding fixed component in the structure. like- navbar and footer. 
- However loader is not needed, as pages are already rendered server side. But to do so add a file loading.tsx in the same folder, and all the loader component there.


- For server side rendering a different approach is taken to fetch data from backend and displaying it on FE.
    - unlike using useEfect in React for Client-side rendering. 
        - On the very 1st request, the raw html is returned, it a srcript in it to fetch the rest of the components of the page.
        - when the components get mounted another backend request is sent.
        - finally rendering the data return.
    - Nextjs takes a completely different approach to fetch data and render. It does the server side rendering of whole html content and data upfront before sending it to the client. Thus solving the WATER-FALLING-PROBLEM, and making the website SEO friendly.
      
