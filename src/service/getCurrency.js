export default class CurrencyExchange {
  static currencyData(exchFrom, exchTo , howMuch) {
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${exchFrom}/${exchTo}/${howMuch}`;
    return fetch(url)
      .then((response) => {
        if(!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch((error) => {
        return error;
      })
      .then((data) => {
        return data;
      });
  }
}

