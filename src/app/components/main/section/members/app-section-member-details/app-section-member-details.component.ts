import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMember } from 'src/app/models/imember';

@Component({
  selector: 'app-section-member-details',
  templateUrl: './app-section-member-details.component.html',
  styleUrls: ['./app-section-member-details.component.scss']
})
export class AppSectionMemberDetailsComponent implements OnInit {

  id: number;
  member: IMember;

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.params.id;
  }

}
