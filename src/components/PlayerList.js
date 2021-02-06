import Player from './Player'

function PlayerList(props){
  const { data } = props
  const playerInfo = data.map((player, index) => {
    return (
        <Player 
          key={index} 
          firstName={player.firstName} 
          lastName={player.lastName} 
          jersey={player.jersey}
          hobbies={player.hobbies}
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