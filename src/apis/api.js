const api =
  "http://api.exchangeratesapi.io/v1/symbols?access_key=67aa9363109cec5f5f92c5fef55389e2";

const apiHTTPS =
  "https://v6.exchangerate-api.com/v6/c9e7474501fad108d5865bf6/codes";
const midlle = {
  headers: {
    "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
    "x-rapidapi-key": "13151510acmsh62fd268e766c9c7p139129jsn781bd573ca57",
  },
};

const exchange = {
  method: "GET",
  url: "https://currency-exchange.p.rapidapi.com/exchange",
};

export { exchange, midlle, api, apiHTTPS };
