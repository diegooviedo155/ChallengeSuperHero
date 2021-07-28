import React from 'react'
import DetallesyEliminar from './DetallesyEliminar'

const MyHero = ({ h }) => {

    return (
        <div>
                <img src={h.image.url} className="card-img-top " style={{ height: "10rem" }} alt={h.image.url} />
                <div className="card-body">
                    <h5 className="card-title ">{h.id}: {h.name}</h5>
                    <ul className="list-group list-group-flush" >
                        <li className="card-text list-group-item">Combate: {h.powerstats.combat}</li>
                        <li className="card-text list-group-item">Durabilidad: {h.powerstats.durability}</li>
                        <li className="card-text list-group-item">Inteligencia: {h.powerstats.intelligence}</li>
                        <li className="card-text list-group-item">Poder: {h.powerstats.power}</li>
                        <li className="card-text list-group-item">Velocidad: {h.powerstats.speed}</li>
                        <li className="card-text list-group-item">Fuerza: {h.powerstats.strength}</li>
                    </ul>
                </div>
                <DetallesyEliminar h={h} />

            </div>
    )
}

export default MyHero
