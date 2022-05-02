import logo from '../logo.svg'; 

import SearchBar from "../components/SearchBar"

const SearchPage = function () {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar />
        </header>
    );
  };
  
export default SearchPage;