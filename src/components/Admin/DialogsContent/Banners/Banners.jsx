import React, {useContext} from 'react';
import {connect} from "react-redux";

import {commonAPI} from "../../../../firebase/api";
import {firestoreCollections} from "../../../../utils/consts";
import AdminContext from "../../AdminContext";
import ContentForm, {ContentSlide} from "../../../common/Form/ContentForm";
import {getBanners} from "../../../../selectors/banners_selectors";
import AdminSliderImage from "../../../common/AppContainer/AdminSliderImage";
import AddImage from "./AddImage";


const Banners = ({banners}) => {
    const {addBannerItem} = useContext(AdminContext);

    const handleDeleteBanner = (id, imagesURL) => commonAPI.deleteDoc(firestoreCollections.banners, id, imagesURL);

    return (
        <ContentForm withoutForm={<AddImage addBannerItem={addBannerItem}/>}>
            {banners.map(({id, imagesURL}) => <ContentSlide key={id}>
                <AdminSliderImage id={id}
                                  bannersCount={banners.length}
                                  imageURL={imagesURL[0]}
                                  deleteFunction={() => handleDeleteBanner(id, imagesURL)}
                />
            </ContentSlide>)}
        </ContentForm>
    );
};

const mapStateToProps = (state) => ({
    banners: getBanners(state),
})

export default connect(mapStateToProps, {})(Banners);