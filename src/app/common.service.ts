import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private data = new BehaviorSubject('');
    currentData = this.data.asObservable();

  constructor() { }

  updateMessage(item: any) {
    this.data.next(item);
}
}
