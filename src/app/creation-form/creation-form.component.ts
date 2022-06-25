import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

import { Color } from 'src/color.model';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css'],
})
export class CreationFormComponent implements OnInit {
  @Output() newColour = new EventEmitter<Color>();
  @ViewChild('name', { static: true }) colourNameElm!: ElementRef;
  @ViewChild('code', { static: true }) colourCodeElm!: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  onCreateNewColour() {
    this.newColour.emit(
      new Color(
        this.colourNameElm.nativeElement.value,
        this.colourCodeElm.nativeElement.value
      )
    );
  }
}
