import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dado-component',
  templateUrl: './dado-component.component.html',
  styleUrls: ['./dado-component.component.scss']
})
export class DadoComponentComponent {
  @Input()valor:number=6;
  constructor() { }
  ngOnInit(){
  }
}
