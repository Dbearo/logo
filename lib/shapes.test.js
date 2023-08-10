
const { Triangle, Square, Circle } = require('../lib/shapes.js');

const triangle = new Triangle();
const square = new Square();
const circle = new Circle();

describe("Triangle test", () => {
    it("Should change to the color blue", () => {
        triangle.setColor("blue");
   
      expect(triangle.render()).toEqual(
        `<polygon points="150, 1   250, 182   50, 182"  fill="blue" />`
      );
    });
  });


  describe("Circle test", () => {
    it("Should change to the color red", () => {
        circle.setColor("red");
   
      expect(circle.render()).toEqual(
        `<circle cx="150" cy="115" r="80" fill="red" />`
      );
    });
  });

  describe("Square test", () => {
    it("Should change to the color purple", () => {
        square.setColor("purple");
   
      expect(square.render()).toEqual(
        `<rect x="73" y="25" width="160" height="160" fill="purple" />`
      );
    });
  });