import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variable auxiliar para almacenar cada contador
  private temporalValues = [];

  // TOTAL de contadores
  public totalTotal = 0;

  public countValueChanged(total: number, counterIndex: number) {
    console.log('El contador numero ' + counterIndex + ' tiene: ' + total);
    this.temporalValues[counterIndex] = total;
    // this.temporalValues.forEach((value) => {
    //   this.totalTotal = this.totalTotal + value;
    // });
    this.totalTotal = this.temporalValues.reduce((a, b) => {
      return a + b;
    });
  }
}
