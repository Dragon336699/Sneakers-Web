import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { BaseComponent } from '../../../core/commonComponent/base.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';


@Component({
  selector: 'app-upload-product',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule,
    FileUploadModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule
  ],
  templateUrl: './upload-product.component.html',
  styleUrl: './upload-product.component.scss'
})
export class UploadProductComponent extends BaseComponent {
  public productForm: FormGroup;
  private myFiles: File[] = [];

  constructor(
    private readonly fb: FormBuilder,
  ) {
    super();
    this.productForm = this.fb.group({
      productName: [, Validators.required],
      description: [, Validators.required],
      price:[, Validators.required],
      discount: [, Validators.required]
    })
  }

  onUpload(event: any){
    this.myFiles = event.files;
  }
}
