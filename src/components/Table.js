import React from 'react';

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
                <thead className="text-center">
                    <tr key="">
                        {
                            HEADERS.map((header) => (
                                <th className="">{header} </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className="text-center">
                    {

                        items.map((item) => (
                            <tr key={item.id}>
                                <td><input type="checkbox" defaultChecked={false} value="Fecha Solicitud" /></td>
                                <td>{item.FechaSolicitud}</td>
                                <td>{item.IdOrigen}</td>
                                <td>{item.IdDestino}</td>
                                <td>{item.TipoUnidad}</td>
                                <td>{item.FolioViaje}</td>
                                <td>{item.ClaveProducto}</td>
                                <td>{item.Descripcion}</td>
                                <td>{item.Cantidad}</td>
                                <td>{item.Unidad}</td>
                                <td>{item.Peso}</td>
                                <td>{item.SistemaOrigen}</td>
                                <td>{item.FechaCreacion}</td>
                                <td>{item.IdCreacion}</td>
                                <td>{item.Procesado ? "Si" : "No"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
