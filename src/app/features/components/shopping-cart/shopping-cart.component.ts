import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../core/commonComponent/base.component';
import { ProductService } from '../../../core/services/product.service';
import { filter, takeUntil, tap } from 'rxjs';
import { ProductsInCartDto } from '../../../core/dtos/productsInCart.dto';
import { ProductFromCartDto } from '../../../core/dtos/ProductFromCart.dto';
import { CurrencyPipe } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { KeyFilterModule } from 'primeng/keyfilter';



@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CurrencyPipe,
    InputNumberModule,
    FormsModule,
    KeyFilterModule
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent extends BaseComponent implements OnInit {
  public producsInCart : ProductsInCartDto[] = [];
constructor(
  private productService : ProductService
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
      takeUntil(this.destroyed$)
    ).subscribe();
  }

}
