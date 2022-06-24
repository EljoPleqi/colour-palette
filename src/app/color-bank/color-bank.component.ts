import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-bank',
  templateUrl: './color-bank.component.html',
  styleUrls: ['./color-bank.component.css'],
})
export class ColorBankComponent implements OnInit {
  colors: String[] = [];
  constructor() {}

  ngOnInit(): void {}
}
