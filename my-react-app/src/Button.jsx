
function Button() {

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "15px 30px",
        borderRadius: "12px",
        border: "none",
        cursor: "pointer",
        fontSize: "35px"
    }

    return(
        <button style={styles}>Click me</button>
    );
}

export default Button;