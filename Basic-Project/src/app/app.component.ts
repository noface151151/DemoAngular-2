import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  onNavigate(featureSelect: string) {
    this.loadedFeature = featureSelect;
  }
  ngOnInit(): void {

    firebase.initializeApp({
      apiKey: 'AIzaSyDRj8s08lbP-WmL-rrZ4goCvW6AYMBMhJQ',
      authDomain: 'recipe-bc088.firebaseapp.com',
    }
    )
  }
}
