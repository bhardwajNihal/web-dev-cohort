import { useState,useEffect } from "react";

// A custom hook that fetches data from an API
export function usePostComponent(){
    const[post , setPost] = useState();

    async function getpost(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data = await response.json()
        setPost(data.title)
    }
    // make sure that the funcion is called only once the component mounts
        useEffect(() => {
            getpost()
        },[])

    return post
}