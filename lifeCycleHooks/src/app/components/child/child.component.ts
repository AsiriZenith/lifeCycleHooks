import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  private myNumber: number;
  @Input() myString: string;

  constructor() { }

  ngDoCheck(): void {

  }

  @Input()
  set myNewNumber(number: number) {
    this.myNumber = number;
  }

  get myNewNumber() {
    return this.myNumber;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const newNumberChange: SimpleChange = changes.myNewNumber;
    console.log("Previous Value-(ng On change)", newNumberChange.previousValue)
    console.log("Current Value-(ng On change)", newNumberChange.currentValue)
    this.myNewNumber = newNumberChange.currentValue
  }

  ngOnInit(): void {
    console.log("Current Value-(ng OnInit)", this.myNumber)
  }

}
