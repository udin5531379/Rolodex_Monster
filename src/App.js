import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {
  const [title, setTitle] = useState('')
  const [searchString, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [updatedFilteredMonsters, setUpdatedFilteredMonsters] = useState([monsters])
  
  console.log('render')

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setTitle(searchFieldString)
  }

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((resolveData) => {
      return resolveData.json()
    }) 
    .then((users) => {
      return setMonsters(users)
    })
  }, [])

  useEffect(() => {
    const updatedMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString)
    })

    setUpdatedFilteredMonsters(updatedMonsters)
  }, [monsters, searchString])

  return(
    <div className='App'>
        <h2>{title}</h2>

        <SearchBox 
        onChangeHandler = {onTitleChange} //everytime there is a change this event gets called
        placeHolder='Write Title' 
        className='monsters-search-box'/>

       <SearchBox 
        onChangeHandler = {onSearchChange} //everytime there is a change this event gets called
        placeHolder='Search' 
        className='monsters-search-box'/>

       <CardList monsters={updatedFilteredMonsters}/>

     </div>
  )
}

export default App;


// class App extends Component {

//   constructor(){
//     super();
//     this.state = {
//       monsters: [], 
//       searchValue: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((resolveData) => {
//       return resolveData.json()
//     }) 
//     .then((users)=> {
//       this.setState(() => {
//         return {monsters: users}
//       }, () => {
//         return this.state.monsters
//       })
//     })
//   }

//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLocaleLowerCase()

//     this.setState(() => {
//      return {searchValue: searchString}
//     })

//   }
  

//   render(){

//     const {monsters, searchValue} = this.state; 
//     const {onSearchChange} = this; 

//     const updatedSearchValue = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchValue)
//     })

//     return <div className='App'>
      
//       <SearchBox onChangeHandler = {onSearchChange} placeHolder='Search' className='monsters-search-box'/>

//       <CardList monsters={updatedSearchValue}/>

//     </div>

//   }

//}

