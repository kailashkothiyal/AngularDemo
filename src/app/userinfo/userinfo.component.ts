import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {


  username:string;
  userarr=[];
  constructor() { 

    this.username="manish";
    this.userarr=["manish1","manish2","manish3","manish4","manish5"];
  }

  ngOnInit() {
  }

}
