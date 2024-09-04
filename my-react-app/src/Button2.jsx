
function Button2() {

    let count = 0;

    const handleClick = (e) => e.target.textContent = "Ouch!";

    return(<button onClick={(e) => handleClick(e)}>Click me</button>);

}

export default Button2;