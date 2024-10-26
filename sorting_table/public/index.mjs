import { ApiService } from "./ApiService.mjs";

(function() {
    async function populateTable(data) {
        const tableBody = document.querySelector('#data-table tbody');
        tableBody.innerHTML = ''; // Clear the previous contents
        data.forEach(user => {
            const row = document.createElement('tr');
            Object.values(user).forEach(value => {
                const cell = document.createElement('td');
                cell.innerText = value;
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    }

    async function init() {
        const userInfo = await ApiService.getUserInformation();
        await populateTable(userInfo);
    }
    init();
})();
