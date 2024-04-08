export { setFillStyle, getRandomInt, RGBColor };

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class RGBColor {
  red: number;
  green: number;
  blue: number;
  alpha: number;

  constructor(red: number, green: number, blue: number, alpha: number) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
}

function setFillStyle(ctx: any, color: RGBColor) {
  ctx.fillStyle = `rgba(${color.red},${color.green},${color.blue},${color.alpha})`;
}
