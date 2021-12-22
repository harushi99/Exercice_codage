import React, { useEffect, useState } from 'react';
import Ville from '../components/Ville';
import AlertSearch from '../components/AlertSearch';

function SearchVille() {
    const [villesOutreMere, setVilleOutreMere] = useState([]);
    const [villesMetropole, setVillesMetropole] = useState([]);
    const [totalOutreMere, setTotalOutreMere] = useState([]);
    const [totalMetropole, setTotalMetropole] = useState([]);
    const [showAlert, setshowAlert] = useState(false);
    const [filters, setFilters] = useState({
        search: '',
        sort: ''
    });

    useEffect(() => {
        (
            async () => {
                const filtersParams = [];

                if (filters.search) {
                    filtersParams.push(`search=${filters.search}`);
                }

                if (filters.sort) {
                    filtersParams.push(`sort=${filters.sort}`);
                }

                const response = await fetch(`http://localhost:5000/api/ville/search?${filtersParams.join('&')}`);
                const content = await response.json();
                setTotalMetropole(content.totalMetropole);
                setVillesMetropole(content.villesMetropole);
                setTotalOutreMere(content.totalOutreMere);
                setVilleOutreMere(content.villesOutreMere);
            }
        )()

    }, [filters]);
    

    const search = (searchValue) => {
        if (searchValue) { setshowAlert(true); } else { setshowAlert(false); }
        setFilters({
            ...filters,
            search: searchValue
        })
    };

    const sort = (sort) => {
        setFilters({
            ...filters,
            sort
        })
    }

    return (
        <div className="pt-5">
            <div className="card result-background border-0">
                <div className="card-body">
                    <div className="col-md-12 input-group">
                        <span className="input-group-text result-background search-input">Je recherche...</span>
                        <input type="text" className="form-control" placeholder="...une ville, un code postal"
                            onChange={
                                e => search(e.target.value)
                            }
                        />
                        <div className="input-group-append" onChange={
                            e => sort(e.target.value)
                        }>
                            <select className="form-select">
                                <option value="">Select</option>
                                <option value="asc">Nom Ville Ascendant</option>
                                <option value="desc">Nom Ville Descendante </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 pt-3">
                    <div className="card result-background border-0">
                        <div className="card-body">
                            {showAlert && <AlertSearch total={totalMetropole} />}
                            <Ville villes={villesMetropole}/>

                        </div>
                    </div>
                </div>
                <div className="col-sm-6 pt-3">
                    <div className="card result-background border-0">
                        <div className="card-body">
                            {showAlert && <AlertSearch total={totalOutreMere} />}
                            <Ville villes={villesOutreMere}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SearchVille;
