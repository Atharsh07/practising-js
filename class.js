//classes in javascript a class is a blueprint of an object in javascript that contains properties and methods
const fs = require('fs');
class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color;
    }

    area() {
        const area = this.width * this.height;
          return area;
    }

    paint() {
             console.log(`Painting with color ${this.color}`);
    }

 }

 const rect = new Rectangle(2, 4, 'blue');
 const area = rect.area();
 console.log(area)
 rect.paint();
