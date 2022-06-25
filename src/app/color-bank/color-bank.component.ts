import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/color.model';

@Component({
  selector: 'app-color-bank',
  templateUrl: './color-bank.component.html',
  styleUrls: ['./color-bank.component.css'],
})
export class ColorBankComponent implements OnInit {
  @Input() colorBank!: Color[];
  constructor() {}

  ngOnInit(): void {}
}
