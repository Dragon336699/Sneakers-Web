import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { BaseComponent } from '../../../../core/commonComponent/base.component';
import { FormBuilder, FormGroup, Validators, FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CustomRequiredDirective } from '../../../../core/directives/custom-required.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends BaseComponent{
  public loginForm : FormGroup
  constructor(
    private readonly fb : FormBuilder
  ) {
    super();
    this.loginForm = this.fb.group({
      userName: [,CustomRequiredDirective.required],
      password: [,CustomRequiredDirective.required]
    })
  }

}
