import logo from '../logo.svg'; 
import load from '../loading.gif'; 
import { useEffect, useState } from "react";
import SearchBarTop from "../components/SearchBarTop"
import SearchResults from "../components/SearchResults"
import { getSearchResult } from "../data/GetSearchResult";
import { useLocation } from "react-router-dom";

const ResultPage = function (props) {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetched, setFecthed] = useState(false);

  // get query string
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const q = params.get('query').toString(); // bar
  
  useEffect(() => {
    if (fetched !== true) {
      setFecthed(true);
      getSearchResult(q).then((res) => {
        setResults(res);
        setLoading(false);
      });
    }
  }, [])

  return (
    <header className="result-header">
      <div className="result-top-bar">
        <a href="/">
          <img src={logo} className="result_logo" alt="logo" />
        </a>
        <SearchBarTop query={q}/>
      </div>
      {/* <hr className="divider"></hr> */}
      {!loading ? <SearchResults results={results}/> : 
      <div id="result_loading"><img src={load} id="load_pic"  alt="loading" /></div>
      }
      
    </header>
  );
};
  
export default ResultPage;