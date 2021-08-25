import React, {useContext} from 'react';
import {connect} from "react-redux";
import {IconButton, makeStyles, Typography} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

import AdminContext from "../../AdminContext";
import ContentForm, {ContentSlide} from "../../../common/Form/ContentForm";
import {getBanners} from "../../../../selectors/banners_selectors";
import BannerImage from "./BannerImage";
import AddButton from "./AddButton";


const useStyles = makeStyles(theme => ({
    root: {

    },
    addButton: {

    }
}))

const Banners = ({banners}) => {
    const {addBannerItem} = useContext(AdminContext);

    return (
        <ContentForm withoutForm={<AddButton addBannerItem={addBannerItem}/>}>
            {banners.map(({id, imagesURL}) => <ContentSlide key={id}>
                <BannerImage id={id} bannersCount={banners.length} imagesURL={imagesURL}/>
            </ContentSlide>)}
        </ContentForm>
    );
};

const mapStateToProps = (state) => ({
    banners: getBanners(state),
})

export default connect(mapStateToProps, {})(Banners);