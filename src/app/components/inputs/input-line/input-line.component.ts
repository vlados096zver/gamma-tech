import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-input-line',
  templateUrl: './input-line.component.html',
  styleUrls: ['./input-line.component.scss']
})
export class InputLineComponent {
  @Input() submitted = false;
  @Input() label = '';
  @Input() control = new FormControl(null);
  public id = uuidv4();
}
