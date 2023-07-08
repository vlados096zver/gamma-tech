import { Component } from '@angular/core';
import {emailPattern} from "../../models/commons.model";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  public isSubmitted = false;
  constructor( public fb: FormBuilder) {}
  public formGroupContact = this.fb.group({
    name: [null,Validators.required],
    email: [null, [Validators.required, Validators.pattern(emailPattern)]],
    phone: [null,Validators.required],
    message: [null,Validators.required],
  });

  get c_name(): FormControl {
    return this.formGroupContact.get('name') as FormControl;
  }

  get c_email(): FormControl {
    return this.formGroupContact.get('email') as FormControl;
  }

  get c_phone(): FormControl {
    return this.formGroupContact.get('phone') as FormControl;
  }

  get c_message(): FormControl {
    return this.formGroupContact.get('message') as FormControl;
  }

  clearFormContact() {
    this.c_name.setValue(null);
    this.c_email.setValue(null);
    this.c_phone.setValue(null);
    this.c_email.setValue(null);
    this.c_message.setValue(null);
  }

  sendContact() {
    this.isSubmitted = true;
  }

}
