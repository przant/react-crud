import React from 'react';
import { Item } from './Item';

const HEADERS = [
    "",
    "FechaSolicitud",
    "IdOrigen",
    "IdDestino",
    "TipoUnidad",
    "FolioViaje",
    "ClaveProducto",
    "Descripcion",
    "Cantidad",
    "Unidad",
    "Peso",
    "SistemaOrigen",
    "FechaCreacion",
    "IdCreacion",
    "Procesado",
];

export const Table = ({items}) => {
    return (
        <div className="row mt-5 table-responsive">
            <table className="table table-hover text-nowrap mt-3">
                <thead className="text-center" key="table-head">
                    <tr>
                        {
                            HEADERS.map((header, index) => (
                                <th key={`h${index}`}>{header} </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className="text-center">
                    {

                        items.map((item) => (
                            <Item key={item.id} item={item} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
