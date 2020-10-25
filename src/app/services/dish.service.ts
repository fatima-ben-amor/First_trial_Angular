import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/ dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  getDishes(): Dish[] {
    return DISHES;
  }
    //First update the dish service to return a specific dish, and a featured dish as follows:
    getDish(id: string): Dish {
      return DISHES.filter((dish) => (dish.id === id))[0];
    }
  
    getFeaturedDish(): Dish {
      return DISHES.filter((dish) => dish.featured)[0];
      
    }
  
}
