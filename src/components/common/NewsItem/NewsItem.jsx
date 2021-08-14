import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import {connect} from "react-redux";

import Link from "../Text/Link";
import {getNewsItemRoute} from "../../../AppRouter/consts";
import {getDateTemplate} from "../../../utils/helpers";
import {getUser} from "../../../selectors/user_selectors";
import {openCloseAdminDialogContent} from "../../../store/adminReducer";
import AdminItemsPanel from "../../Admin/AdminItemsPanel";
import {firestoreCollections} from "../../../utils/consts";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
        width: '371px',
        minWidth: '250px',
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

        [theme.breakpoints.down(600)]: {
            height: 'auto',
            maxHeight: '166px'
        },
    }
}))

const NewsItem = ({newsItem, user, openCloseAdminDialogContent, ...props}) => {
    const styles = useStyles();

    return (
        <div className={styles.root} {...props}>
            <div className={styles.img}>
                <img src={newsItem.imagesURL[0]}/>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Typography className={styles.date}>
                    {getDateTemplate(newsItem.date.toDate())}
                </Typography>
                <AdminItemsPanel collectionName={firestoreCollections.news} item={newsItem}/>
            </div>
            <div>
                <Link to={getNewsItemRoute(newsItem.id)}>
                    <Typography style={{fontSize: '18px'}} color={'error'}>
                        {newsItem.title}
                    </Typography>
                </Link>
            </div>
            <div className={styles.text}>
                <Typography >
                    {newsItem.text.length <= 200 ? newsItem.text: (newsItem.text.slice(0, 200) + '...')}
                </Typography>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: getUser(state),
})

export default connect(mapStateToProps, {openCloseAdminDialogContent})(NewsItem);