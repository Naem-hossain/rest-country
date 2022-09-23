import React, { useState } from 'react';
import CountryModal from '../CountryModal/CountryModal';


// 
const Country = (props) => {
    const { name, flags, population } = props.data

    const [countryNames, setCountryNames] = useState('')

    return (
        <div>

            <div className="p-3 m-3 bg-zinc-800 text-white rounded-lg flex gap-2 flex-col" >
                <h1 className="text-2xl">Name: {name.common}</h1>
                <p>Population: {population}</p>
                <img src={flags.png} className="h-20 w-3/4 mx-auto rounded-lg" alt="" />
                <label htmlFor="my-modal-3" className="btn modal-button" onClick={() => setCountryNames(name.common)}  >Show More Data</label>
            </div>
            {countryNames &&
                (<CountryModal dataName={countryNames} setCountryNames={setCountryNames}></CountryModal>)}
        </div>
    );
};



export default Country;