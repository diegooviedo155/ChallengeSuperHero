import React, { useEffect, useState } from 'react'
// import DetallesyEliminar from '../components/DetallesyEliminar'
import MyHero from '../components/MyHero'
import Navbar from '../components/Navbar'

const Home = () => {

    const [myhero, setMyhero] = useState([])
    const Buscar = false

    useEffect(() => {
        const heroesJson = window.localStorage.getItem('heroes')
        if (heroesJson) {
            const Heroe = JSON.parse(heroesJson)
            setMyhero(Heroe)
        }
    }, [])

    const muestraHeroes = () => {
        return myhero.map((h, i) => (
            <div className="col " key={i}>
                <div className="col">
                    <div className="card" style={{ width: "12rem" }} >
                        <MyHero h={h} />
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div>
            <Navbar Buscar={Buscar} />
            <div className="container justify-content-center- align-items-center">
                <h3 className="my-3">Super Equipo:</h3>
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    {muestraHeroes()}
                </div>

            </div>
        </div>
    )
}

export default Home
