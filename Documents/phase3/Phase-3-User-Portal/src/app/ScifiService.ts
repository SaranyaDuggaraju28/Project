import { Injectable } from '@angular/core';

import { Scifi } from './scifi';

@Injectable()
export class ScifiService {

    private scifis: Scifi[];

    constructor() {    // do the DI for HttpClient step
        this.scifis = [
            { id: '100', name: 'Fall To Earth', price: 1000, photo: 'scifi1.jpg' },
            { id: '101', name: 'Human Again', price: 500, photo: 'scifi2.jpg' },
            { id: '103', name: 'Our Child of the Stars', price: 85000, photo: 'scifi3.jpg' }
        ];
    }

    findAll(): Scifi[] {     //using HttpClient call the get API
        return this.scifis;
    }

    find(id: string): Scifi {
        return this.scifis[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.scifis.length; i++) {
            if (this.scifis[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}