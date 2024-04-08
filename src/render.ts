import { RenderRule } from "./rule.js";
import { setFillStyle } from "./util.js";
export { calculateAndDrawNextGrid, fillPixel, fillCanvas };

function calculateAndDrawNextGrid(
  ctx: any,
  canvasWidth: number,
  canvasHeight: number,
  render_rule: RenderRule
) {
  for (let x = 0; x < canvasWidth; x++) {
    for (let y = 0; y < canvasHeight; y++) {
      let color = render_rule.apply_rule(x, y);
      setFillStyle(ctx, color);
      fillPixel(ctx, x, y);
    }
  }
}

function fillPixel(ctx: any, x: number, y: number) {
  ctx.fillRect(x, y, 1, 1);
}

function fillCanvas(
  x: number,
  y: number,
  r: number,
  g: number,
  b: number,
  a: number
) {
  return `rgb(${r},${g},${b},${a})`;
}
