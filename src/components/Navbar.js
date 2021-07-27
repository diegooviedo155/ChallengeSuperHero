import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Navbar = ({ setHeroe, Buscar }) => {

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        validationSchema: Yup.object({
            search: Yup.string().required()
        }),
        onSubmit: (formData) => {
            const getAxios = async (search) => {
                try {
                    const resPost = await axios(`https://superheroapi.com/api.php/10226927551437058/search/${search}`)
                    setHeroe(resPost.data.results)
                } catch (error) {
                    console.log(error)
                }
            }
            getAxios(formData.search)
        }
    })
    
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid mx-5">

                    <Link to="/" className="navbar-brand" >Mi Equipo</Link>

                    {
                        !Buscar ? (
                            <Link to="/buscador" className="btn btn-outline-success">Buscar</Link>
                        ) :
                            (
                                <form className="d-flex" onSubmit={formik.handleSubmit}>
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        name="search"
                                        placeholder="Search"
                                        onChange={formik.handleChange}
                                        error={formik.errors.search}
                                        value={formik.values.search}
                                    />
                                    <button className="btn btn-outline-success" type="submit">
                                        Buscar
                                    </button>
                                </form>
                            )
                    }
                </div>
            </nav>
        </div >
    )
}

export default Navbar
