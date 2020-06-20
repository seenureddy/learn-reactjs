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
            </>
        );
    }
}

function TimeArea () {
    return (
        <p> The current time {new Date().toLocaleString()} </p>
    );
}

ReactDOM.render(<Welcome />, document.getElementById("root"));

