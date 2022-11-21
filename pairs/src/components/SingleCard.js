import './SingleCard.css'

export default function SingleCard({card})
{
    return(
        <div>
            <div className="card">
            <div>
              <img className ="top" src={card.src} alt="card top"/>
              <img className ="bot" src="/img/05.jpg" alt="card bottom" />
            </div>
          </div>
        </div>
    )
}