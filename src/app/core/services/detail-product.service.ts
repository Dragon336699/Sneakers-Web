import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailProductService {
  public id !: number;
  constructor() { }

  setId(newId : number){
    this.id = newId;
  }

  getId(){
    return this.id;
  }
}
