import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-section-home',
  templateUrl: './app-section-home.component.html',
  styleUrls: ['./app-section-home.component.scss']
})
export class AppSectionHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*$(document).ready(function(){
      let main:any = $('.main-container');
      $(main).css('justify-content','center');

      let aside:any = $('app-aside')[0];
      $(aside).css('display','none');
   });*/
  }

}
