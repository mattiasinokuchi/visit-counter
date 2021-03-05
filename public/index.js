const display = document.querySelector("span");

function getCount() {
  fetch("/.netlify/functions/visits-get").then(function(response) {
    return response.json()
  }).then(function(data) {
    display.textContent = data.count;
  });
}

getCount();

document.querySelector("button").addEventListener("click", function(event) {
  event.preventDefault();
  getCount();
});
