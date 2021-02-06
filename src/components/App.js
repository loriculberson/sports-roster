import logo from '../logo.svg';
import '../App.css';
import PlayerList from './PlayerList'
import Welcome from './Welcome'
import { playerData } from '../data/playerData'

function App() {
  // console.log('pd', playerData)
  return (
    <div className="container">
      <Welcome />
      <PlayerList data={playerData} />
    </div>
  );
}

export default App;
