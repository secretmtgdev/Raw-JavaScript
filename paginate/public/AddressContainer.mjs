import { AddressApiService } from "./AddressApiService.mjs";
class AddressContainer {
    constructor() {
        this.currentPage = 1;
        this.limitPerPage = 5;
        this.pageMap = new Map();
        this.totalPages = 0;
        this.init();
    }

    async setAddressData() {
        const table = document.querySelector('#pagination-table');
        this.body = table.querySelector('tbody');
        const addresses = await AddressApiService.getAddresses();
        this.totalPages = addresses.length ? parseInt(addresses.length / this.limitPerPage) : 1;
        for (let i = 0; i < addresses.length; i++) {
            const page = i + 1;
            const curAddresses = [];
            for (let j = 0; j < this.limitPerPage; j++) {
                curAddresses.push(addresses[5 * i + j]);
            }

            this.pageMap.set(page, curAddresses);
        }
        this.loadAddresses();
    }

    setupButtons() {
        const prevButton = document.querySelector('#prev-button');
        this.prevButtonRef = prevButton;
        if (this.totalPages > 1) {
            prevButton.addEventListener('click', () => this.previousPage());
        }
        
        prevButton.disabled = true;
        const nextButton = document.querySelector('#next-button');
        this.nextButtonRef = nextButton;
        if (this.totalPages > 1) {
            nextButton.addEventListener('click', () => this.nextPage());
        } else {
            nextButton.disabled = true;
        }
    }

    async init() {
        await this.setAddressData();
        this.setupButtons();
    }

    getAddressDetailsNode(address) {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.innerText = address.name;
        const tdStreet = document.createElement('td');
        tdStreet.innerText = address.street;
        const tdCity = document.createElement('td');
        tdCity.innerText = `${address.city}, ${address.state}, ${address.zip}`;
        const tdCountry = document.createElement('td');
        tdCountry.innerText = address.country;
        tr.appendChild(tdName);
        tr.appendChild(tdStreet);
        tr.appendChild(tdCity);
        tr.appendChild(tdCountry);
        return tr;
    }

    loadAddresses() {
        this.body.innerHTML = '';
        const addressData = this.pageMap.get(this.currentPage);
        for (const address of addressData) {
            this.body.appendChild(this.getAddressDetailsNode(address));
        }
        
        const currentPageSpan = document.querySelector('#current-page');
        currentPageSpan.innerText = `Current Page: ${this.currentPage}`;
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.loadAddresses();

            if (this.nextButtonRef.disabled) {
                this.nextButtonRef.disabled = false;
            }

            // If the page is the first, we should disable the button
            if (this.currentPage == 1) {
                this.prevButtonRef.disabled = true;
            }
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.loadAddresses();

            if (this.prevButtonRef.disabled) {
                this.prevButtonRef.disabled = false;
            }
            
            // If this is the last page, disable the button
            if (this.currentPage == this.totalPages) {
                this.nextButtonRef.disabled = true;
            }
        }
    }
}

export { AddressContainer }
