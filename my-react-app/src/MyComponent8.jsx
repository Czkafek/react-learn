
import React, {useState, useEffect} from 'react'

function MyComponent8() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('Event listener added');

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('Event listener removed');
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
            <p>Window width: {width}px</p>
            <p>Window width: {height}px</p>
        </>
    );
}

export default MyComponent8