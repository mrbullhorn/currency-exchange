import CurrencyExchange from "./service/getCurrency";

//Business Logic
let exchangeCurrency = (from , to , howMuch) => {
  CurrencyExchange.currencyData(from , to , howMuch)
    .then((response) => {
      if (response.main) {
        printElements();
      } else {
        printError();
      } 
    });
};

//UI Logic

const printElements = (data) => {
  document.querySelector('#showData').innerText = `Here's your ${data}`;
};

const printError = (error) => {
  document.querySelector('#showData').innerText = `There was an error ${error}`;
};

const handleFormSubmisson = (e) => {
  e.preventDefault();
  const inputFrom = document.querySelector('#from').value;
  const inputTo = document.querySelector('#to').value;
  const amount = document.querySelector('#howmuch').value;
  document.querySelector('#from').value = null;
  document.querySelector('#to').value = null;
  document.querySelector('#howmuch').value = null;
  exchangeCurrency(inputFrom , inputTo , amount);
};

window.addEventListener("load" , () => {
  document.querySelector('form').addEventListener("submit", handleFormSubmisson);
});