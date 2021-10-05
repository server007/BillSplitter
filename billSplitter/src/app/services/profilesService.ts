import { Injectable } from "@angular/core";
import { Profile } from "../dataModel/profile";

@Injectable({
    providedIn: 'root'
  })

export class ProfileService {
    newProfile=new Profile();
    profileList:[]

}