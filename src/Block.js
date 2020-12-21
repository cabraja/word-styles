import React from 'react'
import image from './img/pin.png'

export default function Block(props) {
    
    function copyText(event) {
        let button = event.target
        let p = button.previousElementSibling.innerText
        var elem = document.createElement("textarea")
        document.body.appendChild(elem)
        elem.value = p
        elem.select()
        document.execCommand("copy")
        document.body.removeChild(elem)
        alert("Copied to clipboard!")
    }

    return (
        <div className="block">
            <img src={image} height="40px" alt="pin" />
            <h3>{props.name}</h3>
            <p className="paragraph" >{props.text}</p>
            <button onClick={(event) => copyText(event)} ><i class="far fa-copy"></i> COPY </button>
        </div>
    )
}
