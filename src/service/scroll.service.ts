import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollToSubject = new BehaviorSubject<string>('');
  scrollTo$ = this.scrollToSubject.asObservable();

  constructor() {}

  scrollToElement(elementId: string): void {
    console.log('this was clicked', elementId);
    this.scrollToSubject.next(elementId);
  }
}
