import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-clack',
  templateUrl: './clack.component.html',
  styleUrls: ['./clack.component.css']
})
export class ClackComponent implements OnInit {
  firstNum;
  secondNum;
  operatorChoose;

  @Input() number;
  
  @Output() clickCalck = new EventEmitter<{
    firstNumber: number,
    secondNumber: number,
    operator: string
  }>();

  @Output() clickClean = new EventEmitter<{
    firstNumber: string,
    secondNumber: string,
    operator: string
  }>();
  constructor() { }

  ngOnInit() {
  }
  onButtonClack(){
    this.clickCalck.emit({
      firstNumber:this.firstNum,
      secondNumber: this.secondNum,
      operator: this.operatorChoose 
    });
  }
  onClearButton(){
    this.firstNum ='';
    this.secondNum= '';
    this.operatorChoose='';
    this.clickClean.emit({
      firstNumber: this.firstNum,
      secondNumber: this.secondNum,
      operator: this.operatorChoose
    });
  }
}
