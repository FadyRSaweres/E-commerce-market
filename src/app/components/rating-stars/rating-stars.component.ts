import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css'],
})
export class RatingStarsComponent {
  @Input() ratingNum: number | undefined;
  starsArray: number[] = [];
  starsGray: number[] = [];

  ngOnInit() {
    this.starsArray = Array(this.ratingNum).fill(0);
    this.starsGray = Array(5 - (this.ratingNum || 0)).fill(0);
  }
}
