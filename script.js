"use strict";

const input = document.getElementById("input");
const ul = document.getElementById("ul");

async function getData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    filterFnc(response);
  } catch (err) {
    console.log(err);
  }
}

getData();

function filterFnc(response) {
  response.data.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = `${element.name} ${element.surname}`;
    li.classList.add("li");

    ul.appendChild(li);
    input.addEventListener("keyup", function () {
      if (this.value === "") {
        li.classList.remove("active");
      } else if (
        element.name.toLowerCase().includes(this.value.toLowerCase().trim())
      ) {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  });
}
