import React, {useState} from 'react';

const MeuBotao = (props) => {
    const [hovered, setHovered] = React.useState(false)
    const [clicked, setClicked] = React.useState(false)
    var text = "Tá olhando o que?"
    if(hovered){
        text = "Tira a mão de mim rapá"
    }

    if(clicked){
        text="SAI MANO"
    }

    return (
        <button 
            onPointerEnter={() => {
                setHovered(true)
            }}

            onPointerLeave={() => {
                setHovered(false)
            }}

            onMouseDown={() => {
                setClicked(true)
            }}
        >{text}</button>
    )
}

export default MeuBotao;