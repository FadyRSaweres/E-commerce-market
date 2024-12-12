import { Component, EventEmitter, Output } from '@angular/core';

export interface IcardProps {
  name: string;
  price: number;
}

@Component({
  selector: 'card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css'],
})
export class CardPriceComponent {
  @Output() dataTransfer = new EventEmitter<IcardProps>();

  handleAddToCart(props: IcardProps) {
    this.dataTransfer.emit(props);
  }
}
