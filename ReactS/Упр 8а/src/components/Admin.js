import React from 'react';

function Admin(props) {
    return (
        <>
            <h2>Hallo, </h2>
            <button>Abmelden</button>
            <h3>Artikel</h3>
            
            <h2>Bitte anmelden!</h2>

            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Passwort:
                    <input type="password" name="passwort" />
                </label>
                <div>
                    <button type="button">Anmelden</button>
                </div>
            </form>
        </>
    );
}

export default Admin;