import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  templateDrivenForm = 'This is contenteditable text for template-driven form';
  myControl = new FormControl;
  Static = false;

  text = 'Hello, World!';
  html = `<div *ngIf=${this.Static}><p>Content</p><div>`;

  handler(item) {
    console.log(item.firstChild);
  }

}
