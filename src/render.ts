import { RenderRule } from "./rule.js";
export { calculateAndDrawNextImage, fillCanvas };

/**
 * Uses the given render rule to calculate and draw the next Image
 * This method is more optimized than calculateAndDrawNextGrid
 *
 * @param {*} ctx - Drawing context
 * @param {number} canvasWidth - Width of the canvas
 * @param {number} canvasHeight - Height of the canvas
 * @param {RenderRule} render_rule - Returns pixel colors depending on position
 * @param {counter} number - Can be used in rules to return a different color each frame
 */
function calculateAndDrawNextImage(
  image_data: Uint8ClampedArray,
  canvasWidth: number,
  canvasHeight: number,
  render_rule: RenderRule,
  counter: number
) {
  for (let x = 0; x < canvasWidth; x++) {
    for (let y = 0; y < canvasHeight; y++) {
      let color = render_rule.apply_rule(x, y, canvasWidth, canvasHeight, counter);
      setPixel(
        canvasWidth,
        image_data,
        x,
        y,
        color.red,
        color.green,
        color.blue,
        color.alpha
      );
    }
  }
}

// Function to set pixel data
function setPixel(
  canvas_width: number,
  // canvas_height: number,
  image_data: Uint8ClampedArray,
  x: number,
  y: number,
  r: number,
  g: number,
  b: number,
  a: number
) {
  const index: number = (y * canvas_width + x) * 4;
  image_data[index] = r;
  image_data[index + 1] = g;
  image_data[index + 2] = b;
  image_data[index + 3] = a;
}

/**
 * Fills the whole canvas with a single color
 *
 * @param {number} x - x position (unused)
 * @param {number} y - y position (unused)
 * @param {number} r - red
 * @param {number} g - green
 * @param {number} b - blue
 * @param {number} a - alpha
 * @return {*} - Text representation of rgb to then convert into RGBColor
 */
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
