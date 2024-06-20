"use strict";

// https://jsonplaceholder.typicode.com/users

// async function getData() {
//   let response = await axios.get("https://jsonplaceholder.typicode.com/users");
//   console.log(response.data);
// }

// getData();

async function getData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}

getData();
