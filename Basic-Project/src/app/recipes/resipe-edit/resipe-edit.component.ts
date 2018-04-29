import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resipe-edit',
  templateUrl: './resipe-edit.component.html',
  styleUrls: ['./resipe-edit.component.css']
})
export class ResipeEditComponent implements OnInit {

  id: number;
  isAllowEdit = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.isAllowEdit = params['id'] != null
    })
  }

}
