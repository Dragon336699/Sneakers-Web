import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../core/commonComponent/base.component';
import { CommonService } from '../../../core/services/common.service';
import { catchError, filter, map, of, switchMap, takeUntil, tap } from 'rxjs';
import { OrderService } from '../../../core/services/order.service';
import { InfoOrderDto } from '../../../core/dtos/InfoOrder.dto';
import { ProductDto } from '../../../core/dtos/product.dto';
import { OrderDetailDto } from '../../../core/dtos/OrderDetail.dto';
import { CurrencyPipe,DatePipe,NgSwitch,NgSwitchCase } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss'
})
export class OrderDetailComponent extends BaseComponent implements OnInit {
  public orderInfor!: InfoOrderDto;
  public productOrderd!: OrderDetailDto[];
  public totalMoney: number = 0;
  public shipCost: number = 0;
  public notion!: string;
  public id!: string;

  constructor(
    private commonService: CommonService,
    private orderService: OrderService,
    private activatedRouter: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id') ?? '';
    this.commonService.orderId.pipe(
      switchMap((orderId) => {
        if(this.id == ''){
          this.id = orderId.toString();
        }
        return this.orderService.getOrderInfor(parseInt(this.id)).pipe(
          filter((orderInfor: InfoOrderDto) => !!orderInfor),
          tap((orderInfor: InfoOrderDto) => {
            this.orderInfor = orderInfor;
            this.productOrderd = orderInfor.order_details;
            this.notion = orderInfor.note;
          }),
          tap(() => {
            this.productOrderd.forEach((item) => {
              this.totalMoney += item.price * item.numberOfProducts;
            })
          }),
          catchError((err) => {
            return of(err)
          }),
        )
      }),
      catchError((err) => {
        return of(err)
      }),
    ).subscribe();

    
  }

}
