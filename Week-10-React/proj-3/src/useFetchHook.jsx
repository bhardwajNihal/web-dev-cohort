import { useEffect, useState } from "react";

export function useFetch(url){
    const [fetchedData, setFetchedData] = useState();

    async function getData(){
        const response = await fetch(url);
        const data = await response.json()
        setFetchedData(data)
    }

    useEffect(() => {
        getData()
    },[url])            //getDate is called everytime the url changes

    return fetchedData;
}