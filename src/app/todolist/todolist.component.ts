import { Component, OnInit, Input } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  @Input() todoList: any;
  public isEdit: any = [];
  public changedItem: any = [];
  public readonly componentName = 'Todo';
  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
    this.logger.log(this.componentName);
  }

  removeItem(item: any) {
    this.todoList.splice(item, 1);
  }

  saveItem(index, item) {

    if (this.isEdit[index]) {
      this.todoList[index] = item;
    }
  }


  trackByFn(index: any, item: any) {
    return index;
  }

}
