import React from "react";
import ReactDOM from "react-dom";
//import PropTypes from 'prop-types';

const useState = React.useState;
const useEffect = React.useEffect;

function OurHeader () {
    return <h1> Our Amazing App Header</h1>;
}

function TimeArea () {
    const [theTime, setTheTime] = useState(new Date().toLocaleString());
    useEffect(() => {
        const interval = setInterval(() =>  setTheTime(new Date().toLocaleString()));

        return () => clearInterval(interval);
    }, []);

    //setTimeout(function () {setTheTime(new Date().toLocaleString());}, 1000);

    return (
        <p> The current time {theTime} </p>
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

    const [pets, setPets] = useState([]);

    // only run once the first time this component rendered

    useEffect(() => {
        if (localStorage.getItem("eamplePetData")) {
            setPets(JSON.parse(localStorage.getItem("eamplePetData")));
        }
    }, []);
    // run every time our pet state changes
    useEffect(() => {
        localStorage.setItem("eamplePetData", JSON.stringify(pets));
    }, [pets]);


    return (
        <>
            <OurHeader />
            <TimeArea />
            <AddPetForm setPets={setPets} />
            <ul>
                {pets.map(pet => <Pet setPets={setPets} id={pet.id} name={pet.name} species={pet.species} age={pet.age} key={pet.id} />)}
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
