
import React, {useState} from 'react'

function MyComponent() {

    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(10);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName('Spongebob');
    };

    const updateAge = () => {
        setAge(age + 1);
    };

    const updateIsEmployed = () => {
        setIsEmployed(!isEmployed);
    };

    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Is Employed: {isEmployed ? 'Yes' : 'No'}</p>
            <button onClick={updateName}>Set name</button>
            <button onClick={updateAge}>Set age</button>
            <button onClick={updateIsEmployed}>Set employment</button>
        </div>
    );

}

export default MyComponent;