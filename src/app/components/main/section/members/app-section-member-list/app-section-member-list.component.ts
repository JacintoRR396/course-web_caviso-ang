import { Component, OnInit } from '@angular/core';
import { PersonMemberService } from 'src/app/services/person-member.service';
import { IPersonMember } from 'src/app/models/iperson-member';

@Component({
  selector: 'app-section-member-list',
  templateUrl: './app-section-member-list.component.html',
  styleUrls: ['./app-section-member-list.component.scss']
})
export class AppSectionMemberListComponent implements OnInit {

  personMembers: Array<IPersonMember> = [];
  personMember: IPersonMember = null;

  constructor(private personMemberService: PersonMemberService) { }

  ngOnInit(): void {
    this.personMembers = this.personMemberService.getPersonMembers();
  }

  onEvent(event: any) {
    event.preventDefault();
    event.stopPropagation();
 }

}
