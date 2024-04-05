import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public intermediateObservable = new Subject<boolean>();
  constructor() { }

}
