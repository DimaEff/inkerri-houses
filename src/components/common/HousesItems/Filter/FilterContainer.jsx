import React, {useState} from 'react';

import Filter from "./Filter";
import useResolution from "../../../../hooks/useResolution";
import {Dialog} from "@material-ui/core";
import MyButton from "../../Button/MyButton";


const FilterContainer = (props) => {
    const {isMobile} = useResolution();
    const [open, setOpen] = useState(false);

    const onAdaptiveFilter = (filterValues) => {
        props.onFilter(filterValues);
        setOpen(false);
    }

    return (
        <div style={{width: '100%', maxWidth: '300px', margin: '20px 10px'}}>
            {isMobile ?
                <>
                    <MyButton style={{width: '100%'}} action={() => setOpen(true)}>
                        Фильтр
                    </MyButton>
                    <Dialog scroll={'body'} onClose={() => setOpen(false)} open={open}>
                        <Filter {...props} onAdaptiveFilter={onAdaptiveFilter} onFilter={props.onFilter}/>
                    </Dialog>
                </>:
                <Filter {...props}/>
            }
        </div>
    );
};

export default FilterContainer;