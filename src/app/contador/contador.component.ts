import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  @Output() totalChanged: EventEmitter<number> = new EventEmitter();
  @Input() opened: boolean = false;

  public total: number = 0;

  constructor() { }

  ngOnInit() {
  }

  public addPeople(num: number) {
    if (this.opened) {
      this.total = this.total + num;
      this.totalChanged.next(this.total);
    } else {
      alert('Esta puerta está cerrada');
    }
  }

}
