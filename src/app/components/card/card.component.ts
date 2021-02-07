import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Card } from '../../entities/card.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  card: Card;

  loginForm: FormGroup;

  constructor(private router: Router) {
    this.card = new Card();

    this.loginForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        // Validators.pattern('^[A-z0-9_-]{8,30}$'),
      ]),
      mobile1: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[6-9][0-9]{9}$'),
      ]),
      mobile2: new FormControl(''),
      landmark: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [
        Validators.required,
        Validators.pattern('^[1-9][0-9]{5}$'),
      ]),
      district: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
    });
  }
  state = new FormControl();
  states: any = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];
  onSubmit() {
    localStorage.setItem('card', JSON.stringify(this.card));
    console.log(this.card);
    this.router.navigate(['/visiting']);
  }

  ngOnInit(): void {}
}
