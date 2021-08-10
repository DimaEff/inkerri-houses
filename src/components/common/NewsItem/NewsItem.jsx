import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

import Link from "../Text/Link";
import {getNewsItemRoute} from "../../../AppRouter/consts";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
        width: '371px',
        minWidth: '279px',
        maxWidth: '80vw',
        margin: '0px 12px',
        marginBottom: '15px',

        '& div': {
            marginBottom: '10px',
        },
    },
    img: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        overflow: 'hidden',

        width: '100%',
        height: '212px',

        '& img': {
            width: '100%',
        },
    },
    date: {
        fontSize: '20px',
        color: '#8B8B8B',
    },
    text: {
        overflow: 'hidden',
        height: '166px',
    }
}))

const NewsItem = ({id, imageURL, date, title, text, ...props}) => {
    const styles = useStyles();

    return (
        <div className={styles.root} {...props}>
            <div className={styles.img}>
                <img src={imageURL}/>
            </div>
            <div>
                <Typography className={styles.date}>
                    {date}
                </Typography>
            </div>
            <div>
                <Link to={getNewsItemRoute(id)}>
                    <Typography style={{fontSize: '18px'}} color={'error'}>
                        {title}
                    </Typography>
                </Link>
            </div>
            <div className={styles.text}>
                <Typography >
                    {text.slice(0, 250)}...
                </Typography>
            </div>
        </div>
    );
};

export default NewsItem;