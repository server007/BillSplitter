import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profilesService';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  
  closeEyeImageUrl="../../../assets/closedEye.png"
  openEyeImageUrl="../../../assets/openEye.png"


  profilesList:any[]=[
    {
      "id": 1,
      "name": "Gaurav Pal",
      "balance": 200,
      "image": "../../../assets/random_pic.jpg",
      "isShown": false,
      "eyeImageUrl":"../../../assets/openEye.png"
    },
    {
      "id": 2,
      "name": "Saurabh Singh",
      "balance": -100,
      "image": "../../../assets/random_pic.jpg",
      "isShown": false,
      "eyeImageUrl":"../../../assets/openEye.png"
    },
    {
      "id": 3,
      "name": "Hari",
      "balance": 100,
      "image": "../../../assets/random_pic.jpg",
      "isShown": false,
      "eyeImageUrl":"../../../assets/openEye.png"
    },
    {
      "id": 4,
      "name": "Sheelu",
      "balance": -300,
      "image": "../../../assets/random_pic.jpg",
      "isShown": false,
      "eyeImageUrl":"../../../assets/openEye.png"
    },
    {
      "id": 5,
      "name": "Aman",
      "balance": -700,
      "image": "../../../assets/random_pic.jpg",
      "isShown": false,
      "eyeImageUrl":"../../../assets/openEye.png"
    },
    {
      "id": 6,
      "name": "Gaurav Pal",
      "balance": 200,
      "image": "../../../assets/random_pic.jpg",
      "isShown": false,
      "eyeImageUrl":"../../../assets/openEye.png"
    },
    {
      "id": 7,
      "name": "Saurabh Singh",
      "balance": 100,
      "image": "../../../assets/random_pic.jpg",
      "isShown": false,
      "eyeImageUrl":"../../../assets/openEye.png"
    },
    {
      "id": 8,
      "name": "Hari",
      "balance": -100,
      "image": "../../../assets/random_pic.jpg",
      "isShown": false,
      "eyeImageUrl":"../../../assets/openEye.png"
    },
    {
      "id": 9,
      "name": "Gaurav Pal",
      "balance": 200,
      "image": "../../../assets/random_pic.jpg",
      "isShown": false,
      "eyeImageUrl":"../../../assets/openEye.png"
    },
    {
      "id": 10,
      "name": "Saurabh Singh",
      "balance": 100,
      "image": "../../../assets/random_pic.jpg",
      "isShown": false,
      "eyeImageUrl":"../../../assets/openEye.png"
    },
    {
      "id": 11,
      "name": "Hari",
      "balance": 100,
      "image": "../../../assets/random_pic.jpg",
      "isShown": false,
      "eyeImageUrl":"../../../assets/openEye.png"
    }
  ];

  groupList:any[]=[
    {
      "id": 1,
      "name": "Room Rent",
      "balance": 200,
      "splitBetween": []
    },
    {
      "id": 2,
      "name": "shopping",
      "balance": 200,
      "splitBetween": []
    },
    {
      "id": 3,
      "name": "office fare",
      "balance": 200,
      "splitBetween": []
    }
  ];

  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    
    // this.profilesList=this.profileService.profileList
  }

  toggleShow(receivedId) {
    var indexOfReceived=this.profilesList.findIndex(element => element.id==receivedId)
    var personClicked=this.profilesList[indexOfReceived]
    personClicked.isShown=!personClicked.isShown;
    if(personClicked.eyeImageUrl==this.closeEyeImageUrl){
      personClicked.eyeImageUrl=this.openEyeImageUrl
    }
    else{
      personClicked.eyeImageUrl=this.closeEyeImageUrl
    }
  }

}
