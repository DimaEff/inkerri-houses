import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";


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

const NewsItem = ({id, img, date, title, text, ...props}) => {
    const styles = useStyles();

    return (
        <div className={styles.root} {...props}>
            <div className={styles.img}>
                <img src={img}/>
            </div>
            <div>
                <Typography className={styles.date}>
                    {date}
                </Typography>
            </div>
            <div>
                <Typography style={{fontSize: '18px'}} color={'error'}>
                    {title}
                </Typography>
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