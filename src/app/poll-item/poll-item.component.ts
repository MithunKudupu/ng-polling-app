import { Component, OnInit, Input } from '@angular/core';
import { PollItem } from '../_models/poll.model';

@Component({
  selector: 'app-poll-item',
  templateUrl: './poll-item.component.html',
  styleUrls: ['./poll-item.component.css']
})
export class PollItemComponent implements OnInit {
  @Input() item: PollItem;

  constructor() {}

  ngOnInit() {}
}
