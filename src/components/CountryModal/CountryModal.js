import React, { useEffect, useState } from 'react';

const CountryModal = ({ dataName, setCountryNames }) => {
    const [moreInfo, setMoreInfo] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${dataName}`)
            .then(res => res.json())
            .then(data => setMoreInfo(data[0]))
    }, [dataName])

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setCountryNames('')} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Name: {moreInfo?.name?.common} </h3>
                    <p className="py-4">{moreInfo?.capital}</p>
                    <p className="py-4">{moreInfo?.population}</p>
                </div>
            </div>
        </div>
    );
};

export default CountryModal;