import React, { useEffect, useState } from 'react';
import { InputText } from './OriginFilter';
import { Datepicker } from './DatepickerFilter';

export const Search = ({data, setItems}) => {

    const [userInput, setUserInput] = useState("");
    const [dateRequest, setDateRequest] = useState(Date.now);


    const [originFilter, setOriginFilter] = useState(false);
    const [dateFilter, setDateFilter] = useState(false);

    const handleCheckBoxChange = (cb) => {
        if (cb.target.id === "origin-cb") {
            setOriginFilter(!originFilter);
        }

        if (cb.target.id === "date-request-cb") {
            setDateFilter(!dateFilter);
        }
    }

    useEffect( () =>{
        if( !originFilter && !dateFilter) {
            setItems(data);
        }
    }, [originFilter, dateFilter, data, setItems]);

    const handleClick = () => {
        if (originFilter && !dateFilter) {
            console.log(userInput, typeof(userInput));
            const dataByOrigin = data.filter( item => item.IdOrigen === userInput);
            setItems(dataByOrigin);
        }

        if (dateFilter && !originFilter) {
            const dataByDateRequest = data.filter( item => item.FechaSolicitud === dateRequest);
            setItems(dataByDateRequest);
        }
    }

    return (
        <div className="row mt-3">
            {
                originFilter && dateFilter ? <div className="alert alert-warning" role="alert">Usar solo un filtro a la vez</div>: null
            }
            <div className="input-group mt-3">
                <div className="input-group-text">
                    <span className="mx-3">
                        <input
                            id="origin-cb"
                            type="checkbox"
                            defaultChecked={false}
                            value={originFilter}
                            onChange={handleCheckBoxChange}
                        />
                        <label>Origen</label>
                    </span>
                    <span className="me-3">
                        <input
                            id="date-request-cb"
                            type="checkbox"
                            defaultChecked={false}
                            value={dateFilter}
                            onChange={handleCheckBoxChange}
                        />
                        <label>Fecha Solicitud</label>
                    </span>
                </div>
                {
                    originFilter && !dateFilter ?
                        <InputText
                            userInput={userInput}
                            setUserInput={setUserInput}
                            handleClick={handleClick}
                        /> : null
                }
                {
                    dateFilter && !originFilter ?
                        <Datepicker
                            dateRequest={dateRequest}
                            setDateRequest={setDateRequest}
                            handleClick={handleClick}
                        /> : null
                }
            </div>
        </div>
    )
}
