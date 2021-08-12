import React from 'react';

import useResolution from "../../../../hooks/useResolution";
import NavigationMenuDesktop from "./NavigationMenuDesktop";
import NavigationMenuMobile from "./NavigationMenuMobile";


const NavigationMenuContainer = ({paths}) => {
    const {isMobile} = useResolution();
    const filterPaths = paths?.filter(path => path.menuNum === 1);

    return (
        <div style={{display: 'flex'}}>
            {
                isMobile ?
                <NavigationMenuMobile paths={filterPaths}/>:
                <NavigationMenuDesktop paths={filterPaths}/>
            }
        </div>
    );
}
;

export default NavigationMenuContainer;