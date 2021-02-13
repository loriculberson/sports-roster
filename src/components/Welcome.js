function Welcome () {
  // const currentHour = 15
  const currentHour = new Date().getHours() 
  const message =   currentHour < 5 ? 'Why are you still up?! Go to bed' 
                  : currentHour < 12 ? 'Good Morning'
                  : currentHour < 18 ? 'Good Afternoon'
                  : 'Good Evening'
  return ( 
    <>
      <p>{message} sports fans!</p>
      <h2>Welcome to Astros Baseball Spring Training</h2>
    </>

   );
}
 
export default Welcome;