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
      li.classList.add("li");

      ul.appendChild(li);
      input.addEventListener("keyup", function () {
        if (this.value === "") {
          li.classList.remove("active");
        } else if (element.name.includes(this.value)) {
          li.classList.add("active");
        } else {
          li.classList.remove("active");
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
}

getData();
