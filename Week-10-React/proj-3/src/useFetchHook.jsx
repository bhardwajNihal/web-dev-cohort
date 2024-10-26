import { useEffect, useState } from "react";

export function useFetch(url){
    const [fetchedData, setFetchedData] = useState(null);
    const [loading, setLoading] = useState(true)

    async function getData(){
        setLoading(true)
        const response = await fetch(url);
        const data = await response.json()
        setFetchedData(data)
        setLoading(false)
    }

    useEffect(() => {
        if(url) getData()
    },[url])            //getDate is called everytime the url changes

    return {fetchedData,loading};
}