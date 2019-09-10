import { Component, OnInit } from '@angular/core';
import { PollItem } from '../_models/poll.model';

@Component({
  selector: 'app-page-holder',
  templateUrl: './page-holder.component.html',
  styleUrls: ['./page-holder.component.css']
})
export class PageHolderComponent implements OnInit {
  pollItemCollection: PollItem[] = [
    {
      id: 1,
      title: 'Sofa',
      description: 'Nice comfortable sofas to sit and relax',
      voteCount: 0
    },
    {
      id: 2,
      title: 'Foosball',
      description: 'Lets play and enjoy!',
      voteCount: 0
    },
    {
      id: 3,
      title: 'Gym',
      description: 'Here is the fitness place for you!',
      voteCount: 0
    }
  ];

  constructor() {}

  ngOnInit() {}
}
