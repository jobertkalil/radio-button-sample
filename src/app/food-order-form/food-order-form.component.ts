import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { foodChoices } from 'src/config/food.config';
import {
  IChoice,
  IGenericObject,
  IOrder,
  IRules,
} from '../interfaces/app.interface';

@Component({
  selector: 'app-food-order-form',
  templateUrl: './food-order-form.component.html',
  styleUrls: ['./food-order-form.component.scss'],
})
export class FoodOrderFormComponent implements OnInit {
  confirmed: boolean = false;

  emptyChoice: IChoice = {
    id: '',
    value: '',
  };

  preferences: IChoice[] = [];
  meals: IChoice[] = [];
  sides: IChoice[] = [];

  order: IOrder = {
    preference: this.emptyChoice,
    meal: this.emptyChoice,
    side: this.emptyChoice,
  };

  constructor(public lang: LanguageService) {
    this.lang.setLocale('en');
  }

  ngOnInit() {
    [this.preferences, this.meals, this.sides] = foodChoices.menus;
  }

  changePreference(preference: IChoice) {
    this.order.preference = preference;
    this.order.meal = this.emptyChoice;
    this.order.side = this.emptyChoice;
    this.meals = this.setMenu(preference, foodChoices.menus[1]);
    this.sides = this.setMenu(preference, foodChoices.menus[2]);
  }

  changeMeal(meal: IChoice) {
    this.order.meal = meal;
    this.order.side = this.emptyChoice;
    this.sides = this.setMenu(
      meal,
      this.setMenu(this.order.preference, foodChoices.menus[2])
    );
  }

  changeSide(side: IChoice) {
    this.order.side = side;
  }

  setMenu(choice: IChoice, choices: IChoice[]) {
    if (this.hasDietaryRestriction(choice.id, foodChoices.rules as IRules)) {
      return choices.filter(
        (item) =>
          !(foodChoices.rules as IGenericObject)[choice.id].includes(
            parseInt(item.id)
          )
      );
    } else return choices;
  }

  hasDietaryRestriction(restrictionId: any, restrictionsObject: IRules) {
    return Object.keys(restrictionsObject).includes(restrictionId.toString());
  }

  onSubmit() {
    // Show the Bootstrap dialog on form submission
    this.confirmed = true;
  }

  orderBack() {
    this.confirmed = false;
    this.order = {
      preference: this.emptyChoice,
      meal: this.emptyChoice,
      side: this.emptyChoice,
    };
  }
}
