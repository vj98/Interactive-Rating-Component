let selectedRating = 0;
function selected(item) {
  clear();
  selectedRating = item.innerText;
  item.style.backgroundColor = "hsl(25, 97%, 53%)";
  item.style.color = "hsl(0, 0%, 100%)";
}

function clear() {
  let ratings = document.getElementsByClassName("circle-rating");

  for (let i = 0; i < ratings.length; i++) {
    let item = ratings[i];
    item.style.backgroundColor = "hsl(216, 12%, 8%)";
    item.style.color = "hsl(217, 12%, 63%)";
  }
}

function submitHover(item) {
  if (selectedRating > 0) {
    item.style.backgroundColor = "hsl(0, 0%, 100%)";
    item.style.color = "hsl(25, 97%, 53%)";
  }
}

function submitHoverLeave(item) {
  item.style.backgroundColor = "hsl(25, 97%, 53%)";
  item.style.color = "hsl(0, 0%, 100%)";
}

function submit() {
  let rating = document.getElementById("rating");
  let thankyou = document.getElementById("thank-you");
  rating.style.display = "none";
  thankyou.style.display = "flex";

  let ratingMsg = document.getElementById("rating-msg");
  ratingMsg.innerText = "You selected " + selectedRating + " out of 5";
}
