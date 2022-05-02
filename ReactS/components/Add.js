import React from 'react';
import { connect } from 'react-redux'
import mapDispatchToProps from '../redux/mapDispatchToProps'

function Add(props) {
    return (
        <button onClick={() => {
            props.addAlbum({
                "id": 99,
                "title": "Thriller",
                "year": 1982
            })
        }}>Hinzufügen</button>
    );
}

export default connect(null, mapDispatchToProps) (Add);