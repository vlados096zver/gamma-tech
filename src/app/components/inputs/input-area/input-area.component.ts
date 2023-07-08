import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {v4 as uuidv4} from "uuid";

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss']
})
export class InputAreaComponent {
  @Input() submitted = false;
  @Input() label = '';
  @Input() control = new FormControl(null);
  public id = uuidv4();
}
