import fetch from "node-fetch";

//URL API a consumir
const apiUrl = "https://swapi.dev/api/people/1";

fetch(apiUrl)
    .then((promiseFetch) => promiseFetch.json())
    .then((response) => {
        console.log(response);
    });