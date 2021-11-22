import React from 'react';

export const Table = () => {
    return (
        <div className="row mt-5">
        <table className="table table-striped table-hover mt-3">
          <thead className="text-center">
            <th></th>
            <th>FechaSolicitud</th>
            <th>IdOrigen</th>
            <th>IdDestino</th>
            <th>TipoUnidad</th>
            <th>FolioViaje</th>
            <th>ClaveProducto</th>
            <th>Descripcion</th>
            <th>Cantidad</th>
            <th>Unidad</th>
            <th>Peso</th>
            <th>SistemaOrigen</th>
            <th>FechaCreacion</th>
            <th>IdCreacion</th>
            <th>Procesado</th>
          </thead>
          <tbody className="text-center fs-5">
            <tr>
              <td>
                <input type="checkbox" defaultChecked={false} value="Fecha Solicitud" />
              </td>
              <td>R1,C2</td>
              <td>R1,C3</td>
              <td>R1,C4</td>
              <td>R1,C5</td>
              <td>R1,C6</td>
              <td>R1,C7</td>
              <td>R1,C8</td>
              <td>R1,C9</td>
              <td>R1,C10</td>
              <td>R1,C11</td>
              <td>R1,C12</td>
              <td>R1,C13</td>
              <td>R1,C14</td>
              <td>R1,C15</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" defaultChecked={false} value="Fecha Solicitud" />
              </td>
              <td>R2,C2</td>
              <td>R2,C3</td>
              <td>R2,C4</td>
              <td>R2,C5</td>
              <td>R2,C6</td>
              <td>R2,C7</td>
              <td>R2,C8</td>
              <td>R2,C9</td>
              <td>R2,C10</td>
              <td>R2,C11</td>
              <td>R2,C12</td>
              <td>R2,C13</td>
              <td>R2,C14</td>
              <td>R2,C15</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" defaultChecked={false} value="Fecha Solicitud" />
              </td>
              <td>R3,C2</td>
              <td>R3,C3</td>
              <td>R3,C4</td>
              <td>R3,C5</td>
              <td>R3,C6</td>
              <td>R3,C7</td>
              <td>R3,C8</td>
              <td>R3,C9</td>
              <td>R3,C10</td>
              <td>R3,C11</td>
              <td>R3,C12</td>
              <td>R3,C13</td>
              <td>R3,C14</td>
              <td>R3,C15</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" defaultChecked={false} value="Fecha Solicitud" />
              </td>
              <td>R4,C2</td>
              <td>R4,C3</td>
              <td>R4,C4</td>
              <td>R4,C5</td>
              <td>R4,C6</td>
              <td>R4,C7</td>
              <td>R4,C8</td>
              <td>R4,C9</td>
              <td>R4,C10</td>
              <td>R4,C11</td>
              <td>R4,C12</td>
              <td>R4,C13</td>
              <td>R4,C14</td>
              <td>R4,C15</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" defaultChecked={false} value="Fecha Solicitud" />
              </td>
              <td>R5,C2</td>
              <td>R5,C3</td>
              <td>R5,C4</td>
              <td>R5,C5</td>
              <td>R5,C6</td>
              <td>R5,C7</td>
              <td>R5,C8</td>
              <td>R5,C9</td>
              <td>R5,C10</td>
              <td>R5,C11</td>
              <td>R5,C12</td>
              <td>R5,C13</td>
              <td>R5,C14</td>
              <td>R5,C15</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}
