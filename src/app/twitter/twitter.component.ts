import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-twitter',
  template: `
    <app-sidenav></app-sidenav>
  `,
  styles: [
  ]
})
export class TwitterComponent implements OnInit {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/images/twitter.svg'))
  }

  ngOnInit(): void {

  }

}
