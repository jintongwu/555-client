
import { Icon, IconSize, Intent} from "@blueprintjs/core";
const SearchBar = () => (
    <form action="/result" method="get" className="App-search_form">
        <input
            type="text"
            id="header-search"
            placeholder="What's on your mind?"
            name="query" 
            className="App-search_input"
        />
        <button type="submit" className="App-search_click"><Icon icon={"search"} size={IconSize.STANDARD} intent={Intent.PRIMARY} /></button>
    </form>
);

export default SearchBar;