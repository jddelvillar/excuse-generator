/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hola!");
  let excuse = excusegenerate();
  document.write(excuse);
  document.querySelector("#excuse").innerHTML = excuse;
};
function excusegenerate() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  console.log(randomelement(who));
  console.log(randomelement(action));
  console.log(randomelement(what));
  console.log(randomelement(when));
  return (
    randomelement(who) +
    " " +
    randomelement(action) +
    " " +
    randomelement(what) +
    " " +
    randomelement(when)
  );
}
function randomelement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
