export default class ApiService {
    _apiBase = `https://www.iport.ru/upload/front/data.json`;

    data = [{
            "title": "Модель",
            "code": "model",
            "config": [{
                    "id": "0",
                    "text": "MacBook Air"
                },
                {
                    "id": "1",
                    "text": "MacBook Pro"
                },
                {
                    "id": "2",
                    "text": "MacBook Pro with Touch Bar"
                }
            ]
        },
        {
            "title": "Цвет",
            "code": "color",
            "config": [{
                    "id": "0",
                    "text": "Silver"
                },
                {
                    "id": "1",
                    "text": "Gold"
                },
                {
                    "id": "2",
                    "text": "Space Gray"
                }
            ]
        },
        {
            "title": "Развмер",
            "code": "size",
            "config": [{
                    "id": "0",
                    "text": "13″"
                },
                {
                    "id": "1",
                    "text": "15″"
                },
                {
                    "id": "2",
                    "text": "16″"
                }
            ]
        },
        {
            "title": "Процессор",
            "code": "processor",
            "config": [{
                    "id": "0",
                    "text": "16-ядерный процессор Intel Xeon W с тактовой частотой 3,5 ГГц, ускорение Turbo Boost до 4,0 ГГц",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                },
                {
                    "id": "1",
                    "text": "14-ядерный процессор Intel Xeon W с тактовой частотой 3,5 ГГц, ускорение Turbo Boost до 4,0 ГГц",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                },
                {
                    "id": "2",
                    "text": "12-ядерный процессор Intel Xeon W с тактовой частотой 3,5 ГГц, ускорение Turbo Boost до 4,0 ГГц",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                },
                {
                    "id": "3",
                    "text": "8-ядерный процессор Intel Xeon W с тактовой частотой 3,5 ГГц, ускорение Turbo Boost до 4,0 ГГц",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                },
                {
                    "id": "4",
                    "text": "6-ядерный процессор Intel Xeon W с тактовой частотой 3,5 ГГц, ускорение Turbo Boost до 4,0 ГГц",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                },
                {
                    "id": "5",
                    "text": "4-ядерный процессор Intel Xeon W с тактовой частотой 3,5 ГГц, ускорение Turbo Boost до 4,0 ГГц",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                },
                {
                    "id": "6",
                    "text": "2-ядерный процессор Intel Xeon W с тактовой частотой 3,5 ГГц, ускорение Turbo Boost до 4,0 ГГц",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                }
            ]
        },
        {
            "title": "Оперативная память",
            "code": "ram",
            "config": [{
                    "id": "0",
                    "text": "32 ГБ (4 модуля по 8 ГБ) памяти DDR4 ECC",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                },
                {
                    "id": "1",
                    "text": "16 ГБ (4 модуля по 8 ГБ) памяти DDR4 ECC",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                },
                {
                    "id": "2",
                    "text": "8 ГБ (4 модуля по 8 ГБ) памяти DDR4 ECC",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                }
            ]
        },
        {
            "title": "Графический процессор",
            "code": "gpu",
            "config": [{
                    "id": "0",
                    "text": "Графический процессор Radeon Pro 580X с 8 ГБ памяти GDDR5",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                },
                {
                    "id": "1",
                    "text": "Графический процессор Radeon Pro 560X с 6 ГБ памяти GDDR5",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                },
                {
                    "id": "2",
                    "text": "Графический процессор Radeon Pro 540X с 4 ГБ памяти GDDR5",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                }
            ]
        },
        {
            "title": "Накопитель",
            "code": "disk",
            "config": [{
                    "id": "0",
                    "text": "SSD‑накопитель ёмкостью 512 ГБ",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                },
                {
                    "id": "1",
                    "text": "SSD‑накопитель ёмкостью 256 ГБ",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                },
                {
                    "id": "2",
                    "text": "SSD‑накопитель ёмкостью 128 ГБ",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                }
            ]
        },
        {
            "title": "Комплект",
            "code": "complect",
            "config": [{
                    "id": "0",
                    "text": "Стандартная установка на стол",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                },
                {
                    "id": "1",
                    "text": "Не cтандартная установка на стол",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                }
            ]
        },
        {
            "title": "Корпус",
            "code": "box",
            "config": [{
                    "id": "0",
                    "text": "Корпус из нержавеющей стали, с ножками",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                },
                {
                    "id": "1",
                    "text": "Корпус из ржавеющей стали, с ножками",
                    "extend": "Возможность подключения модуля 10/100/1000 BASE-T Gigabit Ethernet"
                }
            ]
        },
        {
            "title": "Клавиатура",
            "code": "keyboard",
            "config": [{
                    "id": "0",
                    "text": "Международная английская раскладка",
                    "bundle": true,
                    "extend": "Цвет Space Gray",
                    "add": true
                },
                {
                    "id": "1",
                    "text": "Международная русская раскладка",
                    "bundle": true,
                    "extend": "Цвет Space не Gray",
                    "add": true
                },
                {
                    "id": "2",
                    "text": "Не нужно",
                    "bundle": true,
                    "add": false
                }
            ]
        },
        {
            "title": "Мышь и трекпад",
            "code": "mouse",
            "config": [{
                    "id": "0",
                    "text": "Мышь Magic Mouse 2 и трекпад Magic Trackpad 2",
                    "bundle": true,
                    "extend": "Цвет Space Gray",
                    "add": true
                },
                {
                    "id": "1",
                    "text": "Мышь Magic Mouse 1 и трекпад Magic Trackpad 1",
                    "bundle": true,
                    "extend": "Цвет Space Gray",
                    "add": true
                },
                {
                    "id": "2",
                    "text": "Не нужно",
                    "bundle": true,
                    "add": false
                }
            ]
        }
    ]

    async getResource() {
        const res = await fetch(this._apiBase, {
            mode: 'no-cors'
        });

        console.log(res)
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${this._apiBase}`);
        }
        return await res.json();

    }
}