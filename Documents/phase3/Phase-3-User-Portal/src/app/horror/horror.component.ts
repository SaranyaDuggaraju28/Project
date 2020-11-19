import { Component, OnInit } from '@angular/core';

import { Horror } from '../horror';
import { HorrorService } from '../HorrorService';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.css']
})
export class HorrorComponent implements OnInit {

  horrors: Horror[];

  constructor(
    private horrorService: HorrorService
  ) { }

  ngOnInit(): void {
    console.log(this.horrorService.findAll())
		this.horrors = this.horrorService.findAll();
  }

}
