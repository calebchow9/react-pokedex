import { InputLabel, Select, FormControl, MenuItem, FormControlLabel, Checkbox, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import PokeGallery from './components/PokeGallery';

const axios = require('axios');
const apiURL = "https://pokeapi.co/api/v2/";

const useStyles = makeStyles({
    toggles: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '15px',
    },
    region: {
        minWidth: 100,
    },
});

function Gallery() {
    const classes = useStyles();

    const [pokeList, getAllPokemon] = useState('');
    const [shiny, setShiny] = useState(false);
    const [region, setRegion] = useState(7);

    useEffect(() => {
        getAllPokemonNames();
    }, []);

    const handleShiny = () => {
        setShiny(!shiny);
    };

    const handleRegion = (event) => {
        setRegion(event.target.value);
    }

    const getAllPokemonNames = () => {
        const pokeURL = apiURL + "pokemon/?limit=809";
        axios.get(pokeURL)
        .then((response) => {
            const pokeList = response.data.results;
            getAllPokemon(pokeList);
        })
        .catch(error => console.log(error))
    }

    // GET request for all pokemon names has been fetched, state updated
    let pokeNameList = [];
    let national_id = 1;
    // create local pokemon array with id, name, sprite
    if(pokeList.length > 0 && pokeList.length < 810) {
        for (const pokemon in pokeList) {
            pokeNameList.push({
                id: national_id, 
                name: pokeList[pokemon].name.replace(/(^|[\s-])\S/g, function (match) {return match.toUpperCase();}), 
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${national_id}.png`,
                sprite_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${national_id}.png`,
            });
            national_id++;
        }
    }

    return (
        <div style={{backgroundColor:'#18191a', minHeight: '100vh'}}>
            <Header />
            <div className={classes.toggles}>
                <FormControlLabel
                    style={{color: '#b0b3b8'}}
                    control={<Checkbox style={{color: '#9085c4'}} checked={shiny} 
                    onChange={handleShiny} />}
                    label="Shiny" />
                <FormControl variant="filled" className={classes.region}>
                    <InputLabel style={{color: '#b0b3b8', textAlign: 'center'}}>Region</InputLabel>
                        <Select
                            value={region}
                            label="Region"
                            style={{color: '#e4e6eb'}}
                            onChange={handleRegion}
                        >
                            <MenuItem value={7}>All Regions</MenuItem>
                            <MenuItem value={1}>Kanto</MenuItem>
                            <MenuItem value={2}>Johto</MenuItem>
                            <MenuItem value={3}>Hoenn</MenuItem>
                            <MenuItem value={4}>Sinnoh</MenuItem>
                            <MenuItem value={5}>Unova</MenuItem>
                        </Select>
                </FormControl>
            </div>
            <PokeGallery pokemon={pokeNameList} shiny={shiny} region={region} />
        </div>
    );
}

export default Gallery;