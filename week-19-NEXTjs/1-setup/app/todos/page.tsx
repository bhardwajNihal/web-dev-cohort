import axios from "axios"

// for Server side Rendering - Unlike useEffect way of rendering data in React
    // SSR - returns whole HTML with all data upfront, on the first request itself. Thus making the website SEO friendly.

//function to fetch data from backend
    async function fetchTodos() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        return response.data
    }

// defining types for the todos
    interface todoInterface{
        title: string,
        isdone: boolean
    }
// function to render individual todos
    function Todos({title,isdone}:todoInterface){
        return <div className="border border-gray-500 p-4 m-2">
            <span className="bg-gray-800 p-1 px-4 rounded-lg">{title}</span> - <span className="bg-gray-800 p-1 px-4 rounded-lg">{(isdone) ? "Done" : "Not Done"}</span>
        </div>
    }

// Exporting the parent function to render all todos to the FE
    export default async function TodoComp(){
        const data = await fetchTodos();                //returns array of todos
        await new Promise(r => setTimeout(r, 3000))     //introducing loader
        return <div>
            {data.map((data:todoInterface,index:number) => <Todos key={index} title={data.title} isdone={data.isdone}/>)}
        </div>
    }