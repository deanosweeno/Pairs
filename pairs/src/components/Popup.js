import './Popup.css';
function Popup(props) 
{
  return (props.trigger) ? (
    <div className="Popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)} >close</button>
        { props.children }
      </div>
    </div>
  ): "";
}


export default Popup;
