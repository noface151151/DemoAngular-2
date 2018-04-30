import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelect = new EventEmitter<string>();
  constructor(private storageService: DataStorageService) { }

  ngOnInit() {
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
}
