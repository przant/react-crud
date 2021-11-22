import React from 'react';

export const Datepicker = ({ dateRequest, setDateRequest, handleClick }) => {

    const handleChange = ( e ) => {
        setDateRequest( e.target.value );
    }
    return (
        <>
            <input
                type="date"
                className="form-control"
                placeholder="Username"
                value={ dateRequest }
                onChange={handleChange}
            />
            <button 
                className="btn btn-outline-secondary" 
                type="button"
                onClick={handleClick}
            >
                Button
            </button>
        </>
    )
}
