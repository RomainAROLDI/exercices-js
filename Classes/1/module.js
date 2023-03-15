import {Square} from "./Square.js";

const container = document.querySelector("div#container");

const square1 = new Square("2288ff", container, 200);
square1.horizontalMove(300);
const square2 = new Square("ff8822", container, 2);
square2.verticalMove(-200);
new Square("dd7711", container);