import { Component, OnInit } from '@angular/core';
import { msg } from '../msgservice';

@Component({
  selector: 'app-dem',
  templateUrl: './dem.component.html',
})
export class DemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  y = '';
  x = new msg();

  changing = (e) => {
    this.y = e.target.value;
    this.x.msgme(this.y);
  }  
}
