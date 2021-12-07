import axios from "axios";

const apiKey = "f3c2f4b0d112966b99f3";

const api = axios.create({
  baseURL: `https://free.currconv.com/api/v7/currencies?apiKey=ultra&apiKey=f3c2f4b0d112966b99f3`,
});

// Ultra compact, multiple queries.
const apiQueries = axios.create({
  baseURL: `https://free.currconv.com/api/v7/convert?q=`,
});
const apiLastQueries = `&compact=ultra&apiKey=`;

// baseURL: `https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&date=
// laxtBaseURL: &apiKey=
//

// Historical Data (Experimental, Single Date
// https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&date=2021-12-06&apiKey=f3c2f4b0d112966b99f3

// eslint-disable-next-line import/no-anonymous-default-export
export default { api, apiKey, apiQueries, apiLastQueries };
