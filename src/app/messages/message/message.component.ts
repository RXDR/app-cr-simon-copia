import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MessageComponent>) { }
  public confirmMessage: string;
  ngOnInit(): void {
  }

}
