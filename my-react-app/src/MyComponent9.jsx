
import React, {useState, useEffect, useRef} from 'react'

function MyComponent9() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component rendered");
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = 'yellow';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
        // inputRef.current.style = "background-color: red; font-size: 50px"; AYO TO DZIAŁA
    }
    function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = 'yellow';
        inputRef3.current.style.backgroundColor = '';
        // inputRef.current.style = "background-color: red; font-size: 50px"; AYO TO DZIAŁA
    }
    function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = 'yellow';
        // inputRef.current.style = "background-color: red; font-size: 50px"; AYO TO DZIAŁA
    }

    return(
        <div>
            <button onClick={handleClick1}>Click me</button>
            <br/>
            <input ref={inputRef1} />
            <br/>
            <br/>
            <button onClick={handleClick2}>Click me</button>
            <br/>
            <input ref={inputRef2} />
            <br/>
            <br/>
            <button onClick={handleClick3}>Click me</button>
            <br/>
            <input ref={inputRef3} />
            <br/>
        </div>
    );
}

export default MyComponent9