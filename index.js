const inquirer = require("inquirer");
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes.js');
class Shapes {
    constructor(shape, shapeColor, text, textColor) {
        this.shape = shape
        this.sC = shapeColor
        this.text = text
        this.tC = textColor
    }

}
const triangle = new Triangle();
const square = new Square();
const circle = new Circle();



inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your logo to be?',
            choices: ['Square', "Circle", "Triangle"],
        },
        {
            type: 'input',
            name: 'sC',
            message: 'What color would you like the shape?',
            validate: sCInput => {
                if (sCInput) {
                    return true;
                } else {
                    console.log('Please enter a color!!!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'text',
            message: 'please enter text for your logo: (three charicters or less)',
            validate: textInput => {
                if (textInput.length > 3) {
                    console.log('   Text is too long!!!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'tC',
            message: 'What color would you like the text?',
            validate: sCInput => {
                if (sCInput) {
                    return true;
                } else {
                    console.log('  Please enter a color!!!');
                    return false;
                }
            }
        },
    ])
    .then(answers => {
        console.log(`Hello, ${answers.text}!`);
        module.exports = new Shapes(answers.shape, answers.sC, answers.text, answers.tC);
        logo = new Shapes(answers.shape, answers.sC, answers.text, answers.tC);
        fs.writeFile("logo.svg", makeShape(), (err) => {
            if (err) {
                console.error('Error creating file:', err);
                return;
            }
            
        });

    });



function checkShape(shape) {
    if (shape === 'Circle') {
        circle.setColor(logo.sC);
        return circle.render();
    } else if (shape === 'Square') {
        square.setColor(logo.sC);
        return square.render();
    } else if (shape === 'Triangle') {
        triangle.setColor(logo.sC);
        return triangle.render();
    }
}
function makeShape() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
       ${checkShape(logo.shape)}
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logo.tC}">${logo.text}</text>
      
      </svg>`
}

