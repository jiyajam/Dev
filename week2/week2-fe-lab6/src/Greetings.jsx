function Greeting(props) {
    console.log(props); //log props to see what is being passed
    
    return (
        <div className="greeting">
            <h1>Welcome, {props.name}!</h1>
            <p>{props.message}</p>
        </div>
    );
}

export default Greeting;