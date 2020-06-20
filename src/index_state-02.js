import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
    render () {
        return (
            <>
                <h1> Our Amazing App </h1>
                <p> The current time {new Date().toLocaleString()} </p>
            </>
        );
    }
}

setInterval(function () {
    ReactDOM.render(<App />, document.getElementById("root"));
}, 1000);

