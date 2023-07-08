import {Component, Input} from '@angular/core';
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() item: any;
  @Input() index: any;
  constructor(public menuService: MenuService) {
  }
}
