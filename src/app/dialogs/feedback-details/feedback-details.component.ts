import {Component} from '@angular/core';
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.scss']
})
export class FeedbackDetailsComponent {
  constructor(public menuService: MenuService) {
  }
}
