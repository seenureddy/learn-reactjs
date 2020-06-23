import React from "react";
import ReactDOM from "react-dom";
//import PropTypes from 'prop-types';

const useState = React.useState;

function OurHeader () {
    return <h1> Our Amazing App Header</h1>;
}

function TimeArea () {
    return (
        <p> The current time {new Date().toLocaleString()} </p>
    );
}


function AddPetForm (props) {
    const [name, setName] = useState();
    const [species, setSpecies] = useState();
    const [age, setAge] = useState();

    function handleSubmit (e) {
        e.preventDefault();
        props.setPets(prev => prev.concat({
            name, species, age, id: Date.now()
        }))
        setName("");
        setSpecies("");
        setAge("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend> Add New Pet </legend>
                <input value={name} onChange={ e => setName(e.target.value) } placeholder="Name" />
                <input value={species} onChange={ e => setSpecies(e.target.value) } placeholder="Species" />
                <input value={age} onChange={ e => setAge(e.target.value) } placeholder="Age in years" />
                <button> Add Pet </button>
            </fieldset>
        </form>
    );
}

function App () {

    const [pets, setPets] = useState([
        { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
        { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
        { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
        { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
        { name: "Paws", species: "dog", age: "6", id: 789789789 }
    ]);

    return (
        <>
            <OurHeader />
            <TimeArea />
            <AddPetForm setPets={setPets} />
            <ul>
                {pets.map(pet => <Pet id={pet.id} name={pet.name} species={pet.species} age={pet.age} key={pet.id} />)}
            </ul>
        </>
    );
}

function Pet (props) {
    function handleDelete () {
        props.setPets(prev => prev.filter(pet => pet.id != props.id));
    }
    return (
        <li>
        The {props.name} is a {props.species} and {props.age} is year old.
        <button onClick={handleDelete}> Delete </button>
        </li>
    );
}


ReactDOM.render(<App />, document.getElementById("root"));
