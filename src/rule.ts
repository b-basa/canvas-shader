import { RGBColor, getRandomInt } from "./util.js";
export { RenderRule, ruleRandom, ruleSquares, ruleCircular, userRule };

interface RenderRule {
  apply_rule(x: number, y: number): RGBColor;
}

class userRule implements RenderRule {
  // this is for testing purposes
  apply_rule(x: number, y: number): RGBColor {
    // return new RGBColor(x % 50, y % 50, (x * y) % 255, 1);
    // return new RGBColor(x % 500, y % 500, ((x + y) / 2) % 250, 1);
    return new RGBColor(0, 0, (x ^ y)  % 250, 1);
    // return new RGBColor((x) % 500, 100, (y) % 500, 1);
  }
}

class ruleRandom implements RenderRule {
  apply_rule(x: number, y: number): RGBColor {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);
    const a = getRandomInt(0, 255);
    return new RGBColor(r, g, b, a);
  }
}

class ruleSquares implements RenderRule {
  limit: number;
  constructor(limit: number) {
    this.limit = limit;
  }
  apply_rule(x: number, y: number): RGBColor {
    if (Math.pow(x, 2) + Math.pow(y, 2) <= this.limit) {
      const r = getRandomInt(0, 255);
      const g = getRandomInt(0, 255);
      const b = getRandomInt(0, 255);
      const a = getRandomInt(0, 255);
      return new RGBColor(r, g, b, a);
    } else {
      const r = 0;
      const g = 0;
      const b = 0;
      const a = 1;
      return new RGBColor(r, g, b, a);
    }
  }
}

class ruleCircular implements RenderRule {
  radius: number;
  canvasW: number;
  canvasH: number;
  tolerance: number;

  constructor(
    radius: number,
    canvasW: number,
    canvasH: number,
    tolerance: number
  ) {
    this.radius = radius;
    this.canvasW = canvasW;
    this.canvasH = canvasH;
    this.tolerance = tolerance;
  }

  apply_rule(x: number, y: number): RGBColor {
    let _x = x - this.canvasW / 2;
    let _y = y - this.canvasH / 2;
    if (
      Math.pow(_x, 2) + Math.pow(_y, 2) <=
        Math.pow(this.radius, 2) * (1 + this.tolerance) &&
      Math.pow(_x, 2) + Math.pow(_y, 2) >=
        Math.pow(this.radius, 2) * (1 - this.tolerance)
    ) {
      const r = getRandomInt(0, 255);
      const g = getRandomInt(0, 255);
      const b = getRandomInt(0, 255);
      const a = getRandomInt(0, 255);
      return new RGBColor(r, g, b, a);
    } else {
      return new RGBColor(0, 0, 0, 1);
    }
  }
}
