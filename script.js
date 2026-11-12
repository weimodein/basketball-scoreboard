// Initialize variables
let homeScoreTxt = document.getElementById("home-score");
let guestScoreTxt = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

const homeOneBtn = document.getElementById("home-one-btn");
const homeTwoBtn = document.getElementById("home-two-btn");
const homeThreeBtn = document.getElementById("home-three-btn");

const guestOneBtn = document.getElementById("guest-one-btn");
const guestTwoBtn = document.getElementById("guest-two-btn");
const guestThreeBtn = document.getElementById("guest-three-btn");

// Functions
function plus1home() {
  homeScore++;
  homeScoreTxt.textContent = homeScore;
}

function plus2home() {
  homeScore += 2;
  homeScoreTxt.textContent = homeScore;
}

function plus3home() {
  homeScore += 3;
  homeScoreTxt.textContent = homeScore;
}

function plus1guest() {
  guestScore++;
  guestScoreTxt.textContent = guestScore;
}

function plus2guest() {
  guestScore += 2;
  guestScoreTxt.textContent = guestScore;
}

function plus3guest() {
  guestScore += 3;
  guestScoreTxt.textContent = guestScore;
}

// EventListeners
homeOneBtn.addEventListener("click", plus1home);
homeTwoBtn.addEventListener("click", plus2home);
homeThreeBtn.addEventListener("click", plus3home);

guestOneBtn.addEventListener("click", plus1guest);
guestTwoBtn.addEventListener("click", plus2guest);
guestThreeBtn.addEventListener("click", plus3guest);
