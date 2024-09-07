
import React, {useState, useEffect} from 'react'

function MyComponent7() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    /*useEffect(() => {
        document.title = `Count: ${count}`
    }); // Every re-render*/

    /*useEffect(() => {
        document.title = `Count: ${count}`
    }, []); // Only on mount*/

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count, color]); // On mount + when value changes

    function addCount() {
        setCount(c => c + 1);
    }
    function subtractCount() {
        setCount(c => c - 1);
    }
    function changecolor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changecolor}>Change Color</button>
        </div>
    );
}

export default MyComponent7