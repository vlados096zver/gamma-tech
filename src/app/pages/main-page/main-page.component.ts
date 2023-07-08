import { Component } from '@angular/core';
import {advantages} from "../../data/advantages";
import {numbers} from "../../data/numbers";
import {work} from "../../data/work";
import {team} from "../../data/team";
import {projects} from "../../data/projects";
import {faq} from "../../data/faq";
import {IProjects, ITeam, IWork, INumbers, IAdvantages, IFaq} from "../../models/data.model";
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  advantages: IAdvantages[] = advantages;
  numbers: INumbers[] = numbers;
  work: IWork[] = work;
  team: ITeam[] = team;
  projects: IProjects[] = projects;
  faq: IFaq[] = faq;
  constructor(public menuService: MenuService) {
  }

  scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
