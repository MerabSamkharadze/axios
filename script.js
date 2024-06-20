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
    const h1 = document.createElement("h1");
    h1.textContent = ` Server error : ${err}`;
    document.body.appendChild(h1);
  }
}

getData();

function filterFnc(response) {
  response.data.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `${element.name}, <b> UserName: </b> ${element.username}`;
    li.classList.add("li");

    ul.appendChild(li);
    input.addEventListener("keyup", function () {
      if (this.value === "") {
        li.classList.remove("active");
      } else if (
        element.name.toLowerCase().includes(this.value.toLowerCase().trim()) ||
        element.username.toLowerCase().includes(this.value.toLowerCase().trim())
      ) {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  });
}
