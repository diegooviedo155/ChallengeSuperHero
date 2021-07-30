import React from 'react'


const Hero = ({ h, setMygroup, mygroup}) => {

    function handleClick(){
        setMygroup([...mygroup,h])
    }
    

    return (
        <div className="col">
            <div className="card" style={{ width: "10rem" }} >
                <img src={h.image.url} className="card-img-top " style={{ height: "15rem" }} alt={h.image.url} />
                <div className="card-body" >
                    <h5 className="card-title">{h.name}</h5>
                    <button type="button" className="btn btn-primary"onClick={handleClick}>Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default Hero