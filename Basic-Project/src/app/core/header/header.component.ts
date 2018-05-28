import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers'
import * as fromAuth from '../../auth/store/auth.reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;
  @Output() featureSelect = new EventEmitter<string>();
  constructor(private storageService: DataStorageService, private authService: AuthService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth')
  }
  onSaveData() {
    this.storageService.storeRecipes().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error)
      }
    );
  }
  onFetchData() {
    this.storageService.getRecipes();
  }
  onLogout() {
    this.authService.logOut();
  }
}
