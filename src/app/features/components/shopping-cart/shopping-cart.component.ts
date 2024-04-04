import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../core/commonComponent/base.component';
import { ProductService } from '../../../core/services/product.service';
import { catchError, debounceTime, filter, of, switchMap, take, takeUntil, tap } from 'rxjs';
import { ProductsInCartDto } from '../../../core/dtos/productsInCart.dto';
import { ProductFromCartDto } from '../../../core/dtos/ProductFromCart.dto';
import { CurrencyPipe } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ButtonModule } from 'primeng/button';
import { CommonService } from '../../../core/services/common.service';
import { PutProductDto } from '../../../core/dtos/PutProductDto.dto';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CurrencyPipe,
    InputNumberModule,
    FormsModule,
    KeyFilterModule,
    ButtonModule,
    ConfirmDialogModule
  ],
  providers:[ConfirmationService],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent extends BaseComponent implements OnInit, AfterViewInit {
  public producsInCart : ProductsInCartDto[] = [];
  public totalCost: number = 0;
  public shipCost: number = 30000;
constructor(
  private productService: ProductService,
  private commonService: CommonService,
  private confirmationService: ConfirmationService
) {
  super();
}
  ngOnInit(): void {
    this.productService.getProductFromCart().pipe(
      filter((product : ProductFromCartDto) => !!product),
      tap((product : ProductFromCartDto) => {
        this.producsInCart = product.carts;
        this.resetTotalCost();
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

  updateProduct(quantity: number, id: number){
    let quantiyTemp;
    let updateProduct!: PutProductDto;
    this.producsInCart.forEach((product) => {
      if (product.id == id){
        if (quantity === 0){
          this.confirm(product.id);
          return;
        } else {
          product.quantity = quantity;
          quantiyTemp = quantity;
          updateProduct = {
            product_id : product.products.id,
            quantity : product.quantity,
            size : product.size
          }
          this.resetTotalCost();
        }
      }
    })

    this.productService.updateProductFromCart(id, updateProduct).pipe(
      takeUntil(this.destroyed$),
      catchError((err) => {
        return of(err);
      })
    ).subscribe();
  }

  confirm(id: number) {
    this.confirmationService.confirm({
        message: 'Bạn chắc chắn muốn bỏ sản phẩm này?',
        header: 'Xác nhận',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon:"none",
        rejectIcon:"none",
        rejectButtonStyleClass:"p-button-text",
        accept: () => {
          this.productService.deleteProductFromCart(id).pipe(
            switchMap(() => {
              return this.productService.getProductFromCart().pipe(
                filter((product : ProductFromCartDto) => !!product),
                tap((product : ProductFromCartDto) => {
                  this.producsInCart = product.carts;
                  this.resetTotalCost();
                }),
                takeUntil(this.destroyed$),
                catchError((err) => of(err))
              );
            }),
            takeUntil(this.destroyed$),
            catchError((err) => {
              return of(err);
            })
          ).subscribe();
        },
        reject: () => {
        }
    });
  }

  resetTotalCost(){
    this.totalCost = 0;
      this.producsInCart.forEach((item) => {
        this.totalCost += item.products.price * item.quantity;
    })
  }

  deleteProduct(id: number){
    this.commonService.intermediateObservable.next(true);
    this.productService.deleteProductFromCart(id).pipe(
      switchMap(() => {
        return this.productService.getProductFromCart().pipe(
          filter((product : ProductFromCartDto) => !!product),
          tap((product : ProductFromCartDto) => {
            this.producsInCart = product.carts;
            this.resetTotalCost();
          }),
          takeUntil(this.destroyed$),
          catchError((err) => of(err))
        );
      }),
      takeUntil(this.destroyed$),
      catchError((err) => {
        return of(err);
      })
    ).subscribe();
  }

}
