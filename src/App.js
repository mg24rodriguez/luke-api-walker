import React, {useState, useEffect} from "react";
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Search from './components/Search';


function App() {

  const[dropdownValue,setDropdownValue] = useState ('');
  const[inputValue,setInputValue] = useState ();
  const[data,setData] = useState();
  const[error,setError] = useState(false);

  const handleSearch = async () => {

    const response = await fetch (`https://swapi.dev/api/${dropdownValue}/${inputValue}`);
      if (response.status === 200) {
        const data = await response.json();
        setData(data);
        return  setError(false);
      } 
      return setError(true);
  }

  return (
    <div className="App">
          <Navbar />
          <Search 
            dropdownValue = {dropdownValue}
            onDropdownValue = {setDropdownValue}
            onInputValue = {setInputValue}
            handleSearch = {handleSearch}
          />
          <Info data = {data} error = {error}/>
    </div>
  );
}

export default App;
