import React from "react";
import ReactDOM from "react-dom";

const pets = [
    { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
    { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
    { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
    { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
    { name: "Paws", species: "dog", age: "6", id: 789789789 }
];


function OurHeader () {
    return <h1> Our Amazing App Header</h1>;
}

function TimeArea () {
    return (
        <p> The current time {new Date().toLocaleString()} </p>
    );
}

function Pet (props) {
    return <li> The {props.name} is a {props.species} and {props.age} is year old. </li>;
}

class App extends React.Component {
    render () {
        return (
            <>
                <OurHeader />
                <TimeArea />
                <ul>
                    {pets.map(function (pet) {
                        return <Pet name={pet.name} species={pet.species} age={pet.age} key={pet.id} />;
                    })}
                </ul>
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
