import React from 'react'

export const Item = ({ item }) => {
    return (
        <tr>
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
    )
}