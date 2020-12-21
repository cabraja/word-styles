import React,{ useState } from 'react'
import './App.css'
import './Slider.css'
import Block from './Block'

export default function App() {

  const [text, setText] = useState('')


  // FUNCTIONS START HERE --------------------------------------------------------------------

  function uppercase(text){
    return text.toUpperCase()
  }

  function lowercase(text) {
    return text.toLowerCase()
  }

  function weirdcase(text) {
    let result = []
    for(var i = 0; i < text.length; i++){
     if( i % 2 === 0){

       let x = text[i]
       let y = x.toUpperCase()
       result.push(y)

     }else{

      let x = text[i]
      let y = x.toLowerCase()
      result.push(y)
     }
    }
    return result.join('')
  }

  function nospaces(text) {
    
    return text = text.replace(/ /gi, '')
    
  }

  function camelcase(text) {
    return text.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
    }

    function spacebetween(text) {
      let result = []

      for(var i = 0; i < text.length; i++){
        result.push(text[i])
      }

      return result.join(' ')
    }

    function reverse(text) {
      let result=[]

      for(var i = text.length; i >= 0; i--){
        result.push(text[i])
      }

      return result.join("")
    }

    function dashbetween(text) {
      let result = []

      for(var i = 0; i < text.length; i++){
        if(text[i] === " "){
          result.push('-')
        }else{
          result.push(text[i])
        }
      }
      return result.join('')
    }

// FUNCTIONS END HERE ---------------------------------------------------

// ONCHANGE FUNCTION ONCHANGE HERE --------------------------------------------------- 

    function handleChange() {
      let paragraphs = document.querySelectorAll(".paragraph")
      let slider = document.getElementById("font-size")
      let newValue = slider.value

      paragraphs.forEach(item => {
        item.style.fontSize = newValue + 'px'
      })
    }


  return (
    <div id={"app"}>

      <div className="heading">
        <h1>Word Style Changer</h1>
        <h2>Create various text styles</h2>

        <div className="input">
          <input type="text" placeholder="Write some text here..." name="input" id="output" maxLength="38" onChange={e => setText(e.target.value)}  /> 

          <label for="font-size">Font Size</label>
          <input type="range" id="font-size"  name="font-size" min="24" max="74" onChange={() => handleChange()} /> 
        </div>
      </div>

    <div className="main">

    


      <div className="output">
          <Block name="Upper case"  text={uppercase(text)}/>
          <Block name="Lower case"  text={lowercase(text)}/>
          <Block name="WeIrD cAsE"  text={weirdcase(text)}/>
          <Block name="NoSpaces"  text={nospaces(text)}/>
          <Block name="camelCase" text={camelcase(text)} />
          <Block name='S p a c e  b e t w e e n'  text={spacebetween(text)} />
          <Block name="esreveR"  text={reverse(text)} />
          <Block name="Dash-Between"  text={dashbetween(text)}/>
      </div>


    </div>

    <footer>
      Mihajlo Cabraja Design
    </footer>

    </div>
  )
}

