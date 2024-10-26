class ApiService {
    // Mock API call
    static getUserInformation() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    [
                        {
                            name: 'Michael',
                            age: 32
                        },
                        {
                            name: 'Jordan',
                            age: 29
                        },
                        {
                            name: 'Alex',
                            age: 27
                        },
                        {
                            name: 'Ruby',
                            age: 32
                        },
                        {
                            name: 'Alyssa',
                            age: 30
                        },
                        {
                            name: 'Tessie',
                            age: 32
                        },
                        {
                            name: 'Patrick',
                            age: 32
                        },
                        {
                            name: 'Zion',
                            age: 23
                        }
                    ]
                )
            }, 1000);
        });
    }
}

export { ApiService }
