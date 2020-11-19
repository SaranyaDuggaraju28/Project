import { Component, OnInit } from '@angular/core';

import { Scifi } from '../scifi';
import { ScifiService } from '../ScifiService';

@Component({
  selector: 'app-sci-fi',
  templateUrl: './sci-fi.component.html',
  styleUrls: ['./sci-fi.component.css']
})
export class ScifiComponent implements OnInit {

  scifis: Scifi[];

  constructor(
    private scifiService: ScifiService
  ) { }

  ngOnInit(): void {
    console.log(this.scifiService.findAll())
		this.scifis = this.scifiService.findAll();
  }

}
