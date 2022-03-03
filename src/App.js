import './App.css'
import React from 'react'

export default class calculadora extends React.Component{

  state = {
    result:0,
    num1: null,
    nu2:null
  }
   handleChange = (e) => {
     this.setState({
       num1: e.target.value
     })
   }
   handleChange2 = (e) => {
    this.setState({
      num2: e.target.value
    })
  }

  minus = () => {
    let{num1, num2} = this.state
    this.setState({
      result: num1 - num2
    })
  }
  add = () => {
    let{num1, num2} = this.state
    this.setState({
      result: Number(num1) + Number(num2)
    })
  }
  divisao = () => {
    let{num1, num2} = this.state
    this.setState({
      result: num1 / num2
    })
  }
  multipla = () => {
    let{num1, num2} = this.state
    this.setState({
      result: num1 * num2
    })
  }
  

  

render(){
  return(
    <div class="container">
      <h1>calculadora</h1>
      <h2> {this.state.result} </h2>
      <input onChange={this.handleChange}type="number"/>
      <input onChange={this.handleChange2}type="number"/>
      <button onClick={this.minus}>-</button>
      <button onClick={this.add}>+</button>
      <button onClick={this.divisao}>/</button>
      <button onClick={this.multipla}>+</button>
      
    </div>
  )
}
}
