import React, { useState, useEffect } from 'react'

export const SpikeFunctionComponent = (props) => {
    const [number1, setNumber1] = useState(3),
          [number2, setNumber2] = useState(6),
          [suma, setSuma] = useState(0)
    
    // Manejar los cambios *componentDidMount*
    useEffect(()=>{
        console.log('Inicio de component')
        setSuma (Number(number1) + Number(number2))
    }, [number1, number2])

    return (
        <div>
            <p>Hola Mundo Component</p>
            <label>Numero 1 </label>
            <input type="text" value={number1} onChange={ e => setNumber1(e.target.value) } />
            <br/>
            <label>Numero 2 </label>
            <input type="text" value={number2} onChange={ e => setNumber2(e.target.value) } />
            <br/>
            <label>Resultado de la suma de {number1} + {number2} </label>
            <input type="text" value={suma} disabled/>
        </div>
    )
}