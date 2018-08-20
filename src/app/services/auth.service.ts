import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public createUser(email: string, password: string): Promise<any>{
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
        resolve();
      }, (error) => {
        reject();
      });
    });
  }
  public signInUser(email: string, password: string): Promise<any>{
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
        resolve();
      }, (error) => {
        reject();
      });
    });
  }
  public signOutUser() {
     firebase.auth().signOut();
  }
}
