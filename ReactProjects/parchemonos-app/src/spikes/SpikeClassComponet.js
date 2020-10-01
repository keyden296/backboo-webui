import React, { Component} from 'react'

export default class SpikeClassComponent extends Component {

    constructor(props) {
        super()
        this.state = {
            number1: 0,
            number2: 0,
            suma: 0
        }
    }

    // Inicializar componente, solo una vez, hereda de la clase componente
    componentDidMount () {
        // Modificar el estado de la variable suma
        this.setState({suma: Number(this.state.number1) + Number(this.state.number2)})
    }

    // Actualizar las propiedades o el estado del componente 
    componentDidUpdate (prevProps, prevState) {
        //estado previo || estado actual
        if (prevState.number1 !== this.state.number1) {
            this.setState({suma: Number(this.state.number1) + Number(this.state.number2)})
        }
        if (prevState.number2 !== this.state.number2) {
            this.setState({suma: Number(this.state.number1) + Number(this.state.number2)})
        }
    }

    render() {
        return (
            <div>
                <p>Hola Mundo Class</p>
                <label>Numero 1 </label>
                <input type="text" value={this.state.number1} onChange={ e => this.setState({number1: e.target.value})} />
                <br/>
                <label>Numero 2 </label>
                <input type="text" value={this.state.number2} onChange={ e => this.setState({number2: e.target.value})} />
                <br/>
                <label>Resultado de la suma de {this.state.number1} + {this.state.number2} </label>
                <input type="text" value={this.state.suma} disabled/>
            </div>
        )
    }

}