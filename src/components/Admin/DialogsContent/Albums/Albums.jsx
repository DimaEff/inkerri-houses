import React, {useContext, useState} from 'react';
import {connect} from "react-redux";

import ContentForm, {ContentSlide} from "../../../common/Form/ContentForm";
import AddImageButton from "../../../common/Button/AddImageButton";
import AdminSliderImage from "../../../common/AppContainer/AdminSliderImage";
import {getAlbums} from "../../../../selectors/albums_selectors";
import AdminContext from "../../AdminContext";
import {commonAPI} from "../../../../firebase/api";
import {firestoreCollections} from "../../../../utils/consts";
import AlbumsHeader from "./AlbumsHeader";


const Albums = ({albums}) => {
    const {addNewAlbum, addPhotosToAlbum, deletePhotosFromAlbum} = useContext(AdminContext);

    const [currentAlbum, setCurrentAlbum] = useState(null);

    const currentAlbumData = albums.find(album => album.id === currentAlbum);

    const handleAddImages = (e) => {
        addPhotosToAlbum(currentAlbum, e, currentAlbumData);
    }

    const handleDeleteImage = (imageURL) => {
        deletePhotosFromAlbum(currentAlbum, imageURL, currentAlbumData);
    }

    const handleDeleteAlbum = () => {
        commonAPI.deleteDoc(firestoreCollections.albums, currentAlbum, currentAlbumData.imagesURL);
    }

    return (
        <ContentForm withoutForm={<AddImageButton multiple addItem={handleAddImages}/>}
                     header={<AlbumsHeader albums={albums} deleteAlbum={handleDeleteAlbum} addAlbum={addNewAlbum}
                                           setCurrentAlbum={setCurrentAlbum}/>}
        >
            {albums.find(({id}) => id === currentAlbum)?.imagesURL?.map((imageURL) => <ContentSlide key={imageURL}>
                <AdminSliderImage id={imageURL}
                                  imageURL={imageURL}
                                  deleteFunction={() => handleDeleteImage(imageURL)}
                />
            </ContentSlide>)}
        </ContentForm>
    );
};

const mapStateToProps = (state) => ({
    albums: getAlbums(state),
})

export default connect(mapStateToProps, {})(Albums);