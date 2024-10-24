import { BoardManager } from "./BoardManager.mjs";
import { Piece } from "./Piece.mjs";
import { Position } from "./Position.mjs";

(function() {
    function handleCellClick(row, col) {
        const dataKey = `(${row}, ${col})`;
        // This piece is already selected
        if (BoardManager.last_selected_piece === dataKey) {
            return;
        }

        // This is an open space, move the location
        if (BoardManager.lastSelectedPiece && !BoardManager.piecePositions.has(dataKey)) {
            const storedPiece = BoardManager.piecePositions.get(BoardManager.lastSelectedPiece);
            storedPiece.position = new Position(row, col);

            // clean up step
            BoardManager.piecePositions.delete(BoardManager.lastSelectedPiece);
            const prevPos = document.querySelector(`[data-position="${BoardManager.lastSelectedPiece}"]`);
            prevPos.classList.remove('selected-player');
            prevPos.style.backgroundColor = 'white';
            BoardManager.lastSelectedPiece = null;

            BoardManager.piecePositions.set(dataKey, storedPiece);
            const curPos = document.querySelector(`[data-position="${dataKey}"]`);
            curPos.classList.add('selected-player');
            curPos.style.backgroundColor = storedPiece.color;
        } else {
            const storedPiece = BoardManager.piecePositions.get(dataKey);
            const currentSelectedPiece = document.querySelector(`[data-position="${dataKey}"]`);
    
            if (BoardManager.lastSelectedPiece !== null) {
                const lastSelectedPiece = document.querySelector(`[data-position="${BoardManager.last_selected_piece}"]`);
                storedPiece.selected = false;
                lastSelectedPiece.classList.remove('selected-player');
            }
    
            BoardManager.lastSelectedPiece = dataKey;
            storedPiece.selected = true;
            currentSelectedPiece.classList.add('selected-player');
        }
    }

    function createCell(row, col) {
        const cellElement = document.createElement('div');
        const dataKey = `(${row}, ${col})`;
        cellElement.className = 'cell';
        cellElement.setAttribute('data-position', dataKey);
        cellElement.addEventListener('click', function() {
            handleCellClick(row, col);
        });
        return cellElement;
    }

    // Create a basic grid
    function createBoard() {
        const gridContainer = document.getElementById('grid-container');
        
        // generate the ROW x HEIGHT grid
        for(let row = 0; row < BoardManager.rowCount; row++) {
            for (let col = 0; col < BoardManager.colCount; col++) {
                const cell = createCell(row, col);
                gridContainer.appendChild(cell);
            }
        }
    }

    function markPlayerPositions(row_offset, color) {
        const rowCount = 2;
        const colCount = parseInt(BoardManager.piecesCount / rowCount);
        for (let row = 0; row < rowCount; row++) {
            for (let col = 0; col < colCount; col++) {
                const adjusted_row = row_offset + row;
                const dataKey = `(${adjusted_row}, ${col})`;
                const cell = document.querySelector(`[data-position="${dataKey}"]`);
                if (cell === null) {
                    continue;
                }

                cell.style.backgroundColor = color;
                const position = new Position(adjusted_row, col);
                const pieceObj = new Piece(position, color);
                BoardManager.piecePositions.set(dataKey, pieceObj);
            }
        }
    }

    function markBoard() {
        // mark the red player pieces
        markPlayerPositions(0, 'red');

        // mark the green player pieces
        markPlayerPositions(BoardManager.rowCount - 2, 'green');
    }

    function init() {
        createBoard();
        markBoard();
    }

    init();
})();