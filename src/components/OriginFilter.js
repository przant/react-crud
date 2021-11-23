import React from 'react';

export const InputText = ({ userInput, setUserInput, handleClick }) => {

    const handleChange = (e) => {
        setUserInput(e.target.value);
    }

    return (
        <>
            <input
                type="text"
                className="form-control"
                placeholder="IdOrigen a buscar . . . "
                value={userInput}
                onChange={handleChange}
            />
            <button 
                className="btn btn-outline-secondary" 
                type="button" 
                onClick={handleClick}
            >
                Buscar
            </button>
        </>
    )
}
