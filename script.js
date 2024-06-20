"use strict";

const input = document.getElementById("input");
const ul = document.getElementById("ul");

async function getData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
    response.data.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = `${element.name} ${element.surname}`;

      ul.appendChild(li);
    });
  } catch (err) {
    console.log(err);
  }
}

getData();
