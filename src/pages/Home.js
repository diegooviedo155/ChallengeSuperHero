import React, { useEffect, useState } from 'react'
// import DetallesyEliminar from '../components/DetallesyEliminar'
import MyHero from '../components/MyHero'
import Navbar from '../components/Navbar'

const Home = () => {

    const [myhero, setMyhero] = useState([])
    const Buscar = false
    
    const eliminarHeroes = (id) => {
        const newHeroes = myhero.filter(h=> id !== h.id)
        window.localStorage.setItem('heroes', JSON.stringify(newHeroes))
        setMyhero(newHeroes)
    }

    useEffect(() => {
        const heroesJson = window.localStorage.getItem('heroes')
        if (heroesJson) {
            setMyhero(JSON.parse(heroesJson))
        }
    }, [])


    const muestraHeroes = () => {
        return myhero.map( h => (
            <div className="col " key={h.id}>
                <div className="col">
                    <div className="card" style={{ width: "12rem" }} >
                        <MyHero h={h} eliminarHeroes={eliminarHeroes}/>
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
