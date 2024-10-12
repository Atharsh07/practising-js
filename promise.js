//classes in javascript a class is a blueprint of an object in javascript that contains properties and methods
class rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width * this.height;
        console.log(area);
    }
    color(){
        console.log("color is " + this.color);
    }
}

const react = new rectangle(10, 20, "red");
const area = react.area();
console.log(area);
const color = react.color();
console.log(color);
