import React from 'react';
import {makeStyles, Paper, Typography} from "@material-ui/core";

import MyInput from "../Form/MyInput";
import Link from "../Text/Link";
import {ItemRoute} from "../../../AppRouter/consts";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        width: '200px',
    },
    results: {
        width: '100%',
        padding: '20px',
        borderRadius: '16px',
    },
    item: {
        padding: '5px 5px',

        '&:not(:last-child)': {
            borderBottom: '2px solid #B72A27',
        },
    }
}))

const Item = ({item, setShowInput}) => {
    const styles = useStyles();

    return (
        <div className={styles.item}>
            <Link fontSize={'16px'}
                  fontWeight={'bold'}
                  onClick={() => setShowInput(false)}
                  color={'primary'}
                  to={ItemRoute(item.id)}>
                {item.title}
            </Link>
        </div>
    )}

const Search = ({searchResult, searchInputValue, onChange, setShowInput}) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <MyInput autoFocus={true} placeholder={'Поиск'} onChange={onChange}/>
            {searchInputValue &&
            <Paper className={styles.results}>
                {
                    searchResult.length > 0 ?
                        searchResult.map(({item}) => <Item key={item.title} item={item} setShowInput={setShowInput}/>):
                        <Typography color={'primary'} align={'center'}>Нет результатов</Typography>
                }
            </Paper>
            }
        </div>
    );
};

export default Search;