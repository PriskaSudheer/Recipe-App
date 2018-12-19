import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput')nameinputRef:ElementRef;
 @ViewChild('amountInput')amountinputRef:ElementRef;
 @Output() ingredientAdded=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem() {
    debugger;
    const ingName=this.nameinputRef.nativeElement.value;
    const ingamount=this.amountinputRef.nativeElement.value;
    const newIngredient=new Ingredient(ingName,ingamount);
   this.ingredientAdded.emit(newIngredient);

  }
}
