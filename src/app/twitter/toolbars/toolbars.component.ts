import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {CustomUser} from "../../shared/models/user";

@Component({
  selector: 'app-toolbars',
  templateUrl: './toolbars.component.html',
  styleUrls: ['./toolbars.component.scss']
})
export class ToolbarsComponent implements OnInit {
  user: CustomUser
  @Output() toggleSidenav: EventEmitter<void> = new EventEmitter<void>()
  @Output() toggleTheme: EventEmitter<void> = new EventEmitter<void>()
  @Output() toggleDirection: EventEmitter<void> = new EventEmitter<void>()

  constructor(private dialog: MatDialog,
              private _snackBar: MatSnackBar,
              private router: Router,
              private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('profile', sanitizer.bypassSecurityTrustResourceUrl('assets/images/avatar.svg'));
  }

  ngOnInit():
    void {
    this.user = {
      name: 'Nedi',
      avatar: 'svg1'
    }
  }

}
