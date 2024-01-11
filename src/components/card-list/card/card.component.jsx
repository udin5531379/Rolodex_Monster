
import './card.component.css'

const Card = ({monster}) =>  {
        return(
            <div key={monster.id} className="monster-container-item">
                    <img alt={`monsters name is ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set1&size=180x180`} />
                    <h1>{monster.name}</h1>
                    <h2>{monster.email}</h2>
                    <h3>{monster.website}</h3>
            </div>
        )
    }
export default Card