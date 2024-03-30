import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../core/commonComponent/base.component';
import { ProductService } from '../../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { catchError, filter, of, take, takeUntil, tap } from 'rxjs';
import { ProductDto } from '../../../core/dtos/product.dto';
import { GalleriaModule } from 'primeng/galleria';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [
    GalleriaModule,
    InputNumberModule,
    FormsModule,
    CurrencyPipe,
    ToastModule,
  ],
  providers: [
    MessageService,
    ToastService
  ],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss'
})
export class DetailProductComponent extends BaseComponent implements OnInit {
  private id !: string ;
  public mainProduct !: ProductDto;
  public responsiveOptions : any[] = [];
  public images : {id : number,imageUrl : string}[] = [];
  public quantity : number = 1;
  public sizes : number[] = [36,37,38,39,40,41,42,43,44];
  public size : number = this.sizes[0];

  constructor(
    private productService : ProductService,
    private router : ActivatedRoute,
    private readonly messageService: MessageService,
    private toastService : ToastService
  ) {
    super();
  }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
    ]

    this.id = this.router.snapshot.paramMap.get('id') ?? '1';
    if (this.id != ":id"){
      this.productService.getProductById(this.id).pipe(
        filter((product : ProductDto) => !!product),
        tap((product : ProductDto) => {
          this.mainProduct = product;
          this.images = product.product_images;
        }),
        takeUntil(this.destroyed$)
      ).subscribe();
    }
  }

  addToCart(){
    this.productService.addProductToCart({
      product_id: Number(this.id),
      quantity: this.quantity,
      size:  this.size
    }).pipe(
      tap(() => {
        this.toastService.success("Thêm sản phẩm vào giỏ hàng thành công");
      }),
      catchError((error) => {
        this.toastService.fail("Thêm sản phẩm vào giỏ hàng thất bại");
        return of();
      }),
      takeUntil(this.destroyed$)
    ).subscribe();
  }
}
