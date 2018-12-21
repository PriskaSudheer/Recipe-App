import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameinputRef: ElementRef;
  @ViewChild('amountInput') amountinputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   
  }
  onAddItem() {
   
    const ingName = this.nameinputRef.nativeElement.value;
    const ingamount = this.amountinputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingamount);
    this.shoppingListService.addIngredient(newIngredient);
    
  }
}
