import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
  
  //how get access to id dish
export class DishdetailComponent implements OnInit {
    
    dish: Dish;

    constructor(private dishservice: DishService,
      private route: ActivatedRoute,
      private location: Location) { }

  //fetch the information about the specefic dish
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }
  goBack(): void {
    this.location.back();
  }
}
