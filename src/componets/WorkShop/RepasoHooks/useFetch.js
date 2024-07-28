import { useState, useEffect } from "react";

export const useFetch = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dolarapi.com/v1/dolares/oficial");
                const result = await response.json();
                if (Array.isArray(result)) {
                    setData(result);
                } else {
                    setData([result]);
                }
            } catch (error) {
                setError(error);
            }
        };

        // Fetch data initially
        fetchData();

        // Set interval to fetch data every second
        const intervalId = setInterval(fetchData, 1000);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return { data, error };
};
