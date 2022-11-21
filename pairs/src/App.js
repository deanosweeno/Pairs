import './App.css';
import { useState } from 'react'
import SingleCard from './components/SingleCard'
const Imgs = [{ "src": "/img/01.jpg" }, { "src": "/img/02.jpg" }, { "src": "/img/03.jpg" }] //will call properties from external array here
function App() 
{
  const [turns, setTurns] = useState(0)
  const [cards, setCards] = useState([])
  const shuffle = () => {
    const shuffled = [...Imgs, ...Imgs].sort(() => Math.random() - 0.5).map((card) => ({...card, id: Math.random() })) // creates pairs of objects and shuffles, while assigning IDs 
    setCards(shuffled)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Pairs</h1>
      <button onClick={shuffle}>Retry</button>

      <div className="Grid">
        {cards.map(card => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}


export default App;
