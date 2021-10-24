import React, { useState, useEffect } from "react";
import {CardContent, Typography, Grid, Card, makeStyles, FormControlLabel, Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import { ArrowBackRounded, ArrowForwardRounded } from "@material-ui/icons";
import PropTypes from 'prop-types';

const axios = require('axios');
const apiURL = "https://pokeapi.co/api/v2/";

const useStyles = makeStyles({
    container: {
        textAlign: 'center',
        backgroundColor: '#3d3d3d',
    }
});


function PokemonPage(props) {
    const classes = useStyles();
    const id = props.location.pathname.substring(9);
    let prev_id = '' + (Number(id) - 1);
    if (prev_id < 1) prev_id = 649;
    let next_id = '' + (Number(id) + 1);
    if (next_id > 649) next_id = 1;

    const [pokemon, setPokemon] = useState('');
    const [items, setItems] = useState([]);
    const [types, setTypes] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [stats, setStats] = useState([]);
    const [encounters, setEncounters] = useState([]);
    const [shiny, setShiny] = useState(false);

    useEffect(() => {
        getPokemonData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleShiny = () => {
        setShiny(!shiny);
    };


    const getPokemonData = () => {
        const pokeURL = apiURL + `pokemon/${id}`;
        axios.get(pokeURL)
        .then((response) => {
            setPokemon(response.data);
            axios.get(response.data.location_area_encounters)
            .then((response => {
                response.data.forEach(function(element) {
                    setEncounters(encounters => [...encounters, element.location_area.name]);
                })
            }))
            response.data.types.forEach(function(element) {
				setTypes(types => [...types, element.type.name]);
			});
            response.data.abilities.forEach(function(element) {
				
                axios.get(element.ability.url)
                .then((response) => {
                    setAbilities(abilities => [...abilities, {name: element.ability.name, desc: response.data.effect_entries[1].effect}]);
                })
			});
            response.data.held_items.forEach(function(element) {
                setItems(items => [...items, element.item.name]);
            });
            response.data.stats.forEach(function(element) {
                setStats(stats => [...stats, {name: element.stat.name, stat: element.base_stat}]);
            });
        })
        .catch(error => console.log(error))
    }

    return(
        <div style={{backgroundColor: '#18191a', minHeight: '100vh'}} >
            <Header/>
            <Grid
                container
                spacing={3}
                direction="row"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={6}>
                    <Card className={classes.container} variant="outlined" maxwidth="lg">
                        <h1 style={{lineHeight: '15px', color: '#e4e6eb'}}>{pokemon ? pokemon.name.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
                                                    return (prep && ' ') + letter.toUpperCase();
                                                }) : ''}</h1>
                        <div>
                                {types.map((type) => {
                                    return <img key={type} src={`/${type}.png`} alt={type} />
                                })}
                        </div>
                        <h3 style={{fontWeight: '500', color: '#b0b3b8', lineHeight: '5px'}}>#{pokemon.id}</h3>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div>
                                <img src={shiny ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={pokemon.name}/>
                                <p style={{lineHeight: '0px', color: '#b0b3b8'}}>Front</p>
                            </div>

                            <div>
                                <img src={shiny ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} alt={pokemon.name}/>
                                <p style={{lineHeight: '0px', color: '#b0b3b8'}}>Back</p>
                            </div>
                        </div>
                        <FormControlLabel
                        style={{color: '#b0b3b8'}}
                        control={<Checkbox style={{color: '#9085c4'}} checked={shiny} 
                        onChange={handleShiny} />}
                        label={shiny ? 'Shiny' : 'Base'} />

                        <CardContent style={{margin: '30px'}}>
                            <Grid
                                container
                                spacing={3}
                                direction="row"
                                justifyContent="center"
                            >
                                <Grid item xs={6}>
                                    <Typography style={{lineHeight: '15px', color: '#e4e6eb'}} gutterBottom variant="h6" component="div">
                                        Base Stats
                                    </Typography>
                                    <Typography style={{color: '#e4e6eb', textAlign: 'left', fontSize: '16px', paddingLeft: '40px', lineHeight: '5px'}} variant="body2" component="div">
                                            <p><span style={{fontWeight: 'bold'}}>Height:</span> {pokemon.height}</p>
                                            <p><span style={{fontWeight: 'bold'}}>Weight:</span> {pokemon.weight}</p>
                                            <p><span style={{fontWeight: 'bold'}}>XP:</span> {pokemon.base_experience}</p>
                                            {stats.map(stat => (
                                                <p key={stat.name}><span style={{fontWeight: 'bold'}}>{stat.name.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
                                                    return (prep && ' ') + letter.toUpperCase();
                                                })}:</span> {stat.stat}</p>
                                            ))}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography style={{lineHeight: '15px', color: '#e4e6eb'}} gutterBottom variant="h6" component="div">
                                        Held Items
                                    </Typography>
                                    <div style={{minHeight:'40px', paddingTop: '30px'}}>
                                        {items.map((item) => {
                                            return (item ? <img key={item} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item}.png`} alt={item} /> : <p key={item}></p>);
                                        })}
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography style={{lineHeight: '15px', color: '#e4e6eb'}} gutterBottom variant="h6" component="div">
                                        Abilities
                                    </Typography>
                                    <Typography style={{color: '#e4e6eb', textAlign: 'left', fontSize: '16px'}} variant="body2" component="div">
                                        <ul>
                                            {abilities.map(ability => (
                                                <li key={ability.name}><span style={{fontWeight: 'bold'}}>{ability.name.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
                                                    return (prep && ' ') + letter.toUpperCase();
                                                })}:</span> {ability.desc}</li>
                                            ))}
                                        </ul>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography style={{lineHeight: '15px', color: '#e4e6eb'}} gutterBottom variant="h6" component="div">
                                        Location Areas
                                    </Typography>
                                    <Typography style={{color: '#e4e6eb', textAlign: 'left', fontSize: '16px'}} variant="body2" component="div">
                                        <ul>
                                            {encounters.map(encounter => (
                                                <li key={encounter.name}>{encounter == null ? '' : encounter.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
                                                    return (prep && ' ') + letter.toUpperCase();
                                                })}</li>
                                            ))}
                                        </ul>
                                    </Typography>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>   
            </Grid>
            <div style={{display: 'flex', justifyContent: 'center'}} onClick={() => window.location.reload()}>
                <div style={{paddingRight: '50px'}}>
                        <Link to={`${prev_id}`} style={{textDecoration: 'none'}}>
                            <div style={{ textAlign: 'right' }}>
                                <ArrowBackRounded style={{color: '#9085c4'}} />
                                <p style={{fontWeight: '500', lineHeight: '0px', paddingRight: '5px', color: '#CBC3E3'}}>#{prev_id}</p>
                            </div>
                        </Link>
                </div>
                    
                <div style={{paddingLeft: '5    0px'}}>
                    <Link to={`${next_id}`} style={{textDecoration: 'none'}}>
                        <div style={{color: '#252850'}}>
                            <ArrowForwardRounded style={{color: '#9085c4'}}/>
                            <p style={{fontWeight: '500', lineHeight: '0px', paddingLeft: '5px', color: '#CBC3E3'}}>#{next_id}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

PokemonPage.propTypes = {
    location : PropTypes.objectOf(String),
};

export default PokemonPage;