import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html' ,
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {
  @Input()
  valor: number=1;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}


