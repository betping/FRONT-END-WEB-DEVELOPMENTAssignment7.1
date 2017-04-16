import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

   public userList :  any = [
    {name: 'Avnesh Shakya', age: 26, profession: 'Employee'}, 
    {name: 'Adam', age: 30, profession: 'Employee'},
    {name: 'Alan', age: 32, profession: 'Employee'},
    {name: 'Jack', age: 24, profession: 'Employee'},
    {name: 'Karl', age: 38, profession: 'Employee'}
    ]

}
