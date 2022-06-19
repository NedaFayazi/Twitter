import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TwitterMaterialModule} from "./twitter-material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import {HttpClientModule} from "@angular/common/http";
import { MAT_TABS_CONFIG } from '@angular/material/tabs';
import {ToolbarsComponent} from "./toolbars/toolbars.component";
import {MainContentComponent} from "./main-content/main-content.component";
import {DialogComponent} from "./dialog/dialog.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {TwitterComponent} from "./twitter.component";
import {TwitterRoutingModule} from "./twitter-routing.module";
import {TweetHeaderComponent} from "./main-content/tweet-header/tweet-header.component";
import {TweetContentComponent} from "./main-content/tweet-content/tweet-content.component";




@NgModule({
  declarations: [
    TwitterComponent,
    ToolbarsComponent,
    MainContentComponent,
    SidenavComponent,
    TweetHeaderComponent,
    TweetContentComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TwitterRoutingModule,
    TwitterMaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [
    { provide: MAT_TABS_CONFIG, useValue: { animationDuration: '0ms' } }
  ]
})
export class TwitterAccountModule { }
