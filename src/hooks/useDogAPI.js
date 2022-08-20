import {useState, useEffect} from "react";

export const useDogAPI = () => {
    const [dog, setDog] = useState({});

    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json())
        .then(data => setDog(data))
    }, []);

    return [dog, setDog];
}