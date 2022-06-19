import {Component, OnInit} from '@angular/core';
import { MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog.component',
  templateUrl: './dialog.component.html',
  styles: [`
    mat-icon{
      cursor: pointer;
      float: right;
    }
    .security{
      margin-right: 10px;
    }
    .mat-dialog-content{
      height: 50px;
    }
  `]
})

export class DialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}


  ngOnInit() {
  }
}
