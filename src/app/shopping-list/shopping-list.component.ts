import { Component, OnInit } from '@angular/core';
import {Ingredient}from '../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [
    new Ingredient('Salmon fish',1),
    new Ingredient('Tuna fish',2),
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
