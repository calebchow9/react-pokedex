import { Button } from '@material-ui/core';
import { SearchRounded } from "@material-ui/icons";

// reference https://www.emgoto.com/react-search-bar/
const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
        <input
            style={{borderRadius: '5px', borderWidth: '1.5px', color: '#e4e6eb', borderColor: '#b0b3b8', minHeight: '30px', minWidth: '400px', backgroundColor: '#3d3d3d'}}
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            name="s" 
        />
        <Button style={{color: '#b0b3b8'}} type="submit" startIcon={<SearchRounded/>} />
    </form>
);

export default SearchBar;