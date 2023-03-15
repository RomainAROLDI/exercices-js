export class Square {

    _backgroundColor;
    _container;
    _minSize;
    _maxSize;
    _className;
    _size;
    _square;

    constructor(backgroundColor, container, size = 20, className = "square") {
        this.backgroundColor = backgroundColor;
        this.minSize = 10;
        this.maxSize = 50;
        this.size = size;
        this.container = container;
        this.className = className;
        this.square = document.createElement("div");
        this.container.append(this.square);
    }


    get backgroundColor() {
        return this._backgroundColor;
    }

    set backgroundColor(backgroundColor) {
        if (backgroundColor[0] !== "#") {
            backgroundColor = "#" + backgroundColor;
        }
        this._backgroundColor = backgroundColor;
    }

    get container() {
        return this._container;
    }

    set container(container) {
        this._container = container;
    }

    get minSize() {
        return this._minSize;
    }

    set minSize(size) {
        this._minSize = size;
    }

    get maxSize() {
        return this._maxSize;
    }

    set maxSize(size) {
        this._maxSize = size;
    }

    get className() {
        return this._className;
    }

    set className(name) {
        this._className = name;
    }

    get size() {
        return this._size;
    }

    set size(size) {
        if (size < this.minSize) {
            size = this.minSize;
        } else if (size > this.maxSize) {
            size = this.maxSize;
        }

        this._size = size;
    }

    get square() {
        return this._square;
    }

    set square(square) {
        square.style.height = this.size + "px";
        square.style.width = this.size + "px";
        square.classList.add(this.className);
        square.style.backgroundColor = this.backgroundColor;
        this._square = square;
    }

    horizontalMove(pixelsNb = 100) {
        const actualPosition = this.square.getBoundingClientRect();
        this.square.style.left = (actualPosition.left + pixelsNb) + "px";
    }

    verticalMove(pixelsNb = 100) {
        const actualPosition = this.square.getBoundingClientRect();
        this.square.style.top = (actualPosition.top - pixelsNb) + "px";
    }
}