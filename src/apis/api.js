const apiSymbols =
  "https://v6.exchangerate-api.com/v6/c9e7474501fad108d5865bf6/codes";
const midlle = {
  headers: {
    "x-rapidapi-host": "currency-converter-by-api-ninjas.p.rapidapi.com",
    "x-rapidapi-key": "13151510acmsh62fd268e766c9c7p139129jsn781bd573ca57",
  },
};

const exchange = {
  method: "GET",
  url: "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency",
};

export { exchange, midlle, apiSymbols };
