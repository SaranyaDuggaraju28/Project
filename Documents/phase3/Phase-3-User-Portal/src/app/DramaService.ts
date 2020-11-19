import { Injectable } from '@angular/core';

import { Drama } from './drama';

@Injectable()
export class DramaService {

    private dramas: Drama[];

    constructor() {    // do the DI for HttpClient step
        this.dramas = [
            { id: '100', name: 'Before We were yours', price: 1000, photo: 'drama1.jpg' },
            { id: '101', name: 'The Silent Wife', price: 500, photo: 'drama2.jpg' },
            { id: '103', name: 'Where the forest Meets the Stars', price: 85000, photo: 'drama3.jpg' }
        ];
    }

    findAll(): Drama[] {     //using HttpClient call the get API
        return this.dramas;
    }

    find(id: string): Drama {
        return this.dramas[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.dramas.length; i++) {
            if (this.dramas[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}