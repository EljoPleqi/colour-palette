import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  display: boolean = false;
  @Output() displayForm = new EventEmitter<boolean>();
  constructor() {}
  onDisplayForm() {
    this.display = !this.display;
    this.displayForm.emit(this.display);
  }
  ngOnInit(): void {}
}
