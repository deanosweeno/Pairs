import './SingleCard.css'

export default function SingleCard({card, handleChoice, flipped, disabled })
{
  const handleClick = () => {
    if(!disabled){
      handleChoice(card)
    }
  }
    return(
        <div>
            <div className="card">
            <div className={flipped ? "flipped" : ""}>
              <img className ="top" src={card.src} alt="card top"/>
              <img className ="bot" src="/img/05.jpg" onClick={handleClick} alt="card bottom" />
            </div>
          </div>
        </div>
    )
}