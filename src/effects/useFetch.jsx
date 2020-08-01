import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(url);
                setCast(result.data);
                setIsLoading(false);
            } catch (error) {
                alert("Could not fetch Data");
            }
        };
        fetchData();
    }, [url]);   // basically as url changes (which changes due to change in searchQuery, api call is made)
    return {cast,isLoading};
};

export default useFetch;
