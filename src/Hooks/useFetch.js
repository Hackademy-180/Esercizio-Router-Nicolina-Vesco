import {useState, useEffect} from "react";

export default function useFetch(url, ...dependencies){
    const [result, setResult] = useState();

    const getData = async ()=> {
        const promise = await fetch(url);
        const json = await promise.json();
        setResult(json);
    }

    useEffect(
        ()=>{
            getData();
        }, dependencies
    )
    return result;
}