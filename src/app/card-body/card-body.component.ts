import { Component, OnInit } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'cardBody',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.css']
})
export class CardBodyComponent implements OnInit {
  constructor() { }
  showATMform = true;
  showAmount = false;
  showNotes = false;
  enteredAmount: any;
  notesCount:any = [];
  ngOnInit() {
  }

  cardNumberValue(data: any) {
    //console.log(data)
  }

  cardPinValue(data: any) {
    // console.log(data)
  }
  onSubmitofATMform(data: any) {
    this.showATMform = false;
    this.showAmount = true; 
  } 
  amountTowithdrawal(data: any) {
    //console.log(data)
  }
  onSubmitofAmount(data: any) {
    this.enteredAmount  = data.amount;
    let availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    //let notesCount = [];
    let flag = 0;
    for (var i = 0; i < availableNotes.length; i++) {
      flag = Math.floor(this.enteredAmount / availableNotes[i]);
      if (flag != 0) {
        let key = availableNotes[i];
        let obj = { key: key, value: Math.floor(flag) }
        this.notesCount.push(obj)
      }
      this.enteredAmount = this.enteredAmount % availableNotes[i];
    }
    console.log("data notes:-", this.notesCount);
    this.showNotes = true;
    this.showAmount = false;
  }
}
