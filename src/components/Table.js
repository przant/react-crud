import { nanoid } from 'nanoid';
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

const DATA = [
    { id: "mercancia-" + nanoid(), FechaSolicitud: "05.11.2021", IdOrigen: 3000, IdDestino: 3000, TipoUnidad: "TRAILER", FolioViaje: "FEA-1", ClaveProducto: 29991, Descripcion: "C D CREST COMPLETE BLA+SCOPE 2X75ML", Cantidad: 23000, Unidad: "X4G", Peso: 3000, SistemaOrigen: "NADRO", FechaCreacion: "05.07.2021", IdCreacion: "creacion-" + nanoid(), Procesado: false },
    { id: "mercancia-" + nanoid(), FechaSolicitud: "05.11.2020", IdOrigen: 2000, IdDestino: 3000, TipoUnidad: "TRAILER", FolioViaje: "FEA-1", ClaveProducto: 30415, Descripcion: "AG MI CELAR EFFACLAUR ULTRAP-G400ML", Cantidad: 28000, Unidad: "X4G", Peso: 200, SistemaOrigen: "NADRO", FechaCreacion: "05.07.2021", IdCreacion: "creacion-" + nanoid(), Procesado: false },
    { id: "mercancia-" + nanoid(), FechaSolicitud: "05.11.2020", IdOrigen: 2000, IdDestino: 3000, TipoUnidad: "TRAILER", FolioViaje: "FEA-1", ClaveProducto: 30632, Descripcion: "WOM ISDIN HIDRA VAG C/12 APL       ", Cantidad: 2300, Unidad: "X4G", Peso: 3500, SistemaOrigen: "NADRO", FechaCreacion: "05.07.2021", IdCreacion: "creacion-" + nanoid(), Procesado: false },
    { id: "mercancia-" + nanoid(), FechaSolicitud: "05.11.2019", IdOrigen: 1000, IdDestino: 3000, TipoUnidad: "TRAILER", FolioViaje: "FEA-1", ClaveProducto: 30657, Descripcion: "MONTELUKAST 10MG 50 TAB        LGEN", Cantidad: 600, Unidad: "X4G", Peso: 950, SistemaOrigen: "NADRO", FechaCreacion: "05.07.2021", IdCreacion: "creacion-" + nanoid(), Procesado: false },
    { id: "mercancia-" + nanoid(), FechaSolicitud: "05.11.2019", IdOrigen: 1000, IdDestino: 3000, TipoUnidad: "", FolioViaje: "", ClaveProducto: 31354, Descripcion: "CRA NIVEA ACLARA NATP/MANO 75ML    ", Cantidad: 23000, Unidad: "X4G", Peso: 3000, SistemaOrigen: "WMS", FechaCreacion: "05.07.2021", IdCreacion: "creacion-" + nanoid(), Procesado: false },
]

export const Table = () => {
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

                        DATA.map((item) => (
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
