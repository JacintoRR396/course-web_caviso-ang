import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPersonMember } from 'src/app/models/iperson-member';

@Component({
  selector: 'app-section-member-details',
  templateUrl: './app-section-member-details.component.html',
  styleUrls: ['./app-section-member-details.component.scss']
})
export class AppSectionMemberDetailsComponent implements OnInit {

  id: number;
  member: IPersonMember;

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.params.id;
  }

}
