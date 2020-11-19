import { Injectable } from '@angular/core';

import { Thriller } from './thriller';

@Injectable()
export class ThrillerService {

    private thrillers: Thriller[];

    constructor() {    // do the DI for HttpClient step
        this.thrillers = [
            { id: '100', name: 'The Silent Patient', price: 1000, photo: 'thriller1.jpg' },
            { id: '101', name: 'The Couple Next Door', price: 500, photo: 'thriller2.jpg' },
            { id: '103', name: 'Then She Was Gone', price: 85000, photo: 'thriller3.jpg' }
        ];
    }

    findAll(): Thriller[] {     //using HttpClient call the get API
        return this.thrillers;
    }

    find(id: string): Thriller {
        return this.thrillers[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.thrillers.length; i++) {
            if (this.thrillers[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}