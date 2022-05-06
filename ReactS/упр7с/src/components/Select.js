import React from 'react';
import { connect } from 'react-redux'
import mapStateToProps from '../redux/mapStateToProps'
import mapDispatchToProps from '../redux/mapDispatchToProps'

function Select(props) {
    return (
        <>
            <h2>Willkommen zum Shop!</h2>
            <form>
				<select name="hauptkategorie" value={props.formular.hauptkategorie}
                onChange={props.changeCategory}>
					<option value="-1">Bitte Bereich wählen</option>
                    {
                        props.artikel.map((ele, index) => {
                            return <option value={index}>{ele.name}</option>
                        })
                    }
				</select>
                {
                    props.formular.hauptkategorie != "-1" &&
                    <select name="unterkategorie" value={props.formular.unterkategorie}
                    onChange={props.changeCategory}>
                        <option value="-1">Bitte wählen</option>
                        {
                            props.artikel[props.formular.hauptkategorie].gruppe.map((ele, index) => {
                                return <option value={index}>{ele.name}</option>
                            })
                        }                    
                    </select>
                }
            </form>
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Select);