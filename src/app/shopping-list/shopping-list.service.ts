import { Ingredient } from '../Shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService{
    ingredientChanged=new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Salmon fish', 1),
        new Ingredient('Tuna fish', 2),
 ];

 getIngredients(){
     return this.ingredients.slice();
 }

 addIngredient(ingredient:Ingredient){
this.ingredients.push(ingredient);
this.ingredientChanged.emit(this.ingredients.slice());
 }
}