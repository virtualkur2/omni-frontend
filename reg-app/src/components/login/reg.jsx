import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
class app extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            userName: "",
            email: "",
            pass: "",
            temperature: 0
        };
    }

    handleChange(e) {
        let val = e.target.name;
        this.setState({ val: e.target.value });
        console.log(this.state);
    }

    consulta() {

    }

    render() {
        return (
            <React.Fragment>
                {/* <h1 className="sign-up-h1">Registro</h1> */}
                <input
                    type="text"
                    name="userName"
                    onChange={this.handleChange}
                    placeholder="Usuario"
                />

                <input
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    placeholder="Correo Electronico"
                />
                <input
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    placeholder="Contraseña"
                />

                <input
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    placeholder="Confirmar Contraseña"
                />

                <button className="" onSubmit={this.consulta}>
                    Enviar
        </button>
                <a href="#" className="left">
                    Olvide Mi Contraseña
          </a>
                <a href="#" className="right">
                    Iniciar Sesion
          </a>
            </React.Fragment>
        );
    }
}

export default app;