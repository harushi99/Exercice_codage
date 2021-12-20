import React from 'react';
import './Ville.css';

const AlertSearch = (props) => {
    var message;
    if (props.total == 0) {
        message = "Aucune villes correspondant au texte saisi";

    } else {
        if (props.total == 1) {;
            message = `une ville correspondant au texte saisi`;
        }
        else {
            message = `${props.total} villes correspondant au texte saisi`;
        }
    }

    return (
        <div>
            <div className={`card result-background text-white border-0 ${props.total ? "alert-success" : "alert-danger"}`} >
                <div className="card-body">
                    <h5 className="card-title text-center search-input">{message}</h5>
                </div>
            </div>
        </div>
    );
}

export default AlertSearch;