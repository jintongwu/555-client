import { getErrors } from "./TestData";
const axios = require("axios");
const serverUrl = "http://localhost:45555/search";

export async function getSearchResult(q) {
    let res = null;
    await axios.get(serverUrl, { params: {query : q}}).then((response) => {
        res = response.data;
    }).catch((error) => {
        res = getErrors();
    }); 
    return res;
}