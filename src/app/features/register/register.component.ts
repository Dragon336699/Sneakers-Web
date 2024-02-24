import { AfterViewInit, Component } from '@angular/core';
import { BaseComponent } from '../../core/commonComponent/base.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomRequiredDirective } from '../../core/directives/custom-required.directive';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { ToastService } from '../../core/services/toast.service';
import { ToastModule } from 'primeng/toast';
import { Subject, filter } from 'rxjs';
import { PasswordModule } from 'primeng/password';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    RouterModule,
    InputTextModule,
    ToastModule,
    PasswordModule
  ],
  providers: [
    MessageService,
    ToastService
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent extends BaseComponent implements AfterViewInit {
  public registerForm : FormGroup;
  public formGroupSubmitSubject = new Subject<void>();
  public formGroup$ = this.formGroupSubmitSubject.asObservable();
  constructor(
    private readonly fb : FormBuilder,
    private readonly toastService : ToastService
  ) {
    super();
    this.registerForm = this.fb.group({
      phoneNumber: [,Validators.required],
      password: [,Validators.required],
      retypePassword: [,Validators.required],
      fullName: [,Validators.required],
      date: [,Validators.required],
      address: [,Validators.required],
    })
  }

  ngAfterViewInit(): void {
      this.formGroup$.pipe(
        filter(() => {
          if (this.registerForm.invalid){
            this.toastService.fail("Vui lòng kiểm tra lại thông tin");
            return false;
          } else if (this.registerForm.value.password != this.registerForm.value.retypePassword){
            this.toastService.fail("Mật khẩu chưa khớp với nhau, vui lòng kiểm tra lại");
            return false;
          }
          return true;
        })
      ).subscribe();
  }
}
