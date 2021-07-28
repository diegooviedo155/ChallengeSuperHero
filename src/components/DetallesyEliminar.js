import React, { useState } from 'react'

const DetallesyEliminar = ({h}) => {

    const [staticBackdropLabel, setstaticBackdropLabel] = useState(h.id)
    const [staticBackdrop, setstaticBackdrop] = useState(h.name)
    const [idstaticBackdropLabel, setidstaticBackdropLabel] = useState(`#${h.name}`)


    return (
        <div>
            <div className="d-flex gap-2 my-2 justify-content-center">
                <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target={idstaticBackdropLabel}>Detalle</button>
                <button type="button" className="btn btn-danger btn-sm" >Eliminar</button>
            </div>
            <div className="modal fade modal-dialog-scrollable" id={staticBackdrop} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby={staticBackdropLabel} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={staticBackdropLabel}>Detalles de {h.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <ul className="list-group list-group-flush" >
                                <li className="list-group-item">Combate: {h.powerstats.combat}</li>
                                <li className="list-group-item">Durabilidad: {h.powerstats.durability}</li>
                                <li className="list-group-item">Inteligencia: {h.powerstats.intelligence}</li>
                                <li className="list-group-item">Poder: {h.powerstats.power}</li>
                                <li className="list-group-item">Velocidad: {h.powerstats.speed}</li>
                                <li className="list-group-item">Fuerza: {h.powerstats.strength}</li>
                                <li className="list-group-item"></li>
                                <li className="list-group-item">Peso: {h.appearance.weight[1]}</li>
                                <li className="list-group-item">Altura: {h.appearance.height[1]}</li>
                                <li className="list-group-item">Color de Ojos: {h.appearance.eyeColor}</li>
                                <li className="list-group-item">Color de Cabello: {h.appearance.hairColor}</li>
                                <li className="list-group-item">Lugar de trabajo: {h.work.base}</li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetallesyEliminar
