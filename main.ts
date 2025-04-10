import { calculateAndDrawNextImage } from "./src/render.js";
import { ruleCircular, ruleRandom, userRule } from "./src/rule.js";

export default function main() {
  const canvas: any = document.getElementById("Canvas");
  const ctx: any = canvas.getContext("2d");

  const canvasWidth: number = canvas.width;
  const canvasHeight: number = canvas.height;

  const imageData = ctx.createImageData(canvasWidth, canvasHeight);
  let data = imageData.data;

  // Draw interval in milliseconds
  const interval: number = 100;
  // Possible frame variations for rules
  const variations: number = 50;

  // MODIFY THE RULE TO CHANGE THE VISUAL
  // const rule = new ruleCircular(canvasWidth / 4, 0.2);
  // const rule = new ruleRandom();
  let rule = new userRule(0);

  let counter: number = 0;

  // Reference the dropdown from the HTML
  const dropdown = document.getElementById("ruleSelector") as HTMLSelectElement;

  // Update the rule when the dropdown value changes
  dropdown.addEventListener("change", (event) => {
    const selectedIndex = parseInt((event.target as HTMLSelectElement).value, 10);
    rule = new userRule(selectedIndex);
  });

  // Main rendering loop
  setInterval(() => {
    if (counter >= 1) {
      counter = 0;
    }
    counter += 1 / variations;
    calculateAndDrawNextImage(data, canvasWidth, canvasHeight, rule, counter);
    ctx.putImageData(imageData, 0, 0);
  }, interval);
}

document.addEventListener("DOMContentLoaded", function () {
  main();
});
