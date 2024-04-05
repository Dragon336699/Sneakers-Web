import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../core/commonComponent/base.component';
import { ProductService } from '../../../core/services/product.service';
import { catchError, filter, of, switchMap, takeUntil, tap } from 'rxjs';
import { ProductsInCartDto } from '../../../core/dtos/productsInCart.dto';
import { ProductFromCartDto } from '../../../core/dtos/ProductFromCart.dto';
import { CurrencyPipe } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ButtonModule } from 'primeng/button';
import { CommonService } from '../../../core/services/common.service';


@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CurrencyPipe,
    InputNumberModule,
    FormsModule,
    KeyFilterModule,
    ButtonModule
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent extends BaseComponent implements OnInit, AfterViewInit {
  public producsInCart : ProductsInCartDto[] = [];
constructor(
  private productService: ProductService,
  private commonService: CommonService
) {
  super();
}
  ngOnInit(): void {
    this.productService.getProductFromCart().pipe(
      filter((product : ProductFromCartDto) => !!product),
      tap((product : ProductFromCartDto) => {
        console.log(product);

        this.producsInCart = product.carts;
      }),
      takeUntil(this.destroyed$),
      catchError((err) => of(err))
    ).subscribe();
  }

  ngAfterViewInit(): void {
    this.commonService.intermediateObservable.pipe(
      switchMap(() => {
        return this.productService.getProductFromCart().pipe(
          filter((product : ProductFromCartDto) => !!product),
          tap((product : ProductFromCartDto) => {
            this.producsInCart = product.carts;
          }),
          takeUntil(this.destroyed$),
          catchError((err) => of(err))
        )
      }),
      takeUntil(this.destroyed$),
      catchError((err) => of(err))
    ).subscribe();
  }

}
