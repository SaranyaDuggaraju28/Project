import { Component, OnInit } from '@angular/core';

import { Drama } from '../drama';
import { DramaService } from '../DramaService';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.css']
})
export class DramaComponent implements OnInit {

  dramas: Drama[];

  constructor(
    private dramaService: DramaService
  ) { }

  ngOnInit(): void {
    console.log(this.dramaService.findAll())
		this.dramas = this.dramaService.findAll();
  }

}
