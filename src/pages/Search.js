import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'


const Search = ({ mygroup, setMygroup }) => {
    const [heroes, setHeroes] = useState([])
    const Buscar = true


    useEffect(() => {
        window.localStorage.setItem('heroes', JSON.stringify(mygroup)) 
        console.log(mygroup)
    }, [mygroup])


    const muestraHeroes = () => {
        return heroes.map((h, i) => (
            <div className="col " key={i}>
                <Hero h={h} setMygroup={setMygroup} mygroup={mygroup} />
            </div>
        ))
    }

    return (
        <div>
            <Navbar setHeroe={setHeroes} Buscar={Buscar} />
            <div className="container justify-content-center- align-items-center">
                <h3 className="my-3">Resultados:</h3>
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    {muestraHeroes()}
                </div>
            </div>
        </div>
    )
}

export default Search
