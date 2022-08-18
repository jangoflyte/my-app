import React, {useState} from 'react';

export function Animal () {
    const [animal, setAnimal] = useState({
        breed: '',
        numberOfLegs: 0,
        gender: '',
        name :''
    })

    return (
        <div>
            <div>{animal.breed ? `Breed ${animal.breed}` : 'No breed detected'}</div>
            <div>{animal.numberOfLegs !==0 ? `Breed ${animal.numberOfLegs}` : 'No number of legs detected'}</div>
            <div>{animal.gender ? `Breed ${animal.gender}` : 'No gender detected'}</div>
            <div>{animal.name? `Breed ${animal.name}` : 'No name detected'}</div>
            <button onClick={() => setAnimal({
                breed: 'Golden Retriever',
                numberOfLegs: 4,
                gender: 'Female',
                name: 'Daisy'
            })}>Click to set an animal</button>
        </div>
    )
}