const item = document.getElementById("item");
const submit = document.getElementById("submit");
const axios = require("axios");
let data;

submit.addEventListener("click", function () {
  data = item.value;
  item.value = "";
  axios.get("/todos").then(function (response) {
    console.log(response);
  });
});
