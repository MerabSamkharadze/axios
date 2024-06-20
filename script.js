"use strict";

// https://jsonplaceholder.typicode.com/users
// let axios = axios.get("https://jsonplaceholder.typicode.com/users");
axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  console.log(response.data);
});
