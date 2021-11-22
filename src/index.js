import { nanoid } from 'nanoid';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const DATA = [
  { id: "mercancia-" + nanoid(), FechaSolicitud: "05.11.2021", IdOrigen: 3000, IdDestino: 3000, TipoUnidad: "TRAILER", FolioViaje: "FEA-1", ClaveProducto: 29991, Descripcion: "C D CREST COMPLETE BLA+SCOPE 2X75ML", Cantidad: 23000, Unidad: "X4G", Peso: 3000, SistemaOrigen: "NADRO", FechaCreacion: "05.07.2021", IdCreacion: "creacion-" + nanoid(), Procesado: false },
  { id: "mercancia-" + nanoid(), FechaSolicitud: "05.11.2020", IdOrigen: 2000, IdDestino: 3000, TipoUnidad: "TRAILER", FolioViaje: "FEA-1", ClaveProducto: 30415, Descripcion: "AG MI CELAR EFFACLAUR ULTRAP-G400ML", Cantidad: 28000, Unidad: "X4G", Peso: 200, SistemaOrigen: "NADRO", FechaCreacion: "05.07.2021", IdCreacion: "creacion-" + nanoid(), Procesado: false },
  { id: "mercancia-" + nanoid(), FechaSolicitud: "05.11.2020", IdOrigen: 2000, IdDestino: 3000, TipoUnidad: "TRAILER", FolioViaje: "FEA-1", ClaveProducto: 30632, Descripcion: "WOM ISDIN HIDRA VAG C/12 APL       ", Cantidad: 2300, Unidad: "X4G", Peso: 3500, SistemaOrigen: "NADRO", FechaCreacion: "05.07.2021", IdCreacion: "creacion-" + nanoid(), Procesado: false },
  { id: "mercancia-" + nanoid(), FechaSolicitud: "05.11.2019", IdOrigen: 1000, IdDestino: 3000, TipoUnidad: "TRAILER", FolioViaje: "FEA-1", ClaveProducto: 30657, Descripcion: "MONTELUKAST 10MG 50 TAB        LGEN", Cantidad: 600, Unidad: "X4G", Peso: 950, SistemaOrigen: "NADRO", FechaCreacion: "05.07.2021", IdCreacion: "creacion-" + nanoid(), Procesado: false },
  { id: "mercancia-" + nanoid(), FechaSolicitud: "05.11.2019", IdOrigen: 1000, IdDestino: 3000, TipoUnidad: "", FolioViaje: "", ClaveProducto: 31354, Descripcion: "CRA NIVEA ACLARA NATP/MANO 75ML    ", Cantidad: 23000, Unidad: "X4G", Peso: 3000, SistemaOrigen: "WMS", FechaCreacion: "05.07.2021", IdCreacion: "creacion-" + nanoid(), Procesado: false },
]

ReactDOM.render(
    <App data={ DATA } />,
  document.getElementById('root')
);
