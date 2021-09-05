import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: ({rootTop, rootLeft}) => ({
        position: 'absolute',
        top: rootTop || '0px',
        left: rootLeft || '0px',
    }),
    decoration: ({orientation, decorW, decorH}) => ({
        position: 'absolute',

        // display: 'flex',

        // alignItems: orientation === 'h' && 'flex-start',
        width: orientation === 'h' ? (decorW || '170px'): 'auto',
        borderTop: orientation === 'h' && '2px solid #000',

        // justifyContent: orientation === 'v' && 'flex-start',
        height: orientation === 'v' ? (decorH || '120px'): 'auto',
        borderLeft: orientation === 'v' && '2px solid #000',
    }),
    img: ({imgTop, imgLeft}) => ({
        position: 'absolute',

        top: imgTop || '0px',
        left: imgLeft || '0px',
    }),
    text: ({textLeft, orientation}) => ({
        position: 'absolute',
        left: textLeft || (orientation === 'h' ? '0px': '30px'),
        top: orientation === 'h' && '8px',

        width: '170px',
    })
}))

const BuildingStep = ({children, step, img, orientation, rootTop, rootLeft, decorW, decorH, imgTop, imgLeft, textLeft, ...props}) => {
    const styles = useStyles({
        orientation,
        rootTop,
        rootLeft,
        imgTop,
        imgLeft,
        textLeft
    });

    return (
        <div className={styles.root} {...props}>
            <div className={styles.decoration}>
                {/*<div className={styles.img}>*/}
                {/*    <img src={img}/>*/}
                {/*</div>*/}
                <div className={styles.text}>
                    <Typography variant={'h5'} color={'error'}>{step} этап</Typography>
                    <Typography variant={'body2'}>{children}</Typography>
                </div>
            </div>
        </div>
    );
};

export default BuildingStep;