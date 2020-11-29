import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private number: number = 24556;
  name: string = "Asiri";

  user = {
    name: "Senith"
  }

  updateValue() {
    this.name = "Manjitha";
    //this.user.name="Aunty";
  }

  get counter() {
    return this.number;
  }

  set counter(_value) {
    this.number = _value;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
