import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../Login/login';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

    constructor(public navCtrl: NavController) {}

    navigateToProfile(){
      console.log("Navigating...");
  
      this.navCtrl.push(ProfilePage);
    }
  
  }
