import React, {useContext} from 'react';
import {connect} from "react-redux";
import {Typography} from "@material-ui/core";

import {commonAPI} from "../../../firebase/api";
import {firestoreCollections} from "../../../utils/consts";
import AdminContext from "../AdminContext";
import ContentForm, {ContentSlide} from "../../common/Form/ContentForm";
import {getBanners} from "../../../selectors/banners_selectors";
import AdminSliderImage from "../../common/AppContainer/AdminSliderImage";
import AddImageButton from "../../common/Button/AddImageButton";



const AddImage = ({addBannerItem}) => {
    return (
        <div>
            <Typography align={'center'}>
                Соотношение сторон изображения(ширина/высота) должно быть максимум 2.18
                (а вообще, желательно, чтобы было близко к этому соотношению).
                Так же, желательно, чтобы ширина была 1920px. Идеально - 1920х880.
            </Typography>
            <AddImageButton addItem={addBannerItem}/>
        </div>
    )
}

const Banners = ({banners}) => {
    const {addBannerItem} = useContext(AdminContext);

    const deleteBanner = (id, imagesURL) => commonAPI.deleteDoc(firestoreCollections.banners, id, imagesURL);

    return (
        <ContentForm withoutForm={<AddImage addBannerItem={addBannerItem}/>}>
            {banners.map(({id, imagesURL}) => <ContentSlide key={id}>
                <AdminSliderImage id={id}
                                  bannersCount={banners.length}
                                  imageURL={imagesURL[0]}
                                  deleteFunction={() => deleteBanner(id, imagesURL)}
                />
            </ContentSlide>)}
        </ContentForm>
    );
};

const mapStateToProps = (state) => ({
    banners: getBanners(state),
})

export default connect(mapStateToProps, {})(Banners);