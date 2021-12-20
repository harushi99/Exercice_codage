import React from 'react';
import './Ville.css';

const Ville = (props) => {

    return (
        <div className="row">
            {props.villes.map(ville => {
                return (<div className="col-sm-6 pt-3">
                    <div className="card card-background border-0">
                        <div className="card-body">
                            <h5 className="card-title align-left nom-ville-font">{ville.nomCommune}</h5>
                            <p className="card-text align-right code-postal-font">{ville.codePostal}</p>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    );
}

export default Ville;