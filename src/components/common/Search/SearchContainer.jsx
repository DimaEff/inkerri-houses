import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import Fuse from "fuse.js";
import {IconButton, makeStyles} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search'

import {getHouses} from "../../../selectors/house_selectors";
import useResolution from "../../../hooks/useResolution";
import Search from "./Search";
import searchIcon from "../../../assets/Header/searchIcon.svg";


const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: '20px',
    },
    searchIcon: {
        cursor: 'pointer',
    },
    input: {
        position: 'absolute',
        left: '-165px',
    }
}))

const SearchContainer = ({houses}) => {
    const styles = useStyles();

    const {isMobile} = useResolution();

    const [searchResult, setSearchResult] = useState(null);
    const [searchInputValue, setSearchInputValue] = useState('');

    const onChange = (e) => {
        setSearchInputValue(e.target.value);
    }

    useEffect(() => {
        const fuse = new Fuse(houses, {
            keys: ['title'],
            threshold: 0.3,
        })

        const result = fuse.search(searchInputValue);
        setSearchResult(result);
    }, [houses, searchInputValue])

    const [showInput, setShowInput] = useState(false);

    useEffect(() => {
        if (!showInput) setSearchInputValue('')
    }, [showInput])

    return (
        <div className={styles.root}>
            <div className={styles.searchIcon} onClick={() => setShowInput(s => !s)}>
                <img src={searchIcon}/>
            </div>
            {showInput &&
            <div className={styles.input}>
                <Search searchResult={searchResult} searchInputValue={searchInputValue} onChange={onChange}
                        setShowInput={setShowInput}/>
            </div>}
        </div>
    );
};

const mapStateToProps = (state) => ({
    houses: getHouses(state),
})

export default connect(mapStateToProps, {})(SearchContainer);