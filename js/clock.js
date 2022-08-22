const clockEl = document.querySelector(".clock");
const nameEl = document.querySelector("#myName");

const userName = prompt("Lütfen adınızı giriniz:");
nameEl.innerHTML = userName;

function showTime() {
  const timeString = new Date().toLocaleTimeString("tr-TR", {
    timeZone: "Asia/Istanbul",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  clockEl.innerHTML = timeString;
}
window.addEventListener("load", showTime());
setInterval(showTime, 1000);
