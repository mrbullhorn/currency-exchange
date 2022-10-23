import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from "./service/getCurrency";

//Business Logic
let exchangeCurrency = (from , to , howMuch) => {
  CurrencyExchange.currencyData(from , to , howMuch)
    .then((response) => {
      if (response.result === "success") {
        printElements(response);
      } else {
        printError(response);
      }
    });
};

//UI Logic

const printElements = (response) => {
  let inputValue = document.querySelector('#howmuch').value;
  document.querySelector('#showData').innerText = `Your ${inputValue} ${response.base_code} is worth ${response.conversion_result} ${response.target_code}`;
};

const printError = (response) => {
  document.querySelector('#showData').innerText = `There was an error ${response}`;
};

const handleFormSubmisson = (e) => {
  e.preventDefault();
  const inputFrom = document.querySelector('#from').value;
  const inputTo = document.querySelector('#to').value;
  const amount = document.querySelector('#howmuch').value;
  exchangeCurrency(inputFrom , inputTo , amount);
};

window.addEventListener("load" , () => {
  document.querySelector('form').addEventListener("submit", handleFormSubmisson);
});