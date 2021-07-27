import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = ({ setToken }) => {
    const [error, setError] = useState({ message: '', status: null })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().required("La contraseña es obligatoria")
        }),
        onSubmit: (formData) => {
            const requesInit = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            }
            fetch('http://challenge-react.alkemy.org/', requesInit)
                .then(res => res.json())
                .then(res => {
                    if (res.token) {
                        setToken({ token: res.token, status: true })
                        window.localStorage.setItem('loggedAppUser', JSON.stringify({ token: res.token, status: true }))
                    } else {
                        setError({ message: res.error, status: true })
                    }
                })
                .catch((err) => alert(err.message))
            }
        })



    return (
        <div className="container d-flex align-items-center justify-content-center mt-5" >
            <form style={{ marginTop: '5rem' }} onSubmit={formik.handleSubmit}>
                <h1 className="my-5">Inicio de Sesión</h1>
                {error.status && <span className="alert alert-danger" role="alert">{error.message}</span>}
                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Correo"
                        onChange={formik.handleChange}
                        error={formik.errors.email}
                        value={formik.values.name}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="password"
                        placeholder="Clave"
                        onChange={formik.handleChange}
                        error={formik.errors.password}
                        value={formik.values.password}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3 mx-5">Iniciar Sesión</button>
            </form>
        </div>
    )
}

export default Login