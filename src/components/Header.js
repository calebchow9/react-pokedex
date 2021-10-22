import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import pokemonHeader from '../img/pokemon-header.png';
import './Header.css';
import { SearchRounded, AppsRounded } from "@material-ui/icons";

const useStyles = makeStyles({
    button: {
        textTransform: 'none',
        fontWeight: 'bold',
    },
    picButton: {
        fontSize: '16px',
        margin: '10px',
    },
})

function Header() {
    const classes = useStyles();
    return (
        <div className="header">
            <Link to="/">
                <img className="headerpic" alt="Pokemon" src={pokemonHeader} />
            </Link>
            <h1 style={{ color: "#9085c4" }}>Caleb's National Pokédex</h1>
            <Button
                startIcon={<SearchRounded/>}
                component={Link} to="/"
                style={{backgroundColor: "#252850", color: "#e4e6eb", borderRadius: 10,}}
                className={`${classes.button} ${classes.picButton}`}
                variant="outlined"
            >
                Search
            </Button>
            <Button
                startIcon={<AppsRounded/>}
                component={Link} to="/gallery"
                style={{backgroundColor: "#9085c4", color: "#e4e6eb", borderRadius: 10,}}
                className={`${classes.button} ${classes.picButton}`}
                variant="outlined"
            >
                Pokédex
            </Button>
            <br></br>
            <br></br>
        </div>
    );
}

export default Header;