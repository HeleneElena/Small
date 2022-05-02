const mapDispatchToProps = (dispatch) => {
    return {
        addAlbum: (album) => {
            dispatch({
                type: "ALBUM_ADD",
                payload: album
            })
        },
        delAlbum: (index) => {
            dispatch({
                type: "ALBUM_DEL",
                payload: index
            })
        }
    }
}

export default mapDispatchToProps