import { Component } from '@angular/core';
import { Color } from 'src/color.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayForm: boolean = false;

  colourBank: Color[] = [];
  title = 'palleteGenerator';
  onDisplayForm(display: boolean) {
    this.displayForm = display;
  }
  createdNewColour(newColor: Color) {
    this.colourBank.push(newColor);
  }
}
