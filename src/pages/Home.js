import React, { useEffect, useState } from 'react'
// import DetallesyEliminar from '../components/DetallesyEliminar'
import MyHero from '../components/MyHero'
import Navbar from '../components/Navbar'

const Home = () => {

    const [myhero, setMyhero] = useState([])
    const Buscar = false
    const total=0
    const eliminarHeroes = (id) => {
        const newHeroes = myhero.filter(h => id !== h.id)
        window.localStorage.setItem('heroes', JSON.stringify(newHeroes))
        setMyhero(newHeroes)
    }

    // const sumaTotalde = ()=>{
    //     let total = 0
    //     myhero.map (ps=>{
    //        let total += parseInt(ps.powerstats.intelligence)
    //     })
    //     return total
    // }

    const SUMA = {
        'intelligence': (total) => {
            myhero.map (ps => {
                total +=parseInt(ps.powerstats.intelligence)
            })
            return total
        },
        'durability': (total) => {
            myhero.map (ps => {
                total +=parseInt(ps.powerstats.durability)
            })
            return total
        },
        'combat': (total) => {
            myhero.map (ps => {
                total +=parseInt(ps.powerstats.combat)
            })
            return total
        },
        'power': (total) => {
            myhero.map (ps => {
                total +=parseInt(ps.powerstats.power)
            })
            return total
        },
        'strength': (total) => {
            myhero.map (ps => {
                total +=parseInt(ps.powerstats.strength)
            })
            return total
        },
        'speed': (total) => {
            myhero.map (ps => {
                total +=parseInt(ps.powerstats.speed)
            })
            return total
        }
    }


    useEffect(() => {
        const heroesJson = window.localStorage.getItem('heroes')
        if (heroesJson) {
            setMyhero(JSON.parse(heroesJson))
        }
    }, [])


    const muestraHeroes = () => {
        return myhero.map(h => (
            <div className="col " key={h.id}>
                <div className="col">
                    <div className="card" style={{ width: "12rem" }} >
                        <MyHero h={h} eliminarHeroes={eliminarHeroes} />
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div>
            <Navbar Buscar={Buscar} />
            <div className="container justify-content-center- align-items-center">
                    <h3 className="my-3">Powerstats del Grupo: </h3>
                <div className="row row-cols-lg-2 row-cols-sm-1  px-5">
                    <p>Suma Total de Inteligencia: {SUMA['intelligence'](total)}</p>
                    <p>Suma Total de Combate: {SUMA['combat'](total)}</p>
                    <p>Suma Total de Poder: {SUMA['power'](total)}</p>
                    <p>Suma Total de Fuerza: {SUMA['strength'](total)}</p>
                    <p>Suma Total de Velocidad: {SUMA['speed'](total)}</p>
                    <p>Suma Total de Duración: {SUMA['durability'](total)}</p>
                </div>
                <h3 className="my-3">Super Equipo:</h3>
                <div className="row row-cols-auto row-cols-lg-5  g-2 g-lg-3">
                    {muestraHeroes()}
                </div>
            </div>
        </div>
    )
}

export default Home
