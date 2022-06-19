import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {Tweet} from "../../../shared/models/tweet";
import {DataService} from "../../../shared/data.service";



@Component({
  selector: 'app-tweet-content',
  templateUrl: './tweet-content.component.html',
  styleUrls: ['./tweet-content.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class TweetContentComponent implements OnInit{
  @HostBinding('class') classes = 'app-tweet-content';
  tweets: Tweet[]

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.tweets= this.service.tweets
  }



}
