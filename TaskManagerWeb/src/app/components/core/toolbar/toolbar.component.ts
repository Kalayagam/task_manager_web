import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() columns: any[] = [];
  @Input() hideSearch: boolean = false;
  @Output() sortBy: EventEmitter<any> = new EventEmitter<any>();
  @Output() search: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  sortClick(column) {
    this.sortBy.emit(column.propertyName);
  }

  onSearch(searchText) {
    this.search.emit(searchText);
  }

}
