import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailProductService {
  public id !: number;
  public content = new Subject<string>();
  constructor() { }

  setId(newId : number){
    this.id = newId;
  }

  setContent(newContent : string){
    this.content.next(newContent);
  }
}
