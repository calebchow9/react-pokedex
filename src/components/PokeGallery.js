import React from "react";
import {Grid, Card, CardMedia, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    pokeCard: {
         maxHeight: '100px',
         maxWidth: '100px',
    },
    cardImg: {
        objectFit: 'contain',
    },
});

function PokeGallery(props) {
    const classes = useStyles();

    const displayPokemon = (props) => {
        const {pokemon} = props;
        const region = props.region;
        const region_ref = [0, 151, 251, 386, 493, 649, 0, 649];

        // if props is not empty
        // slice data based on region to sort
        if(pokemon.length > 0) {
            return(
                <Grid 
                    justifyContent="center"
                    style={{padding:'15px'}}
                    container spacing={1}>
                {pokemon.slice(region_ref[region-1], region_ref[region]).map((data) => {
                    return(
                        <Grid item key={data.id}>
                            <Link style={{textDecoration: 'none'}} to={`pokemon/${data.id}`} id={data.id}>
                                <Card 
                                    className={classes.pokeCard}
                                    variant="outlined"
                                    style={{backgroundColor:'#3d3d3d'}}>
                                    <CardMedia
                                        className={classes.cardImg}
                                        component="img"
                                        image={props.shiny ? data.sprite_shiny : data.sprite}
                                        alt={data.name}
                                    />
                                </Card>
                            </Link>
                        </Grid>
                    )
                })}    
                </Grid>
            )
        }
    }

    return(
        <>
            {displayPokemon(props)}
        </>
    )
}

// proptype check that pokemon passed in is an array of objects
PokeGallery.propTypes = {
    pokemon: PropTypes.array,
    shiny: PropTypes.bool,
    region: PropTypes.number,
};

export default PokeGallery;