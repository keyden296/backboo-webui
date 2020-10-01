import React from 'react'

export const Button = ({type = 'button', label = 'texto', variant = 'primary', disabled = false, onPress = () => {}}) => (
    <button type={type} onClick={onPress} className={`btn ${variant}`} disabled={disabled} >{label}</button>
)