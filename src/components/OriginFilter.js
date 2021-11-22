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
                placeholder="Username"
                value={userInput}
                onChange={handleChange}
            />
            <button 
                class="btn btn-outline-secondary" 
                type="button" 
                onClick={handleClick}
            >
                Button
            </button>
        </>
    )
}
