import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.css']
})
export class NewAppComponent implements OnInit {
  @Input() taskToShow: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

}
