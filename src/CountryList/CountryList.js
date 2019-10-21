import React from 'react';

import './CountryList.css';
import countries from './countries.json';

const countryList = () => {
    return(
        <div >
            <select>
                <option value>Select Country</option>
                { countries.map(country => <option value={country.code}>{country.name}</option>) }
            </select>
        </div>        
    )
}

export default countryList;