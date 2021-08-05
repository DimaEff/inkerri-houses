import React from 'react';
import {Typography} from "@material-ui/core";


const FooterText = ({children, ...props}) => {
    return (
        <div {...props}>
            <Typography style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '10px'}}>
                {children}
            </Typography>
        </div>
    );
};

export default FooterText;