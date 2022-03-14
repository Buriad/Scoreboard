import React from 'react'


// class Counter extends React.Component {

//     state = {
//         score: this.props.score
//     }

//     increment = () =>{
//         this.setState( prevState => {
//             return{
//                 score: prevState.score + 1
//             }
//         } )
//     }
//     dicrement = () =>{
//         this.setState( prevState => {
//             return{
//                 score: prevState.score - 1
//             }
//         } )
//     }

//     render(){

const Counter = (props) => {

    return (
        <div className="counter">
            <button className="counter-action decrement"  onClick={()=> props.changeScore(-1, props.index)}>-</button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment" onClick={()=>props.changeScore(1,props.index)}>+</button>
        </div>  
    )
    }

  export default Counter;