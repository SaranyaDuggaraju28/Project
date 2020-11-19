import { Injectable } from '@angular/core';

import { Horror } from './horror';

@Injectable()
export class HorrorService {

    private horrors: Horror[];

    constructor() {    // do the DI for HttpClient step
        this.horrors = [
            { id: '100', name: 'I am Watching You', price: 1000, photo: 'book1.jpg' },
            { id: '101', name: 'Intercepts', price: 500, photo: 'book2.jpg' },
            { id: '103', name: 'Dont Scream', price: 85000, photo: 'book3.jpg' }
        ];
    }

    findAll(): Horror[] {     //using HttpClient call the get API
        return this.horrors;
    }

    find(id: string): Horror {
        return this.horrors[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.horrors.length; i++) {
            if (this.horrors[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}