import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
    <h1>Counter: {{ counter }}</h1>
    <button (click)="incrementBy(1)"> +1 </button>
    <button (click)="reset()">Reset</button>
    <button (click)="decresedBy(1)"> -1 </button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  incrementBy( value: number ):void {
    this.counter += 1;
  }

  reset(): void {
    this.counter = 10;
  }

  decresedBy( value: number ): void {
    this.counter-= 1;
  }
}
