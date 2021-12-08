const midlle = {
  headers: {
    "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
    "x-rapidapi-key": "13151510acmsh62fd268e766c9c7p139129jsn781bd573ca57",
  },
};

const listquotes = {
  method: "GET",
  url: "https://currency-exchange.p.rapidapi.com/listquotes",
};

const exchange = {
  method: "GET",
  url: "https://currency-exchange.p.rapidapi.com/exchange",
  // params: { from: "SGD", to: "MYR", q: "1.0" },
};

export { listquotes, exchange, midlle };
