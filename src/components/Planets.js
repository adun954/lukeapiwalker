// to copy and paste/replace
// ctrl + f
// press toggle down
// press "Aa"
// then replace all
// be careful on copying and pasting
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';


const Planets = (props) => {

    const[planets, setPlanets] = useState(null);
    const navigate = useNavigate();
    const {id} = useParams()
    // grabs the web + id
    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id)
        // extracting information from planets in the data
        .then(response => {
            setPlanets(response.data);
        })
        .catch(() => navigate("/error"));
        // id is there to reload and request the id again
        // when you reload the page the id shows
    });

    if(planets == null) {
        return "loading...";
    }
    
    return (
        <div>
            {/* returns the description of the planets */}
            <h1>{planets.name}</h1>
            <p>Climate: {planets.climate} </p>
            <p>Terrain: {planets.terrain} </p>
            <p>Surface Water: {planets.surface_water} </p>
            <p>Population: {planets.population} </p>
        </div>
    )
}


export default Planets;