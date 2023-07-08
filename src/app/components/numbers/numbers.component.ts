import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent {
  @Input() item: any;
  @Input() index: any;
}
