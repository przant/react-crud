import React from 'react';

export const Search = () => {
    return (
        <div className="row mt-3">
            <div className="input-group mt-3">
                <button className="btn btn-outline-secondary" type="button">Buscar</button>
                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <div className="input-group-text">
                    <span className="mx-3">
                        <input type="checkbox" defaultChecked={false} value="Fecha Solicitud" />
                        <label>Origen</label>
                    </span>
                    <span className="me-3">
                        <input type="checkbox" defaultChecked={false} value="Fecha Solicitud" />
                        <label>Fecha Solicitud</label>
                    </span>
                </div>
            </div>
        </div>
    )
}
