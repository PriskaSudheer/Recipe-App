import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[] =[
  new Recipe('Salmon curry','Lets enter into the world of cooking','https://4.bp.blogspot.com/_Bsj07jy57o0/S9BRWfbg-vI/AAAAAAAAAEQ/uRhsaQl4RoQ/s1600/fishcurry.JPG'),
  new Recipe('Tuna Salad','Salads are always best','https://tse4.mm.bing.net/th?id=OIP.CpAZ76XrQFhe4I5X88UqnwHaE7&pid=Api&w=770&h=512&rs=1&p=0')
];
  constructor() { }

  ngOnInit() {
  }

}
