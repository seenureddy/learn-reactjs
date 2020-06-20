import React from "react";
import ReactDOM from "react-dom";

function OurHeader () {
    return <h1> Our Amazing App Header</h1>;
}

class Welcome extends React.Component {
    render () {
        //return <h1>Hello World from React boilerplate</h1>;
        return (
            <>
                <OurHeader />
                <TimeArea />
                <ul>
                    <Pet name="Meowsalot" species="cat" age="5" />
                    <Pet name="BarkSalot" species="dog" age="10"/>
                </ul>
            </>
        );
    }
}

function TimeArea () {
    return (
        <p> The current time {new Date().toLocaleString()} </p>
    );
}

function Pet (props) {
    return <li> The {props.name} is a {props.species} and {props.age} is year old. </li>;
}


ReactDOM.render(<Welcome />, document.getElementById("root"));
