import './App.css';
import AppBar from './components/app-bar/app-bar.tsx'
import Cards from './components/cards/cards.tsx'

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <div className='Container Cards'>
        
        <Cards></Cards>
      </div>
    </div>
  );
}

export default App;
