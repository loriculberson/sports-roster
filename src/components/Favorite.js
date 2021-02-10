function Favorite({favPlayers}){
  console.log('favPlayers', favPlayers)
  const allFavPlayers = favPlayers.length > 0 ? favPlayers.map(fav => <p key={fav.id}>{fav.firstName}</p>) : null
  const favorites = favPlayers.length > 0 ? allFavPlayers : "No favorites selected"
  return (
    <>
    <h2>Favorite Players</h2>
      {favorites}
    </>
  )
}

export default Favorite;