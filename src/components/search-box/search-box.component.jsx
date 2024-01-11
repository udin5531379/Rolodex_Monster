
import './search-box.component.css';

const SearchBox = ({onChangeHandler, placeHolder, className}) => {

    return (
        <input 
      className={`search-box ${className}`}
      placeholder={placeHolder}
      type="text" 
      onChange={onChangeHandler}/>
    )
   }


export default SearchBox