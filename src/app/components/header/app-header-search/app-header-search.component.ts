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
    // create
    this.formSearch = this.formBuilder.group({
      formSearchValue: ['', Validators.compose([
        Validators.required, Validators.minLength(2), Validators.pattern('^[a-zñA-Záéíóú\\s/]{2,}')
      ])]
    });
    // suscription
    this.formSearch.controls.formSearchValue.valueChanges.subscribe(data => console.log(data));
  }

  searchBtn(){
      console.log('Values:', this.formSearch.value);
      console.log('Invalid:', this.formSearch.controls.formSearchValue.invalid);
      console.log('Dirty:', this.formSearch.controls.formSearchValue.dirty);
      console.log('Touched:', this.formSearch.controls.formSearchValue.touched);
      if (!this.formSearch.controls.formSearchValue.invalid
        && (this.formSearch.controls.formSearchValue.dirty || this.formSearch.controls.formSearchValue.touched)){
        console.log('Buscando datos sobre', this.formSearch.controls.formSearchValue.value, ' ...');
        this.formSearch.reset();
      }
  }

}
