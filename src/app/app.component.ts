import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from 'src/service/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Personal-Portfolio';
  private scrollToSubscription: Subscription = new Subscription();
  constructor(
    private elementRef: ElementRef,
    private scrollService: ScrollService
  ) {}
  ngOnDestroy(): void {
    this.scrollToSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.scrollToSubscription = this.scrollService.scrollTo$.subscribe(
      (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    );
  }
}
