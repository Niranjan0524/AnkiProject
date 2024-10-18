import { Link } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";


const DeckNameCard=({name})=>{


  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };  

  const handleClickOnDeck=()=>{
    console.log("Clicked on Deck");
    // navigate('/itemdescription', { state: { item} });
  }

  return (
    <>
      <div className="deckNameCard">
        <div className="deckNamedisplay" onClick={handleClickOnDeck}>
          <Link to="/cardsOfDeck" className='DName'>
            {name}
          </Link>
        </div>
         
        <div class="btn-group">
          <button class="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown" 
              aria-expanded="false"
              >
              Small button
          </button>
          <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Rename</a></li>
          <li><a class="dropdown-item" href="#">Share</a></li>
          <li><a class="dropdown-item" href="#">Delete</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}


export default DeckNameCard;

