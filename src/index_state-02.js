import React from "react";
import ReactDOM from "react-dom";

const useState = React.useState;

function OurHeader () {
    return <h1> Our Amazing App Header</h1>;
}


function TimeArea () {
    const [theTime, setTheTime] = useState(new Date().toLocaleString());
    setTimeout(function () {setTheTime(new Date().toLocaleString());}, 1000);
    return (
        <p> The current time {theTime} </p>
    );
}


class App extends React.Component {
    render () {
        return (
            <>
                <OurHeader />
                <TimeArea />
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
