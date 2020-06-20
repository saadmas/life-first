const fetch = require('node-fetch');



const getCovidData = async () => {
  const response = await fetch('https://en.wikipedia.org/wiki/Template:COVID-19_pandemic_data/Pakistan_medical_cases');
  const body = await response.text();
  console.log(body.querySelector('table'));
};

getCovidData();