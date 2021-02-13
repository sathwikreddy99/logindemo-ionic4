import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:string =""
  password:string  = ""  
  constructor(public auth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login(){
    const {username,password} = this
    try {
      const res = await this.auth.signInWithEmailAndPassword(username,password)
    } catch (error) {
      console.dir(error)
    }
  }

}
