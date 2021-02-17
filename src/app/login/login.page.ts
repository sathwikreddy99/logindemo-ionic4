import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:string =""
  password:string  = ""  
  constructor(public auth: AngularFireAuth, private route : Router) { }

  ngOnInit() {
  }

  async login(){
    const {username,password} = this
    try {
      const res = await this.auth.signInWithEmailAndPassword(username,password)
      console.log(res.user.uid)
      if(res.user.uid!=null){
        this.route.navigate(['/tabs'])
        console.log('in here')
      }

      console.dir('login successful')
    } catch (error) {
      console.dir(error)
    }
  }

}
