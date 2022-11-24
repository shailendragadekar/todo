import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.css']
})
export class InputListComponent implements OnInit {
  inputTask: any = [];
  taskName: string;
  constructor() { }

  ngOnInit(): void {
  }


  AddItem(task: string) {
    this.inputTask.push(task);
    this.taskName = '';
  }
}
