import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../entities/card.entity';

@Component({
  selector: 'app-visiting-card',
  templateUrl: './visiting-card.component.html',
  styleUrls: ['./visiting-card.component.css'],
})
export class VisitingCardComponent implements OnInit {
  // cardList: Card[];
  card: Card;

  constructor() {
    // this.cardList = new Card();
    this.card = JSON.parse(localStorage.getItem('card'));
    console.log(this.card);
  }

  ngOnInit(): void {}
}
