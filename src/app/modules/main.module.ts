import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdvantagesComponent} from "../components/advantages/advantages.component";
import {NumbersComponent} from "../components/numbers/numbers.component";
import {WorkComponent} from "../components/work/work.component";
import {TeamComponent} from "../components/team/team.component";
import {ProjectsComponent} from "../components/projects/projects.component";
import {FaqComponent} from "../components/faq/faq.component";
import {FooterComponent} from "../components/footer/footer.component";
import {SocialsComponent} from "../components/socials/socials.component";
import {ContactFormComponent} from "../components/contact-form/contact-form.component";
import {ContactInformationComponent} from "../components/contact-information/contact-information.component";
import {InputLineComponent} from "../components/inputs/input-line/input-line.component";
import {InputAreaComponent} from "../components/inputs/input-area/input-area.component";
import {HeaderComponent} from "../components/header/header.component";
import {FeedbackDetailsComponent} from "../dialogs/feedback-details/feedback-details.component";
import {MenuDetailsComponent} from "../dialogs/menu-details/menu-details.component";
import {ScrollDirective} from "../directives/scroll.directive";
import {NumberDirective} from "../directives/number.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const components = [

  AdvantagesComponent,
  NumbersComponent,
  WorkComponent,
  TeamComponent,
  ProjectsComponent,
  FaqComponent,
  FooterComponent,
  SocialsComponent,
  ContactFormComponent,
  ContactInformationComponent,
  InputLineComponent,
  InputAreaComponent,
  HeaderComponent,
  FeedbackDetailsComponent,
  MenuDetailsComponent,
  ScrollDirective,
  NumberDirective
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...components
  ]
})
export class MainModule { }
