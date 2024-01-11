import Card from './card/card.component';

import './card-list.component.css';


const CardList = ({monsters}) =>   {
  return (
    <div className="monster-container-main">
        {monsters.map((item)=>(
            <Card monster = {item} key={item.id}/>
        ))}
    </div>
  )
}

export default CardList;