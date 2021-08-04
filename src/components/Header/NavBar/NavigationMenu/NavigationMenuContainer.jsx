import React from 'react';

import useResolution from "../../../../hooks/useResolution";
import NavigationMenuDesktop from "./NavigationMenuDesktop";
import NavigationMenuMobile from "./NavigationMenuMobile";


const NavigationMenuContainer = ({paths}) => {
    const isMobile = useResolution();

    return (
        <div style={{display: 'flex'}}>
            {
                isMobile ?
                <NavigationMenuMobile paths={paths}/>:
                <NavigationMenuDesktop paths={paths}/>
            }
        </div>
    );
}
;

export default NavigationMenuContainer;