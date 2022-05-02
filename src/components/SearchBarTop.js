import { Icon, IconSize, Intent } from "@blueprintjs/core";
const SearchBarTop = ({query}) => (
    <form action="/result" method="get" className="result_form">
        <input
            type="text"
            id="header-search"
            name="query" 
            className="result_input"
            defaultValue={query}
        />
        <button type="submit" className="result_click"><Icon icon={"search"} size={IconSize.STANDARD} intent={Intent.PRIMARY} /></button>
    </form>
);

export default SearchBarTop;