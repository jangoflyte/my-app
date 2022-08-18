import React, {useState} from "react";
import { Products } from "./Products";
import { RegionContext } from "./RegionContext";

// import {Animal} from "./Animal"
// import {Cat} from "./Cat";
// import { useDogAPI } from "./useDogAPI";
// import { useToggle } from "./useToggle"


// const baseUrl = `https://api.thecatapi.com/v1/images/search`;

// export default function AppHook () {
//     const catUrl = `https://api.thecatapi.com/v1/images/search`;
//     const [url, setUrl] = useState('');
//         // useEffect(() => {
//     //     fetch(baseUrl)
//     //     .then(response => response.json())
//     //     .then(data => setUrl(data));
//     // }, [url]);

//     return (
//         <div>
//             <img src={url.url} alt={url.id}/>
//             <button onClick={() => setUrl(catUrl)}>Click for random cat</button>
//         </div>
//     )
// }

// const catUrl = `https://api.thecatapi.com/v1/images/search`;

// export default function AppHook () {
//     const [message, setMessage] = useState("Hello World!");
//     const [url, setUrl] = useState("");
//     const [toggleStatus, setToggleStatus] = useToggle();
//     const [dog] = useDogAPI();

//     return (
//       <div className="App-hook">
//         <div>{message}</div>
//         <button onClick={() => setMessage("Hello Galaxy!")}>Click Me!</button>
//         <Animal />
//         <Cat url={url} />
//         <button onClick={() => setUrl(catUrl)}>Click for random cat</button>
//         <button onClick={setToggleStatus}>
//             {toggleStatus ? "Toggled" : "Click to toggle"}
//         </button>
//         <div>
//           <img src={dog.message} alt={dog.message} style={{ width: "200px" }} />
//         </div>
//       </div>
//     );
// }

export default function AppHook () {
    const products = [
    {
        id: '1',
        name: 'Mechanical Keyboard',
        price: '100.00'
    },
    {
        id: '2',
        name: 'Curved Monitor',
        price: '2500.00'
    }
    ];

    const [region, setRegion] = useState({ region: "USA", currency: "$" });
    return (
      <RegionContext.Provider value={region}>
        <Products products={products}/>
        Set Region -
        <button onClick={() => setRegion({ region: "USA", currency: "$" })}>
          USA
        </button>
        <button onClick={() => setRegion({ region: "EUROPE", currency: "€" })}>
          EUROPE
        </button>
      </RegionContext.Provider>
    );
}

//test