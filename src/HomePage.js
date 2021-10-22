import { Grid, Card, CardMedia, makeStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import {ToggleButtonGroup, ToggleButton} from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/Searchbar';

const axios = require('axios');
const apiURL = "https://pokeapi.co/api/v2/"

const useStyles = makeStyles({
    search: {
        textAlign: 'center',
        color: '#e4e6eb',
    },
    toggles: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '20px',
        color: '#e4e6eb'
    },
    pokeCard: {
        minWidth: '100px',
        minHeight: '180px',
        maxHeight: '200px',
        maxWidth: '100px',
    },
    cardImg: {
        objectFit: 'contain',
    },
    pokeGrid: {
        padding: '20px',
    }
});

const filterPosts = (pokemon, query) => {
    if (!query) {
        return pokemon;
    }

    return pokemon.filter((pokemon) => {
        const pokemonName = pokemon.name.toLowerCase();
        return pokemonName.includes(query);
    });
};

function Home() {
    const classes = useStyles();
    const [pokeList, getAllPokemon] = useState([]);
    // const [types, setTypes] = useState([]);
    const [order, setDescending] = useState(false);
    const [sort, setSort] = useState(0);
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    let pokeNameList = [];
    let national_id = 1;
    // const typeRef = ['bug', 'dark', 'electric', 'fairy', 'fighting', 'flying', 'ghost', 'grass', 'ground', 'ice', 
    //                         'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];

    useEffect(() => {
        getAllPokemonNames();
        // getAllTypes();
    }, []);

    const handleOrder = (event) => {
        setDescending(event.target.value);
    };

    const handleSort = (event) => {
        setSort(event.target.value);
    }

    const getAllPokemonNames = () => {
        const pokeURL = apiURL + "pokemon/?limit=649";
        axios.get(pokeURL)
        .then((response) => {
            const pokeList = response.data.results;
            getAllPokemon(pokeList);
        })
        .catch(error => console.log(error))
    }

    // const getAllTypes = () => {
    //     for(let i = 0; i < 16; i++) {
    //         const pokeURL = apiURL + `type/${typeRef[i]}`;
    //         axios.get(pokeURL)
    //         .then((response) => {
    //             const typeList = response.data.pokemon;
    //             setTypes(types => [...types, typeList]);
    //         })
    //     }
    // }

    // GET request for all pokemon names has been fetched, state updated
    // create local pokemon array with id, name, sprite
    if(pokeList.length > 0 && pokeList.length < 650) {
        for (const pokemon in pokeList) {
            pokeNameList.push({
                id: national_id, 
                name: pokeList[pokemon].name.replace(/(^|[\s-])\S/g, function (match) {return match.toUpperCase();}), 
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${national_id}.png`,
                sprite_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${national_id}.png`,
                url: pokeList[pokemon].url,
            });
            national_id++;
        }
    }
    // ).filter(pokemon => types[typeRef.indexOf("grass")].includes({pokemon:{name: pokemon.name, url: pokemon.url}, slot: 1})

    const filteredPokemon = filterPosts(pokeNameList, searchQuery);

    return (
        <div style={{backgroundColor: '#18191a', minHeight: '100vh'}}>
            <Header />
            <div className={classes.search}>
                <SearchBar 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </div>
            <div className={classes.toggles}>
                <ToggleButtonGroup
                    exclusive
                    value={order}
                    style={{backgroundColor: "#9085c4", maxHeight: '40px'}}
                    onChange={handleOrder}
                >   
                    <ToggleButton style={{color: '#e4e6eb', minWidth: '40px'}} value={"ascend"}>↑</ToggleButton>
                    <ToggleButton style={{color: '#e4e6eb', minWidth: '40px'}} value={"descend"}>↓</ToggleButton>
                </ToggleButtonGroup>
                <FormControl variant="filled">
                    <InputLabel style={{color: '#b0b3b8', textAlign: 'center'}}>Sort By</InputLabel>
                        <Select
                            style={{color: '#e4e6eb'}}
                            value={sort}
                            label="Sort"
                            onChange={handleSort}
                        >
                            <MenuItem value={0}>Alphabetical</MenuItem>
                            <MenuItem value={1}>Pokedex ID</MenuItem>
                        </Select>
                </FormControl>
            </div>
            <Grid 
            className={classes.pokeGrid} 
            container spacing={1}
            justifyContent="center">
                {filteredPokemon.sort((a, b) => {
                    const ascend_name = a.name.localeCompare(b.name);
                    const descend_name = b.name.localeCompare(a.name);
                    const ascend_number = a.id - b.id;
                    const descend_number = b.id - a.id;
                    if(sort) {
                        return (order === 'descend' ? descend_number : ascend_number)  
                    } else {
                        return (order === 'descend' ? descend_name : ascend_name)
                    }
                }
                ).map((data) => {
                    return(
                        <Grid item key={data.id}>
                            <Link style={{textDecoration: 'none'}} to={`pokemon/${data.id}`} id={data.id}>
                                <Card 
                                    className={classes.pokeCard}
                                    style={{backgroundColor: '#3d3d3d',}}
                                    variant="outlined">
                                    <p style={{textAlign: 'center', fontSize: '16px', lineHeight: '20px', fontWeight: '500', color: '#e4e6eb'}}>{data.name.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
                                                    return (prep && ' ') + letter.toUpperCase();
                                                })}</p>
                                    <p style={{textAlign: 'center', fontSize: '12px', lineHeight: '0px', color: '#b0b3b8'}}>#{data.id}</p>
                                    <CardMedia
                                        className={classes.cardImg}
                                        component="img"
                                        image={data.sprite}
                                        alt={data.name}
                                    />
                                </Card>
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
        
    );
}

export default Home;