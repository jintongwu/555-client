const Result = ({result}) => (
    <div className="result_item">
      <p className="result_url">{result.url}</p>
      <a className="result_link" href={result.url} target="_blank">
        <h3>{result.title}</h3>
      </a>
      <p className="result_text">{result.paragraph}...</p>
    </div>     
);

export default Result;