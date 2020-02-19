import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-best-food-detail',
  templateUrl: './best-food-detail.component.html',
  styleUrls: ['./best-food-detail.component.scss']
})
export class BestFoodDetailComponent implements OnInit {
  public fromFavListPage: any [];
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(() => {

      if (this.router.getCurrentNavigation().extras.state) {
        this.fromFavListPage = this.router.getCurrentNavigation().extras.state.listNavigation;
        console.log( this.fromFavListPage )
      }
      
      });
   }

   backToHome(){
    this.router.navigate(['']);
   }

  ngOnInit() {
  }

}
