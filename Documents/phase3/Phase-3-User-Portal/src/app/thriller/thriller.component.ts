import { Component, OnInit } from '@angular/core';

import { Thriller } from '../thriller';
import { ThrillerService } from '../ThrillerService';

@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.css']
})
export class ThrillerComponent implements OnInit {

  thrillers: Thriller[];

  constructor(
    private thrillerService: ThrillerService
  ) { }

  ngOnInit(): void {
    console.log(this.thrillerService.findAll())
		this.thrillers = this.thrillerService.findAll();
  }

}
