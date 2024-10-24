class Piece {
    #position;
    #color;
    #selected;

    constructor(position, color) {
        this.#position = position;
        this.#color = color;
        this.#selected = false;
    }

    get color() {
        return this.#color;
    }

    get position() {
        return this.#position;
    }

    get selected() {
        return this.#selected;
    }

    set color(newColor) {
        this.#color = newColor;
    }

    set position(newPosition) {
        this.#position = newPosition;
    }

    set selected(selectedState) {
        this.#selected = selectedState;
    }
}

export { Piece }