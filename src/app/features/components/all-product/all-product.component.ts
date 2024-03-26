import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../core/commonComponent/base.component';
import { ProductService } from '../../../core/services/product.service';
import { filter, takeUntil, tap } from 'rxjs';
import { ProductDto } from '../../../core/dtos/product.dto';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { MenuItem } from 'primeng/api';
import { FormsModule } from "@angular/forms"; 

@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [
    DataViewModule,
    DropdownModule,
    FormsModule,
  ],
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.scss'
})
export class AllProductComponent extends BaseComponent implements OnInit{
  public products : ProductDto[] = [];
  public sortOptions : MenuItem[] = [];
  public sortOrder!: number;
  public sortField!: string;
  
  constructor(
    private productService : ProductService
  ) {
    super();
  }

  ngOnInit(): void {
      this.sortOptions = [
        {label : 'Giá từ thấp đến cao' , value: 'price'},
        {label : 'Giá từ cao đến thấp' , value: '!price'},
      ]
      this.productService.getAllProduct().pipe(
        filter((product : { products: ProductDto[], totalPage: number }) => !!product),
        tap((product : { products: ProductDto[], totalPage: number }) => {
          this.products = product.products;
        }),
        takeUntil(this.destroyed$)
      ).subscribe()
  }

  onSortChange(event : any){
    let value = event.value;
    if (value.indexOf("!") === 0){
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
    
  }
}
