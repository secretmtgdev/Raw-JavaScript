class AddressApiService {
    static getAddresses = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {
                        "name": "Shannon",
                        "street": "Random address",
                        "city": "Bellevue",
                        "state": "WA",
                        "zip": 98023,
                        "country": "US"
                    },
                    {
                        "name": "Laurie",
                        "street": "Random address",
                        "city": "Bothell",
                        "state": "WA",
                        "zip": 98012,
                        "country": "US"
                    },
                    {
                        "name": "Cho",
                        "street": "Random address",
                        "city": "Bothell",
                        "state": "WA",
                        "zip": 98077,
                        "country": "US"
                    },
                    {
                        "name": "Sam",
                        "street": "Random address",
                        "city": "Lynnwood",
                        "state": "WA",
                        "zip": 98012,
                        "country": "US"
                    },
                    {
                        "name": "Andre",
                        "street": "Random address",
                        "city": "Issaquah",
                        "state": "WA",
                        "zip": 98077,
                        "country": "US"
                    },
                    {
                        "name": "Alex",
                        "street": "Random address",
                        "city": "Bothell",
                        "state": "WA",
                        "zip": 98011,
                        "country": "US"
                    },
                    {
                        "name": "Ruby",
                        "street": "Random address",
                        "city": "Bothell",
                        "state": "WA",
                        "zip": 98012,
                        "country": "US"
                    },
                    {
                        "name": "Natalie",
                        "street": "Random address",
                        "city": "Kenmore",
                        "state": "WA",
                        "zip": 98012,
                        "country": "US"
                    },
                    {
                        "name": "Taylor",
                        "street": "Random address",
                        "city": "Kirkland",
                        "state": "WA",
                        "zip": 98012,
                        "country": "US"
                    },
                    {
                        "name": "Jacob",
                        "street": "Random address",
                        "city": "Bothell",
                        "state": "WA",
                        "zip": 98011,
                        "country": "US"
                    },
                    {
                        "name": "Jade",
                        "street": "Random address",
                        "city": "Bothell",
                        "state": "WA",
                        "zip": 98011,
                        "country": "US"
                    }
                ])
            }, 1000);
        });
    }
}

export { AddressApiService }