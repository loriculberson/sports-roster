function Player(props){
  console.log('player prop', props)
  // return <p>Hello {props.name}!</p>
  // const playerHobbies = props.hobbies.map((hobby, index) => {
  //   return <li key={index}>{hobby}</li>
  // })
  const playerHobbies = props.hobbies.length
            ? props.hobbies.map(hobby => {
              return <li key={props.id}>{hobby}</li>
            }) 
            : <p>None listed</p>
  return (
    <div>
      <h3>{props.firstName} {props.lastName}</h3>
      <ul>{playerHobbies}</ul>
    </div>
  )
}

export default Player;