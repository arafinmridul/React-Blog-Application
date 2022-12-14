import { useState, useEffect } from "react";

const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        // using setTimeout just to make it a bit realistic, it's of course not for real world applications
        setTimeout(() => {

            fetch(url, { signal: abortCont.signal })
        .then(res=>{
            console.log(res);
            if (!res.ok) {
                throw Error('fetching the data for that resource was not possible')
            };
            return res.json();
        })
        .then(data=>{
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err=>{
            if (err.name === "AbortError") {
                console.log("Fetch Aborted");
            } else {
                setIsPending(false);
                setError(err.message);
            }
        })
        }, 500);

        return ()=> abortCont.abort();
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;