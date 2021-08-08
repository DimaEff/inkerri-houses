import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {makeStyles, Paper} from "@material-ui/core";

import phoneIcon from '../../assets/Footer/phone.svg';
import mailIcon from '../../assets/Footer/mail.svg';
import locationIcon from '../../assets/Footer/location.svg';
import timeIcon from '../../assets/Footer/time.svg';
import phoneIconW from '../../assets/Footer/phoneW.svg';
import mailIconW from '../../assets/Footer/mailW.svg';
import locationIconW from '../../assets/Footer/locationW.svg';
import timeIconW from '../../assets/Footer/timeW.svg';
import PaperItem from "./PaperItem";
import {getConsultingRoute, getScandinavianRoute} from "../../AppRouter/consts";


const useStyles = makeStyles(theme => ({
    paper: alternative => ({
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        width: '300px',
        minWidth: '260px',
        height: '224px',
        borderRadius: '30px',

        backgroundColor: alternative ? '#B72A27': '#fff',
    })
}))

const FooterPaper = () => {
    const [alternative, setAlternative] = useState(false);
    const styles = useStyles(alternative);
    const location = useLocation();

    useEffect((() => {
        const altPages = [
            getConsultingRoute(),
            getScandinavianRoute(),
        ];

        if (altPages.some(page => page === location.pathname)) {
            setAlternative(true)
        } else {
            setAlternative(false)
        }
    }), [location, setAlternative])

    const items = [
        {icon: alternative ? phoneIconW: phoneIcon, text: '+ 7 (931) 308-57-59'},
        {icon: alternative ? mailIconW: mailIcon, text: 'zakaz@inkerri.ru'},
        {icon: alternative ? locationIconW: locationIcon, text: 'г. Санкт-Петербург'},
        {icon: alternative ? timeIconW: timeIcon, text: 'Пн-Пт с 10:00 - 20:00\nСб 12:00 - 18:00'},
    ]

    return (
        <Paper className={styles.paper} elevation={2}>
            {items.map(({icon, text}) => <PaperItem key={text} icon={icon} alternative={alternative}>
                {text}
            </PaperItem>)}
        </Paper>
    );
};

export default FooterPaper;