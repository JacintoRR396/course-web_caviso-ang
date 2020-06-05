import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: './app-header-search.component.html',
  styleUrls: ['./app-header-search.component.scss']
})

export class AppHeaderSearchComponent implements OnInit {

  valSearch:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchInput(event: any){
      if(event.key == "Enter"){
        console.log(this.valSearch);
      }
  }

  searchBtn(){
      console.log("Buscando datos ...");
  }

}
