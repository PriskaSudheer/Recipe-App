import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

export class RecipesService {
    recipeSelected=new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
        new Recipe('Salmon curry', 'Lets enter into the world of cooking', 
        'https://4.bp.blogspot.com/_Bsj07jy57o0/S9BRWfbg-vI/AAAAAAAAAEQ/uRhsaQl4RoQ/s1600/fishcurry.JPG,new'),

        new Recipe('Tuna Salad', 'Salads are always best',
         'https://tse4.mm.bing.net/th?id=OIP.CpAZ76XrQFhe4I5X88UqnwHaE7&pid=Api&w=770&h=512&rs=1&p=0')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index:number) {
        return this.recipes[index];
    }
}