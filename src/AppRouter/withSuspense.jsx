import React, {Suspense} from 'react';
import {Typography} from "@material-ui/core";


const FallbackElement = <div style={{textAlign: 'center'}}><Typography>Загрузка...</Typography></div>

const withSuspense = (Component, fallbackElement = FallbackElement) => {

    return () => {
        return (
            <Suspense fallback={fallbackElement}>
                <Component/>
            </Suspense>
        );
    };
};

export default withSuspense;