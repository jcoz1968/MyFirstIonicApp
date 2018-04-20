import { Component } from '@angular/core';

@Component({
  selector: 'menu-list',
  templateUrl: 'menu-list.html'
})
export class MenuListComponent {

  text: string;

  constructor() {
    console.log('Hello MenuListComponent Component');
    this.text = 'Hello World';
  }

}
