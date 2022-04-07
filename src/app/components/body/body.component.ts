import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public ugis:number = 100;
  public svoris:number = 90;
  public kmi:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuoti(){
    this.kmi = this.svoris / (this.ugis/100)**2;
  }

}
