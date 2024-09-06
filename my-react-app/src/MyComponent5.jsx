
import React, {useState} from 'react'

function MyComponent5() {

    const [foods, setFooods] = useState(['Apple', 'Orange', 'Banana']);

    function handleAddFood() {

        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';

        setFooods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFooods(foods.filter((element, i) => i !== index))
    }

    return(
        <div>
            <h2>Foods</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id='foodInput' placeholder='Enter food name'/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent5