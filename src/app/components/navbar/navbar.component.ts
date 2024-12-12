import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})
export class Navbar {
  cat: boolean = false;

  handleOpenCategories() {
    console.log('Loged');
    this.cat = !this.cat;
  }
}
