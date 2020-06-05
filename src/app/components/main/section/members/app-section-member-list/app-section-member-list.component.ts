import { Component, OnInit } from '@angular/core';
import { IMember } from 'src/app/models/imember';
import { EUserGender } from 'src/app/models/euser-gender.enum';

@Component({
  selector: 'app-section-member-list',
  templateUrl: './app-section-member-list.component.html',
  styleUrls: ['./app-section-member-list.component.scss']
})
export class AppSectionMemberListComponent implements OnInit {

  members: Array<IMember> = [];

  constructor() { }

  ngOnInit(): void {
    this.initMembers();
  }

  initMembers(){
    this.members.push({
      id: 1,
      name: 'Jacinto',
      surname: 'Roldán Rodríguez',
      gender: EUserGender.MALE,
      alias: 'Balbino',
      description: 'Admin de la Web',
      pathImage: '../../../../../assets/images/img_login/avatar_male.svg'
    });
    this.members.push({
      id: 2,
      name: 'Rocio',
      surname: 'Boceta Garcia',
      gender: EUserGender.FEMALE,
      alias: 'Petarda',
      description: 'Compañera Ciclo DAW',
      pathImage: '../../../../../assets/images/img_login/avatar_female.svg'
    });
    this.members.push({
      id: 3,
      name: 'Juan Carlos',
      surname: 'Crespo Jimenez',
      gender: EUserGender.MALE,
      alias: 'Juanka',
      description: 'Compeñero de Curro',
      pathImage: '../../../../../assets/images/img_login/avatar_male.svg'
    });
  }

  onEvent(event: any) {
    event.preventDefault();
    event.stopPropagation();
 }

}
