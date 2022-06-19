import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-tweet-header-component',
  template: `
    <mat-card-header class="header">
      <div>
        <mat-icon mat-card-avatar svgIcon="profile" class="svg"></mat-icon>
      </div>
      <div>
        <mat-card-title>Nedi</mat-card-title>
        <mat-card-subtitle>@RNTata2000</mat-card-subtitle>
      </div>
    </mat-card-header>
  `,
  styles: [`
    .app-mat-header {
      .mat-tab-header {
        position: fixed;

        }
      .svg {
        margin-right: 10px;
        border-radius: 2rem !important;
      }
      .mat-card-header .mat-card-subtitle {
        font-size: 10px;
      }
    }
  `
  ],
  encapsulation: ViewEncapsulation.None

})

export class TweetHeaderComponent implements OnInit {
  @HostBinding('class') classes = 'app-mat-header';

  constructor() {
  }

  ngOnInit() {
  }
}
