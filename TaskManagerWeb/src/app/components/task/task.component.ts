import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 
  mode: string = 'Add'
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.mode = this.route.snapshot.queryParams['mode'] || 'Add';
   }
}
