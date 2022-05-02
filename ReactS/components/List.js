import React from 'react';
import { connect } from 'react-redux'
import mapStateToProps from '../redux/mapStateToProps'
import mapDispatchToProps from '../redux/mapDispatchToProps'

function List(props) {
    return (
        <div>
            <h3>Alben</h3> 
            <ul>
                {
                    props.albums.map((ele, index) => {
                        return <li><button onClick={() => {
                            props.delAlbum(index)
                        }}>Löschen</button> {ele.title}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (List);