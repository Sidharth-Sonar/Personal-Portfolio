import { ScrollService } from './../../../service/scroll.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'son-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  change: boolean = false;

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {}

  navigateTo(link: string) {
    this.scrollService.scrollToElement(link);
    console.log('this was clicked', link);
  }
}
