import logo from '../logo.svg';
import '../App.css';
import PlayerList from './PlayerList'
import Welcome from './Welcome'
import Favorite from './Favorite'
import { playerData } from '../data/playerData'
import { useState } from "react"

function App() {
  // console.log('pd', playerData)
  const [favorites, setFavorites] = useState([])
  // this is equivalent to const favorites = []
  function addFavorite(id){
    
    console.log('hi', id)
    const updateFavorites = [...favorites, id]
    setFavorites(updateFavorites)
    // console.log('fav', favorites)
  }
  return (  
    <div className="container">
      <Welcome />
      <PlayerList 
        data={playerData} 
        addFav={addFavorite}
      />
      <Favorite />
    </div>
  );
}

export default App;
