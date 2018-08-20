import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCKRgjjJs0sXmQLlyUoioGOiidVsz-f_dE",
      authDomain: "books-f49ec.firebaseapp.com",
      databaseURL: "https://books-f49ec.firebaseio.com",
      projectId: "books-f49ec",
      storageBucket: "books-f49ec.appspot.com",
      messagingSenderId: "720169661631"
    };
    firebase.initializeApp(config);
  }
}
