import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-header-search',
  templateUrl: './app-header-search.component.html',
  styleUrls: ['./app-header-search.component.scss']
})

export class AppHeaderSearchComponent implements OnInit {

  formSearch: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    // $(() => $('[data-toggle="tooltip"]').tooltip() );
  }

  createForm(){
    this.formSearch = this.formBuilder.group({
      valSearch: ['', Validators.compose([
        Validators.required, Validators.minLength(2), Validators.pattern('^[a-zñA-Záéíóú\\s/]{2,}')
      ])]
    });
  }

  searchInput(event: any){
      // if(event.key == "Enter"){
      console.log('Valor:', this.formSearch.controls.valSearch.value);
  }

  searchBtn(){
      console.log('Values:', this.formSearch.value);
      console.log('Invalid:', this.formSearch.controls.valSearch.invalid);
      console.log('Dirty:', this.formSearch.controls.valSearch.dirty);
      if (!this.formSearch.controls.valSearch.invalid && this.formSearch.controls.valSearch.dirty){
        console.log('Buscando datos sobre', this.formSearch.controls.valSearch.value, ' ...');
        this.formSearch.reset();
      }
  }

}
