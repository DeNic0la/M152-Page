import {Component, OnInit} from '@angular/core';
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private confirmationService: ConfirmationService) {}
  confirm() {
    this.confirmationService.confirm({
      message: 'Diese Webseite verwendet Kekse, Welche Kekse möchten sie ?',
      accept: () => {
        alert("Cokies angenommen")
      },
      reject: () =>{
        alert("Cokies abgelehnt")
      }
    });
  }

  title = 'M152-Page';

  ngOnInit(): void {
    this.confirm();
  }
}
