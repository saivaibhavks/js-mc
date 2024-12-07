const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const start = document.getElementById("start");

console.log("sec", sec);

sec.addEventListener("input", (e) => {
  const val = e.target.value;
  if (val > 60) {
    sec.value = val % 60;
    min.value = Math.floor(val / 60);
  }
});

min.addEventListener("input", (e) => {
  const val = e.target.value;
  if (val > 60) {
    min.value = val % 60;
    hour.value = Math.floor(val / 60);
  }
});

start.addEventListener("click", () => {
  const hourVal = hour.value;
  const minVal = min.value;
  const secVal = sec.value;
  setInterval(() => {
    sec.value = secVal--;
  }, 1000);
});
