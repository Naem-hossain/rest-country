
import { useEffect, useState } from 'react';
import React from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [country, setCountry] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div>
            <h2>Hello From Countries</h2>
            <div className="grid grid-cols-4 w-4/5 mx-auto mt-5">
                {
                    country.map(country => <Country data={country} key={country.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;