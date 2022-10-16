'use strict';
// 1) Circle
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    setCircleRadius(radius) {
        this.radius = radius;
    }

    getCircleRadius() {
        console.log(this.radius);
    }

    getCircleDiameter() {
        console.log(this.radius*2);
    }

    calcCircleArea() {
        console.log(`Area of circle: ${(Math.PI * this.radius**2).toFixed(2)}`);
    }

    calcCircleLength() {
        console.log(`Circle length: ${2*(Math.PI * this.radius).toFixed(2)}`);
    }
}

const circle = new Circle();

circle.setCircleRadius(20);
circle.getCircleRadius();
circle.calcCircleArea();
circle.calcCircleLength();

// 2) Marker
class Marker {
    constructor(color, fullness) {
        this.color = color;
        this.fullness = fullness;
    }

    writeText(str) {
        if (this.fullness <= 0) {
            console.log('You need to reload marker');
        } else {
            const strWithoutSpaces = str.replace(/\s/g,'');
            for (let i = 0; i <= strWithoutSpaces.length; i++) {
                this.fullness -= 0.5;
                if (this.fullness === 0) {
                    return;
                }
            }
            console.log(`%c ${str}`, `background: #222; color: ${this.color}`);
        }
       
    }

    showFulness() {
        console.log(`%c This marker is ${this.fullness} % full`, `color: ${this.color}`);
    }
}

const redMarker = new Marker('red', 100);
const greenMarker = new Marker('green', 60);
redMarker.showFulness();
redMarker.writeText('Alliala  фывф allffdf dddaddf dasdasd');
redMarker.showFulness();
greenMarker.writeText('Lorem smorem alalala ffff pppp dddddsdsds, Lorem smorem alalala ffff pppp dddddsdsds, Lorem smorem alalala ffff pppp dddddsdsds, adadsda');
greenMarker.showFulness();