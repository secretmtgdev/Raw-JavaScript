function sortByColumn(columnIndex) {
    const table = document.getElementById('data-table');
    const rows = Array.from(table.rows).slice(1);
    const sortedRows = rows.sort((firstRow, secondRow) => {
        const firstValue = firstRow.cells[columnIndex].textContent;
        const secondValue = secondRow.cells[columnIndex].textContent;
        
        // check to see if both values are numbers for valid comparison (age)
        if (!isNaN(firstValue) && !isNaN(secondValue)) {
            return firstValue - secondValue;
        }

        return firstValue.localeCompare(secondValue);
    });

    sortedRows.forEach(row => table.tBodies[0].appendChild(row));
};
