import CurrencyExchange from "./service/getCurrency"

//Business Logic
let exchangeCurrency = (from , to) => {
  CurrencyExchange.currencyData(from , to)
    .then((response) => {
      if (response.main) {
        printElements(data);
      } else {
        printError(error);
      } 
    });
}

//UI Logic

const printElements = (data) => {
  document.querySelector('#showData').innerText = `Here's your ${data}`
}

