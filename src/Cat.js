import React, {useState, useEffect} from "react";

export const Cat = ({url}) => {
    const [cat, setCat] = useState({url: ''});

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setCat(data))
    }, [url]);

    return (
        <div>
            <img src={cat.url} alt={cat.id}/>
        </div>
    )
}