import { RGBColor, getRandomInt } from "./util.js";
export { RenderRule, ruleRandom, ruleCircular, userRule };

/**
 *  Rules are excpected to return a value for each pixel on the canvas
 *  rgba values all should be in range 0-255
 *
 * @interface RenderRule - Interface for rules used to color the canvas
 */
interface RenderRule {
  apply_rule(
    x: number,
    y: number,
    canvasW: number,
    canvasH: number,
    counter: number
  ): RGBColor;
}

class userRule implements RenderRule {
  // this is for testing purposes
  apply_rule(
    x: number,
    y: number,
    canvasW: number,
    canvasH: number,
    counter: number
  ): RGBColor {
    // Static colors
    // return new RGBColor(x % 500, y % 500, ((x + y) / 2) % 250, 255);

    // Static colors without borders
    // return new RGBColor(x % 500, 100, y % 500, 255);
    
    // Dynamıc colors without borders
    return new RGBColor(x % 500, counter * 5, y % 500, 255);

    // Static blue shapes
    // return new RGBColor(0, 0, (x * y) % 255, 255);

    // Static blue shapes
    // return new RGBColor(0, 0, (x ^ y) % 250, 255);
  }
}

class ruleRandom implements RenderRule {
  apply_rule(
    x: number,
    y: number,
    canvasW: number,
    canvasH: number,
    counter: number
  ): RGBColor {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);
    const a = getRandomInt(0, 255);
    return new RGBColor(r, g, b, a);
  }
}

class ruleCircular implements RenderRule {
  radius: number;
  tolerance: number;

  constructor(radius: number, tolerance: number) {
    this.radius = radius;
    this.tolerance = tolerance;
  }

  apply_rule(
    x: number,
    y: number,
    canvasW: number,
    canvasH: number,
    counter: number
  ): RGBColor {
    let _x = x - canvasW / 2;
    let _y = y - canvasH / 2;
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
      return new RGBColor(0, 0, 0, 255);
    }
  }
}
