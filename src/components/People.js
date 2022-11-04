import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const People = (props) => {
    // destructuring
    const[people, setPeople] = useState(null);
    const navigate = useNavigate;
    // make sure you pass in the id and useParams to return the obj/key value of the URL on the path
    const {id} = useParams()
    // passing the use effect to pass renders
    // grabs the web + id
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id)
        // extracting information from people in the data
        .then(response => {
            setPeople(response.data);
        })
        // if an error is thrown, we're going to catch it by using a console.log to catch the error.
        .catch(() => navigate("/error"));
        // id is there to reload and request the id again
        // when you reload the page the id shows
    });

    if(people == null) {
        return "loading...";
    }
    
    return (
        <div>
            {/* returns the description of the people */}
            <h1>{people.name}</h1>
            <p>Height: {people.height} </p>
            <p>Hair Color: {people.hair_color} </p>
            <p>Eye Color: {people.eye_color} </p>
            <p>Skin Color: {people.skin_color} </p>
        </div>
    )
}


export default People;