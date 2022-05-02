import Result from "./Result"

const SearchResults = function ({results}){
    
    const rows = [];
    for (let i = 0; i < results.length && i < 100; i += 1) {
      rows.push(
        <Result result={results[i]} key={i}/>
      );
    }

    return (
        <div className="result_list">
            <p className="result_count"> Returning the top {results.length} website results!</p>
            {rows}
        </div>
    );
} 

export default SearchResults;