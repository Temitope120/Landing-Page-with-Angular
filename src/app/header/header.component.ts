import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDisplayed = false;
  toggle() {
    this.isDisplayed = !this.isDisplayed
  }
  constructor() { }

  ngOnInit(): void {
  this.isDisplayed=  true;
  }

}
