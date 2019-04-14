import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  allTitles: string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
  private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.getTitles().subscribe(data=>{
      //this.allTitles = JSON.stringify(data);
      // let result= <any[]>data;
      // this.allTitles= result;
      this.allTitles = JSON.parse(data);
    },
    err=>{
      console.log(err);
      return false;
    })
  }

}
