export class Zadania {
    data: string;
    zasoby: [{ id: string; ikona: string; nazwa: string; }];
    bags: [
        {
            nazwa: string;
            osoby: [{ id: string; ikona: string; nazwa: string; }]
        }
    ];
}
