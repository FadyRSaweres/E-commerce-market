import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { IcardProps } from 'src/app/components/card-price/card-price.component';

@Component({
  exportAs: 'HomeComponent',
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  receiveDate(props: IcardProps) {
    console.log(props, 'Data Recived');
  }
  title = 'Hello world';
}
