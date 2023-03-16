import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'son-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    change:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
