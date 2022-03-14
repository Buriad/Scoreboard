import React from 'react'
import Player from './components/Player'
import Header from './components/Header' 

import './App.css';

class App extends React.Component {
  state= {
    players: [
          {
            name: "Naraa",
            score: 200,
            id: 1
          },
          {
            name: "Bataa",
            score: 50,
            id: 2
          },
          {
            name: "Khandaa",
            score: 100,
            id: 3
          },
          {
            name: "Saraa",
            score: 300,
            id: 4
          }
          ]
  }

  changeScore = (delta, index) => {
    this.setState(prevState => {
      const updatedPlayers = [...prevState.players]
      const updatedPlayer = {...updatedPlayers[index]}

      updatedPlayer.score += delta

      updatedPlayers[index] = updatedPlayer

      return {
        players: updatedPlayers
      }
    })
  }

  removePlayer = (paraID) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p=> p.id !=paraID)
      }
    })
  }

  render() {
    return (
        <div className="scoreboard">

            <Header 
            title="Scoreboard" 
            totalPlayers={this.state.players.length}
            />

            {this.state.players.map(player, index) =>
            <Player 
                name = {player.name} 
                score = {player.score}
                key={player.id}
                id={player.id}
                index = {index}
                removePlayer={this.removePlayer} 
                changeScore = {this.changeScore}
                />
                )}
          
        </div>
    )
  }
}

export default App;
