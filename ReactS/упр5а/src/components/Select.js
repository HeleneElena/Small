import React from 'react';

function Select(props) {
    return (
        <>
            <h2>Willkommen zum Shop!</h2>
            <form>
				<select name="hauptkategorie" value={props.formular.hauptkategorie}
                onChange={props.kategorieAendern}>
					<option value="-1">Bitte Bereich wählen</option>
                    {
                        props.produkte.map((ele, index) => {
                            return <option value={index}>{ele.name}</option>
                        })
                    }
				</select>
                {
                    props.formular.hauptkategorie != "-1" &&
                    <select name="unterkategorie" value={props.formular.unterkategorie}
                    onChange={props.kategorieAendern}>
                        <option value="-1">Bitte wählen</option>
                        {
                            props.produkte[props.formular.hauptkategorie].gruppe.map((ele, index) => {
                                return <option value={index}>{ele.name}</option>
                            })
                        }                    
                    </select>
                }
            </form>
        </>
    );
}

export default Select;