import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section-member-details',
  templateUrl: './app-section-member-details.component.html',
  styleUrls: ['./app-section-member-details.component.scss']
})
export class AppSectionMemberDetailsComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Details:', this.ruta.snapshot.params.id);
  }

}
