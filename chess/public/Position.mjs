class Position {
    #row;
    #col;
    constructor(row, col) {
        this.#col = col;
        this.#row = row;
    }

    get col() {
        return this.#col;
    }

    get row() {
        return this.#row;
    }

    set col(newCol) {
        this.#col = newCol;
    }

    set row(newRow) {
        this.#row = newRow;
    }
}

export { Position }