import  { useEffect, useState } from 'react';
import axios from "axios";
import CardList from './components/CardList';
import "./App.css";
import SearchBox from './components/SearchBox';

 const App = () =>  {

  const [user, setUser] = useState([]);
  const [searchField, setSearchField] = useState('')
  const FilteredUsers = user.filter( user =>
    user.name.toLowerCase().includes(searchField.toLowerCase())
    )


  useEffect( () => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res =>{
        console.log(res);
        setUser(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  } , [])



  return (
    <div className="App">
   <SearchBox handleChange={e => setSearchField(e.target.value)}/>   {/*pass in the function with props into the search components */}
     <CardList users={FilteredUsers}/>  {/* pass in the state as props into cardlist components */}
    </div>
  );
}


export default App

