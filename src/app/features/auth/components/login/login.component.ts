import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseComponent } from '../../../../core/commonComponent/base.component';
import { FormBuilder, FormGroup, Validators, FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CustomRequiredDirective } from '../../../../core/directives/custom-required.directive';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [
    MessageService,
  ]
})
export class LoginComponent extends BaseComponent{
  public loginForm : FormGroup
  constructor(
    private readonly fb : FormBuilder,
    private messageService: MessageService
  ) {
    super();
    this.loginForm = this.fb.group({
      userName: [,CustomRequiredDirective.required],
      password: [,CustomRequiredDirective.required]
    })
  }

  show(){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

}
