export class Zadania {
    data: string;
    zasoby: [{ id: string, nazwa: string }];
    bags: [
        {
            nazwa: string;
            osoby: [{ id: string, nazwa: string }]
        }
    ];
}
