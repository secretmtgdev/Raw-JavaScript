const ROW_COUNT = 8;
const COL_COUNT = 8;
const PIECES_PER_PLAYER = 16;
class BoardManager {
    // Want to be able to modify this global state
    // {Global position -> piece}
    static piecePositions = new Map();

    static lastSelectedPiece = null;

    static get rowCount() {
        return ROW_COUNT;
    }

    static get colCount() {
        return COL_COUNT;
    }

    static get piecesCount() {
        return PIECES_PER_PLAYER;
    }
}

export {
    BoardManager
};