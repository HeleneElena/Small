import React from 'react';
import { connect } from 'react-redux'
import mapStateToProps from '../redux/mapStateToProps'
import mapDispatchToProps from '../redux/mapDispatchToProps'

function Select(props) {

    /* const subcatArr = props.subcats.filter((ele) => {
        return ele.maincat === props.formular.hauptkategorie
    }) */

    return (
        <>
            <h2>Willkommen zum Shop!</h2>
            <form>
				<select name="hauptkategorie" value={props.formular.hauptkategorie}
                onChange={props.changeCategory}>
					<option value="-1">Bitte Bereich wählen</option>
                    {
                        props.maincats.map((ele, index) => {
                            return <option value={index}>{ele}</option>
                        })
                    }
				</select>
                {
                    props.formular.hauptkategorie != "-1" &&
                    <select name="unterkategorie" value={props.formular.unterkategorie}
                    onChange={props.changeCategory}>
                        <option value="-1">Bitte wählen</option>
                        {
                            props.subcats.map((ele) => {
                                return ele.maincat === props.formular.hauptkategorie ?
                                <option value={ele.subcat}>{ele.name}</option> : <></>
                            })
                        }                    
                    </select>
                }
            </form>
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Select);