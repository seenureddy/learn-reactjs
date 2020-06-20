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


function LikeArea () {
    const [likeCount, setLikeCount] = useState(0);
    function increaseLikeHandler () {
        setLikeCount(function (prev) {
            return prev + 1;
        });
    }

    function decreaseLikeHandler () {
        //setLikeCount(function (prev) {
        //    return prev - 1;
        //});
        setLikeCount(prev => {
            if (prev > 0) {
                return prev - 1;
            }
            return 0;
        });
    }

    return (
        <>
            <button onClick={increaseLikeHandler}> Increase likes </button>
            <button onClick={decreaseLikeHandler}> Decrease likes </button>
            <h2> This page has been liked {likeCount} times. </h2>
        </>
    );
}


class App extends React.Component {
    render () {
        return (
            <>
                <OurHeader />
                <LikeArea />
                <TimeArea />
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
