import Player from './Player'

function PlayerList(props){
  const { data, addFav } = props
  const playerInfo = data.map(player => {
    return (
        <Player 
          id={player.id}
          key={player.id} 
          firstName={player.firstName} 
          lastName={player.lastName} 
          jersey={player.jersey}
          hobbies={player.hobbies}
          addFav={addFav}
        />
    )
  })
  
  return (
    //list of player data
    <>
      {playerInfo}
    </>
  )
}

export default PlayerList;