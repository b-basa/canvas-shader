import { calculateAndDrawNextGrid } from "./src/render.js";
import { ruleCircular, ruleRandom, ruleSquares, userRule } from "./src/rule.js";

export default function main() {
  const canvas: any = document.getElementById("Canvas");
  const ctx: any = canvas.getContext("2d");

  const canvasWidth: number = canvas.width;
  const canvasHeight: number = canvas.height;

  const interval: number = 300;
  // const rule = new ruleCircular(100, canvasWidth, canvasHeight, 0.2);
  // const rule = new ruleSquares(333)
  const rule = new userRule();

  setInterval(() => {
    calculateAndDrawNextGrid(ctx, canvasWidth, canvasHeight, rule);
  }, interval);
}

document.addEventListener("DOMContentLoaded", function () {
  main();
});
