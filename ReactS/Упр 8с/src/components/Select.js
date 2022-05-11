import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';

function Select(props) {
    return (
        <>
            <h2>Willkommen zum Shop!</h2>
            <form>
				<select value={props.formular.hauptkategorie}
                    onChange={props.changeCategory} name="hauptkategorie">
					<option value="-1">Bitte Bereich wählen</option>
                    {
                        props.maincats.map((ele, index) => {
                            return <option value={index} key={ele}>{ele}</option>
                        })
                    }
				</select>
                {
                    // nur anzeigen, falls Hauptkategorie ausgewählt ist
                    props.formular.hauptkategorie != "-1" &&
                    (<select value={props.formular.unterkategorie}
                        onChange={props.changeCategory} name="unterkategorie">
                        <option value="-1">Bitte wählen</option>
                        {
                            props.subcats.map((ele) => {
                                return props.formular.hauptkategorie == ele.maincat ? 
                                    <option value={ele.subcat} key={ele.name}>{ele.name}</option>
                                    : <></>
                            })
                        }
                    </select>)
                }
            </form>
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Select);