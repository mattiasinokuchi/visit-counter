const display = document.querySelector("span");

function getCount() {
  fetch("/the-count").then(function(response) {
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
