import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  private paramPath: string;

  constructor(private route: ActivatedRoute) {
    this.paramPath = route.snapshot.params['path'];
    console.log(this.paramPath);
  }

  ngOnInit() {
  }

}
