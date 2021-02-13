import logo from '../logo.svg';
import '../App.css';
import PlayerList from './PlayerList'
import Welcome from './Welcome'
import Favorite from './Favorite'
import { playerData } from '../data/playerData'
import React, { useState } from "react"

function App() {
  // console.log('pd', playerData)
  const [favorites, setFavorites] = useState([])
  // this is equivalent to const favorites = []
  function addFavorite(id){

    let foundPlayer = playerData.find( player => player.id === id)
    console.log('found', foundPlayer)
      const updateFavorites = favorites.slice()
      updateFavorites.push(foundPlayer)
      setFavorites(updateFavorites)
  }

  return (  
    <div className="container">
      <Welcome />
      <PlayerList 
        data={playerData} 
        addFav={addFavorite}
      />
      <Favorite 
        favPlayers={favorites}
      />
    </div>
  );
}

export default App;
