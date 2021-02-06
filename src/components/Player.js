function Player(props){
  // console.log('player prop', props)

  const playerHobbies = props.hobbies.length
            ? props.hobbies.map((hobby,index) => {
              return <li key={index}>{hobby}</li>
            }) 
            : <p>None listed</p>
            // console.log('id', props.id)
  return (
    <div>
      <h3>{props.firstName} {props.lastName}</h3>
      <ul>{playerHobbies}</ul>
      <button onClick={() => props.addFav(props.id)}>Add Favorite</button>
    </div>
  )
}

export default Player;